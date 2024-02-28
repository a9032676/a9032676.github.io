+++
title = "群论 1 - 群与群同态"
date = 2022-11-11
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

## 1.1. 群论基础

### 定义 1.1.1 (半群, 幺半群, 群, 交换幺半群, 阿贝尔群)

设有非空集 $G$​​ 及其上的二元运算 $\Map{\cdot}{G \times G}{G}{(x, y)}{x \cdot y}$, 称资料 $(G, \cdot)$ 为 **半群 (semigroup)**, 当满足了：

- **封闭性 (closure)**：$\Forall{x, y \in G} xy \in G$.
- **结合律 (associativity)**：$\Forall{x,y,z \in G} (xy)z = x(yz)$.

存在幺元的半群则称为 **幺半群 (monoid)**, 使得额外满足了：

- **幺元律 (identity element)**：$\ExistsU{e \in G} \Forall{x \in G} ex = x = xe$, 其中 $e$ 被称为 $G$ 的 **幺元 / 单位元 (identity elements)**, $e$ 于加法群中为 $0$, 乘法群为 $1$.

若所有幺半群中的元素皆可逆, 则被称为 **群 (group)**, 使得额外满足了：

- **逆元律 (inverse element)**：$\Forall{x \in G} \ExistsU{y \in G} xy = e = yx$, 其中的 $y$ 被称为 **$x$ 的逆元 (inverse of $x$)**, 记为 $x^{-1}$, 加法群则替换为 $-x$.

若幺半群或群被称为是 **阿贝尔群 (abelian group)** 或 **交换群 (commutative group)**, 使得额外满足了：

- **交换律 (commutativity)**：$\Forall{x,y \in G} xy = yx$.

### 注释

事实上半群不一定要求是非空集, 因为在无须保有幺元的情况下, 封闭性与结合律对空集是成立的, 而为了后续讨论便捷所以该处的定义会假定半群非空.

### 例子 1.1.2 (集合, 数域上的例子)

- $\N$ 连同加法, $\N, \Z$ 连同乘法构成交换幺半群, 而非群.

- $\Z, \Q, \R, \C$ 连同它们的加法皆构成交换群.

- 设 $\mathbb{F}$ 为域 (如 $\Q, \R, \C$), 则 $\mathbb{F}^\times$ 连同乘法构成交换群 (如 $\Q^\times, \R^\times, \C^\times$). 类似的结论对 $\Q_{> 0}$ 及 $\R_{> 0}$ 亦成立.

- 设 $X$ 为任意集, 记 $S(X) \coloneqq \Set{ X \overto{\text{双射}} X }$, 则：

  - $S(X)$ 连同映射复合构成群, 而当 $|X| \geq 3$ 时该群非交换;
  - 特别地若 $X = \set{ 1, \cdots, n }$ 有限, 记 $\mathfrak{S}_n \coloneqq S(X)$ 并称其为 $n$ 阶 **对称群 (symmetric group)** 或 **置换群 (permutation group)**;
  - $\mathfrak{S}_n$ 中恰好有 $n!$ 个元素, 我们亦称有限, 如 $n$ 个元素的群 $G$ 为 $n$ 阶有限群, 集合 $G$ 中元素个数则为 **群的阶 (order of group)**, 记为 $|G|$.

- 设 $X$ 为任意集且 $G$ 为群, 记 $G^X \coloneqq \hom{X}{G}$, 若定义有二元运算 $\Map{\cdot}{G^X \times G^X}{G^X}{(f, g)}{f \cdot g}$, 其中 $\Forall{x \in X} (f \cdot g)(x) = f(x) \cdot g(x)$, 则：

  - $G^X$ 连同该二元运算构成群, 称之为 **$X$ 上的 $G$-值函数 ($G$-valued functions on $X$)**;
  - 类似地, $G^{(X)} \coloneqq \Set{ X \overto{f} G : \Forall{x \in X \\ \text{至多有限个例外}} f(x) = 1 }$ 亦构成群, 显然当 $X$ 有限时 $G^X = G^{(X)}$;
  - 若 $G$ 本身是交换的, 则 $G^X$ 与 $G^{(X)}$ 继承了交换性.

- 令 $I$ 任意指标集且 $(G_i)_{i \in I}$ 为一族群, 它们的笛卡尔积 $\ds \prod_{i \in I} G_i$ 连带以下二元运算构成群：
  $$
  \Map{\cdot}{\prod_{i \in I} G_i \times \prod_{i \in I} G_i}{\prod_{i \in I} G_i}{((g_i)_{i \in I}, (h_i)_{i \in I})}{(g_i \cdot h_i)_{i \in I}}
  $$
  称之为一族群 $(G_i)_{i \in I}$ 的 **直积 (direct product)**.

  - 特别地当任意的群 $G_i$ 皆为 $G$ 时, 我们有 $\ds \prod_{i \in I} G = G^I$;
  - 若 $I$ 有限, 如设为 $I = \set{ 1, \cdots, n }$, 记上述的 $G^I$ 或 $G^{(I)}$ 为 $G^n$.

### 例子 1.1.3 (矩阵上的例子)

下设 $\mathbb{F}$ 为任意域：

- $\mathbb{F}$ 上所有 $n \times n$ 方阵的集合 $M_n(\mathbb{F})$ 对矩阵乘法构成幺半群, 其幺元为单位矩阵.
- $\mathbb{F}$ 上所有 $m \times n$ 矩阵的集合 $M_{m \times n}(\mathbb{F})$ 对矩阵加法构成交换群.
- $\mathbb{F}$ 上可逆方阵 $GL_n(\mathbb{F}) \sub M_{n}(\mathbb{F})$ 对矩阵乘法构成 **一般线性群 (general linear group)**, 并且正是 $M_n(\mathbb{F})$ 的单位群, 并且在 $n > 1$ 时非交换.

### 例子 1.1.4 (几何, 拓扑上的例子)

- 正 $n$ 边形的旋转置换及对称置换构成置换群 $D_n$, 称为 $n$ 阶 **二面体群 (dihedral group)**.
- 若 $X$ 是拓扑空间, $X$ 上所有到自身的 **同胚 (homeomorphism)** 所组成的集合对同胚的复合构成了群.
- 若 $(X, x)$ 是带基点的拓扑空间, 从点 $x \in X$ 出发到自身的环路的 **同伦类 (homotopy equivalence class)** 对其 **环路的衔接 (concatenation of loop paths)** 则构成了 **基本群 (fundamental group)**, 其亦是 **第一同伦群 (first homotopy group)**, 记为 $\pi_1(X, x)$.

### 命题 1.1.5 (幺半群中幺元的唯一性)

对于任意幺半群 $G$, 其幺元 $e \in G$ 是唯一的.

##### 证明

假设有另一幺元 $e' \in G$, 显然有 $e = ee' = e'$, 因此幺元唯一.

### 命题 1.1.6 (群的基本性质)

设 $G$ 为群, 则满足了以下的基本性质：

1. $\Forall{x \in G} xx = x \implies x = e$;
2. **左/右消除律 (cancellation law)**：$\Forall{x, y, z \in G} (xy = xz) \or (yx = zx) \implies y = z$;
3. **逆元唯一性 (uniqueness of inverse)**：$\Forall{x \in G} \ExistsU{y \in G} xy = e = yx$;
4. **双重取逆 (double inverse)**：$\Forall{x \in G} (x^{-1})^{-1} = x$​;
5. **穿脱性质 (socks-shoes property)**：$\Forall{x, y \in G} (xy)^{-1} = y^{-1}x^{-1}$;
6. **幺元的共轭性质 (conjugate property of identity)**：$\Forall{g, n \in G} (gng^{-1} = e) \or (g^{-1}ng = e) \implies n = e$;
7. $\Forall{a, b \in G} \b{\ExistsU{x \in G} ax = b} \and \b{\ExistsU{y \in G} ya = b}$.

##### 证明

1. 对 $xx = x$ 两侧右乘 $x^{-1}$ 便得到了 $x(xx^{-1}) = xx^{-1}$, 因此 $x = e$.

2. 若 $xy = xz$, 意味着两侧同时左乘 $x^{-1}$ 就得到了 $y = z$, 对于右消除律亦是类似的.

3. 类似于 [命题 1.1.5](#命题_1.1.5_(幺半群中幺元的唯一性)), 证明略.

4. $(x^{-1})^{-1} = (x^{-1})^{-1}(x^{-1} x) \implies ((x^{-1})^{-1}x^{-1}) x = x$.

5. $(xy)^{-1} = (xy)^{-1}(xyy^{-1}x^{-1}) = ((xy)^{-1}xy)y^{-1}x^{-1} = y^{-1}x^{-1}$.

6. 若 $gng^{-1} = e \implies g^{-1}(gng^{-1})g = g^{-1}g \implies (g^{-1}g)n(g^{-1}g) = e \implies n = e$, 对 $g^{-1}ng = e$ 亦类似.

7. 存在性：对 $ax = b$ 同时左乘 $a^{-1}$ 得 $x = a^{-1}b$, 透过同样方式运算就有 $y = ba^{-1}$;

   唯一性：假设存在其他的解 $x', y' \in G$ 使得 $ax' = b$ 以及 $y'a = b$, 则显然 $x' = a^{-1}b$ 而 $y' = ba^{-1}$, 因此它们的解唯一.

### 命题 1.1.7 (群的等价定义一)

对于任意半群 $G$, 若 $G$ 构成群当且仅当同时满足了：

1. 左幺元律：$\ExistsU{e \in G} \Forall{x \in G} ex = x$;
2. 左逆元律：$\Forall{x \in G} \ExistsU{x^{-1} \in G} x^{-1}x = e$.

对于右幺元律与右逆元律亦是如此.

##### 证明

$(\Rightarrow)$ 由群公理直接推得, 因此是显然的.

$(\Leftarrow)$ 分别验证：

- $G$ 的右幺元律, 即 $\ExistsU{e \in G} \Forall{x \in G} xe = x$：
  $$
  xe \overset{左逆元律}{=} x(x^{-1}x) = (xx^{-1})x = ex \overset{左幺元律}{=} x
  $$

- $G$ 的右逆元律, 即 $\Forall{x \in G} \ExistsU{x^{-1} \in G} xx^{-1} = e$：

$$
xx^{-1} \overset{左幺元律}{=} e(xx^{-1}) \overset{左逆元律}{=} ((xx^{-1})^{-1}(xx^{-1}))(xx^{-1}) = (xx^{-1})^{-1} ((xx^{-1}) (xx^{-1})) \overset{左逆元律}{=} (xx^{-1})^{-1}(xx^{-1}) \overset{左逆元律}{=} e
$$

### 命题 1.1.8 (群的等价定义二)

$$
\Forall{\text{半群 $G$}} \b{ \text{$G$ 为群} \iff \b{\Forall{a, b \in G} \text{$ax = b$ 与 $ya = b$ 于 $G$ 中有解}} }
$$

##### 证明

$(\Rightarrow)$ 若 $G$ 构成群, 则透过 [命题 1.1.6](#命题_1.1.6_(群的基本性质)) 的第 $(6)$ 款得该两方程于 $G$ 中有唯一解.

$(\Leftarrow)$ 若该两方程于半群中有解, 则有条件：
$$
\begin{align}
\Forall{a, b \in G} \Exists{x \in G} ax = b \tag 1 \\
\Forall{a, b \in G} \Exists{y \in G} ya = b \tag 2
\end{align}
$$
我们可以利用 [命题 1.1.7](#命题_1.1.7_(群的等价定义一)), 则只需证：

- 左幺元律, 即 $\ExistsU{e \in G} \Forall{x \in G} ex = x$：

  对 $(1)$ 代入 $b = x$ 得到 $\Forall{a \in G} \Exists{x \in G} ax = x \quad (3)$, 并且由于对 $(2)$ 代入 $a = b = ax$ 就得到了 $\Exists{y \in G} yax = ax \quad (4)$, 所以解得 $y = e$, 使得：
  $$
  ex \overset{(3)}{=} eax \overset{(4)}{=} ax \overset{(3)}{=} x
  $$

- 左逆元律, 即 $\Forall{x \in G} \ExistsU{y \in G} yx = e$：

  对 $(2)$ 代入 $a = x$ 得到 $\Forall{b \in G} \Exists{y \in G} yx = b$, 而该方程有解, 意味着任取 $b = e$ 时有 $yx = e$, 所以 $y = x^{-1}$.

### 定义 1.1.9 (等价关系)

对任意集 $S$, 称其上的二元运算 $\op{\sim} : S \times S \to S$ 为 **等价关系 (equivalence class)**, 当对任意 $x,y,z \in S$ 同时满足：

- **自反性 (reflexivity)**：$x \sim x$;
- **对称性 (symmetry)**：$x \sim y \implies y \sim x$;
- **传递性 (transitivity)**：$(x \sim y) \and (y \sim z) \implies x \sim z$.

### 定义 1.1.10 (等价类, 商集)

对于任意集合 $S$, 考虑以下资料：

- 挑选一个元素 $a \in S$, 称之为 **代表元 (representative element)**;
- $S$ 中的一个等价关系 $\sim$.

则可定义：

- $a$ 的 **等价类 (equivalence class)** 为集合 $\set{ x \in S : a \sim x }$, 并将其记为 $[a]$ (或 $[a]_{\sim}, \overline{a}$ 亦可);
- $S$ 中全体关于 $\sim$ 的等价类集合则称为 **商集 (quotient set)**, 记为 $S / \sim$.

### 注释

接下来给出关于等价类的重要性质, 以便我们在证明陪集的性质时能用得上, 并且为了方便叙述, 对于下述任意等价类 $[x]$ 都视为同一种等价关系 $\sim$.

### 引理 1.1.11 (相同等价类的交非空, 等价类分解)

设有集合 $S$, 以及一个 $S$ 上的等价关系 $\sim$, 则有：

1. **等价类相等则交非空**：$\Forall{a, b \in S} [a] = [b] \iff [a] \cap [b] \neq \empty$;
2. **按照 $\sim$ 对 $S$ 进行划分**：$\ds S = \bigsqcup_{s \in S} \bb{s}$.

##### 证明

1. 由于 $[a] \cap [b]$ 非空, 我们总是能从中挑选出 $x \in [a] \cap [b]$, 而它又当且仅当 $(a \sim x) \and (b \sim x)$, 由等价类的传递性又当且仅当 $a \sim b$, 便得到了 $[a] = [b]$.

2. $(\rArr)$ 假设 $x \in S$, 可从 $S$ 中挑选满足了 $x \sim s$ 的代表元 $s \in S$, 显然就存在 $[s]$ 使得 $x \in [s]$, 这意味着 $x \in \ds \bigcup_{s \in S} \bb{s}$, 由 $(1)$ 我们可以确保 $\ds \bigcup_{s \in S} [s]$ 中任意两个等价类之交为空, 因此 $x \in \ds \bigsqcup_{s \in S} \bb{s}$.

   $(\lArr)$ 假设 $\ds x \in \bigsqcup_{s \in S} \bb{s}$, 这蕴含了 $\Exists{[s] \sub S} x \in [s]$, 显然 $x \in S$.

### 定理 1.1.12 ($G/\sim$ 构成幺半群 / 群)

设 $G$ 为幺半群及其中的一个等价关系 $\sim$, 对于商集 $G/\sim$, 可定义它的二元运算为：
$$
\begin{align}
(G/\sim) \times (G/\sim) & \overset{\cdot}{\to} G/\sim \\
[a] \cdot [b] & \mapsto [ab]
\end {align}
$$
则 $(G/\sim, \cdot)$ 构成幺半群. 并且 $\cdot$ 是 **良定义 (well-defined)** 的, 即需证明以下条件：
$$
\Forall{a_1, a_2, b_1, b_2 \in G/\sim} (a_1 \sim a_2) \and (b_1 \sim b_2) \implies a_1 b_1 \sim a_2 b_2
$$
类似地, 若 $G$ 为群, 以同样的方式亦可验证 $G/\sim$ 构成群.

##### 证明

良定义是显然的, 现在假设 $G$ 为群, 证明 $G/\sim$ 满足了群公理 (那也蕴含其构成幺半群), 假设对于任意 $[a], [b], [c] \in G/\sim$：

- 封闭性：由二元运算保证.
- 结合律：$([a] \cdot [b]) \cdot [c] = [ab] \cdot [c] = [abc] = [a] \cdot [bc] = [a] \cdot ([b] \cdot [c])$.
- 幺元律：$[1] \cdot [a] = [1 \cdot a] = [a] = [a \cdot 1] = [a] \cdot [1]$.
- 逆元律：$[a]^{-1} \cdot [a] = [a^{-1} a] = [1] = [aa^{-1}] = [a] \cdot [a]^{-1}$.

### 定义 1.1.13 ($x^0$, $x^n$, $x^{-n}$)

对于任意群 $G$ 以及任意群元 $x \in G$, 定义：

- $x$ 的 $0$ 次为幺元, 即 $x^0 \coloneqq e$;
- $x$ 的 $n$ 次幂为 $x$ 自乘 $n$ 次的乘积, 即 $x^n \coloneqq \ds \prod_{i = 1}^n x_i = \underbrace{x \cdot x \cdot \ldots \cdot x}_{\text{$n$ 次}}$.
- $x$ 的 $-n$ 次幂为 $x^{-n} \coloneqq (x^{-1})^n$.

### 命题 1.1.14 (群元次幂的基本性质)

对于任意群 $G$, 群元 $x \in G$ 以及 $m, n \in \Z$ 有：

1. $x^m x^n = x^{m+n}$;
2. $(x^m)^n = x^{mn}$.

##### 证明

1. 首先我们有 $x^{m}x^n = x^{m-1}xx^n = x^{m-1}x^{n+1}$, 那么透过归纳就有 $x^{m-m}x^{m+n} = x^0 x^{m+n} = x^{m + n}$.
2. $(x^m)^n = \ds \prod_{i = 1}^n x^m = \underbrace{x^m x^m \cdots x^m}_{\text{$n$ 次}} \overset{(1)}{=} x^{\overbrace{m + m + \dots + m}^{\text{$n$ 次}}} = x^{mn}$.

## 1.2. 同态, 同构与子群

### 定义 1.2.1 (同态与同构的各种定义)

对于任意半群 (或幺半群, 群) $G, H$, 映射 $f : G \to H$：

- 称 $f$ 为 **同态 (homomorphism)**, 当满足 $\Forall{x,y \in G} f(xy) = f(x) f(y)$;
- 若 $f$ 为单射, 则称其为 **单同态 (monomorphism)**. 若 $f$ 为满射, 则称其为 **满同态 (epimorphism)**;
- 若同态 $f$ 是双射, 则称 $f$ 为 **同构 (isomorphism)**, 或称 $G$ **同构于 (isomorphic to)** $H$, 记为 $G \cong H$;
- 同态 $f : G \to G$ 被称为是 **自同态 (endomorphism)**, 于其上的同构被称为 $G$ 上的 **自同构 (automorphism)**.

### 例子 1.2.2 (整数模 $n$ 同余加法群相关的群同态)

- 设有从任意整数 $\Z$ 到自身的模 $n$ 同余类所构成的加法群 $\Z/n\Z$ 的映射 $\begin{align} \Z & \to \Z/n\Z \\ x & \mapsto [x] \end{align}$, 是加法群之间的满同态, 则称为从 $\Z$ 到 $\Z/n\Z$ 的 **典范满同态 (canonical epimorphism)**.
- 类似地亦有 $\begin{align} \Q & \to \Q/\Z \\ r & \mapsto [r] \end{align}$, 即有理数加法群到其模 $1$ 加法群的满同态, 关于整数模 $n$ 同余加法群将于第二章详细描述.
- 设有 $1 < n, k \in \N^\times$, 则映射 $\begin{align} \Z/n\Z & \to \Z/nk\Z \\ x & \mapsto [kx] \end{align}$ 显然为单同态.

### 例子 1.2.3 (交换群上的自同构)

若 $G$ 是交换群, 则映射 $\begin{align} G & \to G \\ x & \mapsto x^{-1} \end{align}$ 构成从群 $G$ 到自身的自同构, 同样地我们亦有 $\begin{align} G & \to G \\ x & \mapsto x^2 \end{align}$, 即构成群 $G$ 上的自同态.

### 例子 1.2.4 (群直积上的群同态)

若有群 $G, H$, 那么对于他们之间的直积 $G \times H$ 则有四个群同态, 即 $G \underset{\psi_1}{\overset{\varphi_1}{\rightleftarrows}} G \times H \underset{\psi_2}{\overset{\varphi_2}{\rightleftarrows}} H$, 其中 $\varphi_i$ 为单同态而 $\psi_i$ 为满同态.

### 命题 1.2.5 (同态的基本性质)

对于任意半群 $G, H, K$ 以及映射 $f : G \to H$, $g : H \to K$, 则有如下的一些关于同态基本性质：

1. 单/满同态的复合映射 $g \circ f : G \to K$ 仍是单/满同态, 并且同构的复合依旧构成同构;

若 $G, H$ 构成群, 且 $f$ 为它们之间的同态, 则：

2. $f$ 应保有幺元, 即 $f(e_G) = e_H$;
3. $f$ 应保有逆元, 即 $\Forall{x \in G} f(x^{-1}) = f(x)^{-1}$.

##### 证明

1. 对于任意 $x,y \in G$ 显然有复合 $g(f(xy)) = g(f(x) \cdot f(y)) = g(f(x))g(f(y))$, 使得其复合依旧是同态, 而复合后依然为单/满同态, 或同构则由函数的复合性质所保证.
2. 由于 $f(e_G) = e_H \implies f(e_G) = f(e_G) f(e_G)^{-1} \implies e_H = f(e_G)^{-1}$, 那么显然就能推得 $f(e_G) = f(e_G)^{-1}$, 使得 $f(e_G)f(e_G) = f(e_G)^{-1}f(e_G) \implies f(e_G) = e_H$.
3. 由于 $f(x^{-1}) = f(x)^{-1} \implies f(x)f(x^{-1}) = e_H \implies f(e_G) = e_H$, 透过 $(2)$ 即可得证.

### 定义 1.2.6 (核与像)

设有群 $G, H$, 以及群同态 $f : G \to H$：

- 定义 $f$ 的 **核 (kernel)** 为 $\op{Ker} f \coloneqq \set{ x \in G : f(x) = e \in H }$;
- 定义 $f$ 的 **像 (image)** 为 $\op{Im} f \coloneqq \Set{ y \in H : \Exists{x \in G} y = f(x) }$, 或记为 $f(G)$;
- 对于子集 $G' \sub G$, 定义 $G'$ 的 **像 (image)** 为 $f(G') \coloneqq \Set{y \in H : \Exists{x \in G'} y = f(x)} = \set{f(x) \in H : x \in G'}$;
- 对于子集 $H' \sub H$, 定义 $H'$ 的 **原像 (inverse image)** 为 $f^{-1}(H') \coloneqq \Set{x \in G : \Exists{h \in H} f(x) = h} = \set{ x \in G : f(x) \in H' }$.

### 命题 1.2.7 (单同态, 满同态与同构的等价定义)

设有群 $G, H$, 以及群同态 $f : G \to H$：

1. $f$ 是单同态 $\iff$ $\op{Ker} f = \set{e}$;
2. $f$ 是满同态 $\iff$ $\op{Im} f = H$;
3. $f$ 是群同构 $\iff$ 存在同态 $f^{-1} : H \to G$ 使得 $ff^{-1} = 1_H$ 以及 $f^{-1}f = 1_G$.

##### 证明

1. $(\Rightarrow)$ 若 $f$ 是单同态, 意味着 $f$ 为单射, 即不存在多对一的映射, 所以 $\op{Ker} f$ 只能为 $\set{e}$.

   $(\Leftarrow)$ 验证其为单射, 即 $\Forall{x_1, x_2 \in G} f(x_1) = f(x_2) \implies x_1 = x_2$：

   由 $\op{Ker} f = \set{e}$ 得 $f(e_G) = e_H$, 并且对 $f(x_1) = f(x_2)$ 移项则有：
   $$
   f(x_1) = f(x_2) \implies f(x_1)f(x_2)^{-1} = e_H \implies f(x_1 x_2^{-1}) = f(e_G)
   $$
   那么显然其中 $x_1 x_2^{-1} = e_G$, 则推得 $x_1 = x_2$.

2. $(\Rightarrow)$ 若 $f$ 是满同态, 意味着 $f$ 为满射, 即对 $H$ 中所有元素都至少存在一个 $G$ 中的元素使得映射到 $H$ 的元素上, 那么显然 $\op{Im} f$ 就是整个 $H$ 的集合.

   $(\Leftarrow)$ 验证其为满射, 即 $\Forall{y \in H} \Exists{x \in G} y = f(x)$：

   由 $\op{Im} f = H$ 知若任意的 $y \in \op{Im} f$, 则 $y \in H$, 那么由 $y \in \op{Im} f \iff \Exists{x \in G} y = f(x)$, 并且已知任意 $y \in H$, 因此直接就等价于满射的定义.

3. 由于 $f$ 为群同构时, 其为双射 (单射+满射), 因此由映射的性质直接保证了 $ff^{-1} = 1_H$ 以及 $f^{-1}f = 1_G$ 成立, 反之亦然.

### 定义 1.2.8 (子群, 平凡子群, 真子群)

对于任意群 $G$​, 以及非空子集 $H \sub G$：

- $H$ 被称为 $G$ 的 **子群 (subgroup)**, 记为 $H < G$, 若 $H$ 携带 $G$ 的二元运算时满足了所有群公理.
- $G < G$ 显然亦构成子群, 而仅包含幺元的子群 $\lang e \rang < G$ 则被称为是 $G$ 的 **平凡子群 (trivial subgroup)**.
- $H$ 被称为 $G$ 的 **真子群 / 纯子群 (proper subgroup)**, 若 $H \neq G, H \neq \lang e \rang$.

### 例子 1.2.9

- 对任一固定的整数 $n$, 其的倍数所构成的集合为 $\Z$ 的子群, 并且同构于 $\Z$.
- $n$ 元集合 $\set{1,2, \dots, n}$ 的全体置换所构成的置换群 $S_n$, 若任意置换 $\sigma \in S_n$ 将其第 $n$ 个元素所固定, 即 $\sigma(n) = n$, 则构成 $S_n$ 的子群, 并且同构于 $S_{n-1}$.
- 若有加法群 $\Z_6 = \set{[0],[1],[2],[3],[4],[5]}$ (或记为 $\Z/6\Z$), 则 $\set{[0], [3]}$ 以及 $\set{[0],[2],[4]}$ 构成 $\Z_6$ 的子群, 若 $p$ 为素数, 则 $\Z_p$ 不存在任何的真子群.
- 全体群 $G$ 上的自同构集 $\op{Aut}(G)$ 及其上的复合映射构成 **自同构群 (automorphism group)**.

### 命题 1.2.10 (子群的等价定义)

对于任意群 $G$, 非空子集 $H \sub G$, 则 $H < G \iff \Forall{a,b \in H} ab^{-1} \in H$.

##### 证明

$(\Rightarrow)$ 若 $H < G$, 由 $H$ 的封闭性得知当 $a, b \in H$ 时就有 $ab \in H$, 而由于 $H$ 构成群, 因此其中所有元素都存在逆元封闭于 $H$ 中, 那么对于 $b$ 则有 $b^{-1} \in H$ 使得 $ab^{-1} \in H$.

$(\Leftarrow)$ 若条件 $\Forall{a,b \in H} ab^{-1} \in H$ 成立, 现在验证 $H$ 的群公理：

- 封闭性：先证明幺元律与逆元律, 假设对任意 $x, y \in H$​, 那么应用条件后有 $xy^{-1} \in H$, 且透过逆元律则可得 $x(y^{-1})^{-1} = xy \in H$​.
- 结合律：由 $G$ 的二元运算结合律所保证.
- 幺元律：首先需要找到该幺元确实存在, 那么对于任意 $x \in H$, 透过应用条件即有 $xx^{-1} = e_G \in H$, 使得 $e_H = e_G$​, 那么显然对 $e_H x = x = x e_H \in H$ 是成立的,  因为幺元律由 $G$ 的二元运算所保证.
- 逆元律：由于上面已找出了 $H$ 的幺元, 那么对于任意 $x \in H$, 应用条件则有 $ex^{-1} = x^{-1} \in H$ 使得逆元封闭于 $H$​ 中, 那么显然 $x^{-1}x = e_H = xx^{-1} \in H$ 成立.

### 命题 1.2.11 (核与像皆构成子群)

对于任意群 $G, H$, 以及群同态 $f : G \to H$, 则：

1. $\op{Ker} f < G$;
2. 若 $G' < G$, 则 $f(G') < H$, 特别地 $f(G) = \op{Im} f < H$;
3. 若 $H' < H$, 则 $f^{-1}(H') < G$.

##### 证明

1. 根据 [命题 1.2.10](#命题_1.2.10_(子群的等价定义)), 若对任意 $x, y \in \op{Ker} f$, 意味着有 $f(x) = f(y) = e_H$, 显然由于：
   $$
   f(x) = f(y) \implies f(x)f(y^{-1}) = e_H \implies f(xy^{-1}) = e_H
   $$
   使得 $f(xy^{-1}) = e_H$ 满足了 $\op{Ker}f$ 中元素的条件, 因此 $\op{Ker} f < G$.

2. 对于任意 $x_1, x_2 \in G'$, 由 [命题 1.2.10](#命题_1.2.10_(子群的等价定义)) 得 $x_1 x_2^{-1} \in G'$, 那么由于 $y \in f(G') \iff \Exists{g \in G'} y = f(g)$, 取 $g = x_1 x_2^{-1}$ 就有 $y = f(x_1 x_2^{-1})$ 使得透过同态性就得 $f(x_1 x_2^{-1}) = f(x_1) f(x_2)^{-1}$, 并且对任意的 $f(x_1), f(x_2)^{-1} \in f(G')$ 再次应用 [命题 1.2.10](#命题_1.2.10_(子群的等价定义)) 就使得 $f(G') < H$ 成立. 并且若取 $G' = G$ 则显然有 $f(G) = \op{Im} f < H$ 成立.

3. 思路类似于 $(2)$, 因此该处略过.

### 推论 1.2.12 (任意子群的交仍是子群)

对于任意群 $G$ 以及 $G$ 的任意非空子群族 $\set{ H_i}_{i \in I}$, 则 $\ds \bigcap_{i \in I} H_i < G$.

##### 证明

假设有任意的 $\ds x, y \in \bigcap_{i \in I} H_i$, 则意味着 $\Forall{i \in I} x, y \in H_i$, 并且由于 $H_i < G$, 透过 [命题 1.2.10](#命题_1.2.10_(子群的等价定义)) 则有 $xy^{-1} \in H_i$ 也就得到了：
$$
\Forall{i \in I} xy^{-1} \in H_i \iff xy^{-1} \in \bigcap_{i \in I} H_i
$$
因此再透过 [命题 1.2.10](#命题_1.2.10_(子群的等价定义)) 就证得 $\ds \bigcap_{i \in I} H_i < G$.

### 注释

虽然我们从 [推论 1.2.12](#推论_1.2.12_(任意子群的交仍是子群)) 已知任意子群的交 $\ds \bigcap_{i \in I} H_i$ 总是 $G$ 的子群, 但 $\ds \bigcup_{i \in I} H_i$ 未必是 $G$ 的子群, 例如 $2$ 与 $3$ 总是出现在并集 $2\Z \cup 3\Z$ 中, 但它们的总和 $5$ 并不封闭于其中.

## 1.3. 子群的生成

### 定义 1.3.1 (由子集生成的子群)

对于任意群 $G$ 以及 $X \sub G$, 设任意 $G$ 中所有包含 $X$ 的子群族设为 $\set{ H_i \supset X}_{i \in I}$, 则：

- 称 $\ds \bigcap_{i \in I} H_i$ 为 **由集合 $X$ 所生成的 $G$ 的子群 (subgroup of $G$ generated by the set $X$)**, 记为 $\lang X \rang$;
- $\lang X \rang$ 亦被称为群 $G$ 中包含了集合 $X$ 的 **最小子群 (smallest subgroup)**;
- 称 $X$ 或 $a \in G$ 为子群 $\lang X \rang$ 或 $\lang a \rang$ 的 **生成元 (generators)**;
- 若设有限集 $X = \set{ a_1, \dots, a_n }$, 并且 $G = \lang X \rang = \lang a_1, \dots, a_n \rang$ 则称 $G$ 为 **有限生成 (finitely generated)**;
- 由一个生成元 $a \in G$ 所生成的子群 $\lang a \rang$ 被称为由 $a$ 所生成的 **循环子群 (cyclic subgroup)**.

### 命题 1.3.2 (生成的等价定义)

对于任意的群 $G$ 以及非空子集 $X \sub G$, 那么子群 $\lang X \rang < G$ 将由 $X$ 中所有元素的有限个乘积所生成, 即：
$$
\begin{align}
\lang X \rang & = \Set{ k_1 a_1 + k_2 a_2 \dots + k_n a_n : a_i \in X, k_i \in \Z } & \quad [加法群] \\
\lang X \rang & = \Set{ a_1^{k_1} a_2^{k_2} \dots a_n^{k_n} : a_i \in X, k_i \in \Z } & \quad [乘法群] \\
\end{align}
$$
特别地, 若生成元只有一个任意的元素 $a \in G$, 则有 $\lang a \rang = \set{ a^n : n \in \Z }$, 即：
$$
\begin{align}
\lang a \rang = \set{ na : n \in \Z } & = \set{0 = na, a, 2a, 3a, \dots , (n-1)a} & \quad [加法群] \\
\lang a \rang = \set{ a^n : n \in \Z } & = \set{1 = a^n, a, a^2, a^3, \dots, a^{n-1}} & \quad [乘法群]
\end{align}
$$

##### 证明

假设 $H = \Set{ a_1^{k_1} a_2^{k_2} \dots a_n^{k_n} : a_i \in X, k_i \in \Z }$, 由于 $\lang X \rang$ 是 $G$ 中包含了 $X$ 的最小子群, 那么对于 $H$ 我们只需要验证其是 $G$ 中最小的集合, 以及其构成 $G$ 的子群即可, 因此分为以下两部分验证：

- 证明 $H$ 构成群：

  - 封闭性：假设有任意 $(x_1^{j_1} x_2^{j_2} \dots x_m^{j_m}), (y_1^{k_1} y_2^{k_2} \dots y_n^{k_n}) \in H$, 显然 $x_1^{j_1} x_2^{j_2} \dots x_m^{j_m} \cdot y_1^{k_1} y_2^{k_2} \dots y_n^{k_n} \in H$.
  - 结合律：由于 $a_i \in X \sub G$, 因此乘积之间的结合性由群 $G$ 直接保证.
  - 幺元律：存在幺元 $a^0 = e_G$.
  - 逆元律：对于任意 $x_1^{k_1} x_2^{k_2} \dots x_n^{k_n} \in H$ 存在逆元 $(x_1^{k_1} x_2^{k_2} \dots x_n^{k_n})^{-1} = x_n^{-k_n} \dots x_2^{-k_2} x_1^{-k_1}$.

- 证明 $H$ 是包含了 $X$ 的最小子集 (最小性), 即对于任意包含了 $X$ 的 $K < G$, 都有 $H \sub K$：

  假设对于任意 $x_1^{k_1} x_2^{k_2} \dots x_n^{k_n} \in H$, 并且由于 $X \sub K$, 则 $x_1^{k_1}, x_2^{k_2}, \dots, x_n^{k_n} \in K$, 并且由子群 $K$ 的封闭性得知元素的乘积依旧在 $K$ 中, 因此 $H \sub K$ 成立.

### 注释

关于循环群的详细性质以及描述将于第二章提及.

### 例子 1.3.3 (整数加群, 平凡子群)

- 整数加群 $\Z$ 是由 $1$ 所生成的无限循环群, 即处于加法群下对于任意 $m \in \Z$, 都有 $m1 = m$;
- 任意群的平凡子群 $\lang e \rang$ 是循环的;

### 定义 1.3.4 (由子群的并所生成的子群)

对于任意群 $G$, 设 $\set{H_i}_{i \in I}$ 为 $G$ 中任意子群所构成的子群族, 则：

- 称 $\ds \left\langle \bigcup_{i \in I} H_i \right\rangle$ 为 **由群 $\ds \bigcup_{i \in I} H_i$ 所生成的子群 (subgroup generated by the groups $\ds \bigcup_{i \in I} H_i$)**;
- 若 $H, K < G$, 则 $\lang H \cup K \rang$ 被称为是 **子群 $H$ 与 $K$ 的并联 (join of subgroups $H$ and $K$)**, 并记为 $H \or K$ (加法群下则记为 $H + K$).

### 命题 1.3.5 (子群的并构成子群的判断条件)

对于任意群 $G$, 设 $\set{H_i}_{i \in I}$ 为 $G$ 中任意子群所构成的子群族, 则 $\ds \bigcup_{i \in I} H_i < G \iff \bigcup_{i \in I} H_i = \left\langle \bigcup_{i \in I} H_i \right\rangle$.

##### 证明

根据, [命题 1.3.2](#命题_1.3.2_(生成的等价定义)), 我们有 $\ds \left\langle \bigcup_{i \in I} H_i \right\rangle = \Set{ a_1^{k_1} a_2^{k_2} \dots a_n^{k_n} : a_i \in \bigcup_{i \in I} H_i, k_i \in \Z }$, 那么：

$(\Rightarrow)$ $\ds \bigcup_{i \in I} H_i \sub \left\langle \bigcup_{i \in I} H_i \right\rangle$ 是显然的. 另一方面, 对于任意 $\ds h_1^{k_1}h_2^{k_2} \dots h_n^{k_n} \in \left\langle \bigcup_{i \in I} H_i \right\rangle$, 由于 $\ds \bigcup_{i \in I} H_i$ 构成子群, 因此有限个群元的乘积 $h_1^{k_1}h_2^{k_2} \dots h_n^{k_n}$ 亦满足封闭性, 使得 $\ds h_i \in \bigcup_{i \in I} H_i$, 其中 $1 \leq i \leq n$, 因此 $\ds \bigcup_{i \in I} H_i \supset \left\langle \bigcup_{i \in I} H_i \right\rangle$.

$(\Leftarrow)$ 对于任意 $\ds a,b \in \bigcup_{i \in I} H_i$, 若 $\ds ab^{-1} \in \bigcup_{i \in I} H_i$ 则 $\ds \bigcup_{i \in I} H_i < G$, 那么由于 $\ds \bigcup_{i \in I} H_i = \left\langle \bigcup_{i \in I} H_i \right\rangle$, 因此 $\ds a, b \in \left\langle \bigcup_{i \in I} H_i \right\rangle$, 显然由子群的封闭性可得 $\ds ab^{-1} \in \left\langle \bigcup_{i \in I} H_i \right\rangle$, 所以 $\ds \bigcup_{i \in I} H_i < G$ 成立.

### 命题 1.3.6 (交换群的子群并联的等价定义)

对于任意交换群 $G$, 且设有子群 $H, K < G$, 则 $H \or K = \set{ ab : a \in H, b \in K }$.

##### 证明

$(\Rightarrow)$ 由于 $H \or K = \Set{ x_1^{k_1} x_2^{k_2} \dots x_n^{k_n} : x_i \in H \cup K, k_i \in \Z }$, 现在若假设 $x_i \in H$, 则与 $x_{i-1}$ 交换位置 ($0 < i \leq n$), 使得经过重排后的元素恰好左侧元素的乘积 $x_1^{k_1} x_2^{k_2} \dots x_j^{k_j} \in H$, 而右侧元素的乘积则, 因此 $H \or K \sub \set{ ab : a \in H, b \in K }$ 成立.

$(\Leftarrow)$ 由于 $\set{ ab : a \in H, b \in K }$, 令 $x_1 = a$ 而 $x_2 = b$ 则有 $x_i \in H \cup K$, 那么 $x_1 x_2 \in H \or K$ 显然成立, 因此有 $H \or K \supset \set{ab : a \in H, b \in K}$.

{% end %}
