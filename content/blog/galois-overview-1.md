+++

title = "伽罗瓦理论概述 1 - 从一元二次到一元五次方程"
date = 2023-11-27
draft = false

[taxonomies]
categories = ["伽罗瓦理论"]
tags = ["数学", "代数学", "抽象代数", "群论"]

[extra]
lang = "zh"
toc = true
mathjax = true

+++

{% good() %}本文内容已完全施工完毕, 读者可放心阅读！{% end %}

{% mathjax_escape() %}

## 引言

由于笔者以往的文章多为以笔记的方式, 记载某一门学科中的信息, 这虽然将一门学科里的许多细节得以呈现, 但却有以下的缺点：

- 了解某些具体/抽象的数学结构并不需要我们真的把学科中巨细无比的细节都学习完才能了解的, 有许多其中的概念与我们所希望去了解的概念也许关联性不大;
- 笔记的形式可能缺乏了很多叙述性的文字描述, 可能并没有提及数学结构的动机与建构过程, 令内容与内容之间的联系较为零散, 这对了解某个数学结构本身并没有帮助.

因此今天决定开一个新的杂谈系列, 从最原始的动机出发, 逐步建立起对某一概念的认知.

## 1. 原始动机与一元二次方程求解

解方程这一问题一直贯彻古典代数学的始终, 也占据着当中非常重要的地位, 由此发展的学科分支数不胜数, 而关于它的可解性更为大众所津津乐道. 当然首先让我们明确根式解的准确定义：

### 定义 1 (一元 $n$ 次方程的根式解)

>任意给定一个一元 $n$ 次方程：
>$$
>a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 = 0 \quad (a_n \neq 0)
>$$
>若根 $x$ 能够使用当中的系数 $a_0, a_1, \dots, a_n$, 有限次四则运算及 $n$ 次开方的公式表述, 则称该存在 **根式解 (solution in radicals)** 或 **代数解 (algebraic solution)** 且该解为 $x$.

当然我们在中学阶段就遇到许多的方程求解问题, 然而有些时候求得结果虽然重要, 但一味无脑地求解事实上就与干苦力活无疑了. 然而数学家们都是很聪明的, 吃力不讨好的活那是绝对不干, 诞生于 16 世纪的法国数学家 **弗朗索瓦·韦达 (François Viète)** 肯定也是这么想的, 为什么我会这么说? 这是因为他揭示了研究根式的正确思路, 即 **在无须将方程的根解出的前提下, 却能得知根与方程系数之间的联系**, 具体的说：

### 定理 2 (韦达定理)

> 设有实 (或复) 系数多项式 $P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 \quad (a_n \neq 0)$, 且令 $P$ 的 $n$ 个根为 $r_1, r_2, \cdots, r_n$, 则以下方程组成立：
> $$
> \begin{dcases}
> \begin{align}
> \sum_{1 \leq i \leq n} r_i & = - \frac{a_{n-1}}{a_n} \\
> \sum_{1 \leq i < j \leq n} r_i r_j & = \frac{a_{n-2}}{a_n} \\
> \sum_{1 \leq i < j < k \leq n} r_i r_j r_k & = - \frac{a_{n-3}}{a_n} \\
> & \vdots \\
> r_1 r_2 \cdots r_n & = (-1)^n \frac{a_0}{a_n}
> \end{align}
> \end{dcases}
> $$
> 我们称上述这一组方程为 **韦达方程组 (Vieta's formulas)**, 而该命题则称为 **韦达定理 (Vieta's theorem)**.

现在让我们考虑以下的这些例子：

1. $x^2 - 2 = 0$;
2. $x^2 + 2x - 5 = 0$;

那么它们究竟哪些方程在什么情况下可解, 又在什么时候无解呢? 对于式 $(1)$ 来说, 显然直接移项便能很轻松地解出它的根为 $\pm \sqrt{2}$. 但如果希望更进一步考虑一元二次方程 $ax^2 + bx + c = 0 \quad (a \neq 0)$ 的通解, 就是我们希望同时透过一条通用的求根公式去解出 $(1), (2)$, 那该怎么办呢? 首先根据韦达定理, 我们建立了根与方程系数之间的联系：
$$
\begin{dcases}
\begin{align}
r_1 + r_2 & = -\frac{b}{a} \\
r_1 r_2 & =  \frac{c}{a}
\end{align}
\end{dcases}
$$
我们注意到这里的根存在某种 "对称性" 在内, 即交换 $r_1$ 与 $r_2$ 并不影响我们的结论, 然而正是由于这样子的对称性, 我们无法直接解出根 $r_1$ 与 $r_2$ 究竟是什么, 不过我们可以再深挖一下这样的对称性对解方程究竟还有什么隐秘的作用, 因此先稍微将对称多项式的概念抽象出来：

### 定义 3 (对称多项式)

>设有一个 $n$ 元多项式 $P(x_1, x_2, \cdots, x_n)$, 对任意 $1 \leq k \leq n$, 置换 $x_k$, 其中取 $k = 1, 2, \cdots, n$ 后多项式的结果不变, 即：
>$$
>P(x_1, x_2, \cdots, x_n) = P\b{ x_{\sigma(1)}, x_{\sigma(2)}, \cdots, x_{\sigma(n)} }
>$$
>则称 $P$ 为 **对称多项式 (symmetric polynomial)**.

此外, 我们再另外定义一组特殊的对称多项式：

### 定义 4 (初等对称多项式)

>我们称以下这一组对称多项式为 **初等对称多项式 (elementary symmetric polynomial)**：
>$$
>\begin{dcases}
>\begin{align}
>P_1(x_1, x_2, \cdots, x_n) & = \sum_{1 \leq i \leq n} x_i \\
>P_2(x_1, x_2, \cdots, x_n) & = \sum_{1 \leq i < j \leq n} x_i x_j \\
>P_3(x_1, x_2, \cdots, x_n) & = \sum_{1 \leq i < j < k \leq n} x_i x_j x_k \\
>& \vdots \\
>P_n(x_1, x_2, \cdots, x_n) & = x_1 x_2 \cdots x_n
>\end{align}
>\end{dcases}
>$$

可见第一章韦达定理中的方程组的左侧皆为初等对称多项式. 另一方面, 事实上对任意的对称多项式都可以表示为初等对称多项式, 具体即为：

### 命题 5 (任意对称多项式皆可表示为初等对称多项式)

>对于任意一个对称多项式 $P(x_1, x_2, \cdots, x_n)$, 我们总能找到一个基础对称多项式 $Q(x_1, x_2, \cdots, x_n)$ 使得：
>$$
>P(x_1, x_2, \cdots, x_n) = Q(x_1, x_2, \cdots, x_n)
>$$

这意味着我们可以建立起以下一系列的联系：
$$
\text{根式解中由系数组成的多项式} \iff \text{基础对称多项式} \iff \text{任意的对称多项式}
$$
请不要忘记我们的初衷是希望找到一元二次方程的通解公式, 而韦达定理中的式子都是对称的所以无法直接解出, 或者说解出的结果已扩大到复数域, 这不是我们希望看到的. 那么我们为何不考虑重塑一个新的方程组, 并将其对称性破坏呢? 例如 $\begin{dcases}
\begin{align}
r_1 + r_2 & = -\frac{b}{a} \\
r_1 - r_2 & = \varphi
\end{align}
\end{dcases}$, 如果能求解得到 $\varphi$ 便能直接解出 $r_1, r_2$, 那么就必须找到一种方式去关联某一特定的非对称多项式与对称多项式, 才华横溢的 18 世纪意大利裔法国数学家 **约瑟夫·拉格朗日 (Joseph Lagrange)** 首先注意到了这一点, 虽说 $r_1 - r_2$ 并不是对称多项式, 可 $(r_1 - r_2)^2$ 是呀！

又根据我们上述的一系列联系, $(r_1 - r_2)^2$ 既是个对称多项式, 那么就必然能够与根式解中由系数组成的多项式关联起来, 即是说：
$$
\begin{align}
\varphi^2 & = (r_1 - r_2)^2 = {r_1}^2 - 2 r_1 r_2 + {r_2}^2 = \b{{r_1}^2 + 2 r_1 r_2 + {r_2}^2} - 4r_1 r_2 \\
& = (r_1 + r_2)^2 - 4 r_1 r_2 = \b{-\frac{b}{a}}^2 - 4 \b{\frac{c}{a}} = \frac{b^2 - 4ac}{a^2}
\end{align}
$$
那么开方一下便能轻松解得 $\displaystyle \varphi = \pm \frac{\sqrt{b^2 - 4ac}}{a}$, 便得到了著名的 **拉格朗日预解式 (Lagrange resolvent)**：
$$
\begin{dcases}
\begin{align}
r_1 + r_2 & = -\frac{b}{a} \\
r_1 - r_2 & = \pm \frac{\sqrt{b^2 - 4ac}}{a}
\end{align}
\end{dcases}
$$
透过对这一预解式移项, 就得到了中学教科书上一元二次方程的求根公式：
$$
r_1, r_2 = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
那么现在透过将式 $(2)$ 的系数代入求根公式就可以知道 $-1 \pm \sqrt{6}$ 便是 $x^2 + 2x - 5 = 0$ 两个根式解.

另一方面, 关于方程是否有解这个问题, 当然也是可以事先进行判断的, 关键在于 $b^2 - 4ac$ 的部分, 这一部分我们称为一元二次方程的 **判别式 (discriminant)**, 通常用 $\Delta_2$ 表示它, 该值反馈了根式解的不同情况：

- 当 $\Delta_2 \geq 0$ 时, 则根 $r_1, r_2$ 皆为实数;
- 当 $\Delta_2 = 0$ 时, 则 $r_1$ 与 $r_1$ 相等 (即存在重根);
- 当 $\Delta_2 < 0$ 时, 则 $r_1, r_2$ 是一对共轭的复数根.

那么我们就无须完全解出整个方程而得知方程根的信息了.

## 2. 一元三次方程的通解

而一元三次方程 $ax^3 + bx^2 + cx + d = 0 \quad (a \neq 0)$ 应该怎么解, 事实上这比解一元二次方程要复杂得多, 而仿照先前的思路, 我们应该能获得一个关于一元三次方程的预解式. 因此我们更需再好好研究一下二次方程的预解式 $\begin{dcases}
\begin{align}
r_1 + r_2 & = -\frac{b}{a} \\
r_1 - r_2 & = \varphi
\end{align}
\end{dcases}$ 究竟蕴含着什么神奇之处.

从上述方程组中可以见得 $r_1 + r_2$ 是本来由韦达定理则可直接获得的式子, 我们略过它. 把重点放在非对称多项式 $r_1 - r_2$ 上, 可以发现这一方程的系数 $1$ 与 $-1$ 恰好是 $x^2 - 1 = 0$ 的两个解 (即二次本原单位根), 那么按照这个思路大胆假设, 一元三次方程的预解式中其中一个非对称的式子的系数应该就是 $x^3 - 1 = 0$ 于复数域中的三个解 (三次本原单位根), 亦即是说我们分别将 $k = 1, 2, 3$ 代入三次本原单位根 $\zeta^k = \b{e^{\frac{2}{3} \pi i}}^k$ 后就有：
$$
\large \zeta^1 = e^{\frac{2}{3}\pi i}, \qquad \zeta^2 = e^{\frac{2}{3}\pi 2i} = e^{\frac{4}{3} \pi i}, \qquad \zeta^3 = e^{\frac{2}{3}\pi 3 i} = e^{2\pi i} = 1
$$
而根据 **欧拉公式 (Euler's formula)** 我们就能得到根在复平面上的几何对应：
$$
\begin{align}
\zeta^1 & = \cos \b{\frac{2}{3} \pi} + \sin \b{\frac{2}{3} \pi} i = -\frac{1}{2} + \frac{\sqrt 3}{2} i \\
\zeta^2 & = \cos \b{\frac{4}{3} \pi} + \sin \b{\frac{4}{3} \pi} i = -\frac{1}{2} - \frac{\sqrt 3}{2} i \\
\zeta^3 & = \cos \b{\frac{6}{3} \pi} + \sin \b{\frac{6}{3} \pi} i = 1 \\
\end{align}
$$
那么预解式中的不对称多项式大概就如同 $\zeta r_1 + \zeta^2 r_2 + r_3$. 然而这并不是个对称多项式, 因此无法直接用原方程的系数 $a,b, c, d$ 去表示, 而顺着一元二次方程中求得预解式的思路, 我们又可猜测, 既然 $r_1 - r_2$ 的平方就是对称多项式了, 那么 $(\zeta r_1 + \zeta^2 r_2 + r_3)^3$ 呢? 我们把该式展开并整理：
$$
\begin{align}
(\zeta r_1 + \zeta^2 r_2 + r_3)^3 & = \zeta^6 {r_2}^3 + 3 \zeta^5 r_1 {r_2}^2 + 3 \zeta^4 {r_1}^2 r_2 + 3 \zeta^4 {r_2}^2 r_3 + \zeta^3 {r_1}^3 + 6 \zeta^3 r_1 r_2 r_3 + 3 \zeta^2 r_2 {r_3}^2 + 3 \zeta^2 {r_1}^2 r_3 + 3 \zeta r_1 {r_3}^2 + {r_3}^3 \\

& = ({r_1}^3 + {r_2}^3  + {r_3}^3) + 6 r_1 r_2 r_3 + 3 \zeta^2 r_1 {r_2}^2 + 3 \zeta {r_1}^2 r_2 + 3 \zeta {r_2}^2 r_3 + 3 \zeta^2 r_2 {r_3}^2 + 3 \zeta^2 {r_1}^2 r_3 + 3 \zeta r_1 {r_3}^2 \\

& = ({r_1}^3 + {r_2}^3  + {r_3}^3) + 6 r_1 r_2 r_3 + 3 \zeta r_1 r_2 r_3 \b{ \frac{ r_1 + \zeta r_2 }{r_3} + \frac{ r_2 + \zeta r_3 }{r_1} + \frac{ \zeta r_1 + r_3 }{r_2} } \\
\end{align}
$$
可见 $(\zeta r_1 + \zeta^2 r_2 + r_3)^3$ 可被分解为 $3$ 组项加在一块. 然而并不像 $(r_1 - r_2)^2$, 对于 $r_1, r_2$ 我们只有 $2! = 2$ 种置换的可能性, 对于 $r_1, r_2, r_3$ 则共有 $3! = 6$ 种可能的置换, 我们必须逐一分析这 $3$ 组项的对称性：

其中的项 $({r_1}^3 + {r_2}^3 + {r_3}^3)$, $6 r_1 r_2 r_3$ 与 $3 \zeta r_1 r_2 r_3$ 是完全对称的, 我们无论如何置换 $r_1, r_2, r_3$ 都不会令结果发生任何改变, 所以可以忽略不计.

现在设剩余的部分为 $P \coloneqq \displaystyle \frac{ r_1 + \zeta r_2 }{r_3} + \frac{ r_2 + \zeta r_3 }{r_1} + \frac{ \zeta r_1 + r_3 }{r_2}$, 那么 $P$ 的对称性究竟如何? 因为只要 $(\zeta r_1 + \zeta^2 r_2 + r_3)^3$ 的其他部分是对称的, 那么该多项式的对称性就依赖于 $P$. 那么考虑将置换群 $S_3$ 作用于根 $r_1, r_2, r_3$ 上, 则有：
$$
S_{\set{r_1, r_2, r_3}} \coloneqq \set{ \sigma_1 = (r_1), \sigma_2 = (r_1\ r_2), \sigma_3 = (r_1\ r_3), \sigma_4 = (r_2\ r_3), \sigma_5 = (r_1\ r_2\ r_3), \sigma_6 = (r_1\ r_3\ r_2)  }
$$
那么就存在以下这些情况：
$$
\begin{align}
\sigma_1(P) & = \frac{ r_1 + \zeta r_2 }{r_3} + \frac{ r_2 + \zeta r_3 }{r_1} + \frac{ \zeta r_1 + r_3 }{r_2} = P \\
\sigma_2(P) & = \frac{ r_2 + \zeta r_1 }{r_3} + \frac{ r_1 + \zeta r_3 }{r_2} + \frac{ \zeta r_2 + r_3 }{r_1} = Q \\
\sigma_3(P) & = \frac{ r_2 + \zeta r_1 }{r_3} + \frac{ r_1 + \zeta r_3 }{r_2} + \frac{ \zeta r_2 + r_3 }{r_1} = Q \\
\sigma_4(P) & = \frac{ r_2 + \zeta r_1 }{r_3} + \frac{ r_1 + \zeta r_3 }{r_2} + \frac{ \zeta r_2 + r_3 }{r_1} = Q \\
\sigma_5(P) & = \frac{ r_1 + \zeta r_2 }{r_3} + \frac{ r_2 + \zeta r_3 }{r_1} + \frac{ \zeta r_1 + r_3 }{r_2} = P \\
\sigma_6(P) & = \frac{ r_1 + \zeta r_2 }{r_3} + \frac{ r_2 + \zeta r_3 }{r_1} + \frac{ \zeta r_1 + r_3 }{r_2} = P \\

\end{align}
$$
可见上述式子有三个特殊情况, 分别经过 $\sigma_2, \sigma_3,\sigma_4$ 置换后得出的结论并不是 $P$ 自身而是新的多项式 $Q$, 因此该式不是对称的, 多项式 $(\zeta r_1 + \zeta^2 r_2 + r_3)^3$ 当然就不是对称的了, 那么有没有一种可能是我们所取的次数太少, 不是 $3$ 而应该取得比这个更高的数呢? 事实上拉格朗日的一个学生证明了对于一元三次方程, 其对称性最高次项就是 $3$, 不存在更高的了, 应该如何破解这个困局?

还是天才般的拉格朗日首先想到关于它的解决方法, 虽然 $P$ 不是对称多项式, 可 $P + Q$ 与 $P \cdot Q$ 一定是对称的! 我们来验证一下：
$$
\begin{align}
P + Q & = \b{\frac{ r_1 + \zeta r_2 }{r_3} + \frac{ r_2 + \zeta r_3 }{r_1} + \frac{ \zeta r_1 + r_3 }{r_2}} + \b{\frac{ r_2 + \zeta r_1 }{r_3} + \frac{ r_1 + \zeta r_3 }{r_2} + \frac{ \zeta r_2 + r_3 }{r_1}} \\
& = \frac{ (r_1 + \zeta r_2) + (\zeta r_1 + r_2) }{r_3} + \frac{ (r_2 + \zeta r_3) + (\zeta r_2 + r_3) }{r_1} + \frac{ (\zeta r_1 + r_3) + (r_1 + \zeta r_3) }{r_2} \\
& = \frac{ (r_1 + r_2) + \zeta (r_1 + r_2) }{r_3} + \frac{ (r_2 + r_3) + \zeta ( r_2 + r_3) }{r_1} + \frac{ (r_1 + r_3) + \zeta (r_1 + r_3) }{r_2} \\
& = \frac{ (r_1 + r_2)(1 + \zeta) }{r_3} + \frac{ (r_2 + r_3)(1 + \zeta) }{r_1} + \frac{ (r_1 + r_3)(1 + \zeta) }{r_2} \\
& = \frac{1 + \zeta}{r_1 r_2 r_3} \bigg [(r_1 + r_2) r_1 r_2 + (r_2 + r_3) r_2 r_3 + (r_1 + r_3)r_1 r_3 \bigg] \\
& = \frac{1 + \zeta}{r_1 r_2 r_3} \bigg\{ \bigg[(r_1 + r_2 + r_3) - r_3 \bigg] r_1 r_2 + \bigg[(r_1 + r_2 + r_3) - r_1 \bigg] r_2 r_3 + \bigg[(r_1 + r_2 + r_3) - r_2 \bigg]r_1 r_3 \bigg\} \\
& = \frac{1 + \zeta}{r_1 r_2 r_3} \bigg[ (r_1 + r_2 + r_3)(r_1 r_2 + r_2 r_3 + r_1 r_3) - 3 r_1 r_2 r_3 \bigg] \\\\

P \cdot Q & = \b{\frac{ r_1 + \zeta r_2 }{r_3} + \frac{ r_2 + \zeta r_3 }{r_1} + \frac{ \zeta r_1 + r_3 }{r_2}} \b{\frac{ r_2 + \zeta r_1 }{r_3} + \frac{ r_1 + \zeta r_3 }{r_2} + \frac{ \zeta r_2 + r_3 }{r_1}} \\
& = \bb{\frac{ (r_1 + \zeta r_2)r_1 r_2 + (r_2 + \zeta r_3) r_2 r_3 + (\zeta r_1 + r_3) r_1 r_3 }{r_1 r_2 r_3} } \bb{\frac{ (r_2 + \zeta r_1) r_1 r_2 + (r_1 + \zeta r_3) r_1 r_3 + (\zeta r_2 + r_3) r_2 r_3 }{r_1 r_2 r_3}} \\
& = \frac{1}{{r_1}^2 {r_2}^2 {r_3}^2} \bigg[ (r_1 + \zeta r_2)r_1 r_2 + (r_2 + \zeta r_3) r_2 r_3 + (\zeta r_1 + r_3) r_1 r_3 \bigg] \bigg[ (r_2 + \zeta r_1) r_1 r_2 + (r_1 + \zeta r_3) r_1 r_3 + (\zeta r_2 + r_3) r_2 r_3 \bigg] \\

& = \cdots \\
& = \frac{1}{{r_1}^2 {r_2}^2 {r_3}^2} \bigg[ \zeta ^2 \left(r_2 r_3 r_1{}^4+r_1{}^3 r_2{}^3+r_1 r_3 r_2{}^4+3 r_1{}^2 r_2{}^2 r_3{}^2+r_1{}^3 r_3{}^3+r_2{}^3 r_3{}^3+r_1 r_2 r_3{}^4\right) \\
& \phantom{..............} + \zeta \left(2 r_3 r_1{}^3 r_2{}^2+r_1{}^4 r_2{}^2+2 r_1 r_3{}^3 r_2{}^2+r_3{}^4 r_2{}^2+2 r_3 r_1{}^2 r_2{}^3+r_1{}^2 r_2{}^4+2 r_2 r_1{}^3 r_3{}^2+r_1{}^4 r_3{}^2+2 r_1 r_2{}^3 r_3{}^2+r_2{}^4 r_3{}^2+2 r_2 r_1{}^2 r_3{}^3+r_1{}^2 r_3{}^4\right) \\
& \phantom{..............} + r_2 r_3 r_1{}^4+r_1{}^3 r_2{}^3+r_1 r_3 r_2{}^4+3 r_1{}^2 r_2{}^2 r_3{}^2+r_1{}^3 r_3{}^3+r_2{}^3 r_3{}^3+r_1 r_2 r_3{}^4 \bigg] \\

& = \frac{1}{{r_1}^2 {r_2}^2 {r_3}^2} \bigg\{ \zeta^2 \bb{ r_1 r_2 r_3({r_3}^3 + {r_2}^3 + {r_1}^3) + (r_1{}^3 r_2{}^3 + r_1{}^3 r_3{}^3 + r_2{}^3 r_3{}^3) + 3 r_1{}^2 r_2{}^2 r_3{}^2 } \\
& \phantom{..............} + \zeta \bb{ 2 r_1 r_2 r_3 (r_1 r_2 (r_1 + r_2) + r_1 r_3(r_1 + r_3) + r_2 r_3(r_2 + r_3)) + {r_1}^2 {r_2}^2({r_1}^2 + {r_2}^2) + {r_1}^2 {r_3}^2 (r_1{}^2 + r_3{}^2) + {r_2}^2 {r_3}^2(r_2{}^2 + r_3{}^2) } \\
& \phantom{..............} + r_1 r_2 r_3(r_3{}^3 + r_2{}^3 + r_1{}^3) + (r_1{}^3 r_2{}^3 + r_1{}^3 r_3{}^3 + r_2{}^3 r_3{}^3) + 3 r_1{}^2 r_2{}^2 r_3{}^2 r_3{}^3\bigg\} \\

\end{align}
$$
从上述可见, 我们以任意的方式交换 $r_1, r_2, r_3$ 所得的结论都相同, 因此就有办法构造出一元三次方程的预解式了. 但在构造预解式之前, 参考一元二次方程的情况, 首先需要求得对称多项式 $(r_1 - r_2)^2$ 的结果, 然后再开方才能获得预解式中的结论, 那么在一元三次方程中也是类似的, 先考虑解出前置的结论：
$$
\begin{dcases}
\begin{align}
{\Phi_1}^3 + {\Phi_2}^3 & = \alpha \\
{\Phi_1}^3 {\Phi_2}^3 & = \beta
\end{align}
\end{dcases}
$$
其中设 $\begin{dcases}
\begin{align}
\Phi_1 & = \zeta r_1 + \zeta^2 r_2 + r_3 \\
\Phi_2 & = \zeta^2 r_1 + \zeta r_2 + r_3 \\
\end{align}
\end{dcases}$, 你可能会问, 该式子中的 $\Phi_2$ 从何而来? 我们可以观察到只要对 $P$ 置换 $r_1, r_2$ 就能立即得到 $Q$, 而先前 ${\Phi_1}^3$ 的展开式中可见其他的项又都是对称的, 故得到 ${\Phi_2}^3$, 并且若将 ${\Phi_1}^3, {\Phi_2}^3$ 视为整体, 则上述这组多项式皆为基本对称多项式！

另一方面, 为了简化复杂的运算, 对于一般的一元三次方程 $ax^3 + bx^2 + cx + d = 0 \quad (a \neq 0)$ 我们首先考虑对其最高次项的系数归一化：
$$
x^3 + \frac{b}{a}x^2 + \frac{c}{a}x + \frac{d}{a} = 0
$$
且设上式 $b' = \frac{b}{a}, c' = \frac{c}{a}, d' = \frac{d}{a}$, 则产生了新的方程 $x^3 + b'x^2 + c'x + d' = 0$, 事实上这个式子的二次项 $b'x^2$ 还可以再进一步去除, 我们考虑令 $x$ 为某一平移变换 $x = y + k$, 则只需挑选合适的 $k$ 使得 $y^2$ 的系数为 $0$ 即可. 那么现在代入 $x^3, x^2$ 后可得：

$$
\begin{align}
x^3 & = (y + k)^3 = y^3 + 3y^2 k + 3y k^2 + k^3 \\
x^2 & = (y + k)^2 = y^2 + 2yk + k^2
\end{align}
$$

再代入原方程 $x^3 + b'x^2 + c'x + d' = 0$ 就有：
$$
(y^3 + 3y^2 k + 3y k^2 + k^3) + b'(y^2 + 2yk + k^2) + c'(y + k) + d' = 0
$$
可见 $y^2$ 的系数为 $3k + b'$, 我们令其为 $0$ 则能挑选出合适的 $k = -\frac{b}{3a}$ 即可消除原式的二次项, 现在再将 $x = y - \frac{b}{3a}$ 代入回去原式：
$$
\begin{align}
x^3 + b'x^2 + c'x + d' & = \b{y - \frac{b}{3a}}^3 + \frac{b}{a}\b{y - \frac{b}{3a}}^2 + \frac{c}{a}\b{y - \frac{b}{3a}} + \frac{d}{a} \\
& = \bb{y^3 + 3 y^2 \b{-\frac{b}{3a}} + 3y \b{-\frac{b}{3a}}^2 + \b{-\frac{b}{3a}}^3}
+ \frac{b}{a} \bb{ y^2 + 2y \b{-\frac{b}{3a}} + \b{-\frac{b}{3a}}^2 }
+ \frac{cy}{a} - \frac{bc}{3a^2} + \frac{d}{a} \\
& = \b{y^3 - \frac{b y^2}{a} + \frac{b^2 y}{3a^2} - \frac{b^3}{27a^3}} + \b{\frac{by^2}{a} - \frac{2b^2 y}{3a^2} + \frac{b^3}{9a^3}} + \frac{cy}{a} - \frac{bc}{3a^2} + \frac{d}{a} \\
& = y^3 + \b{- \frac{b^2}{3a^2} + \frac{c}{a}}y + \b{\frac{2b^3}{27a^3} - \frac{bc}{3a^2} + \frac{d}{a}} \\
& = y^3 + \b{-\frac{b^2 - 3ac}{3a^2}}y + \b{\frac{2b^3 - 9abc + 27 a^2 d}{27a^3}} \\
\end{align}
$$
我们便得到了一个无二次项的新方程 $y^3 + py + q = 0$, 其中 $\begin{dcases}
\begin{align}
p & = -\frac{b^2 - 3ac}{3a^2} \\
q & = \frac{2b^3 - 9abc + 27 a^2 d}{27a^3}
\end{align}
\end{dcases}$. 在做好足够的前置功夫后, 现在回过头来让我们解出 $\alpha, \beta$, 假设 $r_1, r_2, r_3$ 为 $y^3 + py + q = 0$ 的三个解, 而根据韦达定理, 对 $y^3 + py + q = 0$ 则有 $\begin{dcases}
\begin{align}
r_1 + r_2 + r_3 & = 0 \\
r_1 r_2 + r_1 r_3 + r_2 r_3 & = p \\
r_1 r_2 r_3 & = -q
\end{align}
\end{dcases}$. 另一方面, 我们对 ${\Phi_1}^3 + {\Phi_2}^3$ 因式分解后又有：
$$
\begin{align}
{\Phi_1}^3 + {\Phi_2}^3
& = ({\Phi_1} + {\Phi_2})({\Phi_1}^2 - {\Phi_1} {\Phi_2} + {\Phi_2}^2) \\
& = ({\Phi_1} + {\Phi_2})[{\Phi_1}^2 + (\zeta + \zeta^2)\Phi_1 \Phi_2 + {\Phi_2}^2] \\
& = ({\Phi_1} + {\Phi_2})({\Phi_1}^2 + \zeta \Phi_1 \Phi_2 + \zeta^2 \Phi_1 \Phi_2 + \zeta^3 {\Phi_2}^2) \\
& = ({\Phi_1} + {\Phi_2})[{\Phi_1}(\Phi_1 + \zeta \Phi_2) + \zeta^2 \Phi_2(\Phi_1 + \zeta \Phi_2)] \\
& = ({\Phi_1} + {\Phi_2})(\Phi_1 + \zeta \Phi_2)(\Phi_1 + \zeta^2 \Phi_2)
\end{align}
$$
其中又分别有：
$$
\begin{align}
{\Phi_1} + {\Phi_2} & = (\zeta r_1 + \zeta^2 r_2 + r_3) + (\zeta^2 r_1 + \zeta r_2 + r_3) = (\zeta + \zeta^2)r_1 + (\zeta^2 + \zeta)r_2 + 2r_3 \\
& = -(r_1 + r_2 - 2r_3) = -[(r_1 + r_2 + r_3) - 3r_3] = 3r_3 \\\\

\Phi_1 + \zeta \Phi_2 & = (\zeta r_1 + \zeta^2 r_2 + r_3) + \zeta (\zeta^2 r_1 + \zeta r_2 + r_3) = (\zeta r_1 + \zeta^2 r_2 + r_3) + (r_1 + \zeta^2 r_2 + \zeta r_3) \\
& = (\zeta + 1)r_1 + 2 \zeta^2 r_2 + (\zeta + 1)r_3 = (\zeta + 1)(r_1 + r_3) + 2 \zeta^2 r_2 = 2 \zeta^2 r_2 -(\zeta + 1)r_2 \\
& = 2 \zeta^2 r_2 - \b{-\frac{1}{2} + \frac{\sqrt 3}{2} i + 1} r_2 = 2 \zeta^2 r_2 - \b{\frac{1}{2} + \frac{\sqrt 3}{2} i} r_2 = 2 \zeta^2 r_2 - (- \zeta^2)r_2 = 3 \zeta^2 r_2 \\\\

\Phi_1 + \zeta^2 \Phi_2 & = (\zeta r_1 + \zeta^2 r_2 + r_3) + \zeta^2 (\zeta^2 r_1 + \zeta r_2 + r_3) =  (\zeta r_1 + \zeta^2 r_2 + r_3) + (\zeta^4 r_1 + \zeta^3 r_2 + \zeta^2 r_3) \\
& = 2 \zeta r_1 + (\zeta^2 + 1) r_2 + (\zeta^2 + 1) r_3 = 2 \zeta r_1 + (\zeta^2 + 1)(r_2 + r_3) = 2 \zeta r_1 - (\zeta^2 + 1)r_1 \\
& = 2 \zeta r_1 - \b{ -\frac{1}{2} - \frac{\sqrt 3}{2} i + 1 }r_1 = 2 \zeta r_1 - \b{ \frac{1}{2} - \frac{\sqrt 3}{2} i }r_1 = 2 \zeta r_1 - (- \zeta)r_1 = 3 \zeta r_1
\end{align}
$$
因此 ${\Phi_1}^3 + {\Phi_2}^3 = 3 r_3 \cdot 3 \zeta^2 r_2 \cdot 3 \zeta r_1 = 27 r_1 r_2 r_3 = -27q$, 另一方面, 对 ${\Phi_1}^3 {\Phi_2}^3$ 进行计算：
$$
\begin{align}
{\Phi_1}^3 {\Phi_2}^3 & = (\zeta r_1 + \zeta^2 r_2 + r_3)^3 \cdot (\zeta^2 r_1 + \zeta r_2 + r_3)^3 \\
& = \cdots \\
& = 9 \bb{ -3 r_1 r_2 r_3 \left(r_1+r_2+r_3\right)^3 + 3 \left(r_1 r_2+r_3 r_2+r_1 r_3\right)^2 \left(r_1+r_2+r_3\right)^2 - 3 \left(r_1 r_2+r_3 r_2+r_1 r_3\right)^3 } \\
& = -27p^3

\end{align}
$$
至此我们最终得到了 $\begin{dcases}
\begin{align}
{\Phi_1}^3 + {\Phi_2}^3 & = -27q \\
{\Phi_1}^3 {\Phi_2}^3 & = -27p^3
\end{align}
\end{dcases}$, 而再次将 ${\Phi_1}^3, {\Phi_2}^3$ 皆视为一个整体, 由韦达定理我们知道它们恰好就是以下一元二次方程的两个解：
$$
\begin{align}
(\omega - {\Phi_1}^3)(\omega - {\Phi_2}^3)
& = \omega^2 - ({\Phi_1}^3 + {\Phi_2}^3)\omega + {\Phi_1}^3 {\Phi_2}^3 \\
& = \omega^2 + 27q \omega - 27p^3 \\
& = 0

\end{align}
$$
那么再由二次方程的求根公式则可解得：
$$
\begin{align}
{\Phi_1}^3, {\Phi_2}^3 & = \frac{-27q \pm \sqrt{(27q)^2 - 4(-27p^3)}}{2} \\
& = - \frac{27q}{2} \pm \frac{ \sqrt{ \frac{ 4 \cdot 27^2 q^2 }{4} + 4 \cdot 27p^3 } }{2} \\
& = - \frac{27q}{2} \pm \frac{ \sqrt{4} \sqrt{ \frac{ 27^2 q^2 }{4} + 27p^3 } }{2} \\
& = - \frac{27q}{2} \pm \sqrt{ \b{\frac{ 27q }{2} }^2 + 27p^3 } \\\\

\Phi_1, \Phi_2 & = \root{3}\of{- \frac{27q}{2} \pm \sqrt{ \b{\frac{ 27q }{2} }^2 + 27p^3} }
\end{align}
$$
在得到这个结论后, 我们便能构造出一元三次方程 $y^3 + py + q = 0$ 的预解式, 即 $\begin{dcases}
\begin{align}
r_1 + r_2 + r_3 & = 0 \\
\zeta r_1 + \zeta^2 r_2 + r_3 & = \Phi_1 \\
\zeta^2 r_1 + \zeta r_2 + r_3 & = \Phi_2 \\
\end{align}
\end{dcases}$, 而根据 $\zeta^2 + \zeta + 1 = 0$, 我们可解得以下结果：
$$
\begin{align}
\pmatrix{
1 & 1 & 1 & 0 \\
\zeta & \zeta^2 & 1 & \Phi_1 \\
\zeta^2 & \zeta & 1 & \Phi_2
} & \implies
\pmatrix{
1 & 1 & 1 & 0 \\
0 & \zeta^2 - \zeta & 1 - \zeta & \Phi_1 \\
0 & \zeta - \zeta^2 & 1 - \zeta^2 & \Phi_2
} \implies
\pmatrix{
1 & 1 & 1 & 0 \\
0 & 1 & - \frac{1}{\zeta} & \frac{L}{\zeta^2 - \zeta} \\
0 & 0 & -\frac{1}{\zeta} (\zeta^2 - \zeta) + 1 - \zeta^2 & \frac{L}{\zeta^2 - \zeta}(\zeta^2 - \zeta) + \Phi_2
} \\ & \implies
\pmatrix{
1 & 1 & 1 & 0 \\
0 & 1 & - \frac{1}{\zeta} & \frac{\Phi_1}{\zeta^2 - \zeta} \\
0 & 0 & 1 & \frac{\Phi_1 + \Phi_2}{3}
} \implies
\pmatrix{
1 & 1 & 0 & - \frac{\Phi_1 + \Phi_2}{3} \\
0 & 1 & 0 & \frac{\Phi_1 + \Phi_2}{3} \cdot \frac{1}{\zeta} + \frac{\Phi_1}{\zeta^2 - \zeta} \\
0 & 0 & 1 & \frac{\Phi_1 + \Phi_2}{3}
} \\ & \implies
\pmatrix{
1 & 0 & 0 & - \frac{1}{3}(\Phi_1 + \Phi_2) - \frac{1}{3}(\zeta \Phi_1 + \zeta^2 \Phi_2) \\
0 & 1 & 0 & \frac{1}{3}(\zeta \Phi_1 + \zeta^2 \Phi_2) \\
0 & 0 & 1 & \frac{1}{3}(\Phi_1 + \Phi_2)
} \implies
\pmatrix{
1 & 0 & 0 & \frac{1}{3}(\zeta^2 \Phi_1 + \zeta \Phi_2) \\
0 & 1 & 0 & \frac{1}{3}(\zeta \Phi_1 + \zeta^2 \Phi_2) \\
0 & 0 & 1 & \frac{1}{3}(\Phi_1 + \Phi_2)
}
\end{align}
$$

并且我们将下式代换上去：
$$
\begin{align}
\frac{\Phi_1 + \Phi_2}{3} \cdot \frac{1}{\zeta} - \frac{\Phi_1}{2 \zeta + 1}
& = \frac{\Phi_1 + \Phi_2}{3 \zeta} - \frac{\Phi_1}{2 \zeta + 1}
= \frac{(\Phi_1 + \Phi_2)(2 \zeta + 1)}{3 \zeta (2 \zeta + 1)} - \frac{3 \zeta \Phi_1}{3 \zeta(2 \zeta + 1)} \\
& = \frac{2 \zeta \Phi_1 + 2 \zeta \Phi_2 + \Phi_1 + \Phi_2 - 3 \zeta \Phi_1}{3 \zeta(2 \zeta + 1)}
= \frac{(1 - \zeta)\Phi_1 + (2 \zeta + 1)\Phi_2}{3 \zeta(2 \zeta + 1)} \\
& = \frac{(1 - \zeta)\Phi_1}{3(2 \zeta^2 + \zeta)} +\frac{\Phi_2}{3 \zeta} & \text{使用 $(1)$} \\
& = \frac{1}{3} \b{ \frac{\Phi_2}{\zeta} - \frac{(\zeta - 1)\Phi_1}{(\zeta + 1)(\zeta - 1)} }
= \frac{1}{3} \b{ \frac{\Phi_2}{\zeta} - \frac{\Phi_1}{\zeta + 1} }
= \frac{1}{3} \b{ \frac{\Phi_2}{ \zeta} + \frac{\Phi_1}{ \zeta^2} } \\
& = \frac{1}{3} \b{ \frac{\zeta^2 \Phi_2}{\zeta^3} + \frac{\zeta \Phi_1}{\zeta^3} } & \text{分母 $\zeta$ 凑出 $3$ 次项} \\
& = \frac{1}{3} \b{ \zeta \Phi_1 + \zeta^2 \Phi_2 } \\\\

2 \zeta^2 + \zeta & = \zeta^2 + (\zeta^2 + \zeta) = \zeta^2 - 1 \\
& = (\zeta + 1)(\zeta - 1) \tag{1} \\\\

- \frac{1}{3}(\Phi_1 + \Phi_2) - \frac{1}{3}(\zeta \Phi_1 + \zeta^2 \Phi_2) & = - \frac{1}{3} \b{ (1 + \zeta)\Phi_1 + (1 + \zeta^2) \Phi_2 }
= - \frac{1}{3} (- \zeta^2 \Phi_1 - \zeta \Phi_2) \\
& = \frac{1}{3} (\zeta^2 \Phi_1 + \zeta \Phi_2)
\end{align}
$$
最终就得到了 $y^3 + py + q = 0$ 的预解式方程组的三个根 $\begin{dcases}
\begin{align}
r_1 & = \frac{1}{3}(\zeta^2 \Phi_1 + \zeta \Phi_2) \\
r_2 & = \frac{1}{3}(\zeta \Phi_1 + \zeta^2 \Phi_2) \\
r_3 & = \frac{1}{3}(\Phi_1 + \Phi_2) \\
\end{align}
\end{dcases}$, 但请不要忘记, 先前我们消除二次项的步骤是代入 $x = y - \frac{b}{3a}$ 使得我们的根平移变换, 因此原方程 $ax^3 + bx^2 + cx + d = 0 \quad (a \neq 0)$ 的三个根为 $\begin{dcases}
\begin{align}
x_1 & = \frac{1}{3}(\zeta^2 \Phi_1 + \zeta \Phi_2) - \frac{b}{3a} \\
x_2 & = \frac{1}{3}(\zeta \Phi_1 + \zeta^2 \Phi_2) - \frac{b}{3a} \\
x_3 & = \frac{1}{3}(\Phi_1 + \Phi_2) - \frac{b}{3a} \\
\end{align}
\end{dcases}$, 现在再将 $\begin{dcases}
\begin{align}
p & = -\frac{b^2 - 3ac}{3a^2} \\
q & = \frac{2b^3 - 9abc + 27 a^2 d}{27a^3}
\end{align}
\end{dcases}$ 代换回到 $\Phi_1, \Phi_2$ 就得到：
$$
\begin{align}
\Phi_1, \Phi_2 & = \root{3}\of{- \frac{27q}{2} \pm \sqrt{ \b{\frac{ 27q }{2} }^2 + 27p^3} } \\
& = \root{3}\of{- \frac{27 \b{\frac{2b^3 - 9abc + 27 a^2 d}{27a^3}}}{2} \pm \sqrt{ \b{\frac{ 27 \b{\frac{2b^3 - 9abc + 27 a^2 d}{27a^3}} }{2} }^2 + 27 \b{ -\frac{b^2 - 3ac}{3a^2} }^3} } \\
& = \root{3}\of{- \frac{2b^3 - 9abc + 27 a^2 d}{2 a^3} \pm \sqrt{ \b{\frac{ 2b^3 - 9abc + 27 a^2 d }{2 a^3} }^2 - \frac{(b^2 - 3ac)^3}{a^6}}} \\
& = \root{3}\of{\frac{9abc - 2b^3 - 27 a^2 d}{2 a^3} \pm \frac{3 \sqrt{3}}{2 a^2} \sqrt{-(b^2 c^2 - 4ac^3 - 4 b^3 d + 18abcd - 27 a^2 d^2)}} \\
\end{align}
$$
而仿照一元二次方程的思路, 其中我们又可定义一元三次方程的判别式 $\Delta_3 \coloneqq b^2 c^2 - 4ac^3 - 4 b^3 d + 18abcd - 27 a^2 d^2$, 并且：

- 当 $\Delta_3 > 0$ 时, 方程有三个不同的实根.
- 当 $\Delta_3 = 0$ 时, 方程的三个根 $x_1, x_2, x_3$ 皆为实根;
- 当 $\Delta_3 < 0$ 时, 方程有一个实根 $x_3$ 及两个共轭复根 $x_1, x_2$;

那么若设 $\begin{dcases}
\begin{align}
\Phi_1 & = \root{3}\of{\frac{9abc - 2b^3 - 27 a^2 d}{2 a^3} + \frac{3 \sqrt{3}}{2 a^2} \sqrt{-\Delta_3}} \\
\Phi_2 & = \root{3}\of{\frac{9abc - 2b^3 - 27 a^2 d}{2 a^3} - \frac{3 \sqrt{3}}{2 a^2} \sqrt{-\Delta_3}}
\end{align}
\end{dcases}$ 并代入原根式的方程组, 则有：
$$
\begin{dcases}
\begin{align}
x_1 & = \frac{1}{3} \b{\zeta^2 \root{3}\of{\frac{9abc - 2b^3 - 27 a^2 d}{2 a^3} + \frac{3 \sqrt{3}}{2 a^2} \sqrt{-\Delta_3}} + \zeta \root{3}\of{\frac{9abc - 2b^3 - 27 a^2 d}{2 a^3} - \frac{3 \sqrt{3}}{2 a^2} \sqrt{-\Delta_3}}} - \frac{b}{3a} \\
x_2 & = \frac{1}{3} \b{\zeta \root{3}\of{\frac{9abc - 2b^3 - 27 a^2 d}{2 a^3} + \frac{3 \sqrt{3}}{2 a^2} \sqrt{-\Delta_3}} + \zeta^2 \root{3}\of{\frac{9abc - 2b^3 - 27 a^2 d}{2 a^3} - \frac{3 \sqrt{3}}{2 a^2} \sqrt{-\Delta_3}}} - \frac{b}{3a} \\
x_3 & = \frac{1}{3} \b{\root{3}\of{\frac{9abc - 2b^3 - 27 a^2 d}{2 a^3} + \frac{3 \sqrt{3}}{2 a^2} \sqrt{-\Delta_3}} + \root{3}\of{\frac{9abc - 2b^3 - 27 a^2 d}{2 a^3} - \frac{3 \sqrt{3}}{2 a^2} \sqrt{-\Delta_3}}} - \frac{b}{3a} \\
\end{align}
\end{dcases}
$$

## 3. 一元四次方程的通解

对于一元四次方程 $ax^4 + bx^3 + cx^2 + dx + e = 0 \quad (a \neq 0)$, 仿照先前的思路, 首先将其化为首一多项式：
$$
x^4 + b'x^3 + c'x^2 + d'x + e' = 0
$$
其中 $b' = \frac{b}{a}, c' = \frac{c}{a}, d' = \frac{d}{a}, e' = \frac{e}{a}$, 接着代入 $x = y - \frac{b}{4a}$ 以消除三次项, 那么便得到：
$$
\begin{align}
x^4 + b'x^3 + c'x^2 + d'x + e' & = \b{ y - \frac{b}{4a} }^4 + \frac{b}{a} \b{ y - \frac{b}{4a} }^3 + \frac{c}{a} \b{ y - \frac{b}{4a} }^2 + \frac{d}{a} \b{ y - \frac{b}{4a} } + \frac{e}{a} \\
& = y^4 + \b{ \frac{8 a c-3 b^2}{8 a^2} } y^2 + \b{ \frac{b^3-4 a c b+8 a^2 d}{8 a^3} } y + \frac{-3 b^4+16 a c b^2-64 a^2 d b+256 a^3 e}{256 a^4}
\end{align}
$$
因此就得到 $y^4 + py^2 + qy + r = 0$ 的系数 $\begin{dcases}
\begin{align}
p & = \frac{8 a c-3 b^2}{8 a^2} \\
q & = \frac{b^3-4 a c b+8 a^2 d}{8 a^3} \\
r & = \frac{-3 b^4+16 a c b^2-64 a^2 d b+256 a^3 e}{256 a^4} \\
\end{align}
\end{dcases}$, 那么假设 $r_1, r_2, r_3, r_4$ 为该方程组的四个解, 现在我们考虑它的预解式中其中一个非对称多项式 $P \coloneqq \zeta r_1 + \zeta^2 r_2 + \zeta^3 r_3 + \zeta^4 r_4$, 其中 $\zeta^k = \b{e^{\frac{2}{4} \pi i}}^k$ 为四次本原单位根：
$$
\zeta^1 = i, \quad \zeta^2 = -1, \quad \zeta^3 = -i, \quad \zeta^4 = 1
$$
那么 $P^4$ 在置换群 $S_4$ 的作用下共有 $4! = 24$ 种可能的置换, 并且在消除重复项后共有 $6$ 种, 我们设为：
$$
\begin{dcases}
\begin{align}
{\Phi_1}^4 & = \left(r_1+\zeta ^1 r_2+\zeta ^2 r_3+\zeta ^3 r_4\right){}^4 = \left(\zeta ^3 r_1+r_2+\zeta ^1 r_3+\zeta ^2 r_4\right){}^4 = \left(\zeta ^2 r_1+\zeta ^3 r_2+r_3+\zeta ^1 r_4\right){}^4 = \left(\zeta ^1 r_1+\zeta ^2 r_2+\zeta ^3 r_3+r_4\right){}^4 \\
{\Phi_2}^4 & = \left(r_1+\zeta ^1 r_2+\zeta ^3 r_3+\zeta ^2 r_4\right){}^4 = \left(\zeta ^3 r_1+r_2+\zeta ^2 r_3+\zeta ^1 r_4\right){}^4 = \left(\zeta ^1 r_1+\zeta ^2 r_2+r_3+\zeta ^3 r_4\right){}^4 = \left(\zeta ^2 r_1+\zeta ^3 r_2+\zeta ^1 r_3+r_4\right){}^4 \\
{\Phi_3}^4 & = \left(r_1+\zeta ^2 r_2+\zeta ^1 r_3+\zeta ^3 r_4\right){}^4 = \left(\zeta ^2 r_1+r_2+\zeta ^3 r_3+\zeta ^1 r_4\right){}^4= \left(\zeta ^3 r_1+\zeta ^1 r_2+r_3+\zeta ^2 r_4\right){}^4 = \left(\zeta ^1 r_1+\zeta ^3 r_2+\zeta ^2 r_3+r_4\right){}^4 \\
{\Phi_4}^4 & = \left(r_1+\zeta ^2 r_2+\zeta ^3 r_3+\zeta ^1 r_4\right){}^4 = \left(\zeta ^2 r_1+r_2+\zeta ^1 r_3+\zeta ^3 r_4\right){}^4 = \left(\zeta ^1 r_1+\zeta ^3 r_2+r_3+\zeta ^2 r_4\right){}^4 = \left(\zeta ^3 r_1+\zeta ^1 r_2+\zeta ^2 r_3+r_4\right){}^4 \\
{\Phi_5}^4 & = \left(r_1+\zeta ^3 r_2+\zeta ^1 r_3+\zeta ^2 r_4\right){}^4 = \left(\zeta ^1 r_1+r_2+\zeta ^2 r_3+\zeta ^3 r_4\right){}^4 = \left(\zeta ^3 r_1+\zeta ^2 r_2+r_3+\zeta ^1 r_4\right){}^4 = \left(\zeta ^2 r_1+\zeta ^1 r_2+\zeta ^3 r_3+r_4\right){}^4 \\
{\Phi_6}^4 & = \left(r_1+\zeta ^3 r_2+\zeta ^2 r_3+\zeta ^1 r_4\right){}^4 = \left(\zeta ^1 r_1+r_2+\zeta ^3 r_3+\zeta ^2 r_4\right){}^4 = \left(\zeta ^2 r_1+\zeta ^1 r_2+r_3+\zeta ^3 r_4\right){}^4 = \left(\zeta ^3 r_1+\zeta ^2 r_2+\zeta ^1 r_3+r_4\right){}^4 \\
\end{align}
\end{dcases}
$$
同样地, 可以验证上述这一组多项式皆非对称, 而参照一元三次方程的情况, 若将 ${\Phi_k}^4, k = 1,2 , \cdots, 6$ 视为一个整体, 我们可以知道它们是以下六次方程的解：
$$
(\omega - {\Phi_1}^4)(\omega - {\Phi_2}^4) \cdots (\omega - {\Phi_6}^4) = 0
$$
然而我们可以发现, 想要解出以上 $6$ 次方程组, 计算量是极其庞大的, 在没有计算机辅助的年代这几乎是不可能的事情, 然而古人是怎么解决的呢? 退一步思考, 拉格朗日想到, 由 ${\Phi_k}^4, k = 1,2, \cdots, 6$ 所得到的这组对称基本多项式, $4$ 次方已是令它们可以产生对称性的极限, 可这并不意味着好算, 俗话说退一步开阔天空, 我们也许能够从 $\Phi_1 , \dots \Phi_6$ 中得出一组比 $4$ 更低次的一组置换 $\Psi_l$ 中 $1 \leq l \leq k$, 使得较容易得出由 $\Psi_1, \Psi_2, \cdots$ 所组成的对称多项式? 让我们首先对 $\Phi_1$ 展开并观察：
$$
\Phi_1 = r_1 + \zeta^1 r_2 + \zeta^2 r_3 + \zeta^3 r_4 = (r_1 - r_3) + (r_2 - r_4) i
$$
可以看到它的复共轭为 $\overline{\Phi_1} = (r_1 - r_3) - (r_2 - r_4) i = r_1 + \zeta^3 r_2 + \zeta^2 r_3 + \zeta^1 r_4 = \Phi_6$, 也就是恰好为 $S_4$ 的另一个置换 $\Phi_6$ 结果！而它们之间的乘积则为：
$$
\Phi_1 \cdot \overline{\Phi_1} = \Phi_1 \cdot \Phi_6 = |\Phi_1|^2 = \b{\sqrt{ (r_1 - r_3)^2 + (r_2 - r_4)^2 }}^2 = (r_1 - r_3)^2 + (r_2 - r_4)^2
$$
其中 $|\Phi_1|$ 表示为 $\Phi_1$ 的复模长, 可以发现当 $r_1$ 与 $r_3$ 作为一组对换, 以及 $r_2$ 与 $r_4$ 作一组对换时仍保证了对称性：
$$
(r_1 - r_3)^2 = (r_3 - r_1)^2, \qquad (r_2 - r_4)^2 = (r_4 - r_2)^2
$$
仿照上述步骤, 我们将剩余所有 $\Phi_1, \cdots, \Phi_6$ 的共轭关系整理并罗列出来：
$$
\begin{align}
\Phi_1 & = r_1 + \zeta^1 r_2 + \zeta^2 r_3 + \zeta^3 r_4 = (r_1 - r_3) + (r_2 - r_4)i \\
\overline{\Phi_1} & = (r_1 - r_3) - (r_2 - r_4) i = r_1 + \zeta^3 r_2 + \zeta^2 r_3 + \zeta^1 r_4 = \Phi_6 \\\\
\Phi_2 & = r_1 + \zeta^1 r_2 + \zeta^3 r_3 + \zeta^2 r_4 = (r_1 - r_4) + (r_2 - r_3)i  \\
\overline{\Phi_2} & = (r_1 - r_4) - (r_2 - r_3)i = r_1 + \zeta^3 r_2 + \zeta^1 r_3 + \zeta^2 r_4 = \Phi_5 \\\\
\Phi_3 & = r_1 + \zeta^2 r_2 + \zeta^1 r_3 + \zeta^3 r_4 = (r_1 - r_2) + (r_3 - r_4)i \\
\overline{\Phi_3} & = (r_1 - r_2) - (r_3 - r_4)i = r_1 + \zeta^2 r_2 + \zeta^3 r_3 + \zeta^1 r_4 = \Phi_4
\end{align}
$$
因此便得出了在消除重复项后的全部三组共轭 $\begin{dcases}
\begin{align}
\Psi_1 = \Phi_1 \overline{\Phi_1} = \Phi_1 \Phi_6 = (r_1 - r_3)^2 + (r_2 - r_4)^2 \\
\Psi_2 = \Phi_2 \overline{\Phi_2} = \Phi_2 \Phi_5 = (r_1 - r_4)^2 + (r_2 - r_3)^2 \\
\Psi_3 = \Phi_3 \overline{\Phi_3} = \Phi_3 \Phi_4 = (r_1 - r_2)^2 + (r_3 - r_4)^2 \\
\end{align}
\end{dcases}$, 这组结论恰好就是以下方程的解：
$$
(\omega - \Psi_1)(\omega - \Psi_2)(\omega - \Psi_3)
= \omega^3 - \alpha \omega^2 + \beta \omega - \gamma
= 0
$$
其中根据韦达定理我们有 $\begin{dcases}
\begin{align}
\Psi_1 + \Psi_2 + \Psi_3 & = \alpha \\
\Psi_1 \Psi_2 + \Psi_2 \Psi_3 + \Psi_1 \Psi_3 & = \beta \\
\Psi_1 \Psi_2 \Psi_3 & = \gamma \\
\end{align}
\end{dcases}$, 亦即是说其中的 $\alpha, \beta, \gamma$ 皆为基本对称多项式的结果, 现在目标就很明确了, 只需展开这三个多项式并在化为基础对称多项式后代入 $y^4 + py^2 + qy + r = 0$ 的韦达定理方程组：
$$
\begin{dcases}
\begin{align}
r_1 + r_2 + r_3 + r_4 & = 0 \\
r_1 r_2 + r_1 r_3 + r_1 r_4 + r_2 r_3 + r_2 r_4 + r_3 r_4 & = p \\
r_1 r_2 r_3 + r_1 r_2 r_4 + r_1 r_3 r_4 + r_2 r_3 r_4 & = -q\\
r_1 r_2 r_3 r_4 & = r \\
\end{align}
\end{dcases}
$$
透过逐步的运算则可解得 $\alpha, \beta, \gamma$：
$$
\begin{align}
\Psi_1 + \Psi_2 + \Psi_3 & = \bb{(r_1 - r_3)^2 + (r_2 - r_4)^2} + \bb{(r_1 - r_4)^2 + (r_2 - r_3)^2} + \bb{(r_1 - r_2)^2 + (r_3 - r_4)^2} \\
& = 3 \left(r_1+r_2+r_3+r_4\right){}^2-8 \left(r_1 r_2 + r_1 r_3 + r_1 r_4 + r_2 r_3 + r_2 r_4 + r_3 r_4\right) \\
& = -8p \\\\

\Psi_1 \Psi_2 + \Psi_2 \Psi_3 + \Psi_1 \Psi_3 & = 3 \left(r_1+r_2+r_3+r_4\right){}^4-16 \left(r_1 r_2 + r_1 r_3 + r_1 r_4 + r_2 r_3 + r_2 r_4 + r_3 r_4\right) \left(r_1+r_2+r_3+r_4\right){}^2 \\
& \phantom{...} + 4 \left(r_1 r_2 r_3 + r_1 r_2 r_4 + r_1 r_3 r_4 + r_2 r_3 r_4\right) \left(r_1+r_2+r_3+r_4\right) \\
& \phantom{...} + 20 \left(r_1 r_2 + r_1 r_3 + r_1 r_4 + r_2 r_3 + r_2 r_4 + r_3 r_4\right){}^2-16 r_1 r_2 r_3 r_4 \\
& = 20p^2 - 16r \\\\

\Psi_1 \Psi_2 \Psi_3 & = \left(r_1+r_2+r_3+r_4\right){}^6-8 \left(r_1 r_2 + r_1 r_3 + r_1 r_4 + r_2 r_3 + r_2 r_4 + r_3 r_4\right) \left(r_1+r_2+r_3+r_4\right){}^4 \\
& \phantom{...} + 4 \left(r_1 r_2 r_3 + r_1 r_2 r_4 + r_1 r_3 r_4 + r_2 r_3 r_4\right) \left(r_1+r_2+r_3+r_4\right){}^3 \\
& \phantom{...} + 20 \left(r_1 r_2 + r_1 r_3 + r_1 r_4 + r_2 r_3 + r_2 r_4 + r_3 r_4\right){}^2 \left(r_1+r_2+r_3+r_4\right){}^2 \\
& \phantom{...} - 24 r_1 r_2 r_3 r_4 \left(r_1+r_2+r_3+r_4\right){}^2 \\
& \phantom{...} - 8 \left(r_1 r_2 + r_1 r_3 + r_1 r_4 + r_2 r_3 + r_2 r_4 + r_3 r_4\right) \left(r_1 r_2 r_3 + r_1 r_2 r_4 + r_1 r_3 r_4 + r_2 r_3 r_4\right) \left(r_1+r_2+r_3+r_4\right) \\
& \phantom{...} - 16 \left(r_1 r_2 + r_1 r_3 + r_1 r_4 + r_2 r_3 + r_2 r_4 + r_3 r_4\right){}^3-8 \left(r_1 r_2 r_3 + r_1 r_2 r_4 + r_1 r_3 r_4 + r_2 r_3 r_4\right){}^2 \\
& \phantom{...} + 64 r_1 r_2 r_3 r_4 \left(r_1 r_2 + r_1 r_3 + r_1 r_4 + r_2 r_3 + r_2 r_4 + r_3 r_4\right) \\
& = -16p^3 - 8q^2 + 64pr
\end{align}
$$
那么现在再将 $\begin{dcases}
\begin{align}
\alpha & = -8p \\
\beta & = 20p^2 - 16r \\
\gamma & = -16p^3 - 8q^2 + 64pr \\
\end{align}
\end{dcases}$ 及 $y^4 + py^2 + qy + r = 0$ 的系数 $\begin{dcases}
\begin{align}
p & = \frac{8 a c-3 b^2}{8 a^2} \\
q & = \frac{b^3-4 a c b+8 a^2 d}{8 a^3} \\
r & = \frac{-3 b^4+16 a c b^2-64 a^2 d b+256 a^3 e}{256 a^4} \\
\end{align}
\end{dcases}$ 代入： 
$$
\begin{align}
\omega^3 - \alpha \omega^2 + \beta \omega - \gamma & = \omega^3 - (-8p) \omega^2 + (20p^2 - 16r) \omega - (-16p^3 - 8q^2 + 64pr) \\
& = \omega^3 + 8p \omega^2 + (20p^2 - 16r) \omega + (16p^3 + 8q^2 - 64pr) \\
& = \omega^3 + \bb{ 8 \b{\frac{8 a c-3 b^2}{8 a^2}} } \omega^2 + \bb{ 20 \b{\frac{8 a c-3 b^2}{8 a^2}}^2 - 16 \b{\frac{-3 b^4+16 a c b^2-64 a^2 d b+256 a^3 e}{256 a^4}} } \omega \\
& \phantom{...} + \bb{ 16 \b{\frac{8 a c-3 b^2}{8 a^2}}^3 + 8 \b{\frac{b^3-4 a c b+8 a^2 d}{8 a^3}}^2 - 64 \b{\frac{8 a c-3 b^2}{8 a^2}} \b{\frac{-3 b^4+16 a c b^2-64 a^2 d b+256 a^3 e}{256 a^4}} } \\
\end{align}
$$
最后根据我们先前组第二章中解得的一元三次方程的通解即可解得 $\omega^3 - \alpha \omega^2 + \beta \omega - \gamma = 0$ 的三个解 $\Psi_1, \Psi_2, \Psi_3$ (但解的结果太夸张了这里根本写不下, 我们就默认解出来了, 想得到具体结果请使用 MatLab 或 Mathematica 进行计算), 进而我们便可以解出 $y^4 + py^2 + qy + r = 0$ 的四个解 $r_1, r_2, r_3, r_4$：
$$
\begin{dcases}
\begin{align}
\Psi_1 = \Phi_1 \overline{\Phi_1} = \Phi_1 \Phi_6 = (r_1 - r_3)^2 + (r_2 - r_4)^2  \\
\Psi_2 = \Phi_2 \overline{\Phi_2} = \Phi_2 \Phi_5 = (r_1 - r_4)^2 + (r_2 - r_3)^2 \\
\Psi_3 = \Phi_3 \overline{\Phi_3} = \Phi_3 \Phi_4 = (r_1 - r_2)^2 + (r_3 - r_4)^2 \\
\end{align}
\end{dcases}
$$

## 4. 一元五次方程的通解...？

在历史上, 数学家们也是尝试跟解出一元二次, 三次, 四次方程的通解那般去处理一元五次方程, 尝试先透过构造方程的预解式, 然后再透过降次解出最终想要的结论, 例如我们解一元三次方程的通解本质上是要解出一元二次方程 $(\omega - {\Phi_1}^3)(\omega - {\Phi_2}^3)$ 的解, 而解一元四次方程本质上是要解出一元三次方程 $(\omega - \Psi_1)(\omega - \Psi_2)(\omega - \Psi_3)$ 的解, 因此自然地对于一元五次方程, 拉格朗日也是循着这个思路尝试将五次降到四次, 进而解出一元五次方程的通解, 然而套用这个方法之后, 拉格朗日发现想要解出它的通解, 就必须解出一个一元六次方程, 后来他已经在自己的论文《关于代数方程解的思考》中隐晦地表示一元五次方程解可能并没有通解, 然而想要证明：

### 定理 6 (Abel–Ruffini 定理)

> 任意给定一个五次或以上的方程：
> $$
> a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 = 0 \quad (n \geq 5, a_n \neq 0)
> $$
> 则不存在一个通用的求根公式, 能够用系数 $a_0, a_1, \dots, a_n$ 的有理数的有限次四则运算及开根号就可以表述它的根式解.

却并不是件容易的事情, 这需要一个崭新的框架去叙述这一切. 而揭晓这一奥秘, 则还需要等待 **埃瓦里斯特·伽罗瓦 (Évariste Galois)** 的出现...

## 5. 参考链接

本文参考了以下链接中的内容：

- [伽罗瓦理论概述 (四、一元高次方程的解法本质) - 知乎](https://zhuanlan.zhihu.com/p/376242058)
- [伽罗瓦理论概述 (五、拉格朗日预解式) - 知乎](https://zhuanlan.zhihu.com/p/376261066)
- [一元四次方程的拉格朗日预解式 - 知乎](https://zhuanlan.zhihu.com/p/581994088)
- [Lagrange quartic resolvent $x_1 + ix_2 - x_3 - ix_4$ - MathStackExchange](https://math.stackexchange.com/questions/4169174/lagrange-quartic-resolvent-x-1ix-2-x-3-ix-4/4414815#4414815)
- [LAGRANGE'S SOLUTION TO THE QUARTIC - David Smyth](https://sites.math.washington.edu/~jarod/math404A-spring21/quartic.pdf)

{% end %}
