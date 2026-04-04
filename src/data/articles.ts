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
    id: "extreme-ownership-notes",
    titleEn: "Extreme Ownership: The Leader is Always Responsible",
    titleZh: "极度负责：领导者对一切负责",
    content: {
      title: "Reading Notes: Extreme Ownership",
      scenario: {
        label: "Scenario: The Blame Loop / 场景：甩锅的死循环",
        english: "Picture a startup's weekly all-hands. The product launch missed the deadline—again. The CTO blames the engineers for \"poor execution.\" The engineers blame the product manager for \"unclear requirements.\" The PM blames the CEO for \"constantly shifting priorities.\" The CEO blames \"the market.\" Around and around the loop spins. Morale craters. The best people quietly update their LinkedIn. Nobody is lying—every complaint has a kernel of truth. But nobody is leading, either. This is the failure mode that Jocko Willink and Leif Babin, two decorated U.S. Navy SEAL commanders who led operations in the bloodiest battle of the Iraq War, set out to demolish. Their verdict, forged in Ramadi under live fire: the loop exists because leadership has abdicated ownership. The moment a leader says \"it's not my fault,\" the team begins to die.",
        chinese: "想象一家初创公司的全员周会。产品发布又一次延期了。CTO 责怪工程师“执行力差”；工程师责怪产品经理“需求不清晰”；产品经理责怪 CEO “优先级一直在变”；CEO 则把锅甩给“市场环境”。这个循环一圈一圈地转，士气跌入谷底，最优秀的人悄悄更新了 LinkedIn。没有人在撒谎——每一句抱怨都有一分真实。但也没有人在领导。这正是两位在伊拉克战争最血腥的战场——拉马迪——指挥作战的美国海豹突击队指挥官 Jocko Willink 和 Leif Babin 立志要击破的失败模式。他们在真实的枪林弹雨中锤炼出的裁决是：这个死循环的存在，是因为领导者放弃了所有权。当一个领导者说出“这不是我的错”的那一刻，团队就开始走向死亡。"
      },
      points: {
        label: "The Core Principles / 核心原则",
        items: [
          {
            titleEn: "1. Extreme Ownership: The Leader Owns Everything",
            titleZh: "1. 极度负责：领导者对一切负责",
            english: "The book opens with a defining moment. During the Battle of Ramadi, Willink's SEAL task unit was involved in a catastrophic friendly fire incident—his own men accidentally engaged another friendly element. Soldiers were shot. In the debrief, every person in the room had someone else to blame: the Army unit that didn't follow the plan, the air assets with poor communications, the fog of war. Willink stood up in front of his commanders and said: \"I am responsible.\" Not as a formality. Not to take a ceremonial fall. But because it was the only truthful thing to say. He had not ensured every element had the same information. He had not over-communicated the plan. He owned it completely—and then he fixed it.\n\nThis is Extreme Ownership in its purest form: the leader is responsible for everything his team does or fails to do. Not partially. Not \"mostly.\" Everything. The book's most provocative argument follows directly: **there are no bad teams, only bad leaders.** Willink proves this in a SEAL training exercise where he swaps the leader of the worst-performing boat crew with the leader of the best-performing crew. Within minutes, the formerly worst crew is winning races. The individuals didn't change—the leader did. This principle destroys every excuse available to a manager: the market, the economy, the talent pool, the legacy codebase. If your team is underperforming, look in the mirror. The standard you walk past is the standard you accept.",
            chinese: "这本书以一个决定性的时刻开篇。在拉马迪战役期间，Willink 指挥的海豹突击队任务部队发生了一场灾难性的“误伤友军”事故——他自己的部下意外向另一支友军开火，士兵受伤。在事后复盘中，房间里的每个人都有理由指责别人：没有按计划行动的陆军分队、通讯失灵的空中支援、战场上难以消除的迷雾。Willink 站了起来，面对他的上级指挥官说：“我负责。” 这不是走形式，也不是承担象征性责任，而是因为这是唯一真实的陈述。他没有确保每个单位都掌握同样的信息；他没有对作战计划进行充分的沟通。他完全承担了这一切——然后着手修复。\n\n这就是“极度负责”的最纯粹形式：领导者对团队所做的或未能做到的一切负责。不是部分，不是“大部分”，而是一切。书中最具挑衅性的论断紧随其后：**没有烂团队，只有烂领导。** Willink 通过一场海豹训练演习来证明这一点——他将表现最差的橡皮艇小队的领队，和表现最好的小队的领队对调。几分钟之内，原本最差的小队开始赢得比赛。参与者没有变，改变的只是领导者。这个原则摧毁了管理者可能拥有的所有借口：市场、经济、人才池、历史遗留代码库。如果你的团队表现不佳，对着镜子看看。你对走过身边的标准选择无视，那就是你实际接受的标准。"
          },
          {
            titleEn: "2. The Laws of Combat: How Elite Teams Actually Execute",
            titleZh: "2. 战斗法则：精英团队如何真正执行",
            english: "Once a leader internalizes Extreme Ownership, the book shifts to practical execution. Part Two introduces four \"Laws of Combat\" that govern high-performance teams in any domain:\n\n**Cover and Move** means every element of the team supports every other element. Departments, squads, and individuals don't compete—they reinforce each other. In a company, this means Sales isn't the enemy of Engineering. When the product ships late, Sales and Engineering share the problem. The moment a team starts to \"throw the ball over the wall\" and declare victory, the mission breaks down.\n\n**Keep It Simple** is ruthless. In SEAL operations, a plan that can't be briefed in two minutes can't be executed under pressure. Willink writes: \"If your plan is too complex for your people to understand, your plan will fail when reality hits.\" For product managers, this is a direct attack on 47-slide PRDs and six-week sprints with 200 story points.\n\n**Prioritize and Execute** acknowledges that in a crisis, multiple problems will attack simultaneously. The leader must triage, pick the highest-priority problem, and direct all resources at it—then move to the next. The cardinal sin is trying to solve everything at once. You end up solving nothing.\n\n**Decentralized Command** is perhaps the most important for scale. Leaders can only manage 4-6 people directly. Every junior leader must understand the mission, the commander's intent, and be empowered to make decisions without asking for permission. Micromanagement isn't just inefficient—it's a failure of leadership development. The goal is to build leaders who can operate two levels up when communication is severed.",
            chinese: "当领导者将“极度负责”内化于心，这本书转向了实际执行层面。第二部分引入了四条适用于任何领域的高绩效团队“战斗法则”：\n\n**掩护与前进**：团队的每个单元都要支援其他单元。部门、小组和个人之间不是竞争关系，而是相互强化的关系。在公司里，这意味着销售不是工程的敌人。当产品延期交付时，销售和工程共同承担这个问题。一旦团队开始“把球丢过墙”然后宣告任务完成，整个使命就会崩溃。\n\n**保持简单**：这是一条残酷的法则。在海豹突击队的行动中，一个无法在两分钟内讲清楚的计划，在压力之下就无法被执行。Willink 写道：“如果你的计划复杂到你的人无法理解，当现实降临时，你的计划就会失败。”对于产品经理来说，这是对 47 页 PRD 文档和装有 200 个故事点的六周冲刺的直接攻击。\n\n**确定优先级，逐一执行**：这条法则承认，在危机中，多个问题会同时涌来。领导者必须进行分类，选出优先级最高的问题，将所有资源集中于它——然后再转向下一个。最致命的错误是试图同时解决所有问题，最终的结果是什么都解决不了。\n\n**去中心化指挥**：这可能是最重要的一条规模化法则。领导者只能直接管理 4 到 6 个人。每一位基层领导必须理解使命、理解指挥官的意图，并有权在不请示的情况下做出决策。微观管理不仅仅是低效的——它是领导力培养的失败。目标是培养出在通讯中断时能够承担更高级别决策的领导者。"
          },
          {
            titleEn: "3. Discipline Equals Freedom: The Paradox That Runs Everything",
            titleZh: "3. 自律即自由：驱动一切的悖论",
            english: "The final section of the book tackles the hardest challenge: sustaining the system when the adrenaline of crisis fades. Willink's most quoted line—\"Discipline equals freedom\"—sounds like a contradiction until you live it. The leader who wakes at 4:30 AM every day, who has a regimented planning process, who checks his ego and never lets emotion dictate reaction, creates for himself an enormous freedom: he can improvise, adapt, and seize opportunity when it appears, because the fundamentals are locked. The chaotic leader who \"goes with the flow\" has no system to fall back on—every unexpected event is a crisis.\n\n**Leading Up and Down the Chain** addresses a blind spot most leadership books ignore: subordinates must lead upward. If your boss is making a decision that will harm the mission, it is your responsibility to brief up, provide context, and influence the decision. Waiting to be asked is an abdication. The line \"it's not what you preach, it's what you tolerate\" lands like a thunderclap—a leader who accepts substandard work once has just set the new standard.\n\n**Decisiveness Amid Uncertainty** is the final law. A leader will never have perfect information. Waiting for certainty is itself a decision—almost always the worst one. Willink argues that a good plan executed decisively today beats a perfect plan executed too late. The courage to act, to be wrong, and to own that wrongness completely, is the engine of a high-performance team. The book ends where it begins: the leader who refuses to own their failures cannot possibly own their victories. Extreme Ownership is not a tactic. It is a way of being.",
            chinese: "本书的最后一部分应对了最艰难的挑战：当危机的肾上腺素消退后，如何维系这套系统的运转。Willink 被引用最多的那句话——“自律即自由”——在你真正实践之前听起来像是一个悖论。每天早晨 4 点半起床的领导者，有严格规划流程的领导者，能够压制自我、绝不让情绪主导反应的领导者，为自己创造了巨大的自由：当机会出现时，他可以随机应变、快速适应并果断出击——因为基本功已经稳固。而那些“随波逐流”的混乱型领导者没有任何系统可以依靠，每一个意外事件对他们而言都是一场危机。\n\n**向上和向下领导**解决了大多数领导力书籍忽略的一个盲区：下属必须向上领导。如果你的上司正在做一个会损害使命的决策，向上汇报、提供背景信息并影响这个决策，是你的责任。等待被询问，是一种放弃。“你所接受的，才是你真正的标准，而不是你所宣扬的”这句话如同雷鸣——一个领导者哪怕只接受一次不达标的工作，就刚刚设定了一个新的标准。\n\n**在不确定中果断决策**是最后一条法则。领导者永远不会拥有完美的信息。等待确定性本身就是一种决策——而且几乎总是最糟糕的那种。Willink 认为，今天果断执行的好计划，胜过明天迟到的完美计划。有勇气行动、接受犯错，并完全承担那份错误——这是高绩效团队的发动机。这本书在它开始的地方结束：拒绝承担失败的领导者，也不可能真正拥有他的胜利。极度负责不是一种战术，它是一种存在方式。"
          }
        ]
      },
      conclusion: {
        label: "Conclusion: One Question to Rule Them All / 总结：一个统摄一切的问题",
        english: "\"Extreme Ownership\" solves exactly one problem: the victim mentality that quietly destroys organizations from the inside. It is not a book about productivity hacks or management frameworks. It is a book about character—specifically, the character required to lead when everything is on fire. The framework is brutally simple: own your failures completely, communicate the mission so clearly that junior leaders can act autonomously, build the discipline structures that create freedom, and never tolerate a standard you don't intend to keep. The question Willink leaves you with is permanently uncomfortable: in every situation where things go wrong, before you reach for an external cause, ask yourself—\"What could I have done differently?\" If you can answer that question honestly and act on the answer, you are already leading at a higher level than most. That is the entire book.",
        chinese: "《极度负责》精准地解决了一个问题：那种悄无声息地从内部摧毁组织的受害者心态。这不是一本关于效率技巧或管理框架的书，而是一本关于品格的书——具体来说，是在一切都着火时仍能领导的品格所需要的。它的框架残酷地简单：完全承担你的失败，将使命传达得清晰到基层领导可以独立行动，建立能创造自由的自律结构，永远不接受你无意维持的标准。Willink 留给你的问题永久地令人不适：每当事情出错，在你伸手去寻找外部原因之前，先问问自己——“我本可以做什么不同的事？”如果你能诚实地回答这个问题，并依此行动，你已经在以一个比大多数人更高的层次在领导了。这就是这本书的全部。"
      }
    }
  },
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
  },
  {
    id: "simplify-mcp-login",
    titleEn: "Escaping MCP Login Hell: One Login to Rule Them All",
    titleZh: "走出 MCP 登录地狱：一次登录，全部接入",
    content: {
      title: "Article 4: Simplifying MCP Login Hell",
      scenario: {
        label: "Scenario: Twelve Consent Screens Before Lunch / 场景：午饭前点掉十二个授权框",
        english: "Picture a developer trying to wire a single coding agent into the tools they actually use at work — Figma for designs, GitHub for code, Linear for tickets, Notion for docs, Snowflake for data. Each MCP server speaks OAuth, which sounds clean until you live it. The agent pops a browser. The user logs into Figma. Then GitHub. Then Linear. Then Notion. Then Snowflake. A dozen consent screens, a dozen refresh-token lifecycles, a dozen places where a silently expired credential will break the agent at the worst possible moment. Now multiply that by every employee at a 10,000-person enterprise, with no central record of which agent is talking to which system on whose behalf. This is what Garrett Galow at WorkOS calls MCP login hell — and it’s the friction quietly capping how useful AI agents can actually be inside real companies.",
        chinese: "想象一个开发者要把一个 coding agent 接到他真正在用的那些工具上——设计用 Figma、代码在 GitHub、工单在 Linear、文档在 Notion、数据在 Snowflake。每个 MCP server 都说 OAuth，听上去挺干净，真用起来就完全不是这回事。agent 弹一个浏览器，用户先登 Figma，再登 GitHub，再登 Linear，再登 Notion，再登 Snowflake——十二个授权框，十二条 refresh token 的生命周期，十二个“某天悄悄过期”然后在最不该坏的时候把 agent 干崩的地方。把这件事乘以一家一万人公司里的每一个员工，再加上没有任何中央记录能告诉你“哪个 agent 此刻正以谁的身份在访问哪个系统”，你就拿到了 WorkOS 的 Garrett Galow 说的 MCP 登录地狱——它是当下悄悄压住 AI agent 在真实企业里能有多好用的那道天花板。"
      },
      points: {
        label: "How to Untangle It / 怎么解开这团乱麻",
        items: [
          {
            titleEn: "1. Stop Treating MCP Auth as N Independent OAuth Flows",
            titleZh: "1. 别再把 MCP 鉴权当成 N 条互不相干的 OAuth 流",
            english: "The default mental model is that each MCP client ↔ MCP server pair is its own OAuth relationship, with its own consent screen and its own token. That model worked when humans logged into a handful of SaaS apps a day. It collapses the moment an agent has to talk to ten servers in a single task, because each pair-wise relationship is one more thing to authorize, store, refresh, monitor, and revoke. The mental shift is to treat the identity provider — the same Okta, Entra, or Google Workspace the company already owns — as the single source of truth, and treat every MCP server as a downstream resource that trusts the IdP rather than each individual client. Once the IdP is the broker, the number of credentials a user manages drops from N×M back to one.",
            chinese: "默认的思维模型是：每一对 MCP client ↔ MCP server 都是一段独立的 OAuth 关系，各有各的授权框、各有各的 token。这个模型在人一天只登几款 SaaS 的时代是够用的。可一旦一个 agent 在一项任务里要同时和十个 server 通信，它就立刻塌掉了——因为每一对关系都意味着多一个要授权、要保存、要刷新、要监控、要回收的东西。思路上的转变是：把公司本来就有的身份提供者 (Okta、Entra、Google Workspace) 当作唯一的事实来源，把每一个 MCP server 当作一个“信任 IdP、而不是分别信任每个 client”的下游资源。一旦 IdP 变成中间人，用户要管的凭据就从 N×M 重新降到 1。"
          },
          {
            titleEn: "2. Cross-App Access: Make the IdP a First-Class Decision Maker",
            titleZh: "2. Cross-App Access：让 IdP 真正坐到决策桌前",
            english: "The concrete pattern Galow demos is Cross-App Access (XAA), an OAuth 2.0 extension where the enterprise IdP doesn’t just authenticate the user — it explicitly approves the connection between a specific MCP client and a specific MCP server. In the Cursor → Okta → Figma demo, the user logs into Okta exactly once. Cursor asks the IdP for permission to act against Figma; Okta checks policy, mints a scoped, short-lived token, and Cursor uses it against Figma without Figma ever showing its own consent screen. From the user’s perspective the second, third, and tenth MCP server just work. From IT’s perspective every cross-app connection is a policy decision the IdP made and logged — which is the part that has been quietly missing from the OAuth-everywhere world.",
            chinese: "Galow 在演讲里展示的具体范式是 Cross-App Access (XAA)，一种 OAuth 2.0 扩展：企业 IdP 不仅负责认证用户，还显式地批准“某个 MCP client 去访问某个 MCP server”这件事本身。在 Cursor → Okta → Figma 的 demo 里，用户只在 Okta 登一次。Cursor 向 IdP 申请“代表用户去访问 Figma”的许可；Okta 按策略校验，签发一个作用域明确、寿命很短的 token，Cursor 拿着它去访问 Figma，而 Figma 从头到尾没有再弹自己的授权框。从用户视角看，第二个、第三个、第十个 MCP server“就直接能用”。从 IT 视角看，每一次跨应用连接都是一次 IdP 做出并留痕的策略决定——这正是过去“到处都是 OAuth”的世界里悄悄缺位的那一块。"
          },
          {
            titleEn: "3. Centralize Governance Before the Agent Sprawl Outpaces You",
            titleZh: "3. 在 agent 蔓延失控之前，把治理收归中央",
            english: "The login pain is the symptom most users feel; the real enterprise problem is the loss of visibility and control. Without a central broker, there is no clean answer to questions like: which MCP servers does our company actually depend on, which AI agents have which scopes against our customer data, and how do we revoke a compromised agent across all of them at once? Routing every MCP authorization through the IdP makes those questions answerable: a single audit log of cross-app grants, a single place to enforce least-privilege scopes, a single kill switch when an agent or a vendor goes bad. The right time to put this in place is now, before each team has independently wired its favorite agent into a dozen MCP servers using personal tokens that nobody can see, rotate, or revoke.",
            chinese: "登录卡顿是大多数用户能感觉到的表层症状，真正棘手的企业问题是失去可见性和控制力。没有一个中央代理，下面这些问题就没有干净的答案：我们公司到底在依赖哪些 MCP server？哪些 AI agent 拥有哪些访问客户数据的 scope？某个 agent 被攻陷时，怎么在所有 server 上同时把它吊销掉？把每一次 MCP 授权都走 IdP，这些问题就有答案了：一条统一的跨应用授权审计日志、一个统一的最小权限 scope 强制点、一个统一的“一键拔网线”开关。落地这套机制最合适的时机是现在——趁各个团队还没各自用个人 token 把自己最喜欢的 agent 接到十几个 MCP server 上、最后没人看得见、没人轮换、也没人能回收。"
          }
        ]
      },
      conclusion: {
        label: "Conclusion: Identity Is the Real MCP Substrate / 总结：身份才是 MCP 真正的底座",
        english: "If MCP is going to be the bus that connects every AI agent to every enterprise system, then identity — not the tool catalog, not the model — is the layer that decides whether it stays governable. The pattern that wins is unglamorous: one login at the IdP, IdP-mediated tokens to each MCP server, every grant logged and revocable from a single console. Builders should design new MCP servers to delegate to an enterprise IdP from day one rather than rolling their own OAuth dance. Buyers should stop accepting agents that demand a fresh login per tool and start asking vendors how they integrate with the IdP the company already runs. The teams that solve login hell first won’t just have happier developers — they’ll be the ones safely running agents at a scale everyone else is still afraid to ship.",
        chinese: "如果 MCP 要成为把每一个 AI agent 接到每一个企业系统的总线，那么决定它是否还能被治理的，不是工具目录、也不是模型，而是身份这一层。最终会赢的范式并不性感：在 IdP 登一次，由 IdP 向每个 MCP server 颁发 token，每一次授权都有日志、能从同一个控制台一键回收。做产品的人应该从第一天起就让新的 MCP server 把鉴权委托给企业 IdP，而不是再造一套自己的 OAuth 舞步；做采购的人应该不再接受“一个工具一次登录”的 agent，而开始反问厂商：你们怎么和我们已经在用的 IdP 集成？最先解决登录地狱的团队，收获的不只是更开心的工程师——他们会成为别人还不敢上线的那种 agent 规模下，唯一能安全跑起来的那批人。"
      }
    }
  }
];
