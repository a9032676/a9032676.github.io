+++
title = "群论中的特殊构造 - 群作用, 轨道与稳定化子"
date = 2024-01-15
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

## 前言

其中一种构造更为抽象的群的方式是由它在某集合上的作用所描述, 因此有必要引入关于此的讨论.

首先, 我们知道任意幺半群 $M$ 与仅有单对象的范畴是等价的, 准确的说, 我们有以下 **消圈 (delooping)**, 即为从 $\Mon$ 到 $\Cat$ 的函子 (其中 $\text{Mon}$ 为所有幺半群的范畴, $\Cat$ 为所有 $1$-范畴 的范畴)：
$$
\MMap
{B(-)}{& & \Mon}{\Cat}
{\text{对象层面的映射:} & & M}{BM \coloneqq \bb{ \begin{aligned} \Ob{BM} & \coloneqq * \\ \Hom{BM}{*}{*} & \coloneqq \set{ \text{任意 $M$ 中元素} } \\ \text{单位态射 $1_{BM}$} & \coloneqq \text{$M$ 的单位元} \\ \text{态射合成 $\circ$} & \coloneqq \text{$M$ 的二元运算 $\cdot$} \end{aligned}} }
{\text{态射层面的映射:} & & \bb{M_1 \overto{f} M_2} }{ \bb{ \begin{aligned} BM_1 & \overto{Bf} BM_2 \\ * & \mapsto * \\ \bb{ * \overto{m_1 \in M_1} * } & \mapsto \bb{ * \overto{m_2 \in M_2} * } \end{aligned} } }
$$

事实上在 $B(-)$ 下, $M$ 与 $BM$ 是等价的. 类似地上述结论只要将替换为从群范畴 $\Grp$ 到群胚范畴 $\Grpd$ 的函子 (群胚即是其中的所有态射皆可逆的范畴), 则同样可得到任意群 $G$ 与单对象群胚 $BG$ 是等价的, 因此当我们研究幺半群 $M$ (或群 $G$) 于集合上的作用时, 可以转而考虑函子范畴 $\Sets^{BM}$ (或 $\Sets^{BG}$). 而于 $\Sets^{BM}$ 下的任意态射皆为自然变换, 那么考虑以下资料：

- 函子 $F_1, F_2 : BM \to \Sets$ 及自然变换 $\eta : F_1 \rArr F_2$;
- 任意于 $BM$ 下的态射 $m : * \to *$ (即 $m \in M$);
- 令 $X \coloneqq F_1(*)$ 而 $Y \coloneqq F_2(*)$;

则可诱导出自然方块 $\vcenter{\xymatrix{
X \ar@{->}[r]^{\eta_*} \ar@{->}[d]_{m} & Y \ar@{->}[d]^{m} \\
X \ar@{->}[r]_{\eta_*} & Y
}}$ 于 $\Sets$ 中是交换的, 因此我们称：

- 上述交换图表中的构件 $\eta_* : X \to Y$ 为 **等变映射 (equivariant function)**, 即它满足了 $\Forall{m \in M} \Forall{x \in X} m \cdot \eta_*(x) = \eta_*(m \cdot x)$.
- 当然只要等变映射 $X \underset{g}{\overset{f}{\rightleftarrows}} Y$ 满足 $g \circ f = 1_X$ 及 $f \circ g = 1_Y$ 则可定义它们之间的同构.

现在只须使用 $2$-元组 编码等变映射中的条件, 例如视标准形 $m \cdot x$ 为映射 $\Map{\alpha}{M \times X}{X}{(m, x)}{m \cdot x}$ 下的像, 我们就称携带了 $M$-作用 $\alpha$ 的资料 $(X, \alpha)$ 为 **$M$-集 ($M$-set)**. 而以 $M$-集 为对象, 等变映射为态射, 则可构成这些所有 $M$-集 的范畴, 记为 $M \text{-} \Sets$. 最终则可建立起 $M \text{-} \Sets$ 与 $\Sets^{BM}$ 的范畴等价：
$$
\MMap
{\sim}{& & \Sets^{BM}}{M \text{-} \Sets}
{\text{对象层面的映射:} & & \bb{ BM \overto{\text{函子 $F$}} \Sets} }{ (X, \alpha) = (F(*), \alpha) }
{\text{态射层面的映射:} & & \bb{ F_1 \overset{\text{自然变换 $\eta$}}{\rArr} F_2 } }{ \bb{ (X, \alpha_1) \overto{\text{等变映射 $\eta_*$}} (Y, \alpha_2) } }
$$
综上所述, 我们得到了幺半群/群作用于范畴化后的剖析, 遂自然地引出以下定义.

## 1. 幺半群与群作用

### 定义 1.1 (幺半群作用)

设 $X$ 为集合而 $M$ 为幺半群：

- 称映射 $\Map{\alpha}{M \times X}{X}{(m, x)}{m \cdot x}$ 为 $M$ 于 $X$ 上的 **左作用 (left-action)**, 当满足了下述条件：

  - **单位元左作用**：单位元 $1 \in M$ 的左作用是恒同映射, 即 $\Forall{x \in X} 1 \cdot x = x$;
  - **左结合律**：$\Forall{m_1, m_2 \in M} \Forall{x \in X} (m_2 m_1) \cdot x = m_2 \cdot (m_1 \cdot x)$.

  而若满足 $\Forall{m \in M} \Forall{x \in X} \alpha(m, x) = x$ 的作用则称为 **平凡左作用 (trivial left-action)**.

- 称映射 $\Map{\alpha}{X \times M}{X}{(x, m)}{x \cdot m}$ 为 $M$ 于 $X$ 上的 **右作用 (right-action)**, 当满足了下述条件：

  - **单位元右作用**：单位元 $1 \in M$ 的右作用是恒同映射, 即 $\Forall{x \in X} x \cdot 1 = x$;
  - **右结合律**：$\Forall{m_1, m_2 \in M} \Forall{x \in X} x \cdot (m_1 m_2) = (x \cdot m_1) \cdot m_2$.

  而若满足 $\Forall{m \in M} \Forall{x \in X} \alpha(x, m) = x$ 的作用则称为 **平凡右作用 (trivial right-action)**.

### 注释

- 编码为标准形之前, 左作用的条件是以下这样子的 (右作用亦然)：
  - **单位元左作用**：$\Forall{x \in X} \alpha(1, x) = x$;
  - **左结合律**：$\Forall{m_1, m_2 \in M} \Forall{x \in X} \alpha(m_2 m_1, x) = \alpha(m_2, \alpha(m_1, x))$.
- 严格地说, 由于 $BM$ 的态射集为集合 $M$, 因此其为 $\mathcal{U}$-小范畴, 同理我们应该限制 $M \text{-} \Sets$ 到宇宙 $\mathcal{U}$ 里.
- 注意到所有 $M$ 的左作用的范畴是 $M \text{-} \Sets$, 而 $M$ 的右作用于范畴论的观点下无非就是反幺半群 $M^\oppos$ 下的左作用, 即 $M^\oppos \text{-} \Sets = \Sets^{B(M^\oppos)}$.
- 只要将上述的幺半群 $M$ 全部替换为 $G$, 则得到了群作用的概念, 不再重复定义.

### 例子 1.2 (基本的例子)

- 对任意集合 $X$, 对称群 $S_X$ 作用于 $X$ 上, 即 $\Map{\alpha}{S_X \times X}{X}{(\sigma, x)}{\sigma(x)}$, 这是最为经典的例子.

- 将二面体群 $D_{2n}$ 作用于平面上的正 $n$ 边形我们可以描述关于它的刚体运动, 例如顺时针旋转与镜面翻转.

- $n \times n$ 实矩阵所构成的幺半群 $M_n(\R)$ 作用于 $\R^n$ 上, 我们视 $\R^n$ 的元素为 $n \times 1$ 矩阵, 作用 $\Map{\alpha}{M_n(\R) \times \R^n}{\R^n}{(A, x)}{Ax}$ 无非就是矩阵乘法.

- 若群 $G$ 左作用于 $X$, 且 $Y$ 是任意集合, 那么 $G$ 在 $\Set{ X \overto{\text{映射 $f$}} Y }$ 上亦有自然的左作用 $\Map{\alpha}{G \times \Hom{\Sets}{X}{Y}}{\Hom{\Sets}{X}{Y}}{(g, f)}{\bb{x \mapsto f(g^{-1} x)}}$;

  同样地若 $G$ 右作用于 $X$, 则相应的左作用可以取为 $\Map{\alpha}{\Hom{\Sets}{X}{Y} \times G}{\Hom{\Sets}{X}{Y}}{(f, g)}{\bb{ x \mapsto f(x g) }}$.

### 例子 1.3 ($G$-模)

设 $G$ 是群, 我们甚至是可以作用在一个阿贝尔群 $A$ 上, 例如定义 $\Map{\varphi}{G \times A}{A}{(g, x)}{g \cdot x}$, 那么称资料 $(M, \varphi)$ 为 **左 $G$-模 ($G$-module)** 当其满足以下条件：

- **单位元左作用**：单位元 $1 \in G$ 的左作用是恒同映射, 即 $\Forall{x \in A} 1 \cdot x = x$;
- **左结合律**：$\Forall{g_1, g_2 \in G} \Forall{x \in A} (g_2 g_1) \cdot x = g_2 \cdot (g_1 \cdot x)$;
- **左分配律**：$\Forall{g \in G} \Forall{x_1, x_2 \in A} g(x_1 + x_2) = gx_1 + gx_2$.

### 例子 1.4 (作用于范畴中的对象)

...

### 定义 1.5 (不动点, 轨道与稳定化子)

设 $M$ 为幺半群作用于集合 $X$, 则：

- 定义 **不动点集 (fixed point set)** 为 $X^M \coloneqq \Set{x \in X : \Forall{m \in M} mx = x} \sub X$;
- 特别地如果被某一个 $m$ 所固定的不动点集则定义为 $X_m \coloneqq \Set{x \in X : mx = x} \sub X^M$;
- 对任意 $x \in X$, 称集合 $Mx \coloneqq \set{ mx : m \in M }$ 为 **轨道 (orbit)**, 或记为 $\Orb_M(x)$, 且称 $x$ 为该轨道的代表元, 而 $Mx$ 是 $X$ 的 $M$-子集;
- 称 $M$ 中的子幺半群 $\Stab_M(x) \coloneqq \set{ m \in M : mx = x }$ 为 $M$ 的 **稳定化子 (stabilizer)** 或 **稳定子群 (stability subgroup)**.

### 例子 1.6 (置换群作用于有限集)

举例而言, 考虑有限集 $X = \set{ 1,2,3,4,5,6 }$ 及作用于 $X$ 上的置换群 $G = \set{ 1_G, (12)(3456),(35)(46), (12)(3654) } \simeq \Z_4$, 则：

- $G$ 中所有置换的不动点集分别为：
  $$
  X_1 = X, \qquad X_{(35)(46)} = \set{ 1, 2 }, \qquad X_{(12)(3456)} = X_{(12)(3654)} = \empty
  $$
  由此见得在不动点集 $X_{\sigma \in G}$ 中的元素都是没有被置换 $\sigma$ 所移动过的.

- $X_G$ 显然为空, 因为已经存在一些置换, 例如 $(12)(3456)$ 与 $(12)(3654)$ 移动了所有 $X$ 中的元素.

- $X$ 的轨道只有两个, 它们分别为：
  $$
  \begin{array}{cc}
  G1 = G2 = \set{ 1, 2 } \\
  G3 = G4 = G5 = G6 = \set{ 3, 4, 5, 6 }
  \end{array}
  $$
  这事实上是在每一个轨道 $Gx$ 上, 将 $G$ 中所有元素作用于代表元 $x$ 并消除重复项后的结果.

- $G$ 中所有置换的稳定化子分别为：
  $$
  \begin{array}{cc}
  \Stab_G(1) = \Stab_G(2) = \set{ 1_G, (35)(46) } \\
  \Stab_G(3) = \Stab_G(4) = \Stab_G(5) = \Stab_G(6) = \set{ 1_G }
  \end{array}
  $$
  可见稳定化子的含义是稳定 (或固定) 住某些 $X$ 中元素的置换 $\sigma \in G$, 例如上述的 $1_G$ 与 $(35)(46)$ 作用于元素 $1, 2$ 上皆不会使其的结果发生改变, 不过除了 $1_G$ 以外, 其余 $X$ 中的元素在经过 $(35)(46)$, $(12)(3456)$ 与 $(12)(3654)$ 置换后皆会发生改变, 因此这些置换对于元素 $3,4,5,6$ 而言表现得相当不稳定, 所以这些元素的稳定化子中就只剩下恒同置换 $1_G$.

### 引理 1.7 (轨道分解)

设群 $G$ 作用于 $X$ 上, 则有：

1. **轨道分解**：$X = \displaystyle \bigsqcup_{x \in X} G x$, 其中对每个轨道选定 $x \in X$ 为代表元;
2. **稳定化子作商后同构于轨道**：任意 $x \in X$, 映射 $\Map{\varphi}{G/ \Stab_G(x)}{Gx}{g \cdot \Stab_G(x)}{gx}$ 为 $G$-集 间的同构;
3. **基数公式**：$|X| = \displaystyle \sum_{x \in X} [G : \op{Stab}_G(x)]$;
4. **稳定化子的共轭性质**：$\Forall{x \in X} \Forall{g \in G} \Stab_G(gx) = g \op{Stab}_G(x)g^{-1}$.

##### 证明

1. 为了证明 $X$ 可被分解为多个轨道之间的不交并, 我们可以分别验证：

   - 当 $Gx \cap Gy$ 时有 $Gx = Gy$：

     显然当 $Gx, Gy$ 有交时 $Gx \ni gx = g'y \in Gy$ 成立, 两侧同时左乘 $g^{-1}$ 则有 $x = g^{-1}g' y \in Gy$, 故有 $Gx \sub Gy$, 再由对称性我们就有 $Gx = Gy$.

   - 对任意一个代表元 $x \in X$, 它都能够得到不同的轨道 $Gx$：

     由于这些任意的代表元 $x = 1 \cdot x \in Gx$.

2. 分别验证以下几件事：

   - $\varphi$ 良定且单射, 即应有 $\Forall{g_1, g_2 \in G} g_1 \Stab_G(x) = g_2 \Stab_G(x) \iff \varphi(g_1 \Stab_G(x)) = \varphi(g_2 \Stab_G(x))$：

     由于陪集是相等的, 那么即有 $g_2^{-1} g_1 \in \Stab_G(x)$, 那么由稳定化子的定义当且仅当 $g_2^{-1}g_1 x = x$, 该条件又当且仅当 $g_1 x = g_2 x$, 那么则有：
     $$
     \varphi(g_1 \Stab_G(x)) = g_1 x = g_2 x = \varphi(g_2 \Stab_G(x))
     $$

   - $\varphi$ 为等变映射, 即应有 $\Forall{g, g' \in G} g \cdot \varphi(g' \Stab_G(x)) = \varphi(g \cdot g' \Stab_G(x))$：
     $$
     g \cdot \varphi(g' \Stab_G(x)) = g \cdot (g' x) \overset{\text{左作用结合律}}{=} (gg') \cdot x = \varphi(g \cdot g' \Stab_G(x))
     $$

   - $\varphi$ 为满射, 这是显然的, 因为由定义, 对于任何轨道中的元素 $gx$, 都被陪集 $g \cdot \Stab_G(x)$ 中代表元唯一地确定.

3. 基数公式是 $(1)$ 的直接推论.

4. 由于 $g' \in \Stab_G(gx)$ 当且仅当满足了 $g'(gx) = x$, 而该条件通过左作用的结合律及等式两侧左乘 $g^{-1}$ 后可得 $(g^{-1}g'g)x = x$, 显然此时取 $g' = gg'g^{-1}$ 时可得到 $g'x = x$, 且 $gg'g^{-1} \in g \Stab_G(x) g^{-1}$ 则可证得命题.

### 注释 (轨道空间与置换表示)

- 注意到 "$x, y \in X$ 同属一个轨道", 给出 $X$ 上的等价关系 $\sim$, 称相应的商集 $X/\sim$ 为 **轨道空间 (orbit space)**, 记为 $G \backslash X$ (右作用则记为 $X/G$);
- 将集合 $\Set{X \overto{\text{双射}} X}$ 连同双射间的合成可将该集合视为对称群 $S_X$ (或 $X$ 的自同构群 $\Aut(X)$), 因此群 $G$ 在 $X$ 上的作用相当于给定同态 $\map{G}{S_X = \Aut(X)}{g}{[g \mapsto gx]}$, 称之为群 $G$ 的 **置换表示 (permutation representation)**.

### 定义 1.7 (忠实, 自由与传递作用)

设 $G$ 为群, $X$ 为 $G$-集, 称 $G$ 在 $X$ 上的作用是：

- **忠实的 (faithful)**：若 $G \to S_X$ 是单射, 这相当于 $\displaystyle \bigcap_{x \in X} \Stab_G(x) = \set{ 1_G }$;
- **自由的 (free)** 或 **单的 (injective)**：若 $\Forall{x \in X} \Stab_G(x) = \set{1_G}$;
- **传递的 (transitive)**：若 $X$ 仅有一个轨道 ($\Forall{x \in X} X = Gx$), 相当于要求 $X$ 非空, 且 $\Forall{x, y \in X} \Exists{g \in G} gx = y$;

### 注释 (广义的传递性与齐性空间)

- 传递性的定义告诉我们, 只须给定任意一个元素 $x \in X$, 我们都可以将该元素通过作用 $g$ 传递至 $X$ 中任意的其他元素 $y$;
- 当存在作用 $\Map{\alpha}{G}{S_{X^\underline{n}} \quad (X^\underline{n} \to X^\underline{n}) }{g}{ \bb{ (x_1, \cdots, x_n) \mapsto (g x_1, \cdots, g x_n) } }$ 其中 $X^{\underline{n}} \coloneqq \Set{ (x_1, \cdots, x_n) : \Forall{1 \leq i, j \leq n} x_i \neq x_j }$, 我们可以推广传递作用的定义, 称其是 **$n$-传递的**;
- 传递的 $G$-集 $X^\underline{n}$ 又称为 **$G$-齐性空间 (homogeneous space)**, 而自由的 $G$-齐性空间又称为 **$G$-主齐性空间 (principal homogeneous space)** 或 **挠子 (torsor)**.

### 例子 1.8 (平移作用与陪集)

设有群 $G$ 以及它的子群 $H$, 我们有 $H$ 在 $G$ 上的作用 $\map{H \times G}{G}{(h, g)}{hg}$, 称之为 **左平移作用 (left shift action)**, 而对 $G$ 轨道分解后可得下述结论：

- $G$ 的轨道无非就是右陪集 $Hg$ (如若有右平移作用 $\map{G \times H}{G}{(g, h)}{gh}$ 则它的轨道为左陪集 $gH$);
- 由轨道所给出的轨道空间其实就是右陪集空间 $H \backslash G$ (同样地右平移作用为左陪集空间).
- 它是自由的, 因为对任意的 $g \in G$, 只有当 $1_H \in H$ 作用于 $g$ 时才可使得自身不变, 而其他 $H$ 中的元素作用到 $g$ 后都将平移, 因此 $\Stab_H(g) = \set{1}$.
- 它是传递的, 当且仅当 $G = H$

设有子群 $H, K \leq G$, 同样地双陪集也有类似解读, 例如 $H \times K^\oppos$ 在 $G$ 上的左作用就形同 $\map{H \times K^\oppos}{G}{(h, k)}{hgk}$, 那么相应的轨道则是 $HgK$ 而轨道空间无非就是 $H\backslash G / K$.

### 例子 1.9 (共轭作用, 正规化子, 群的中心与中心化子)

设 $G$ 为群：

- 考虑作用 $\map{G \times \mathcal{P}(G)}{\mathcal{P}(G)}{(g, E)}{gEg^{-1}}$, 称该作用下的稳定化子 (亦为 $G$ 的子群) $N_G(E) \coloneqq \set{ g \in G : g E g^{-1} = E }$ 为 **正规化子 (normalizer)**.
- 称 (左) 作用 $\Map{\Ad}{G \times G}{G}{(g, x)}{gxg^{-1}}$ 为 **共轭作用 (conjugation action)**, 通过置换表示则给出了伴随自同构 $\Map{\Ad}{G}{\Aut(G)}{g}{\bb{ x \mapsto gxg^{-1} }}$, 并且：
  - 共轭作用 $\Ad$ 的核为 $\Ker{\Ad} = \Set{ g \in G : \b{ \Map{\Ad(g)}{G}{G}{x}{gxg^{-1}} } = 1_{\Aut(G)} } \leq G$, 由于条件中的 $\Ad(g)$ 为恒同映射 $1_{\Aut(G)}$, 我们将映射改为等号, 因此 $\Ker{\Ad} = \Set{ g \in G : \Forall{x \in G} gxg^{-1} = x } = \Set{ g \in G : \Forall{x \in G} gx = xg }$, 它恰好为共轭作用下的稳定化子, 称之为群 $G$ 的 **中心 (center)**, 记为 $Z(G)$;
  - $Z(G)$ 既是交换群亦是 $G$ 的正规子群.
- 推而广之, 考虑放宽共轭作用中被作用的群 $G$ 为任意子集 $E \sub G$, 则可将 $\Ad$ 推广为 $\Map{\Ad}{N_G(E) \times E}{E}{(g, x)}{gxg^{-1}}$, 而它的稳定化子就是群 $G$ 的 **中心化子 (centralizer)**, 记为 $C_G(E)$. 因此 $C_G(G) = Z(G)$.
- 最后我们有子群的关系链 $C_G(E) \lhd N_G(E) \leq G$, 因此 $C_G(G) = Z(G) \lhd N_G(G)$.

### 例子 1.10 (挠子与双挠子)

设 $G_1, G_2$ 为群以及非空集 $\Iso(G_1, G_2) \coloneqq \Set{ G_1 \overto{\text{同构 $\varphi$}} G_2 }$：

- 当 $\Aut(G_2)$ 左作用于 $\Iso(G_1, G_2)$ 时有 $\map{\Aut(G_2) \times \Iso(G_1, G_2)}{\Iso(G_1, G_2)}{(g, \varphi)}{g \circ \varphi}$, 因此 $\Iso(G_1, G_2)$ 为 $\Aut(G_2)$-挠子 (自由且传递的 $G$-集);

- 同样地, $\Aut(G_1)$ 右作用于 $\Iso(G_1, G_2)$ 时有 $\map{\Iso(G_1, G_2) \times \Aut(G_1)}{\Iso(G_1, G_2)}{(\varphi, g')}{\varphi \circ g'}$, 因此 $\Iso(G_1, G_2)$ 为 $\Aut(G_1)$-挠子;

- 而同时结合上述的左/右作用则满足 $(g \circ \varphi) \circ g' = g \circ (\varphi \circ g')$, 因此又有 $\Aut(G_1)^\oppos \times \Aut(G_2)$-作用, 由该作用给出的作用集 $\Iso(G_1, G_2)$ 又称为 **双挠子 (bitorsor)**.

  上述的构造不仅仅局限于 $\Grp$ 范畴, 挠子的定义可推广至任意范畴上, 并且于范畴论的框架下挠子有一个更为简洁的叙述方式：

  > 设有左作用 $\alpha : G \times X \to X$, 那么 $X$ 为挠子当且仅当映射 $\Map{\Phi}{G \times X}{X \times X}{(g, x)}{(\alpha(g)(x), x)}$ 为双射.

  显然当 $X$ 为挠子时, $\alpha$ 的自由性当且仅当 $\Phi$ 为单射, 同样地 $\alpha$ 传递当且仅当 $\Phi$ 是满的.

{% end %}
