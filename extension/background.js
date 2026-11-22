chrome.action.onClicked.addListener(async tab => {
  const home = chrome.runtime.getURL("index.html");
  if (tab.url?.startsWith(home)) {
    await chrome.tabs.update(tab.id, {url: home});
    return;
  }
  const id = "capture:" + crypto.randomUUID();
  let capture;
  try {
    if (!/^https?:\/\//i.test(tab.url || "")) throw new Error("unsupported-tab");
    const image = await chrome.tabs.captureVisibleTab(tab.windowId, {format:"jpeg",quality:85});
    const [active] = await chrome.tabs.query({active:true,windowId:tab.windowId});
    if (active?.id !== tab.id || active.url !== tab.url) throw new Error("tab-changed");
    const url = new URL(tab.url);
    capture = {image, title:tab.title || "", host:url.hostname, time:Date.now()};
  } catch {
    await chrome.tabs.create({url:home + "?captureError=1"});
    return;
  }
  try {
    const entries = await chrome.storage.session.get(null);
    const stale = Object.keys(entries).filter(key => key.startsWith("capture:") && Date.now() - entries[key].time > 30 * 60 * 1000);
    if (stale.length) await chrome.storage.session.remove(stale);
    await chrome.storage.session.set({[id]:capture});
    await chrome.tabs.create({url:home + "?capture=" + encodeURIComponent(id)});
  } catch {
    await chrome.storage.session.remove(id);
    await chrome.tabs.create({url:home + "?captureError=1"});
  }
});

const studyMenu = "mira-open-study";
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({id:studyMenu,title:"打开 MIRA 学习台",contexts:["action"]}, () => {
    if (chrome.runtime.lastError) console.warn(chrome.runtime.lastError.message);
  });
});
chrome.contextMenus.onClicked.addListener(info => {
  if (info.menuItemId === studyMenu) chrome.tabs.create({url:chrome.runtime.getURL("index.html")});
});
