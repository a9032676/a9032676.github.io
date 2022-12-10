+++

title = "点集拓扑 2 - 拓扑空间基础"
date = 2022-11-02
draft = false

[taxonomies]
categories = ["点集拓扑"]
tags = ["数学", "拓扑学", "点集拓扑"]

[extra]
lang = "zh"
toc = true
mathjax = true

+++

{% caution() %}本文存在部分内容尚未完全施工完毕, 作者将尽快更新！{% end %}

{% mathjax_escape() %}

## 2.1. 拓扑空间与连续映射

### 定义 2.1.1 (拓扑空间, 开集)

设 $X$​​​​ 为非空集, $X$​​ 的一个子集族 $\tau$​​ 被称为 $X$​​ 的一个 **拓扑 (topology)**，若其满足 **拓扑公理 (topological axioms)**：

1. $X, \empty \in \tau$;
2. $\tau$​ 中任意多个成员的并集仍在 $\tau$​ 中;
3. $\tau$ 中有限多个成员的交集仍在 $\tau$​ 中 $\iff$ $\tau$ 中任二成员的交仍在 $\tau$ 中.

则 $(X, \tau)$ 被称为是 **拓扑空间 (topological space)**, 一般可简记为 $X$, 而 $\tau$​ 中的成员称为该拓扑空间的 **开集 (open sets)**.

### 例子 2.1.2 (离散, 平凡, 余有限, 余可数, 欧氏拓扑)

- $X$ 的幂集 $\mathcal{P}(X)$ (或记为 $2^X$) 构成 $X$ 上的拓扑, 称为 $X$ 上的 **离散拓扑 (discrete topology)**, 且 $(X, \mathcal{P}(X))$​ 被称为 **离散拓扑空间 (discrete topological space)**;
- $\set{X, \empty}$ 亦构成 $X$ 上的拓扑, 称为 $X$​ 上的 **平凡拓扑 (trivial topology)**, 且 $(X, \set{X, \empty})$ 被称为 **平凡拓扑空间 (trivial topological space)**;
- 设 $X$​​ 为无穷集, $\tau_f = \set{ A^c : \text{$A$ 是 $X$ 的有限子集} } \cup \set{ \empty }$​​, 则可验证 $\tau_f$​​ 为 $X$​ 的一个拓扑, 称为 $X$​ 上的 **余有限拓扑 (cofinite topology)**;
- 设 $X$​ 为不可数无穷集, $\tau_c = \set{ A^c : \text{$A$ 是 $X$ 的可数子集} } \cup \set{\empty}$​，则 $\tau_c$​ 也是 $X$​ 的拓扑, 称为 **余可数拓扑 (cocountable topology)**;
- 设有 $\R$​​​, 若 $\tau_e = \set{U : \text{$U$ 是无穷/有限/零个开区间的并} }$​​, 因此 $\empty \in \tau_e$​​, 透过验证知 $\tau_e$​​ 为 $\R$​​ 上的拓扑, 称为 $\R$​​ 上的 **欧氏拓扑 (Euclidean topology)**, 记为 $E^1 = (\R, \tau_e)$​​.

### 例子 2.1.3

若设 $X = \set{a, b, c}$, 且 $\tau = \set{\empty, \set{a}, \set{a, b}, \set{a, b, c}}$, 则可验证 $\tau$ 是 $X$ 的一个拓扑, 所以 $(X, \tau)$ 构成拓扑空间, 而 $\tau$ 并非离散拓扑亦非平凡拓扑.

### 命题 2.1.4 ($n$-维欧氏空间)

设 $X$​​ 的子集族 $\tau_d = \set{U : U\ 是任意开球的并}$​​, 那么 $\tau_d$​​ 是 $X$​​ 上的一个拓扑, 或称 $\tau_d$ 为 $X$ 上由度量 $d$ 诱导出来的 **度量拓扑 (metric topology)**. 而携带了度量拓扑的 $n$ 维笛卡尔空间 $\R^n$ 被称为 **$n$-维欧氏空间 (Euclidean space)**, 记为 $(\R^n, \tau_d)$.

##### 证明

由于 $U$ 是任意开球的并集 $\iff U = \bigcup_{x_0 \in U} B_{x_0}^{\circ}(\epsilon_{x_0})$ , 现在验证 $\tau_d$ 对 $X$ 满足了拓扑公理：

1. $\empty \in \tau_d$​ 是显然的, 而无穷多个开球的并显然就有 $\bigcup_{x_0 \in X} B_{x_0}^{\circ}(\epsilon_{x_0}) = X \in \tau_d$​;

2. 显然任意多个开球的并 $U_1 \cup U_2 \cup \dots \cup U_n = U_k \in \tau_d$;

3. 若设有 $U_i, U_j$​, 若 $U_i \cap U_j \in \tau_d$​​, 则必然存在 $U_k$​ 使得 $U_i \cap U_j = U_k \in \tau_d$​, 那么：

4. $$
   \begin{align}
   U_\alpha \cap U_\beta & = \left( \bigcup_{\alpha \in U} B_{x_\alpha}^{\circ}(\epsilon_{\alpha}) \right) \cap \left( \bigcup_{\beta \in U} B_{x'_\beta}^{\circ}(\epsilon'_{\beta}) \right) & [\text{distrib}] \\
   & = \bigcup_{\beta \in U} \left( \bigcup_{\alpha \in U} B_{x_\alpha}^{\circ}(\epsilon_{\alpha}) \right) \cap \left( B_{x'_\beta}^{\circ}(\epsilon'_{\beta}) \right) & [\text{distrib}] \\
   & = \bigcup_{\alpha, \beta \in U} \left( B_{x_\alpha}^{\circ}(\epsilon_{\alpha}) \cap B_{x'_\beta}^{\circ}(\epsilon'_{\beta}) \right) & [\text{lemma 1.10}] \\
   & = \bigcup_{\alpha, \beta \in U} \bigcup_{x_{\alpha\beta} \in U} B_{x_{\alpha\beta}}^{\circ}(\epsilon_{x_{\alpha\beta}}) & [\text{axiom (T2)}] \\
   & = U_k
   \end{align}
   $$

   对于其中的 $\epsilon_{x_{\alpha \beta}} = \min(\epsilon_\alpha - d(x_\alpha, y_\alpha), \epsilon_\beta - d(x_\beta, y_\beta))$​. 因此 $\tau_d$​ 是 $X$​​ 的一个拓扑.

### 定义 2.1.5 (连续映射)

设 $X, Y$ 为拓扑空间, 映射 $f : X \to Y$, 若 $Y$ 中任意开集 $U$ 的原像 $f^{-1}(U)$ 是 $X$ 中的一个开集, 则称 $f$ 为从 $X$ 到 $Y$ 的 **连续映射 (continuous maps)**, 或称 **$f$ 连续 ($f$ is continuous)**.

### 命题 2.1.6 (连续映射的基本性质)

设 $X, Y, Z$ 为拓扑空间, 则：

1. **恒同映射 (identity maps)** $1_X : X \to X$ 是连续的;
2. 若有连续映射 $f : X \to Y$ 以及 $g : Y \to Z$, 则 **合成映射 (composition maps)** $g \circ f : X \to Z$ 是连续的.

##### 证明

1. 由于映射 $1_X$ 的任意开集的原像 $1_X^{-1}(U) = U$, 显然就是 $X$ 中的一个开集.
2. 若 $g$ 是连续的, 意味着 $Z$ 中任意开集 $U$ 的原像 $f^{-1}(U) \in \tau_Y$, 并且 $f$ 是连续的也就意味着 $Y$ 中任意开集 $f^{-1}(U)$ 的原像 $f^{-1}(f^{-1}(U)) \in \tau_X$, 就证得了合成态射 $g \circ f$ 是连续的.

### 定义 2.1.7 (同胚映射)

设 $X, Y$ 为拓扑空间, 若 $f : X \to Y$ 是一个双射映射, 并且 $f, f^{-1}$ 都是连续的, 则：

- 称 $f$ 为一个 **同胚映射 / 同胚 / 拓扑同构 (homeomorphism / topological isomorphism)**.
- 称拓扑空间 $X$ 与 $Y$ 是 **同胚的 (homeomorphic)**, 或称 $X$ 同胚于 $Y$.

### 命题 2.1.8 (同胚映射的基本性质)

设 $X, Y, Z$ 为拓扑空间, 则：

1. 恒同映射 $1_X : X \to X$ 同胚;
2. 若有同胚 $f : X \to Y$, 则 $f^{-1} : Y \to X$ 亦同胚;
3. 若有同胚 $f : X \to Y$ 以及 $g : Y \to Z$, 则 $g \circ f : X \to Z$ 同胚.

##### 证明

1. 这是显然的, 因为恒同映射本身就是个双射, 并且也是连续的.
2. 若 $f$ 是同胚, 意味着 $f$ 本身是双射, 且其逆映射 $f^{-1}$ 是连续的, 显然根据定义对于 $f^{-1}$ 与它的逆 $f$ 必然也是连续双射的.
3. 若 $f, g$ 是同胚, 意味着 $f, g$ 都是双射, 并且 $f, f^{-1}, g, g^{-1}$ 都是连续的, 由此可见连续双射函数的合成 $g \circ f$ 必为双射, 而连续函数的合成 $f^{-1} \circ g^{-1}$ 亦连续, 所以 $g \circ f$ 是同胚.

## 2.2 邻域与邻域系

### 定义 2.2.1 (邻域, 开邻域, 邻域系, 内点, 内部)

设 $A$​​ 为拓扑空间 $X$​​ 的一个子集, 以及点 $x \in A$​​, 若存在开集 $U$​​ 使得 $x \in U \sub A$​​, 则：

- 称 $A$ 是 $x$ 的 **邻域 (neighbourhood)**, 记为 $A_x$;
- 称 $x$ 为 $A$ 的一个 **内点 (interior point)**;
- 所有点 $x$ 的邻域构成的子集族称为点 $x$ 的 **邻域系 (neighbourhood system)**, 记为 $\mathcal{U}_x$;
- 若邻域 $A_x$​ 同时亦是开集 $A_x \in \tau$​, 则称 $A_x$​ 为 **开邻域 (open neighbourhood)**;
- $A$ 中所有内点所组成的集合 $\set{x : \exists \text{开集}\ U, x \in U \sub A}$ 被称为 $A$ 的 **内部 (interior)**, 记为 $\overset{\circ}{A}$ 或 $A^{\circ}$.

### 定理 2.2.2 (开集的等价定义)

若拓扑空间 $X$ 的一个子集 $U$ 是开集 $\iff$ $U$ 是它每一点的邻域 (即对任意 $x \in U$, $U$ 便是 $x$ 的一个邻域).

##### 证明

$(\Rightarrow)$ 若 $U$ 是开的, 显然 $x \in U \sub U$, 所以 $U$ 是 $x$ 的邻域.

$(\Leftarrow)$ 对 $U$ 进行分类讨论：

- 若 $U = \empty$, 那么显然空集是开的.

- 若 $U \neq \empty$, 且 $U$ 是点 $x$ 的邻域, 那么必然存在开集 $U_x$ 使得 $x \in U_x \sub U$, 则不妨考虑若满足 $U_x \supset U$, 则有 $U = U_x$ 是开集, 所以：
  $$
  U = \bigcup_{x \in U} \set{x} \sub \bigcup_{x \in U} U_{x} \sub U
  $$
  使得 $U = \bigcup_{x \in U} U_x$, 那么由于任意开集的并必然是开的, 因此命题成立.

### 命题 2.2.3 (邻域系的基本性质)

设有拓扑空集 $X$, 任意点 $x \in X$ 以及它的一个邻域系 $\mathcal{U}_x$：

1. $\mathcal{U}_x \neq \empty$, 若 $U \in \mathcal{U}_x$, 则 $x \in U$;
2. 若 $U, V \in \mathcal{U}_x$, 则 $U \cap V \in \mathcal{U}_x$;
3. 若 $U \in \mathcal{U}_x$ 且 $U \sub V$, 则 $V \in \mathcal{U}_x$;
4. 若有 $U \in \mathcal{U}_x$, 则存在 $V \in \mathcal{U}_x$ 使得满足了 $(V \sub U) \and (\forall y \in V, V \in \mathcal{U}_y)$.

##### 证明

1. 结论是显然的, 因为一个 $x$ 的邻域系它里面的任意邻域 $U$ 必然包含 $x$.
2. 设 $x \in U_x \sub U$ 以及 $x \in V_x \sub V$, 则必然有 $x \in U_x \cap V_x \sub U \cap V \in \mathcal{U}_x$.
3. 设 $x \in U_x \sub U \sub V$, 显然 $U_x$ 是包含在邻域 $V$ 的开集, 因此 $V \in \mathcal{U}_x$.
4. 设 $x \in U_x \sub U$, 若取 $V = U$ 则显然有 $U \sub U$, 并且 $\forall y \in U, U \in \mathcal{U}_y$ 蕴含了 $U$ 是开集.

### 定理 2.2.4 (邻域系统)

设有集合 $X$, 且对任意点 $x \in X$ 指定 $X$ 的子集族 $\mathcal{U}_x$, 若它们均满足 [命题 2.2.3](#命题_2.2.3_(邻域系的基本性质)) 的所有条件, 则有唯一的拓扑 $\tau$ 使得对于任意的 $x \in X$, 子集族恰好是点 $x$ 则拓扑空间 $(X, \tau)$ 中的邻域系.

##### 证明 (TODO)

## 2.3 闭集, 导集与闭包

### 定义 2.3.1 (聚点, 孤点, 导集, 闭包)

设 $A$​​​​​​ 为拓扑空间 $X$​​​​​​ 的子集, 以及点 $x \in X$​​​​​​, 若 $x$​​​​​​ 的任意邻域 $U_x$ 都包含一些 $A \backslash \set{x}$​​​​​​​ 的点, 则：

- 称 $x$​ 为 $A$ 的 **极限点 / 凝聚点 / 聚点 (limit / cluster / accumulation point)**, 即：
  $$
  \text{$x$ 是 $A$ 的聚点} \iff \forall U_x \sub X, U_x \cap (A \backslash \set{x}) \neq \empty \iff \forall U_x \sub X, (U_x \backslash \set{x}) \cap A \neq \empty \quad \text{($x$ 的任意开邻域 $U_x$ 均与 $A \backslash \set{x}$ 有交点)}
  $$

- $A$​​ 的所有聚点集被称为 $A$​​ 的 **导集 (derived set)**, 记为 $A'$​​, $\partial{A}$ 或 $d(A)$​​;

- 称集合 $\overline{A} \coloneqq A \cup A'$ (或记为 $\text{cl}(A)$) 为 $A$​ 的 **闭包 (closure)**, 即：
  $$
  x \in \overline{A} \iff \forall U_x \sub X, U_x \cap A \neq \empty \quad \text{($x$ 的任意邻域 $U_x$ 均与 $A$ 有交点)}
  $$

反之, 若 $x \in A$ 且 $x$ 不是 $A$ 的聚点, 则称 $x$ 为 $A$ 的 **孤立点 / 孤点 (isolated point)**, 即：
$$
\text{$x$ 是 $A$ 的孤立点} \iff \exists U_x \sub X, U_x \cap (A \backslash \set{x}) = \empty \iff \exists U_x \sub X, (U_x \backslash \set{x}) \cap A = \empty \quad \text{($x$ 存在开邻域 $U_x$ 与 $A \backslash \set{x}$ 无交点)}
$$

### 例子 2.3.2 (离散拓扑空间中只有孤点与空导集)

设 $X$ 为离散拓扑空间, 子集 $A \sub X$, 由于 $X$ 中每一个单点集都是开集, 因此对于点 $x \in X$, 则存在 $x$ 的邻域 $U_x$ 使得 $U_x \cap (A \backslash \set{x}) = \empty$, 那么在 $A$ 中就没有任何的聚点, 使得 $A$ 的导集亦为空.

### 例子 2.3.3 (平凡拓扑空间的聚点与导集)

设 $X$ 为平凡拓扑空间, 子集 $A \sub X$, 如果我们想验证点 $x \in X$ 是否为 $A$ 聚点, 则对 $A$ 分类讨论：

- 若 $A = \empty$, 则显然存在 $x$ 的邻域 $U_x$ 与空集的交为空, 显然这是个孤点, 并且导集为空.

- 若 $A = \set{x_0}$, 其中 $x_0 \neq x$, 考虑到这是一个平凡拓扑, 开集为 $X$ 或 $\empty$, 则显然 $x$ 的邻域 $U_x$ 只能唯一地取为 $X$, 那么 $U_x$ 就包含了 $\set{x_0} \backslash \set{x}$ 的点, 所以聚点 $x \in A'$. 然而对于 $x_0$, 同样取其唯一邻域为 $U_{x_0} = X$, 则有 $U_{x_0} \cap (A \backslash \set{x_0}) = \empty$, 所以 $x_0 \notin A'$, 使得 $A' = X \backslash A$.

- 若 $A = \set{x_1, x_2, \dots}$, 其中 $|A| > 1$, $x_i \neq x$, 而由于对于点 $x$, 有邻域 $U_{x} = X$, 并且 $U_x \cap (A \backslash \set{x}) = \set{x_1, x_2, \dots} \neq \empty$, 那么 $x \in A'$.

  同样地对于任意 $x_i \in A$, 若其有邻域 $U_{x_i} = X$, 并且 $U_{x_i} \cap (A \backslash \set{x_i}) \neq \empty$, 那么 $x_i \in A'$, 最终使得 $X$ 的所有点都是 $A$ 的聚点, 即 $A' = X$.

### 例子 2.3.4

设 $X = \set{a, b, c}$​​, 规定拓扑为 $\tau = \set{X, \empty, \set{a}}$​​, 则当 $A = \set{a}$​ 时, $b, c$​ 都是 $A$ 的聚点, 而 $a$ 不是, 因为对于 $a,b,c$ 的任意开邻域 $U_a, U_b, U_c$ 有：
$$
U_a \cap (A \backslash \set{a}) = X \cap (\set{a} \backslash \set{a}) = \empty \\
U_b \cap (A \backslash \set{b}) = X \cap (\set{a} \backslash \set{b}) \neq \empty \\
U_c \cap (A \backslash \set{c}) = X \cap (\set{a} \backslash \set{c}) \neq \empty \\
$$

### 命题 2.3.5 (导集的基本性质)

设 $X$ 为拓扑空间, 子集 $A \sub X$：

1. $\empty' = \empty$;
2. $A \sub B \implies A' \sub B'$;
3. $(A \cup B)' = A' \cup B'$;
4. $A'' \sub A \cup A' = \overline{A}$.

##### 证明

1. 由于 $\empty'$ 意味着对于任意点 $x \in X$, $x$ 都不是空集的聚点, 因为任意集与空集之交为空, 因此导集只能是空集.

2. 对任意聚点 $x \in A'$, 那么 $x$ 满足了对于其任意邻域 $U_x$ 有 $U_x \cap (A \backslash \set{x}) \neq \empty$, 而由于 $A \sub B$, 就有 $U_x \cap (B \backslash \set{x}) \neq \empty$, 使得 $A'$ 中任意的 $x$ 都含于 $B'$ 中, 所以 $A' \sub B'$ 成立.

3. 对任意聚点 $x \in (A \cup B)'$, 则对于其任意邻域 $U_x$ 有 $U_x \cap [(A \cup B) \backslash \set{x}] \neq \empty$, 透过运算：
   $$
   \begin{align}
   \forall U_x \sub X, U_x \cap [(A \cup B) \backslash \set{x}] & \neq \empty \\
   \forall U_x \sub X, U_x \cap [(A \backslash \set{x}) \cup (B \backslash \set{x})] & \neq \empty \\
   \forall U_x \sub X, [U_x \cap (A \backslash \set{x})] \cup [U_x \cap (B \backslash \set{x})] & \neq \empty \\
   \end{align}
   $$
   使得对于任意 $x$ 的邻域 $U_x$, 要么 $U_x \cap (A \backslash \set{x}) \neq \empty$ 或是 $U_x \cap (B \backslash \set{x}) \neq \empty$, 显然就得到了 $A' \cup B'$.

4. 由于 $A'' \sub A \cup A' \iff [x \in A'' \implies (x \in A) \or (x \in A')]$, 取其逆否命题则有 $(x \notin A) \and (x \notin A') \implies x \notin A''$：

   由于 $x \notin A'$, 即 $x$ 不是 $A$ 的聚点, 即是存在点 $x$ 的邻域 $U_x$ 使得 $U_x \cap (A \backslash \set{x}) = \empty$, 且由 $x \notin A$ 知 $U_x \cap A = \empty$, 所以对于任意 $U_x$ 的点都不在 $A$ 中, 使得对于任意 $y \in U_x = U_y$ 有 $U_y \cap (A \backslash \set{y}) = \empty$, 使得 $y$ 不是 $A$ 的聚点, 即 $y \notin A'$, 那么说明 $U_x$ 中没有任何 $A$ 的聚点, 于是乎 $x$ 存在一个邻域 $U_x$ 与 $A'$ 无交, 重复之前的步骤则可得到 $x \notin A''$, 即是说原命题 $A'' \sub A \cup A'$ 成立.

### 定义 2.3.6 (闭集)

设 $X$ 为拓扑空间, $A \sub X$, 若 $A$ 的任意聚点都属于 $A$, 即 $A' \sub A$, 则称 $A$ 为拓扑空间 $X$ 中的一个 **闭集 (closed set)**.

### 定理 2.3.7 (闭集的等价定义)	

设有拓扑空间 $X$, $A \sub X$, 以下命题成立：
$$
\text{$A$ 的补集 $A^c$ 是开集 $\iff$ $A$ 是闭集}; \\
\text{$A$ 的补集 $A^c$ 是闭集 $\iff$ $A$ 是开集}.
$$

##### 证明

只需证明 $\text{$A$ 的补集 $A^c$ 是开集 $\iff$ $A$ 是闭集}$, 则后者自动成立, 因此：

$(\Rightarrow)$ 若 $A^c$ 是开集, 根据 [定理 2.2.2  (开集的等价定义)](#定理_2.2.2_(开集的等价定义)), 那么 $A^c$ 是它自身任意点 $x$ 的一个邻域, 并且 $A^c \cap A = \empty \implies A^c \cap (A \backslash \set{x}) = \empty$, 因此对于任意 $x \notin A$ 就有 $x \notin A'$, 那么则说明对任意 $x \in A$ 有 $x \in A'$ 使得 $A' \sub A$ 成立.

$(\Leftarrow)$ 若 $A$ 是闭集, 即使说 $A' \sub A$, 所以任意 $A$ 的聚点都在 $A$ 内, 反之就意味着 $A$ 的任意孤点 $x$ 都在 $A^c$ 内, 根据孤点的定义我们知道 $x$ 存在开邻域 $U_x$ 使得 $U_x \cap (A \backslash \set{x}) = \empty$, 那么由于 $U_x$ 是开集, 所以 $U_x$ 是它每一点的邻域, 此时取 $U_x = A^c$ 即可满足条件.

### 例子 2.3.8

- 在离散拓扑空间中, 任何子集都是开集 $\implies$​ 任意子集都是闭集;
- 在平凡拓扑空间中, 只有两个闭集：$X = \empty^c$​ 以及 $\empty = X^c$​;
- 在 $(\R, \tau_f)$ 中 ($\tau_f$ 为余有限拓扑), 则其闭集为： $A = (A^c)^c$ ($A$ 是 $X$ 的有限子集) 或 $X = \empty^c$;
- 在 $(\R, \tau_c)$​ 中 ($\tau_c$​ 为余可数拓扑), 则类似上例, 其闭集为 $X$​ 或可数集.

### 例子 2.3.9 ($\R$ 中的闭区间是闭集)

设 $a, b \in \R$, 且 $a < b$, 则：

- 闭区间 $[a, b]$ 是 $\R$ 中的一个闭集, 因为其补集 $(-\infin, a) \cap (b, \infin)$ 是开集.
- 半开区间 $(-\infin, a]$ 以及 $[b, \infin)$ 都是 $\R$ 的闭集, 因为它们的补集分别为 $(a, \infin)$ 以及 $(-\infin, b)$, 并且都是开集, 而 $(-\infin, \infin) = \R$ 则是闭集.
- 开区间 $(a, b)$ 并非闭集, 因为 $a$ 是 $(a, b)$ 的聚点, 但 $a \notin (a, b)$, 同理区间 $(a, b], [a, b), (-\infin, a), (b, \infin)$ 都不是闭集.

### 命题 2.3.10 (闭集的基本性质)

设有拓扑空间 $X$​, 那么由拓扑公理可推出 $X$ 的闭集满足：

1. $X, \empty$ 均为闭集;
2. 任意多个闭集的交集是闭集;
3. 有限多个闭集的并集是闭集.

##### 证明

1. 由于 $X, \empty$​ 亦为开集, 因此开集的余集是闭集, 则有：$X^c = \empty$​ 以及 $\empty^c = X$​;
2. 由拓扑公理得 $\tau$ 中任意多个成员的并仍是开集, 则 $\forall S_i \in \tau, S_1 \cup S_2 \cup \dots \cup S_n \in \tau$, 透过应用德摩根定律得 $(\bigcup_{i \in I} S_i)^c = \bigcap_{i \in I} S_i^c$ 所以任意多个闭集的交集仍是闭集.
3. 由拓扑空间公理得 $\tau$​​​ 中任二成员的交仍是开集, 则 $\forall A, B \in \tau, A \cap B \in \tau$, 透过应用德摩根定律得 $(A \cap B)^c = A^c \cup B^c$​​​, 因此得有限多个闭集的并仍是闭集.

### 定理 2.3.11 (闭集与闭包的联系)

设有拓扑空间 $X$, $A \sub X$, 则 $\text{$A$ 是闭集} \iff \overline{A} = A$.

##### 证明

$(\Rightarrow)$ 若 $A$ 是闭集, 即有 $A' \sub A$, 那么由于 $\overline{A} = A' \cup A$ 就意味着 $\overline{A} \sub A$, 并且 $A \sub \overline{A}$ 是显然的, 因此 $\overline{A} = A$ 成立.

$(\Leftarrow)$ 若 $\overline{A} = A$, 由于 $\overline{A} = A' \cup A$ 就意味着 $A'$ 的所有聚点必须含于 $A$ 中使得 $\overline{A} = A$, 因此有 $A' \sub A$ 使得 $A$ 是一个闭集.

### 命题 2.3.12 (闭包的基本性质)

设有拓扑空间 $X$, 且对任意子集 $A, B \sub X$：

1. $\overline{\empty} = \empty$;
2. $A \sub B \implies \overline{A} \sub \overline{B}$​;
3. $\overline{A \cup B} = \overline{A} \cup \overline{B}$;
4. $\overline{A \cap B} \sub \overline{A} \cap \overline{B}$;
5. $\overline{\overline{A}} = \overline{A}$.

##### 证明

1. 由于空集是闭集, 所以根据 [定理 2.3.11](#定理_2.3.11_(闭集与闭包的联系)) 就有 $\overline{\empty} = \empty$.

2. 首先 $x \in \overline{A} \iff x \in A \or x \in  A'$​​​​​, 那么由 $A \sub B$​ 得 $x \in A \sub B$​ 或 $x \in A' \sub B'$​ (由映射保子集得) 使得 $x \in B \cup B' \iff \overline{A} \sub \overline{B}$​​.

3. $$
   \overline{A \cup B} = (A \cup B) \cup (A \cup B)' = (A \cup B) \cup (A' \cup B') = (A \cup A') \cup (B \cup B') = \overline{A} \cup \overline{B}
   $$

4. 即证 $\overline{A \cap B} \sub \overline{A}$ 以及 $\overline{A \cap B} \sub \overline{B}$, 那么根据 $(2)$ 对原命题作改变使得应证 $A \cap B \sub A$ 以及 $A \cap B \sub B$：

   由于交集 $A \cap B$ 的元素依然在 $A$ 中, 因此 $A \cap B \sub A$ 显然成立, 对于 $A \cap B \sub B$ 亦是如此.

5. 由于 $\overline{\overline{A}} = \overline{A \cup A'} = \overline{A} \cup \overline{A'} = \overline{A} \cup A' \cup A''$, 那么由于按闭包定义有 $A' \sub \overline{A}$ 以及根据 [命题 2.3.5](#命题_2.3.5_(导集的基本性质)) 就有 $A'' \sub \overline{A}$ 使得 $\overline{\overline{A}} = \overline{A}$ 成立.


### 定理 2.3.13 (闭包都是闭集)

设有拓扑空间 $X$ 的子集 $A$, 其闭包 $\overline{A}$ 是闭集.

##### 证明

按闭集的定义, 若 $\overline{A}' \sub \overline{A}$, 则 $\overline{A}$ 是闭集, 那么对于任意点 $x \in \overline{A}'$, 有 $x \in (A \cup A')'$ 使得 $x \in A' \cup A''$, 显然 $A', A'' \sub \overline{A}$ 因此最终使得 $\overline{A}' \sub \overline{A}$ 成立.

### 定理 2.3.14 ($\overline{A}$ 是包含 $A$ 的最小闭集)

设 $X$ 为拓扑空间, $\mathcal{F}$ 为 $X$ 中所有闭集构成的闭集族, 则对于 $X$ 的每个子集 $A$ 有：
$$
\overline{A} = \bigcap_{U \in \mathcal{F}, A \sub U} U
$$
即闭包 $\overline{A}$ 是包含 $A$ 的所有闭集之交, 所以 $\overline{A}$ 是包含 $A$ 的最小闭集.

##### 证明

$(\Rightarrow)$ 由于 $A \sub \bigcap_{U \in \mathcal{F}, A \sub U} U$, 其中由于 $A \sub \overline{A}$, 而根据 [定理 2.3.13](#定理_2.3.13_(闭包都是闭集)) 得知 $\overline{A}$ 是闭集, 即 $\overline{A}$ 必然含于闭集族 $\mathcal{F}$ 中, 因此 $\overline{A} \sub \bigcap_{U \in \mathcal{F}, A \sub U} U$ 成立.

$(\Leftarrow)$ 那么根据定义我们有 $\bigcap_{U \in \mathcal{F}, A \sub U} U \iff \forall U \in \mathcal{F}, A \sub U$, 并且根据 [定理 2.3.13](#定理_2.3.13_(闭包都是闭集)) 得知 $\overline{A}$ 是闭集, 所以就有 $A \sub \overline{A} \in \mathcal{F}$, 所以展开就有：
$$
\bigcap_{U \in \mathcal{F}, A \sub U} U = U_1 \cap U_2 \cap \dots \cap \overline{A} \cap \dots
$$
显然 $\bigcap_{U \in \mathcal{F}, A \sub U} U$ 就包含于 $\overline{A}$ 中, 使得 $\bigcap_{U \in \mathcal{F}, A \sub U} U \sub \overline{A}$ 成立.

### 注释

以上由某一个集合取其闭包的过程可被看作是在集合 $X$ 上的幂集 $\mathcal{P}(X)$ 到自身的一个映射, 例如集合 $A \sub X$ 透过该映射则可取出它的闭包 $\overline{A}$, 这种映射我们就定义为以下的 [定义 2.3.15 (Kuratowski 闭包公理)](#定义_2.3.15_(Kuratowski_闭包公理)), 其与透过开集公理的方式去定义拓扑, 再进一步建立起拓扑空间的概念是等价的.

### 定义 2.3.15 (Kuratowski 闭包公理)

设 $X$ 为集合, 对于任意 $A, B \in \mathcal{P}(X)$, 若映射 $c^* : \mathcal{P}(X) \to \mathcal{P}(X)$ 称为 **Kuratowski 闭包运算 (Kuratowski closure operators)** 若满足了：

1. $c^*(\empty) = \empty$;
2. $A \sub c^*(A)$;
3. $c^*(A \cup B) = c^*(A) \cup c^*(B)$;
4. $c^*(c^*(A)) = c^*(A)$.

以上四个条件通常亦被称为 **Kuratowski 闭包公理 (Kuratowski closure axioms)**.

### 定理 2.3.16 (闭包运算对拓扑的唯一性)

设 $X$ 为集合, 闭包运算 $c^* : \mathcal{P}(X) \to \mathcal{P}(X)$, 则存在唯一的拓扑 $\tau$ 使得在 $(X, \tau)$ 中对于任意 $A \sub X$ 有 $c^*(A) = \overline{A}$.

##### 证明 (TODO)

设有任二拓扑 $\tau, \tau'$

### 定义 2.3.17 (度量空间上点与集合的距离)

设 $(X, d)$ 为度量空间, 非空子集 $A \sub X$, 定义点 $x \in X$ 与 $A$ 的距离 $d$ 为：
$$
\begin{align}
d : X \times \mathcal{P}(X) & \to \R \\
(x, A) & \mapsto \inf \set{ d(x, y) : y \in A }
\end{align}
$$

### 命题 2.3.18 (度量空间上点与集合的距离的基本性质)

设 $(X, d)$ 为度量空间, 非空子集 $A \sub X$：

1. $x \in A' \iff d(x, A \backslash \set{x}) = 0$;
2. $x \in \overline{A} \iff d(x, A) = 0$.

##### 证明 (TODO)

### 命题 2.3.19 (连续映射的等价定义)

设 $X, Y$ 为拓扑空间, 映射 $f : X \to Y$, 则以下条件等价：

1. $f$ 是连续映射;
2. $Y$ 中的任意闭集 $U$ 的原像 $f^{-1}(U)$ 是闭集;
3. 对于任意子集 $A \sub X$, $A$ 的闭包的像包含于 $A$ 的像的闭包, 即 $f(\overline{A}) \sub \overline{f(A)}$;
4. 对于任意子集 $B \sub Y$, $B$ 的闭包的原像包含 $B$ 的原像的闭包, 即 $\overline{f^{-1}(B)} \sub f^{-1}(\overline{B})$.

##### 证明 (TODO)

## 2.4 内部与边界

### 定义 2.4.1 (内部) (TODO)



### 命题 2.4.2 (若 $A, B$ 互为余集, 则 $\overline{A}, \overset{\circ}{B}$ 互为余集)

设有拓扑空间 $X$, 其子集 $A, B$ 互为余集, 则 $\overline{A}$ 与 $\overset{\circ}{B}$ 互为余集.

##### 证明

$$
\begin{align}
x \in \overline{A}^c & \iff \neg\text{($x$ 的任一邻域均与 $A$ 都有交点)} \\
& \iff \text{存在 $x$ 的邻域与 $A$ 无交点} \\
& \iff \text{存在 $x$ 的邻域使得包含于 $B$ 中} & \text{[由 $A, B$ 互为余集得]} \\
& \iff \text{$x$ 为 $B$ 的内点, 因此 $x \in \overset{\circ}{B}$}.
\end{align}
$$

### 命题 2.4.3 (内部的基本性质)

设有拓扑空间 $X$, 子集 $A, B \sub X$：

1. $A \sub B \implies \overset{\circ}{A} \sub \overset{\circ}{B}$​;
2. $\overset{\circ}{A}$​​ 是包含于 $A$​ 中所有开集的并 (即 $A^{\circ}$​ 是 $A$​ 中的最大开集);
3. $\overset{\circ}{A} = A \iff A\ \text{是开集}$​;
4. $(A \cap B)^{\circ} = \overset{\circ}{A} \cap \overset{\circ}{B}$;
5. $(A \cup B)^{\circ} \supe \overset{\circ}{A} \cup \overset{\circ}{B}$.

##### 证明

1. 对于任意 $x \in \overset{\circ}{A}$​, 其必定存在开集 $U$​ 使得 $x \in U \sub A$​, 而因为 $A \sub B$​ 所以 $U \sub A \sub B$​, 使得存在 $U$​ 有 $x \in U \sub B$​ 构成 $\overset{\circ}{B}$​, 因此任意 $A$​ 的内点亦是邻域 $B$​ 的内点, 所以 $\overset{\circ}{A} \sub \overset{\circ}{B}$​​.

2. 设 $A$​​ 的子集族为 $\mathcal{U} = \set{ U_i : U_i \sub A }$​​, 且 $A$​​ 中所有开集的并为 $\bigcup_{i \in I} U_i$​​​​, 则：
   $$
   x \in \bigcup_{i \in I} U_i \iff \exists i \in I, x \in U_i \sube A \iff x \in \bigcup_{i \in I} U_i \sube A \iff x \in A
   $$

3. 若 $\overset{\circ}{A} = A$​, 那么由 $(2)$​ 得 $A$​ 是包含于 $A$​ 中所有开集的并, 而所有开集的并根据拓扑公理依然是开集, 因此 $A$​​ 是开集;

   反之若 $A$ 是开集, 则根据 $(2)$ 得知必然存在最大开集 $\overset{\circ}{A}$ 使得其等于 $A$.

4. $x \in (A \cap B)^{\circ} \iff x \in U \sub A \cap B \iff x \in U \sub A \and x \in U \sub B \iff x \in \overset{\circ}{A} \cap \overset{\circ}{B}$.

5. $$
   \begin{align}
   x \in \overset{\circ}{A} \cup \overset{\circ}{B} & \iff (x \in U_1 \sube A) \or (x \in U_2 \sube B) \\
   & \implies (x \in U_1 \sube A \cup B) \or (x \in U_2 \sube A \cup B) \\
   & \iff x \in (A \cup B)^{\circ}
   \end{align}
   $$

{% end %}