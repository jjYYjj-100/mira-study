const bank = [["Agent 与 Workflow","用自己的话解释 Agent 与 Workflow 的区别。举一个两者搭配使用的例子。",["Workflow 按预设步骤和分支执行","Agent 根据中间结果调整计划或选用工具","Agent 可以调用固定 Workflow 完成标准子流程"],["预设|固定|规则|分支","调整|动态|灵活|中间结果","子流程|搭配|混合|调用固定"],["需求明确时，固定流程有哪些优势？","还有哪些情况需要在运行过程中调整下一步？","如何让 Agent 处理意图，同时把退款步骤交给固定流程？"],["让 Agent 判断客服意图，让固定流程执行退款校验","把所有退款规则交给 Agent 临场决定","遇到任何分支都必须更换整个流程"],"新场景：报销系统的票据校验和异常处理，哪些适合固定流程，哪些适合 Agent？"],["长上下文与遗忘","上下文窗口足够大，为什么模型还是可能漏掉前面给过的信息？你会怎么改善？",["输入容量与有效利用信息是两回事","关键信息可能被干扰、淹没，或在截断与摘要时丢失","只检索相关片段，或把关键约束保存在结构化状态中"],["容量|有效|关注|利用","干扰|淹没|中间|截断|稀释|摘要","检索|RAG|结构化|状态"],["能接收很多文字，是否就能稳定使用每条约束？","一条约束还在输入里和已经被截断，区别是什么？","订单编号可能跨十轮复用，你会放在哪里？"],["把关键订单信息保存为结构化状态，按需提供给模型","只要继续加长输入，模型就一定能用好每条信息","删掉原始约束并假定摘要总会保留细节"],"新场景：一段很长的需求里，模型漏用了十分钟前给出的预算上限。你会怎么查原因？"],["Agent 的核心模块","设计一个最小的资料整理 Agent。它需要哪些模块，才能执行任务并在必要时停止？",["规划或决策负责选择下一步","状态记录任务进度，工具负责读取或写入资料","执行循环接收工具结果，并受停止条件、超时或步数预算限制"],["规划|计划|决策","状态|记忆|工具","停止|退出|超时|步数|预算"],["Agent 怎么决定先读资料还是直接归纳？","工具执行的结果如何传给下一步？","工具一直没返回有效内容时，你怎么限制执行？"],["决策、状态、工具和受限制的执行循环","只要接一个聊天界面，就能可靠执行多步任务","工具同时启动后，无需保存进度或结果"],"新场景：给一个会议纪要 Agent 画出从收到任务到停止的最小流程。"],["Agent 为什么会死循环","一个 Agent 反复重试同一个失败的工具调用。你会如何判断原因并让它停下来？",["状态可能一直没有变化，错误也可能被误当成可重试","按错误类型重试，并限制重试次数或总预算","检测重复动作或无进展，转入终止、回退或人工处理"],["状态|错误|失败","次数|上限|预算|超时","重复|无进展|终止|回退|人工"],["需要记录哪些信息，才能看出两次执行完全一样？","权限不足和服务暂时不可用，应该用同样的重试策略吗？","达到重试上限后，应该向用户返回什么？"],["区分错误类型，限制重试次数，并检测无进展","每次失败后立即用相同参数无限重试","只把详细日志关掉"],"新场景：Agent 在两个工具之间来回切换，任务进度始终为零。怎样检测并退出？"],["A2A 智能体协作","为什么两个独立 Agent 协作时需要约定通信方式？举一个任务交接的例子。",["A2A 讨论的是独立 Agent 间的互操作","发送方给出任务及必要上下文","接收方可更新任务状态并返回结果"],["互操作|独立|通信|协作","上下文|交接|委托|分派","结果|状态|进度"],["两个 Agent 的内部实现可以各自不同吗？为什么？","把查证工作交给另一个 Agent 时，最少要给哪些信息？","委托方怎样区分处理中、成功和失败？"],["约定任务输入、处理状态和结果的交互方式","要求两个 Agent 使用同一个模型和完全相同的实现","只给另一个 Agent 一个名字就能稳定交接任务"],"新场景：规划 Agent 委托资料 Agent 搜集证据。怎样设计一次信息完整的任务交接？"],["OpenClaw 与 Hermes 的选型","面试官问你怎么比较两个 Agent 产品。以截图提到的 OpenClaw 和 Hermes 为例，你会从哪些维度回答？",["比较部署和接入方式是否符合场景","区分会话上下文、长期记忆和流程复用需求","比较权限、确认机制和审计，并按实际版本核对功能"],["部署|接入|渠道","记忆|复用|会话","权限|审计|确认|版本"],["企业客服入口和个人编码环境，接入需求有什么区别？","你怎么验证产品能跨会话复用信息？","如果操作涉及敏感数据，你会检查哪些权限设计？"],["根据部署、记忆、权限与实际版本验证适配场景","仅凭产品名称决定企业或个人是否可用","只比较哪个产品宣传的功能数量多"],"新场景：一个团队要在个人实验与企业部署之间选方案。你会安排哪些验证任务？"]];
bank.push(["RAG 检索增强生成","公司售后条款常更新。你会怎么做一个有出处的问答系统？如果系统很慢，或找不到正确条款，你先查什么？",["先检索可用且有效的相关条款，再让模型依据片段回答并给出处","分开检查检索是否找对资料、生成是否用对依据","对比准确率、端到端耗时和每次成功回答的费用"],["检索|搜索|查找|查条款","依据|引用|出处|评估","耗时|成本|费用|延迟|慢"],["更新售后手册后，怎么确保找出来的是生效版本？","正确条款已经检索到了，回答还是错了。你会单独检查哪个环节？","加一轮重排序能涨一点准确率，但用户明显等更久。你用什么数据决定留不留？"],["先查有权限且生效的条款，再按条款回答，找不到时明确说无法确认","把旧条款和新条款混在一起交给模型自行猜测","每次都复制整份手册进输入，出现错答就只调回答语气"],"新场景：两份员工手册内容冲突，你怎么让系统用生效版本回答，并量化方案代价？"]);
const lessons = [["客服系统的退款规则可以提前写清，但用户常把退款、催物流、改地址塞在一句话里。系统既要听懂来意，又要保证操作符合规则。","Workflow 把可预见的步骤和分支写进程序。Agent 可以根据工具返回的结果决定下一步。两者结合时，让 Agent 判断来意，交给固定流程校验资格、执行退款。","多轮模型决策可能增加费用和响应时间，执行路径也更难复现。给 Agent 设工具权限、步数和等待上限。用真实工单比较任务完成率、转人工率和耗时，再决定哪些步骤值得交给模型。","从单一规则流程出发，只有开放输入或异常路径确实难以预先写全时，才考虑引入动态决策。对明确可写成规则的步骤，先用固定流程评估。",["Workflow（工作流）像办理业务的操作手册，分支可以提前写好。","Agent（智能体）像能根据现场情况决定先问谁、再查哪份资料的调度员。","Trade-off（工程权衡）是为了得到灵活性，愿意付出多少时间、成本和控制成本。"],["Anthropic 的 Agent 工程指南","https://www.anthropic.com/engineering/building-effective-agents"]],["客服聊了二十轮，前面说过只接受周五送达。对话装得下，系统仍可能漏用那条条件。先区分它有没有被送进模型，以及模型收到后有没有用上。","把预算、日期、订单号存成单独字段，需要时明确附上。较长的共享资料可以先查相关片段，再交给模型。研究中，部分模型在特定任务上更容易漏用位于长输入中间的信息。","加长输入会增加送入模型的文本量，可能提高费用、延迟和推理服务器的内存压力。检索要承担漏查，摘要可能丢细节。把同一个条件放到输入的不同位置跑一遍，再检查原始请求和截断记录。","短任务可以直接传原文。需要多个回合沿用的硬约束适合结构化保存。查长篇资料时，再根据召回效果决定要不要引入检索。",["上下文窗口像桌面能摊开多少张纸，放得下和每张都能仔细看是两件事。","Token（词元）是模型处理文字的基本单位，一个词可能拆成多个单位。","结构化状态像订单表上的日期栏，把关键约束放在固定位置。"],["《Lost in the Middle》原论文","https://arxiv.org/abs/2307.03172"]],["一个资料整理助手必须先读文件，再按内容决定还要查什么，最后输出总结。它需要在每一步结束后知道做过什么、接下来能做什么。","最小执行链可以是读任务和状态、决定下一步、调用工具、记录结果、判断是否结束。起步时可把状态放在内存里。如果要求重启后接着执行，就把必要进度保存下来。","每多一次模型决策就可能增加时间和费用。给任务设置总超时、最大步数和工具范围。记录每步的输入、结果与耗时，定位问题时能看出是决策错了还是工具失败。","先跑通一个可检查的任务。确认确实需要跨会话记忆、并行处理或中断恢复，再增加相应模块，并为失败恢复留出测试用例。",["MVP（最小可行版本）像先开一个窗口办通一种业务，用来验证整条路能不能走。","工具调用像请查档同事做一件具体的事，交代参数，再拿回结果。","执行循环像反复检查待办单，做一步、更新进度，并决定是否收工。"],["Anthropic 的 Agent 工程指南","https://www.anthropic.com/engineering/building-effective-agents"]],["工具报错后，Agent 按同样参数再试。状态没有推进，它又把同一个动作当成下一步。用户一直等，费用和资源还在消耗。","区分可重试的临时错误和需要修复的永久错误。设置总步数、超时和重试上限，比较前后状态；如果连续无进展，就返回已做进度并转人工或结束。","重试过少可能错过短暂故障恢复，重试过多会放大拥堵。涉及写操作时，先确认重复调用是否会重复扣款或创建工单。看平均重试次数、失败原因和超时比例，再调上限。","先加可解释的预算和退出条件。复杂任务再增加进度检测；给长任务留出合理的推进空间，防止把正常等待识别成死循环。",["退避是每次失败后多等一会再试，像占线时隔一会回拨。","幂等是重复提交同一业务请求也只产生一次业务结果，像同一张票只核销一次。","步数预算是任务最多可以做几步，像给每单一张有限次数的操作券。"],["Anthropic 的 Agent 工程指南","https://www.anthropic.com/engineering/building-effective-agents"]],["规划助手想把资料核对交给另一个团队的 Agent。双方代码和框架不同，仍需要约定如何委托、追踪进度和拿回结果。","A2A（Agent2Agent）是一种面向独立 Agent 的互操作规范。它约定如何描述能力、发送消息、跟踪任务状态及返回交付物。用统一格式，双方可以各自维护自己的实现。","跨服务多出网络等待、权限配置和故障排查。给任务设超时，仅传必要上下文，明确如何处理重复请求和版本不匹配。先用一次往返测部署和维护难度。","同一应用里的一次查询，函数或普通服务接口通常足够。多团队独立部署、需要长期约定任务交接时，可以评估 A2A 的版本兼容和接入收益。",["互操作是不同系统能按约定一起完成任务，像不同品牌手机能打电话。","Agent Card（智能体卡片）像服务名片，介绍它会做什么、怎么联系。","Artifact（交付物）是任务产出的材料，例如核对报告，像工单处理结束后附上的回执。"],["A2A v0.3.0 官方规范","https://a2a-protocol.org/v0.3.0/specification/"]],["一个团队需要客服渠道接入，另一个人想让工具协助本地编码。它们都叫 Agent 应用，但各自对部署、数据和人工确认的要求不同。","把需求变成同一组可重复的任务，让 OpenClaw 和 Hermes 各跑一遍。记录接入方式、任务成功率、能否跨会话复用信息以及哪些操作需要人工确认。","用相同任务、模型和工具权限比较调用次数、耗时、资源和结果。加一轮断线恢复和数据删除测试，算上升级、故障排查和人员学习时间。","产品功能会随版本变化。记录本次测试的版本、环境和配置。个人环境可以优先验证安装和复用体验，企业部署还需验证权限、审计和维护。",["Harness（运行控制层）像给模型配的驾驶舱，负责接工具、管理状态和限制操作。","POC（概念验证）像先做一份小样，用代表性任务看看方案能否落地。","审计像留操作流水，之后可以查谁在什么时候做过什么。"]],["公司售后规则经常更新，客服要回答「这台设备还能退吗」，还要给出具体条款。只靠模型已有的知识，很难保证用到当前版本。","RAG（检索增强生成）先从资料库查与问题相关的段落，再把段落交给模型组织答案。售后手册更新时要同步检索索引，回答时引用依据；查不到有效条款，就明确表示无法确认。","每次查询多了一段检索链路，耗时和费用要实测。索引要占存储，部分部署还占内存。文档分段、权限和失效版本都要维护。用真实问题检查能否找对条款、答案是否有证据，再看加重排序是否值得。","小且稳定的几份资料，可以先直接附原文。文档多、经常更新时，可以从关键词或向量检索起步。候选段落找得到却排太后时，再评估重排序。跨文档关系确实重要时，可试图谱方案，用同一批问题验证效果。",["RAG 像开卷考试，先翻到相关页，再根据那几页作答。","Embedding（向量表示）把文本映射成一组数字，用来找意思相近的片段，像按主题距离排书。","Reranker（重排序模型）对初筛出的候选再仔细比较，像先出候选书单，再翻目录决定先看哪本。","索引像目录，帮助快速定位资料；更新原文后，目录也要跟着更新。"],["RAG 原论文","https://arxiv.org/abs/2005.11401"]]];
const engineeringLens = [["算力与内存","并发增加时，CPU、显卡、运行内存和存储，哪个资源先不够用？","OOM 指可用内存不够。像案板摆满后，新食材无处可放。"],["速度与吞吐","单次响应等多久？同时来很多请求，系统每秒能处理多少？","延迟是个人等菜的时间，吞吐量是厨房每小时能出多少份菜。QPS 是每秒查询数。"],["总成本","模型费、服务器、存储、人工接管和日常维护加起来，每个成功任务花多少钱？","TCO 是总拥有成本，像算车价时还要算保养、保险和油费。"],["落地可行性","资料、权限、工具和人员齐了吗？能否先跑一个小样验证？","POC 是概念验证，像小批试做，再决定要不要开整条产线。"],["维护与扩展","出错能否定位？规则变化要改几处？流量涨了要加什么资源？","低耦合指模块之间的依赖较少，像更换厨房的烤箱时不用重铺全店水管。"],["可靠性与安全","失败时怎么退出、回退或转人工？谁能查看数据和执行操作？","降级像打烊前只供应简餐，部分服务可继续。鉴权像核对工牌和通行范围。"],["配置与验证","有哪些参数值得调？怎么避免只在几个例子上表现好？","调参像调火候，每次改变一个关键设置，再用同一组试菜比较效果。"]];
function renderLesson(topicIndex) {
  const generated=custom[topicIndex-builtInCount]?.generated;
  const [background, mechanism, tradeoffs, usage, terms, source] = generated ? [generated.background,generated.mechanism,generated.tradeoffs,generated.usage,generated.terms,null] : lessons[topicIndex];
  return '<div class="lesson">' +
    '<section><h3>背景与需求</h3><p>' + escapeHtml(background) + '</p></section>' +
    '<section><h3>方案怎么做</h3><p>' + escapeHtml(mechanism) + '</p></section>' +
    '<section><h3>工程取舍</h3><p>' + escapeHtml(tradeoffs) + '</p></section>' +
    '<section><h3>场景选择与演进</h3><p>' + escapeHtml(usage) + '</p></section>' +
    '</div><details class="study-notes" open><summary>术语与比喻</summary>' + list(terms) + '</details>' +
    '<details class="study-notes"><summary>工程检查表 · 七个维度</summary>' +
    engineeringLens.map(([title, question, analogy]) => '<section><h3>' + escapeHtml(title) + '</h3><p>' + escapeHtml(question) +
      '</p><p class="muted">' + escapeHtml(analogy) + '</p></section>').join("") + '</details>' +
    (source ? '<p class="reference"><a target="_blank" rel="noopener noreferrer" href="' + escapeHtml(source[1]) + '">' + escapeHtml(source[0]) + '</a></p>' : '');
}
const $ = id => document.getElementById(id);
const customKey = "mira-custom-topics-v1";
const builtInCount = bank.length;
let custom = readCustom();
let filter = "";
let editIndex = null;
let saveError = "";

function readCustom() {
  try {
    const entries = JSON.parse(localStorage.getItem(customKey));
    return Array.isArray(entries) ? entries : [];
  } catch { return []; }
}
function customBank(entry) {
  if (entry.generated) {
    const lesson=entry.generated;
    const keywords=lesson.keywords.map(items=>items.map(term=>term.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|"));
    return [entry.title,lesson.question,lesson.points,keywords,lesson.followups,lesson.choices,lesson.review,lesson.choiceQuestion];
  }
  return [
    entry.title,
    '「' + entry.title + '」是在什么场景下解决什么问题的？用自己的话说清它怎么做，再说一个代价。',
    [], [], ['换一个场景。如果用户量翻倍、预算减半或规则频繁变化，你会继续用「' + entry.title + '」吗？说明选择和验证方法。'], [],
    '面试官让你给团队新人解释「' + entry.title + '」。请给出一个新例子，说清它解决的难题、主要机制，以及什么时候该换方案。'
  ];
}
function syncBank() {
  bank.splice(builtInCount, bank.length - builtInCount, ...custom.map(customBank));
}
syncBank();
const isCustom = id => id >= builtInCount;
const hasRubric = id => !isCustom(id) || Boolean(custom[id-builtInCount]?.generated);

function noteMarkup(id) {
  const item = custom[id - builtInCount];
  return (item.notes ? '<h3>飞书摘录或学习笔记</h3><blockquote>' + escapeHtml(item.notes) + '</blockquote>' :
    '<p class="muted">目前只有标题。可以先回飞书读一遍，或者补一段笔记。</p>') +
    '<details class="study-notes"><summary>用这些问题拆解材料</summary>' +
    list(['背景与需求：之前怎么做？在哪种场景开始吃力？','方案机制：它改变了哪个步骤，解决了什么？','工程取舍：速度、成本、资源或维护，哪两项最影响选型？','场景与演进：何时适合用？条件变了要怎么调整？','术语与比喻：选一个黑话，用一句白话和一个例子解释。']) +
    '</details><details class="study-notes"><summary>工程检查表 · 七个维度</summary>' +
    engineeringLens.map(([title, question, analogy]) => '<section><h3>' + escapeHtml(title) + '</h3><p>' + escapeHtml(question) +
      '</p><p class="muted">' + escapeHtml(analogy) + '</p></section>').join("") + '</details>';
}
function openManage(id = null) {
  stopTimer();
  stopSpeech();
  editIndex = id;
  saveError = "";
  page = "manage";
  draw();
}
function saveCustom(event) {
  event.preventDefault();
  const edited = editIndex !== null;
  const title = $("new-title")?.value.trim();
  const notes = $("new-notes")?.value.trim() || "";
  const batch = $("new-batch")?.value || "";
  const names = batch.split(/\r?\n/).map(line => line.trim().replace(/^\s*[-*•]\s+|^\d+[.、．)）]\s*/u,"").trim()).filter(Boolean);
  if (!title && (edited || notes || !names.length)) {
    $("manage-status").textContent = notes ? "请先为这段材料填写标题。" : "请填写标题，或者粘贴一列标题。";
    return;
  }
  const latest = readCustom();
  const updated = [...latest];
  const position = edited ? editIndex - builtInCount : -1;
  const used = new Set([...bank.slice(0, builtInCount).map(item => item[0]), ...updated.filter((_, id) => id !== position).map(item => item.title)].map(name => name.toLocaleLowerCase()));
  let first = position;
  let skipped = 0;
  let added = 0;
  if (edited && !updated[position]) {
    $("manage-status").textContent = "这个主题已无法读取，请重新打开学习台。";
    return;
  }
  if (title) {
    if (used.has(title.toLocaleLowerCase())) {
      $("manage-status").textContent = "已经有同名主题。可以搜索标题后修改原来的笔记。";
      return;
    }
    used.add(title.toLocaleLowerCase());
    if (edited) updated[position] = {...updated[position], title, notes};
    else { first = updated.length; updated.push({title, notes}); added++; }
  }
  for (const name of names) {
    const normalized = name.toLocaleLowerCase();
    if (used.has(normalized)) { skipped++; continue; }
    used.add(normalized);
    if (first < 0) first = updated.length;
    updated.push({title:name, notes:""});
    added++;
  }
  if (first < 0) { $("manage-status").textContent = "这些标题已经在主题列表里。"; return; }
  try { localStorage.setItem(customKey,JSON.stringify(updated)); }
  catch { $("manage-status").textContent = "浏览器无法保存这些主题，请保留输入并检查存储空间或设置。"; return; }
  custom = updated;
  syncBank();
  filter = "";
  saveError = edited ? "已更新主题。" : "已添加 " + added + " 个主题。" + (skipped ? " 已略过 " + skipped + " 个重复标题。" : "");
  reset(builtInCount + first);
}
function drawManage() {
  const item = isCustom(editIndex) ? custom[editIndex - builtInCount] : null;
  $("main").innerHTML = '<h2>' + (item ? "编辑主题" : "新增学习主题") + '</h2>' +
    '<form id="topic-form"><label for="new-title">主题标题</label>' +
    '<input class="field" id="new-title" type="text" maxlength="160" placeholder="例如 LangGraph 的 State、Node 与 Edge" value="' + escapeHtml(item?.title || "") + '">' +
    '<label for="new-notes">飞书摘录或自己的笔记（选填）</label><textarea id="new-notes" placeholder="可以只保存标题，读到这一节再回来补。">' +
    escapeHtml(item?.notes || "") + '</textarea>' +
    (item ? "" : '<details class="study-notes"><summary>批量导入标题</summary><label for="new-batch">粘贴飞书目录，每行一个标题</label><textarea id="new-batch" placeholder="LangGraph 的 State、Node 与 Edge\nLangGraph 为什么使用状态图\n如何做任务中断与恢复"></textarea></details>') +
    '<p class="status" id="manage-status" role="status"></p><div class="actions"><button class="primary" type="submit">保存主题</button><button id="cancel-edit" type="button">返回练习</button></div></form>';
  $("topic-form").onsubmit = saveCustom;
  $("cancel-edit").onclick = () => reset(index);
}
function drawTopics() {
  const needle = filter.trim().toLocaleLowerCase();
  $("topics").innerHTML = bank.map((item,id) => !item[0].toLocaleLowerCase().includes(needle) ? "" :
    '<button data-topic="' + id + '" aria-pressed="' + (page === "practice" && index === id) + '">' + escapeHtml(item[0]) + '</button>').join("") ||
    '<p class="muted">没有匹配主题。</p>';
  document.querySelectorAll("[data-topic]").forEach(control => control.onclick = () => { saveError = ""; reset(Number(control.dataset.topic)); });
}

const key = "mira-study-v1";
let saved = {};
let storageError = false;
try { saved = JSON.parse(localStorage.getItem(key)) || {}; } catch { storageError = true; }
const steps = ["学习", "闭卷作答", "反馈", "追问", "复习"];
const delays = [0, 1, 3, 7];
let index = 0, page = "practice", phase = "learn", duration = 60, seconds = 60;
let timer, end, speech, draft = "", format = "text", selected = "", reviewing = false, result, follow;
const escapeHtml = value => String(value).replace(/[&<>"']/g, symbol => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[symbol]));
const list = values => '<ul>' + values.map(value => '<li>' + escapeHtml(value) + '</li>').join("") + '</ul>';
const button = (id, title, primary = false) => '<button id="' + id + '"' + (primary ? ' class="primary"' : '') + '>' + title + '</button>';
const today = () => Date.now();
const tomorrow = days => { const date = new Date(); date.setDate(date.getDate() + days); date.setHours(0,0,0,0); return date.getTime(); };
const dateText = date => new Intl.DateTimeFormat("zh-CN",{month:"long",day:"numeric"}).format(date);

function stopTimer() { clearInterval(timer); }
function stopSpeech() { if (speech) { const active = speech; speech = null; active.abort(); } }
function reset(topic) {
  stopTimer();
  stopSpeech();
  index = topic;
  page = "practice";
  phase = "learn";
  reviewing = false;
  draw();
}
function countdown() {
  seconds = Math.max(0, Math.ceil((end - today()) / 1000));
  $("clock").textContent = Math.floor(seconds / 60) + ":" + String(seconds % 60).padStart(2, "0");
  $("clock").classList.toggle("rush", seconds <= 10);
  $("fill").classList.toggle("rush", seconds <= 10);
  $("fill").style.width = (seconds / duration * 100) + "%";
  if (seconds === 0) { stopTimer(); $("time-status").textContent = "时间到，可以继续作答。"; }
}
function start(next) {
  stopTimer();
  phase = next;
  draft = "";
  selected = "";
  format = "text";
  end = today() + duration * 1000;
  draw();
  countdown();
  timer = setInterval(countdown, 200);
  $("answer")?.focus();
}
function options(topic) {
  const order = [[1,0,2],[2,1,0],[0,2,1]][index % 3];
  return order.map((item, position) => '<label><input type="radio" name="choice" value="' + item + '"' + (selected === String(item) ? ' checked' : '') + '>' + "ABC"[position] + ". " + escapeHtml(topic[5][item]) + '</label>').join("");
}
function save(stage) {
  const prior = saved[index];
  const level = stage === "again" ? 0 : reviewing && stage === "steady" ? Math.min((prior?.level ?? 0) + 1,3) : 1;
  saved[index] = {level, due: level ? tomorrow(delays[level]) : today(), answer: result.answer, follow, choice: result.choice};
  try { localStorage.setItem(key,JSON.stringify(saved)); storageError = false; } catch { storageError = true; }
  phase = "done";
  draw();
}
function submit(skipped = false) {
  const value = format === "choice" ? selected : draft.trim();
  if (!value && !skipped) { $("input-status").textContent = "先作答，或者点「想不起来」。"; return; }
  stopTimer();
  stopSpeech();
  if (phase === "follow") {
    follow = skipped ? "" : value;
    phase = "assess";
  } else {
    const topic = bank[index];
    const choice = format === "choice" && !skipped;
    const answer = skipped ? "" : choice ? topic[5][Number(value)] : value;
    const hits = choice ? [] : topic[3].map(pattern => new RegExp(pattern,"i").test(answer));
    const gap = choice ? (value === "0" ? 2 : 0) : hits.indexOf(false);
    result = {answer, choice, correct: value === "0", hits, point: !hasRubric(index) ? 0 : gap < 0 ? 2 : gap};
    follow = "";
    phase = "feedback";
  }
  draw();
  $("heading")?.focus();
}
function voice() {
  if (speech) { speech.stop(); return; }
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    $("input-status").textContent = "当前浏览器无法直接识别。可在输入框里按 Win + H 使用系统听写。";
    $("answer").focus();
    return;
  }
  const active = new Recognition();
  const base = draft.trim();
  let spoken = "";
  speech = active;
  active.lang = "zh-CN";
  active.continuous = true;
  active.interimResults = false;
  active.onresult = event => {
    if (speech !== active) return;
    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) spoken += event.results[i][0].transcript;
    }
    draft = [base, spoken].filter(Boolean).join(" ");
    $("answer").value = draft;
  };
  active.onerror = () => {
    if (speech === active) $("input-status").textContent = "语音识别未完成。可检查麦克风权限，或用 Win + H 听写。";
  };
  active.onend = () => {
    if (speech !== active) return;
    speech = null;
    $("mic").textContent = "开始说话";
  };
  try {
    active.start();
    $("mic").textContent = "结束语音";
    $("input-status").textContent = "正在听。结束语音后可检查转写再提交。";
  } catch {
    speech = null;
    $("input-status").textContent = "无法启动识别。可用 Win + H 听写。";
  }
}
function drawAnswer(topic) {
  const choiceAvailable = phase === "answer" && !reviewing && hasRubric(index);
  const choices = format === "choice";
  $("main").innerHTML = '<div class="bar"><span class="progress">' + (reviewing ? "复习 · " : "") + (phase === "follow" ? "追问" : "闭卷作答") + '</span><span class="clock" id="clock"></span></div><div class="track" aria-hidden="true"><div id="fill"></div></div>' +
    '<h2 id="heading" tabindex="-1">' + escapeHtml(phase === "follow" ? topic[4][result.point] : choices ? (topic[7] || topic[0] + " · 哪项做法最合理？") : reviewing ? topic[6] : topic[1]) + '</h2><div class="modes">' +
    [["text","打字"], ...(choiceAvailable ? [["choice","选择题"]] : []), ["voice","语音"]].map(([mode,label]) => '<button data-format="' + mode + '" aria-pressed="' + (format === mode) + '">' + label + '</button>').join("") + '</div>' +
    (choices ? '<div class="choices" role="radiogroup" aria-label="答案选项">' + options(topic) + '</div>' : '<textarea id="answer" aria-label="你的回答" placeholder="按面试时的方式，用自己的话回答。">' + escapeHtml(draft) + '</textarea>') +
    (format === "voice" ? '<div>' + button("mic","开始说话") + ' <small>语音转写取决于浏览器与系统权限。</small></div>' : '') +
    '<p class="status" id="time-status" role="status"></p><p class="status" id="input-status" role="status"></p><div class="actions">' +
    button("submit","提交回答",true) + button("skip","想不起来") + '</div>';
  document.querySelectorAll("[data-format]").forEach(control => control.onclick = () => {
    stopSpeech();
    format = control.dataset.format;
    drawAnswer(topic);
    countdown();
    (format === "text" ? $("answer") : format === "voice" ? $("mic") : document.querySelector('input[name="choice"]'))?.focus();
  });
  if ($("answer")) {
    $("answer").oninput = event => { draft = event.target.value; };
    $("answer").onkeydown = event => { if (event.key === "Enter" && event.ctrlKey && !event.isComposing) submit(); };
  }
  document.querySelectorAll('input[name="choice"]').forEach(input => input.onchange = () => { selected = input.value; });
  if ($("mic")) $("mic").onclick = voice;
  $("submit").onclick = () => submit();
  $("skip").onclick = () => submit(true);
}
function drawReview() {
  const entries = Object.entries(saved).sort((a,b) => a[1].due - b[1].due);
  const due = entries.filter(([, item]) => item.due <= today()).length;
  $("main").innerHTML = '<h2>复习队列</h2><p class="muted">' + (entries.length ? due + " 个主题待复习。复测使用新场景。" : "完成一轮练习后，主题会出现在这里。") + '</p>' +
    entries.map(([id,item]) => '<div class="record"><div class="bar"><div><strong>' + escapeHtml(bank[id][0]) + '</strong><br><small>' + (item.due <= today() ? "现在可复习" : dateText(item.due) + "复习") + '</small></div><button data-review="' + id + '">' + (item.due <= today() ? "开始复测" : "提前复测") + '</button></div>' +
    '<details><summary>上次作答</summary><blockquote>' + escapeHtml(item.answer || "主问未作答") + '</blockquote>' +
    (item.follow ? '<small>追问</small><blockquote>' + escapeHtml(item.follow) + '</blockquote>' : '') + '</details></div>').join("");
  document.querySelectorAll("[data-review]").forEach(control => control.onclick = () => {
    index = Number(control.dataset.review);
    page = "practice";
    reviewing = true;
    start("answer");
  });
}
function draw() {
  const topic = bank[index];
  $("practice").setAttribute("aria-pressed",page === "practice");
  $("review").setAttribute("aria-pressed",page === "review");
  if ($("topic-search").value !== filter) $("topic-search").value = filter;
  drawTopics();
  if (page === "manage") { drawManage(); return; }
  if (page === "review") { drawReview(); return; }
  if (phase === "answer" || phase === "follow") { drawAnswer(topic); return; }
  const meter = '<div class="progress">' + steps.map((label,i) => i === ({learn:0,feedback:2,assess:3,done:4}[phase]) ? '<b>' + label + '</b>' : label).join(" · ") + '</div>';
  let content;
  if (phase === "learn") {
    content = '<h2>' + escapeHtml(topic[0]) + '</h2>' +
      (saveError ? '<p class="status" role="status">' + escapeHtml(saveError) + '</p>' : '') +
      (hasRubric(index) ? renderLesson(index) : '') +
      (isCustom(index) ? button("edit-topic","编辑标题或笔记") + noteMarkup(index) : '') + '<p class="muted">闭卷时试着讲清场景、方案、代价和你的选择。</p>' +
      '<div class="actions push"><label for="duration">每题限时</label><select id="duration">' + [30,60,90].map(time => '<option value="' + time + '"' + (duration === time ? " selected" : "") + '>' + time + ' 秒</option>').join("") +
      '</select>' + button("start","开始计时",true) + '</div>';
  } else if (phase === "feedback") {
    const seen = topic[2].filter((_,i) => result.hits[i]);
    const missing = topic[2].filter((_,i) => !result.hits[i]);
    content = '<h2 id="heading" tabindex="-1">看反馈</h2>' + (result.answer ? '<small>你的回答</small><blockquote>' + escapeHtml(result.answer) + '</blockquote>' : '<p>这题先看要点，再用追问试一次。</p>') +
      (!hasRubric(index) ? '<h3>对照资料自查</h3>' + list(['有没有说明原来的做法遇到了什么困难？','有没有讲清机制，并用一个具体场景举例？','有没有指出代价、适用边界，以及如何验证？']) + noteMarkup(index) :
      result.choice ? '<h3>' + (result.correct ? "选对了" : "这次选偏了") + '</h3><p>' + escapeHtml(topic[5][0]) + '</p>' :
       (seen.length ? '<h3>回答里提到的要点</h3>' + list(seen) : '') + (missing.length ? '<h3>回看这些要点</h3>' + list(missing) : '') +
       '<small>按关键词提示，请对照意思自评。</small>') +
      '<div class="push">' + button("follow","开始追问",true) + '</div>';
  } else if (phase === "assess") {
    content = '<h2 id="heading" tabindex="-1">对照并安排复习</h2><p>' + escapeHtml(topic[4][result.point]) + '</p>' +
      (follow ? '<small>你的追问回答</small><blockquote>' + escapeHtml(follow) + '</blockquote>' : '<p class="muted">这道追问还没答出来。</p>') +
      (!hasRubric(index) ? '<h3>自评</h3><p>你的选择有没有依据？有没有给出至少一个可观察的验证指标？</p>' : '<h3>可用的回答要点</h3>' + list([topic[2][result.point]])) +
      '<div class="actions push">' + button("again","还卡住，今天再练") + button("steady","能独立讲清，加入复习",true) + '</div>';
  } else {
    const item = saved[index];
    content = '<h2>这一轮已完成</h2><p>' + (item.level ? '下次复习在 ' + dateText(item.due) + '，届时用新场景闭卷作答。' : '已加入今天的复习队列。') + '</p>' +
      (storageError ? '<p class="status" role="status">浏览器无法保存记录。本次记录只保留到页面关闭。</p>' : '') +
      '<div class="actions push">' + button("next","下一主题",true) + button("queue","查看复习队列") + '</div>';
  }
  $("main").innerHTML = meter + content;
  if ($("edit-topic")) $("edit-topic").onclick = () => openManage(index);
  if ($("duration")) $("duration").onchange = () => { duration = Number($("duration").value); };
  if ($("start")) $("start").onclick = () => start("answer");
  if ($("follow")) $("follow").onclick = () => start("follow");
  if ($("again")) $("again").onclick = () => save("again");
  if ($("steady")) $("steady").onclick = () => save("steady");
  if ($("next")) $("next").onclick = () => reset((index + 1) % bank.length);
  if ($("queue")) $("queue").onclick = openReview;
}
function openReview() { stopTimer(); stopSpeech(); page = "review"; draw(); }
$("add-topic").onclick = () => openManage();
$("topic-search").oninput = event => { filter = event.target.value; drawTopics(); };
$("practice").onclick = () => { if (page !== "practice") { saveError = ""; reset(index); } };
$("review").onclick = openReview;
draw();
