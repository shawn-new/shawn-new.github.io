export interface ArticleContent {
  title: string;
  scenario: {
    label: string;
    english: string;
    chinese: string;
  };
  points: {
    label: string;
    items: {
      titleEn: string;
      titleZh: string;
      english: string;
      chinese: string;
    }[];
  };
  conclusion: {
    label: string;
    english: string;
    chinese: string;
  };
}

export interface Article {
  id: string;
  titleEn: string;
  titleZh: string;
  content: ArticleContent;
}

export const articles: Article[] = [
  {
    id: "engineering-binary",
    titleEn: "The Engineering Binary: Product vs. Infrastructure",
    titleZh: "工程师的二元演变：产品与基座",
    content: {
      title: "Article 1: The Engineering Binary",
      scenario: {
        label: "Scenario: When 70 Engineers Can’t Ship a Feature / 场景：70 个工程师做不出一个功能",
        english: "Here’s a pattern I keep seeing inside large companies. A Fortune-100 firm decides to build an internal AI assistant for routing customer requests. They staff it the way they’ve always staffed things: 50 backend engineers, 20 frontend engineers, a platform team, three layers of management. Two years and roughly $100M of fully loaded cost later, the system has been quietly shelved. Nobody owned the user problem end-to-end; each layer shipped its components on time, and the components never composed into a product. The \"full-stack engineer\" label was supposed to fix this, but it ended up as a job title rather than a way of working. What’s actually emerging in AI-native teams is a sharper split into two roles: infrastructure engineers, who build the platform, and product engineers, who build the thing customers touch.",
        chinese: "我反复见到这样一个模式。一家世界 100 强公司决定做一个内部 AI 助手，用来自动分发客户请求。他们按一贯的方式配人：50 名后端、20 名前端、一个平台团队、三层管理。两年和约 1 亿美元的综合成本之后，这个系统被悄悄下线了。没有人端到端地对用户问题负责；每一层都按时交付了自己的组件，而这些组件从来没有拼成一个产品。“全栈工程师”这个标签本来是用来解决这个问题的，结果它只是变成了一种职位名称，而不是一种工作方式。AI 原生团队里真正在浮现的，是另一种更清晰的分工：构建平台的基座工程师，以及构建用户能直接触达的产品的产品工程师。"
      },
      points: {
        label: "The Core Evolution / 核心演变",
        items: [
          {
            titleEn: "1. The Implementation Layer Is Collapsing",
            titleZh: "1. 实现层正在塌缩",
            english: "For the past twenty years, most engineering work has really been implementation: turning a clear spec into working code. CRUD endpoints, form state, build configs, wiring services together. Tools like Cursor, Claude Code, and v0 don’t make that work disappear, but they compress it dramatically — a sprint of UI work becomes an afternoon, a fresh service scaffold becomes a single prompt. The compression frees product engineers to move up the stack. Their unit of work stops being a Jira ticket and starts being a user outcome. Instagram at acquisition (13 employees serving 30 million users in 2012) used to be the example people pointed to when they talked about leverage. AWS abstracted away the \"how\" of infrastructure so a tiny team could obsess over the \"what.\" AI is now doing the same thing for application code itself — and the engineers who own a problem from interface to deploy are the ones whose leverage compounds.",
            chinese: "过去二十年里，大多数工程工作其实是“实现”：把一份清晰的需求翻译成可运行的代码。CRUD 接口、表单状态、构建配置、把几个服务接起来。Cursor、Claude Code、v0 这类工具并没有让这些工作消失，但把它们大幅压缩了——原本一个迭代周期才能做完的 UI 工作，现在一个下午就能搞定；一个完整的新服务脚手架，一句 prompt 就能拉起来。这种压缩把产品工程师从实现里解放出来，让他们往栈上走：工作单位不再是一张工单，而是一个用户结果。2012 年 Instagram 被收购时只有 13 个人却服务着 3000 万用户——这件事过去常被当作“杠杆”的典型例子。当年是 AWS 把“基础设施怎么搭”这件事抽象掉了，小团队才能死磕“要做什么”。AI 现在正对应用代码本身做同样的事，而那些能从界面一路负责到部署的工程师，会不断把这种杠杆叠加起来。"
          },
          {
            titleEn: "2. Infrastructure: Selling Guarantees, Not Code",
            titleZh: "2. 基座：卖的是保证，不是代码",
            english: "If product engineers are moving up the stack, who owns the foundation? That’s the infrastructure engineer’s job, and it looks less like writing code and more like designing guarantees. Snowflake doesn’t sell you a database; it sells you the guarantee that your warehouse will scale without you thinking about it. Stripe doesn’t sell you payment code; it sells you the guarantee that money will move correctly across 135+ currencies and a hundred regulators. The bar for this work is rising fast. The things worth building at the infrastructure layer are the ones that ten thousand other companies will compose against. If your platform only serves your own product team, you’re not building infrastructure — you’re building plumbing, and AI will write that plumbing for twenty dollars a month. Real infra means owning a primitive that other people’s products depend on.",
            chinese: "如果产品工程师都在向上走，那谁来做下面的地基？这是基座工程师的工作，而它看起来越来越不像“写代码”，更像“设计保证”。Snowflake 卖的不是一个数据库，它卖的是“你的仓库会自动扩展，你不用操心”这个保证。Stripe 卖的不是支付代码，它卖的是“钱会在 135 种以上的货币、上百个监管方之间正确流动”这个保证。这一层的门槛在快速抬高。值得在基座层做的东西，是那些会被一万家公司拿去拼接的东西。如果你的平台只服务自家产品团队，那你做的不是基座，是“管道”——而管道这种活，AI 一个月二十美金就能写。真正的基座，是你拥有了一个别人的产品离不开的原语。"
          },
          {
            titleEn: "3. The FDE: When Delivery Itself Becomes the Moat",
            titleZh: "3. FDE：当“交付”本身变成护城河",
            english: "There’s a third role bridging these two worlds: the Forward Deployed Engineer, the model Palantir built its business on. The cleanest way to see it is to put it next to traditional consulting. A McKinsey engagement ends with a deck and an invoice. An FDE engagement ends with a system running in your environment, integrated against your messy data, with someone on the hook for whether it actually moves a number. Palantir’s revenue per employee runs in the high six figures — multiples above traditional consulting — because FDEs aren’t billing hours. They’re embedding a productized platform into a specific customer reality and owning the outcome. As LLMs get cheaper, advice gets cheaper with them: any executive can get a competent strategy memo for free. What stays expensive is the person who can walk into a Fortune 500’s data swamp and have something working in production by Monday.",
            chinese: "还有第三种角色，把上面两个世界连起来——前线部署工程师 (FDE)，Palantir 把整个商业模式建在这上面。最清晰的看法是把它和传统咨询放在一起对比。麦肯锡的项目以一份 deck 和一张账单结束。FDE 的项目以一套真正跑在你环境里的系统结束——它接到你那一团乱麻的数据上，并且有人在背后为“这东西是否真的能撬动一个数字”负责。Palantir 的人均营收在高六位数美元，是传统咨询的好几倍，因为 FDE 不卖工时，而是把一个产品化的平台嵌进特定客户的现实里，并对结果负责。LLM 越便宜，“给建议”这件事就越便宜：任何高管都能免费拿到一份还不错的战略备忘录。还在涨价的，是那个能走进世界 500 强一团乱麻的数据沼泽，并且周一就能让东西在生产环境里跑起来的人。"
          }
        ]
      },
      conclusion: {
        label: "Conclusion: The Barbell, Not the Middle / 总结：杠铃两端，不要中间",
        english: "The middle of the stack is hollowing out. Over the next five years, reporting chains will compress and the scope of any individual who can hold the full loop in their head will expand. Two paths look durable. Go deep on the architectural primitives that platforms are built from, or go wide on the product loop from user problem to shipped feature. Both have real moats. The dangerous place to stand is the middle — the engineer whose job is mostly translating a spec into code, because that’s exactly the layer AI is automating away.",
        chinese: "栈的中间正在被掏空。未来五年里，汇报链会进一步压扁，而那些能把整个闭环装在脑子里的个体，能管的事会被极大放大。两条路看起来都站得住。要么往深处走，去做平台所依赖的那些架构原语；要么往宽处走，去对从用户问题到上线功能的整个产品闭环负责。这两条路都有真实的护城河。真正危险的位置是中间——那些主要工作是把需求文档翻译成代码的工程师，因为这一层恰恰是 AI 正在自动化掉的那一层。"
      }
    }
  },
  {
    id: "saas-endgame",
    titleEn: "The SaaS Endgame: From Seat-Based to Usage-Based ROI",
    titleZh: "SaaS 的终局：从“按头收费”到“按量结算”",
    content: {
      title: "Article 2: The SaaS Endgame",
      scenario: {
        label: "Scenario: The Quiet License / 场景：越来越安静的账号",
        english: "Here’s the conversation no SaaS CRO wants to have. A Fortune 500 customer rolls out an in-house AI agent on top of your platform. Three months later, 40% of their seats are logging in once a month — not because employees quit, but because the agent is doing the work. At renewal, they ask for a 40% cut in seat count. The work didn’t go away; it just stopped flowing through humans. This is the structural problem with seat-based pricing in an AI world. Your bill is anchored to headcount, but the value your software produces has decoupled from headcount. Every efficiency gain your customer extracts shows up as a churn risk on your side.",
        chinese: "这是任何一家 SaaS 公司 CRO 都不想接的电话。一家世界 500 强客户在你的平台之上接入了一个内部 AI 智能体。三个月后，他们 40% 的账号每月只登录一次——不是因为员工离职，而是因为智能体在替他们干活。续约时客户打来电话，要求把账号数砍掉 40%。活儿没消失，只是不再经过人手了。这就是按账号收费 (per-seat) 在 AI 时代的结构性问题。你的账单锚定在人头数上，但软件创造的价值已经和人头数脱钩。客户每挤出一份效率，对你来说就是一份流失风险。"
      },
      points: {
        label: "The Value Shift / 价值转移",
        items: [
          {
            titleEn: "1. Seat-Based Pricing Has Become a Conflict of Interest",
            titleZh: "1. 按账号收费已经变成利益冲突",
            english: "For two decades, seat pricing was a clean proxy for value: more users meant more workflows, which meant more business. AI breaks the proxy. When one agent resolves a thousand support tickets a day, the headcount that used to justify the seat count just isn’t there. Worse, vendor and customer are now pulling in opposite directions: the customer wants every workflow automated; the vendor needs every workflow to keep flowing through a logged-in human. That tension is why incumbents are migrating to usage-based billing — pricing by tokens consumed, transactions processed, agent runs executed, or any unit that scales with the work AI is actually doing. When growth in legacy \"sales cloud\" line items stalls, it usually isn’t a usage problem. The product is being used. The seat just stopped being the unit of value.",
            chinese: "过去二十年里，按账号收费是衡量价值的一个还算靠谱的替代指标：用户越多，意味着工作流越多，业务量越大。AI 把这个替代关系破坏掉了。当一个智能体一天就能解决一千张工单，过去用来撑起账号数的那批岗位本来就没了。更糟的是，供应商和客户开始往相反方向用力：客户想把每一个工作流都自动化；供应商需要每一个工作流都还经由一个登录态的真人。这就是为什么一批老牌厂商在转向按量付费 (UBB) ——按消耗的 token、处理的交易、跑过的智能体次数来定价，总之换成一个能跟着 AI 实际干的活儿一起扩张的单位。当传统“销售云”这类业务增长停滞时，通常并不是因为客户不用了。产品依然在被使用，只是“账号”不再是价值的计量单位。"
          },
          {
            titleEn: "2. SAP’s RISE: Trading Licenses for Consumption",
            titleZh: "2. SAP 的 RISE：用许可换消耗",
            english: "SAP, the textbook giant of perpetual licenses, is in the middle of a hard pivot from on-prem licensing to consumption. RISE with SAP and the Business Technology Platform (BTP) are the vehicles. The interesting mechanic is BTP’s consumption model and its Full Use Equivalent (FUE) unit, which collapses dozens of distinct consumption metrics — API calls, runtime hours, AI inference, integration messages — into a single normalized unit a CFO can budget against. The shift in worldview is bigger than the pricing change: customers stop paying for the right to access software and start paying for outcomes the software produces on their behalf. For any vendor whose roadmap involves AI doing more of the work, this isn’t optional. If your software automates the logic, you have to charge for the transaction, not the access — otherwise the value you create lands on someone else’s P&L.",
            chinese: "SAP 这种永久授权时代的教科书级巨头，正处在一次很痛的转型之中——从本地部署许可转向消耗模式。承载这次转型的是 RISE with SAP 和 Business Technology Platform (BTP)。其中比较有意思的机制是 BTP 的消耗计费模式，以及它的“全使用当量 (Full Use Equivalent, FUE)”单位：把几十种各不相同的消耗指标——API 调用、运行时时长、AI 推理、集成消息——折算成一个 CFO 能拿来做预算的统一单位。世界观上的变化比定价变化大：客户从“为访问软件的权利付费”，变成“为软件代为产出的结果付费”。对任何把 AI 越来越多地纳入路线图的厂商来说，这不是可选项。如果你的软件已经把业务逻辑自动化了，你就必须按“交易”而不是按“访问”收费——否则你创造的价值会落在别人的损益表上。"
          },
          {
            titleEn: "3. Solving the Bill-Shock Problem",
            titleZh: "3. 解决“账单焦虑”问题",
            english: "The biggest objection to usage-based billing isn’t philosophical, it’s psychological. If every action feels like it costs five dollars, employees stop taking actions and adoption craters. Snowflake cracked this early with prepaid credits, per-team consumption budgets, and a console where any engineer can see what their query just cost. The result is consumption that stays voluntary and predictable — and Snowflake’s net revenue retention has consistently sat well above 130%, the strongest signal you’ll find that customers expand because the bill makes sense, not in spite of it. The lesson generalizes: hard caps per team, departmental quotas, query- or agent-level cost telemetry, and prepaid commits with a soft floor make AI consumption feel like a utility — metered, transparent, governable. Skip these controls and even a great usage-based product gets killed by the first quarter-end invoice nobody saw coming.",
            chinese: "按量付费最大的反对声不是哲学层面的，而是心理层面的。如果每一次操作都让人觉得在花五美金，员工就不再点了，使用率会立刻塌掉。Snowflake 很早就破解了这一点：预付费积分、按团队的消耗预算，再加上一个让任何工程师都能看到“刚才那条查询花了多少钱”的控制台。结果是消耗变得自发又可预测——Snowflake 的净收入留存率长期稳定在 130% 以上，这是“客户因为账单合理而扩张、而不是不顾账单地扩张”的最强信号。这个经验是可以推广的：按团队的硬上限、部门配额、每条查询或每次智能体调用的成本观测、加上带最低消耗的预付费承诺，能让 AI 消耗体验像一种公用事业——计量、透明、可治理。跳过这些控制，再好的按量付费产品也会被第一份没人预见到的季末账单干掉。"
          }
        ]
      },
      conclusion: {
        label: "Conclusion: Value over Volume / 总结：价值高于数量",
        english: "The next generation of SaaS won’t sell you access; it will sell you outcomes, and it will share both the upside and the risk of what the AI actually delivers. The buyer’s question is shifting from \"how many people have access?\" to \"how much business value did this generate?\" That reframing has implications all the way down — into how you instrument your product, how you write your contracts, how you forecast revenue, how you plan your roadmap. Vendors whose pricing still answers the old question are already on the wrong side of the curve.",
        chinese: "下一代 SaaS 卖的不再是“访问权”，而是“结果”，并且会和客户一起分享 AI 实际产出的收益与风险。买方的问题正从“多少人有权限？”变成“它产生了多少业务价值？”。这种重新定义会一路向下渗透——影响你怎么对产品做埋点、怎么签合同、怎么做收入预测、怎么写路线图。那些定价还停留在回答“老问题”的厂商，已经站在了曲线错的那一边。"
      }
    }
  },
  {
    id: "ai-native-moats",
    titleEn: "Moats in the AI Native Era: The Trinity of Data, Insight, and Workflow",
    titleZh: "AI Native 时代的护城河：三位一体",
    content: {
      title: "Article 3: The AI Native Moat",
      scenario: {
        label: "Scenario: Sherlocked in 48 Hours / 场景：48 小时被“收编”",
        english: "Here’s a story everyone in AI-native product knows by now. A startup launches a polished GPT-powered tool for legal summarization. Forty-eight hours later, OpenAI ships Custom GPTs and a competitive feature lands inside ChatGPT itself, free. The startup’s wedge collapses overnight. This is the modern version of being \"Sherlocked\" — the term comes from Apple bundling features that crushed third-party tools — and it’s the default outcome for any product that’s a thin wrapper over a foundation model. If your differentiation can be reproduced by a prompt and a few weeks of platform work from the model lab itself, you don’t have a moat; you have a countdown timer. To survive the AI-native era, you have to own at least one of three things the model can’t recreate from public data: unique data, unique insight, or unique workflows.",
        chinese: "AI 原生产品圈里现在每个人都熟悉这个故事。一家初创公司发布了一个做得相当精致的、基于 GPT 的法律摘要工具。48 小时后，OpenAI 发布 Custom GPTs，与之竞争的能力直接进入 ChatGPT，而且免费。这家初创公司的差异化优势一夜之间崩塌。这是“被 Sherlock”的现代版本——这个词来自苹果当年通过捆绑功能把第三方工具碾压掉的历史——也是任何只在基础模型外面薄薄包一层的产品的默认结局。如果你的差异化可以被一句 prompt，加上模型实验室自己几周的平台工程复制出来，你拥有的不是护城河，而是一个倒计时。要在 AI 原生时代活下来，你必须至少拥有模型无法从公开数据中重造的三样东西之一：独特的数据、独特的洞察、或独特的工作流。"
      },
      points: {
        label: "The Three Pillars / 三大支柱",
        items: [
          {
            titleEn: "1. Unique Data: Sovereignty over Ground Truth",
            titleZh: "1. 独特数据：对“事实”的主权",
            english: "If models are the engine, proprietary data is the fuel that doesn’t sit in their training set. American Express, JPMorgan, and Disney aren’t worried about being Sherlocked. They sit on decades of first-party data — transaction histories, underwriting outcomes, internal creative archives — that has never been public and never will be. A general LLM can describe what credit card transactions look like in aggregate, but it cannot reason over Amex’s actual transaction graph, because it has never seen it. That asymmetry — sovereignty over the ground truth in your domain — is what makes a fine-tuned or retrieval-grounded model on top of proprietary data structurally more accurate than any frontier model alone. If your business doesn’t generate or accumulate proprietary data, the AI layer of your product is competing with a commodity, and you’re going to lose on price.",
            chinese: "如果说模型是引擎，那么不在它训练集里的私有数据就是燃料。美国运通、摩根大通、迪士尼这样的公司并不担心被 Sherlock。他们坐拥数十年的第一手数据——交易记录、核保结果、内部创作档案——这些数据从未公开，也不会公开。通用大模型可以描述“信用卡交易在聚合层面长什么样”，但它没法在运通真实的交易图上做推理，因为它从来没见过。这种不对称——你对自身领域“事实”的主权——正是为什么基于专有数据做微调或检索增强的模型，会在结构上比单独的前沿模型更准确。如果你的业务本身不产生或沉淀专有数据，那你产品里的 AI 层就是在跟大宗商品竞争，你会在价格上输掉。"
          },
          {
            titleEn: "2. Unique Insight: What the Data Actually Means",
            titleZh: "2. 独特洞察：数据“意味着什么”",
            english: "Data alone is just inventory. The harder moat is unique insight — the proprietary understanding of what the data actually means in context. A veteran macro hedge fund doesn’t just have market data (everyone has market data). It has a hard-won model of how a specific geopolitical event ripples through specific supply chains and shows up in specific instruments three weeks later. AI can mimic the surface logic, but it can’t reproduce two decades of edge-case intuition or the negative results that taught the firm what doesn’t matter. Palantir’s Ontology is the productized version of this idea: it’s not a database, it’s a structured map of how a customer’s entities, relationships, and operating logic actually behave, and it’s what lets an LLM reason in that customer’s terms instead of in generic ones. Insight is what stops a smart model from confidently solving the wrong problem.",
            chinese: "数据本身只是库存。更难复制的护城河是独特洞察——你对“数据在上下文里到底意味着什么”的独家理解。一家做宏观的资深对冲基金不只是有市场数据（市场数据谁都有），它还有一套来之不易的模型：某个特定的地缘政治事件，会沿着哪些特定的供应链传导，并在三周后出现在哪些特定的金融工具上。AI 可以模仿表层逻辑，但它无法重造二十年的边缘情况直觉，也无法重造那些“教会公司什么是不重要的”负面结果。Palantir 的 Ontology 是这个想法的产品化版本：它不是一个数据库，而是一张结构化的地图，刻画了客户的实体、关系、运营逻辑实际上是怎么运转的——也正是这套东西让 LLM 能用客户自己的语言去推理，而不是用通用语言。洞察是阻止一个聪明模型自信地解决错误问题的东西。"
          },
          {
            titleEn: "3. Unique Workflows: The Architecture of Delivery",
            titleZh: "3. 独特工作流：价值交付的架构",
            english: "This is where the platform comes alive. A unique workflow is the specific architecture that turns data and insight into value the customer actually consumes — the sequence of ingestion, modeling, governance, review, and delivery that lets the system be trusted in production. Databricks is the obvious example: their stack wins because the workflow from raw data to governed, AI-ready features is genuinely opinionated and hard to assemble out of separate components. Once a workflow becomes load-bearing inside a customer, the switching cost is existential, not financial. The other end of the spectrum is Midjourney, reportedly run by a team of around a dozen people while generating roughly $200M in revenue at peak. They didn’t build a better diffusion model than the open-source labs; they built a better way to use one — the prompt loop, the gallery, the community, the iteration speed — and the workflow itself became the product.",
            chinese: "这是“平台”真正活起来的地方。独特工作流，是把数据和洞察转化为客户实际消耗的价值的那条具体路径——从采集、建模、治理、复核到交付的一整套动作序列，正是它让系统在生产环境里值得被信任。Databricks 是个明显例子：他们的栈之所以赢，是因为从原始数据到“被治理过、能直接喂给 AI 的特征”这条工作流，是真正有主张的、不容易用别的组件拼出来的。一旦一个工作流在客户内部变成承重墙，切换成本就不再是钱的问题，而是生死问题。光谱的另一端是 Midjourney，据报道在峰值时只由大约十来个人运营，却做出了约 2 亿美元的收入。他们并没有比开源实验室做出更好的 diffusion 模型；他们做出的是“更好地使用 diffusion 模型的方式”——prompt 循环、画廊、社区、迭代速度——工作流本身就是产品。"
          }
        ]
      },
      conclusion: {
        label: "Conclusion: The Org Chart Hollows Out / 总结：组织结构的塌陷",
        english: "In the AI-native era, two poles of value keep accumulating: the sovereigns who own the data and the architects who own the platform workflows. That mirrors the product-vs-infrastructure split from the first essay. The middle layers — middle managers and the data-mover roles whose job is to shuttle artifacts between the poles — get compressed first. That compression is what makes the much-discussed \"one-person unicorn\" even plausible. When a single operator can wield AI agents that simultaneously sit on top of proprietary data, encoded insight, and a productized workflow, they can credibly run the equivalent of what used to take a hundred-person company. The job stops being managing people. It becomes orchestrating a small constellation of AI agents that operate across all three pillars at once.",
        chinese: "在 AI 原生时代，两极的价值会持续累积：拥有数据的“主权者”和拥有平台工作流的“建筑师”。这正好呼应了第一篇里“产品 vs 基座”的分化。中间层——中层经理，以及那些负责在两极之间搬运产物的“数据搬运工”——会最先被压缩掉。这种压缩正是“1 人独角兽”这个被反复讨论的概念能够立得住的原因。当一个个体能同时调动持有专有数据、内化洞察、产品化工作流的 AI 智能体，他就能可信地运行起过去要 100 人公司才能撑起的那一摊事。这件事不再是“管理人”，而是“编排一小批同时跨越这三大支柱运转的 AI 智能体”。"
      }
    }
  }
];
