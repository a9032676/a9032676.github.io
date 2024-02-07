+++

title = "数学分析 1 - 数列, 级数的极限与判别方式"
date = 2023-12-25
draft = false

[taxonomies]
categories = ["数学分析"]
tags = ["数学", "分析学", "微积分", "数学分析"]

[extra]
lang = "zh"
toc = true
mathjax = true

+++

{% good() %}本文内容已完全施工完毕, 读者可放心阅读！{% end %}

{% mathjax_escape() %}

## 1.1. 极限与级数

### 注释

本笔记参照清华大学于品教授的 **数学分析之课程讲义** 撰写并整理, 且会将一些已然掌握之处或书上已给出的详尽证明从略带过.

### 注释 (数列和点列)

我们将一列数 $x_1, x_2, \cdots, x_m, \cdots$ 一字排开, 我们称其为 **数列 (series)**, 用 $\set{x_n}_{n \geq 1}$ 表示, 而实际上这一列数为映射 $\Map{x_{(-)}}{\Z_{\geq 1}}{\R}{k}{x_k}$.

另一方面, 如若给定列恰当的度量空间 $(X, d)$ 及映射 $\Map{x_{(-)}}{\Z_{\geq 1}}{X}{k}{x_k}$, 则称上述的 $\set{x_n}_{n \geq 1}$ 为度量空间 $X$ 中的一个 **点列 (series)**.

### 注释 (有界数列)

设 $\set{x_n}_{n \geq 1}$ 为任意数列：


- 若 $\Exists{M \in \R} \Forall{n \in \N^\times} x_n \leq M$, 则称 $M$ 为 $\set{x_n}_{n \geq 1}$ 的 **上界 (upper bound)**, 最小的上界称为 **上确界 (supremum)**, 记为 $\displaystyle \sup_{n \geq 1} x_n$;
- 若 $\Exists{m \in \R} \Forall{n \in \N^\times} m \leq x_n$, 则称 $m$ 为 $\set{x_n}_{n \geq 1}$ 的 **下界 (upper bound)**, 最大的下界称为**下确界 (infimum)**, 记为 $\displaystyle \inf_{n \geq 1} x_n$;
- 若 $\set{x_n}_{n \geq 1}$ 既有上界又有下界, 则可等价地表述为 $\Exists{M > 0} \Forall{n \in \N^\times} |x_n| \leq M$, 并简称该数列是 **有界的 (bounded)**.
- 若 $\Forall{M > 0} \Exists{n \in \N^\times} |x_n| > M$, 则称 $\set{x_n}_{n \geq 1}$ 是 **无界的 (unbounded)**.

点列亦是类似的, 只需将 $|\cdot|$ 替换为合适的度量 $d$ 即可.

### 定义 1.1.1 (数列的极限, 收敛与发散)

设 $\set{x_n}_{n \geq 1}$ 为实数列：

1. 若 $\Forall{\epsilon > 0} \Exists{N \in \N^\times} \Forall{n \geq N} |x_n - x| < \epsilon$, 则称 $\set{x_n}_{n \geq 1}$ **存在极限 (limit exists)** 且 $x$ 为 $\set{x_n}$ 的 **极限 (limit of a sequence)** 或 $\set{x_n}$ **收敛 (convergent)** 到 $x$, 并记作 $\displaystyle \lim_{n \to \infin} x_n = x$;
2. 若 $\Forall{M > 0} \Exist{N \in \N^\times} \Forall{n \geq N} x_n \geq M$, 则称 $x_n$ **收敛到正无穷**;
3. 若 $\Forall{M > 0} \Exist{N \in \N^\times} \Forall{n \geq N} x_n \leq -M$, 则称 $x_n$ **收敛到负无穷**;
4. 若上述 $(2)$ 或 $(3)$ 其中之一成立, 我们就称 $x_n$ 是 **发散的 (divergence)**.

### 注释

- 同样地, 对于度量空间 $(X, d)$, 我们称点列于其中有极限只须将上述条件中的 $|x_n - x| < \epsilon$ 换为 $d(x_n, x) < \epsilon$ 即可, 记号完全相同.

- 我们直观上总要认为 $\epsilon$ 是非常小的数, 而 $N$ 是非常大的数.

- 上述的 $N$ 是在 $\epsilon$ 选定后再作选择的, 他通常依赖于 $\epsilon$ 的大小, 所以对于 $N$ 我们在一些时候会写成 $N = N(\epsilon)$ 表示这种依赖性.

- 若一个数列的极限不为 $x$ (可能是收敛/不收敛的), 那么则可用以下逻辑表述：
  $$
  \neg \b{\Forall{\epsilon > 0} \Exists{N \in \N^\times} \Forall{n \geq N} |x_n - x| < \epsilon} \iff \b{\Exists{\epsilon > 0} \Forall{N \in \N^\times} \Exists{n \geq N} |x_n - x| \geq \epsilon}.
  $$

- 我们经常非正式地称 "当存在 $N \in \N^\times$ 使得 $n > N$ 时有 ..." 这句话为 "当 $n$ 充分大时有 ...", 这是数学分析中公认的 "黑话" 之一.

### 例子 1.1.2 (利用定义证明极限收敛的初步例子)

- 若 $x_n = x$, 则 $\displaystyle \lim_{n \to \infin} x_n = x$.

  我们按定义来证明, 即对任意的 $\epsilon > 0$, 应找到 $N \in \N^\times$ 使得当 $n \geq N$ 时有 $|x_n - x| = 0 < \epsilon$, 显然从第一项起 $x_n$ 与 $x$ 的距离为 $0$, 我们只需取 $N = 1$ 即可使后续条件成立.

- $\displaystyle \lim_{n \to \infin} \frac{1}{n} = 0$.

  同样按照定义证明, 对任意 $\epsilon > 0$, 只需选取 $\displaystyle N = \left\lfloor \frac{1}{\epsilon} \right\rfloor + 1$, 那么当 $n \geq N$ 时则以下不等式成立：
  $$
  |x_n - 0| = \left| \frac{1}{n} \right| = \frac{1}{n} < \epsilon
  $$

- $\displaystyle \lim_{n \to \infin} \frac{1}{\lambda^n} = 0$, 其中 $\lambda > 1$.

  为了方便我们对上述项进行不等式放缩, 首先阐述一个技术事实, 对任意 $\delta > 0$ 我们假设 $\lambda = 1 + \delta$, 那么根据二项式展开就有：
  $$
  \lambda^n = (1 + \delta)^n = 1 + n\delta + \dots \geq 1 + n\delta.
  $$
  因此根据 Archimedes 原理, 对任意一个数 $M$, 总能选定 $n$ 使得 $\lambda^n > M$.

  接下来便可按照定义证明, 假设对任意 $\epsilon > 0$, 我们对不等式逐步放缩：
  $$
  |x_n - 0| = \frac{1}{\lambda^n} \overset{\text{Archimedes 原理}}{<} \frac{1}{\lambda^N} < \frac{1}{N\delta} < \epsilon
  $$
  显然 $\displaystyle N > \frac{1}{\epsilon \delta}$, 我们只需挑选 $\displaystyle N = \left\lfloor \frac{1}{\epsilon \delta} \right\rfloor + 1$ 即可令上述不等式成立.

### 例子 1.1.4 (既没有极限亦不发散的例子)

一个数列是可以既没有极限亦不发散 (到无穷) 的, 比如说 $\set{x_n}_{n \geq 1}$, 其中 $x_n = (-1)^{n-1}$.

##### 证明

我们分别证明以下事实：

- $\set{x_n}_{n \geq 1}$ 没有极限：

  透过反证法, 我们假设它的极限为 $x$, 根据定义我们取一个非常小的数, 例如给定 $\epsilon = 0.1$, 就会存在 $N \in \N^\times$ 使得当 $n > N$ 时 $|x_n - x| < 0.1$ 成立, 然而我们知道 $x_n$ 中任意两项之差恒为 $2$, 那么对于后续的无穷多项亦然, 那么：
  $$
  2 = \left| x_{N+1} - x_N \right| = \left| (x_{N+1} - x) + (x - x_N) \right| \overset{\text{三角不等式}}{\leq} \left| x_{N+1} - x \right| + \left| x - x_{N} \right| < 0.1 + 0.1 = 0.2
  $$
  便产生了矛盾, 因此该数列不存在极限.

- $\set{x_n}_{n \geq 1}$ 不发散：

  显然, 该数列只会于 $-1$ 与 $1$ 不断横跳, 因此其不可能发散至正/负无穷.

### 注释 (无穷级数)

- 有了极限, 我们就可以定义无限个数求和这一概念, 我们称之为 **无穷级数 (infinite series)**, 一般简称为 **级数 (series)**. 这是极限最重要的第一个应用, 因为几乎所有有意义的数和函数都是透过级数的方式构造而来的.
- 另一方面则又可仿照数列极限的定义研究关于级数极限为 $+\infin$ 或 $-\infin$ 的情形.

现在让我们给出关于级数的精确定义.

### 定义 1.1.5 (级数的极限, 收敛与发散)

设 $a_1, a_2, a_3, \cdots$ 为一无穷实数列, 令 $\displaystyle x_n = \sum_{i = 1}^n a_i$：

1. 若 $\set{x_n}_{n \geq 1}$ 有极限, 则称级数 $a_1 + a_2 + a_3 + \cdots$ **收敛** 且将其 **极限** $\displaystyle \lim_{n \to \infin} x_n$ 记作 $\displaystyle \sum_{i = 1}^\infin a_i$;
2. 若 $\set{x_n}_{n \geq 1}$ 是发散的, 则称级数 $a_1 + a_2 + a_3 + \cdots$ **发散**, 按照数列极限的定义我们当然可定义 $\displaystyle \sum_{i = 1}^\infin a_i = +\infin$ 或 $\displaystyle \sum_{i = 1}^\infin a_i = -\infin$ 并分别称该级数是收敛到正/负无穷的.

### 注释 (度量空间中的情况)

- 在度量空间 $(X, d)$ 中, 我们有收敛的概念, 但一般却不存在级数的概念, 原因是对于点列 $\set{a_k}_{k \geq 1}$, 由于不存在加法运算 $+ : X \times X \to X$, 因此求和 $a_1 + a_2 + \dots + x_n$ 无法被定义.
- 此外, 若度量空间 $X$ 同时为线性空间, 那么则可定义上述的级数, 比如取 $X = \C$, 便可以定义复数的级数.

### 例子 1.1.6 (调和级数)

设 $\set{x_n}_{n \geq 1}$ 为实数列, 定义部分和为：
$$
x_n \coloneqq 1 + \frac{1}{2} + \frac{1}{3} + \dots + \frac{1}{n}, \quad n \in \N^\times
$$

那么我们称无穷级数 $\displaystyle \sum_{n = 1}^\infin \frac{1}{n}$ 为 **调和级数 (harmonic series)**, 它是发散级数的经典例子.

##### 证明

若 $\displaystyle \sum_{n = 1}^\infin \frac{1}{n}$ 发散, 则只需证明其中的第 $n$ 项 $x_n$ 是发散的, 考虑设 $n = 2^{2k}$, 其中 $k \in \N^\times$：
$$
\begin{align}
x_n & = 1 + \frac{1}{2} + \b{\frac{1}{3} + \frac{1}{4}} + \b{\frac{1}{5} + \frac{1}{6} + \frac{1}{7} + \frac{1}{8}} + \dots + \underbrace{\b{\frac{1}{2^{2k-1}+1} + \dots + \frac{1}{2^{2k}}}}_{\text{$2k-1$ 项}} \\

& \geq 1 + \frac{1}{2} + \b{\frac{1}{2^2} + \frac{1}{2^2}} + \b{\frac{1}{2^3} + \frac{1}{2^3} + \frac{1}{2^3} + \frac{1}{2^3}} + \dots + \b{\frac{1}{2^{2k}} + \dots + \frac{1}{2^{2k}}} \\

& > \frac{1}{2} + \frac{1}{2} + 2 \cdot \frac{1}{4} + 4 \cdot \frac{1}{8} + \dots + (2k-1) \cdot \frac{1}{2^{2k}} \\
& = \underbrace{\frac{1}{2} + \frac{1}{2} + \dots + \frac{1}{2}}_{\text{$2k$ 项}} = 2k \cdot \frac{1}{2} = k
\end{align}
$$
因此按照定义, 对任一很大的数 $M > 0$, 我们总能取定 $N = 2^{2k} - 1$ 使得当 $n \geq N$ 时有 $x_n > k$ 成立.

### 命题 1.1.7 (点列的一些基本性质)

给定度量空间 $(X, d)$ 及 $X$ 中的点列 $\set{x_n}_{n \geq 1}$, 则有：

1. 极限的 **唯一性**：若 $\displaystyle \lim_{n \to \infin} x_n = x$ 且 $\displaystyle \lim_{n \to \infin} x_n = y$, 则 $x = y$. 
2. **改变数列中有穷项不改变其的极限**：设有另一点列 $\set{y_n}_{n \geq 1}$ 并且当 $n$ 充分大时 $x_n = y_n$ 则 $\displaystyle \lim_{n \to \infin} x_n = \lim_{n \to \infin} y_n$ 成立.
3. **收敛的子列仍收敛于同一极限**：若点列 $\set{x_n}_{n \geq 1}$ 是收敛的, 则其子列 $\set{x_{n_k}}_{k \geq 1}$ 的极限为 $\displaystyle \lim_{n \to \infin} x_{n_k} = \lim_{n \to \infin} x_n$.
4. 若 $\set{x_n}_{n \geq 1}$ 为收敛的实数列, 则其亦是 **有界的**. (度量空间中的亦可定义有界性)

##### 证明

这里的证明皆较为简单, 具体的证明可参阅讲义, 因此我们略过.

### 注释

- 假设 $1 \leq n_1 < n_2 < \dots < n_k < \cdots$ 为一列上升指标, 且对于 $k \geq 1$ 我们设 $y_k = x_{n_k}$, 则称 $\set{y_k}_{k \geq 1}$ 为 $\set{x_n}$ 的 **子列 (subsequence)**, 子列亦经常记作 $\set{x_{n_k}}_{k \geq 1}$.
- 注意到 $(4)$ 的逆命题并不正确, 例如 $x_n = (-1)^n$ 所给出的数列正是很直观的反例. 然而我们后续还将证明 **若一个数列是有界的, 则其必定包含着收敛子列**.

### 命题 1.1.8 (极限的四则运算与序关系的交换性)

设 $\set{x_n}_{n \geq 1}$ 及 $\set{y_n}_{n \geq 1}$ 为实数列, 则：

1. 数列 $\set{x_n \pm y_n}_{n \geq 1}$ 收敛且 $\displaystyle \lim_{n \to \infin} (x_n \pm y_n) = \lim_{n \to \infin} x_n \pm \lim_{n \to \infin} y_n$;
2. 数列 $\set{x_n \cdot y_n}_{n \geq 1}$ 收敛且 $\displaystyle \lim_{n \to \infin} (x_n \cdot y_n) = \lim_{n \to \infin} x_n \cdot \lim_{n \to \infin} y_n$;
3. 对任意 $\lambda \in \R$, 数列 $\set{\lambda \cdot x_n}$ 收敛且 $\displaystyle \lim_{n \to \infin} (\lambda \cdot x_n) = \lambda \cdot \lim_{n \to \infin} x_n$;
4. 若 $\displaystyle \lim_{n \to \infin} y_n \neq 0$, 则数列 $\displaystyle \Set{ \frac{x_n}{y_n} }_{n \geq n}$ 收敛且 $\displaystyle \lim_{n \to \infin} \frac{x_n}{y_n} = \frac{\displaystyle \lim_{n \to \infin} x_n}{\displaystyle \lim_{n \to \infin} y_n}$;
5. 若 $\set{x_n}_{n \geq 1}$ 及 $\set{y_n}_{n \geq 1}$ 皆收敛且对充分大的 $n$ 有 $x_n \leq y_n$, 则 $\displaystyle \lim_{n \to \infin} x_n \leq \lim_{n \to \infin} y_n$ 成立 (将 $\leq$ 换为 $\geq$ 亦成立).

##### 证明

同样的, 我们略过.

### 注释

- 命题 $(4)$ 中的条件 $\displaystyle \lim_{n \to \infin} y_n \neq 0$ 意味着 "当 $n$ 足够大时, $y_n \neq 0$".

- 命题 $(5)$ 所阐述的是 $\lim$ 与 $\leq$ 可交换. 另一方面, 如若将上述命题替换为 "若对充分大的 $n$ 有 $x_n < y_n$, 则 $\displaystyle \lim_{n \to \infin} x_n < \lim_{n \to \infin} y_n$ " 却是不成立的. 例如设 $x_n = \frac{1}{n^2}$ 而 $y_n = \frac{1}{n}$, 当 $n$ 充分大时, 由于 $n^2$ 的增长速率远大于 $n$, 因此 $\frac{1}{n^2} < \frac{1}{n}$, 但他们的极限皆为 $0$.

- [命题 1.1.8](#命题_1.1.8_(极限的四则运算与序关系的交换性)) 提供了关于数列极限至关重要的可计算性, 例如我们希望得知 $\displaystyle \lim_{n \to \infin} \frac{n^2 + 3n + 2}{n^2 + 1}$ 的极限值, 只需按以下步骤计算：
  $$
  \begin{align}
  \lim_{n \to \infin} \frac{n^2 + 3n + 2}{n^2 + 1}
  & = \lim_{n \to \infin} \frac{\displaystyle 1 + \frac{3}{n} + \frac{2}{n^2}}{\displaystyle 1 + \frac{1}{n^2}}
  = \frac{\displaystyle \lim_{n \to \infin} \b{1 + \frac{3}{n} + \frac{2}{n^2}}}{\displaystyle \lim_{n \to \infin} \b{1 + \frac{1}{n^2}}} \\
  & = \frac{\displaystyle \lim_{n \to \infin} 1 + \lim_{n \to \infin} \frac{3}{n} + \lim_{n \to \infin} \frac{2}{n^2}}{\displaystyle \lim_{n \to \infin} 1 + \lim_{n \to \infin} \frac{1}{n^2}}
  = \frac{1 + 0 + 0}{1 + 0}
  = 1
  \end{align}
  $$

## 1.2. 数列与级数收敛性的判别方式

### 注释 (单调有界定理的引入)

直观上如果一个数列 $\set{x_n}_{n \geq 1}$ 的项随着指标而不断递增 (或递减), 并且它有一个明确的上确界 (或下确界), 显然 $\set{x_n}$ 就应收敛于这个界上, 该定理被称作 **单调有界定理 (monotone convergence theorem)**. 为此我们需明确定义何为递增/递减的数列.

### 定义 1.2.1 (递增/减数列)

设 $\set{x_n}_{n \geq 1}$ 为实数列：

1. 若 $\set{x_n}_{n \geq 1}$ 满足 $x_1 \leq x_2 \leq x_3 \leq \cdots$, 则称之为 **单调递增数列**. (若将 $\leq$ 替换为 $<$ 则称其是 **严格的**)
2. 若 $\set{x_n}_{n \geq 1}$ 满足 $x_1 \geq x_2 \geq x_3 \geq \cdots$, 则称之为 **单调递减数列**. (若将 $\geq$ 替换为 $>$ 则称其是 **严格的**)

### 定理 1.2.2 (单调有界定理)

若单调递增的实数列 $\set{x_n}_{n \geq 1}$ 是有界的, 则 $\set{x_n}_{n \geq 1}$ 收敛且 $\displaystyle \lim_{n \to \infin} x_n = \sup_{n \geq 1} x_n$. (单调递减亦类似)

##### 证明

根据确界原理, 我们知道实数中的有界数列必有上确界, 令 $\displaystyle s = \sup_{n \geq 1} x_n$, 需证明 $\Forall{\epsilon > 0} \Exists{N \in \N^\times} \Forall{n \geq N} |x_n - s| < \epsilon$.

我们知道描述上确界有另一种方式, 对任意一个非常小的 $\epsilon > 0$, 存在 $x_{n_0}$, 使得有 $s - \epsilon < x_{n_0}$.

另一方面, 由于数列单调递增, 我们有 $x_{n_0} \leq x_{n_0 + 1} \leq x_{n_0 + 2} \leq \cdots$, 并且结合上述不等式则有：
$$
s - \epsilon < x_{n_0} \leq x_{n_0 + 1} \leq x_{n_0 + 2} \leq \cdots \overset{\text{$s$ 是 $\set{x_n}_{n \geq 1}$ 的上确界}}{\leq} s < s + \epsilon
$$
这告诉我们只要取 $N = n_0$, 那么当 $n \geq N$ 时 $|x_n - s| < \epsilon$ 必然成立.

### 例子 1.2.3 ($\displaystyle \sum_{k = 1}^\infin \frac{1}{k^2}$ 的收敛性)

作为 [定理 1.2.2](#定理_1.2.2_(单调有界定理)) 的应用, 我们现在证明级数 $\displaystyle \sum_{k = 1}^\infin \frac{1}{k^2} = \frac{1}{1^2} + \frac{1}{2^2} + \frac{1}{3^2} + \cdots$ 是收敛的.

##### 证明

我们定义部分和为 $x_n \coloneqq \displaystyle \sum_{k = 1}^n \frac{1}{k^2}$, 数列 $\set{x_n}_{n \geq 1}$ 显然是单调递增的, 因此只需证明其的有界性：
$$
\begin{align}
\sum_{k = 1}^n \frac{1}{k^2} & = \frac{1}{1^2} + \frac{1}{2^2} + \frac{1}{3^2} + \frac{1}{4^2} + \dots + \frac{1}{(n-1)^2} + \frac{1}{n^2} \\
& \leq 1 + \frac{1}{1 \cdot 2} + \frac{1}{2 \cdot 3} + \frac{1}{3 \cdot 4} + \dots + \frac{1}{(n-2)(n-1)} + \frac{1}{(n-1)n} \\
& = 1 + \b{\frac{1}{1} - \frac{1}{2}} + \b{\frac{1}{2} - \frac{1}{3}} + \b{\frac{1}{3} - \frac{1}{4}} + \dots + \b{\frac{1}{n-2} - \frac{1}{n-1}} + \b{\frac{1}{n-1} - \frac{1}{n}} \\
& = 2 - \frac{1}{n} < 2.
\end{align}
$$

### 注释 (级数的运算性质)

我们对先前的内容作一些适当的补充. 类似于 [命题 1.1.8](#命题_1.1.8_(极限的四则运算与序关系的交换性)) 的 $(1)$ 与 $(3)$, 我们同样可定义关于收敛级数的加减法及线性性质, 我们下设实数项 ($\C$ 或 $\R^n$ 亦成立) 的级数 $\displaystyle \sum_{k = 0}^\infin a_k$ 及 $\displaystyle \sum_{k = 0}^\infin b_k$ 收敛, 则有：

1. 级数 $\displaystyle \sum_{k=0}^\infin (a_k \pm b_k)$ 收敛且 $\displaystyle \sum_{k=0}^\infin (a_k \pm b_k) = \sum_{k=0}^\infin a_k \pm \sum_{k=0}^\infin b_k$;
2. 对任意 $\lambda \in \R$, 级数 $\displaystyle \sum_{k=0}^\infin (\lambda \cdot a_k)$ 收敛且 $\displaystyle \sum_{k=0}^\infin (\lambda \cdot a_k) = \lambda \cdot \sum_{k=0}^\infin a_k$.

证明它们是容易的, 只需直接应用极限的计算性质即可.

### 注释 (不同空间上的度量的概念)

- 对于度量空间 $(X, d)$, 我们按以下方式定义度量空间的通常度量：

  1. 若取 $X = \R^n$, 定义 $d(x, y) \coloneqq \displaystyle \sqrt{\sum_{k=1}^n (x_k - y_k)^2}$, 其中 $x = (x_1, \cdots, x_n)$ 及 $y = (y_1, \cdots, y_n)$;
  2. 若取 $X = \C$, 定义 $d(z_1, z_2) \coloneqq |z_1 - z_2|$, 其中 $|\cdot|$ 表示取复数的模长.

- 假设 $d_1, d_2$ 皆为集合 $X$ 上的度量, 当满足：
  $$
  \Exists{C_1 > 0 \\ C_2 > 0} \Forall{x, y \in X} \bigg( d_2(x, y) \leq C_1 d_1(x, y) \quad 及 \quad d_1(x, y) \leq C_2 d_2(x, y) \bigg)
  $$
  则称 $d_1$ 与 $d_2$ 是 **等价的**, 上述叙述亦等价于：
  $$
  \Exists{c > 0 \\ C > 0} \Forall{x, y \in X} c d_1(x, y) \leq d_2(x, y) \leq C d_1(x, y)
  $$
  比如说, 在 $\R^n$ 中可分别定义三种度量：
  $$
  \begin{align}
  d_1(x, y) & \coloneqq \sum_{k = 1}^n |x_k - y_k| \\
  d_2(x, y) & \coloneqq \sqrt{ \sum_{k=1}^n (x_k - y_k)^2 } \\
  d_\infin(x, y) & \coloneqq \sup_{i = 1, 2, \cdots, n} |x_i - y_i|
  \end{align}
  $$
  而它们事实上都是等价的, 因为：
  $$
  n d_\infin(x, y) \geq d_1(x, y) \geq d_2(x, y) \geq d_\infin(x, y)
  $$
  而由于点列收敛的概念依赖于 $X$ 的度量, 因此当度量等价时, 它们所定义的收敛的概念是一致的.

- 此外, 我们还可以将全体 $n \times n$ 实矩阵的集合 $\bold{M}_n(\R)$ 视为 $\R^{n^2}$, 那么 $\bold{M}_n(\R)$ 也有以下三种度量：
  $$
  \begin{align}
  d_1(A, B) & \coloneqq \sum_{1 \leq i, j, \leq n} |A_{ij} - B_{ij}| \\
  d_2(A, B) & \coloneqq \sqrt{ \sum_{1 \leq i,j \leq n} (A_{ij} - B_{ij})^2 } \\
  d_\infin(A, B) & \coloneqq \sup_{1 \leq i, j \leq n} |A_{ij} - B_{ij}|
  \end{align}
  $$
  其中 $A = (A_{ij})$ 及 $B = (B_{ij})$.

### 注释 (复数与 $n \times n$ 矩阵的点列极限运算性质)

对于复数与 $n \times n$ 矩阵, 我们仍可以讨论关于它们的极限, 下面我们只给出关于矩阵的情形. 设 $\set{A_k}_{k \geq 1}$ 及 $\set{B_k}_{k \geq 1}$ 皆为 $n \times n$ 矩阵所构成的序列且收敛, 则有以下运算性质：

- 序列 $\set{A_k \cdot B_k}_{k \geq 1}$ 收敛且 $\displaystyle \lim_{k \to \infin} (A_k \cdot B_k) = \lim_{k \to \infin} A_k \cdot \lim_{k \to \infin} B_k$;
- 若 $\displaystyle \lim_{k \to \infin} B_k$ 为可逆矩阵 (如非奇异矩阵), 则序列 $\set{ A_k \cdot B_k^{-1} }_{k \geq 1}$ 收敛且 $\displaystyle \lim_{k \to \infin} \b{A_k \cdot B_k^{-1}} = \lim_{k \to \infin} A_k \cdot \lim_{k \to \infin} B_k^{-1}$.

### 注释

透过 [定理 1.2.2](#定理_1.2.2_(单调有界定理)) 我们知道, 如若 $\set{x_n}_{n \geq 1}$ 单调递增而无界, 则 $\displaystyle \lim_{n \to \infin} x_n = +\infin$, 利用这个结果我们可以证明以下的定理, 称之为 **波尔查诺-魏尔斯特拉斯列紧性定理 (Bolzano–Weierstrass sequential compactness theorem)**, 不过首先让我们证明一个引理, 被称为 **单调子列定理 (monotone subsequence theorem)**.

### 引理 1.2.4 (单调子列定理)

对任意实数列 $\set{x_n}_{n \geq 1}$, 我们总能找到一个单调递增 (或递减) 的子列.

##### 证明

首先设 $X \sub \set{x_1, x_2, \cdots, x_n, \cdots}$, 定义 $X \coloneqq \Set{ x_k : \Forall{\ell \geq k} x_k \geq x_\ell }$. 直观上我们总认为 $X$ 中的元素是数列 $\set{x_n}_{n \geq 1}$ 中的 "山峰", 而所谓的数列中的山峰无非就是某些项 $x_k$, 并且数列当在开始走下坡路后, 例如 $x_{k+1}, x_{k+2}, \cdots, x_{k+j}, \cdots$ 这些后续的所有项都来得比 $x_k$ 要小, 也就是 $X$ 中条件 $\Forall{\ell \geq k} x_k \geq x_\ell$ 的由来.

那么现在分别论证：

- 若 $X$ 为无限集, 那么将 $X$ 中元素按下标从小到大排列, 则得到一个递减的子列.

- 若 $X$ 为有限集, 假设 $X$ 中的元素被排列为 $\set{x_{i_1}, x_{i_2}, \cdots, x_{i_\ell}}$ 我们挑选其中指标最靠后的一项 $x_{i_\ell} \in X$, 并且由于直观上 $x_{i_\ell}$ 是数列中的山峰, 也就意味着对于 $x_{i_\ell + 1} \notin X$ 必然小于或等于 $x_{i_\ell}$. 另一方面, 由于所有指标大于 $i_\ell$ 的每一项都不是山峰, 意味着存在 $x_{i_\ell} < x_{i_\ell + j}$ 且 $x_{i_\ell+j}$ 后续的每一项也都不是山峰, 显然我们可以获得一个单调递增的数列 $\Set{x_{i_\ell + (j+k)}}_{k \geq 1}$, 因为：
  $$
  x_{i_\ell + 1} < x_{i_\ell} < x_{i_\ell + j} \leq x_{i_\ell + (j + 1)} \leq x_{i_\ell + (j + 2)} \leq \cdots
  $$

### 定理 1.2.5 (波尔查诺-魏尔斯特拉斯列紧性定理)

任意有界的实数列 $\set{x_n}_{n \geq 1}$ 必有收敛子列.

##### 证明

对任意实数列我们可以直接透过 [引理 1.2.4](#引理_1.2.4_(单调子列定理)) 找到相应的单调子列, 再加上有界性透过 [定理 1.2.2](#定理_1.2.2_(单调有界定理)) 直接得证.

### 注释 (柯西判别准则的引入)

让我们回到数列极限的定义上, 由于其依赖于极限的值, 所以我们是无法在不了解极限值的情况下做证明的, 因此需要找到一种内蕴的方式来判断极限是否存在, 所以我们引入柯西列的概念.

### 定义 1.2.6 (柯西列)

称实数列 $\set{x_n}_{n \geq 1}$ 为 **柯西列 (Cauchy sequence)**, 当满足了 $\Forall{\epsilon > 0} \Exists{N \in \N^\times} \Forall{m, n \geq N} |x_n - x_m| < \epsilon$.

### 引理 1.2.7 (柯西列的基本性质)

1. 柯西列必定有界;
2. 若柯西列的子列收敛, 则该柯西列亦收敛.

##### 证明

我们下设 $\set{x_n}_{n \geq 1}$ 为柯西列：

1. 对任意 $\epsilon > 0$, 我们讨论以下两种情况：

   - 当考虑有穷项时：

     即对任意 $n \in \N^\times$ 并且 $n < N$ 的这些项 $x_n$, 我们知道有穷项的界就是从 $x_1, x_2, \cdots, x_{N-1}$ 中分别取绝对值后再选取他们当中的最大者, 即 $\max(|x_1|, |x_2|, \cdots, |x_{N-1}|)$.

   - 当考虑后续的无穷项时：

     由于在 $n$ 充分大的情况下有 $|x_n - x_m| < \epsilon$, 我们取 $m = N$, 那么 $|x_n - x_N| < \epsilon$ 就意味着：
     $$
     \begin{align}
     |x_n| - |x_N| & \leq |x_n - x_N| < \epsilon \\
     |x_n| & \leq \epsilon + |x_N|
     \end{align}
     $$

   因此结合上述两种情况, 我们只需取 $M = \max \b{|x_1|, |x_2|, \cdots, |x_{N-1}|, \epsilon + |x_N|}$, 那么对任意 $n \in \N^\times$ 则有 $|x_n| \leq M$ 成立.

2. 若 $\set{x_n}_{n \geq 1}$ 的子列 $\set{x_{n_k}}_{k \geq 1}$ 收敛到 $x$, 故有条件 $\displaystyle \Forall{\epsilon > 0} \Exists{N_1 \in \N^\times} \Forall{n_k \geq N_1} |x_{n_k} - x| < \frac{\epsilon}{2}$. 另一方面, 由于 $\set{x_n}_{n \geq 1}$ 为柯西列, 因此又有条件 $\displaystyle \Forall{\epsilon > 0} \Exists{N_2 \in \N^\times} \Forall{m, n \geq N_2} |x_n - x_m| < \frac{\epsilon}{2}$, 那么当我们取 $n_k = \displaystyle \min_{n_k \geq N_1} \set{x_{n_k}} $ 及 $m = n_k$ 则有：
   $$
   \begin{align}
   |x_n - x| \leq |x_n - x_{n_k}| + |x_{n_k} - x| & < \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon
   \end{align}
   $$
   因此对任意 $\epsilon > 0$, 当我们取 $N = \max\b{N_1, N_2}$, 则对任意 $n \geq N$ 上述不等式成立.

### 定理 1.2.8 (柯西判别准则)

设 $\set{x_n}_{n \geq 1}$ 为实数列, 则 $\set{x_n}_{n \geq 1}$ 收敛 $\iff$ $\set{x_n}_{n \geq 1}$ 为柯西列.

##### 证明

$(\Rightarrow)$ 若 $\set{x_n}_{n \geq 1}$ 收敛于 $x$, 那么有 $\displaystyle \Forall{\epsilon > 0} \Exists{N' \in \N^\times} \Forall{n \geq N'} |x_n - x| < \frac{\epsilon}{2}$, 意味着我们可以挑选任意足够大的 $m, n \in \N^\times$ 使得 $\displaystyle |x_n - x| < \frac{\epsilon}{2}$ 及 $\displaystyle |x_m - x| < \frac{\epsilon}{2}$ 成立, 那么我们取 $N = N'$, 对任意 $m, n \geq N$ 时, 结合两个条件则有以下不等式成立：
$$
|x_n - x_m| \leq |x_n - x| + |x - x_m| < \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon.
$$
$(\Leftarrow)$ 若柯西列 $\set{x_n}_{n \geq 1}$ 收敛, 透过 [引理 1.2.4](#引理_1.2.7_(柯西列的基本性质)) 的 $(2)$ 我们只需构造它的一个收敛子列, 由 [引理 1.2.1](#引理_1.2.4_(单调子列定理)) 及  [引理 1.2.4](#引理_1.2.7_(柯西列的基本性质)) 的 $(1)$ 就能找到一个单调有界的子列 $\set{x_{n_k}}_{k \geq 1}$, 最后由 [定理 1.2.2](#定理_1.2.2_(单调有界定理)) 完成证明.

### 例子 1.2.9 (交错调和级数)

比方说, 我们希望证明以下级数是收敛的：
$$
\sum_{k=1}^\infin \frac{(-1)^{k+1}}{k} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots = \frac{\pi}{4}
$$
透过柯西判别准则, 我们可在完全不知其的极限值是 $\frac{\pi}{4}$ 的情况下证得上述级数是收敛的, 以下是具体证明.

##### 证明

设该级数的部分和为 $x_n \coloneqq \displaystyle \sum_{k=1}^n \frac{(-1)^{k+1}}{k}$, 只要 $\set{x_n}_{n \geq 1}$ 是收敛的那么整个级数都将收敛, 不妨设 $m > n$, 则有：
$$
x_m - x_n = \frac{(-1)^{n + 2}}{n + 1} + \frac{(-1)^{n + 3}}{n + 2} + \cdots + \frac{(-1)^{m + 1}}{m}
$$
那么只要当 $n$ 为偶数时：

- 从第二项开始两两结合则有：
  $$
  x_m - x_n = \frac{1}{n + 1} - \underbrace{\b{ \frac{1}{n + 2} - \frac{1}{n + 3} }}_{> 0} - \cdots - \underbrace{\b{ \frac{1}{m - 2} - \frac{1}{m - 1} }}_{> 0} - \frac{1}{m} < \frac{1}{n + 1} < \frac{1}{n}
  $$

- 此外, 只要我们从第三项开始两两结合则又得：
  $$
  x_m - x_n = \frac{1}{n + 1} - \frac{1}{n + 2} + \underbrace{\b{ \frac{1}{n + 3} - \frac{1}{n + 4} }}_{> 0} + \cdots + \underbrace{\b{ \frac{1}{m - 2} - \frac{1}{m - 1} }}_{> 0} + \frac{1}{m} > \frac{1}{n + 1} - \frac{1}{n + 2} = \frac{1}{(n + 1)(n + 2)} > \frac{1}{n}
  $$

而当 $n$ 为奇数时仍可得到上述 (为负的) 结论, 则可得 $\displaystyle |x_m - x_n| < \frac{1}{n}$, 因此对任意 $\epsilon > 0$, 只需取 $\displaystyle N = \frac{1}{\epsilon}$, 当 $m > n \geq N$ 时 $|x_m - x_n| < \epsilon$ 成立.

### 注释

事实上类似于上述的正项交错级数有以下的判别式, 称之为 **交错级数判别式 (alternating series test)**, 而由于该式最早由莱布尼茨发现, 因此又被称为 **莱布尼茨判别式 (Leibniz's test)**.

### 定理 1.2.10 (交错级数判别式)

设 $\set{x_n}_{n \geq 1}$ 为递减的正实数的数列, 且 $\displaystyle \lim_{n \to \infin} x_n = 0$, 则级数 $\displaystyle \sum_{k = 1}^\infin (-1)^{k + 1} x_k$ 收敛.

### 推论 1.2.11 (级数的柯西判别准则)

实数项级数 $\displaystyle \sum_{k = 0}^\infin a_k$ 是收敛的 $\iff$ $\Forall{\epsilon > 0} \Exists{N \in \N^\times} \Forall{n \geq N \\ p \geq 0} \left| \sum_{n \leq k \leq n + p} a_k \right| < \epsilon$.

##### 证明

假设 $\displaystyle \sum_{k = 0}^\infin a_k$ 收敛, 这意味着对任意的部分和 $\displaystyle x_n \coloneqq \sum_{k = 0}^n a_k$ 皆收敛, 那么由 [定理 1.2.5](#定理_1.2.8_(柯西判别准则)) 易见其收敛当且仅当其为柯西列, 即有：
$$
\Forall{\epsilon > 0} \Exists{N \in \N^\times} \Forall{m, n \geq N} |x_m - x_n| = \left| \sum_{k = 0}^m a_k - \sum_{k = 0}^n a_k \right| < \epsilon
$$
不妨设 $m \geq n$ 且对任意 $p \in \N$ 取 $m = n + p$, 则有 $\displaystyle \sum_{k = n}^{n + p} a_k = \sum_{n \leq k \leq n + p} a_k$, 反之亦然, 因此命题成立.

### 定义 1.2.12 (数列的上极限与下极限)

设 $\set{x_n}_{n \geq 1}$ 为实数列, 那么对任意 $n \geq 1$：

- 设 $\displaystyle \overline{x}_n \coloneqq \sup_{\ell \geq n} x_\ell$, 显然 $\set{\overline{x}_n}_{n \geq 1}$ 为单调下降数列, 因此定义 $\set{x_n}_{n \geq 1}$ 的 **上极限 (upper limit)** 为：
  $$
  \overline{\lim} x_n = \limsup_{n \to \infin} x_n = \lim_{n \to \infin} \overline{x}_n = \lim_{n \to \infin} \b{ \sup_{\ell \geq n} x_\ell }
  $$

- 设 $\displaystyle \underline{x}_n \coloneqq \inf_{\ell \geq n} x_\ell$, 显然 $\set{\underline{x}_n}_{n \geq 1}$ 为单调递增数列, 因此定义 $\set{x_n}_{n \geq 1}$ 的 **下极限 (lower limit)** 为：
  $$
  \underline{\lim} x_n = \liminf_{n \to \infin} x_n = \lim_{n \to \infin} \underline{x}_n = \lim_{n \to \infin} \b{ \inf_{\ell \geq n} x_\ell }
  $$

### 引理 1.2.13 (实数列的极限与其子列等价)

设 $\set{x_n}_{n \geq 1}$ 为实数列, 若有 $\displaystyle{\lim_{n \to \infin} x_n = L}$, 则任意 $\set{x_n}_{n \geq 1}$ 的子列 $\set{x_{n_k}}_{k \geq 1}$, 它的极限仍为 $L$.

##### 证明

数列 $\set{x_n}_{n \geq 1}$ 收敛于 $L$ 意味着 $\Forall{\epsilon > 0} \Exists{N' \in \N^\times} \Forall{n \geq N'} |x_n - L| < \epsilon$, 需证明 $\Forall{\epsilon > 0} \Exists{N \in \N^\times} \Forall{k \geq N} |x_{n_k} - L| < \epsilon$.

由于 $\set{x_{n_k}}_{k \geq 1}$ 是 $\set{x_n}_{n \geq 1}$ 的子列, 而 $\set{x_n}_{n \geq 1}$ 收敛意味着它与它的子列都是单调递增的, 即是说 $n_k \leq n_{k + 1}$, 事实上如果考虑另一自然数列 $a_k \coloneqq k$, 透过归纳法可以得到 $a_k \leq n_k \leq n_{k + 1}$ 以及 $a_{k + 1} \leq n_{k + 1}$, 遂得知对任意的 $k \in \N^\times$ 都有 $k \leq n_k$ 成立.

 因此对任意 $\epsilon > 0$, 只要取 $N = N'$ 则对任意 $n_k \geq k \geq N$ 有 $|x_{n_k} - L| < \epsilon$ 成立.

### 定理 1.2.14 (上/下极限刻画数列收敛性)

设 $\set{x_n}_{n \geq 1}$ 为实数列, 则 $\set{x_n}_{n \geq 1}$ 收敛于 $L$ $\iff$ $\displaystyle \limsup_{n \to \infin} x_n = L = \liminf_{n \to \infin} x_n$.

##### 证明

$(\rArr)$ 假设 $\displaystyle \lim_{n \to \infin} x_n = L$, 由 [引理 1.2.13](#引理_1.2.13_(实数列的极限与其子列等价)) 知道对任意 $\set{x_n}_{n \geq 1}$ 的子列, 其极限皆为 $L$, 因此易得 $\displaystyle \limsup_{n \to \infin} x_n = L = \liminf_{n \to \infin} x_n$.

$(\lArr)$ 设 $\displaystyle \limsup_{n \to \infin} x_n = L = \liminf_{n \to \infin} x_n$ 成立, 这意味着我们同时有：
$$
\begin{align}
\limsup_{n \to \infin} x_n & \iff \Forall{\epsilon > 0} \Exists{N_1 \in \N^\times} \Forall{n \geq N_1} \left| \sup_{\ell \geq n} x_\ell - L \right| < \epsilon \\
\liminf_{n \to \infin} x_n & \iff \Forall{\epsilon > 0} \Exists{N_2 \in \N^\times} \Forall{n \geq N_2} \left| \inf_{\ell \geq n} x_\ell - L \right| < \epsilon \\
\end{align}
$$
即是说, 当任意 $\epsilon > 0$, 只须取 $N = \max\set{N_1, N_2}$ 则对任意 $n \geq N$ 都有以下不等式成立：
$$
L - \epsilon < \inf_{\ell \geq n} x_\ell \leq x_n \leq \sup_{\ell \geq n} x_\ell < L + \epsilon
$$

### 例子 1.2.15 ($\displaystyle \lim_{n \to \infin} \root{n}\of{n} = 1$)

首先我们知道有 $\root{n} \of{n} \geq 1$, 根据算术-几何均值不等式则得：
$$
\root{n}\of{n} = \root{n}\of{1 \cdot 1 \cdots 1 \cdot \sqrt{n} \cdot \sqrt{n}} \leq \frac{1}{n} \b{ 1 + 1 + \cdots + 1 + \sqrt{n} + \sqrt{n} } = \frac{n-2}{n} + \frac{2 \sqrt{n}}{n} \leq 1 + \frac{2}{\sqrt{n}}
$$
结合前边的条件得 $\displaystyle 0 \leq \root{n}\of{n} - 1 \leq \frac{2}{\sqrt{n}}$, 那么对任意 $\epsilon > 0$, 只须取 $N = \displaystyle \frac{4}{\epsilon^2}$ 则对任意 $n \geq N$ 有 $|\root{n}\of{n} - 1| < \epsilon$ 成立.

### 例子 1.2.16 (构造欧拉常数)

我们可以用序列极限来定义 **欧拉常数 (Euler's constant)** 为 $e \coloneqq \displaystyle \lim_{n \to \infin} \b{ 1 + \frac{1}{n} }^n$, 此外亦可利用级数的方式构造 $e$, 即有 $\displaystyle e = \sum_{k = 0}^\infin \frac{1}{k!}$.

##### 证明

为了证明这个事实, 设数列 $\set{x_n}_{n \geq 1}$ 的项为 $x_n \coloneqq \displaystyle \b{1 + \frac{1}{n}}^n$, 则需要分别验证以下命题：

- 首先说明 $\displaystyle \lim_{n \to \infin} x_n$ 的收敛性, 设其极限为 $L$, 由 [定理 1.2.2](#定理_1.2.2_(单调有界定理)) 则须说明该数列是单调有界的：

  - 单调性, 即只须说明 $\Forall{n \in \N^\times} x_n \leq x_{n+1}$, 即：
    $$
    \begin{align}
    \b{1 + \frac{1}{n}}^n & = \sum_{k = 0}^n \binom{n}{k} \frac{1}{n^k} = \sum_{k = 0}^n \frac{n!}{k!(n-k)!} \cdot \frac{1}{n^k} \\
    & = \sum_{k = 0}^n \frac{1}{k!} \cdot \frac{n!}{(n - k)!} \cdot \frac{1}{n^k} \\
    & = \sum_{k = 0}^n \frac{1}{k!} \cdot \frac{n(n-1) \cdots (n - (k - 1))}{n^k} \\
    & = \sum_{k = 0}^n \frac{1}{k!} \b{1 - \frac{1}{n}} \b{1 - \frac{2}{n}} \cdots \b{1 - \frac{k - 1}{n}} \\
    & < \sum_{k = 0}^{n + 1} \frac{1}{k!} \b{1 - \frac{1}{n+1}} \b{1 - \frac{2}{n+1}} \cdots \b{1 - \frac{k - 1}{n+1}} \\
    & = \b{1 + \frac{1}{n+1}}^{n+1}
    \end{align}
    $$

  - 有上界, 即应有 $\Exists{M \in \R} \Forall{n \in \N^\times} x_n \leq M$ 成立：

    根据 $\Forall{k \geq 2} k! \geq 2^k$, 就有 $\displaystyle \frac{1}{k!} \leq \frac{1}{2^k}$, 遂得： 
    $$
    \begin{align}
    \displaystyle \b{1 + \frac{1}{n}}^n & = \sum_{k = 0}^n \frac{1}{k!} \underbrace{\b{1 - \frac{1}{n}} \b{1 - \frac{2}{n}} \cdots \b{1 - \frac{k - 1}{n}}}_{\text{小于 $1$ 的数乘在一块当然仍小于 $1$}} \\
    & \leq \sum_{k = 0}^n \frac{1}{k!} \leq 1 + 1 + \underbrace{\sum_{k = 1}^n \frac{1}{2^k}}_{= 1} = 3
    \end{align}
    $$

  结合上述两者就证得 $\displaystyle \lim_{n \to \infin} x_n = \lim_{n \to \infin} \b{ 1 + \frac{1}{n} }^n$ 的极限的确存在.

- 同样地, 我们需要说明级数 $\displaystyle \sum_{k = 0}^\infin \frac{1}{k!}$ 的收敛性, 根据 [推论 1.2.11](#推论_1.2.11_(级数的柯西判别准则)), 即应证明 $\Forall{\epsilon > 0} \Exists{N \in \N^\times} \Forall{n \geq N \\ p \geq 0} \left| \sum_{n \leq k \leq n + p} \frac{1}{k!} \right| < \epsilon$：

  从上述有界性的证明中可以观察到部分和 $\displaystyle \sum_{k = 1}^n \frac{1}{2^k} = 1$, 事实上无穷级数 $\displaystyle \sum_{k = 1}^\infin \frac{1}{2^k}$ 也收敛的, 而由于 $\Forall{k \geq 2} k! \geq 2^k$, 当挑选合适的 $N$ 使 $n$ 充分大时则有：
  $$
  \begin{align}
  \sum_{n \leq k \leq n + p} \frac{1}{k!} & = \frac{1}{n!} + \frac{1}{(n + 1)!} + \cdots + \frac{1}{(n + p)!} \\
  & \leq \frac{1}{2^n} + \frac{1}{2^{n + 1}} + \cdots + \frac{1}{2^{n + p}} \\
  & = \sum_{n \leq k \leq n + p} \frac{1}{2^k} < \epsilon
  \end{align}
  $$

- 最后我们来证明 $\displaystyle e = \sum_{k = 0}^\infin \frac{1}{k!}$, 即分别说明：

  - $\displaystyle e \leq \sum_{k = 0}^\infin \frac{1}{k!}$：

    同样在上述有界性的证明中, 注意到 $\displaystyle \Forall{n \in \N^\times} x_n = \b{1 + \frac{1}{n}}^n \leq \sum_{k = 0}^n \frac{1}{k!}$, 既然是对于任意的 $n$, 那么显然 $x_n$ 无论是有穷亦或无穷项下都满足该条件, 另一方面由于级数 $\displaystyle \sum_{k = 0}^n \frac{1}{k!}$ 单调递增, 因此只须对上述两侧取极限, 则得：
    $$
    \lim_{n \to \infin} \b{1 + \frac{1}{n}}^n \leq \sum_{k = 0}^\infin \frac{1}{k!}
    $$

  - $\displaystyle e \geq \sum_{k = 0}^\infin \frac{1}{k!}$：

    由数列 $\set{x_n}_{n \geq 1}$ 的单调性, 假设对任意 $n, m \in \N^\times$, 其中 $n \geq m$, 则有 $x_n \geq x_m$. 然而 $n, m$ 都是任取的, 因此只要对 $x_n \geq x_m$ 两侧取极限则该不等式仍成立, 即是说：
    $$
    \begin{align}
    e & = \displaystyle \lim_{n \to \infin} \b{ 1 + \frac{1}{n} }^n \\
    & = \lim_{n \to \infin} \sum_{k = 0}^n \frac{1}{k!} \b{1 - \frac{1}{n}} \b{1 - \frac{2}{n}} \cdots \b{1 - \frac{k - 1}{n}} \\
    & \geq \lim_{m \to \infin} \sum_{k = 0}^m \frac{1}{k!} \underbrace{\b{1 - \frac{1}{m}} \b{1 - \frac{2}{m}} \cdots \b{1 - \frac{k - 1}{m}}}_{\text{只要 $m \to \infin$, 则该部分非常接近 $1$}} \\
    & = \lim_{m \to \infin} \sum_{k = 0}^m \frac{1}{k!} \cdot \lim_{m \to \infin} \b{1 - \frac{1}{m}} \b{1 - \frac{2}{m}} \cdots \b{1 - \frac{k - 1}{m}} \\
    & = \lim_{m \to \infin} \sum_{k = 0}^m \frac{1}{k!} \cdot 1 \\
    & = \sum_{k = 0}^\infin \frac{1}{k!}
    \end{align}
    $$

  综上所述便证得了 $\displaystyle e = \lim_{n \to \infin} \b{1 + \frac{1}{n}}^n = \sum_{k = 0}^\infin \frac{1}{k!}$ 成立.

### 注释 (对欧拉常数的一些补充)

- 相较于 $e$ 原本的定义, 利用级数定义欧拉常数可以很容易地相对精确地计算 $e = 2.71828\ldots$ 的大小, 例如分别取 $n = 5,6,7,8$ 则有：
  $$
  \begin{align}
  \sum_{k = 0}^5 \frac{1}{k!} & = 1 + 1 + \frac{1}{2} + \frac{1}{6} + \frac{1}{24} + \frac{1}{120} = 2. \underbrace{71}_{\text{精确到两位}} 667 \\
  \sum_{k = 0}^6 \frac{1}{k!} & = 1 + 1 + \frac{1}{2} + \frac{1}{6} + \frac{1}{24} + \frac{1}{120} + \frac{1}{720} = 2. \underbrace{718}_{\text{精确到三位}} 06 \\
  \sum_{k = 0}^7 \frac{1}{k!} & = 1 + 1 + \frac{1}{2} + \frac{1}{6} + \frac{1}{24} + \frac{1}{120} + \frac{1}{720} + \frac{1}{5040} = 2. \underbrace{7182}_{\text{精确到四位}} 5 \\
  \sum_{k = 0}^8 \frac{1}{k!} & = 1 + 1 + \frac{1}{2} + \frac{1}{6} + \frac{1}{24} + \frac{1}{120} + \frac{1}{720} + \frac{1}{5040} + \frac{1}{40320} = 2. \underbrace{71828}_{\text{精确到五位}} \\
  \end{align}
  $$
  而当 $n \to \infin$ 时, 则能得出关于 $e$ 的精确值.

- 透过反证法, 我们可以利用级数的定义来证明 $e$ 的确为无理数.

- 从上述关于 $e$ 的有界性证明可见, $\Forall{k \geq 2} k! \geq 2^k$, 因此有 $\displaystyle \frac{1}{k!} \leq \frac{1}{2^k}$, 这句话翻译过来即是说可以利用 $\displaystyle \frac{1}{2^k}$ 来 **压制** (或 **控制**) $\displaystyle \frac{1}{k!}$, 而这么做的好处是等比数列求和往往是比较好求得的, 因为可以直接利用求和公式解决, 将该思想广义化后便驱使我们得到以下的 **夹逼定理 (squeeze theorem)**.

### 定理 1.2.17 (夹逼定理)

1. **双边控制**：设有三个实数列 $\set{a_n}_{n \geq 1}, \set{x_n}_{n \geq 1}, \set{b_n}_{n \geq 1}$ 以及 $\Forall{n \geq 1} a_n \leq x_n \leq b_n$, 若 $a_n, b_n$ 皆收敛且 $\displaystyle \lim_{n \to \infin} a_n = \lim_{n \to \infin} b_n$, 则有：
   $$
   \displaystyle \lim_{n \to \infin} a_n = \lim_{n \to \infin} x_n = \lim_{n \to \infin} b_n
   $$

2. **上界控制**：设有两个非负实数列 $\set{x_n}_{n \geq 1}, \set{y_n}_{n \geq 1}$ 以及 $\Forall{n \geq 1} 0 \leq x_n \leq y_n$, 若 $\displaystyle \lim_{n \to \infin} y_n = 0$, 则 $\set{x_n}_{n \geq 1}$ 收敛于 $0$.

##### 证明

我们只证 $(1)$, 因为若将 $0$ 视为常数列, 则 $(2)$ 是 $(1)$ 的直接推论. 那么由 [定理 1.2.14](#定理_1.2.14_(上/下极限刻画数列收敛性)) 我们可以得到： 
$$
\begin{align}
\lim_{n \to \infin} a_n = \limsup_{n \to \infin} a_n & \overset{\Forall{n \geq 1} a_n \leq x_n}{\leq} \limsup_{n \to \infin} x_n \\
\liminf_{n \to \infin} x_n & \overset{\Forall{n \geq 1} x_n \leq b_n}{\leq} \liminf_{n \to \infin} b_n = \lim_{n \to \infin} b_n
\end{align}
$$
而因为有 $\displaystyle \lim_{n \to \infin} a_n = \lim_{n \to \infin} b_n$, 因此有 $\displaystyle \liminf_{n \to \infin} x_n = \limsup_{n \to \infin} x_n$, 同样由 [定理 1.2.14](#定理_1.2.14_(上/下极限刻画数列收敛性)) 知道 $\set{x_n}_{n \geq 1}$ 是收敛的, 并且极限值被唯一地确定了.

### 推论 1.2.18 (控制收敛定理与绝对收敛)

1. 设 $\displaystyle \sum_{k = 0}^\infin a_k$ 为正项级数 (即条件 $\Forall{k \geq 1} a_k \geq 0$), 则 $\displaystyle \sum_{k = 0}^\infin a_k$ 收敛 $\iff$ $\displaystyle \Exists{\text{常数 $M$}} \Forall{n \geq 1} S_n = \sum_{k = 0}^n a_k \leq M$ (其中 $S_n$ 为级数的部分和).
2. **正项级数的控制收敛**：设 $\displaystyle \sum_{k = 0}^\infin a_k$ 与 $\displaystyle \sum_{k = 0}^\infin b_k$ 皆为正项级数, 若 $\Forall{k \geq 0} a_k \leq b_k$ (即 $b_k$ 控制了 $a_k$), 那么只要 $\displaystyle \sum_{k = 0}^\infin b_k$ 收敛, 则 $\displaystyle \sum_{k = 0}^\infin a_k$ 亦收敛 (发散同理).
3. **绝对收敛**：设 $\displaystyle \sum_{k = 0}^\infin a_k$ 为实数项级数, 若 $\displaystyle \sum_{k = 0}^\infin |a_k|$ 收敛, 则 $\displaystyle \sum_{k = 0}^\infin a_k$ 亦收敛, 此时我们称该级数是 **绝对收敛的**.

##### 证明

1. 由于 $\displaystyle \sum_{k = 0}^\infin a_k$ 是正项级数, 即是说其必然是单调递增的, 那么透过 [定理 1.2.2](#定理_1.2.2_(单调有界定理)) 我们当然知道, 其同时是有界的当且仅当 $\displaystyle \sum_{k = 0}^\infin a_k$ 收敛.

2. 这是 $(1)$ 的直接推论, 只须令 $(1)$ 中的常数 $M$ 为较大的正项级数 $\displaystyle \sum_{k = 0}^\infin b_k$, 那么对于任意 $n \geq 1$ 我们都有 $\displaystyle \sum_{k = 0}^\infin a_k \leq \sum_{k = 0}^\infin b_k$, 显然 $\displaystyle \sum_{k = 0}^\infin a_k$ 是收敛的.

3. 当 $\displaystyle \sum_{k = 0}^\infin |a_k|$ 收敛时, 由 [推论 1.2.11](#推论_1.2.11_(级数的柯西判别准则)) 可知当且仅当 $\Forall{\epsilon > 0} \Exists{N' \in \N^\times} \Forall{n \geq N' \\ p \geq 0} \left| \sum_{n \leq k \leq n + p} |a_k| \right| < \epsilon$, 而由三角不等式则有：
   $$
   \left| \sum_{n \leq k \leq n + p} a_k \right| \leq \left| \sum_{n \leq k \leq n + p} |a_k| \right| < \epsilon
   $$
   因此只须取 $N = N'$, 则有 $\Forall{n \geq N \\ p \geq 0} \left| \sum_{n \leq k \leq n + p} a_k \right| < \epsilon$ 成立.

### 例子 1.2.19

现在给出关于 [推论 1.2.18](#推论_1.2.18_(控制收敛定理与绝对收敛)) 的几个应用例子：

1. 交错调和级数 $\displaystyle \sum_{k = 1}^\infin \frac{(-1)^k}{k}$ 是收敛的但不绝对收敛, 因为在加上绝对值后任意的奇数项仍是正的, 那么所有的部分和就会不断累加直至无穷.
2. 正项级数 $\displaystyle \sum_{k = 1}^\infin \frac{1}{k^2}$ 是收敛的, 事实上我们可以用 $\displaystyle \sum_{k = 2}^\infin \frac{1}{(k-1)k}$ 控制它, 因为可以将 $\displaystyle \frac{1}{(k - 1)k}$ 裂项拆分为 $\displaystyle \frac{1}{k-1} - \frac{1}{k}$, 它的部分和是较为容易计算得到的.
3. 级数 $e = \displaystyle \sum_{k = 0}^\infin \frac{1}{k!}$ 是收敛的, 同样可以利用 $\displaystyle \sum_{k = 2}^\infin \frac{1}{2^k}$ 来控制它, 这是因为等比数列更容易求和.

{% end %}