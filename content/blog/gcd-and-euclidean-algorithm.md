+++
title = "最大公因数与欧几里得算法"
date = 2024-04-19
draft = false

[taxonomies]
categories = ["数论"]
tags = ["数学", "数论", "代数学", "抽象代数", "环论"]

[extra]
lang = "zh"
toc = true
mathjax = true

+++

{% good() %}本文内容已完全施工完毕, 读者可放心阅读！{% end %}

{% mathjax_escape() %}

## 引言

在许多关于数论的问题中, 会涉及到找出 **最大公因数** 的命题不在少数, 例如使用中国剩余定理前也需要事先验证两个数之间是否互素, 而欧几里得算法则是一种寻找最大公因数极佳的方式, 因此该章节会讨论关于它的一些内容.

## 1. 整数上的贝祖定理与欧几里得算法

以下的命题给出了关于最大公因数与 (线性) 丢番图方程 (未知量只能为整数的整系数多项式等式) 的联系：

> $$
> \Forall{a, b, m \in \Z} \b{ \gcd(a, b) = m \iff \b{\Exists{x, y \in \Z} ax + by = m} } \tag{1}
> $$

而往更宽泛的说, 若 $m$ 是 $\gcd(a, b)$ 的整数倍时, 当且仅当线性和 $ax + by = m$ 有整数解 $(x, y)$, 那么我们就称该公式为 **贝祖等式 (Bézout's identity)**. 特别地我们可以将 $m$ 限制为 $1$, 则可得到以下特例：

> $$
> \Forall{a, b \in \Z} \b{ \text{$a, b$ 互素} \iff \b{\Exists{x, y \in \Z} ax + by = 1} } \tag{2}
> $$

而为了证明 $(1)$ 中这样的 $x, y$ 的确存在, 可利用以下的 **欧几里得算法 (Euclidean algorithm)** 进行计算：

> 对任意 $a, b \in \Z$, 其中 $b \neq 0$, 如欲找出它们的最大公因数 $\gcd(a, b)$, 首先做一些预处理：
>
> - 若 $b > a$, 由于 $\gcd(a, b) = \gcd(b, a)$, 交换输入 $b, a$;
> - 若 $a < 0$ 或 $b < 0$, 由于 $\gcd(a, b) = \gcd(|a|, b) = \gcd(a, |b|) = \gcd(|a|, |b|)$, 直接对 $a$ 或 $b$​​ 取绝对值;
> - 设初始值为 $r_{-1} = a$ 以及 $r_0 = b$​;
>
> 然后可通过以下有限多步 $(1 \leq k \leq n)$ 递归地求出：
> $$
> \begin{array}{c|c}
> & \text{算式} \\
> \hline
> \text{第 $1$ 步} & r_{-1} = r_0 \cdot q_1 + r_1 \\
> \text{第 $2$ 步} & r_0 = r_1 \cdot q_2 + r_2 \\
> \text{第 $3$ 步} & r_1 = r_2 \cdot q_3 + r_3 \\
> \vdots & \vdots \\
> \text{第 $k$ 步} & r_{k - 2} = r_{k - 1} \cdot q_k + r_k \\
> \vdots & \vdots \\
> \text{第 $n$ 步} & r_{n - 2} = r_{n - 1} \cdot q_n + r_n
> \end{array}
> $$
> 即是说逐步应用带余除法, 其中：
>
> - $q_k, r_k$ 分别为第 $k$ 步的商与余数;
> - 对任意的第 $k$ 步都满足 $0 \leq r_k < r_{k - 1}$;
> - $r_n = 0$ 时算法终止 (存在最小正整数 $n$ 使得 $r_n = 0$), 此时 $\gcd(a, b) = r_{n - 1}$.

例如我们可以通过以下计算得出 $a = 1919810$ 与 $b = 114514$ 的最大公因数为 $r_{11 - 1} = r_{10} = 2$：

<div id="Euclid-Algorithm"></div>

观察到其中的输入分别为前两步的余数 $r_{k - 2}$ 以及 $r_{k - 1}$, 而最大公因数则为最后一步的被除数 $r_{n - 1}$. 可见该算法的核心在于将第 $k - 2$ 步余数辗转到第 $k - 1$ 步的除数以及第 $k$​​ 步的被除数位置上, 因此又称之为 **辗转相除法**. 而带余除法保证了商和余数的取法是唯一的, 虽然这里并没有用到唯一性的条件.

现在让我们回到 $(1)$ 的证明, 由于初始值为 $r_{-1} = a$ 而 $r_0 = b$, 那么：
$$
\gcd(a, b) = \gcd(b, r_1) = \gcd(r_1, r_2) = \gcd(r_2, r_3) = \cdots = \gcd(r_{n - 2}, r_{n - 1}) = r_{n - 1}
$$
设 $k = n - 1$, 则有 $r_{n - 3} = r_{n - 2} \cdot q_{n - 1} + r_{n - 1}$, 因此 $r_{n - 1}$ 可被表示为：
$$
r_{n - 1} = r_{n - 3} - r_{n - 2} \cdot q_{n - 1} \tag{3}
$$
同样的, 对 $r_{n - 2}, r_{n - 3}, \cdots, r_2, r_1$ 分别有：
$$
\begin{align}
r_{n - 2} & = r_{n - 4} - r_{n - 3} \cdot q_{n - 2} \\
r_{n - 3} & = r_{n - 5} - r_{n - 4} \cdot q_{n - 3} \\
& \phantom{w} \vdots \\
r_3 & = r_1 - r_2 \cdot q_3 \\
r_2 & = b - r_1 \cdot q_2 \\
r_1 & = a - r_0 \cdot q_1
\end{align}
$$
分别将它们代入回到 $(3)$​, 则可将 $r_{n - 1}$ 表示为 $r_{n - 4}$ 与 $r_{n - 5}$ 的线性和, 不断重复这个过程就得到：
$$
\gcd(a, b) = r_{n - 1} = r_{n - 3} - r_{n - 2} \cdot q_{n - 1} = r_{n - 3} - \b{r_{n - 4} - r_{n - 3} \cdot q_{n - 2}} \cdot q_{n - 1} = \cdots = ax + by
$$

## 2. 整数上的拓展欧几里得算法

由于上述的证明不涉及找出贝祖等式中 $x, y$ 具体数值的 (只是证明了它们的存在性), 而我们可以通过 **拓展欧几里得算法 (Extended Euclidean algorithm)** 求得它们, 具体的说, 在欧几里得算法的基础上, 当我们正在进行第 $k$ 步演算时, 同时额外计算并维护有关 $x, y$ 的序列：
$$
\begin{array}{c|cc|ccc|cc}
& \text{$r_k$ 的序列} &&& \text{$x$ 的序列} &&& \text{$y$ 的序列} \\
\hline
\text{算式} & r_{k - 2} = r_{k - 1} \cdot q_k + r_k &&& x_{k - 2} = x_{k - 1} \cdot q_k + x_k &&& y_{k - 2} = y_{k - 1} \cdot q_k + y_k \\
\text{初始值} & r_{-1} = a, \quad r_0 = b &&& x_{-1} = 1, \quad x_0 = 0 &&& y_{-1} = 0, \quad y_0 = 1 \\
\text{最终值} & r_{n - 1} = \gcd(a, b) &&& x_{n - 1} = x &&& y_{n - 1} = y \\
\end{array}
$$
该拓展算法的结束条件与欧几里得算法一致, 皆为 $r_k = 0$. 现在让我们观察与上面同样的例子：

<div id="Extened-Euclid-Algorithm"></div>

可见 $\gcd(a, b) = \gcd(1919810, 114514) = r_{11 - 1} = r_{10} = 2$, 而 $x = x_{11 - 1} = x_{10} = -16768$ 并且 $y = y_{11 - 1} = y_{10} = 281113$, 此时代入贝祖等式立得：
$$
ax + by = 1919810 \cdot (-16768) + 114514 \cdot 281113 = 2 = \gcd(a, b)
$$

## 3. 推广至主理想整环与欧几里得整环

我们可以在一个更宽泛的数学结构, 例如环中定义整除性, 以及最大公因数等的概念：

> 设 $R$ 为环以及 $a, b \in R$：
>
> - 称 $a$ **整除 (divides)** $b$, 或称 $b$ 是 $a$ 的 **倍数 (multiple)**, 当 $\Exists{c \in R} b = ac$, 并记为 $a \mid b$;
> - 若 $a \mid b$ 且 $b \mid a$, 则称 $a$ 与 $b$ 是 **结合 (associates)**, 记为 $a \sim b$;
> - 称 $d \in R$ 为 $a, b$ 的 **公因数 (common divisor)**, 当 $(d \mid a) \and (d \mid b)$;
> - 称 $d \in R$ 为 $a, b$ 的 **最大公因数 (greatest common divisor, GCD)**, 当 $\Forall{\text{$a, b$ 的公因数 $c \in R$}} c \mid d$, 并记为 $\gcd(a, b) = d$.

现在可以将环 $\Z$ 中的贝祖等式推广至主理想整环 $R$. 由于 $R$ 中所有的理想都可以被单个生成元有限生成, 因此 $(a, b)$ 也是主理想, 它是由 $a, b$ 的最大公因数所生成, 其中的元素形如 $ax + by$ 这样的线性和, 具体的说：

> 设 $R$ 为主理想整环, 考虑 $a, b, d, \in R$, 以下命题等价：
>
> 1.	$\gcd(a, b) = d$;
> 1.	理想之间的等价 $(d) = (a, b)$;
> 1.	满足 $\Exists{x, y \in R} d = ax + by$ 以及 $\Forall{s, t \in R} d \mid (as + bt)$;
> 1.	满足 $\Exists{x, y \in R} d = ax + by$ 以及 $d$ 是 $a, b$ 的公因数.

再将上述 $\Z$ 中的带余除法抽象出来并定义：

> 称整环 $R$ 为一个 **欧几里得整环 (Euclidean domain)**, 当其存在一个映射 $\delta : R \backslash \set{0} \to \N$ 使得以下带余除法于 $R$ 中成立：
> $$
> \Forall{f, g \in R \\ g \neq 0} \Exists{q, r \in R }  (f = gq + r) \and \bigg[(r = 0) \or (\delta(r) < \delta(g)) \bigg]
> $$
> 其中的 $\delta$ 又被称为 $R$ 的 **欧几里得函数 (Euclidean function)**.

通俗的说, 所谓的欧几里得整环就是能做带余除法的整环, 可以证明它也是个主理想整环. 例如整数环 $\Z$ 或域 $\mathbb{F}$ 上的多项式环 $\mathbb{F}[x]$ 皆是欧几里得整环, 只要取定：
$$
\begin{alignat}{3}
\Z \backslash \Set{0} & \overto{\delta} \N \qquad \qquad &
\mathbb{F}[x] \backslash \Set{0} & \overto{\delta} \N \\
x & \mapsto |x| &
f & \mapsto \deg f
\end{alignat}
$$
即是说 $\Z$ 或 $\mathbb{F}[x]$ 中我们将 "较大的元素" 通过带余除法分解为 "较小的元素", 而度量 "大小" 是由 $\delta$ 所决定的. 从而可以将 $\Z$ 上的欧几里得算法推广为：

> 设 $R$ 为欧几里得整环及映射 $\delta : R \backslash \set{0} \to \N$, 若 $a, b \in R$ 且 $b \neq 0$​, 可通过以下有限多步 $(1 \leq k \leq n)$ 递归地求出 $a, b$ 的最大公因数：
> $$
> \begin{array}{c|c}
> & \text{算式} \\
> \hline
> \text{第 $1$ 步} & a = b \cdot q_1 + r_1 \\
> \text{第 $2$ 步} & b = r_1 \cdot q_2 + r_2 \\
> \text{第 $3$ 步} & r_1 = r_2 \cdot q_3 + r_3 \\
> \vdots & \vdots \\
> \text{第 $k$ 步} & r_{k - 2} = r_{k - 1} \cdot q_k + r_k \\
> \vdots & \vdots \\
> \text{第 $n$ 步} & r_{n - 2} = r_{n - 1} \cdot q_n + r_n
> \end{array}
> $$
> 即是说逐步应用带余除法, 其中：
>
> - $q_k, r_k$ 分别为第 $k$ 步的商与余数;
> - 对任意的第 $k$ 步都满足 $(r = 0) \or (\delta(r_k) < \delta(r_{k - 1}))$;
> - $r_n = 0$ 时算法终止 (存在最小正整数 $n$ 使得 $r_n = 0$), 此时 $\gcd(a, b) = r_{n - 1}$​.

## 4. 多项式环上的欧几里得算法

从先前的例子我们得知有理数域 $\Q$ 上的 $\Q[x]$ 亦是欧几里得环, 因此不仅仅可以定义任意两个多项式 $f, g \in \Q[x]$ 的最大公因数 $\gcd(f, g)$​, 还可以通过欧几里得算法得到它, 例如设：
$$
\begin{align}
f(x) & = x^3 + x^2 - x - 1 \\
g(x) & = x^2 + 3x + 2
\end{align}
$$
通过以下计算机可得到 $\gcd(f, g) = 3x + 3$：

<div id="Polynomial-Euclid-Algorithm"></div>

然而只要当 $(3x + 3) \mid (x^2 + 3x + 2)$, 根据以下事实：

> 对任意 $f, g \in \mathbb{F}[x]$ 若 $g \mid f$, 那么 $\Forall{c \neq 0} cg \mid f$.

也就是说只要给 $3x + 3$ 乘以任意一个标量 $c$ 它都可以整除 $x^2 + 3x + 2$, 这告诉我们事实上 $\gcd(f, g)$ 有无数多个, 为了避免这种情况, 我们可以取一种最标准的形式, 例如将 $3x + 3$ 首一化, 即是将 $x$ 的最高次项的系数化为 $1$, 也就是将 $3x + 3$ 逐项除以 $3$, 便得到了 $\gcd(f, g) = x + 1$.

<script>
    embedNotebook('https://www.wolframcloud.com/obj/b4bf9911-bb15-43f3-bc35-1c2ec1bbf798', 'Euclid-Algorithm', null, Infinity, false);
    embedNotebook('https://www.wolframcloud.com/obj/318bd064-0a54-40af-9fcc-8ac6482003e0', 'Extened-Euclid-Algorithm', null, Infinity, false);
    embedNotebook('https://www.wolframcloud.com/obj/098cd993-cd13-446c-a49e-885324ec499a', 'Polynomial-Euclid-Algorithm', null, Infinity, false);
</script>

{% end %}

