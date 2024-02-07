+++

title = "数学分析之课程讲义 - 6.1 部分习题解答"
date = 2024-02-07
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

## 前言

本文是于品教授的《数学分析之课程讲义》的 6.1 节部分习题答案, 可能存在错漏或不完善的地方, 还请见谅！

## 习题 A ($\epsilon - N$ 语言的训练)

### 题目 A1 (有界实数列存在收敛子列)

> 设 $\set{x_n}_{n \geq 1}$ 为有界实数数列, 试证明该数列有子列 $\set{x_{n_i}}_{i \geq 1}$ 使得 $\ds \lim_{i \to \infin} x_{n_i}$ 存在, 并且：
> $$
> \lim_{i \to \infin} x_{n_i} = \limsup_{n \to \infin} x_n.
> $$

##### 证明

即需证明命题 $\ds \Forall{\epsilon > 0} \Exists{N \in \N^\times} \Forall{n \geq N} \abs{ x_{n_i} - \limsup_{n \to \infin} x_n } < \epsilon$.

现在按定义, 我们有 $\ds \limsup_{n \to \infin} x_n = \lim_{n \to \infin} \b{ \sup_{\ell \geq n} x_\ell }$, 且由于列 $\ds \Set{ \sup_{\ell \geq n} x_\ell }$ 是单调递减的连同 $\set{x_n}_{n \geq 1}$ 的有界性, 通过单调有界定理得知该极限存在并设为 $L \in \R$, 因此有条件 $\ds \Forall{\epsilon > 0} \Exists{N_1 \in \N^\times} \Forall{n \geq N_1} \abs{ \sup_{\ell \geq n} x_\ell  - L } < \epsilon$, 显然由于 $\ds x_{n_i} \leq \sup_{\gamma \geq i} x_{n_\gamma} \leq \sup_{\ell \geq n} x_\ell$, 因此对任意 $\epsilon > 0$, 当我们取 $N = N_1$ 时, 对任意 $n \geq N$ 则有以下命题成立：
$$
|x_{n_i} - L| \leq \abs{ \sup_{\ell \geq n} x_\ell  - L } < \epsilon
$$

### 题目 A2 (实数列收敛当且仅当上下极限相等)

> 设 $\set{x_n}_{n \geq 1}$ 为实数数列, 试证明 $\set{x_n}_{n \geq 1}$ 收敛当且仅当 $\ds \limsup_{n \to \infin} x_n = \liminf_{n \to \infin} x_n$.

##### 证明

$(\rArr)$ 由于 $\ds \limsup_{n \to \infin} x_n$ 与 $\ds \liminf_{n \to \infin} x_n$ 分别是 $\set{x_n}_{n \geq 1}$ 中所有子列极限的上确界与下确界, 只要 $\ds \lim_{n \to \infin} x_n = L$, 那么它的所有子列 $\set{x_{n_i}}_{i \geq 1}$ 也必然收敛到唯一的极限值, 利用 [题目 A1](#题目_A1_(有界实数列存在收敛子列)) 的结论可以知道 $\ds \limsup_{n \to \infin} x_n = L$. 另一方面, 由于 $\ds \inf_{\ell \geq n} x_\ell \leq x_n$, 因此对任意 $\epsilon > 0$, 只要挑选合适的 $N$, 对任意 $n \geq N$ 以下命题成立：
$$
\abs{ \inf_{\ell \geq n} x_\ell - L } \leq |x_n - L| < \epsilon
$$
$(\lArr)$ 由于对任意的 $n \in \N^\times$ 皆有 $\ds \inf_{\ell \geq n} x_\ell \leq x_n \leq \sup_{\ell \geq n} x_\ell$, 且 $\ds \limsup_{n \to \infin} x_n = \liminf_{n \to \infin} x_n$, 由双边控制直接得到结论.

### 题目 A3 ($\R^n$ 的收敛性)

> $\Set{x^{(k)}}_{k \geq 1}$ 为 $\R^n$ 中的点列, 其中 $x^{(k)} = \b{ x_1^{(k)}, x_2^{(k)}, \cdots, x_n^{(k)} }$, 那么 $\Set{x^{(k)}}_{k \geq 1}$ 收敛当且仅当它的每个分量都是收敛的实数数列.

##### 证明

设 $(\R^n, \Vert \cdot \Vert)$ 为携带了欧几里得范数 $\Map{\Vert \cdot \Vert}{\R^n}{\R_{\geq 0}}{x^{(k)}}{ \sqrt{\sum_{i = 1}^n \b{x^{(k)}_i}^2 } }$ 的赋范线性空间, 它的度量空间由 $(\R^n, d)$ 给出, 其中定义度量 $d$ 为：
$$
\Map{d}{\R^n \times \R^n}{\R_{\geq 0}}{\b{ x^{(k)}, y^{(k)} }}{ \left\Vert x^{(k)} - y^{(k)} \right\Vert }
$$
($\rArr$) 那么当 $\ds \lim_{k \to \infin} x^{(k)} = L$, 并且 $L = (L_1, L_2, \cdots, L_n)$ (其中 $L_i \in \R$) 时则有：
$$
\Forall{\epsilon > 0} \Exists{N' \in \N^\times} \Forall{k \geq N'} \left\Vert x^{(k)} - L \right\Vert = \sqrt{\sum_{i = 1}^n \b{x^{(k)}_i - L_i}^2 } < \epsilon
$$
事实上, 上式中的度量 $\ds d_1(x, y) = \sqrt{\sum_{i = 1}^n \b{x_i - y_i}^2 }$ 等价于 $\ds d_2(x, y) = \sum_{i = 1}^n \abs{ x_i - y_i }$, 这是因为于 $\R^n$ 中, 分别由 $(\R^n, d_1)$ 与 $(\R^n, d_2)$ 所给出的度量空间中, 它们中任意由度量 $d_1$ 或 $d_2$ 所给出的序列极限皆是等价的：
$$
\Forall{x, y \in \R^n} \lim_{n \to \infin} d_1(x, y) = \lim_{n \to \infin} d_2(x, y)
$$
因此对于任意 $i = 1,2,\cdots,n$ 以及 $\epsilon > 0$, 取 $N = N'$ 时对任意 $k \geq N$ 以下不等式成立：
$$
\abs{ x^{(k)}_i - L_i } \leq \sum_{i = 1}^n \abs{ x_i^{(k)} - L_i } < \epsilon
$$
$(\lArr)$ 若对任意 $i = 1,2, \cdots, n$, 每个分量 $x_i^{(k)}$ 皆收敛于 $L$, 那么则满足 $\ds \Forall{\epsilon > 0} \Exists{N_i \in \N^\times} \Forall{k \geq N_i} \abs{ x^{(k)}_i - L_i } < \frac{\epsilon}{n}$, 那么对任意 $\epsilon > 0$ 只须取 $N = \max\set{N_1, N_2, \cdots, N_n}$ 则对任意 $k \geq N$ 时以下条件成立：
$$
\sum_{i = 1}^n \abs{ x_i^{(k)} - L_i } = \underbrace{\abs{ x_1^{(k)} - L_1 } + \abs{ x_2^{(k)} - L_2 } + \cdots + \abs{ x_n^{(k)} - L_n }}_{\text{$n$ 次}} < \underbrace{\frac{\epsilon}{n} + \frac{\epsilon}{n} + \cdots + \frac{\epsilon}{n}}_{\text{$n$ 次}} = \epsilon
$$

### 题目 A4 (复数数列的四则运算)

> 设 $\set{z_n}_{n \geq 1}$ 以及 $\set{w_n}_{n \geq 1}$ 为收敛的复数列, 则：
>
> 1. 数列 $\set{ z_n \pm w_n }_{n \geq 1}$ 收敛且 $\ds \lim_{n \to \infin} (z_n \pm w_n) = \lim_{n \to \infin} z_n \pm \lim_{n \to \infin} w_n$;
> 2. 数列 $\set{ z_n \cdot w_n }_{n \geq 1}$ 收敛且 $\ds \lim_{n \to \infin} (z_n \cdot w_n) = \lim_{n \to \infin} z_n \cdot \lim_{n \to \infin} w_n$;
> 3. 若 $\ds \lim_{n \to \infin} w_n \neq 0$, 则数列 $\ds \Set{\frac{z_n}{w_n}}$ 收敛 ($\ds \lim_{n \to \infin} w_n \neq 0$ 表明当 $n$ 充份大时 $w_n \neq 0$) 并且 $\ds \lim_{n \to \infin} \frac{z_n}{w_n} = \frac{\ds \lim_{n \to \infin} z_n}{\ds \lim_{n \to \infin} w_n}$.

##### 证明

现在分别证明：

1. 若 $\ds \lim_{n \to \infin} z_n = L_1$ 且 $\ds \lim_{n \to \infin} w_n = L_2$, 其中极限值 $L_1, L_2 \in \C$, 则同时满足：
   $$
   \Forall{\epsilon > 0} \Exists{N_1 \in \N^\times} \Forall{n \geq N_1} \abs{ z_n - L_1 } < \frac{\epsilon}{2}, \qquad \Forall{\epsilon > 0} \Exists{N_2 \in \N^\times} \Forall{n \geq N_2} \abs{ w_n - L_2 } < \frac{\epsilon}{2}
   $$
   显然由于 $(\C, d)$ 连同模长作为度量 $\Map{d}{\C \times \C}{\R}{(z_1, z_2)}{|z_1 - z_2|}$ 构成度量空间, 对任意 $\epsilon > 0$, 只须取 $N = \max \set{N_1, N_2}$, 那么对任意 $n \geq N$ 皆可通过它的三角不等式得到：
   $$
   \abs{ (z_n + w_n) - (L_1 + L_2) } \leq \abs{ z_n - L_1 } + \abs{ w_n - L_2 } < \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon
   $$
   减法如出一辙, 该处略过.

2. 若 $\ds \lim_{n \to \infin} z_n = L_1$ 且 $\ds \lim_{n \to \infin} w_n = L_2$, 其中极限值 $L_1, L_2 \in \C$, 则同时满足：
   $$
   \Forall{\epsilon > 0} \Exists{N_1 \in \N^\times} \Forall{n \geq N_1} \abs{ z_n - L_1 } < \epsilon_1, \qquad
   \Forall{\epsilon > 0} \Exists{N_2 \in \N^\times} \Forall{n \geq N_2} \abs{ w_n - L_2 } < \epsilon_2
   $$
   而我们需要证明的是 $\Forall{\epsilon > 0} \Exists{N \in \N^\times} \Forall{n \geq N} \abs{ z_n w_n - L_1 L_2 } < \epsilon$, 那么首先考虑从 $|z_n w_n - L_1 L_2|$ 中凑出 $|z_n - L_1|$ 的形式, 例如引入项 $- L_1 w_n$ 使得当 $z_n w_n - L_1 w_n$ 时将 $w_n$ 提取出来, 那么则有：
   $$
   |z_n w_n - L_1 w_n + L_1 w_n - L_1 L_2| \leq |w_n| \cdot |z_n - L_1| + |L_1| \cdot |w_n - L_2|
   $$
   而现在我们希望令 $|w_n|$ 固定, 而 $\set{w_n}$ 是收敛的因此其必有上确界 $M$, 且希望上述结果可以从 $\leq$ 进一步放缩为 $<$, 因此将 $|L_1|$ 放宽为 $|L_1 + 1|$ 则有：
   $$
   \cdots < M \cdot |z_n - L_1| + |L_1 + 1| \cdot |w_n - L_2|
   $$
   从而加号的左侧项小于 $M\epsilon_1$ 而右侧项小于 $|L_1 + 1| \epsilon_2$, 那么：
   $$
   \cdots < M \cdot |z_n - L_1| + |L_1 + 1| \cdot |w_n - L_2| < M \epsilon_1 + |L_1 + 1|\epsilon_2
   $$
   事后诸葛亮地我们当然希望把 $M \epsilon_1 + |L_1 + 1|\epsilon_2$ 整理得好看一些, 最好是化简为任意的 $\epsilon > 0$ 的形式, 因此可以令：
   $$
   \epsilon_1 = \frac{\epsilon}{2M}, \qquad \epsilon_2 = \frac{\epsilon}{2 |L_1 + 1|}
   $$
   那么只须取 $N = \max \set{ N_1, N_2 }$, 对任意 $n \geq N$ 时显然下式成立：
   $$
   \abs{ z_n w_n - L_1 L_2 } < M \cdot \frac{\epsilon}{2M} + |L_1 + 1| \cdot \frac{\epsilon}{2 |L_1 + 1|} = \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon
   $$

3. 这是 $(2)$ 的推论, 即将 $\ds \lim_{n \to \infin} \frac{z_n}{w_n}$ 视为 $\ds \lim_{n \to \infin} \b{ z_n \cdot \frac{1}{w_n} }$ 即可证明.

### 题目 A5 (交错收敛级数审敛)

> 设 $\set{a_n}_{n \geq 1}$ 为递减的正实数列且 $\ds \lim_{n \to \infin} a_n = 0$, 证明以下级数收敛：
> $$
> \sum_{k = 1}^\infin (-1)^{k + 1}a_k = a_1 - a_2 + a_3 - a_4 + \cdots + (-1)^{k + 1} a_k + \cdots
> $$

##### 证明 (利用柯西收敛原则)

考虑该级数的部分和 $S_n = \ds \sum_{k = 1}^n (-1)^{k + 1} a_k$, 只要 $S_n$ 收敛那么整个级数都将收敛. 那么由级数的柯西判别准则, 我们需要证明：
$$
\Forall{\epsilon > 0} \Exists{N \in \N^\times} \Forall{n \geq N \\ p \geq 0} \abs{ \sum_{n \leq k \leq n + p} (-1)^{k+1} a_k } < \epsilon
$$
现在分别讨论：

- 当 $n$ 为奇数且 $p$ 为偶数时, 将 $\ds \sum_{n \leq k \leq n + p} (-1)^{k + 1} a_k$ 展开, 且从第三项起两两结合, 将得到以下形式：
  $$
  a_{n} - a_{n + 1} + (a_{n + 2} - a_{n + 3}) + \cdots + (a_{n + p - 2} - a_{n + p - 1}) + a_{n + p}
  $$

  而由于 $\set{a_n}_{n \geq 1}$ 为递减数列, 因此其中的 $(a_{n + 2} - a_{n + 3}) + \cdots + (a_{n + p - 2} - a_{n + p - 1}) + a_{n + p}$ 皆为正或等于零, 所以我们知道：
  $$
  - \epsilon < \underbrace{a_n - a_{n + 1}}_{\geq 0} \leq \underbrace{a_{n} - a_{n + 1}}_{\geq 0} + \underbrace{(a_{n + 2} - a_{n + 3}) + \cdots + (a_{n + p - 2} - a_{n + p - 1}) + a_{n + p}}_{\geq 0}
  $$
  其中 $\epsilon$ 为任给的正实数, 因此 $a_n - a_{n + 1}$ 理所应当地大于 $-\epsilon$. 另一方面, 我们若从第二项起两两结合则会得到：
  $$
  a_{n} - (\underbrace{a_{n + 1} - a_{n + 2}}_{\geq 0}) - (\underbrace{a_{n + 3} - a_{n + 4}}_{\geq 0}) - \cdots - (\underbrace{a_{n + p - 1} - a_{n + p}}_{\geq 0}) \leq a_n
  $$
  即是说当 $a_n$ 减去所有大于或等于零的项后, 它当然小于或等于 $a_n$ 自身, 而再由 $\ds \lim_{n \to \infin} a_n = 0$, 当取定合适的 $N$ 时, 对任意 $n \geq N$ 总有 $\cdots \leq a_n < \epsilon$ 成立. 而当 $n$ 为奇数且 $p$ 为奇数项时亦有类似的讨论, 因为在这个情况下最后的偶数项 $a_{n + p}$ 是带负号的, 同样可得出以上结论.

- 当 $n$ 为偶数且 $p$ 为偶数时, 同样将式子展开后, 从第三项起两两结合则有：
  $$
  - a_{n} + a_{n + 1} - (a_{n + 2} - a_{n + 3}) - \cdots - (a_{n + p - 2} - a_{n + p - 1}) - a_{n + p} < \underbrace{- a_n + a_{n + 1}}_{\leq 0} < \epsilon
  $$
  可见由于 $\set{a_n}_{n \geq 1}$ 为递减数列, 因此 $-a_n + a_{n + 1}$ 必定为负或等于零, 因此它必然小于任意给定的正实数 $\epsilon$. 另一方面, 若从第二项起两两结合则有：
  $$
  -a_n \leq - a_n + (a_{n + 1} - a_{n + 2}) + (a_{n + 3} - a_{n + 4}) + \cdots + (a_{n + p - 1} - a_{n + p})
  $$
  同样再由 $\ds \lim_{n \to \infin} a_n = 0$, 当取合适的 $N$ 时, 对任意 $n \geq N$ 总有 $-\epsilon < -a_n \leq \cdots$ 成立. 而对于 $p$ 为奇数的情况类似于之前 $n$ 为奇数时的讨论, 该处略过.

### 题目 A6 (复数项级数绝对收敛)

> 设 $\ds \sum_{k = 0}^\infin a_k$ 为复数项级数, 若 $\ds \sum_{k = 0}^\infin |a_k|$ 收敛, 则 $\ds \sum_{k = 0}^\infin a_k$ 亦收敛, 其中 $|\cdot|$ 取为复数的模长.

##### 证明

设 $\ds \sum_{k = 0}^\infin a_k$ 的部分和为 $\ds \sum_{k = 0}^n a_k$, 那么柯西判别准则我们知道需证明：
$$
\Forall{\epsilon > 0} \Exists{N \in \N^\times} \Forall{n \geq N \\ p \geq 0} \abs{ \sum_{n \leq k \leq n + p} a_k } < \epsilon
$$
由于 $(\C, |\cdot|)$ 构成赋范线性空间, 因此满足了三角不等式 $\ds \abs{ \sum_{n \leq k \leq n + p} a_k } \leq \sum_{n \leq k \leq n + p} |a_k|$, 再由 $\ds \sum_{k = 0}^\infin |a_k|$ 是收敛的当且仅当它的级数柯西列收敛, 那么对任意 $\epsilon > 0$, 只须选取合适的 $N$ 使得对任意 $n \geq N$ 以及 $p \geq 0$ 时有以下不等式成立：
$$
\ds \abs{ \sum_{n \leq k \leq n + p} a_k } \leq \sum_{n \leq k \leq n + p} |a_k| = \abs{ \sum_{n \leq k \leq n + p} |a_k| } < \epsilon
$$

### 题目 A7 (复数上的指数函数)

> 证明 $\C$ 上的指数函数 $\Map{\exp}{\C}{\C}{z}{e^z = \sum_{k = 0}^\infin \frac{z^k}{k!}}$ 是良定的.

要证指数函数 $\exp$ 是良定的, 只须说明级数 $\ds \sum_{k = 0}^\infin \frac{z^k}{k!}$ 是收敛的, 而由 [题目 A6](#题目_A6_(复数项级数绝对收敛)) 则我们只须说明它绝对收敛, 而我们知道对任意它的部分和皆有：
$$
\sum_{k = 0}^n \abs{ \frac{z^k}{k!} } = \sum_{k = 0}^n \frac{\abs{z^k}}{k!} \leq \sum_{k = 0}^n \frac{1}{2^k}
$$
即是说我们可以利用收敛级数 $\ds \sum_{k = 0}^\infin \frac{1}{2^k}$ 来控制 $\ds \sum_{k = 0}^\infin \abs{ \frac{z^k}{k!} }$, 那么原级数显然收敛.

### 题目 A8 (无限乘积的柯西判别准则)

> 设 $\set{a_n}_{n \geq 1}$ 为复数项数列, 假设 $\Forall{n \in \N^\times} a_n \neq 0$, 且令 $P_n = \ds \prod_{k = 1}^n a_k = a_1 \cdot a_2 \cdots a_n$, 若数列 $\set{P_n}_{n \geq 1}$ 的极限存在且该极限不为 $0$, 则称无限乘积 $\ds \prod_{n \geq 1} a_n$ 收敛且记为 $\ds \prod_{n \geq 1} a_n = \lim_{n \to \infin} P_n$. 现在请证明无限乘积版本的柯西判别准则, 即：
> $$
> \prod_{n \geq 1} a_n\ \text{收敛} \iff \b{ \Forall{\epsilon > 0} \Exists{N \in \N^\times} \Forall{n \geq N \\ p \geq 0} \abs{ \prod_{n \leq k \leq n + p} a_k - 1 } < \epsilon }
> $$

##### 证明

$(\rArr)$ 假设 $\ds \prod_{n \geq 1} a_n$ 收敛, 由一般数列的柯西判别准则就有 $\ds \Forall{\epsilon > 0} \Exists{N_1 \in \N^\times} \Forall{n - 1 \geq N_1 \\ p \geq 0} \abs{ P_{n + p} - P_{n - 1} } < \epsilon$ 成立, 并且由于：
$$
|P_{n + p} - P_{n - 1}| = \abs{ \prod_{k = 1}^{n+p} a_k - \prod_{k = 1}^{n - 1} a_k } = \abs{ \prod_{k = 1}^{n - 1} a_k } \cdot \abs{ \prod_{n \leq k \leq n + p} a_k - 1 } = |P_{n - 1}| \cdot \abs{ \prod_{n \leq k \leq n + p} a_k - 1 } < \epsilon
$$
显然上述的 $\epsilon$ 是任取的, 因此两侧同时除以 $\ds \abs{ P_{n - 1} }$ 就有：
$$
\abs{ \prod_{n \leq k \leq n + p} a_k - 1 }  < \frac{\epsilon}{ \abs{ P_{n - 1} } }
$$
而现在想要固定住 $P_{n - 1}$, 考虑到若 $\ds \prod_{n \geq 1} a_n$ 收敛于固定值 $P \in \C$, 而只要 $P \neq 0$, 即便是有限多项之积 $a_1 a_2 \cdots a_n = Q \neq 0$, 它必然也大于 $\ds \frac{Q}{2}$, 因此将这一概念推广至当项数足够大时亦有条件：
$$
\Exists{N_2 \in \N^\times} \Forall{n \geq N_2} \abs{ \sum_{k = 1}^n a_k } = |P_n| > \frac{|P|}{2}
$$
因此对任意 $\epsilon > 0$, 只要取 $N = \max\set{N_1, N_2}$, 那么对任意 $n \geq N$ 以及 $p \geq 0$ 则有以下不等式成立：
$$
\abs{ \prod_{n \leq k \leq n + p} a_k - 1 }  < \frac{\epsilon}{ \abs{ P_{n - 1} } } < \frac{2 \epsilon}{|P|}
$$
$(\lArr)$ 当 $\Forall{\epsilon > 0} \Exists{N' \in \N^\times} \Forall{n \geq N' \\ p \geq 0} \abs{ \prod_{n \leq k \leq n + p} a_k - 1 } < \epsilon$ 成立时, 我们希望证明 $\ds \prod_{n \geq 1} a_n$ 收敛, 那么又当且仅当它是个柯西列, 即是说又应证明：
$$
\ds \Forall{\epsilon > 0} \Exists{N \in \N^\times} \Forall{n - 1 \geq N \\ p \geq 0} \abs{ P_{n + p} - P_{n - 1} } < \epsilon
$$
而根据 $(\rArr)$ 所给出的展开式, 再结合无限乘积的柯西列条件, 我们知道：
$$
|P_{n + p} - P_{n - 1}| = |P_{n - 1}| \cdot \abs{ \prod_{n \leq k \leq n + p} a_k - 1 } < |P_{n - 1}| \cdot \epsilon
$$
那么只要数列 $\set{P_n}_{n \geq 1}$ 充分大的项是有界的, 便可以将 $|P_{n - 1}| \epsilon$ 放缩为固定值 $M \epsilon$, 其中 $M$ 为该数列的上界, 即是说现在需证明：
$$
\Exists{M > 0} \Forall{n \geq N'} |P_n| \leq M
$$
而由条件中的 $\ds \abs{ \prod_{n \leq k \leq n + p} a_k - 1 } < \epsilon$ 部分, 例如取 $\epsilon = 1$ 时我们就有 $\ds \abs{ \prod_{n \leq k \leq n + p} a_k } < 2$, 而当两侧同时乘上 $P_{n - 1}$, 并考虑取定 $n = N'$, 那么对任意的整数 $p \geq 0$ 则有：
$$
\abs{ \prod_{N' \leq k \leq N' + p} a_k } \cdot |P_{N' - 1}| = |P_{N' + p}| < 2 |P_{N' - 1}|
$$
诚然 $\set{P_n}_{n \geq 1}$ 中任意充分大的项 $P_{N' + p}$ 都是有界的, 再由实数的确界定理我们就可以取 $\ds M = \sup_{n \geq 1} |P_{n}|$. 此时对任意 $\epsilon > 0$, 只要取 $N = N'$ 则对任意充分大的 $n \geq N$ 以及 $p \geq 0$ 都有下式成立：
$$
|P_{n + p} - P_{n - 1}| < |P_{n - 1}| \epsilon < M \epsilon
$$
另一方面, 我们还须验证 $\ds \ds \prod_{n \geq 1} a_n \neq 0$, 通过反证法我们可以假设它的极限为 $0$, 则有条件：
$$
\Forall{\epsilon > 0} \Exists{N \in \N^\times} \Forall{n \geq N} |P_n - 0| < \epsilon
$$
而根据我们上述的证明过程可得知 $|P_{N + p}| < 2 |P_{N - 1}|$ 成立, 因此只要取倒数 $\ds \epsilon = \frac{1}{2|P_{N - 1}|}$ 即可推出矛盾, 因此 $\ds \ds \prod_{n \geq 1} a_n \neq 0$ 成立.

### 题目 A9 (指数函数的严格递增性)

> 请证明函数 $\exp(x)$ 于 $\R$ 上是严格递增的.

##### 证明

按照指数函数的幂级数定义, 我们知道 $\exp(x) = \ds \sum_{k = 0}^\infin \frac{x^k}{k!}$ 是收敛的, 现在需要证明以下命题成立：
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

### 题目 A10 (基本的增长速度比较)

> 假设 $P(X)$ 为一个实系数的 $n$ 次多项式, $Q(X)$ 为另一个实系数的 $m$ 次多项式, 并且 $m > n$, 证明：
> $$
> \lim_{k \to \infin} \frac{P(k)}{Q(k)} = 0, \qquad \lim_{k \to \infin} \frac{Q(k)}{e^k} = 0
> $$

##### 证明

我们假设多项式 $P(k)$ 与 $Q(k)$ 的展开式为：
$$
\begin{align}
P(k) & = \sum_{i = 0}^n a_i k^i = a_n k^n + a_{n - 1} k^{n - 1} + \cdots + a_1 k + a_0 \qquad (a_n \neq 0) \\
Q(k) & = \sum_{i = 0}^m b_i k^i = b_m k^m + b_{m - 1} k^{m - 1} + \cdots + b_1 k + b_0 \qquad (b_m \neq 0)
\end{align}
$$

- $\ds \lim_{k \to \infin} \frac{P(k)}{Q(k)} = 0$ 的情形：

  将有理函数 $\ds \frac{P(k)}{Q(k)}$ 中分子的 $P(k)$ 按照上式展开后, 分子分母同时除 $k^j$ 则得到 (其中 $0 \leq j \leq n$)：
  $$
  \begin{align}
  \lim_{k \to \infin} \frac{P(k)}{Q(k)} & = \lim_{k \to \infin} \b{ \frac{a_n k^n}{Q(k)} + \frac{a_{n - 1} k^{n - 1}}{Q(k)} + \cdots + \frac{a_1 k}{Q(k)} + \frac{a_0}{Q(k)} } \\
  & = \lim_{k \to \infin} \b{ \frac{a_n}{Q(k)/k^n} + \frac{a_{n - 1}}{Q(k)/k^{n - 1}} + \cdots + \frac{a_1}{Q(k)/k^1} + \frac{a_0}{Q(k)/k^0} } \\
  \end{align}
  $$
  而由于其中的 $\ds Q(k)/k^j = \sum_{i = 0}^m b_i k^{i - j}$, 我们将其简记为 $S_k(j)$, 因此上式又等价于：
  $$
  \lim_{k \to \infin} \b{ \frac{a_n}{S_k(n)} + \frac{a_{n - 1}}{S_k(n - 1)} + \cdots + \frac{a_1}{S_k(1)} + \frac{a_0}{S_k(0)} }
  $$
  显然当 $k \to \infin$ 时, 其中的每项极限皆存在且等于 $0$, 因此按极限线性性质则有：
  $$
  \lim_{k \to \infin} \frac{a_n}{S_k(n)} + \lim_{k \to \infin} \frac{a_{n - 1}}{S_k(n - 1)} + \cdots + \lim_{k \to \infin} \frac{a_1}{S_k(1)} + \lim_{k \to \infin} \frac{a_0}{S_k(0)} = 0
  $$

- $\ds \lim_{k \to \infin} \frac{Q(k)}{e^k} = 0$ 的情形：
  $$
  \begin{align}
  \lim_{k \to \infin} \frac{Q(k)}{e^k} & = \lim_{k \to \infin} \b{ \frac{b_m k^m}{e^k} + \frac{b_{m - 1} k^{m - 1}}{e^k} + \cdots + \frac{b_1 k}{e^k} + \frac{b_0}{e^k} } \\
  & = \lim_{k \to \infin} \b{ \frac{b_m}{e^k/k^m} + \frac{b_{m - 1}}{e^k/k^{m - 1}} + \cdots + \frac{b_1}{e^k/k} + \frac{b_0}{e^k} }
  \end{align}
  $$
  显然指数函数 $e^k$ 的增长速率远快于幂函数 $k^m$, 因此当 $k \to \infin$ 时上述每一项皆存在极限, 这意味着 $\ds \lim_{k \to \infin} \frac{Q(k)}{e^k} = 0$ 成立.

## 习题 C (Riemann 重排定理)

由于书上的定义不符合个人风格, 该处的叙述稍作调整.

### 定义 (条件收敛)

> 若实数项级数 $\ds \sum_{n = 1}^\infin a_n$ 收敛而非绝对收敛, 则称 $\ds \sum_{n = 1}^\infin a_n$ 是 **条件收敛 (condition convergence)** 的.

Riemann 证明了以下有趣的定理 (记拓展实数集为 $\overline{\R} \coloneqq \R \cup \set{- \infin, + \infin}$)：

### 定理 (Riemann 重排定理)

> 若实数项级数 $\ds \sum_{n = 1}^\infin a_n$ 条件收敛, 则有 $\Forall{\alpha \in \overline{\R}} \Exists{\varphi : \N^\times \to \N^\times \\ \text{$\varphi$ 为双射}} \ds \sum_{n = 1}^\infin a_{\varphi(n)} = \alpha$, 其中称 $\ds \sum_{n = 1}^\infin a_{\varphi(n)}$ 为级数 $\ds \sum_{n = 1}^\infin a_n$ 的一个 **重排 (rearrangement)**.

现在将全体 $\set{a_n}_{n \geq 1}$ 中的非负项 $(\geq 0)$ 按照它们在 $\set{a_n}_{n \geq 1}$ 中的先后次序排列得到新的序列 $\set{ a_n^+ }_{n \geq 1}$, 负项 $(< 0)$ 则得到 $\set{ a_n^- }_{n \geq 1}$.

### 题目 C1

> 若实数项级数 $\ds \sum_{n = 1}^\infin a_n$ 条件收敛, 证明 $\ds \lim_{n \to \infin} a_n^+ = 0$ 以及 $\ds \lim_{n \to \infin} a_n^- = 0$.

##### 证明

由于 $\ds \sum_{n = 1}^\infin a_n$ 收敛, 根据级数的柯西判别准则有：
$$
\Forall{\epsilon > 0} \Exists{N' \in \N^\times} \Forall{r, s \geq N' \\ s \geq r} \abs{ \sum_{r \leq k \leq s} a_k } < \epsilon
$$
而 $\set{ a_n^+ }_{n \geq 1}$ 无非就是 $\set{a_n}_{n \geq 1}$ 的子列, 例如视为 $\set{a_{n_i}}_{i \geq 1}$, 那么对任意 $\epsilon > 0$, 只须取 $N = N'$, 对任意 $i \geq N$, 只要我们取定上式中的 $r = N'$ 及 $s = n_i$, 换句话即是说 "从 $a_N$ 到 $a_n$ 所有充分大的项相加后的绝对值将小于 $\epsilon$", 遂使得下述不等式成立：
$$
|c_n - 0| = a_{n_i} \leq \abs{ \sum_{N \leq k \leq n_i} a_k } < \epsilon
$$
至于 $\ds \lim_{n \to \infin} a_n^- = 0$ 的证明与上述的方式如出一辙, 因此略过.

### 题目 C2

> 若实数项级数 $\ds \sum_{n = 1}^\infin a_n$ 条件收敛, 证明 $\ds \sum_{n = 1}^\infin a_n^+ = + \infin$ 以及 $\ds \sum_{n = 1}^\infin a_n^- = - \infin$.

##### 证明

由于 $\ds \sum_{n = 1}^\infin a_n^+$ 与 $\ds \sum_{n = 1}^\infin |a_n|$ 皆为正项级数, 同时后者发散, 且有 $\Forall{n \in \N^\times} a_n^+ = a_{n_i} \geq |a_{n_i}|$, 因此通过比较审敛法就得到了 $\ds \sum_{n = 1}^\infin a_n^+ = + \infin$.

另一方面, $\ds \sum_{n = 1}^\infin a_n^- = - \infin$ 是显然的, 因为所有负项不断相减当然就趋于 $- \infin$.

### 题目 C3 (对级数重排以逼近任何实数)

> 请证明, 对任意 $\alpha \in \R$, 存在级数 $\ds \sum_{n = 1}^\infin a_n$ 的一个重排 $\ds \sum_{k = 1}^\infin a_{\varphi(k)}$, 使得 $\ds \sum_{k = 1}^\infin a_{\varphi(k)} = \alpha$.

##### 证明

考虑将 $\set{a_n^+}_{n \geq 1}$ 中的首 $N_1$ 项逐项加入至新的级数中, 使得：
$$
\sum_{n = 1}^{N_1 - 1} a_n^+ \leq \alpha, \qquad \sum_{n = 1}^{N_1} a_n^+ > \alpha \tag 1
$$
现在再在 $\ds \sum_{n = 1}^{N_1} a_n^+$ 后续加上 $\set{a_n^-}_{n \geq 1}$ 的首 $N_2$ 项, 使得：
$$
\sum_{n = 1}^{N_1} a_n^+ + \sum_{n = 1}^{N_2 - 1} a_n^- > \alpha, \qquad \ds \sum_{n = 1}^{N_1} a_n^+ + \sum_{n = 1}^{N_2} a_n^- \leq \alpha \tag 2
$$
接下来继续重复第 $(1)$ 步, 从第 $N_1 + 1$ 项开始累加至 $N_3$ 项, 然后继续第 $(2)$ 步, 即是说：
$$
\begin{align}
\sum_{n = 1}^{N_1} a_n^+ + \sum_{n = 1}^{N_2} a_n^- + \sum_{n = N_1 + 1}^{N_3 - 1} a_n^+ \leq \alpha, & \qquad
\sum_{n = 1}^{N_1} a_n^+ + \sum_{n = 1}^{N_2} a_n^- + \sum_{n = N_1 + 1}^{N_3} a_n^+ > \alpha \\

\sum_{n = 1}^{N_1} a_n^+ + \sum_{n = 1}^{N_2} a_n^- + \sum_{n = N_1 + 1}^{N_3} a_n^+ + \sum_{n = N_2 + 1}^{N_4 - 1} a_n^- > \alpha, & \qquad
\sum_{n = 1}^{N_1} a_n^+ + \sum_{n = 1}^{N_2} a_n^- + \sum_{n = N_1 + 1}^{N_3} a_n^+ + \sum_{n = N_2 + 1}^{N_4} a_n^- \leq \alpha \\ & \vdots \\

\sum_{n = 1}^{N_1} a_n^+ + \sum_{n = 1}^{N_2} a_n^- + \cdots + \sum_{n = N_{k - 2} + 1}^{N_k - 1} a_n^+ \leq \alpha, & \qquad
\sum_{n = 1}^{N_1} a_n^+ + \sum_{n = 1}^{N_2} a_n^- + \cdots + \sum_{n = N_{k - 2} + 1}^{N_k} a_n^+ > \alpha \\

\sum_{n = 1}^{N_1} a_n^+ + \sum_{n = 1}^{N_2} a_n^- + \cdots + \sum_{n = N_{k - 2} + 1}^{N_k} a_n^+ + \sum_{n = N_{k - 1} + 1}^{N_{k + 1} - 1} a_n^- > \alpha, & \qquad
\sum_{n = 1}^{N_1} a_n^+ + \sum_{n = 1}^{N_2} a_n^- + \cdots + \sum_{n = N_{k - 2} + 1}^{N_k} a_n^+ + \sum_{n = N_{k - 1} + 1}^{N_{k + 1}} a_n^- \leq \alpha \\ & \vdots \\
\end{align}
$$
而由 [题目 C2](#题目_C2) 得知有 $\ds \sum_{n = 1}^\infin a_n^+ = + \infin$ 与 $\ds \sum_{n = 1}^\infin a_n^- = - \infin$, 可以确保这个过程取之不尽, 用之不竭, 因为总能找到后续足够多的项来压制/低于 $\alpha$, 不断重复这个过程直到这个级数最终逼近 $\alpha$ 为止, 这样就建立起一个与原数列 $\set{a_n}_{n \geq 1}$ 的指标的双射 $\varphi$, 而由 [题目 C1](#题目_C1) 则确保了在 $\set{ a_n^+ }_{n \geq 1}$ 与 $\set{ a_n^- }_{n \geq 1}$ 取出的项越大时, 将趋近于 $0$, 这说明这个新的级数越累加精度就越高, 直到它的极限为 $\alpha$ 为止, 因此 $\ds \sum_{k = 1}^\infin a_{\varphi(k)} = \alpha$.

### 题目 C4 (对级数重排以趋于正无穷)

> 请证明, 存在级数 $\ds \sum_{n = 1}^\infin a_n$ 的一个重排 $\ds \sum_{n = 1}^\infin x_{\varphi(n)}$ 使得 $\ds \sum_{n = 1}^\infin x_{\varphi(n)} = + \infin$.

##### 证明

由于 $\set{ a_n^+ }_{n \geq 1}$ 与 $\set{ a_n^- }_{n \geq 1}$ 皆收敛于 $0$, 那么它们分别单调递减/递增, 考虑从 $\set{ a_n^+ }_{n \geq 1}$ 中取出首 $N_1$ 项与 $\set{ a_n^- }_{n \geq 1}$ 中取出首 $N_2$ 项使得：
$$
\sum_{n = 1}^{N_1} a_n^+ + \sum_{n = 1}^{N_2 + 1} a_n^- \leq 0, \qquad \sum_{n = 1}^{N_1} a_n^+ + \sum_{n = 1}^{N_2} a_n^- > 0
$$
同样由 [题目 C2](#题目_C2), 我们可以不断地重复这个过程, 使得：
$$
\sum_{n = 1}^{N_1} a_n^+ + \sum_{n = 1}^{N_2} a_n^- + \sum_{n = N_1 + 1}^{N_3} a_n^+ + \sum_{n = N_2 + 1}^{N_4 + 1} a_n^- + \cdots \leq 0, \qquad
\underbrace{\sum_{n = 1}^{N_1} a_n^+ + \sum_{n = 1}^{N_2} a_n^-}_{> 0} + \underbrace{\sum_{n = N_1 + 1}^{N_3} a_n^+ + \sum_{n = N_2 + 1}^{N_4} a_n^-}_{> 0} + \cdots > 0
$$
那么当右侧这个过程趋近于无穷时, 后续的项虽然非常小, 但依然大于 $0$ 的项累加在一起当然也发散到 $+ \infin$, 而这种重排方式本身也构成了一个双射 $\varphi$.

## 习题 D (Cesàro 求和极限)

### 定义 (算术平均数序列)

> 设 $\set{a_n}_{n \geq 1}$ 为实数序列, 定义 **算术平均数序列** 为 $\ds \sigma_n = \sum_{k = 1}^n \frac{a_k}{n} = \frac{1}{n} \sum_{k = 1}^n a_k = \frac{a_1 + a_2 + \cdots + a_n}{n}$, 其中 $n = 1,2,3, \cdots$.

### 题目 D1 (Cesàro 求和)

> 设 $\ds \lim_{n \to \infin} a_n = a$, 证明 $\ds \lim_{n \to \infin} \sigma_n = a$.

##### 证明

由于 $\ds \lim_{n \to \infin} a_n = a$, 我们有 $\ds \Forall{\epsilon > 0} \Exists{N' \in \N^\times} \Forall{n > N'} |a_n - a| < \frac{\epsilon}{2}$, 那么考虑凑成这种形式：
$$
\begin{align}
\abs{ \frac{a_1 + a_2 + \cdots + a_n}{n} - a } & = \frac{1}{n} \bigg( |a_1 - a| + |a_2 - a| + \cdots + |a_n - a| \bigg) \\
& = \frac{1}{n} \bigg( |a_1 - a| + |a_2 - a| + \cdots + |a_{N'} - a| \bigg) + \frac{1}{n} \bigg( |a_{N' + 1} - a| + |a_{N' + 2} - a| + \cdots + |a_n - a| \bigg) \\
& < \frac{1}{n} \bb{ N' \b{ \ds \max_{1 \leq i \leq N'} \Set{ |a_i - a| } } } + \frac{1}{n} \bb{ (n - N') \cdot \frac{\epsilon}{2} }
\end{align}
$$
现在希望上述加号两侧的项分别小于 $\ds \frac{\epsilon}{2}$, 考虑先放缩左侧的项, 因此对任意 $n > \ds \frac{2}{\epsilon} \bb{ N' \b{ \ds \max_{1 \leq i \leq N'} \Set{ |a_i - a| } } }$ 时, 我们就有：
$$
\begin{align}
\text{上式} & < \frac{\epsilon}{2} + \frac{1}{n} \bb{ (n - N') \cdot \frac{\epsilon}{2} } \\
& = \frac{\epsilon}{2} + \b{ \frac{\epsilon}{2} - \frac{N' \epsilon}{2n} } \\
& < \frac{\epsilon}{2} + \frac{\epsilon}{2} \\
& = \epsilon
\end{align}
$$
因此对任意充分大的 $n$, 都有 $|\sigma_n - a| < \epsilon$ 成立.

### 题目 D2

> 构造一个不收敛的序列 $\set{a_n}_{n \geq 1}$ 使得 $\ds \lim_{n \to \infin} \sigma_n = 0$.

##### 证明

举例而言, 对任意 $n \geq 1$, 可以考虑令 $a_n = (-1)^n$, 这个数列是发散的, 而它的算术平均序列为一级数的部分和 $\sigma_n = \ds \sum_{k = 1}^n \frac{a_k}{n}$, 显然当 $n \to \infin$ 时 $\ds \lim_{n \to \infin} \sigma_n = 0$.

### 题目 D3

> 是否存在序列 $\set{a_n}_{n \geq 1}$, 使得对任意 $n \geq 1$ 都有 $a_n > 0$ 并且 $\ds \limsup_{n \to \infin} a_n = \infin$ 然而 $\ds \lim_{n \to \infin} \sigma_n = 0$?

##### 证明

不存在, 因为考虑到 $\sigma_n = \ds \sum_{k = 1}^n \frac{a_k}{n}$, 由于每一项 $a_n > 0$, 我们无法构造类似于 [题目 D2](#题目_D2) 那般的序列, 利用带负号的项以抵消掉正项的贡献.

### 题目 D4

> 对 $k \geq 1$, 记 $b_k = a_{k + 1} - a_k$, 证明 $\ds \Forall{n \geq 2} a_n - \sigma_n = \frac{1}{n} \sum_{k = 1}^{n - 1} k b_k$.

##### 证明

$$
\begin{align}
a_n - \sigma_n & = a_n - \frac{1}{n} \sum_{k = 1}^n a_k
= \frac{1}{n} \b{na_n - \sum_{k = 1}^n a_k}
= \frac{1}{n} \cdot \sum_{k = 1}^{n - 1} (a_n - a_k) \\
\\
& = \frac{1}{n} \bigg[ \underbrace{(a_n - a_1) + (a_n - a_2) + (a_n - a_3) + \cdots + (a_n - a_{n - 1})}_{\text{$n - 1$ 项}} \bigg] \\
& = \frac{1}{n} \bigg[ - a_1 - a_2 - a_3 - \cdots + (n - 1)a_n - a_{n - 1} \bigg] \\
& = \frac{1}{n} \bigg[ (a_2 - a_1) + (2 a_3 - 2 a_2) + (3 a_4 - 3 a_3) + \cdots + \bb{(n - 1)a_n - (n - 1)a_{n - 1}} \bigg] \\
& = \frac{1}{n} \sum_{k = 1}^{n - 1} (k a_{k + 1} - k a_k)
= \frac{1}{n} \sum_{k = 1}^{n - 1} k (a_{k + 1} - a_k)
\end{align}
$$

### 题目 D5

> 设 $\ds \lim_{k \to \infin} k b_k = 0$ 且 $\set{\sigma_n}_{n \geq 1}$ 收敛, 证明 $\set{a_n}_{n \geq 1}$ 亦收敛.
>
> 注意, 这是题 $\text{D1}$ 在 $n |a_{n + 1} - a_n| \to 0$ 这一额外条件下的逆命题.

##### 证明

假设 $\ds \lim_{n \to \infin} \sigma_n = \sigma$, 由 [题目 D4](#题目_D4) 我们知道 $\ds \Forall{n \geq 2} a_n = \frac{1}{n} \sum_{k = 1}^{n - 1} k b_k + \sigma_n$, 对两侧同时取极限则有：
$$
\lim_{n \to \infin} a_n = \lim_{n \to \infin} \b{ \sum_{k = 1}^{n - 1} \frac{k b_k}{n} + \sigma_n }
$$
而利用 [题目 D1](#题目_D1_(Cesàro 求和)), 由于 $\ds \lim_{k \to \infin} k b_k = 0$, 那么当 $n \to \infin$ 时, 项 $\ds \sum_{k = 1}^{n - 1} \frac{k b_k}{n} \to 0$, 因此：
$$
\lim_{n \to \infin} a_n = \lim_{n \to \infin} \sum_{k = 1}^{n - 1} \frac{k b_k}{n} + \lim_{n \to \infin} \sigma_n = 0 + \sigma = \sigma
$$
所以 $\set{a_n}_{n \geq 1}$ 是收敛的且其极限值与 $\set{\sigma_n}_{n \geq 1}$ 相同.

### 题目 D6

> 将题 $\text{D5}$ 的条件减弱为：$\set{kb_k}_{k \geq 1}$ 有界且 $\ds \lim_{n \to \infin} \sigma_n = \sigma$, 证明 $\ds \lim_{n \to \infin} a_n = \sigma$.

##### 证明

由于 $\set{kb_k}_{k \geq 1}$ 有界, 即有 $\Exists{M > 0} \Forall{k \in \N^\times} |kb_k| \leq M$, 并且有 $\Forall{\epsilon > 0} \Exists{N' \in \N^\times} \Forall{n \geq N'} |\sigma_n - \sigma| < \epsilon$ , 那么对任意 $\epsilon > 0$, 当 $n$ 充分大时：
$$
\abs{ a_n - \sigma } = \abs{ \frac{1}{n} \sum_{k = 1}^{n - 1} k b_k + \sigma_n - \sigma } \leq \abs{ \frac{1}{n} \sum_{k = 1}^{n - 1} k b_k } + |\sigma_n - \sigma| \leq M - \frac{M}{n} + \epsilon < M + \epsilon
$$
{% end %}