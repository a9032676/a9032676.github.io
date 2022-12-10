+++

title = "范畴论 1 - 范畴论基础"
date = 2022-11-02
draft = false

[taxonomies]
categories = ["范畴论"]
tags = ["数学", "代数学", "范畴论"]

[extra]
lang = "zh"
toc = true
mathjax = true

+++

{% good() %}本文内容已完全施工完毕, 读者可放心阅读！{% end %}

{% mathjax_escape() %}

## 1.1. 范畴论的基本概念

### 前言

学习每一门学科总得先有动机, 后再是兴趣, 范畴论当然亦不例外, 那么究竟范畴论有什么好处值得我们学习呢？以下是我大概整理出的一些好处：

- 范畴本身提供了许多高层次, 亦是比较抽象的工具, 可以站在高观点的角度下看待问题, 解决问题;
- 高抽象性不意味着难, 抽象是一套很有条理的方法, 范畴论正是提供了该种方法的理论;
- 它可以将我们各个学科中的知识统一到一个完整的框架去：
  - 在代数学上的各种代数结构, 各种不同数学对象之间的映射 (例如群之间的群同态, 拓扑空间之间的连续映射, 一般集合之间的函数), 又或者积结构 (笛卡尔积, 群直积, 乘积拓扑), 商结构  (商集, 商拓扑空间, 商群), 自由构造 (自由群, 自由格, 自由向量空间) 等... , 在范畴的框架下得到高度统一 (例如研究群的性质就放到群范畴, 研究拓扑空间就放到拓扑空间范畴中), 那么便可以使用范畴所提供的工具一致地解决这些结构间共通的问题;
  - 在计算机编程理论上把编程语言的语义翻译/解释到范畴的语义模型中, 使得我们可以范畴的观点来研究 类型论/依赖类型论 的语义, 较为著名的例子便有使用 **笛卡尔闭范畴 (cartesian closed category, CCC)** 来解释 **简单类型的 λ 演算 (simply typed lambda calculus, STLC)**, 以及基于 CCC 进行拓展的 **LCCC (Locally CCC)** / **CwA (category with attributes)** / **CwF (category with family)** 等范畴语义框架用作解释 **依赖类型论 (dependent type theory)** 等;
  - 在物理学 / 语言学 / 其他科学 中亦有所应用, 但因为著者不熟悉, 所以无法提供相关的例子.
- 易于将基本的结构向高维度, 高抽象推广：
  - 就光范畴本身这个概念, 我们也可以很轻易地在范畴论中定义出范畴的范畴, 范畴的范畴的范畴, ..., 又或者是范畴上的态射, 态射本身作为范畴对象时又会形成一个范畴, 而态射的态射则自动升级为函子.
  - 例如在代数拓扑的同伦论中, 最基本的概念就是路径, 路径是连接拓扑空间中两点之间的一条 "连续的线段". 但在高维的情况底下, 这个点就会变成是一条路径！即若考虑连接 $k-1$ 维路径之间的 $k$ 维路径, 这种表述正正就可以被解释到 **高阶范畴论 (higher category theory)** 中去, 即若范畴的对象为 $k-1$ 维路径, 而对象之间的态射则为 $k$ 维路径, 不断地延申下去便可得出 **$n$-范畴** (当 $k \leq n$).

以上这些论述当然都是不严谨的, 部分例子看不懂也没关系, 因为重要的不是看懂, 而是心理上能够感知到原来范畴论还有这些作用. 因此为了更加严谨地讨论, 我们需要做一些范畴论的基础铺垫, 亦即是以下我们将学到的内容了.

### 注释 (二元运算)

范畴中许多重要实例都是由代数结构所提供的, 而要说清楚什么是代数结构, 首先让我们从日常的基础运算开始. 比方说计算等式 $1 + 2 = 3$ 所使用的 $+$ 号, 但它并不是从虚空诞生出来的, 换句话说就是它不仅仅是个记号, 而从编程的角度考察的话, 可以把 $+$ 号想象成一个接受了两个参数的中缀函数, 观察上述例子那么则是左侧接受了 $1$ 而右侧是 $2$ 作为参数 (元素) 的函数, 这种函数在数学上称之为 **二元函数 / 二元运算 (binary function)**, 并且由于 $1, 2, 3$ 这些都是整数, 因此 $1,2,3 \in \Z$, 那么 $+$ 的这个二元函数就记为 $+ : \Z \times \Z \to \Z$, 其中 $\Z \times \Z$ 表示接受了两个 $\Z$ 的元素作为参数, 并返回某个 $\Z$ 中的元素, 而该处的 $\times$ 为 $\Z$ 与 $\Z$ 的 **笛卡尔积 (cartesian product)**, 即打包处理的意思.

当然除了 $+$ 这么个表示加法的二元运算, 在数学上还有 $\times$, 甚至可以自行定义一些记号, 如：$\oplus$, $\otimes$, $\cdot$ 这些均可作为二元运算的记号.

并且我们不一定将 $+$ 局限于 $\Z$ 内, 例如说可以拓展到实数集 $\R$, 那么就是 $+ : \R \times \R \to \R$, 甚至说我们可以抽象到任意集合 $S$, 以及某个记号 $\cdot$, 那么便有二元运算 $\cdot : S \times S \to S$.

而若任意二元运算 $\cdot : A \times B \to C$ 且有 $A = B = C$, 那么则称其是封闭的, 例如上述的 $+$ 就是封闭于 $\R$ 内的二元运算.

### 注释 (代数结构)

代数结构, 通俗地说代数结构是由一个 $n$-元组 所组成的, 其内有一 **基础集 (underlying set)** $S$, 以及一系列的 **映射 (maps)** $f_1, ..., f_k$, 并且满足了一些 **公理 (axioms)** (或者理解为条件), 那么则会有 $(S, f_1, ..., f_k)$ 这样的 $n$-元组. 换句话即是说：
$$
代数结构 = 基础集 + 一系列函数 + 一系列公理
$$
而抽象代数中的 **群 (group)** 则是作为认识代数结构的好例子. 现在设群 $G$ 就是由某个基础集 $S$ 并携带了二元运算 $\cdot : S \times S \to S$ 以及四条群公理 (结合律, 封闭性, 单位元, 逆元)所组成的, 并记为 $G = (S, \cdot)$. 类似的 **环 (ring)**, 作为线性空间的推广构成的代数 **模 (module)** 亦构成相应的代数结构.

### 注释 (范畴, 对象与态射)

范畴的构成其实非常简单, 某一个范畴 $\mathcal{C}$ 的组成便是由一系列的 **对象 (objects)** 以及 **态射 (morphisms)** 所组成的, 当中的对象可以是任意的数学对象, 仅需满足其保有了单位态射以及态射间的结合律, 最简单的例子则可从 **集合范畴 (category of sets)** 中开始了解, 则于该范畴内对象为某些集合 $A, B$, 以及态射 $f : A \to B$, 那么在该范畴中从 $A$ 到 $B$ 的态射 $f$ 则是集合之间的 映射 / 函数, 其单位态射即是一般的恒等函数, 并且函数之间的结合律是显然保证了的, 因此态射亦可被视为是函数这一概念的推广.

### 定义 1.1.1 (范畴, 态射集, 单位与合成态射, 自态射)

若 $\mathcal{C}$ 被称为是 **范畴 (category)**, 其是由以下条件所组成的代数结构：

1. 集合 $\operatorname{Ob}(\mathcal{C})$, 其元素被称为 $\mathcal{C}$ 中的 **对象 (objects)**, 为了方便一些文章亦会简记为 $X \in \mathcal{C}$ 以替代 $X \in \operatorname{Ob}(\mathcal{C})$;

2. 集合 $\operatorname{Mor}(\mathcal{C})$, 其元素被称为 $\mathcal{C}$ 中的 **态射 (morphisms)**, 即对于任意态射 $f \in \operatorname{Mor}(\mathcal{C})$, 且 $f : X \to Y$, 使得 $X, Y \in \operatorname{Ob}(\mathcal{C})$. 并且可拓展出以下关于态射的一些额外定义：

   - 对 $\mathcal{C}$ 内的任意对象 $X, Y \in \operatorname{Ob}(\mathcal{C})$, 记所有从 $X$ 到 $Y$ 的态射集合为 $\operatorname{Hom}(X, Y)$, $\operatorname{Hom}_{\mathcal{C}}(X, Y)$ 或 $\mathcal{C}(X, Y)$, 并且有 $\mathcal{C}(X, Y) \sub \operatorname{Mor}(\mathcal{C})$, 称为从 $X$ 到 $Y$ 的 **态射集 / Hom-集 (Hom-set)**.
   - 对于任意 $X \in \operatorname{Ob}(\mathcal{C})$, 任意从 $X$ 到自身的态射集 $\mathcal{C}(X, X)$ 亦可被记为 $\operatorname{End}_{\mathcal{C}}(X)$, 其中的态射称为 **自态射 (endomorphisms)**.

3. 从 $X$ 到自身的 **单位态射 / 恒等态射 (identity morphism)** 则被定义为 $\begin{align} & 1_{X} : \operatorname{End}_\mathcal{C}(X) \\ & 1_X(x) = x \end{align}$, 或将 $1_X$ 记为 $\operatorname{id}_X$;

4. 对于任意 $X, Y, Z\in \operatorname{Ob}(\mathcal{C})$, $\mathcal{C}$ 上的二元运算 $\begin{align}
   \circ : \mathcal{C}(Y, Z) \times \mathcal{C}(X, Y) & \to \mathcal{C}(X, Z) \\
   (f, g) & \mapsto f \circ g
   \end{align}$ 则是态射间的 **合成态射 (composition of morphisms)**, 在无歧义的情况下可将 $f \circ g$ 简记为 $fg$, 以 **交换图 (commutative diagram)** 观察则有：
   $$
   \xymatrix{
   X \ar@{->}[rd]_{f \circ g} \ar@{->}[r]^{g} & Y \ar@{->}[d]^{f} \\
    & Z
   }
   $$
   且 $\mathcal{C}$ 下的态射都应保有以下条件：

   - 态射的结合律：$(f \circ g) \circ h = f \circ (g \circ h)$, 其中 $\forall f \in \mathcal{C}(Y, Z), g \in \mathcal{C}(X, Y), h \in \mathcal{C}(W, X)$;

   - 单位态射律：$1_Y \circ f = f = f \circ 1_X$, 其中 $\forall f \in \mathcal{C}(X, Y)$.

     同样地, 该两条件透过交换图观察则有：
     $$
     % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOls1LDFdLCJ2YWx1ZSI6IlgifSx7InBvc2l0aW9uIjpbNiwwXSwidmFsdWUiOiJZIn0seyJwb3NpdGlvbiI6WzcsMV0sInZhbHVlIjoiWiJ9LHsicG9zaXRpb24iOls0LDBdLCJ2YWx1ZSI6IlcifSx7InBvc2l0aW9uIjpbMSwwXSwidmFsdWUiOiJYIn0seyJwb3NpdGlvbiI6WzEsMV0sInZhbHVlIjoiWSJ9LHsicG9zaXRpb24iOlsyLDFdLCJ2YWx1ZSI6IlkifSx7InBvc2l0aW9uIjpbMCwwXSwidmFsdWUiOiJYIn1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjIsInZhbHVlIjoiZiBcXGNpcmMgZyIsImxhYmVsUG9zaXRpb24iOiJyaWdodCIsImJlbmQiOjB9LHsiZnJvbSI6MCwidG8iOjEsInZhbHVlIjoiZyJ9LHsiZnJvbSI6MSwidG8iOjIsInZhbHVlIjoiZiJ9LHsiZnJvbSI6MywidG8iOjAsInZhbHVlIjoiaCJ9LHsiZnJvbSI6MywidG8iOjEsImJlbmQiOjAsImxhYmVsUG9zaXRpb24iOiJsZWZ0IiwidmFsdWUiOiJnIFxcY2lyYyBoIn0seyJmcm9tIjo0LCJ0byI6NSwidmFsdWUiOiJmIiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6NSwidG8iOjYsInZhbHVlIjoiMV9ZIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjo0LCJ0byI6NiwidmFsdWUiOiIxX1kgXFxjaXJjIGYiLCJsYWJlbFBvc2l0aW9uIjoibGVmdCJ9LHsiZnJvbSI6NywidG8iOjQsInZhbHVlIjoiMV9YIiwibGFiZWxQb3NpdGlvbiI6ImxlZnQifSx7ImZyb20iOjcsInRvIjo1LCJiZW5kIjowLCJ2YWx1ZSI6ImYgXFxjaXJjIDFfWCIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9XX0=
     \xymatrix{
     X \ar@{->}[r]^{1_X} \ar@{->}[rd]_{f \circ 1_X} & X \ar@{->}[d]|-{f} \ar@{->}[rd]^{1_Y \circ f} &  &  & W \ar@{->}[rd]^{h} \ar@{->}[rr]^{g \circ h} &  & Y \ar@{->}[rd]^{f} &  \\
      & Y \ar@{->}[r]_{1_Y} & Y &  &  & X \ar@{->}[rr]_{f \circ g} \ar@{->}[ru]^{g} &  & Z
     }
     $$
     注意到交换图本身其实就意味着态射间的 "等价关系", 因此我们时常称为 **图表可交换 (diagram commutes)**.

### 例子 1.1.2 (代数学中常见的范畴)

以下这些较为常见且重要的例子：

- 若以集合作为对象, 函数作为态射, 那么所形成的便是 **集合范畴 (category of sets)**, 记为 $\operatorname{Set}$.
- 若以群作为对象, 群同态作为态射, 那么所形成的便是 **群范畴 (category of groups)**, 记为 $\operatorname{Grp}$, 而若是交换群所形成的范畴则称为 **交换群范畴 (category of abelian groups)**, 记为 $\operatorname{Ab}$​​.
- 若以环作为对象, 环同态作为态射, 那么所形成的便是 **环范畴 (category of rings)**, 记为 $\operatorname{Ring}$, 而若是交换环所形成的范畴则称为 **交换环范畴 (category of commutative rings)**, 记为 $\operatorname{CRing}$.
- 若以拓扑空间作为对象, 连续映射作为态射, 那么所形成的便是 **拓扑空间范畴 (category of topological spaces)**, 记为 $\operatorname{Top}$​.
- 若以任意域 $\mathbb F$ 上的线性空间作为对象, 线性映射作为态射, 那么所形成的便是 **线性空间范畴 (category of vector spaces)**, 记为 $\operatorname{Vect}_{\mathbb F}$, 一般于无歧义情况下亦可简记为 $\operatorname{Vect}$.

### 例子 1.1.3 (线性空间范畴上的合成线性映射)

更具体地, 例如我们所研究的对象是线性空间, 那么自然会放到线性空间范畴上作研究, 那么于 $\operatorname{Vect}$ 范畴中, 根据 [例子 1.1.2 (代数学中常见的范畴)](#例子_1.1.2_(代数学中常见的范畴)), 我们知道其对象必定是个线性空间而态射是线性映射, 那么我们可以这样子定义 $\operatorname{Vect}$：

- $\operatorname{Ob}(\operatorname{Vect}) \coloneqq \set{ \text{所有域 $\mathbb F$ 上的线性空间} }$;
- $\operatorname{Mor}(\operatorname{Vect}) \coloneqq \set{ 所有线性映射 }$.

并且考虑如有线性空间 $U, V, W \in \operatorname{Ob(Vect)}$, 线性映射 $f, g \in \operatorname{Mor(Vect)}$, 有如下交换图：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IlUifSx7InBvc2l0aW9uIjpbMSwwXSwidmFsdWUiOiJWIn0seyJwb3NpdGlvbiI6WzEsMV0sInZhbHVlIjoiVyJ9LHsicG9zaXRpb24iOlsyLDBdLCJ2YWx1ZSI6InUifSx7InBvc2l0aW9uIjpbMywxXSwidmFsdWUiOiJ3ID0gZyhmKHUpKSA9IGcodikifSx7InBvc2l0aW9uIjpbMywwXSwidmFsdWUiOiJ2ID0gZih1KSJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJ2YWx1ZSI6ImYifSx7ImZyb20iOjEsInRvIjoyLCJ2YWx1ZSI6ImcifSx7ImZyb20iOjAsInRvIjoyLCJ2YWx1ZSI6ImcgXFxjaXJjIGYiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjMsInRvIjo0LCJ0YWlsIjoibWFwc3RvIn0seyJmcm9tIjo1LCJ0byI6NCwidGFpbCI6Im1hcHN0byJ9LHsiZnJvbSI6MywidG8iOjUsInRhaWwiOiJtYXBzdG8ifV19
\xymatrix{
U \ar@{->}[r]^{f} \ar@{->}[rd]_{g \circ f} & V \ar@{->}[d]^{g} & u \ar@{|->}[rd] \ar@{|->}[r] & v = f(u) \ar@{|->}[d] \\
 & W &  & w = g(f(u)) = g(v)
}
$$
其中 $f$ 为 $U$ 到 $V$ 的线性映射, $g$ 为 $V$ 到 $W$ 的线性映射, 因此有 $f \in \mathcal{L}(U, V)$ 以及 $g \in \mathcal{L}(V, W)$, 且：
$$
\text{Vect}(U, V) = \text{Hom}_{\text{Vect}}(U, V) \coloneqq \mathcal{L}(U, V) \\
\text{Vect}(V, W) = \text{Hom}_{\text{Vect}}(V, W) \coloneqq \mathcal{L}(V, W)
$$
那么即合成态射 $g \circ f$ 是线性映射的合成, 所以 $g \circ f \coloneqq gf \in \mathcal{L}(U, W)$, 且对于任意 $u, u_1, u_2 \in U$ 以及 $\lambda \in \mathbb F$, 合成线性映射 $g \circ f$ 满足了以下条件：

- **保加性 (additivity)**：$g(f(u_1 + u_2)) = g(f(u_1)) + g(f(u_2))$;
- **保线性 (homogeneity)**：$g(f(\lambda u)) = \lambda g(f(u))$.

而 $\operatorname{Vect}$ 的单位态射实际上就是线性空间中的 **单位线性映射 (identity linear map)**, 即 $I_{\operatorname{Vect}} = I \in \mathcal{L}(V, V)$.

### 例子 1.1.4 (阿贝尔群范畴上的双线性映射)

若设有 $\operatorname{Ab}$ 范畴 (即交换群所构成的范畴), 态射的定义与 $\operatorname{Grp}$ 的情况相同, 即亦是群同态, 但由于 $\operatorname{Ab}$ 中的对象都是交换群, 那么其同态集 (这里以群作为对象, 因此态射集就是同态集)上的同态可相加, 因此同态集便具备了交换群结构 (即对于任二交换群 $G, H$, $(\operatorname{Hom}(G, H), +)$ 构成加法交换群). 更具体地, 即对于任意交换群 $A, B, C$, 以及任意合成群同态 $\varphi : \operatorname{Hom}(B, C) \times \operatorname{Hom}(A, B) \to \operatorname{Hom}(A, C)$, 使得群同态 $\varphi$ 应满足 **双线性 (bi-linearivity)**：
$$
\begin{align}
\varphi(f + g, h) & = \varphi(f, h) + \varphi(g, h) & \forall f, g \in \text{Hom}(B, C), \quad h \in \text{Hom}(A, B) \\
\varphi(f, g + h) & = \varphi(f, g) + \varphi(f, h) & \forall f \in \text{Hom}(B, C), \quad g,h \in \text{Hom}(A, B)
\end{align}
$$
至于为什么需要满足双线性？实际上该定义与交换群的张量积群到任意交换群的群同态定义是等价的, 为了解释这句话需要一些额外的铺垫, 因此该问题会留到后续部分进行解答.

### 注释 (对偶性)

在范畴论中, 我们会经常讨论一个结构, 或者一个概念的 **对偶性 / 二元性 (duality)**, 例如说首先给予某个范畴 $\mathcal{C}$, 然后直观上将 $\mathcal{C}$ 内所有的态射的方向逆转, 即例如 $f : A \to B$ 就变为了逆态射 $f^{-1} : B \to A$, 这便形成了原范畴 $\mathcal{C}$ 的范畴. 更详细地, 我们甚至还有以下这些常见的对偶关系：

- 任意范畴 $\mathcal{C}$ 的对偶概念是对偶范畴 $\mathcal{C}^{\operatorname{op}}$, 这将于 [定义 1.1.5 (对偶范畴)](#定义_1.1.5_(对偶范畴)) 提及;
- **始对象 (initial object)** 与 **终对象 (terminal object)** 相互对偶;
- **协变函子 (covariant functor)** 与 **逆变函子 (contravariant functor)** 相互对偶;
- **单同态 (monomorphism)** 与 **满同态 (epimorphism)** 相互对偶;
- **乘积 (product)** 与 **余积 (coproduct)** 相互对偶;
- **极限 (limit)** 与 **余极限 (colimit)** 相互对偶 (注意该极限是一种在范畴上的结构, 后续会提及到, 并不是数学分析上的那个极限).

虽然这些概念都还未曾定义和介绍, 此时无需去了解它们. 但可以见得英文名前面带 **co** 的多为原本结构的对偶结构.

### 定义 1.1.5 (对偶范畴)

对于任意范畴 $\mathcal{C}$, 其 **对偶范畴 / 反范畴 (opposite category)** 记为 $\mathcal{C}^{\operatorname{op}}$, 并定义如下：

- $\operatorname{Ob}(\mathcal{C}^{\operatorname{op}}) \coloneqq \operatorname{Ob}(\mathcal{C})$;
- $\mathcal{C^{\operatorname{op}}}(X, Y) \coloneqq \mathcal{C}(Y, X)$, 其中 $\forall X, Y \in \operatorname{Ob}(\mathcal{C^{\operatorname{op}}})$;
- $\mathcal{C}^{\operatorname{op}}$ 中单位态射与 $\mathcal{C}$ 的定义一致;
- $\mathcal{C}^{\operatorname{op}}$ 中合成态射 $\circ$ 定义为 $\mathcal{C}$ 的反向合成, 即：$\begin{align}
  \circ : \mathcal{C^{\operatorname{op}}}(Y, Z) \times \mathcal{C^{\operatorname{op}}}(X, Y) & \to \mathcal{C^{\operatorname{op}}}(X, Z) \\ (f, g) & \mapsto g \circ_{\mathcal{C}} f \end{align}$  (当中的 $\circ_{\mathcal{C}}$ 为在 $\mathcal{C}$ 中的合成态射).

直观上, 对偶范畴 $\mathcal{C^{\operatorname{op}}}$ 中的对象与 $\mathcal{C}$ 的对象保持一致, 但将当中的态射反转方向, 即上述合成态射如下图：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IlgifSx7InBvc2l0aW9uIjpbMiwwXSwidmFsdWUiOiJZIn0seyJwb3NpdGlvbiI6WzAsMF0sInZhbHVlIjoiXFxtYXRoY2Fse0N9In0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiXFxtYXRoY2Fse0N9XntcXHRleHR7b3B9fSJ9LHsicG9zaXRpb24iOlsyLDFdLCJ2YWx1ZSI6IlkifSx7InBvc2l0aW9uIjpbMSwxXSwidmFsdWUiOiJYIn0seyJwb3NpdGlvbiI6WzMsMF0sInZhbHVlIjoiWiJ9LHsicG9zaXRpb24iOlszLDFdLCJ2YWx1ZSI6IloifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MSwidmFsdWUiOiJmIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjo0LCJ0byI6NSwidmFsdWUiOiJmIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjoxLCJ0byI6NiwidmFsdWUiOiJnIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjo3LCJ0byI6NCwibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwidmFsdWUiOiJnIn0seyJmcm9tIjo3LCJ0byI6NSwiYmVuZCI6MzAsInZhbHVlIjoiZiBcXGNpcmMgZyA9IGcgXFxjaXJjX3tcXG1hdGhjYWx7Q319IGYifSx7ImZyb20iOjAsInRvIjo2LCJiZW5kIjozMCwidmFsdWUiOiJnIFxcY2lyY197XFxtYXRoY2Fse0N9fSBmIn1dfQ==
\xymatrix{
\mathcal{C} & X \ar@{->}[r]_{f} \ar@/^/@{->}[rr]^{g \circ_{\mathcal{C}} f} & Y \ar@{->}[r]_{g} & Z \\
\mathcal{C}^{\text{op}} & X & Y \ar@{->}[l]_{f} & Z \ar@{->}[l]_{g} \ar@/^/@{->}[ll]^{f \circ g = g \circ_{\mathcal{C}} f}
}
$$

### 注释 (子范畴)

我们在其他的代数结构或者数学结构中总能遇到子结构的概念, 例如 集合论中的子集, 抽象代数中的子群 / 子环, 拓扑空间中的子空间 等, 那么于范畴上是否亦可以定义类似的概念, 使得这些子结构都能在范畴中得到统一看待呢？答案当然是可以的, 除了较为显然的结论外 (即一个子范畴对象集肯定是其父范畴对象集的子集, 态射集亦同理), 还需要额外保有恒等态射, 合成态射, 以及例如对于任意两个子范畴中对象的态射 $f : X \to Y$, 那么 $X$ 与 $Y$ 都需要在子范畴中, 因此有以下 [定义 1.1.6 (子范畴, 全子范畴)](#定义_1.1.6_(子范畴,_全子范畴)) 的精确定义.

### 定义 1.1.6 (子范畴, 全子范畴)

对于任意范畴 $\mathcal{C, D}$, 若称 $\mathcal{D}$ 为 $\mathcal{C}$ 的 **子范畴 (subcategory)**, 记为 $\mathcal{D} \sub \mathcal{C}$, 当其满足了以下条件：

- $\operatorname{Ob}(\mathcal{D}) \sub \operatorname{Ob}(\mathcal{C})$ 以及 $\operatorname{Mor}(\mathcal{D}) \sub \operatorname{Mor}(\mathcal{C})$;
- $\forall X \in \operatorname{Ob}(\mathcal{D})$, 应保有单位态射 $1_X$;
- $\forall f \in \operatorname{Mor}(\mathcal{D})$, 且 $f : X \to Y$, 其 **来源 (source)** $X$ 与 **目标 (target)** $Y$ 都应在 $\operatorname{Ob}(\mathcal{D})$ 中, 即 $X, Y \in \operatorname{Ob}(\mathcal{D})$;
- $\forall f, g \in \operatorname{Mor}(\mathcal{D})$, 合成态射 $g \circ f$ 亦应该在 $\operatorname{Mor}(\mathcal{D})$ 中, 即 $g \circ f \in \operatorname{Mor}(\mathcal{D})$.

特别地, 对于任意 $X, Y \in \operatorname{Ob}(\mathcal{D})$, 若 $\mathcal{D}(X, Y) = \mathcal{C}(X, Y)$ 成立, 则称 $\mathcal{D}$ 为 **全子范畴 (full subcategory)**.

### 例子 1.1.7 (交换群范畴, 有限维线性空间范畴)

- $\operatorname{Ab}$ 为 $\operatorname{Grp}$ 的全子范畴, 因为所有交换群必然是所有群的子集, 并且 $\operatorname{Ab}(X, Y) = \operatorname{Grp}(X, Y)$, 无非都是同样的群同态映射所构成的态射集.
- 域 $\mathbb F$ 上的有限维线性空间范畴 $\operatorname{FinVect}_{\mathbb F}$ 是 $\operatorname{Vect}_{\mathbb F}$ 的全子范畴.

## 1.2. 同态与同构

### 注释

其实构造范畴本身的基本结构在最开始的时候就已经定义完毕了, 但如果光这样范畴论就变得索然无味了, 它就好比只是有躯干但没有内在灵魂的一个人, 我们研究范畴论就只是单纯把各种学科对应到不同的范畴上后就没有下文了吗？当然不是, 因此对于范畴的内部结构 (无论是对象还是态射)我们也需要进一步研究, 那么便衍生了以下数个重要概念 (同构, 各种范畴内的特殊对象, 范畴的泛性质与泛构造等).

### 注释 (单同态, 满同态, 同构)

虽然我们知道了交换图实际上就是范畴中态射之间的等价关系, 而我们仍需有一种结构能够刻画对象之间的等价关系, 那么该种概念就被称之为 **同构 (isomorphism)**, 简而言之对于某一个范畴 $\mathcal{C}$ 中的对象 $X$, 若果任意的 $x \in X$ 被 $f$ 态射到任意的 $Y$ 中, 并且能够再经过 $f$ 的逆态射 $f^{-1}$ 返回到 $X$ 中, 使得 $x = f^{-1}(f(x))$, 同样地对于任意的 $y \in Y$ 亦是如此, 则可得知 $X$ 与 $Y$ 之间必然是一一对应的, 更一般地在集合范畴中就是个双射函数, 即：
$$
x = f^{-1}(f(x)) \overset{f}{\underset{f^{-1}}{\rightleftarrows}} y = f(f^{-1}(y))
$$
因此这里的 $f$ 便构成同构关系, 同样地单射与满射的推广便是范畴中的 单同态 (态射结合可左消除) 与 满同态 (可右消除).

### 定义 1.2.1 (单同态, 满同态, 同构, 自同构)

对于任意范畴 $\mathcal{C}$, 对象 $X, Y\in \operatorname{Ob}(\mathcal{C})$, 以及任意态射 $f \in \mathcal{C}(X, Y)$：

- 若对于任意 $Z \in \operatorname{Ob}(\mathcal{C})$ 有任二态射 $g_1, g_2 : \mathcal{C}(Z, X)$ 使得 $Z \overset{g_1}{\underset{g_2}{\rightrightarrows}} X \overset{f}{\to} Y$ 可进行左消除, 即 $f \circ g_1 = f \circ g_2 \implies g_1 = g_2$, 则称 $f$ 是 **单同态 (monomorphism)** 的, 记为 $f : X \hookrightarrow Y$.

- 若对于任意 $Z \in \operatorname{Ob}(\mathcal{C})$ 有任二态射 $g_1, g_2 : \mathcal{C}(Y, Z)$ 使得 $X \overset{f}{\to} Y \overset{g_1}{\underset{g_2}{\rightrightarrows}} Z$ 可进行右消除, 即 $g_1 \circ f = g_2 \circ f \implies g_1 = g_2$, 则称 $f$ 是 **满同态 (epimorphism)** 的, 记为 $f : X \rightarrowtail Y$.

- 若存在 $g \in \mathcal{C}(Y, X)$ 使得满足：

  - $1_X = g \circ f$, 即对于任意 $x \in X$, 有 $x = g(f(x))$;
  - $f \circ g = 1_Y$, 即对于任意 $y \in Y$, 有 $y = f(g(y))$.

  则有以下结论：

  - 称 $g$ 为 $f$ 的 **逆态射 (inverse morphism)**, 记 $g = f^{-1}$, 其唯一性将于 [命题 1.2.5 (逆态射的唯一性)](#命题_1.2.5_(逆态射的唯一性)) 中证明.
  - 称 $f$ 是个 **同构 (isomorphism)**, 记为 $X \overset{\sim}{\to} Y$ 或 $X \cong Y$, 并记所有 $X, Y$ 之间的所有同构构成的集为 $\operatorname{Iso}(X, Y)$.
  - 特别地, 若有 $X = Y$, 即同构 $f \in \mathcal{C}(X, X) = \operatorname{End}_{\mathcal{C}}(X)$ 将构成 **自同构 (automorphism)**, 并记所有 $X$ 上所有自同构态射集为 $\operatorname{Aut}(X)$.

### 例子 1.2.2 (代数学中常见的同态)

- 在集合范畴上, **单射函数 (injective function)** 是单同态, **满射函数 (surjective function)** 是满同态, **双射函数 (bijective function)** 便是同构, 并且考虑 $\R \to \R$ 上的双射函数亦构成自同构.
- 在群范畴上, **单群同态 (injective group homomorphism)**, **满群同态 (surjective group homomorphism)** 以及 **群同构 (group isomorphism)** 分别为单同态, 满同态与同构, 并且若考虑置换群 $S_n$, 其的群自同构将构成该范畴上的自同构.
- **同胚 / 拓扑同构 (homeomorphism)** 是在拓扑空间范畴 $\operatorname{Top}$ 上的同构关系.
- **微分同胚 (diffeomorphism)** 便是在 **光滑流形 / 微分流形 / 可微流形范畴 (category of smooth manifolds)** $\operatorname{Diff}$ 上的同构关系.

### 命题 1.2.3 (单同态的基本性质)

对于任意范畴 $\mathcal{C}$, 对象 $X, Y, Z \in \operatorname{Ob}(\mathcal{C})$, 若有单同态 $f : X \hookrightarrow Y$, 则 $f$ 具有以下性质：

1. 于 $\mathcal{C}^{\operatorname{op}}$ 中, $f$ 为满同态;
2. 单同态的合成仍是单同态, 即对于任意 $g : Y \hookrightarrow Z$, 有单同态 $g \circ f : X \hookrightarrow Z$.

##### 证明

1. 若设 $g_1, g_2 \in \mathcal{C}(Z, X)$, 那么在 $\mathcal{C}^{\operatorname{op}}$ 中, 由于所有态射逆转方向, 则有 $g_1, g_2 \in \mathcal{C}^{\operatorname{op}}(X, Z)$ 以及 $f \in \mathcal{C}^{\operatorname{op}}(Y, X)$, 使得 $g_1 \circ f = g_2 \circ f \implies g_1 = g_2$, 因此得证.

2. 设有对象 $W \in \operatorname{Ob}(\mathcal{C})$, $\gamma, \gamma' \in \mathcal{C}(W, X)$, 我们需要证明的是 $\gamma = \gamma'$, 那么根据以下可用条件：
   $$
   \begin{gather}
   (g \circ f) \circ \gamma = (g \circ f) \circ \gamma' \tag1 \\
   \text{$f$ 为单同态} \iff [\forall S \in \text{Ob}(\mathcal{C}), \quad \varphi, \varphi' \in \mathcal{C}(S, X), \quad f \circ \varphi = f \circ \varphi' \implies \varphi = \varphi'] \tag2 \\
   \text{$g$ 为单同态} \iff [\forall S \in \text{Ob}(\mathcal{C}), \quad \psi, \psi' \in \mathcal{C}(S, Y), \quad g \circ \psi = g \circ \psi' \implies \psi = \psi'] \tag3 \\
   \end{gather}
   $$
   首先使用条件 $(2)$, 设 $\varphi = \gamma$ 以及 $\varphi' = \gamma'$, 则有 $f \circ \gamma = f \circ \gamma' \implies \gamma = \gamma'$, 现在再应用条件 $(3)$, 设 $\psi = f \circ \gamma$ 以及 $\psi' = f \circ \gamma'$ 则有 $g \circ f \circ \gamma = g \circ f \circ \gamma' \implies \gamma = \gamma'$, 最后由 $(1)$ 确保使得命题成立. 而范畴论的好处是可以让我们 "看见" 证明, 即如下交换图：
   $$
   % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IlcifSx7InBvc2l0aW9uIjpbMiwwXSwidmFsdWUiOiJYIn0seyJwb3NpdGlvbiI6WzQsMF0sInZhbHVlIjoiWSJ9LHsicG9zaXRpb24iOls2LDBdLCJ2YWx1ZSI6IloifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MSwiYmVuZCI6LTMwLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIiwidmFsdWUiOiJcXHZhcnBoaScgPSBcXGdhbW1hJyJ9LHsiZnJvbSI6MCwidG8iOjEsImJlbmQiOjMwLCJ2YWx1ZSI6IlxcdmFycGhpID0gXFxnYW1tYSIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifSx7ImZyb20iOjEsInRvIjoyLCJ2YWx1ZSI6ImYiLCJsYWJlbFBvc2l0aW9uIjoibGVmdCIsInRhaWwiOiJob29rIn0seyJmcm9tIjoyLCJ0byI6MywidmFsdWUiOiJnIiwidGFpbCI6Imhvb2sifSx7ImZyb20iOjAsInRvIjoyLCJiZW5kIjo2MCwidmFsdWUiOiJcXHBzaSA9IGYgXFxjaXJjIFxcZ2FtbWEiLCJ0YWlsIjoibm9uZSJ9LHsiZnJvbSI6MCwidG8iOjIsImJlbmQiOi02MCwibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwidmFsdWUiOiJcXHBzaScgPSBmIFxcY2lyYyBcXGdhbW1hJyJ9XX0=
   \xymatrix{
   W \ar@/_/@{->}[rr]|-{\varphi' = \gamma'} \ar@/^/@{->}[rr]|-{\varphi = \gamma} \ar@/^1.5pc/@{->}[rrrr]^{\psi = f \circ \gamma} \ar@/_1.5pc/@{->}[rrrr]_{\psi' = f \circ \gamma'} &  & X \ar@{^{(}->}[rr]^{f} &  & Y \ar@{^{(}->}[rr]^{g} &  & Z
   }
   $$

### 命题 1.2.4 (满同态的基本性质)

对于任意范畴 $\mathcal{C}$, 对象 $X, Y, Z \in \operatorname{Ob}(\mathcal{C})$, 若有满同态 $f : X \rightarrowtail Y$, 则 $f$ 具有以下性质：

1. 于 $\mathcal{C}^{\operatorname{op}}$ 中, $f$ 为单同态;
2. 满同态的合成仍是满同态, 即对于任意 $g : Y \rightarrowtail Z$, 有满同态 $g \circ f : X \rightarrowtail Z$.

##### 证明

类似于 [命题 1.2.3 (单同态的基本性质)](#命题_1.2.3_(单同态的基本性质)) 中的证明, 读者可尝试自证.

### 命题 1.2.5 (逆态射的唯一性)

对于任意范畴 $\mathcal{C}$, 对象 $X, Y \in \operatorname{Ob}(\mathcal{C})$, 态射 $f : \mathcal{C}(X, Y)$, 则具有以下性质：

1. **唯一性 (uniqueness)**：若存在 $f$ 的逆态射 $g : \mathcal{C}(Y, X)$, 则称 $g$ 是 **唯一态射 (unique morphism)**;
2. $(f^{-1})^{-1} = f$.

##### 证明

1. 假设 $f \in \mathcal{C}(X, Y)$ 的另一逆态射为 $g \in \mathcal{C}(Y, X)$, 即有 $g \circ f = 1_X$, 需证明 $g = f^{-1}$, 则有：
   $$
   g = g \circ 1_Y = g \circ (f \circ f^{-1}) = (g \circ f) \circ f^{-1} = f^{-1}
   $$

2. 由上述逆态射的唯一性所保证.

## 1.3. 泛性质初步

### 注释 (特殊对象, 乘积与泛性质的联系)

始对象与终对象除了作为范畴中的特殊对象, 并且一般是用来刻画范畴上的 **泛性质 (universal property)** 的, 至于为什么需要研究泛性质呢？这其实是因为数学上的许多结构都能够使用泛性质表示其结论, 例如接下来将提及到的 乘积 就满足了泛性质, 在集合范畴上乘积就是笛卡尔积, 那么考虑映射 $\begin{align} f : \R & \to \R \times \C \\ x & \mapsto (x^2, x+ix) \end{align}$, 泛性质告诉我们分别映射 $\begin{align} f_1 : \R & \to \R \\ x & \mapsto x^2 \end{align}$ 与 $\begin{align} f_2 : \R & \to \C \\ x & \mapsto x+ix \end{align}$ 与将 $\R$ 先经过 $f$ 唯一地映射到 $\R \times \C$ 然后再分别映射到 $\R$ 或 $\C$ 上的结论是一样的, 这是初步了解泛性质的一个极佳例子, 并且不单止类似于上述这种较为基础的结构, 还有许许多多更复杂结构都满足了泛性质, 例如自由群可被表述为 $\operatorname{Grp}$ 范畴中的自由对象, 而自由对象在范畴论上本身就是携带了泛性质的自由结构. 更多的例子数之不尽, 而由于泛性质的严格定义需要依赖到后续章节中的内容, 因此该处目前仅留个念想.

### 定义 1.3.1 (始对象, 终对象, 零对象)

对于任意范畴 $\mathcal{C}$ 以及任意 $X \in \operatorname{Ob}(\mathcal{C})$：

- 对象 $\bold{0} \in \operatorname{Ob}(\mathcal{C})$ 被称为是 $\mathcal{C}$ 下的 **始对象 (initial object)**, 若存在唯一态射 $\bold 0 \overset{\exists!}{\to} X$;

- 对象 $\bold{1} \in \operatorname{Ob}(\mathcal{C})$ 被称为是 $\mathcal{C}$ 下的 **终对象 (terminal object)**, 若存在唯一态射 $X \overset{\exists!}{\to} \bold 1$;

- 对象 $\bold 0 \in \operatorname{Ob}(\mathcal{C})$ 同时为始对象以及终对象则称之为 **零对象 (zero object)**, 使得额外对于任意 $Y \in \operatorname{Ob}(\mathcal{C})$, 存在唯一态射合成 $X \overset{\exists!}{\to} \bold 0 \overset{\exists!}{\to} Y$, 该态射合成亦被称为 **零态射 (zero morphism)**, 该态射亦可被交换图表述为：

### 注释

注意始对象的对偶概念正是终对象, 并且切记不要将终对象 $\bold 1$ 与 单位态射 $1_X$ 混淆, 为了避免这种情况下述关于终对象的记号 $\bold 1$ 将会加粗.

### 例子 1.3.2 (单点集, 平凡群)

- 并不是每一个范畴都一定具备这些对象的，例如在集合范畴中其始对象就是 $\empty$, 终对象为 $\set{*}$ (单点集), 但却不存在零对象 (考虑终对象的条件, 有非常多函数是从任意集 $X$ 映射到空集的, 因此态射不唯一).

- 在 $\operatorname{Grp}$ 范畴上考虑, 可尝试证明 **平凡群 (trivial group)** $\set{1}$ 便是在 $\operatorname{Grp}$ 中的零对象.

  ##### 证明

  考虑到零对象同时是个始对象以及终对象, 其应满足对于任意的群 $G, H \in \operatorname{Ob}(\operatorname{Grp})$, 有 $G \overset{\exists!}{\to} \set{1} \overset{\exists!}{\to} H$, 我们只需要规定以下两个群同态即可得证：
  $$
  \begin{alignedat}{3}
  \varphi : G & \to \set{1} \qquad \qquad & \psi : \set{1} & \to H  \\
  x & \mapsto 1 & 1 & \mapsto 1_H \qquad \qquad
  \end{alignedat}
  $$
  其中 $\varphi$ 为平凡群同态而 $\psi$ 为单位群同态, 该两态射显然都满足唯一性.

- 零空间 $V$ (即 $\dim(V) = 0$)是 $\operatorname{Vect}$ 范畴中的零对象.

### 注释

在集合论中, 我们可以透过笛卡尔积将多个集合联系起来讨论, 同样地这一概念亦可进一步推广至范畴论中, 因此就产生了以下关于范畴中的乘积以及余积的概念.

### 定义 1.3.3 (乘积, 余积)

对于任意范畴 $\mathcal{C}$ 以及 $X, Y \in \operatorname{Ob}(\mathcal{C})$：

- 若称 $X \times Y \in \operatorname{Ob}(\mathcal{C})$ 为对象 $X$ 与 $Y$ 之间的 **乘积 (product)**, 当其携带了一对 **典范投射 / 投射态射 (canonical projections / projection morphisms)** $X \times Y \overset{p_1}{\to} X$ 以及 $X \times Y \overset{p_2}{\to} Y$ 时满足了泛性质, 即：

  对于任意一对态射 $Q \overset{f_1}{\to} X$ 以及 $Q \overset{f_2}{\to} Y$, 存在唯一态射 $Q \overset{f}{\to} X \times Y$ 使得下图可交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IlggXFx0aW1lcyBZIn0seyJwb3NpdGlvbiI6WzEsMF0sInZhbHVlIjoiUSJ9LHsicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IlgifSx7InBvc2l0aW9uIjpbMiwxXSwidmFsdWUiOiJZIn1dLCJlZGdlcyI6W3siZnJvbSI6MSwidG8iOjAsImxpbmUiOiJkYXNoZWQiLCJ2YWx1ZSI6ImYiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjowLCJ0byI6MiwidmFsdWUiOiJwXzEifSx7ImZyb20iOjAsInRvIjozLCJ2YWx1ZSI6InBfMiIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6MSwidG8iOjIsInZhbHVlIjoiZl8xIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjoxLCJ0byI6MywidmFsdWUiOiJmXzIifV19
  \xymatrix{
   & Q \ar@{-->}[d]|-{f} \ar@{->}[ld]_{f_1} \ar@{->}[rd]^{f_2} &  \\
  X & X \times Y \ar@{->}[l]^{p_1} \ar@{->}[r]_{p_2} & Y
  }
  $$

- 若称 $X + Y \in \operatorname{Ob}(\mathcal{C})$ 为对象 $X$ 与 $Y$ 之间的 **余积 (coproduct)** (或记为 $X \oplus Y$), 当其携带了一对 **典范注射 / 注射态射 (canonical injections / injection morphisms)** $X \overset{i_1}{\to} X + Y$ 以及 $Y \overset{i_2}{\to} X + Y$ 时满足了泛性质, 即：

  对于任意一对态射 $X \overset{f_1}{\to} Q$ 以及 $Y \overset{f_2}{\to} Q$, 存在唯一态射 $X + Y \overset{f}{\to} Q$ 使得下图可交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IlggKyBZIn0seyJwb3NpdGlvbiI6WzEsMF0sInZhbHVlIjoiUSJ9LHsicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IlgifSx7InBvc2l0aW9uIjpbMiwxXSwidmFsdWUiOiJZIn1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjEsImxpbmUiOiJkYXNoZWQiLCJ2YWx1ZSI6ImYiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjoyLCJ0byI6MCwidmFsdWUiOiJpXzEiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjMsInRvIjowLCJ2YWx1ZSI6ImlfMiIsImxhYmVsUG9zaXRpb24iOiJsZWZ0In0seyJmcm9tIjoyLCJ0byI6MSwidmFsdWUiOiJmXzEiLCJsYWJlbFBvc2l0aW9uIjoibGVmdCJ9LHsiZnJvbSI6MywidG8iOjEsInZhbHVlIjoiZl8yIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In1dfQ==
  \xymatrix{
   & Q &  \\
  X \ar@{->}[r]_{i_1} \ar@{->}[ru]^{f_1} & X + Y \ar@{-->}[u]|-{f} & Y \ar@{->}[l]^{i_2} \ar@{->}[lu]_{f_2}
  }
  $$

同样地, 我们可将上述仅有两个对象之间的乘积或余积进一步推广至多个对象, 那么对于任意范畴 $\mathcal{C}$ 以及一族以 $I$ 为指标集的对象 $\set{X_i}_{i \in I}$：

- 若 $\prod_{i \in I} X_i \in \operatorname{Ob}(\mathcal{C})$ 被称为是一族对象 $\set{X_i}_{i \in I}$ 的乘积, 当对于任意 $i \in I$ ($I$ 为指标集) 其有一族典范投射：
  $$
  p_i : \left( \prod_{i \in I} X_i \right) \to X_i
  $$
  使得其满足了泛性质, 即对于任意其他对象 $Q \in \operatorname{Ob}(\mathcal{C})$ 以及态射 $Q \overset{f_i}{\to} X_i$, 存在唯一态射 $(f_i)_{i \in I} : Q \to \prod_{i \in I} X_i$ 使得下图可交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IlxccHJvZF97aSBcXGluIEl9IFhfaSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IlhfaSJ9LHsicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IlEifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MSwidmFsdWUiOiJwX2kiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjIsInRvIjowLCJ2YWx1ZSI6IihmX2kpX3tpIFxcaW4gSX0iLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJsaW5lIjoiZGFzaGVkIn0seyJmcm9tIjoyLCJ0byI6MSwidmFsdWUiOiJmX2kifV19
  \xymatrix{
  Q \ar@{-->}[d]_{(f_i)_{i \in I}} \ar@{->}[rd]^{f_i} &  \\
  \prod_{i \in I} X_i \ar@{->}[r]_{p_i} & X_i
  }
  $$

- 若 $\coprod_{i \in I} X_i \in \operatorname{Ob}(\mathcal{C})$ (或记为 $\bigoplus_{i \in I} X_i$)被称为是一族对象 $\set{X_i}_{i \in I}$ 的余积, 当对于任意 $i \in I$ ($I$ 为指标集)其有一族典范注射：
  $$
  p_i : X_i \to \left( \coprod_{i \in I} X_i \right)
  $$
  使得其满足了泛性质, 即对于任意其他对象 $Q \in \operatorname{Ob}(\mathcal{C})$ 以及态射 $X_i \overset{f_i}{\to} Q$, 存在唯一态射 $(f_i)_{i \in I} : \coprod_{i \in I} X_i \to Q$ 使得下图可交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IlxcY29wcm9kX3tpIFxcaW4gSX0gWF9pIn0seyJwb3NpdGlvbiI6WzEsMV0sInZhbHVlIjoiWF9pIn0seyJwb3NpdGlvbiI6WzAsMF0sInZhbHVlIjoiUSJ9XSwiZWRnZXMiOlt7ImZyb20iOjEsInRvIjowLCJ2YWx1ZSI6InBfaSIsImxhYmVsUG9zaXRpb24iOiJsZWZ0In0seyJmcm9tIjowLCJ0byI6MiwidmFsdWUiOiIoZl9pKV97aSBcXGluIEl9IiwibGFiZWxQb3NpdGlvbiI6ImxlZnQiLCJsaW5lIjoiZGFzaGVkIn0seyJmcm9tIjoxLCJ0byI6MiwidmFsdWUiOiJmX2kiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifV19
  \xymatrix{
  Q &  \\
  \coprod_{i \in I} X_i \ar@{-->}[u]^{(f_i)_{i \in I}} & X_i \ar@{->}[l]^{p_i} \ar@{->}[lu]_{f_i}
  }
  $$

### 注释

- 由于余积实际上就是将积的所有态射取逆, 因此乘积与余积的概念正好对偶, 并且它们都是泛性质的重要实例;
- 一些时候, 余积亦可被理解为对象间的 **和 (sum)**.

### 例子 1.3.4 (代数学中常见的乘积 / 余积)

- 在集合范畴上, 乘积为笛卡尔积, 而余积则是一族集合的 **不交并 (disjoint union)**.
- 在群范畴上, 乘积为 **群直积 (direct product of groups)**, 直积亦构成群, 而余积为 **自由积 (free product)**.
- 在拓扑空间范畴上, 乘积为 **乘积拓扑空间 (product topological spaces)**, 即基础集为笛卡尔积且携带了 **乘积拓扑 (product topology)** 的代数结构.
- 在线性空间与交换群范畴上, 余积为 **直积 (direct product)**.

### 注释

从上述例子可以观察到, 我们可以定义范畴中的 "乘积", 很自然就有一个推广就是定义范畴间的乘积使得这个乘积亦构成范畴, 那么我们就有了以下定义.

### 定义 1.3.5 (乘积范畴, 余积范畴)

对于任意范畴 $\mathcal{C}, \mathcal{D}$, 称 $\mathcal{C}, \mathcal{D}$ 之间的乘积为 **乘积范畴 (product category)**, 记为 $\mathcal{C} \times \mathcal{D}$, 定义为：

- $\operatorname{Ob}(\mathcal{C} \times \mathcal{D}) \coloneqq \operatorname{Ob}(\mathcal{C}) \times \operatorname{Ob}(\mathcal{D})$;

- $(\mathcal{C} \times \mathcal{D})((X_1, X_2), (Y_1, Y_2)) \coloneqq \mathcal{C}(X_1, Y_1) \times \mathcal{D}(X_2, Y_2)$, 其中 $\forall (X_1, X_2), (Y_1, Y_2) \in \operatorname{Ob}(\mathcal{C} \times \mathcal{D})$;

- $1_{\mathcal{C} \times \mathcal{D}} \coloneqq (1_{X_1}, 1_{X_2})$;

- $\mathcal{C} \times \mathcal{D}$ 的合成态射定义为：
  $$
  \begin{align}
  \circ : [\mathcal{C}(Y_1, Z_1) \times \mathcal{D}(Y_2, Z_2))] \times 
  [\mathcal{C}(X_1, Y_1) \times \mathcal{D}(X_2, Y_2)] & \to 
  \mathcal{C}(X_1, Z_1) \times \mathcal{D}(X_2, Z_2) \\
  (g_1, g_2) \circ (f_1, f_2) & \mapsto (g_1 \circ f_1, g_2 \circ f_2)
  \end{align}
  $$

使用类似于 [定义 1.3.3 (乘积, 余积)](#定义_1.3.3_(乘积,_余积)) 的方式我们可推广并构造出一族范畴的乘积范畴 $\prod_{i \in I} \mathcal{C}_i$, 定义为：

- $\operatorname{Ob}(\prod_{i \in I} \mathcal{C}_i)  \coloneqq\prod_{i \in I} \operatorname{Ob}(\mathcal{C}_i)$;

- $\prod_{i \in I} \mathcal{C}_i( \prod_{i \in I} X_i, \prod_{i \in I} Y_i ) \coloneqq \prod_{i \in I} \mathcal{C}_i(X_i, Y_i)$;

- $1_{\prod_{i \in I} \mathcal{C}_i} \coloneqq (1_{X_1}, 1_{X_2}, \dots, 1_{X_i}, \dots)$;

- $\prod_{i \in I} \mathcal{C}_i$ 的合成态射则定义为：
  $$
  \begin{align}
  \circ : \prod_{i \in I} \mathcal{C}_i(Y_i, Z_i) \times 
  \prod_{i \in I} \mathcal{C}_i(X_i, Y_i) & \to 
  \prod_{i \in I} \mathcal{C}_i(X_i, Z_i) \\
  (g_1, g_2, \dots, g_i, \dots) \circ (f_1, f_2, \dots, f_i, \dots) & \mapsto (g_1 \circ f_1, g_2 \circ f_2, \dots, g_i \circ f_i, \dots)
  \end{align}
  $$

使用与上述同样的方式可构造出对偶的 **余积范畴 (coproduct category)**, 分别记为 $\mathcal{C} + \mathcal{D}$ 或 $\mathcal{C} \oplus \mathcal{D}$ 以及 $\coprod_{i \in I} \mathcal{C}_i$ 或 $\bigoplus_{i \in I} \mathcal{C}_i$, 这里不再一一阐述, 读者可尝试自证其的确构成范畴.

{% end %}