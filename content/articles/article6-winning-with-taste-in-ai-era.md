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
  - "Thu Jun 05 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Minor compression, add hook"
  - "Thu Jun 05 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Goal-mode 5-pass polish"
---

# Winning in the AI Era: Taste Is the Bottleneck
# AI 时代如何赢：关键是 Taste

## Why Taste Matters Now
## 为什么现在 Taste 重要

**English:**

The demo works. The code compiles. The spec has the right sections. Then you ask: what happens when the agent fails halfway, the user needs to verify the output, or the integration takes six weeks instead of two?

That is often when the room gets quiet.

AI makes the first artifact cheap — prototype, doc, code change, roadmap. The bottleneck has moved from producing the artifact to deciding whether it deserves trust.

That decision is hard because AI output is plausible. It looks complete enough to pass review and create a feeling of progress. Plausible is not the same as usable, safe, maintainable, or worth building.

Taste is your ability to decide what should be shipped, revised, or killed before it consumes roadmap, budget, architecture, and team trust.

**中文：**

Demo 能跑。代码能 compile。Spec 结构完整。然后你问：agent 中途失败怎么办？用户怎么验证输出？Integration 如果不是两周而是六周，计划还成立吗？

很多时候，房间就是在这里安静下来的。

AI 让第一个 artifact 变便宜了。瓶颈已经从生产 artifact，移动到判断它值不值得被信任。

这个判断很难，因为 AI output 是 plausible 的。它看起来足够完整，可以通过 review，制造进展感。但 plausible 不等于 usable、safe、maintainable，也不等于值得 build。

Taste 是你在它们消耗 roadmap、budget、architecture 和团队 trust 之前，判断它们应该被 ship、revise，还是 kill 的能力。

---

## Taste Is Judgment Before The Metric Arrives
## Taste 是指标到来前的判断

**English:**

Taste is not style. Here, taste means technical judgment under incomplete information.

Look at a plausible artifact and predict where it will fail — before metrics, incidents, or confused users make the failure obvious. Metrics arrive after the system touches reality. Taste operates before that.

Good taste starts as a concrete objection: no eval; no approval step; a prompt hiding a product decision; an agent that cannot explain what it changed; a UI with no safe correction path.

Those objections are useful because you can act on them. "This feels wrong" is weak. "The agent has no recovery path when it fails halfway" is strong.

Coherence is now table stakes. AI produces coherent docs, code, strategy, and design. Coherence says the artifact is legible. Taste asks whether it is true enough to use.

**中文：**

Taste 不是 style。在这里，taste 是 technical judgment under incomplete information。

看着一个 plausible artifact，在 metrics、incident 或困惑用户把失败暴露出来之前，判断它会在哪里坏。指标要等系统接触现实之后才出现。Taste 发生在那之前。

好的 taste 从具体 objection 开始：没有 eval；没有 approval step；prompt 藏了 product decision；agent 说不清自己改了什么；UI 没有安全 correction path。

"这里感觉不对"很弱。"Agent 中途失败时没有 recovery path"很强。

Coherence 现在只是基本门槛。Coherence 说明 artifact 是 legible 的。Taste 问的是：它够不够真实，可以被使用？

---

## Taste Starts With Testable Claims
## Taste 从可测试观点开始

**English:**

You do not build taste by staying neutral. You build it by making claims reality can test.

"AI coding is the future" is too broad. A better claim: AI coding works best when the reviewer understands the codebase, the task has tight feedback loops, and a bad first pass is cheap to fix.

Now you can test it. Does AI coding work better for scaffolding, migrations, tests, or refactors? Does it fail when the repo lacks tests, no one owns the changed area, or architecture conventions are undocumented?

This is how taste sharpens. Make a claim small enough to break. Let reality break part of it. Update the map.

**中文：**

Taste 不是靠中立旁观训练出来的。它来自你提出一个能被现实测试的 claim。

"AI coding 是未来"太宽了。更好的 claim：AI coding 在 reviewer 理解 codebase、任务有 tight feedback loop、错误 first pass 容易修正时最有效。

现在你可以测试这个 claim：AI coding 更适合 scaffolding、migration、tests，还是 refactor？它会不会在 repo 缺测试、没人 owns 被修改区域、architecture convention 没写下来时失败？

Taste 就是这样变锋利的：提出一个小到可以被打碎的 claim，让现实打碎其中一部分，更新地图。

---

## Taste Needs Contact With Failure
## Taste 需要接触失败

**English:**

Reading about frontier products helps. Watching demos helps. Taste improves fastest when you use the tool until its boundary appears.

Use a coding agent until it produces a change you would not approve. Was the task underspecified? Did the repo lack tests? Did it miss an architecture convention?

Use an AI research tool until it produces organized noise. Was retrieval shallow? Did the model confuse evidence with fluent summary?

Use a design tool until the output turns generic — then diagnose why. Weak prompt surface? Missing domain context? The failure itself is the data.

The useful moment is not when the demo works. It is when the product almost works and you can name the missing piece clearly enough to act. That is where engineering detail turns into product judgment.

**中文：**

读前沿产品总结有用。看 demo 有用。Taste 提升最快的地方，是你把工具用到边界出现。

用 coding agent，用到它生成一段你不会 approve 的 change。是 task 没定义清楚？Repo 缺测试？它漏掉了架构约定？

用 AI research tool，用到它生成结构化噪音。Retrieval 太浅？Model 把 evidence 和 fluent summary 混在一起？

用设计工具，用到输出开始 generic，然后诊断原因。Prompt surface 太弱？系统缺 domain context？失败本身就是数据。

有用的时刻是产品几乎可用，但你能把缺失部分说清楚，清楚到可以行动。这就是 engineering detail 变成 product judgment 的地方。

---

## Taste Is Built In Real Workflows
## Taste 是在真实 Workflow 里练出来的

**English:**

Demos hide where taste matters most. You choose the input, path, and ending. Real workflows give you permissions issues, retries, bad data, unclear ownership, partial failure, latency, audit requirements, and users who do not care how clever the system is.

The gap between demo and reality is where taste either proves itself or gets exposed.

**Before:** An agent completes one impressive task in the right environment with a clean input.

**After:** The surrounding system knows what to do when the agent is uncertain, slow, wrong, or half done — and users can tell the difference.

The same logic holds for interfaces and code:

A UI is not good because it looks clean. It is good when the user can inspect state, understand consequence, reverse a mistake, and make the next decision without guessing.

A code change is not good because it compiles. It is good when it preserves invariants, fits the architecture, has tests at the right boundary, and can be owned after the agent leaves.

One review question cuts through all of it: what happens when this fails?

If the answer is vague, taste has not done its job. Real workflows make bad judgment expensive. You ship something, watch where it bends, and learn which failure you should have caught earlier.

**中文：**

Demo 会隐藏最需要 taste 的部分。在 demo 里，你选择输入、路径和结尾。在真实 workflow 里，你要面对权限问题、retry、脏数据、不清楚的 owner、partial failure、latency、audit requirement，以及根本不关心系统有多聪明的用户。

Demo 和现实之间的落差，正是 taste 证明自己或被暴露的地方。

**Before：** Agent 在正确的环境、干净的输入里完成了一个漂亮的任务。

**After：** Agent uncertain、slow、wrong 或 half done 时，周围的 system 也知道该怎么办——用户能感受到区别。

同样的逻辑适用于 UI 和代码：

好的 UI 不是因为它好看，而是让用户能 inspect state、理解 consequence、撤回错误，不用猜就能做下一个 decision。

好的 code change 不是因为它能 compile，而是保留了 invariants、符合架构、在正确边界有 tests，agent 离开后还能被拥有。

一个 review 问题可以穿透所有这些：这东西失败时会发生什么？

如果答案很模糊，taste 还没完成工作。真实 workflow 让错误判断变贵。你 ship 一个东西，看它在哪里弯掉，然后学会哪个 failure 本来应该更早发现。

---

## Taste Improves By Studying Decisions
## Taste 靠研究决策变好

**English:**

Studying finished products — UI, feature list, launch post, metrics — is the obvious move. But taste lives one layer deeper: in the decision trace behind the artifact.

Why this onboarding flow? Why hide power behind a default? Why ship a narrow workflow instead of a broad platform?

Reconstruct what happened. What constraint mattered most? Which alternative did we reject? What did we sacrifice? Which failure mode did we accept?

This matters especially in AI products, where the decision is rarely about features. A good AI workflow is a loop: user pain → input → model action → human inspection → correction → eval → write-back → owner. Every step is a design decision. Study how teams cut or compressed that loop — and what broke when they did.

**中文：**

研究 finished product — UI、feature list、launch post、metrics — 是最直觉的做法。但 taste 在更深一层：artifact 背后的 decision trace。

为什么是这个 onboarding flow？为什么把能力藏在 default 后面？为什么先 ship 窄 workflow 而不是宽 platform？

重建当时发生了什么。最重要的 constraint 是什么？拒绝了哪个 alternative？牺牲了什么？接受了哪个 failure mode？

这在 AI 产品里更重要，因为决策很少只关于功能。好的 AI workflow 是一个 loop：user pain → input → model action → human inspection → correction → eval → write-back → owner。每一步都是设计决策。研究团队怎么压缩或跳过这个 loop——以及跳过后什么坏了。

---

## Taste Can Be Borrowed Before It Is Yours
## Taste 可以先借来，再长出来

**English:**

Find specific operators: a founder whose strategy changes what we build, a designer whose interfaces feel inevitable, an engineer who removes complexity without weakening the system, a product leader who cuts scope without cutting ambition.

Then mimic them. First you copy the surface: how they summarize mess, push back, and turn vague concern into next step.

Later you copy the habit underneath: how they separate urgent from loud, communicate uncertainty, and move through ambiguity without pretending it is gone.

Eventually you realize you were not copying style. You were borrowing a decision system. With enough reality, borrowed taste becomes your own judgment.

**中文：**

找具体的 operator：一个 strategy 会改变我们构建方向的 founder，一个界面做得像"本来就该这样"的 designer，一个能移除复杂度但不削弱系统的 engineer，一个能砍 scope 但不砍 ambition 的 product leader。

然后模仿他们。一开始复制表面：他们怎么总结混乱，怎么 push back，怎么把模糊担忧变成 next step。

后来复制表层下面的习惯：他们怎么区分真正 urgent 和只是 loud，怎么沟通不确定性，怎么穿过 ambiguity 但不假装 ambiguity 消失。

最后你会意识到，你模仿的不是风格。你是在借用一套 decision system。经过足够多的现实反馈，借来的 taste 会变成你自己的判断。

---

## Taste Must Stay Accountable
## Taste 必须接受问责

**English:**

Taste can become a lazy word. "This lacks taste" can mean "I do not like it." "This feels wrong" can mean "I cannot explain my objection."

Real taste must predict something: users will trust this more; the workflow will be clearer; the system will be easier to operate; the eval will catch the important failure; the code will be easier to change.

Taste can act before all data arrives — that is the point. But when data arrives, taste has to meet it. If users behave differently, update. If production fails, ask which assumption was wrong. If the metric contradicts your intuition, do not hide behind status.

Vibes avoid accountability. Taste accepts it and still makes the call.

**中文：**

Taste 很容易变成懒词。"这个没有 taste"可能只是"我不喜欢"。"这里感觉不对"可能只是"我说不清楚反对理由"。

真正的 taste 必须能预测某些东西：用户会更信任这个版本；workflow 会更清楚；系统会更容易运维；eval 会抓住重要 failure；代码会更容易改。

Taste 可以在数据完整之前行动——这正是它的意义。但数据来了，就必须面对数据。如果用户行为不同，就更新。如果 production 失败，就追问哪个 assumption 错了。如果 metric 和 intuition 冲突，不要躲在身份感后面。

Vibes 逃避问责。Taste 接受问责，然后仍然做判断。

---

## The Practical Test
## 最后的实用测试

**English:**

AI makes production cheaper. The scarce ability is no longer producing work — it is selecting, shaping, and rejecting work that is coherent but false before it consumes team capacity and leadership attention.

Taste is that filter.

Can you look at a plausible artifact and say where it will fail? Can you make the claim small enough to test? Can you use the tool long enough to find its boundary? Can you build the workflow around failure, not the demo? Can you read the decision trace behind a good product? Can you update when reality proves your taste wrong?

In the AI era, winning depends less on whether you can generate the next artifact and more on whether you can tell which artifact deserves to exist.

The next posts in this series go deeper on where taste actually develops — what real AI workflows expose, where borrowed judgment breaks down, and how you know when your taste has genuinely become your own.

**中文：**

AI 让生产变便宜了。稀缺的能力不再是产出工作，而是在它消耗团队 capacity 和 leadership attention 之前，选择、塑造，并拒绝那些连贯但不真实的工作。

Taste 就是这个过滤器。

你能不能看着一个 plausible artifact，说出它会在哪里失败？你能不能把 claim 缩小到可以测试？你能不能把工具用到边界出现？你能不能围绕 failure 而不是 demo 构建 workflow？你能不能读出好产品背后的 decision trace？你能不能在现实证明 taste 错了之后更新？

AI 时代如何赢，取决于你能不能判断哪个 artifact 值得存在。

这个系列的后续文章会更深入：真实 AI workflow 暴露了什么，借来的判断在哪里失效，以及你怎么知道 taste 已经真正变成了你自己的。
