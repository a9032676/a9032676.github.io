+++

title = "点集拓扑 2 - 拓扑空间基础"
date = 2023-02-09
draft = false

[taxonomies]
categories = ["点集拓扑"]
tags = ["数学", "拓扑学", "点集拓扑"]

[extra]
lang = "zh"
toc = true
mathjax = true

+++

{% good() %}本文内容已完全施工完毕, 读者可放心阅读！{% end %}

{% mathjax_escape() %}

## 2.1. 拓扑空间与拓扑基

### 定义 2.1.1 (拓扑空间, 开集)

设 $X$​​​​ 为非空集, $X$​​ 的一个子集族 $\tau$​​ 被称为 $X$​​ 的一个 **拓扑 (topology)**, 若其满足 **拓扑公理 (topological axioms)**：

1. $X, \empty \in \tau$;
2. $\tau$​ 中任意多个成员的并集仍在 $\tau$​ 中;
3. $\tau$ 中有限多个成员的交集仍在 $\tau$​ 中 $\iff$ $\tau$ 中任二成员的交仍在 $\tau$ 中.

则 $(X, \tau)$ 被称为是 **拓扑空间 (topological space)**, 一般可简记为 $X$, 而 $\tau$​ 中的成员称为该拓扑空间的 **开集 / 开子集 (open sets / open subsets)**.

### 定义 2.1.2 (邻域, 开邻域, 邻域系)

设 $S$​​ 为拓扑空间 $X$​​ 的一个子集, 以及点 $x \in X$​​, 若存在开集 $V$​​ 使得 $x \in V \sub S$​​, 则：

- 称 $S$ 是 $x$ 的 **邻域 (neighbourhood)**, 记为 $U_x$;
- 所有点 $x$ 的邻域构成的子集族称为点 $x$ 的 **邻域系 (neighbourhood system)**, 记为 $\mathcal{U}_x$;
- 若邻域 $U_x$​ 同时亦是开集 $U_x \in \tau$​, 则称 $U_x$​ 为 **开邻域 (open neighbourhood)**.

### 定义 2.1.3 (细/粗拓扑, 最细/最粗拓扑)

设有集合 $X$ 且有两个 $X$ 中的拓扑 $\tau_1, \tau_2 \in \mathcal{P}(X)$, 分别使 $(X, \tau_1)$ 以及 $(X, \tau_2)$ 构成拓扑空间：

- 若 $\tau_1 \sub \tau_2$, 则称 $\tau_2$ 是比 $\tau_1$ **更细致 (finer)** 的拓扑, 或称 $\tau_1$ 是比 $\tau_2$ **更粗糙 (coarser)** 的拓扑;
- 若 $\tau$ 比任意 $X$ 的拓扑 $\tau'$ 都要大, 即对于任意拓扑 $\tau'$ 满足 $\tau' \sub \tau$, 则称 $\tau$ 为 **最细拓扑 (finest topology)**.
- 若 $\tau$ 比任意 $X$ 的拓扑 $\tau'$ 都要小, 即对于任意拓扑 $\tau'$ 满足 $\tau \sub \tau'$, 则称 $\tau$ 为 **最粗拓扑 (coarest topology)**.

### 定义 2.1.4 (拓扑基, 子基)

设 $(X, \tau)$ 为拓扑空间, 且 $\beta \sub \tau$ 为 $X$ 中一族开集, 则：

- 称 $\beta$ 为 $\tau$ 的 **拓扑基 (base / basis)**, 当任意开集 $O \in \tau$ 是 $\beta$ 中任意元素的并, 即 $\Forall{\text{开集 $O \in \tau$}} O = \ds \bigcup_{B \in \beta} B$.
- 称 $\beta$ 为 $\tau$ 的 **子基 (subbase / subbasis)**, 当任意开集 $O \in \tau$ 是 $\beta$ 中元素有限交的并, 即定义 $\ds \mathcal{S}_\beta \coloneqq \Set{ \bigcap_{i \in I}^n B_i : B_i \in \beta }$ 使得 $\Forall{\text{开集 $O \in \tau$}} O = \ds \bigcup_{s \in \mathcal{S}_\beta} s$.

### 注释

拓扑基, 子基类似于由集合生成的代数结构 (群, 环, 线性空间等) 一般, 可由一些 "基底" 中的元素生成出拓扑, 例如下面即将提及的 [度量拓扑](#例子_2.1.6_(度量拓扑)), [二元乘积拓扑空间](#例子_2.1.15_(二元乘积拓扑空间)) 都是一些可由基生成拓扑的例子.

### 引理 2.1.5 (拓扑基的识别)

设 $X$ 为任意集：

1. $X$ 中子集合的搜集 $\beta \sub \mathcal{P}(X)$ 若为 $\tau \sub \mathcal{P}(X)$ 的拓扑基 $\iff$ 以下条件任一成立：
   1. 对于 $X$ 中的任意点 $x \in X$ 至少含于 $\beta$ 中的一个元素中, 即存在 $B \sub \beta$ 使得 $x \in B \in \beta$;
   2. 对于任意 $B_1, B_2 \in \beta$ 且对于任意点 $x \in B_1 \cap B_2$, 存在 $B \in \beta$ 使得 $x \in B \sub B_1 \cap B_2$.
2. 若 $B \sub \tau$ 为 $X$ 中拓扑 $\tau$ 的子基 $\iff$ $\tau$ 是包含了 $B$ 的最粗拓扑.

### 例子 2.1.6 (度量拓扑)

设有度量空间 $(X, d)$, 且设 $X$​​ 的子集族为 $\tau_d = \set{U \sub X : \text{$U$ 是任意 $X$ 中开球的并}}$​​, 则：

- 称 $\tau_d$ 是 $X$ 上的一个拓扑, 或称 $\tau_d$ 为 $X$ 上由度量 $d$ 诱导出的 **度量拓扑 (metric topology)**;

- 而携带了度量拓扑的 $n$ 维笛卡尔空间 $\R^n$ 被称为 $n$ 维 **欧氏空间 (Euclidean space)**, 记为 $(\R^n, \tau_d)$;

- 度量空间中全体开球的集合显然为度量拓扑的拓扑基 $\beta$, 显然其定义为：
  $$
  \beta \coloneqq \set{ B_{x_i}(\epsilon_i) : x_i \in X, \epsilon_i \in \R^+ }
  $$
  因此每个开集 $U \in \tau_d$ 皆可表示为 $\beta$ 中元素的并, 即 $U$ 为 $X$ 中任意开球的并.

##### 证明

由于 $U$ 是任意开球的并集 $\iff U = \ds \bigcup_{x_0 \in U} B_{x_0}^{\circ}(\epsilon_{x_0})$ , 现在验证 $\tau_d$ 对 $X$ 满足了拓扑公理：

1. $\empty \in \tau_d$​ 是显然的, 而无穷多个开球的并显然就有 $\ds \bigcup_{x_0 \in X} B_{x_0}^{\circ}(\epsilon_{x_0}) = X \in \tau_d$​;

2. 显然任意多个开球的并 $U_1 \cup U_2 \cup \dots \cup U_n \in \tau_d$;

3. 若设有任意 $U_\alpha, U_\beta$, 需证明 $U_\alpha \cap U_\beta \in \tau_d$​​​, 那么：
   $$
   \begin{align}
   U_\alpha \cap U_\beta & = \left( \bigcup_{\alpha \in U} B_{x_\alpha}^{\circ}(\epsilon_{\alpha}) \right) \cap \left( \bigcup_{\beta \in U} B_{x'_\beta}^{\circ}(\epsilon'_{\beta}) \right) & [\text{分配律}] \\
   & = \bigcup_{\beta \in U} \left( \bigcup_{\alpha \in U} B_{x_\alpha}^{\circ}(\epsilon_{\alpha}) \right) \cap \left( B_{x'_\beta}^{\circ}(\epsilon'_{\beta}) \right) & [\text{分配律}] \\
   & = \bigcup_{\alpha, \beta \in U} \left( B_{x_\alpha}^{\circ}(\epsilon_{\alpha}) \cap B_{x'_\beta}^{\circ}(\epsilon'_{\beta}) \right) & [\text{命题 1.1.6}] \\
   & = \bigcup_{\alpha, \beta \in U} \bigcup_{x_{\alpha\beta} \in U} B_{x_{\alpha\beta}}^{\circ}(\epsilon_{x_{\alpha\beta}}) \in \tau_d & [\text{拓扑公理 (2)}] \\
   \end{align}
   $$

   对于其中的 $\epsilon_{x_{\alpha \beta}} = \min(\epsilon_\alpha - d(x_\alpha, y_\alpha), \epsilon_\beta - d(x_\beta, y_\beta))$​. 因此 $\tau_d$​ 是 $X$​​ 的一个拓扑.

### 例子 2.1.7 (空拓扑与点空间)

- 空集存在唯一的拓扑 $\tau_{\empty} \coloneqq \set{ \empty }$ 使得 $(\empty, \tau_{\empty})$ 构成拓扑空间, 称为 **空拓扑空间 (empty topological space)**;
- 独点集 $\set{1}$ 存在唯一拓扑 $\tau \coloneqq \set{ \empty, \set{1} }$ 使得 $* \coloneqq (\set{1}, \tau)$ 构成拓扑空间, 被称为 **点拓扑空间 (point topological space)**;
- 点拓扑空间事实上等价于 $\R^0$ 上的度量拓扑所构成的 $0$ 维欧氏空间.

### 例子 2.1.8 (两个元素的集合所构成的拓扑)

两个元素的集合 $\set{0, 1}$ 分别可对应至以下拓扑 $\tau$, 使得 $(\set{0, 1}, \tau)$ 构成拓扑空间：

- **余离散拓扑 (codiscrete topology)**：$\tau = \set{ \empty, \set{ 0, 1 } }$;
- **离散拓扑 (discrete topology)**：$\tau = \set{ \empty, \set{0}, \set{1}, \set{0, 1} }$;
- **谢尔宾斯基空间 (Sierpinski space)** 拓扑：$\tau = \set{ \empty, \set{1}, \set{0, 1} }$.

[例子 2.1.10](#例子_2.1.10_(离散与余离散拓扑)) 中将详细叙述关于离散/余离散拓扑的定义. 

### 例子 2.1.9 (三个元素的集合所构成的拓扑)

![img](TopologiesOn3ElementSet.png)

### 例子 2.1.10 (离散与余离散拓扑)

设有任意集合 $X$, 永远都存在两个极端情况使得 $X$ 与 $\tau \sub \mathcal{P}(X)$ 构成拓扑空间：

- 若定义 $\tau \coloneqq \mathcal{P}(X)$, 则称 $\tau$ 为 $X$ 的 **离散拓扑 (discrete topology)**, 且为 $X$ 的最细拓扑, 记为 $\op{Disc}(X)$;
- 若定义 $\tau \coloneqq \set{ \empty, X }$, 则称 $\tau$ 为 $X$ 的 **余离散拓扑 (codiscrete topology)**, 且为 $X$ 的最粗拓扑, 记为 $\op{CoDisc}(X)$.

### 例子 2.1.11 (余有限拓扑)

设有集合 $X$, 且定义 $X$ 的 **余有限拓扑 / 有限补拓扑 (cofinite topology / finite complement topology)** 为：
$$
\tau_{\text{cofin}} \coloneqq \set{ S \sub X : \text{$X \backslash S$ 为有限集} } \cup \set{ \empty }
$$
使得 $(X, \tau_{\text{cofin}})$ 构成余有限拓扑空间. 若 $X$ 本身是有限集, 则对于任意 $S \sub X$, 显然 $X \backslash S$ 必为有限集, 即 $\tau_{\text{cofin}} = \mathcal{P}(X)$, 因此 $\tau_{\text{cofin}}$ 与离散拓扑的定义是重合的.

### 注释 (从已有的拓扑空间构造出新的空间)

我们可以从已有的拓扑空间构造出新的空间, 例如以下这些即将提及的例子：

1. [不交并空间](#例子_2.1.12_(不交并空间));
2. [子空间](#定义_2.1.13_(子空间拓扑));
3. [商空间](#定义_2.1.14_(商拓扑空间));
4. [乘积空间](#例子_2.1.15_(二元乘积拓扑空间)).

并且于后续章节中我们可将以上这些例子对应到范畴论中, 并作为泛构造的特殊实例.

### 例子 2.1.12 (不交并空间)

对于任意拓扑空间所组成的集合族 $\set{ (X_i, \tau_i) }_{i \in I}$, 这些拓扑空间之间的不交并仍构成拓扑空间, 称为该集族的 **不交并空间 (disjoint union space)**, 即：
$$
\bigsqcup_{i \in I} (X_i, \tau_i) \coloneqq \left(\bigsqcup_{i \in I} X_i, \bigsqcup_{i \in I} \tau_i \right)
$$
特别地, 当 $I$ 是任意指标集, 那么则可以 "复制" 出 $|I|$ 份的点空间, 使得其等价于离散拓扑空间, 即：
$$
\bigsqcup_{i \in I} * = \op{Disc}(I)
$$

### 定义 2.1.13 (子空间拓扑)

设 $(X, \tau_X)$ 为拓扑空间, 考虑以下资料：

- 子集 $S \sub X$ (或视为 $\iota : S \hookrightarrow X$);
- $S$ 的拓扑定义为 $\tau_S \coloneqq \Set{ U_S \sub S : \Exists{U_X \in \tau_X} U_S = U_X \cap S }$.

则以下结论成立：

- 称 $(S, \tau_S)$ 为 $(X, \tau_X)$ 的 **拓扑子空间 (topological subspace)**.
- 称 $\iota$ 为 **包含映射 (inclusion map)**.
- 事实上这亦是 $\iota$ 的 **始拓扑 (initial topology)**, 将于后续章节展开讨论.

### 定义 2.1.14 (商拓扑空间)

设 $(X, \tau_X)$ 为拓扑空间, 考虑以下资料：

- $R_\sim \sub X \times X$ 为 $X$ 中的等价关系;
- 商集 $X / \sim$ 为以 $R_\sim$ 作等价关系的商集 (即是等价类的集合);
- 连续且满的映射 $\pi : X \to X/\sim$;
- $X / \sim$ 的拓扑记为 $\tau_{X/\sim}$;
- 满足条件 $\tau_{X/\sim} = \Set{ O \sub X/\op{\sim} : \pi^{-1}(O) \in \tau_{X} }$.

则以下结论成立：

- 资料 $(X/\sim, \tau_{X/\sim})$ 构成拓扑空间, 称为 **商空间 (quotient space)**, 且称其中的拓扑 $\tau_{X/\sim}$ 为 **商拓扑 (quotient topology)**.

- 称 $\pi$ 为 **典范投射 (canonical projection)** 或 **商映射 (quotient map)**, 换句话说 $\pi$ 为商映射当且仅当：
  $$
  \Forall{U \sub X/\sim} U \in \tau_{X/\sim} \iff \pi^{-1}(U) \in \tau_X
  $$

- 事实上这亦是投射 $\pi$ 的 **终拓扑 (final topology)**, 将于后续章节展开讨论.

### 例子 2.1.15 (二元乘积拓扑空间)

对于任意两个拓扑空间 $(X_1, \tau_{X_1})$ 以及 $(X_2, \tau_{X_2})$：

- 定义 $X_1 \times X_2$ 的拓扑基 $\beta \sub \tau_{X_1 \times X_2}$ 为 $\set{ U_1 \times U_2 : U_1 \in \tau_{X_1}, U_2 \in \tau_{X_2} }$;
- 定义拓扑 $\tau_{X_1 \times X_2}$ 为由 $\beta$ 所生成的, 即 $\ds \Set{ \bigcup_{U_1 \times U_2 \in \beta} (U_1 \times U_2) : U_1 \in \tau_{X_1}, U_2 \in \tau_{X_2} }$;
- 称 $(X_1 \times X_2, \tau_{X_1 \times X_2})$ 为 **二元乘积拓扑空间 (binary product topological space)**.

几何考量则如下图：

![img](ProductTopology.png)

当然我们可以将其推广至有限多个拓扑空间的乘积, 而对于无穷多个拓扑空间的乘积则没有那么简单, 需于后续章节中在引入 **拓扑空间范畴 (category of topological spaces)** 后以范畴论中的 **极限 (limits)** 进行讨论.

### 例子 2.1.16 (透过等价关系生成的商空间)

- 设有 $1$ 维欧氏空间 $\R$, 当然其便是以度量拓扑构成的拓扑空间, 那么若考虑其中的闭区间 $[0, 1] \sub \R$, 则构成 $\R$ 中的子空间;

- 若有乘积空间 $[0, 1] \times [0, 1]$, 如果将其考虑为一个二维平面上的闭矩形, 并且分别将对边 "粘贴" 在一起, 即定义关于对边的等价关系 $\sim$, 那么我们便可以基于该等价关系得出商空间 $([0, 1] \times [0, 1])/\sim$, 使得首先将同一方向的两条对边粘合后得到一个 **圆柱形 (cylinder)**, 再将该圆柱形另外两条对边进行粘合便得到 **环面 (torus)** 的模样, 即如下图：

  ![img](QuotientOfSquareIsCylinderAndTorus.png)

### 例子 2.1.17 (球面与圆盘)

对于任意 $n \in \N$：

- 欧氏空间 $\R^n$ 中的 **闭单位球 (closed unit ball)** 被称为 $n$ 维 **圆盘 (disk)**, 记为 $D^n$, 且定义为：
  $$
  D^n \coloneqq \Set{ \vec{x} \in \R^n : \sum_{i} (x^i)^2 \leq 1 } \sub \R^n
  $$
  使得 $D^n$ 与由 $\R^n$ 中度量拓扑诱导出的子空间拓扑构成拓扑空间;

- 欧氏空间 $\R^n$ 中的 $n-1$ 维 **球面 (sphere)** 同样与对应的子空间拓扑构成拓扑空间, 记为 $S^{n-1}$;

- 其中 $S^{-1} = \empty$ 为空拓扑空间, 且 $S^0 = * \sqcup *$ 点空间的为不交并空间, 由上述例子中得知其为离散拓扑空间;

- $i_n : S^{n-1} \hookrightarrow D^n$ 为 **边界 (boundary)** (或球面) 到圆盘的包含映射.

### 例子 2.1.18 (仿射空间中的 Zariski 拓扑)

### 例子 2.1.19 (交换环的素谱上的 Zariski 拓扑)

## 2.2. 闭集与闭包

### 定义 2.2.1 (闭集, 闭点, 闭包, 稠密集)

设 $(X, \tau)$ 为拓扑空间：

- 若子集 $S \sub X$ 被称为 **闭集 / 闭子集 (closed set / closed subset)** 当且仅当 $X \backslash S$ 是开集;

- 若单点集 $\set{ x } \sub X$ 是闭的, 则称 $x$ 其为 $X$ 的 **闭点 (closed point)**;

- 对于任意子集 $S \sub X$, 称包含了 $S$ 的最小闭集为 **闭包 (closure)**, 记为 $\op{Cl}(S)$ 或 $\overline{S}$, 具体定义为：
  $$
  \op{Cl}(S) \coloneqq \Bigcap{C \sub X\ \text{是闭集} \\ S \sub C} C
  $$

- 对于任意子集 $S \sub X$, 若 $\op{Cl}(S) = X$, 则称其为 $X$ 的 **稠密子集 (dense subset)**.

### 命题 2.2.2 (闭集的基本性质)

设有拓扑空间 $X$​, 那么由拓扑公理可推出 $X$ 的闭集满足：

1. $X, \empty$ 均为闭集;
2. 任意多个闭集的交集是闭集;
3. 有限多个闭集的并集是闭集.

##### 证明

1. 由于 $X, \empty$​ 亦为开集, 而开集的余集是闭集, 则有 $X \backslash X = \empty$​ 以及 $X \backslash \empty = X$​;

2. 由拓扑公理得 $\tau$ 中任意多个成员的并仍是开集, 即对于任意 $S_i \in \tau$, 有 $\bigcup_{i \in I} S_i \in \tau$, 透过应用德摩根定律有：
   $$
   X \big \backslash \bigcup_{i \in I} S_i =\bigcap_{i \in I} X \backslash S_i
   $$
   其中 $X \backslash S_i$ 是闭的, 因此任意多个闭之交仍是闭集.

3. 由拓扑空间公理得 $\tau$​​​ 中任二成员的交仍是开集, 即 $\forall A, B \in \tau, A \cap B \in \tau$, 透过应用德摩根定律得 $X \backslash (A \cap B) = X \backslash A \cup X \backslash B$​​​, 因此有限多个闭集的并仍是闭集.

### 命题 2.2.3 (闭集与闭包的联系)

设 $X$ 为拓扑空间, 子集 $S \sub X$, 则 $\text{$S$ 是闭集} \iff \op{Cl}(S) = S$.

##### 证明

$(\Rightarrow)$ 由于 $\operatorname{Cl}(S)$ 为包含了 $S$ 的最小闭集, 即对于任意其他闭集 $T \sub X$, 若有 $S \sub T$, 则 $\op{Cl}(S) \sub T$, 而由于 $S$ 为闭集, 取 $T = S$ 便有 $S \sub S$, 使得 $\op{Cl}(S) \sub S$ 成立, 反之按定义显然有 $S \sub \op{Cl}(S)$, 因此 $\op{Cl}(S) = S$ 成立.

$(\Leftarrow)$ 由于 $\op{Cl}(S)$ 是包含了 $S$ 的最小闭集, 若 $\op{Cl}(S) = S$, 显然 $S$ 必定是闭集, 因此命题成立.

### 命题 2.2.4 (闭包的等价定义)

设 $(X, \tau)$ 为拓扑空间且 $S \sub X$, 以及点 $x \in X$, 则 $x$ 含于包含了 $S$ 的闭包 $\op{Cl}(S)$ 当且仅当对于 $x$ 的任意开邻域 $U_x \sub X$ 均与 $S$ 相交, 即：
$$
x \in \op{Cl}(S) \iff \Forall{U_x \sub X\ \text{是开邻域}} U_x \cap S \neq \empty
$$

##### 证明

假设有点 $x_0 \in X$ 的任意开邻域 $U_{x_0}$, 由于其与 $S$ 之交非空, 意味着不存在 $X$ 中的开邻域 $U_{x_0}$ 使得 $U_{x_0}$ 与 $S$ 之交为空, 即是对于任意 $x \in U_{x_0}$ 都有 $x \notin S$, 因此显然 $x \in U_{x_0} \iff U_{x_0} \sub X \backslash S$, 即 $x \in \op{Cl}(S)$ 成立当且仅当：
$$
\Forall{U_{x_0} \sub X\ \text{是开邻域}} U_{x_0} \cap S \neq \empty \iff \neg\b{ \Exists{U_{x_0} \sub X\ \text{是开邻域}} U_{x_0} \cap S = \empty } \iff \neg \b{ \Exists{ U_{x_0} \sub X\ \text{是开邻域} \\ U_{x_0} \sub X \backslash S } x \in U_{x_0} }
$$
现在根据 $\op{Cl}(S)$, 闭集的定义以及德摩根对偶律, 则以下等式成立：
$$
\op{Cl}(S)
= \Bigcap{U \sub X\ \text{是闭集} \\ S \sub U} U
= \Bigcap{X \backslash U \sub X\ \text{是开集} \\ X \backslash U \sub X \backslash S} X \backslash (X \backslash U)
\overset{\text{德摩根律}}{=} X \bigg \backslash \b{ \Bigcup{X \backslash U \sub X\ \text{是开集} \\ X \backslash U \sub X \backslash S} X \backslash U }
$$

### 命题 2.2.5 (闭包的基本性质)

设 $X$ 为拓扑空间, 以及任意子集 $A, B \sub X$：

1. 空集的闭包仍为空：$\op{Cl}(\empty) = \empty$;
2. 闭包保有包含关系：$A \sub B \implies \op{Cl}(A) \sub \op{Cl}(B)$​;
3. $\op{Cl}(A \cup B) = \op{Cl}(A) \cup \op{Cl}(B)$;
4. $\op{Cl}(A \cap B) \sub \op{Cl}(A) \cap \op{Cl}(B)$;
5. 闭包的闭包仍等于其本身：$\op{Cl}(\op{Cl}(A)) = \op{Cl}(A)$.

##### 证明

1. 由于 $\op{Cl}(\empty)$ 为包含了 $\empty$ 的最小闭集, 显然包含了 $\empty$ 的最小闭集仍是 $\empty$.

2. $\ds \op{Cl}(A) = \Bigcap{U \sub X\ \text{是闭集} \\ A \sub U} U \sub \Bigcap{U' \sub X\ \text{是闭集} \\ A \sub B \sub U'} U' = \op{Cl}(B)$.

3. $(\Rightarrow)$ 由于有 $A \sub \op{Cl}(A)$ 以及 $B \sub \op{Cl}(B)$, 那么得 $A \cup B \sub \op{Cl}(A) \cup \op{Cl}(B)$, 且根据 [命题 2.2.2](#命题_2.2.2_(闭集的基本性质)) 的 $(3)$ 得知包含了 $A \cup B$ 的 $\op{Cl}(A) \cup \op{Cl}(B)$ 仍为闭集, 而 $\op{Cl}(A \cup B)$ 为包含了 $A \cup B$ 的最小闭集, 因此 $\op{Cl}(A \cup B) \sub \op{Cl}(A) \cup \op{Cl}(B)$ 成立.

   $(\Leftarrow)$ 由于有 $A \sub A \cup B$ 以及 $B \sub A \cup B$, 显然透过 $(2)$ 得 $\op{Cl}(A) \sub \op{Cl}(A \cup B)$ 以及 $\op{Cl}(B) \sub \op{Cl}(A \cup B)$, 那么则有 $\op{Cl}(A) \cup \op{Cl}(B) \sub \op{Cl}(A \cup B)$ 成立.

4. 类似于 $(3)$, 由于 $A \sub \op{Cl}(A)$ 以及 $B \sub \op{Cl}(B)$ 可得 $A \cap B \sub \op{Cl}(A) \cap \op{Cl}(B)$, 且根据 [命题 2.2.2](#命题_2.2.2_(闭集的基本性质)) 的 $(2)$ 得知 $\op{Cl}(A) \cap \op{Cl}(B)$ 仍为闭集, 而 $\op{Cl}(A \cap B)$ 为包含了 $A \cap B$ 的最小闭集, 因此 $\op{Cl}(A \cap B) \sub \op{Cl}(A) \cap \op{Cl}(B)$ 成立.

5. $\ds \op{Cl}(\op{Cl}(A)) = \Bigcap{U \sub X\ \text{是闭集} \\ \op{Cl}(A) \sub U} U = \Bigcap{U \sub X\ \text{是闭集} \\ A \sub \op{Cl}(A) \sub U} U = \op{Cl}(A)$.

### 命题 2.2.6 (有限多个并的闭包是闭包的并)

设 $X$ 为拓扑空间, 且 $\set{ U_i \sub X }_{i \in I}$ 为 $X$ 中的有限子集 ($I$ 为有限指标集), 则以下等式成立：
$$
\op{Cl} \b{ \bigcup_{i \in I} U_i } = \bigcup_{i \in I} \op{Cl}(U_i)
$$

##### 证明

这是 [命题 2.2.5](#命题_2.2.5_(闭包的基本性质)) 中 $(3)$ 的直接推论, 因为可将两个子集的并推广至有限多个子集的并.

## 2.3. 内部与边界

### 定义 2.3.1 (内部, 边界)

设 $(X, \tau)$ 为拓扑空间：

- 对于任意子集 $S \sub X$, 称包含了 $S$ 的最大开集为 **内部 (interior)**, 记为 $\op{Int}(S)$ 或 $\overset{\circ}{S}$, 具体定义为：
  $$
  \op{Int}(S) \coloneqq \Bigcup{O \sub X\ \text{是开集} \\ O \sub S} O
  $$

- 称 $S$ 的闭包 $\op{Cl}(S)$ 余 $S$ 的内部集 $\op{Int}(S)$ 为 $S$ 的 **边界 (boundary)**, 记为 $\part S$, 具体定义为：
  $$
  \part S \coloneqq \op{Cl}(S) \backslash \op{Int}(S)
  $$

### 引理 2.3.2 (闭包与内部的对偶性)

设 $X$ 为拓扑空间以及子集 $S \sub X$, 则以下关于闭包与内部的对偶等式成立：

1. $X \backslash \op{Int}(S) = \op{Cl}(X \backslash S)$;
2. $X \backslash \op{Cl}(S) = \op{Int}(X \backslash S)$.

##### 证明

1. $$
   X \backslash \op{Int}(S) = X \bigg \backslash \b{ \Bigcup{U \sub X\ \text{是开集} \\ U \sub S} U } = \Bigcap{X \backslash U \sub X\ \text{是闭集} \\ X \backslash S \sub X \backslash U} X \backslash U = \op{Cl}(X \backslash S)
   $$

2. $$
   X \backslash \op{Cl}(S) = X \bigg \backslash \b{ \Bigcap{U \sub X\ \text{是闭集} \\ S \sub U} U } = \Bigcup{X \backslash U \sub X\ \text{是开集} \\ X \backslash U \sub X \backslash S} X \backslash U = \op{Int}(X \backslash S)
   $$

### 例子 2.3.3 ($\R$ 中开/闭区间的闭包, 内部与边界)

设有欧氏空间 $(\R, \tau_d)$ 以及点 $a < b \in \R$, 则：

- 开区间 $(a, b) \sub \R$ 的闭包为 $\op{Cl}((a, b)) = [a, b] \sub \R$, 因为 $(a, b)$ 的闭包为包含了它的最小闭集, 即 $(a, b)$;
- 闭区间 $[a, b] \sub \R$ 的闭包为 $\op{Cl}([a, b]) = [a, b] \sub \R$, 因为 $[a, b]$ 已是包含了自身的最小闭集;
- 开区间 $(a, b) \sub \R$ 的内部为 $\op{Int}((a, b)) = (a, b) \sub \R$, 因为 $(a, b)$ 已是包含了自身的最大开集;
- 闭区间 $[a, b] \sub \R$ 的内部 $\op{Int}([a, b]) = (a, b) \sub \R$, 因为 $[a, b]$ 的内部为包含了它的最大开集, 即 $(a, b)$;
- $\R$ 中闭区间的两侧端点便是边界, 即 $\part[a, b] = \set{a} \cup \set{b}$, 而开区间的边界为空, 即 $\part(a, b) = \empty$.

### 命题 2.3.4 (闭子空间中的收敛性)

设 $(X, \tau_d)$ 为由度量空间 $(X, d)$ 透过度量拓扑诱导出的拓扑空间, 且有子集 $V \sub X$, 则下述命题等价：

1. $V \sub X$ 为闭子空间;
2. 若任意序列 $x_i \in V \sub X$ 皆收敛于点 $x_\infin \in X$, 则 $x_{\infin} \in V \sub X$ 成立.

##### 证明

$(1) \Rightarrow (2)$ 假设 $V \sub X$ 是闭的且存在 $x_\infin \in X$ 使得有 $x_i \overset{i \to \infin}{\to} x_\infin$, 则需证明 $x_\infin \in V$ 成立：

透过反证法, 若设 $x_\infin \in X \backslash V$, 根据定义得知闭集的补 $X \backslash V \in \tau_d$ 为开集, 而根据度量空间中开集的定义, 对于任意点 $x \in X$, 则存在 $\epsilon > 0$ 使得包含了 $x$ 的开球 $B^\circ_{x}(\epsilon) \sub X \backslash V$, 而由于 $x_i$ 是收敛于 $X$ 中的, 按定义则推得：
$$
x_i \overset{i \to \infin}{\to} x_\infin \iff \Forall{\epsilon \in \R \\ \epsilon > 0} \Exists{n \in \N} \Forall{i \in \N \\ i > n} d(x_i, x_\infin) < \epsilon
\iff \Forall{\epsilon \in \R \\ \epsilon > 0} \Exists{n \in \N} \Forall{i \in \N \\ i > n} x_i \in B^\circ_{x_i}(\epsilon)
$$
因此当 $x_i$ 收敛于 $x_\infin \in X$ 时, $x_i$ 后续的无穷多项含于开球 $B^\circ_{x_i}(\epsilon)$ 中, 即有 $x_i \in B^\circ_{x_i}(\epsilon) \sub X \backslash V$, 因此便与 $x_i \in V$ 产生矛盾, 使得命题成立.

$(2) \Rightarrow (1)$ 假设对任意序列 $x_i$ 皆有 $x_i \overset{i \to \infin}{\to} x_\infin$ 使得 $x_\infin \in V \sub X$ 成立, 则需证明 $V \sub X$ 为闭子空间：

由于 $V \sub X$ 是闭的当且仅当 $X \backslash V$ 为开集, 根据度量空间中开集的定义, 则存在 $\epsilon > 0$ 使得包含了 $x$ 的开球 $B^\circ_{x}(\epsilon) \sub X \backslash V$. 而透过反证法假设该 $\epsilon$ 不存在, 则意味着对于任意 $k \in \N$ 且 $k \geq 1$, 开球 $B^\circ_{x}(1/k)$ 与 $V$ 之交非空, 使得有点 $x_k \in B^\circ_x(1/k) \cap V$, 而由于随着 $k$ 的增大 $1/k$ 将收敛于开球中的原点 $x$, 因此 $x \in V$ 与 $x \in B^\circ_x(\epsilon) \sub X \backslash V$ 产生矛盾, 使得 $V \sub X$ 为闭空间成立.

### 引理 2.3.5 (闭子空间中的子集是闭集当且仅当其于整个拓扑空间上是闭的)

设 $(X, \tau)$ 为拓扑空间, 闭集 $C \sub X$ 以及由 $C$ 构成的闭子空间 $(C, \tau_{\text{sub}})$, 若子集 $S \sub C$ 是 $(C, \tau_{\text{sub}})$ 中的闭集 $\iff$ $S$ 是 $(X, \tau)$ 的闭集.

##### 证明

$(\Rightarrow)$ 若子集 $S$ 于闭子空间 $(C, \tau_{\text{sub}})$ 下是闭集, 即存在开集 $V \sub \tau_{\text{sub}}$ 使得 $S = C \backslash V$, 根据子空间拓扑的定义, 存在某个 $(X, \tau)$ 中的开集 $U \in \tau$, 使得 $V = U \cap C$, 那么则意味着有：
$$
S = C \backslash V = C \backslash (U \cap C) = C \backslash U \tag{1}
$$
而从条件已得知 $C$ 为 $(X, \tau)$ 的闭集, 即存在开集 $W \in \tau$ 使得 $C = X \backslash W$, 那么再代入上式得：
$$
S \overset{(1)}{=} C \backslash U = (X \backslash W) \backslash U \overset{A \backslash B = A \cap (X \backslash B)}{=} (X \backslash W) \cap (X \backslash U) \overset{德摩根律}{=} X \backslash (W \cup U)
$$
那么 $W, U$ 均为 $(X, \tau)$ 中开集, 根据定义 $W \cup U$ 仍为开集, 显然 $S = X \backslash (W \cup U)$ 便是 $(X, \tau)$ 中的闭集.

$(\Leftarrow)$ 若 $S \sub C$ 为 $(C, \tau_{\text{sub}})$ 中的闭集, 当且仅当 $C \backslash S \in \tau_{\text{sub}}$, 那么根据子空间拓扑的定义应证明 $\Exists{U \in \tau} C \backslash S = U \cap C$：

由于 $S$ 本身为 $(X, \tau)$ 中的闭集, 意味着存在开集 $U \in \tau$ 使得 $S = X \backslash U \sub C$, 而将 $S$ 代入 $C \backslash S$ 则有：
$$
C \backslash S = C \backslash (X \backslash U) \overset{A \backslash B = A \cap (X \backslash B)}{=} C \cap (X \backslash (X \backslash U)) = C \cap U
$$
显然由于 $U$ 为 $X$ 中的开集, 因此便存在 $U \in \tau$ 使得 $C \backslash S = U \cap C$ 成立.

## 2.4. 不可约的闭子空间与 Frame 同态

### 定义 2.4.1 (不可约的闭子空间)

设 $X$ 为拓扑空间, 闭集 $S \sub X$, 若 $S$ 被称为 **不可约的 (irreducible)** 当其非空且不能被划分为任意两个真闭集 (即更小的子集) 的并, 即具体定义为：
$$
\text{闭集 $S \sub X$ 不可约} \coloneqq (S \neq \empty) \and \b{ \Forall{S_1, S_2 \sub X \\ S_1, S_2\ \text{均为闭子空间}} (S = S_1 \cup S_2) \implies (S_1 = S) \or (S_2 = S) }
$$

### 例子 2.4.2 (闭点的闭包是不可约的)

对于任意在拓扑空间 $X$ 上的点 $x \in X$, 则单点集 $\set{x} \sub X$ 的闭包 $\op{Cl}(\set{x})$ 是不可约的, 因为由 [命题 2.2.3](#命题_2.2.3_(闭集与闭包的联系)) 得知 $\op{Cl}(\set{x}) = \set{x}$ 为包含了自身的最小闭集, 因此没有更小的闭集可划分.

### 例子 2.4.3 (度量空间中没有非平凡的不可约闭子空间)

- 设 $(X, \tau_d)$ 为由度量空间 $(X, d)$ 透过度量拓扑诱导出的拓扑空间, 则任意点 $x \in X$ 都是闭的 (即定义中称 $x$ 为闭点), 因此由 [例子 2.4.2](#例子_2.4.2_(闭点的闭包是不可约的)) 得知任意单点集 $\set{x} \sub X$ 都是不可约的.
- 若设 $\R$ 为携带了度量拓扑的欧氏空间, 则对于任意 $a < c \in \R$ 的闭区间 $[a, c] \sub \R$ 是可被约的, 因为对于任意其他点 $b \in \R$ 且满足 $a < b< c$ 我们总能够将该闭区间划分为 $[a, c] = [a, b] \cup [a, c]$.

### 命题 2.4.4 (不可约闭集的等价定义)

设 $(X, \tau)$ 为拓扑空间且令 $P \in \tau$ 为 $X$ 的真开集, 且设 $F \coloneqq X \backslash P$ 为非空闭子空间, 则以下命题成立：
$$
\text{$X \backslash P$ 不可约} \iff \b{ \Forall{U_1, U_2 \in \tau} (U_1 \cap U_2 \sub P) \implies ((U_1 \sub P) \or (U_2 \sub P)) }
$$
满足了该性质的开集 $P \sub X$ 亦被称为是 $\tau$ 的 **素开集 (prime open sets)**.

##### 证明

由于 $F$ 为闭子空间, 则存在 $U_i \in \tau$ 使得其中的任意闭集皆可表示为 $F_i = F \backslash U_i \sub F$, 若 $F$ 不可约, 则对于任意其他的闭子空间 $F_1, F_2 \sub X$, 我们有：
$$
\begin{align}
F_1 \cup F_2 & = (F \backslash U_1) \cup (F \backslash U_2) \\
& = ((X \backslash P) \backslash U_1) \cup ((X \backslash P) \backslash U_2) & [F \coloneqq X \backslash P] \\
& = ((X \backslash P) \cap (X \backslash U_1)) \cup ((X \backslash P) \cap (X \backslash U_2)) & [A \backslash B = A \cap (X \backslash B)] \\
& = (X \backslash (P \cup U_1)) \cup (X \backslash (P \cup U_2)) & [\text{德摩根律}] \\
& = X \backslash ((P \cup U_1) \cap (P \cup U_2)) & [\text{同上}] \\
& = X \backslash (P \cup (U_1 \cap U_2)) & [\text{同上}] \\
& = X \backslash P & [U_1 \cap U_2 \sub P] \\
& = F
\end{align}
$$
根据 $F$ 不可约的定义则从 $F_1 \cup F_2 = F$ 推得条件 $F_i = F$, 而该条件与 $U_i \sub P$ 亦是等价的, 因为：
$$
F_i = F \backslash U_i = X \backslash (P \cup U_i) \overset{U_i \sub P}{=} X \backslash P = F
$$
使得 $F_i = F \iff U_i \sub P$ 成立.

### 注释

接下来所介绍的 frame 同态亦可作为不可约闭空间的等价定义, 直觉上把拓扑空间 $(X, \tau_X)$ 定义中的点集 $X$ 遗忘, 只剩下其拓扑 $\tau_X$, 则该拓扑可以作为 **frame** 特例, 那么再假设有另一拓扑空间 $(Y, \tau_Y)$, 同样将 $Y$ 遗忘后则可对它们拓扑之间建立映射 $\tau_X \to \tau_Y$, 该映射则被称为 **frame 同态 (frame homomorphism)**, 不过更详尽关于这个概念的内容需在后续介绍完分离公理再进行讨论.

### 定义 2.4.5 (Frame 同态)

设 $(X, \tau_X)$ 与 $(Y, \tau_Y)$ 为拓扑空间, 且定义开集族 (拓扑) 之间的函数 $\phi : \tau_X \to \tau_Y$, 则该函数被称为 **frame 同态 (frame homomorphism)**, 若其满足以下条件：

1. 保有任意多的并, 即对任意指标集 $I$, 若有 $\set{U_i \in \tau_X}_{i \in I}$, 满足了：
   $$
   \phi\b{ \bigcup_{i \in I} U_i } = \bigcup_{i \in I} \phi(U_i) \in \tau_Y
   $$

2. 保有有限多的交, 即对任意指标集 $J$, 若有 $\set{U_i \in \tau_X}_{i \in I}$, 满足了：
   $$
   \phi\b{ \bigcap_{j \in J} U_j } = \bigcap_{j \in J} \phi(U_j) \in \tau_Y
   $$

### 命题 2.4.6 (Frame 同态保有集合包含关系)

设有任意拓扑空间 $(X, \tau_X)$ 与 $(X, \tau_Y)$ 以及 frame 同态 $\phi : \tau_X \to \tau_Y$, 若有 $U_1 \sub U_2 \in \tau_X$, 则 $\phi(U_1) \sub \phi(U_2) \in \tau_Y$.

##### 证明

由于有 $U_1 \sub U_2 \iff U_1 \cup U_2 = U_2$ 以及 $U_1 \sub U_2 \iff U_1 \cap U_2 = U_1$, 则：

- 保有任意多个并下的包含关系：$\phi(U_1) \sub \phi(U_1) \cup \phi(U_2) = \phi(U_1 \cup U_2) = \phi(U_2)$;
- 保有有限多个交下的包含关系：$\phi(U_1) = \phi(U_1 \cap U_2) = \phi(U_1) \cap \phi(U_2) \sub \phi(U_2)$.

### 例子 2.4.7 (连续函数的原像是 Frame 同态)

设 $(X, \tau_X)$ 以及 $(Y, \tau_Y)$ 为拓扑空间, 基础集上的函数 $f : X \to Y$, 那么若我们定义 $\phi \coloneqq f^{-1}$, 则有幂集之间的映射：
$$
f^{-1} : \mathcal{P}(Y)|_{\tau_Y} \to \mathcal{P}(X)|_{\tau_X}
$$
并且分别限制于 $\tau_X \sub \mathcal{P}(X)$ 以及 $\tau_Y \sub \mathcal{P}(Y)$ 中, 现在我们再引入一个额外的条件, 即需判断 $Y$ 中的开集的原像的确为 $X$ 中的开集, 那么便得到了从拓扑空间 $(X, \tau_X)$ 到  $(Y, \tau_Y)$ 的 **连续函数 (continuous functions)**, 即 $f : (X, \tau_X) \to (Y, \tau_Y)$, 那么便使得 $f^{-1} : \tau_Y \to \tau_X$ 构成 frame 同态.

### 命题 2.4.8 (不可约闭集等价于 Frame 同态映射至单点拓扑上)

设 $(X, \tau)$ 为拓扑空间以及 $* \coloneqq (\set{1}, \tau_* = \set{ \empty, \set{1} })$ 为点拓扑空间, 则有从 $(X, \tau)$ 的不可约闭子空间到所有从 $\tau_X$ 到 $\tau_*$ 的 frame 同态的自然双射, 具体即为：
$$
\Map{\simeq}{\op{FrameHom}(\tau_X, \tau_*)}{\op{IrrClSub}(X)}{\phi}{X \backslash (U_\empty(\phi))}
$$
其中定义 $U_{\empty}(\phi)$ 为所有 $U \in \tau_X$ 中元素的并使得 $\phi(U) = \empty$, 即：
$$
U_{\empty}(\phi) \coloneqq \Bigcup{U \in \tau_X \\ \phi(U) = \empty} U
$$

##### 证明

假设该映射为 $f$, 那么我们分别需要证明 $f$ 在 $\op{FrameHom}(\tau_X, \tau_*)$ 中选取的元素无关以及 $X \backslash (U_\empty(\phi))$ 的确为不可约闭子空间, 然后再确定 $f$ 为双射, 即：

- $\phi$ 的良定性, 即需证明 $\Forall{U_1, U_2 \in \tau_X} (U_1 = U_2) \implies (\phi(U_1) = \phi(U_2))$：

  显然由于从 [命题 2.4.6](#命题_2.4.6_(Frame 同态保有集合包含关系)) 得知 $U_1 = U_2$ 可拆为 $U_1 \sub U_2$ 以及 $U_2 \sub U_1$, 因此显然 $\phi(U_1) \sub \phi(U_2)$ 以及 $\phi(U_2) \sub \phi(U_1)$ 使得命题成立.

- $\phi$ 构成 frame 同态, 假设有不可约闭集 $X \backslash U_0$, 定义 $\phi : U \mapsto \cases{\empty & 若 $U \sub U_0$ \\ \set{1} & 其他}$, 即分别需证明：

  - $\phi$ 保有任意多的并, 即 $\ds \phi\b{\bigcup_{i \in I} U_i} = \bigcup_{i \in I} \phi(U_i)$：

    - 由于 $\ds \phi\b{\bigcup_{i \in I} U_i} = \empty$ 当且仅当 $\ds \bigcup_{i \in I} U_i \sub U_0$, 而当任意多的并皆属于 $U_0$ 则意味着有 $U_i \sub U_0$, 因此根据 $\phi$ 的定义有 $\phi(U_i) = \empty$, 使得等式成立：
      $$
      \bigcup_{i \in I} \phi(U_i) = \bigcup_{i \in I} \empty = \empty = \phi \b{ \bigcup_{i \in I} U_i }
      $$

    - 由于 $\ds \phi\b{\bigcup_{i \in I} U_i} = \set{ 1 }$ 当且仅当 $\ds \bigcup_{i \in I} U_i$ 不为 $U_0$ 的子集, 即 $\bigcup_{i \in I} U_i \sub X \backslash U_0$, 同样有 $U_i \sub X \backslash U_0$ 使得 $\phi(U_i) = \set{1}$, 使得等式成立：
      $$
      \bigcup_{i \in I} \phi(U_i) = \set{1} = \phi\b{ \bigcup_{i \in I} U_i }
      $$

  - $\phi$ 保有有限多的交, 即 $\Forall{U_1, U_2 \in \tau_X} \phi(U_1 \cap U_2) = \phi(U_1) \cap \phi(U_2)$：

    - 由于 $\phi(U_1 \cap U_2) = \empty$ 当且仅当 $U_1 \cap U_2 \sub U_0$, 根据下方即将证明的命题可得 $U_1 \sub U_0$ 或 $U_2 \sub U_0$, 便使得 $\phi(U_1) = \empty$ 或 $\phi(U_2) = \empty$, 显然 $\phi(U_1) \cap \phi(U_2) = \empty = \phi(U_1 \cap U_2)$ 成立.
    - 由于 $\phi(U_1 \cap U_2) = \set{1}$ 当且仅当 $U_1 \cap U_2$ 不含于 $U_0$ 中, 即 $U_1$ 或 $U_2$ 不能含于 $U_0$ 中, 因此有 $\phi(U_1) = \set{1}$ 以及 $\phi(U_2) = \set{1}$, 使得 $\phi(U_1) \cap \phi(U_2) = \empty = \phi(U_1 \cap U_2)$ 成立.

- $X \backslash(U_\empty(\phi))$ 为不可约闭子空间, 根据 [命题 2.4.4](#命题_2.4.4_(不可约闭集的等价定义)) 的等价定义即需证明 $\Forall{U_1, U_2 \in \tau_X} (U_1 \cap U_2 \sub U_\empty(\phi)) \implies ((U_1 \sub U_\empty(\phi)) \or (U_2 \sub U_\empty(\phi)))$：

  由于从条件 $U_1 \cap U_2 \sub U_\empty(\phi) = \Bigcup{U \in \tau_X \\ \phi(U) = \empty} U$ 中, 根据拓扑公理可得知 $U_1 \cap U_2 \in \tau_X$, 而：
  $$
  \phi(U_1 \cap U_2) \overset{\text{Frame 同态保有有限多的交}}{=} \phi(U_1) \cap \phi(U_2) \in \tau_* = \set{ \empty, \set{1} }
  $$
  即 $\phi(U_1)$ 与 $\phi(U_2)$ 之交为空, 那么则意味着有 $\phi(U_1) = \empty$ 或 $\phi(U_2) = \empty$, 那么则推得 $U_1 \sub U_\empty(\phi)$ 或 $U_2 \sub U_\empty(\phi)$ 成立.

- $f$ 为双射：显然 $X \backslash (U_\empty(\phi))$ 是由 $\phi$ 所取定的, 因此 $f$ 为一一对应的.

{% end %}