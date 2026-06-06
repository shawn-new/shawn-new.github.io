---
id: "article6-winning-with-taste-in-ai-era"
titleEn: "Winning in the AI Era: Taste Is the Bottleneck"
titleZh: "AI 时代如何赢：关键是 Taste"
category: "Opinions"
date: "2026-05-30"
author: "Sean"
release: "published"
keywords:
  - "AI Era"
  - "Taste"
  - "Judgment"
  - "Role Models"
  - "Frontier Work"
history:
  - "Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Initial draft"
  - "Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Editorial polish"
  - "Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"
  - "Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Human voice pass"
  - "Sun May 31 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Technical voice and structure pass"
  - "Sun May 31 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Technical blog structure pass"
  - "Sun May 31 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Context and flow pass"
  - "Sun May 31 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Taste thesis structure pass"
  - "Mon Jun 01 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Concision pass"
---

# Winning in the AI Era: Taste Is the Bottleneck
# AI 时代如何赢：关键是 Taste

## Why Taste Matters Now
## 为什么现在 Taste 重要

**English:**

The demo works. The code compiles. The spec has the right sections. The roadmap sounds coherent. Then you ask: what happens when the agent fails halfway, the user needs to verify the output, or the integration takes six weeks instead of two?

That is often when the room gets quiet.

AI makes the first artifact cheap, whether it is a prototype, doc, code change, or roadmap. The bottleneck has moved from producing the artifact to deciding whether it deserves trust.

That decision is hard because AI output is often plausible. It looks complete enough to pass review and create a feeling of progress. But plausible is not the same as usable, safe, maintainable, or worth building.

That is why taste matters now. AI increases the supply of plausible work. Taste is your ability to decide what should be shipped, revised, or killed before it consumes roadmap, budget, architecture, and team trust.

**中文：**

Demo 能跑。代码能 compile。Spec 结构完整。Roadmap 听起来连贯。然后你问：agent 中途失败怎么办？用户怎么验证输出？Integration 如果不是两周，而是六周，计划还成立吗？

很多时候，房间就是在这里安静下来的。

AI 让第一个 artifact 变便宜了，不管它是 prototype、doc、code change，还是 roadmap。瓶颈已经从生产 artifact，移动到判断这个 artifact 值不值得被信任。

这个判断很难，因为 AI output 经常是 plausible 的。它看起来足够完整，可以通过 review，并制造进展感。但 plausible 不等于 usable、safe、maintainable，也不等于值得 build。

这就是为什么现在 taste 重要。AI 增加了 plausible work 的供给。Taste 是你在它们消耗 roadmap、budget、architecture 和团队 trust 之前，判断它们应该被 ship、revise，还是 kill 的能力。

---

## Taste Is Judgment Before The Metric Arrives
## Taste 是指标到来前的判断

**English:**

Taste is not style. Here, taste means technical judgment under incomplete information.

It is your ability to look at a plausible artifact and predict where it will fail before metrics, incidents, churn, blocked teams, or confused users make the failure obvious.

Metrics arrive after the system touches reality. Taste operates before that. It asks whether the artifact can survive the workflow, the customer, the team that must run it, and the failure mode.

Good taste starts as a concrete objection: no eval, meaning no clear test for whether the AI output is good; no approval step; a prompt hiding a product decision; an agent that cannot explain what it changed; a UI with no safe correction path.

Those objections are useful because you can act on them. "This feels wrong" is weak. "The agent has no recovery path when it fails halfway" is strong.

Coherence used to be a filter. Now it is table stakes. AI can produce coherent docs, code, strategy, and design. Coherence only says the artifact is legible. Taste asks whether it is true enough to use.

**中文：**

Taste 不是 style。在这里，taste 指的是 technical judgment under incomplete information。

它是一种能力：你看着一个 plausible artifact，在 metrics、incident、churn、被卡住的团队或困惑用户把失败暴露出来之前，先判断它会在哪里坏。

指标要等系统接触现实之后才会出现。Taste 发生在那之前。它问的是：这个 artifact 能不能经受 workflow、customer、后续要运行它的 team，以及 failure mode？

好的 taste 从具体 objection 开始：没有 eval，也就是没有清楚测试 AI output 好不好的方法；没有 approval step；prompt 藏了 product decision；agent 说不清自己改了什么；UI 没有安全 correction path。

这些 objection 有用，因为你可以据此行动。“这里感觉不对”很弱。“Agent 中途失败时没有 recovery path”很强。

过去，coherence 是一个过滤器。现在它只是基本门槛。AI 可以生成连贯的 doc、code、strategy 和 design。Coherence 只能说明 artifact 是 legible 的。Taste 问的是：它够不够真实，可以被使用？

---

## Taste Starts With Testable Claims
## Taste 从可测试观点开始

**English:**

You do not build taste by staying neutral. You build it by making claims reality can test.

"AI coding is the future" is too broad. A better claim is: AI coding works best when the reviewer understands the codebase, the task has tight feedback loops, and a bad first pass is cheap to fix.

Now you can test it. Does AI coding work better for scaffolding, migrations, tests, refactors, debugging, or code review? Does it fail when the repo lacks tests, no one owns the changed area, security assumptions are hidden, or architecture conventions are undocumented?

This is how taste sharpens. Make a claim small enough to break. Let reality break part of it. Update the map.

If you are coding, this improves review quality. If you are leading, it improves bet quality. The same habit applies to code paths, product bets, platform decisions, and AI adoption strategies.

**中文：**

Taste 不是靠中立旁观训练出来的。它来自你提出一个能被现实测试的 claim。

“AI coding 是未来”太宽了。更好的 claim 是：AI coding 在 reviewer 理解 codebase、任务有 tight feedback loop、错误 first pass 容易修正时最有效。

现在你可以测试这个 claim。AI coding 更适合 scaffolding、migration、tests、refactor、debugging，还是 code review？它会不会在 repo 缺测试、没人 owns 被修改区域、security assumption 被隐藏、architecture convention 没写下来时失败？

Taste 就是这样变锋利的。提出一个小到可以被打碎的 claim。让现实打碎其中一部分。更新地图。

如果你在写代码，这会提高 review 质量。如果你在带团队或做技术决策，这会提高下注质量。同一个习惯适用于 code path、product bet、platform decision 和 AI adoption strategy。

---

## Taste Needs Contact With Failure
## Taste 需要接触失败

**English:**

Reading about frontier products helps. Watching demos helps. But taste improves fastest when you use the tool until its boundary appears.

Use a coding agent until it produces a change you would not approve. Was the task underspecified? Did the repo lack tests? Did it miss an architecture convention? Was ownership unclear? Did review fail?

Use an AI research tool until it produces organized noise. Was retrieval shallow? Were sources weak? Did the model confuse evidence with fluent summary? Did citations collapse?

Use a design tool until the output becomes generic. Was the prompt surface weak? Were layout primitives too generic? Did the system lack domain context?

The useful moment is not when the demo works. It is when the product almost works and you can name the missing piece clearly enough to act.

That is where engineering detail turns into product judgment.

**中文：**

读前沿产品总结有用。看 demo 有用。但 taste 提升最快的地方，是你把工具用到边界出现。

用 coding agent，用到它生成一段你不会 approve 的 change。是 task 没定义清楚？Repo 缺测试？它漏掉了架构约定？Ownership 不清楚？Review 坏了？

用 AI research tool，用到它生成一堆结构化噪音。Retrieval 太浅？Source 太弱？Model 把 evidence 和 fluent summary 混在一起？Citation 崩了？

用设计工具，用到输出开始 generic。Prompt surface 太弱？Layout primitives 太通用？系统缺 domain context？

有用的时刻不是 demo 跑通的时候。有用的时刻是产品几乎可用，但你能把缺失部分说清楚，清楚到可以行动的时候。

这就是 engineering detail 变成 product judgment 的地方。

---

## Taste Is Built In Real Workflows
## Taste 是在真实 Workflow 里练出来的

**English:**

Demos hide the part of the system where taste matters most. In a demo, you choose the input, path, and ending. In a real workflow, you deal with permissions, retries, bad data, unclear ownership, partial failure, latency, audit requirements, change management, and users who do not care how clever the system is.

An agent is not good because it completes one task. It is good when the surrounding system knows what to do when the agent is uncertain, slow, wrong, or half done.

A UI is not good because it looks clean. It is good when the user can inspect state, understand consequence, reverse a mistake, and make the next decision without guessing.

A code change is not good because it compiles. It is good when it preserves invariants, fits the architecture, has tests at the right boundary, and can be owned after the agent leaves.

The core review question is simple: what happens when this fails?

If the answer is vague, taste has not done its job. Real workflows are built around correction, approval, rollback, escalation, observability, ownership, and adoption cost.

Building real workflows sharpens taste because it makes bad judgment expensive. You ship something, watch where it bends, and learn which failure you should have smelled earlier.

**中文：**

Demo 会隐藏系统里最需要 taste 的部分。在 demo 里，你可以选择输入、路径和结尾。在真实 workflow 里，你要面对权限、retry、脏数据、不清楚的 owner、partial failure、latency、audit requirement、change management，以及根本不关心系统有多聪明的用户。

一个 agent 不是因为完成一次任务就好。它要在 uncertain、slow、wrong、half done 的时候，周围 system 也知道该怎么办，才算好。

一个 UI 不是因为看起来干净就好。它要让用户能 inspect state、理解 consequence、撤回错误，并且不用猜就能做下一个 decision，才算好。

一个 code change 不是因为能 compile 就好。它要保留 invariants、符合架构、在正确边界有 tests，并且 agent 离开后还能被拥有，才算好。

核心 review 问题很简单：这东西失败时会发生什么？

如果答案很模糊，taste 还没有完成工作。真实 workflow 是围绕 correction、approval、rollback、escalation、observability、ownership 和 adoption cost 建出来的。

做真实 workflow 会打磨 taste，因为它让错误判断变贵。你 ship 一个东西，看它在哪里弯掉，然后学会哪个 failure 本来应该更早闻出来。

---

## Taste Improves By Studying Decisions
## Taste 靠研究决策变好

**English:**

It is tempting to study finished products: UI, feature list, launch post, metrics, public story. That helps, but taste lives one layer deeper.

Study the decision trace behind the artifact. Why this onboarding flow? Why hide power behind a default? Why expose configuration? Why ship a narrow workflow instead of a broad platform?

Reconstruct the decision. What constraint mattered most? Which alternative did we reject? What did we optimize for? What did we sacrifice? Which failure mode did we accept?

This matters even more in AI products. A good AI workflow is a loop: user pain, input, model action, human inspection, correction, eval, write-back, owner. In plain terms: what hurts, what the model sees, what it does, how humans check it, how mistakes get fixed, how quality is measured, where the result is saved, and who owns exceptions.

That loop gives the product shape. Without it, the product becomes a framework with no opinion.

**中文：**

你很容易只学习 finished product：UI、feature list、launch post、metrics、public story。这有帮助，但 taste 在更深一层。

研究 artifact 背后的 decision trace。为什么是这个 onboarding flow？为什么把能力藏在 default 后面？为什么暴露配置？为什么先 ship 一个窄 workflow，而不是宽 platform？

重建 decision。当时最重要的 constraint 是什么？我们拒绝了哪个 alternative？优化什么？牺牲什么？接受了哪个 failure mode？

这在 AI 产品里更重要。好的 AI workflow 是一个 loop：user pain、input、model action、human inspection、correction、eval、write-back、owner。说白了，就是用户哪里痛，模型看到什么，模型做什么，人怎么检查，错误怎么修，质量怎么量，结果存回哪里，异常归谁负责。

这个 loop 会给产品形状。没有它，产品会变成一个没有观点的 framework。

---

## Taste Can Be Borrowed Before It Is Yours
## Taste 可以先借来，再长出来

**English:**

Another way to train taste is to borrow someone else's decision system before you have your own.

Find specific operators: a founder whose strategy changes what we build, a designer whose interfaces feel inevitable, an engineer who removes complexity without weakening the system, a product leader who cuts scope without cutting ambition.

Then mimic them. First you copy the surface: how they summarize mess, push back, and turn vague concern into next step.

Later you copy the habit underneath: how they separate urgent from loud, communicate uncertainty, and move through ambiguity without pretending it is gone.

Eventually you realize you were not copying style. You were borrowing a decision system. With enough reality, borrowed taste becomes your own judgment.

**中文：**

训练 taste 的另一个方法，是在你还没有自己的 decision system 之前，先借用别人的。

找具体 operator：一个 strategy 会改变我们构建方向的 founder，一个界面做得像“本来就该这样”的 designer，一个能移除复杂度但不削弱系统的 engineer，一个能砍 scope 但不砍 ambition 的 product leader。

然后模仿他们。一开始复制表面：他们怎么总结混乱，怎么 push back，怎么把模糊担忧变成 next step。

后来复制表层下面的习惯：他们怎么区分真正 urgent 和只是 loud，怎么沟通不确定性，怎么穿过 ambiguity 但不假装 ambiguity 消失。

最后你会意识到，你模仿的不是风格。你是在借用一套 decision system。经过足够多现实反馈，借来的 taste 会变成你自己的判断。

---

## Taste Must Stay Accountable
## Taste 必须接受问责

**English:**

Taste can become a lazy word. "This lacks taste" can mean "I do not like it." "This feels wrong" can mean "I cannot explain my objection."

Real taste must predict something: users will trust this more, our workflow will be clearer, the system will be easier to operate, the eval will catch the important failure, the code will be easier to change, or the strategy will create better decisions.

Taste can act before all data arrives. That is the point. But when data arrives, taste has to meet it. If users behave differently, update. If production fails, ask which assumption was wrong. If the metric contradicts your intuition, do not hide behind status.

That is the difference between taste and vibes. Vibes avoid accountability. Taste accepts accountability and still makes the call.

**中文：**

Taste 很容易变成懒词。“这个没有 taste”可能只是“我不喜欢”。“这里感觉不对”可能只是“我说不清楚反对理由”。

真正的 taste 必须能预测某些东西：用户会更信任这个版本，我们的 workflow 会更清楚，系统会更容易运维，eval 会抓住重要 failure，代码会更容易改，或者 strategy 会带来更好的 decision。

Taste 可以在数据完整之前行动。这正是它的意义。但数据来了之后，taste 必须面对数据。如果用户行为不同，就更新。如果 production 失败，就追问哪个 assumption 错了。如果 metric 和 intuition 冲突，不要躲在身份感后面。

这就是 taste 和 vibes 的区别。Vibes 逃避问责。Taste 接受问责，然后仍然做判断。

---

## The Practical Test
## 最后的实用测试

**English:**

AI makes production cheaper. It changes which human abilities matter.

The scarce ability is no longer only producing work. It is selecting, shaping, reviewing, and rejecting work that is coherent but false before it consumes team capacity and leadership attention.

Taste is that filter.

The practical test is simple. Can you look at a plausible artifact and say where it will fail? Can you make the claim small enough to test? Can you use the tool long enough to find its boundary? Can you build the workflow around failure, not the demo? Can you read the decision trace behind a good product? Can you update when reality proves your taste wrong?

In the AI era, winning may depend less on whether you can generate the next artifact and more on whether you can tell which artifact deserves to exist.

**中文：**

AI 让生产变便宜。它改变的是哪些人的能力重要。

稀缺能力不再只是产出工作。稀缺的是选择、塑造、review，并在它们消耗团队 capacity 和 leadership attention 之前，拒绝那些连贯但不真实的工作。

Taste 就是这个过滤器。

最后的实用测试很简单。你能不能看着一个 plausible artifact，说出它会在哪里失败？你能不能把 claim 缩小到可以测试？你能不能把工具用到边界出现？你能不能围绕 failure，而不是 demo，构建 workflow？你能不能读出一个好产品背后的 decision trace？你能不能在现实证明 taste 错了之后更新？

AI 时代如何赢，可能不再主要取决于你能不能生成下一个 artifact。

而是取决于你能不能判断，哪个 artifact 值得存在。
