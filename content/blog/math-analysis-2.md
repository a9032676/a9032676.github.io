+++

title = "数学分析 2 - 柯西乘积, 指数函数与三角函数的构造"
date = 2024-03-21
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

## 2.1. 柯西乘积及其收敛性

### 注释 (柯西乘积)

考虑实数项 (非无穷) 级数 $\ds \sum_{0 \leq k \leq s} a_k$ 与 $\ds \sum_{0 \leq k \leq s} b_k$ 的有限乘积, 我们希望乘积后的结果仍保持求和 $\ds \sum_{0 \leq n \leq t} c_n$ 的形式, 例如取 $s = 2$, 以乘法表观察：
$$
\begin{array}{|c|c|c|c|}
\hline & a_0 & a_1 & a_2 \\
\hline b_0 & \textcolor{aqua}{a_0 b_0} & \textcolor{yellow}{a_1 b_0} & \textcolor{lime}{a_2 b_0} \\
\hline b_1 & \textcolor{yellow}{a_0 b_1} & \textcolor{lime}{a_1 b_1} & \textcolor{fuchsia}{a_2 b_1} \\
\hline b_2 & \textcolor{lime}{a_0 b_2} & \textcolor{fuchsia}{a_1 b_2} & \textcolor{orange}{a_2 b_2} \\
\hline
\end{array}
$$
可见共计有 $9$ 项, 而当我们取对角线 (着色部分) 的方式重排则有 (重排的方式有许多种, 但这是最经典的)：
$$
\begin{align}
\b{\sum_{0 \leq k \leq 2} a_k} \cdot \b{\sum_{0 \leq k \leq 2} b_k}
& = (a_0 + a_1 + a_2) \cdot (b_0 + b_1 + b_2) \\
& = \underbrace{\textcolor{aqua}{a_0 b_0}}_{\text{第 $c_0$ 项}} +
\underbrace{\textcolor{yellow}{(a_1 b_0 + a_0 b_1)}}_{\text{第 $c_1$ 项}} +
\underbrace{\textcolor{lime}{(a_2 b_0 + a_1 b_1 + a_0 b_2)}}_{\text{第 $c_2$ 项}} +
\underbrace{\textcolor{fuchsia}{(a_2 b_1 + a_1 b_2)}}_{\text{第 $c_3$ 项}} +
\underbrace{\textcolor{orange}{a_2 b_2}}_{\text{第 $c_4$ 项}}
\end{align}
$$
可见上方的每一个新结合后的每一项都是有限多项的求和, 而这个过程可以推广至形式无穷级数上 (形式意味着不一定收敛), 并将乘法表扩展至：
$$
\begin{array}{|c|c|c|c|c}
\hline & a_0 & a_1 & a_2 & \cdots \\
\hline b_0 & \textcolor{aqua}{a_0 b_0} & \textcolor{yellow}{a_1 b_0} & \textcolor{lime}{a_2 b_0} & \cdots \\
\hline b_1 & \textcolor{yellow}{a_0 b_1} & \textcolor{lime}{a_1 b_1} & \ddots & \ddots \\
\hline b_2 & \textcolor{lime}{a_0 b_2} & \ddots & \ddots & \ddots \\
\hline \vdots & \vdots & \ddots &  \ddots & \ddots \\
\end{array}
$$
其中的项 $a_i b_j$ 仍按上述对角线的方式进行重排, 然后累加在一起, 可知 $c_n = \ds \sum_{k = 0}^n (a_k \cdot b_{n - k}) = \sum_{i + j = n} (a_i \cdot b_j)$, 从而引出以下定义.

### 定义 2.1.1 (柯西乘积)

设 $\ds \sum_{k = 0}^\infin a_k$ 与 $\ds \sum_{k = 0}^\infin b_k$ 皆为形式实数项级数, 称它们的乘积 $\ds \sum_{n = 0}^\infin c_n$ 为 **柯西乘积 (Cauchy product)**, 当满足了 $c_n = \ds \sum_{k = 0}^n (a_k \cdot b_{n - k})$.

### 注释

- 上述级数中, 若下标从 $1$ 开始, 即 $\ds \sum_{k = 1}^\infin a_k$ 与 $\ds \sum_{k = 1}^\infin b_k$, 那么它们的柯西乘积 $\ds \sum_{n = 2}^\infin c_n$ 则从第 $2$ 项开始, 因而下标取法是随意的 (视乎不同书籍与教材而定).
- 注意到我们还尚未讨论柯西乘积的收敛性, 然而 $c_n$ 的取法不一定是按对角线重排亦有可能收敛, 从而引入以下命题.

### 定理 2.1.2 (梅尔滕斯定理)

设有正项级数 $\ds \sum_{k = 1}^\infin a_k$ 及 $\ds \sum_{k = 1}^\infin b_k$, 且 $\set{c_n}_{n \geq 1}$ 为 $\set{a_i b_j}_{i, j \geq 1}$ 的 **任意重排**, 则：

1. 若 $\ds \sum_{k = 1}^\infin a_k$ 与 $\ds \sum_{k = 1}^\infin b_k$ 收敛, 则 $\ds \sum_{n = 1}^\infin c_n$ 收敛且 $\ds \sum_{n = 1}^\infin c_n = \sum_{k = 1}^\infin a_k \cdot \ds \sum_{k = 1}^\infin b_k$, 特别地若取对角线重排, 则 $\ds \sum_{n = 2}^\infin c_n$ 为柯西乘积;
2. 若 $\ds \sum_{k = 1}^\infin a_k$ 与 $\ds \sum_{k = 1}^\infin b_k$ 绝对收敛 (未必正项), 则上述结论依然成立.

##### 证明

1. 设 $\ds \sum_{k = 1}^\infin a_k$ 与 $\ds \sum_{k = 1}^\infin b_k$ 皆为正项级数, 现在分别验证：

   - 级数 $\ds \sum_{n = 1}^\infin c_n$ 的收敛性：

     对任意 $N > 0$, 由于 $\ds \sum_{k = 1}^\infin a_k$ 与 $\ds \sum_{k = 1}^\infin b_k$ 皆为正项级数, 那么就必定存在 $N_1, N_2 > 0$ 使得：
     $$
     \sum_{n = 1}^N c_n = \sum_{n = 1}^{N_1} a_k \cdot \sum_{n = 1}^{N_2} b_k \leq \sum_{n = 1}^\infin a_k \cdot \sum_{n = 1}^\infin b_k
     $$
     那么每个部分和都是有界的, 所以 $\ds \sum_{n = 1}^\infin c_n$ 收敛.

   - $\ds \sum_{n = 1}^\infin c_n = \sum_{k = 1}^\infin a_k \cdot \ds \sum_{k = 1}^\infin b_k$：

     由于级数 $\ds \sum_{k = 1}^\infin a_k$ 与 $\ds \sum_{k = 1}^\infin b_k$ 收敛, 对任意 $\epsilon > 0$ 按照定义我们有 (其中 $\epsilon_1, \epsilon_2 > 0$ 是任取的, 但暂时待定)：
     $$
     \abs{ \sum_{k = 1}^{N_1} a_k - \sum_{k = 1}^\infin a_k } < \epsilon_1 \qquad \abs{ \sum_{k = 1}^{N_2} b_k - \sum_{k = 1}^\infin b_k } < \epsilon_2
     $$

     那么可以逐步推得：
     $$
     \begin{align}
     \abs{ \sum_{n = 1}^N c_n - \sum_{k = 1}^\infin a_k \cdot \sum_{k = 1}^\infin b_k }
     & = \abs{ \sum_{k = 1}^{N_1} a_k \cdot \sum_{k = 1}^{N_2} b_k - \sum_{k = 1}^\infin a_k \cdot \sum_{k = 1}^\infin b_k } \\
     & \leq \abs{ \sum_{k = 1}^{N_1} a_k \cdot \sum_{k = 1}^{N_2} b_k - \sum_{k = 1}^\infin a_k \cdot \sum_{k = 1}^{N_2} b_k} + \abs{ \sum_{k = 1}^\infin a_k \cdot \sum_{k = 1}^{N_2} b_k - \sum_{k = 1}^\infin a_k \cdot \sum_{k = 1}^\infin b_k } \\
     & = \abs{ \sum_{k = 1}^{N_1} a_k - \sum_{k = 1}^\infin a_k } \cdot \abs{ \sum_{k = 1}^{N_2} b_k } + \abs{ \sum_{k = 1}^\infin a_k } \cdot \abs{ \sum_{k = 1}^{N_2} b_k - \sum_{k = 1}^\infin b_k } \\
     & \leq \epsilon_1 \abs{ \sum_{k = 1}^\infin b_k } + \epsilon_2 \abs{ \sum_{k = 1}^\infin a_k } \\
     \end{align}
     $$
     因此可取 $\epsilon_1 = \ds \frac{\epsilon}{2} \b{ \sum_{k = 1}^\infin b_k }^{-1}$ 而 $\epsilon_2 = \ds \frac{\epsilon}{2} \b{ \sum_{k = 1}^\infin a_k }^{-1}$ 使得上式右侧小于 $\epsilon$, 只要选取足够大的 $N$, 其中 $n \geq N$, 则可使得下式成立：
     $$
     \abs{ \sum_{n = 1}^\infin c_n - \sum_{k = 1}^\infin a_k \cdot \ds \sum_{k = 1}^\infin b_k } < \epsilon
     $$

2. 其次验证绝对收敛情形. 首先对任意 $x \in \R$, 我们定义：
   $$
   x^+ = \cases{x, & 若 $x > 0$ \\ 0, & 若 $x \leq 0$} \qquad x^- = \cases{0, & 若 $x > 0$ \\ -x, & 若 $x \leq 0$}
   $$
   现在分别验证：

   - 级数 $\ds \sum_{n = 1}^\infin c_n$ 的收敛性：

     由于 $x = x^+ - x^-$, 所以分别将绝对收敛级数 $\ds \sum_{k = 1}^\infin a_k$ 与 $\ds \sum_{k = 1}^\infin b_k$ 分拆为：
     $$
     \sum_{k = 1}^\infin a_k = \sum_{k = 1}^\infin a_k^+ - \sum_{k = 1}^\infin a_k^-, \qquad \sum_{k = 1}^\infin b_k = \sum_{k = 1}^\infin b_k^+ - \sum_{k = 1}^\infin b_k^-
     $$
     而由于 $\Forall{a_k} \abs{a_k^\pm} \leq |a_k|$, 由 $\ds \sum_{k = 1}^\infin a_k$ 与 $\ds \sum_{k = 1}^\infin b_k$ 的绝对收敛性, 得知正项级数 $\ds \sum_{k = 1}^\infin a_k^\pm$ 与 $\ds \sum_{k = 1}^\infin b_k^\pm$ 皆收敛.

     接下来, 由于对数列 $\set{c_n}_{n \geq 1}$ 的任意一项有重排 $c_n = a_i b_j$, 因此：
     $$
     c_n = \b{a_i^+ - a_i^-} \cdot \b{b_j^+ - b_j^-} = \b{a_i^+ b_j^+ + a_i^- b_j^-} - \b{a_i^+ b_j^- + a_i^- b_j^+}
     $$
     所以级数 $\ds \sum_{n = 1}^\infin c_n$ 就可以被拆分为 (其中指标集定义为 $\mathcal{I} \coloneqq \N^\times \times \N^\times$)：
     $$
     \sum_{n = 1}^\infin c_n = \sum_{(i, j) \in \mathcal{I}}^\infin a_i^+ b_j^+ + \sum_{(i, j) \in \mathcal{I}}^\infin a_i^- b_j^- - \sum_{(i, j) \in \mathcal{I}}^\infin a_i^+ b_j^- - \sum_{(i, j) \in \mathcal{I}}^\infin a_i^- b_j^+
     $$
     而上述等式右侧每一项级数都是正项, 由 $(1)$ 可知它们皆收敛, 最后由级数的算术性质得知 $\ds \sum_{n = 1}^\infin c_n$ 是收敛的.

   - $\ds \sum_{n = 1}^\infin c_n = \sum_{k = 1}^\infin a_k \cdot \ds \sum_{k = 1}^\infin b_k$：

     由于 $\ds \sum_{k = 1}^\infin a_k^\pm$ 与 $\ds \sum_{k = 1}^\infin b_k^\pm$ 皆是正项收敛级数, 只要给定一个重排, 则 $\ds \sum_{(i, j) \in \mathcal{I}}^\infin a_i^\pm b_j^\pm = \ds \sum_{k = 1}^\infin a_k^\pm \cdot \sum_{k = 1}^\infin b_k^\pm$, 因此：
     $$
     \begin{align}
     \sum_{n = 1}^\infin c_n & = \b{ \sum_{k = 1}^\infin a_k^+ \cdot \ds \sum_{k = 1}^\infin b_k^+ } + \b{ \sum_{k = 1}^\infin a_k^- \cdot \ds \sum_{k = 1}^\infin b_k^- } - \b{ \sum_{k = 1}^\infin a_k^+ \cdot \ds \sum_{k = 1}^\infin b_k^- } - \b{ \sum_{k = 1}^\infin a_k^- \cdot \ds \sum_{k = 1}^\infin b_k^+ } \\
     & = \b{ \sum_{k = 1}^\infin a_k^+ - \sum_{k = 1}^\infin a_k^- } \cdot \b{ \sum_{k = 1}^\infin b_k^+ - \sum_{k = 1}^\infin b_k^- } \\
     & = \sum_{k = 1}^\infin a_k \cdot \ds \sum_{k = 1}^\infin b_k
     \end{align}
     $$

### 反例 2.1.3 (条件收敛)

注意到当两个级数皆为条件收敛时 (即非绝对收敛), 上述结论未必成立, 例如考虑项为 $\ds a_n = b_n = \frac{(-1)^n}{\sqrt{n + 1}}$ 的交错级数, 它们的柯西乘积为：
$$
c_n = \sum_{k = 0}^n \b{\frac{(-1)^k}{\sqrt{k + 1}} \cdot \frac{(-1)^{n - k}}{\sqrt{n - k + 1}}} = (-1)^n \sum_{k = 0}^n \frac{1}{\sqrt{(k + 1)(n - k + 1)}}
$$
然而由于 $k + 1$ 以及 $n - k + 1$ 皆小于或等于 $n + 1$, 因此 $\ds \Forall{n \in \N^\times} |c_n| \geq \sum_{k = 0}^n \frac{1}{n + 1} = 1$, 从而 $\ds \lim_{n \to \infin} c_n \neq 0$, 因此 $\ds \sum_{n = 0}^\infin c_n$ 发散.

## 2.2. 指数函数的构造

### 定义 2.2.1 (指数函数)

称映射 $\Map{\exp}{\R}{\R_{>0}}{x}{e^x = \sum_{k = 0}^\infin \frac{x^k}{k!}}$ 为 **指数函数 (exponential function)**.

### 注释 (指数函数的良定性)

为了确保 $\exp$ 是良定义的, 我们需要证明幂级数 $\exp(x) = \ds \sum_{k = 0}^\infin \frac{x^k}{k!}$ 是收敛的 (注意到 $x \in \R$, 因此并非正项级数), 可以考虑先证明它是绝对收敛的, 并且使用收敛的正项级数 $\ds \sum_{k = 0}^\infin \frac{1}{2^k}$ 来控制它, 具体的说即有以下命题：

> $$
> \ds \sum_{k = 0}^\infin \frac{x^k}{k!}\ \text{绝对收敛} \iff \text{正项级数}\ \sum_{k = 0}^\infin \abs{ \frac{x^k}{k!} }\ \text{收敛} \iff \sum_{k = 0}^\infin \abs{ \frac{x^k}{k!} } \leq \sum_{k = 0}^\infin \frac{1}{2^k} \iff \Exists{N \in \N^\times} \Forall{k \geq N} \abs{ \frac{x^k}{k!} } \leq \frac{1}{2^k}
> $$

从而我们有命题的对应 $\ds \Forall{k \geq |x|} \b{ \abs{ \frac{x^k}{k!} } \leq \frac{1}{2^k} \iff (2 |x|)^k \leq k! }$.

### 注释 (推广形式)

事实上我们可以将指数函数推广至 $\C$ 中, 即 $\Map{\exp}{\C}{\C}{z}{e^z = \sum_{k = 0}^\infin \frac{z^k}{k!}}$, 而关于它的良定性我们同样可以利用 $\C$ 上的绝对收敛性作证. 具体的说, 广义的绝对收敛性基于以下所定义的空间：

> 设有线性空间 $V$, 以及其中的范数 $\Vert \cdot \Vert : V \to \R^+$, 称资料 $(V, \Vert \cdot \Vert)$ 为 **赋范线性空间 (normed vector space)**, 当其满足以下性质：
>
> - **保零性**：$\Forall{\vec{x} \in V} \Vert \vec{x} \Vert = 0 \iff \vec{x} = 0$;
> - **齐次性**：$\Forall{\vec{x} \in V} \Vert \lambda \cdot \vec{x} \Vert = \lambda \cdot \Vert \vec{x} \Vert$;
> - **次可加性**：$\Forall{\vec{x}, \vec{y} \in V} \Vert \vec{x} + \vec{y} \Vert = \Vert \vec{x} \Vert + \Vert \vec{y} \Vert$.

而我们可以取赋范线性空间中的范数作为 "距离", 即有度量 $\Map{d}{V \times V}{\R^+}{\b{\vec{x}, \vec{y}}}{\Vert \vec{x} - \vec{y} \Vert}$, 那么 $(V, d)$ 天然构成度量空间, 这样在 $V$ 上的拓扑结构就是由该度量诱导而来的, 我们便可以讨论在其上的收敛乃至绝对收敛性, 例如：

> 令 $\ds \sum_{n = 1}^\infin a_n$ 为 $V$ 上的序列 (加法使用了 $V$ 中的向量加法), 则 $\ds \sum_{n = 1}^\infin a_n$ 于 $V$ 中绝对收敛 $\iff$ $\ds \sum_{n = 1}^\infin \Vert a_n \Vert$ 于 $\R$ 中收敛.

而 $\C$ 连带它的复数模长 $| \cdot | : \C \to \R^+$ 则构成了赋范线性空间, 因此也就同样可讨论 $\exp$ 于 $\C$ 中的绝对收敛性了.

### 定理 2.2.2 (指数函数的基本性质)

设有指数函数 $\exp : \C \to \C$, 以下结论成立：

1. **同态性**：$\Forall{z_1, z_2 \in \C} \exp(z_1 + z_2) = \exp(z_1) \cdot \exp(z_2)$;
2. **复数非零**：$\Forall{z \in \C} \exp(z) \neq 0$;
3. **实数恒正**：$\Forall{x \in \R} \exp(x) > 0$.

##### 证明

1. 由于已知 $\Forall{z \in \C} e^z$ 绝对收敛, 那么：
   $$
   e^{z_1 + z_2}
   = \sum_{k = 0}^\infin \frac{(z_1 + z_2)^k}{k!}
   = \sum_{k = 0}^\infin \bigg( \frac{1}{k!} \underbrace{ \sum_{i + j = k} \frac{k!}{i! j!} \b{z_1^i + z_2^j} }_{\text{二项式定理}} \bigg)
   = \sum_{k = 0}^\infin \sum_{i + j = k} \b{ \frac{z_1^i}{i!} \cdot \frac{z_2^j}{j!} }
   \overset{\text{由 $2.1.2$}}{=} \sum_{k = 0}^\infin \frac{z_1^k}{k!} \cdot \sum_{k = 0}^\infin \frac{z_2^k}{k!}
   = e^{z_1} \cdot e^{z_2}
   $$

2. 假设 $\Exists{z \in \C} e^z = 0$, 两侧右乘 $e^{-z}$ 可得 $e^z \cdot e^{-z} = 0 \cdot e^{-z} = 0$, 然而由 $(1)$ 我们知道 $e^z \cdot e^{-z} = e^0 = 1$, 这便产生了矛盾.

3. 由 $(2)$ 已知 $e^0 = 1 > 0$, 现在分别讨论：

   - 当 $x > 0$ 时, 按 $e^x$ 的定义我们知道 $\ds \sum_{k = 0}^\infin \frac{x^k}{k!} > 0$.
   - 当 $x < 0$ 时, 假设 $e^x = e^{-y}$, 其中 $y > 0$, 显然有 $e^{-y} = \b{e^y}^{-1} > 0$.

### 命题 2.2.3 (实指数函数的严格递增性与双射)

设有 $\R$ 上的指数函数 $\exp : \R \to \R_{>0}$：

1. 函数 $\exp$ 是严格递增的;
2. 函数 $\exp$ 是双射.

##### 证明

1. 按照指数函数的幂级数定义, 我们知道 $\exp(x) = \ds \sum_{k = 0}^\infin \frac{x^k}{k!}$ 是收敛的, 现在需要证明以下命题成立：
   $$
   \Forall{x, y \in \R} (x < y) \implies \b{ \sum_{k = 0}^\infin \frac{x^k}{k!} < \sum_{k = 0}^\infin \frac{y^k}{k!} }
   $$
   而若 $x < y$ 时就有 $\ds \frac{x^k}{k!} < \frac{y^k}{k!}$, 当然我们这里的 $\ds \frac{y^k}{k!}$ 还可以进一步地表示为：
   $$
   \frac{y^k}{k!} = \frac{x^k}{k!} + \underbrace{\b{ \frac{y^k}{k!} - \frac{x^k}{k!} }}_{\text{两者之间的误差}} = \frac{x^k}{k!} + \frac{y^k - x^k}{k!}
   $$
   因此便可逐步推得：
   $$
   \begin{align}
   \sum_{k = 0}^\infin \frac{y^k}{k!} - \sum_{k = 0}^\infin \frac{x^k}{k!}
   & = \sum_{k = 0}^\infin \b{ \frac{y^k}{k!} - \frac{x^k}{k!} } \\
   & = \sum_{k = 0}^\infin \b{ \frac{x^k}{k!} + \frac{y^k - x^k}{k!} - \frac{x^k}{k!} } \\
   & = \sum_{k = 0}^\infin \underbrace{\b{ \frac{y^k - x^k}{k!} }}_{> 0} \\
   & > 0
   \end{align}
   $$

2. ...

## 2.3. 三角函数的构造

### 定义 2.3.1 (正弦与余弦函数)

设 $z \in \C$, 利用 $\exp(z)$, 则可定义它的正弦及余弦函数如下：
$$
\cos z = \frac{e^{iz} + e^{-iz}}{2} = \sum_{k = 0}^\infin \frac{(-1)^k z^{2k}}{(2k)!}, \qquad \sin z = \frac{e^{iz} - e^{-iz}}{2i} = \sum_{k = 0}^\infin \frac{(-1)^k z^{2k + 1}}{(2k + 1)!}
$$

### 注释

正切函数 $\tan$ 与余切函数 $\cot$ 的定义仍是由上述的 $\sin$ 与 $\cos$ 给出, 这与在初等数学中的定义没有区别.

### 定理 2.3.2 (三角函数的基本性质)

1. **欧拉公式**：$\cos z + i \sin z = e^{iz}$;
2. **毕达哥拉斯恒等式**：$\Forall{z \in \C} (\cos z)^2 + (\sin z)^2 = 1$;
3. $\Forall{x \in \R} \abs{ e^{ix} } = 1$ (其中 $|\cdot|$ 取为复数模长);
4. $\Forall{x \in \R} |\sin x| \leq 1$ 且 $|\cos x| \leq 1$ (其中 $|\cdot|$ 取为绝对值);
5. **和差化积公式**：
   - $\Forall{x, y \in \R} \cos(x + y) = \cos x \cdot \cos y - \sin x \cdot \sin y$;
   - $\Forall{x, y \in \R} \sin(x + y) = \sin x \cdot \cos y + \cos x \cdot \sin y$.

##### 证明

1. 显然的, 直接由定义可证.

2. 同样利用定义推导后立得.

3. 由于 $e^{ix} = \cos x + i \sin x$, 显然 $\sqrt{ (\cos x)^2 + (\sin x)^2 } \overset{\text{由 $(2)$}}{=} 1$.

4. 由 $(2)$ 得知 $(\sin x)^2 = 1 - (\cos x)^2 \leq 1$, 这当且仅当 $|\sin x| \leq 1$. 而 $|\cos x| \leq 1$ 类似.

5. 由于 $\cos(x + y) + i \sin(x + y) \overset{\text{由 $(1)$}}{=} e^{i(x + y)} = e^{ix} \cdot e^{iy}$, 对其展开后则有：
   $$
   (\cos x + i \sin x) \cdot (\cos y + i \sin y) = (\cos x \cos y - \sin x \sin y) + i(\sin x \cos y + \cos x \sin y)
   $$
   然后按实部与虚部分别比较即可.

{% end %}