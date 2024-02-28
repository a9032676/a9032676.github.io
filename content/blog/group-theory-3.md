+++
title = "群论 3 - 陪集, 正规性与群同构定理"
date = 2023-01-19
draft = false

[taxonomies]
categories = ["抽象代数"]
tags = ["数学", "代数学", "抽象代数", "群论"]

[extra]
lang = "zh"
toc = true
mathjax = true

+++

{% good() %}本文内容已完全施工完毕, 读者可放心阅读！{% end %}

{% mathjax_escape() %}

## 3.1. 陪集与计数原理

### 注释

由于在第二章中我们曾提及到关于整数加群 $\Z$ 中的同余类 $[a]_n$, 其被定义为 $a \equiv b \pmod{n} \iff n \mid a - b$, 即当且仅当 $a-b$ 是子群 $\lang n \rang = \set{ kn : k \in \Z }$ 中的元素, 那么将该条件进一步推广, 就产生了以下定义 (并且在乘法记号下).

### 定义 3.1.1 ($a$ 左/右同余 $b$ 模 $H$)

对于任意群 $G$, 子群 $H < G$ 以及 $a, b \in G$, 若：

- $a^{-1}b \in H$, 则称 **$a$ 左同余于 $b$ 模 $H$ ($a$ is left congruent to $b$ modulo $H$)**, 记为 $a \equiv_l b \pmod{H}$;
- $ab^{-1} \in H$, 则称 **$a$ 右同余于 $b$ 模 $H$ ($a$ is right congruent to $b$ modulo $H$)**, 记为 $a \equiv_r b \pmod{H}$;

### 注释

- 特别地, 若 $G$ 是交换群, 那么左/右同余是重合的, 因为 $ab^{-1} \in H \overset{\text{群元的逆亦封闭}}{\iff} (ab^{-1})^{-1}  \in H$, 那么进一步就得到了 $(ab^{-1})^{-1} = a^{-1}b \in H$.
- 若 $G$ 为非交换群, 那么亦有可能使得左/右同余是重合的, 但并非对于所有情况都生效.

### 定理 3.1.2 (同余模的基本性质)

对于任意群 $G$, 子群 $H < G$, 则：

1. 左/右同余模 $H$ 构成在 $G$ 中的等价关系;
2. 对于任意 $a \in G$, 其在 $G$ 中由左/右同余模 $H$ 的等价关系下所构成的等价类 $[a]$ 等价于 $aH = \set{ ah : h \in H }$ 或 $Ha = \set{ ha : h \in H }$;
3. $|Ha| = |H| = |aH|$ 成立当对于任意 $a \in G$.

##### 证明

1. 只证明右同余模 $H$ 的情况, 因此假设 $a, b \in G$, 则：

   - 自反性：$a \equiv_r a \pmod{H} \iff aa^{-1} = e \in H$.
   - 对称性：若有 $a \equiv_r b \pmod{H} \iff ab^{-1} \in H$, 则  $(ab^{-1})^{-1} \in H  \implies ba^{-1} \in H \implies b \equiv_r a$.
   - 传递性：若有 $a \equiv_r b \pmod{H} \iff ab^{-1} \in H$ 以及 $b \equiv_r c \pmod{H} \iff bc^{-1} \in H$, 显然 $(ab^{-1})(bc^{-1}) = ac^{-1} \in H \implies a \equiv_r c \pmod{H}$.

2. 同样只证右同余模 $H$ 的情况, 若有 $a \in G$, 则由 $a$ 右同余于 $x$ 模 $H$ 的等价关系所构成的等价类为：
   $$
   [a] = \set{ x \in G : x \equiv_r a \pmod{H} } = \set{ x \in G : xa^{-1} = h \in H } = \set{ x \in G : x = ha \in H } = \set{ ha : h \in H } = Ha.
   $$

3. 只需建立 $Ha$ 与 $H$ 的双射 $\begin{align} Ha & \to H \\ ha & \mapsto h \end{align}$, 对 $aH$ 与 $H$ 亦然.

### 注释

其中 $(2)$ 直接引出了以下关于左/右陪集的的定义.

### 定义 3.1.3 (陪集, 陪集的指数)

对于任意群 $G$ 以及任意代表元 $a \in G$, 子群 $H < G$, 则：

- 称 $aH \coloneqq \set{ ah : h \in H }$ 为 $H$ 的 **左陪集 (left coset)**, 全体左陪集构成的集合则记作 $G/H$;

- 称 $Ha \coloneqq \set{ ha : h \in H }$ 为 $H$ 的 **右陪集 (right coset)**, 全体右陪集构成的集合则记作 $G \backslash H$;

- 设 $K$ 为 $G$ 的另一子群, 称 $HaK \coloneqq \set{ hak : h \in H, k \in K }$ 则称为 $H$ 与 $K$ 的 **双陪集 (double coset)**, 全体双陪集构成的集合则记作 $H\backslash G/K$;

- 称 $G/H$ 或 $G \backslash H$ 的势 $[G : H] := | G/H |$ 为 **$H$ 在 $G$ 中的指数 (index of $H$ in $G$)**.

### 注释

- 若 $G$ 的群运算为加法, 那么对于任意代表元 $a \in G$, 左陪集被定义为 $a+H = \set{ a+h : h \in H }$, 对于右/双陪集亦然.
- 其中左右陪集亦是双陪集的特例, 分别取 $H$ 或 $K$ 为 $\set{1}$ 即是, 事实上亦可证明左右陪集是相等的, 因此以下涉及陪集的内容都基于左陪集上进行陈述.
- 全体左右陪集的势是相等的, 即 $|G/H| = |G \backslash H|$, 因此 $H$ 在 $G$ 中的指数只需定义为 $|G / H|$, 具体证明呈现于下方.
- 比较有意思的是, 即使 $[G : H]$ 是有限的, 对于无限群 $G, H$ 这仍是可行的, 例如考虑 $[\Z : \lang n \rang] = n$.
- 若 $H = \lang e \rang$, 那么对于任意 $a \in G$ 就有 $aH = \set{a}$ 以及 $[G : H] = |G|$.

### 定理 3.1.4 (陪集的基本性质)

对于任意群 $G$, 子群 $H < G$, 则：

1. 对于任意 $G$ 中任意 $H$ 的陪集 $aH, bH$ 若相等当且仅当交非空, 即 $aH = bH \iff aH \cap bH \neq \empty$;
2. 对 $G$ 进行划分, 则可将其表示为所有 $G$ 中 $H$ 的陪集的不交并, 即 $G = \bigsqcup_{a \in G} aH = a_1 H \sqcup a_2 H \sqcup \dots \sqcup a_n H$.
3. $\forall a, b \in G$, 则有 $aH = bH \iff a^{-1} b \in H$ 以及 $Ha = Hb \iff ab^{-1} \in H$.
4. 所有由 $H$ 的左/右陪集构成的集合的势相等, 即 $|G/H| = |G \backslash H|$.

##### 证明

1. 这是在第一章有关相同等价类的交非空的直接推论.

2. 这是在第一章有关等价类分解的直接推论.

3. 只证左陪集的情况, 右亦类似：

   $(\Rightarrow)$ 若有 $aH = bH$, 那么则存在 $h_1, h_2 \in H$ 使得 $ah_1 = bh_2$, 移项后得 $h_1 h_2^{-1} = a^{-1}b$, 而 $h_1 h_2^{-1} \in H$ 就推得 $a^{-1}b \in H$.

   $(\Leftarrow)$ 若有 $a^{-1} b \in H$, 意味着可表示为 $a^{-1} b = h \in H$, 移项后得 $b = ah \in H$, 令 $h = h_1 h_2^{-1}$ 就得到 $bh_2 = ah_1$ 使 $aH = bH$ 成立.

4. 由于 $aH = bH \iff a^{-1}b = a^{-1}(b^{-1})^{-1} \in H \iff Ha^{-1} = Hb^{-1}$, 那么只需建立一一对应的映射 $\begin{align} G/H & \to G \backslash H \\ aH & \mapsto Ha^{-1} \end{align}$ 即可证得 $|G/H| = |G \backslash H|$.

### 定理 3.1.5 (拓展拉格朗日定理)

设有群 $G$, 子群 $K <H < G$, 则有 $[G : K] = [G : H][H : K]$, 该命题被称为 **拓展拉格朗日定理 (Extension of Lagrange's theorem)**.

##### 证明

首先假设 $[G : H] = m$ 以及 $[H : K] = n$, 对于任意代表元 $a_i \in G, b_j \in H$, 则 $G/H$ 与 $H/K$ 分别呈现为：
$$
G/H = \set{ a_1 H, a_2 H, \dots, a_m H } \qquad H/K = \set{ b_1 K, b_2 K, \dots, b_n K }
$$
并且根据 [定理 3.1.4](#定理_3.1.4_(陪集的基本性质)) 的 $(2)$, $G$ 与 $H$ 可分别划分为它们陪集的不交并, 其中 $0 < i \leq m$ 且 $0 < j \leq n$：
$$
G = \bigsqcup_{i \in I} a_i H  \qquad H = \bigsqcup_{j \in J} b_j K
$$
使得在代入 $H$ 后即有：
$$
G = \bigsqcup_{i \in I} a_i \bigsqcup_{j \in J} b_j K = \bigsqcup_{(i,j) \in I \times J} a_i b_j K
$$
显然现在 $|G|$ 可改写为由所有 $mn$ 个陪集 $K$ 累加起来的势, 即：
$$
|G| = \left| \bigsqcup_{(i,j) \in I \times J} a_i b_j K \right| = \sum_{(i, j) \in I \times J} |a_i b_j K| = \sum_{(i, j) \in I \times J} |K| = mn \cdot |K| = [G : K]|K|
$$
因此 $|G : K| = mn = [G : H][H : K]$ 成立.

### 推论 3.1.6 (计数公式, 拉格朗日定理)

设有群 $G$, 任意子群 $H < G$, 则有：

1. **计数公式 (counting formula)**：$|G| = [G : H]|H|$;

1. **拉格朗日定理 (Lagrange's theorem)**：

   当 $G$ 有限时, 以下命题成立：

   1. $|H|$ 必定整除 $|G|$, 即 $|H|\ \big|\ |G|$;
   1. $|a|\ \big|\ |G|$, 对于任意 $a \in G$.


##### 证明

1. 这是 [定理 3.1.5](#定理_3.1.5_(拓展拉格朗日定理)) 的直接推论, 只需取 $K = \lang e \rang$ 则对任意的 $b \in H$ 有 $bK = \set{b}$ 以及 $[H : K] = |H|$ 使得 $|G| = [G : H]|H|$ 成立.
2. 分为两部分证明：
   1. 这是 $(1)$ 的直接推论, 因为 $|H|\ \big|\ |G| \iff \exists k \in \Z, k|H| = |G|$, 只需取 $k = [G : H]$ 即可得证.
   2. 当 $H = \lang a \rang$ 为有限循环群, 由于生成元为 $a$, 则 $|a|$ 为 $H$ 的阶, 因此 $|a|\ \big|\ |G|$ 是 $(2.1)$ 的特例.

### 定理 3.1.7 (子群乘积的阶)

对于任意群 $G$, 有限子群 $H, K < G$, 则有 $|HK| = \frac{|H||K|}{|H \cap K|}$.

##### 证明

由于 $H \cap K$ 构成群, 并且有 $H \cap K$ 为 $H$ 或 $K$ 的子群, 那么有 $|H| = [H : H \cap K]|H \cap K|$, 根据 [推论 3.1.6](#推论_3.1.6_(计数公式,_拉格朗日定理)) 的 $(2.1)$ 便有：
$$
[H : H \cap K] = \frac{|H|}{|H \cap K|} \overset{\text{凑出 $K$}}{\implies} [H : H \cap K]|K| = \frac{|H| |K|}{|H \cap K|}
$$
则意味着我们只需证明 $|HK| = [H : H \cap K]|K|$ 即可, 那么由于根据 [定理 3.1.4](#定理_3.1.4_(陪集的基本性质)), 对任意代表元 $h \in H$, 则可对 $H$ 进行划分并得到 $|HK|$ 为：
$$
HK = \left[\bigsqcup_{0 < i \leq n} h_i(H \cap K) \right] K \implies |HK| = \left[\sum_{0 < i \leq n} |h_i (H \cap K)| \right] |K| = \left(\sum_{0 < i \leq n} |H| \right) |K| = n \cdot |K|
$$
使得 $|HK| = n \cdot |K| = [H : H \cap K]|K|$ 成立.

### 命题 3.1.8 (任意子群中的指数)

对于任意群 $G$, 子群 $H, K < G$, 则：

1. $[H : H \cap K] \leq [G : K]$;
2. $[H : H \cap K] = [G : K] \iff G = HK$, 其中 $[G : K]$ 是有限的.

##### 证明 1

1. 只需建立映射 $\begin{align} H/H \cap K & \overset{\varphi}{\to} G/K \\  h(H \cap K) & \mapsto hK \end{align}$, 并证明 $\varphi$ 是良定义且单射的, 因此对于任意 $h_1, h_2 \in H$ 以及任意 $h_1(H \cap K), h_2(H \cap K) \in H/H \cap K$：
   $$
   h_1(H \cap K) = h_2(H \cap K) \iff h_1^{-1} h_2 \in H \cap K \sub K \iff h_1 K = h_2 K
   $$
   使得 $\varphi$ 是良定义的同时 $[H : H \cap K] \leq [G : K]$ 亦成立.

2. $(\Rightarrow)$ 由于 $[H : H \cap K] = [G : K]$ 蕴含有双射 $\begin{align} H/H\cap K & \to G/K \\ h(H \cap K) & \mapsto gK \end{align}$, 而由于：
   $$
   G = \bigsqcup_{0 < i \leq n} g_i K = \bigsqcup_{0 < i \leq n} h_i(H \cap K) \overset{H \cap K < K}{\sub} \bigsqcup_{0 < i \leq n} h_i K = HK
   $$
   因此 $G \sub HK$, 并且因为 $H, K < G$, 由 $G$ 的二元运算的封闭性得 $HK \sub G$, 最终透过反对称性便使得 $G = HK$ 成立.

   $(\Leftarrow)$ 由于 $(1)$ 中已证明 $\varphi$ 是单射的, 则只需证明其亦是满射：
   $$
   gK \in G/K, \exists h(H \cap K) \in H/H \cap K, gK = \varphi(h(H \cap K))
   $$
   且由于 $gK = \varphi(h(H \cap K)) \overset{G = HK}{\iff} hkK = \varphi(h(H \cap K)) \overset{\text{$\varphi$ 的定义}}{\iff} hkK = hK$, 那么透过移项就有 $h^{-1}(hk) = k \in K$, 因此命题成立.

##### 证明 2

这里是关于 $(1)$ 的另一个证明, 由于 $H \cap K$ 是 $H$ 或 $K$ 的子群, 则可得到 $|H \cap K| \leq |K|$, 且由 [推论 3.1.6](#推论_3.1.6_(计数公式,_拉格朗日定理)) 的 $(1)$ 得 $|H| = [H : H \cap K]|H \cap K|$ 以及 $|G| = [G : K]|K|$, 并且子群 $H$ 的阶必然小于 $G$, 便使得以下不等式成立：
$$
|H| \leq |G| \iff [H : H \cap K]|H \cap K| \leq [G : K]|K| \overset{|H \cap K| \leq |K|}{\implies} [H : H \cap K] \leq |K|.
$$

### 命题 3.1.9 (子群之交的指数)

对于任意群 $G$, 子群 $H, K < G$, 且 $[G : H]$ 与 $[G : K]$ 均有限, 则：

1. $[G : H \cap K] \leq [G : H][G : K]$, 其中 $[G : H \cap K]$ 是有限的;
2. $[G : H \cap K] = [G : H][G : K] \iff G = HK$.

##### 证明

1. 由于 $H \cap K < H$, 则根据 [定理 3.1.5](#定理_3.1.5_(拓展拉格朗日定理)) 有 $[G : H \cap K] = [G : H][H : H \cap K]$, 再根据 [命题 3.1.8](#命题_3.1.8_(任意子群中的指数)) 的 $(1)$ 便使得 $[G : H][H : H \cap K] \leq [G : H][ G : K]$ 成立, 而两个有限数的乘积 $[G : H][G : K]$ 亦为有限数, 因此 $[G : H \cap K]$ 必定有限.

2. 根据 [命题 3.1.8](#命题_3.1.8_(任意子群中的指数)) 的 $(2)$, 可将该命题转化为 $[G : H \cap K] = [G : H][G : K] \iff [H : H \cap K] = [G : K]$, 并且结合 [定理 3.1.5](#定理_3.1.5_(拓展拉格朗日定理)) 则有以下等式成立：
   $$
   [G : H \cap K] = [G : H][H : H \cap K] = [G : H][G : K]
   $$

## 3.2. 正规性, 商群与群同构定理

### 定义 3.2.1 (正规子群)

对于任意群 $G$, 子群 $N < G$, 若左右同余模 $N$ 是等价的, 即对于任意 $a, b \in G$, 满足了：
$$
\begin{align}
a \equiv_l b \pmod{N} & \iff a \equiv_r b \pmod{N} & [\text{展开前}] \\
a^{-1} b \in N & \iff ab^{-1} \in N & [\text{展开后}]
\end{align}
$$
则 $N$ 被称为是 $G$ 的 **正规子群 (normal subgroup)**, 或称子群 $N$ 在 $G$ 中是 **正规的 (normal)**, 并记为 $N \lhd G$.

### 定理 3.2.2 (正规子群的等价定义)

对于任意群 $G$, 子群 $N < G$, 则以下命题等价：

1. $N \lhd G$ 为正规子群;
2. 任意 $G$ 中 $N$ 的左陪集都是右陪集, 即 $G/N = G \backslash N$;
3. $aN = Na$, 对于任意 $a \in G$;
4. $aNa^{-1} \sub N$ 或 $a^{-1}Na \sub N$, 对于任意 $a \in G$;
5. $aNa^{-1} = N$ 或 $a^{-1}Na = N$, 对于任意 $a \in G$.

其中定义 $aNa^{-1} \coloneqq \set{ ana^{-1} : n \in N }$ 以及 $a^{-1} Na \coloneqq \set{ a^{-1} na : n \in N }$.

##### 证明

- $(1) \Rightarrow (2)$：由于根据 $N \lhd G$ 的定义有 $a^{-1}b \in N \iff ab^{-1} \in N$, 且设 $n = a^{-1}b$, 那么对于任意 $an \in aN \in G/N$, 显然透过运算则有 $an = a(a^{-1}b) = b \in Nb \in G \backslash N$, 因此 $aN \sub Nb \implies G/N \sub G \backslash N$. 反之若设 $n = ab^{-1}$, 则对任意 $nb \in Nb \in G \backslash N$, 有 $nb = (ab^{-1})b = a \in aN \in G/N$, 因此 $aN \supset Nb \implies G/N \supset G \backslash N$, 使得 $G/N = G \backslash N$ 成立;

- $(2) \Rightarrow (3)$：由于 $G/N = G \backslash N$, 则有意味着对于任意的元素 $aN \in G/N$ 都存在 $b \in G$ 使得 $aN =  Nb$, 那么只需证明 $Nb = Na$, 而根据 [定理 3.1.4](#定理_3.1.4_(陪集的基本性质)) 的 $(1)$, $Nb, Na$ 若是相同的话当且仅当它们的交非空, 即 $Nb \cap Na \neq \empty$, 而由于 $b$ 的存在性, 则只能将其取为 $a$ 使得 $a \in Nb \cap Na$, 因此就证得 $aN = Na$.

- $(3) \Rightarrow (4)$：由于 $aN = Na$, 即对于任意 $n_1, n_2 \in N$ 有 $an_1 = n_2a$ 直接对其移项得 $a n_1 a^{-1} = n_2$, 因此有 $aNa^{-1} = N$, 并且蕴含了 $a N a^{-1} \sub N$, 另一方面, 由于可移项得 $n_1 = a^{-1} n_2 a$, 因此 $a^{-1}Na \sub N$ 亦成立.

- $(4) \Rightarrow (5)$：$aNa^{-1}, a^{-1}Na \sub N$ 于 $(4)$ 中已证, 那么现在对于任意 $n \in N$, 由于 $n = a(a^{-1}na)a^{-1} \in aNa^{-1}$, 因此 $aNa^{-1} \supset N$ 成立, 使得 $aNa^{-1} = N$, 对于 $a^{-1}Na = N$ 亦然.

- $(5) \Rightarrow (1)$：由于条件 $aNa^{-1} = N$ 就有 $ana^{-1} \in N$ 以及 $n \in aNa^{-1}$, 其中对任意 $n \in N$. 那么现在设有 $a^{-1}b \in N$, 利用条件则有：
  $$
  a(a^{-1}b)a^{-1} = ba^{-1} \in N \overset{\text{取逆仍封闭于 $N$ 中}}{\iff} (ba^{-1})^{-1} = ab^{-1} \in N
  $$
  因此 $a^{-1}b = ab^{-1} \in N$, 推得 $N \lhd G$.

### 例子 3.2.3

- 任意交换群的子群都显然是正规的;
- 由 $\pmatrix{1 & 2 & 3 \\ 2 & 3 & 1} \in S_3$ 所生成的子群 $H < S_3$ 是正规的;
- 更一般地, 设有群 $G$, 若任意子群 $N$ 在 $G$ 中的指数为 $2$ 时, 即 $[G : N] = 2$, 则 $N$ 是正规的;
- 正规子群族中任意成员的交仍是正规子群.

### 注释

- 需要注意的是, 若设有群 $G$ 以及任二正规子群 $N \lhd M$ 以及 $M \lhd G$, 这并不蕴含 $N \lhd G$, 亦即无法满足 "传递性";
- 若 $N \lhd G$, 那么若对于任意其他包含了 $N$ 的子群 $H < G$, 则 $N$ 仍是 $H$ 的正规子群, 即 $N \lhd H$.

### 定理 3.2.4 (正规子群的基本性质)

对于任意群 $G$, 任意的子群 $K < G$ 以及正规子群 $N \lhd G$, 则：

1. $N \cap K \lhd K$;
2. $N \lhd N \or K$;
3. $NK = N \or K = KN$;
4. 若 $K \lhd G$ 且 $K \cap N = \lang e \rang$, 则 $nk = kn$, 其中对于任意 $k \in K, n \in N$.

##### 证明

1. 由于 $N \cap K \lhd K \iff \forall a \in K, a(N \cap K)a^{-1} \sub N \cap K$, 现在设任意 $ana^{-1} \in a(N \cap K)a^{-1}$, 其中 $n \in N \cap K$, 则分别需证明：

   - $a(N \cap K)a^{-1} \sub N$：透过条件 $N \lhd G$ 得知 $ana^{-1} \in N$, 其中 $a \in K < G$;
   - $a(N \cap K)a^{-1} \sub K$：由于 $a \in K$ 而 $n \in N \cap K < K$, 透过子群 $K$ 的封闭性得知乘积 $ana^{-1} \in K$.

   因此 $a(N \cap K)a^{-1} \sub N \cap K$ 成立.

2. 由于 $N \or K = \lang N \cup K \rang$, 显然 $N < N \or K < G$, 而 $N \lhd G$, 因此 $N \lhd N \or K$.

3. 由于 $N \or K = KN$ 是类似的, 因此只证 $NK = N \or K$：

   $(\Rightarrow)$ 对于任意 $nk \in NK$, 由于 $N \or K = \set{ a_1^{j_1} a_2^{j_2} \dots a_m^{j_m} : a_i \in N \cup K, j_i \in \Z }$, 显然有 $nk \in N \or K$, 因此 $NK \sub N \or K$.

   $(\Leftarrow)$ 由于 $N \or K$ 为包含了 $N \cup K$ 的最小子群, 那么由于有 $N \cup K \sub NK < G$, 因此 $N \or K \sub NK$.

4. 由于 $K \lhd G \iff \forall a \in G, aka^{-1} \in K$, 而 $N \lhd G \iff \forall a \in G, ana^{-1} \in N$, 其中对任意 $k \in K, n \in N$, 由于 $N, K < G$, 利用该两条件则分别有 $nkn^{-1} \in K$ 以及 $kn^{-1}k^{-1} \in N$, 合并后得到 $(nkn^{-1})k^{-1} \in K \implies n(kn^{-1}k^{-1}) \in N$, 因此 $nkn^{-1}k^{-1} \in N \cap K = \lang e \rang$, 因此 $nkn^{-1}k^{-1} = e \implies nk = kn$, 便使得命题成立.

### 定理 3.2.5 ($G/N$ 构成商群)

对于任意群 $G$, 正规子群 $N \lhd G$ 以及全体 $G$ 中 $N$ 的陪集所构成的集合 $G/N$, 且定义二元运算 $\begin{align} G/N \times G/N & \overset{\cdot}{\to} G/N \\ aN \cdot bN & \mapsto abN \end{align}$, 则 $G/N$ 连同该二元运算构成群, 称之为是由 $N$ 所诱导出 $G$ 的 $[G : N]$ 阶 **商群 / 因子群 (quotient group / factor group)**.

##### 证明

- 良定性：对于任意 $a,a',b,b' \in G$, 有条件 $aN = a'N$ 以及 $bN = b'N$, 则需证明 $abN = a'b'N$, 而透过 [定理 3.1.4](#定理_3.1.4_(陪集的基本性质)) 得知 $abN = a'b'N \iff (ab)^{-1}a'b' \in N$, 因此只需证明 $(ab)^{-1}a'b' \in N$. 现在同样透过 [定理 3.1.4](#定理_3.1.4_(陪集的基本性质)) 得到 $aN = a'N \iff a^{-1}a' \in N$ 以及 $bN = b'N \iff b^{-1}b' \in N$, 那么则有：
  $$
  \begin{align}
  a^{-1}a' & \in N & [\text{直接利用条件得}] \\
  b^{-1}a^{-1}a' & \in b^{-1}N \\
  (ab)^{-1}a' & \in b^{-1}N  \\
  (ab)^{-1}a' & \in Nb^{-1} & [\text{由于 $N \lhd G$, 因此 $b^{-1}N = Nb^{-1}$}] \\
  (ab)^{-1}a' & = nb^{-1} & [\text{由于在 $Nb^{-1}$ 中, 因此 $\exists n \in N$ 使等式成立}] \\
  (ab)^{-1}a'b' & = n(b^{-1}b') & [\text{等式两侧右乘 $b'$}] \\
  (ab)^{-1}a'b' & \in N & [\text{由于 $b^{-1}b' \in N$, 则由封闭性得 $n(b^{-1}b') \in N$}]
  \end{align}
  $$
  因此就证得 $abN = a'b'N$, 从而群运算是良定义的.

- 群公理：对于任意 $aN, bN, cN \in G/N$, 定义幺元为 $eN$ (或 $N$) 而任意 $xN \in G/N$ 的逆元为 $x^{-1}N$：

  - 封闭性：由于群运算是良定的, 因此封闭性自动成立.
  - 结合律：$(aN \cdot bN) \cdot cN = abN \cdot cN = a(bc)N = aN \cdot bcN = aN \cdot (bN \cdot cN)$.
  - 幺元律：$eN \cdot aN = eaN = aN = aeN = aN \cdot eN$.
  - 逆元律：$a^{-1}N \cdot aN = a^{-1}aN = N = aa^{-1}N = aN \cdot a^{-1}N$.

### 注释

- 若商群 $G/N$ 为加法群, 则群运算被定义为 $\begin{align} G/N \times G/N & \overset{+}{\to} G/N \\ (a + N) + (b + N) & \mapsto (a + b) + N \end{align}$.
- 若有群 $G$ 以及子群 $H < G$, 且 $H$ 并非正规的, 这仍可以构造得到商结构 $G/H$, 称之为 **齐性空间 (homogeneous space)**.

### 注释 (从 $\Z/n\Z$ 构造出 $\Z_n$ 及平移不变性)

由于有了商结构, 现在我们可以从加法下的商群 $\Z/\lang n \rang$ (由于可将 $\lang n \rang$ 记为 $n\Z$, 因此该群亦可被记为 $\Z/n\Z$) 构造出 $\Z_n$, 并且阐明 [定义3.1.1](#定义_3.1.1_($a$_左/右同余_$b$_模_$H$)) 前注释的真正含义. 首先从一个简单的例子出发, 假设考虑的是全体 $\Z$ 中 $3\Z$ 的陪集所组成的集合 $\Z/3\Z$ (即 $\Z/\lang 3 \rang$), 显然这构成一个商群, 因为 $\Z$ 本身便是交换群, 而交换群的所有子群必然为正规子群, 因此 $3\Z \lhd \Z$, 并且由于 $\Z/3\Z$ 中的集合为：
$$
\Z/3\Z = \set{ 3\Z, 1 + 3\Z, 2 + 3\Z }
$$
那么现在问题是, 为什么 $\Z/3\Z$ 中只包含了该三个陪集呢？对于 $3 + 3 \Z, 4 + 3\Z, 5 + 3\Z, \dots$ 及后续的陪集都不能落于其中吗？为了解答这个问题, 现在首先让我们观察 $\Z/3\Z$ 中的这些陪集, 会发现它们的元素分别可表示为 $3k_1 \in 3\Z$, $1 + 3k_2 \in 1 + 3\Z$ 以及 $2 + 3k_3 \in 2 + 3\Z$, 其中对于任意 $k_i \in \Z$, 那么现在抽取 $3 + 3k_3 \in 3 + 3\Z$ 作研究, 会发现代入 $k_3$ 为具体的整数后元素分别为：
$$
\begin{align}
& \vdots \\
3 + 3(-2) & = -3 \in 3\Z \\
3 + 3(-1) & = 0 \in 3\Z \\
3 + 3(0) & = 3 \in 3\Z \\
3 + 3(1) & = 6 \in 3\Z \\
3 + 3(2) & = 9 \in 3\Z \\
& \vdots
\end{align}
$$
那么得出了事实上 $3 + 3\Z$ 所有的元素都会落入 $3\Z$ 中, 并且根据 [定理 3.1.4](#定理_3.1.4_(陪集的基本性质)) 的 $(1)$, 即任意两个陪集相等当且仅当它们的交非空, 因此 $3 + 3\Z = 3\Z$, 所以对于后续其他的陪集亦然, 所以 $|\Z/3\Z| = [\Z : 3\Z] = 3$. 那么我们可以透过该例看出陪集事实上保证了一种 "平移不变性", 即 $3 + 3\Z$ 可被视为将 $3\Z$ 中的所有元素于整数数轴上向右侧平移 $3$, 即：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOls0LDBdLCJ2YWx1ZSI6IjAifSx7InBvc2l0aW9uIjpbNSwwXSwidmFsdWUiOiIzIn0seyJwb3NpdGlvbiI6WzYsMF0sInZhbHVlIjoiNiJ9LHsicG9zaXRpb24iOlszLDBdLCJ2YWx1ZSI6Ii0zIn0seyJwb3NpdGlvbiI6WzIsMF0sInZhbHVlIjoiLTYifSx7InBvc2l0aW9uIjpbNSwxXSwidmFsdWUiOiIzIn0seyJwb3NpdGlvbiI6WzYsMV0sInZhbHVlIjoiNiJ9LHsicG9zaXRpb24iOls0LDFdLCJ2YWx1ZSI6IjAifSx7InBvc2l0aW9uIjpbMywxXSwidmFsdWUiOiItMyJ9LHsicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IlxcZG90cyJ9LHsicG9zaXRpb24iOls3LDBdLCJ2YWx1ZSI6IlxcZG90cyJ9LHsicG9zaXRpb24iOlsyLDFdLCJ2YWx1ZSI6Ii02In0seyJwb3NpdGlvbiI6WzcsMV0sInZhbHVlIjoiXFxkb3RzIn0seyJwb3NpdGlvbiI6WzEsMV0sInZhbHVlIjoiXFxkb3RzIn0seyJwb3NpdGlvbiI6WzAsMF0sInZhbHVlIjoiMyBcXG1hdGhiYntafSJ9LHsicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IjMgKyAzIFxcbWF0aGJie1p9In1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjV9LHsiZnJvbSI6MSwidG8iOjZ9LHsiZnJvbSI6MywidG8iOjd9LHsiZnJvbSI6NCwidG8iOjh9XX0=
\xymatrix{
3 \mathbb{Z} & \dots & -6 \ar@{->}[rd] & -3 \ar@{->}[rd] & 0 \ar@{->}[rd] & 3 \ar@{->}[rd] & 6 & \dots \\
3 + 3 \mathbb{Z} & \dots & -6 & -3 & 0 & 3 & 6 & \dots
}
$$
现在让我们回到构造 $\Z_n$ 的过程上, 我们需首先断定 $\Z/n\Z$ 与 $\Z_n$ 的集合中所有元素都是相等的, 再判断该两个群的群运算是相容的, 那么便可得到 $\Z/n\Z \cong \Z_n$, 即：

- 群元相等性：由于从 [定理 3.1.2](#定理_3.1.2_(同余模的基本性质)) 的 $(2)$ 可得知 $\Z/n\Z$ 中的任意陪集 $a + n\Z$ 都是模 $n$ 所构成的同余类 $[a]$, 这事实上就是 $\Z_n$ 中的元素, 因此 $\Z/n\Z = \Z_n$.
- 运算相容性：同样透过 [定理 3.1.2](#定理_3.1.2_(同余模的基本性质)) 可得知 $\Z/n\Z$ 中的群运算与 $\Z_n$ 是相容的, 因为 $\begin{align} \Z/n\Z \times \Z/n\Z & \overset{+}{\to} \Z/n\Z \\ (a + n\Z) + (b + n\Z) & \mapsto (a + b) + n\Z \end{align}$ 显然可诱导出 $\begin{align} \Z_n \times \Z_n & \overset{+}{\to} \Z_n \\ [a] + [b] & \mapsto [a + b] \end{align}$, 反之亦然. 因此 $\Z/n\Z$ 与 $\Z_n$ 的群运算是相容的.

因此为什么 $\Z_n$ 偶尔会在一些书籍或文章中被记为 $\Z/n\Z$ 亦正是如此, 事实上它们就是重叠在一块的同一个群. 当然商群有许许多多的性质, 其中就包含了下方将介绍的群同构定理, 在群论中十分重要, 并且将联系到正规子群, 商群等的一些结构.

### 定理 3.2.6 (正规子群与同态核的性质)

对于任意群 $G, H$：

1. 若 $f : G \to H$ 为群同态, 则同态核为正规子群, 即 $\operatorname{Ker} f \lhd G$.
2. 反之若有 $N \lhd G$, 则可诱导出满同态 $\begin{align} G & \overset{\pi}{\to} G/N \\ a & \mapsto aN \end{align}$, 其中 $\operatorname{Ker} \pi = N$.

其中的映射 $\pi : G \to G/N$ 被称为 **典范满同态 / 投射 (canonical epimorphism / projection)**.

##### 证明

1. 由于 $\operatorname{Ker} f = \set{ x \in G : f(x) = e_H }$, 对于任意 $a \in G, n \in \operatorname{Ker} f$, 根据 [定理 3.2.2](#定理_3.2.2_(正规子群的等价定义)) 的 $(4)$ 则只需证 $ana^{-1} \in \operatorname{Ker} f$, 那么便有：
   $$
   f(ana^{-1}) = f(a) f(n) f(a^{-1}) = f(a) \cdot e_H \cdot f(a)^{-1} = f(a)f(a)^{-1} = e_H
   $$
   因此 $ana^{-1} \in \operatorname{Ker} f$, 所以 $\operatorname{Ker} f \lhd G$ 成立.

2. 对于任意 $a \in G$, 有 $aN \in G/N$, 显然必然存在 $a \in G$ 使得 $\pi(a) = aN$ 为满射, 并且由于：
   $$
   \operatorname{Ker} \pi = \set{ x \in G : \pi(x) = N } = \set{ x \in G : xN = N } = \set{ x \in G : x \in N } = N
   $$

### 定理 3.2.7 (商群的泛性质)

若 $f : G \to H$ 为群同态, $N \lhd G$ 且 $N \sub \operatorname{Ker} f$, 则：

1. 可诱导出存在唯一同态 $\begin{align} G/N & \overset{\hat{f}}{\to} H \\ aN & \mapsto f(a) \end{align}$, 其中任意 $a \in G$;
2. $\operatorname{Im} f = \operatorname{Im} \hat f$ 以及 $\operatorname{Ker} \hat f = (\operatorname{Ker} f)/N$ (即子群 $\ker{f}$ 的像 $\pi(\ker{f})$);
3. 若 $\hat f$ 为同构 $\iff$ $f$ 为满同态且 $N = \operatorname{Ker} f$.

事实上即满足了泛性质, 使得 $\hat f \circ \varphi = f$, 其中 $\pi$ 为典范满同态, 即令下图交换 (其中 $\twoheadrightarrow$ 表示满同态)：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkcifSx7InBvc2l0aW9uIjpbMSwwXSwidmFsdWUiOiJIIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiRy9OIn1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjEsInZhbHVlIjoiZiJ9LHsiZnJvbSI6MCwidG8iOjIsImxpbmUiOiJzb2xpZCIsInZhbHVlIjoiXFxwaSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCIsImhlYWQiOiJ0d29oZWFkcyIsInRhaWwiOiJub25lIn0seyJmcm9tIjoyLCJ0byI6MSwidmFsdWUiOiJcXGV4aXN0cyEgXFxoYXR7Zn0iLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJsaW5lIjoiZGFzaGVkIn1dfQ==
\xymatrix{
G \ar@{->}[r]^{f} \ar@{->>}[d]_{\pi} & H \\
G/N \ar@{-->}[ru]_{\exists! \hat{f}} & 
}
$$

##### 证明

1. 对于任意 $a, b \in G$, 则：

   - $\hat{f}$ 的良定性：有条件 $aN = bN$, 且由于 $aN = bN \iff a^{-1}b \in N \sub \operatorname{Ker} f$, 使得有：
     $$
     f(a^{-1}b) = e_H \implies f(a)^{-1} f(b) = e_H \implies f(a) = f(b)
     $$
     那么利用该条件则有 $\hat{f}(aN) = f(a) = f(b) = \hat{f}(bN)$, 因此 $\hat{f}$ 是良定义的.

   - $\hat{f}$ 的同态性：$\hat{f}(aNbN) = \hat{f}(abN) = f(ab) \overset{\text{$f$ 为群同态}}{=} f(a)f(b) = \hat{f}(aN) \hat{f}(bN)$.

   - $\hat{f}$ 的唯一性：由于 $\hat{f}$ 完全由 $f$ 所决定, 因此 $\hat{f}$ 必定唯一.

2. $\operatorname{Im} f = \operatorname{Im} \hat{f}$ 是显然的, 并且对于 $\operatorname{Ker} \hat{f} = (\operatorname{Ker} f)/N$ 则有：
   $$
   \begin{align}
   \operatorname{Ker} \hat{f} & = \set{ aN \in G/N : \hat{f}(aN) = e_H } \\
   & = \set{ aN \in G/N : f(a) = e_H } \\
   & = \set{ aN \in G/N : a \in \operatorname{Ker} f } \\
   & = (\operatorname{Ker} f)/N
   \end{align}
   $$

3. 若 $\hat{f}$ 为同构, 当且仅当其既是单同态亦是满同态, 而满同态直接由条件推得, 那么由于 $\hat{f}$ 为单同态当且仅当 $\operatorname{Ker} \hat{f} = \set{N}$, 而由条件 $(2)$ 得知 $\operatorname{Ker} \hat{f} = (\operatorname{Ker} f)/N$, 因此当且仅当 $\operatorname{Ker} f = N$ 时 $(\operatorname{Ker} f) = N/N = N$, 使得命题成立.

### 定理 3.2.8 (第一群同构定理)

对于任意群 $G, H$, 若 $f : G \to H$ 为群同态, 则 $f$ 可诱导出同构 $G/\operatorname{Ker} f \cong \operatorname{Im} f$, 即使得下图可交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkcifSx7InBvc2l0aW9uIjpbMSwwXSwidmFsdWUiOiJIIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiRy9cXG9wZXJhdG9ybmFtZXtLZXJ9IGYifSx7InBvc2l0aW9uIjpbMSwxXSwidmFsdWUiOiJcXG9wZXJhdG9ybmFtZXtJbX0gZiJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJ2YWx1ZSI6ImYifSx7ImZyb20iOjAsInRvIjoyLCJsaW5lIjoic29saWQiLCJ2YWx1ZSI6IlxccGkiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJoZWFkIjoidHdvaGVhZHMiLCJ0YWlsIjoibm9uZSJ9LHsiZnJvbSI6MiwidG8iOjMsInZhbHVlIjoiXFxjb25nIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwidGFpbCI6Imhvb2siLCJoZWFkIjoidHdvaGVhZHMifSx7ImZyb20iOjMsInRvIjoxLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJ0YWlsIjoiaG9vayIsInZhbHVlIjoiXFxjdXAifV19
\xymatrix{
G \ar@{->}[r]^{f} \ar@{->>}[d]_{\pi} & H \\
G/\operatorname{Ker} f \ar@{^{(}->>}[r]_{\cong} & \operatorname{Im} f \ar@{^{(}->}[u]_{\cup}
}
$$

##### 证明

由于 $\operatorname{Im} f < H$, 那么 $f : G \to \operatorname{Im} f$ 必为满同态, 利用 [定理 3.2.7](#定理_3.2.7_(商群的泛性质)) 的 $(3)$ 则直接推得有同构 $G/\operatorname{Ker} f \cong \operatorname{Im} f$.

### 注释

当任意群 $G$ "除掉" 它的正规子群 $N$ 时, 直观上就是将 $N$ "压缩" 为平凡子群 $\set{e}$. 那么假设有同态 $f : G \to H$, 若 $N = \operatorname{Ker} f$ 时, 意味着核被压缩为平凡子群, 根据单同态的等价定义, 这使得可以将 $f$ 变成一个单同态 $\hat f$. 另一方面, $f : G \to \operatorname{Im} f$ 必定是个满同态, 而 $\hat f$ 完全依赖于 $f$, 因此 $\hat f$ 肯定也是个满同态, 便促使了 $G/\operatorname{Ker} f \cong \operatorname{Im} f$.

### 推论 3.2.9 (群同态诱导商群之间的同态或同构)

对于任意群 $G, H$, 群同态 $f : G \to H$, $f(N) < M$, 以及 $N \lhd G$ 和 $M \lhd H$, 则：

1. $f$ 可诱导出商群之间的同态 $\begin{align} G/N & \overset{\hat{f}}{\to} H/M \\ aN & \mapsto f(a)M \end{align}$;
2. 若 $\hat{f}$ 为同构 $\iff$ $\operatorname{Im} f \or M = H$ 且 $f^{-1}(M) \sub N$;
3. 若 $f$ 为满同态, 且有 $f(N) = M$ 以及 $\operatorname{Ker} f \sub N$, 则 $\hat f$ 为同构.

事实上 $(1)$ 将使得 $\pi_2 \circ f = \hat{f} \circ \pi_1$, 其中 $\pi_1, \pi_2$ 为典范满同态, 即令下图交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkcifSx7InBvc2l0aW9uIjpbMSwwXSwidmFsdWUiOiJIIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiRy9OIn0seyJwb3NpdGlvbiI6WzEsMV0sInZhbHVlIjoiSC9NIn1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjEsInZhbHVlIjoiZiJ9LHsiZnJvbSI6MCwidG8iOjIsInZhbHVlIjoiXFxwaV8xIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwiaGVhZCI6InR3b2hlYWRzIiwidGFpbCI6Im5vbmUifSx7ImZyb20iOjIsInRvIjozLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJ2YWx1ZSI6IlxcaGF0IGYifSx7ImZyb20iOjEsInRvIjozLCJ2YWx1ZSI6IlxccGlfMiIsImhlYWQiOiJ0d29oZWFkcyIsInRhaWwiOiJub25lIn1dfQ==
\xymatrix{
G \ar@{->}[r]^{f} \ar@{->>}[d]_{\pi_1} & H \ar@{->>}[d]^{\pi_2} \\
G/N \ar@{->}[r]_{\hat f} & H/M
}
$$

##### 证明

1. 对于任意 $a, b \in G$, 则：

   - $\hat{f}$ 的良定性：有条件 $aN = bN \iff a^{-1}b \in N$, 使得：
     $$
     f(a^{-1}b) = f(a)^{-1}f(b) \in f(N) \sub M \implies f(a)M = f(b)M
     $$
     利用该条件则使得 $\hat{f}(aN) = f(a)M = f(b)M = \hat{f}(bN)$ 成立.

   - $\hat{f}$ 的同态性：$\hat{f}(aNbN) = \hat{f}(abN) = f(ab)M = f(a)f(b)M = f(a)M \cdot f(b)M = \hat{f}(aN) \hat{f}(bN)$.

2. 首先将 $\pi_2 \circ f : G \to H/M$ 视为合成同态, 那么根据 [定理 3.2.7](#定理_3.2.7_(商群的泛性质)) 的 $(1), (3)$, 若 $N \sub \operatorname{Ker} \pi_2 f$, 则可诱导出 $G/N$ 透过 $\hat{f}$ 同构于 $H/M$ 当且仅当 $\pi_2 \circ f$ 为满同态且 $N = \operatorname{Ker} \pi_2 f$, 那么分别证明：

   - $N \sub \operatorname{Ker} \pi_2 f$：由于 $f(N) \sub M$, 则 $f^{-1}(f(N)) = N \sub f^{-1}(M)$, 且因为：
     $$
     f^{-1}(M) = \set{ x \in G : f(x) \in M } = \set{ x \in G : f(x)M = M } = \set{ x \in G : \pi_2 f(x) = M } = \operatorname{Ker} \pi_2 f
     $$
     因此就使得 $N \sub f^{-1}(M) = \operatorname{Ker} \pi_2 f$ 成立.

   - $\pi_2 \circ f$ 为满同态：由于 $\pi_2$ 已为满同态, 且若 $f$ 为满同态时当且仅当 $H = \operatorname{Im} f$, 而 $M$ 本身为 $H/M$ 中的幺元, 那么 $M \in \operatorname{Im} f$, 因此 $\operatorname{Im} f = \operatorname{Im} f \or M$, 且两个满同态合成亦然为满同态, 因此命题成立.

   - $N = \operatorname{Ker} \pi_2 f$：由于已知有条件 $N \sub \operatorname{Ker} \pi_2 f$, 且 $\operatorname{Ker} \pi_2 f = f^{-1}(M) \sub N$, 因此命题成立.

3. 由于 $\operatorname{Ker} f \sub N$, 且 $f(N) = M \implies N = f^{-1}(M)$, 因此 $f^{-1}(M) \sub N$, 使得 $\hat f$ 为同构.

### 定理 3.2.10 (第二群同构定理)

对于任意群 $G$, 若 $K < G$ 且 $N \lhd G$, 则 $K/(N \cap K) \cong NK/N$.

##### 证明

- $K/(N \cap K), NK/N$ 构成商群：根据 [定理 3.2.4](#定理_3.2.4_(正规子群的基本性质)) 得知 $N \cap K \lhd K$ 且 $N \lhd NK = N \or K$, 因此 $K/(N \cap K)$ 与 $NK/N$ 皆构成商群.

- $K/(N \cap K) \cong NK/N$：根据 [定理 3.2.8](#定理_3.2.8_(第一群同构定理)), 若有复合同态 $f : K \overset{\sub}{\to} NK \overset{\pi_2}{\to} NK/N$, 则可诱导出同构 $K/\operatorname{Ker} f \cong \operatorname{Im} f$, 使得下图可交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IksifSx7InBvc2l0aW9uIjpbMiwwXSwidmFsdWUiOiJOSy9OIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiSy9cXG9wZXJhdG9ybmFtZXtLZXJ9IGYifSx7InBvc2l0aW9uIjpbMiwxXSwidmFsdWUiOiJcXG9wZXJhdG9ybmFtZXtJbX0gZiJ9LHsicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6Ik5LIn1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjEsInZhbHVlIjoiZiIsImJlbmQiOjMwfSx7ImZyb20iOjAsInRvIjoyLCJsaW5lIjoic29saWQiLCJ2YWx1ZSI6IlxccGlfMSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCIsImhlYWQiOiJ0d29oZWFkcyIsInRhaWwiOiJub25lIn0seyJmcm9tIjoyLCJ0byI6MywidmFsdWUiOiJcXGNvbmciLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJ0YWlsIjoiaG9vayIsImhlYWQiOiJ0d29oZWFkcyJ9LHsiZnJvbSI6MywidG8iOjEsImxhYmVsUG9zaXRpb24iOiJyaWdodCIsInRhaWwiOiJob29rIiwidmFsdWUiOiJcXGN1cCJ9LHsiZnJvbSI6MCwidG8iOjQsInZhbHVlIjoiXFxzdWJzZXQiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJsaW5lIjoic29saWQiLCJ0YWlsIjoiaG9vayJ9LHsiZnJvbSI6NCwidG8iOjEsInZhbHVlIjoiXFxwaV8yIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In1dfQ==
  \xymatrix{
  K \ar@/^/@{->}[rr]^{f} \ar@{->>}[d]_{\pi_1} \ar@{^{(}->}[r]_{\subset} & NK \ar@{->}[r]_{\pi_2} & NK/N \\
  K/\operatorname{Ker} f \ar@{^{(}->>}[rr]_{\cong} &  & \operatorname{Im} f \ar@{^{(}->}[u]_{\cup}
  }
  $$
  那么若定义映射 $\begin{align} K & \overset{f}{\to} NK/N \\ k & \mapsto kN \end{align}$, 则分别需证明：

  - $f$ 的同态性：对于任意 $a, b \in K$, 则 $f(ab) = abN = aN \cdot bN = f(a)f(b)$.
  - $N \cap K = \operatorname{Ker} f$：由于 $N \cap K = \set{ x \in K : x \in N } = \set{ x \in K : xN = N } = \set{ x \in K : f(x) = N } = \operatorname{Ker} f$.
  - $f$ 为满同态：对于任意 $n \in N, k \in K$, 使得 $nkN = kN = f(k) \in NK/N$.

  因此 $f$ 为满同态时则有 $NK/N = \operatorname{Im} f$, 使得 $K/\operatorname{Ker} f = K/(N \cap K) \cong NK/N$ 成立, 即使得下图可交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IksifSx7InBvc2l0aW9uIjpbMiwwXSwidmFsdWUiOiJOSy9OIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiSy8oTiBcXGNhcCBLKSJ9LHsicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6Ik5LIn1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjEsInZhbHVlIjoiZiIsImJlbmQiOjMwfSx7ImZyb20iOjAsInRvIjoyLCJsaW5lIjoic29saWQiLCJ2YWx1ZSI6IlxccGlfMSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCIsImhlYWQiOiJ0d29oZWFkcyIsInRhaWwiOiJub25lIn0seyJmcm9tIjowLCJ0byI6MywidmFsdWUiOiJcXHN1YnNldCIsImxhYmVsUG9zaXRpb24iOiJyaWdodCIsImxpbmUiOiJzb2xpZCIsInRhaWwiOiJob29rIn0seyJmcm9tIjozLCJ0byI6MSwidmFsdWUiOiJcXHBpXzIiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjIsInRvIjoxLCJ0YWlsIjoiaG9vayIsImhlYWQiOiJ0d29oZWFkcyIsInZhbHVlIjoiXFxjb25nIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In1dfQ==
  \xymatrix{
  K \ar@/^/@{->}[rr]^{f} \ar@{->>}[d]_{\pi_1} \ar@{^{(}->}[r]_{\subset} & NK \ar@{->}[r]_{\pi_2} & NK/N \\
  K/(N \cap K) \ar@{^{(}->>}[rru]_{\cong} &  & 
  }
  $$

### 定理 3.2.11 (第三群同构定理)

对于任意群 $G$, 若有 $H \lhd G, K \lhd G$ 并且 $K < H$, 则 $H/K \lhd G/K$ 且 $(G/K)/(H/K) \cong G/H$.

##### 证明

若定义有映射 $\begin{align} G/K & \overset{f}{\to} G/H \\ gK & \mapsto gH \end{align}$, 现在分别需证明：

- $H/K$ 构成商群：由于 $K < H < G$, 显然当 $K \sub H$ 且 $K \lhd G$ 时就有 $K \lhd H$, 因此 $H/K$ 构成商群.

- $f$ 的良定性：对于任意 $g_1, g_2 \in G$, 若有 $g_1K = g_2K$, 那么 $g_1^{-1}g_2 \in K \sub H$, 则 $f(g_1K) = g_1H \overset{g_1^{-1}g_2 \in H}{=} g_2H = f(g_2K)$ 成立.

- $f$ 的同态性：对于任意 $g_1, g_2 \in G$, $f(g_1K \cdot g_2K) = f(g_1 g_2K) = g_1 g_2H = g_1H \cdot g_2H = f(g_1K)f(g_2K)$.

- $H/K \lhd G/K$：根据 [定理 3.2.6](#定理_3.2.6_(正规子群与同态核的性质)) 的 $(1)$, 由于 $\operatorname{Ker} f = \set{ gK : f(gK) = H } = \set{ gK : gH = H } = \set{ gK : g \in H } = H/K$, 那么则有 $H/K \lhd G/K$.

- $(G/K)/(H/K) \cong G/H$：根据 [定理 3.2.8](#定理_3.2.8_(第一群同构定理)), 同态 $f$ 可诱导出同构 $(G/K)/\operatorname{Ker} f = (G/K)/(H/K) \cong \operatorname{Im} f$, 因此只需证明 $f$ 为满同态, 而由于 $|K| \leq |H|$, 则有 $|G/K| \geq |G/H|$, 使得 $f$ 为满同态, 因此便使得 $(G/K)/(H/K) \cong G/H$, 即下图可交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkcvSyJ9LHsicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IkcvSCJ9LHsicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IihHL0spLyhIL0spIn1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjEsInZhbHVlIjoiZiIsImJlbmQiOjAsInRhaWwiOiJub25lIiwiaGVhZCI6InR3b2hlYWRzIn0seyJmcm9tIjowLCJ0byI6MiwibGluZSI6InNvbGlkIiwidmFsdWUiOiJcXHBpIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwiaGVhZCI6InR3b2hlYWRzIiwidGFpbCI6Im5vbmUifSx7ImZyb20iOjIsInRvIjoxLCJ0YWlsIjoiaG9vayIsImhlYWQiOiJ0d29oZWFkcyIsInZhbHVlIjoiXFxjb25nIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In1dfQ==
  \xymatrix{
  G/K \ar@{->>}[r]^{f} \ar@{->>}[d]_{\pi} & G/H \\
  (G/K)/(H/K) \ar@{^{(}->>}[ru]_{\cong} & 
  }
  $$

##### 注释

上述证明当中的 $|K| \leq |H| \implies |G/K| \geq |G/H|$, 由于有条件 $[G : K]|K| = |G| = [G : H]|H|$, 下述不等式成立：
$$
[G : K]|K| \leq [G : K]|H| \implies |G| \leq [G : K]|H| \implies [G : H]|H| \leq [G : K]|H| \implies [G : H] \leq [G : K]
$$
事实上该处告诉我们当任意 $G$ 的子群的阶小于另一子群时, 那么由 $G$ "商掉" 一个比 $H$ 更小的子群 $K$ 时, 则类似于一般的除法遵从 "分母越小, 整体越大" 的原则, 因此 $|G/K| \geq |G/H|$ 成立.

### 定理 3.2.12 (满同态诱导出子群间的双射)

设有群 $G_1, G_2$ 以及满同态 $\varphi : G_1 \to G_2$：

1. $\varphi$ 可诱导出以下集合间的映射为双射 $\hat\varphi$：
   $$
   \begin{array}{cc}
   \set{\text{子群 $H_2 < G_2$}} & \xleftrightarrow{\hat\varphi} & \set{\text{子群 $H_1 < G_1 : H_1 \supset \Ker{\varphi}$}} \\
   \cup & & \cup \\
   \set{\text{正规子群 $H_2 \lhd G_2$}} & \lrarr & \set{\text{正规子群 $H_1 \lhd G_1 : H_1 \supset \Ker{\varphi}$}} \\
   H_2 & \mapsto & \varphi^{-1}(H_2) \\
   \varphi(H_1) & \hspace{-19pt} \style{display:inline-block; transform:scale(-1,1);}{\mapsto} & H_1
   \end{array}
   $$
   并且上述双射满足 $H_2 \sub H_2' \iff \varphi^{-1}(H_2) \sub \varphi^{-1}(H_2')$.

2. 合成态射 $G_1 \overto{\varphi} G_2 \twoheadrightarrow G_2/H_2$ 诱导出同构 $G_1/\varphi^{-1}(H_2) \cong G_2/H_2$.

##### 证明

我们分别证明下述命题：

- 上述映射 $\hat\varphi$ 为双射：

  - $\hat\varphi$ 为单射：由于 $\varphi^{-1}(\varphi(H_1)) = H_1 \Ker{\varphi}$, 所以当满足 $\Ker{\varphi} \sub H_1$ 时我们有 $\varphi^{-1}(\varphi(H_1)) = H_1$, 因此 $\hat\varphi$ 为单射;
  - $\hat\varphi$ 为满射：由于 $\varphi$ 是满射, 当且仅当 $\varphi(\varphi^{-1}(H_2)) = H_2$, 因此 $\hat\varphi$ 为满射.

- 另一方面, 我们考虑正规子群间的对应：

  由于对任意 $g \in G_1$ 有 $gH_1g^{-1} = H_1$, 透过满同态 $\varphi$ 得 $\varphi(gH_1g^{-1}) = \varphi(g)\varphi(H_1)\varphi(g)^{-1}$, 那么由上述双射 $\hat\varphi$ 则有：
  $$
  \Forall{g_1 \in G_1} g_1 H_1 g_1^{-1} = H_1 \iff \Forall{g_2 \in G_2} g_2 \varphi(H_1) g_2^{-1} = \varphi(H_1)
  $$
  最后由 [定理 3.2.8](#定理_3.2.8_(第一群同构定理)) 得 $G_1/\varphi^{-1}(H_2) \cong G_2/H_2$.

### 推论 3.2.13 (任意商群的子群皆为商群的形式)

对于任意群 $G$, 且 $N \lhd G$, 则：

1. 任意 $G/N$ 的子群均可表示为 $K/N$ 的形式, 其中 $N \sub K < G$.
2. $K/N \lhd G/N \iff K \lhd G$.

##### 证明

1. 若有典范满同态 $\pi : G \to G/N$, 根据 [定理 3.2.12](#定理_3.2.12_(满同态诱导出子群间的双射)) 的 $(1)$ 则可诱导出双射：
   $$
   \Map{\hat\pi}{\set{\text{子群 $H_1 < G : H_1 \supset \Ker{\varphi}$}}}{\set{\text{子群 $H_2 < G/N$}}}{K}{\pi(H_1) = K/N}
   $$

2. 同样根据上述定理关于正规子群的对应关系, 命题显然成立.

{% end %}
