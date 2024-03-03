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

## 前言

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

以上这些论述当然都是不严谨的, 下面我们需要严格地讨论究竟何为范畴.

## 1.0. Grothendieck 宇宙

### 注释 (范畴的大小)

粗略地说, 范畴其实就是一族对象 (例如集合, 或者各种代数结构) 以及这些对象之间的一族态射 (映射, 函数的推广) 所构成的代数结构. 不过可能存在如 "由所有集合所构成的范畴" 或者 "由所有群所构成的范畴" 这样子的矛盾, 因为在 $\text{ZFC}$ 集合论中我们不可能存在 "所有集合的集合", 否则这将导致罗素悖论, 因此我们可以考虑以下一些处理方案：

1. **Von Neumann–Bernays–Gödel 集合论**：将对象集定义为 **类 (class)**, 直觉上就是比集合要更大的 **搜集 (collections)**.
2. **Grothendieck 宇宙**：仍将对象集定义为一般的集合, 我们称为 **Grothendieck 宇宙 (Grothendieck universes)**, 或简称为 **宇宙 (universes)**, 这是一个施加了除 $\text{ZFC}$ 额外更多的公理去保证集合的大小在一个合适的范围内.

而方案 $(1)$ 我们无法在类上进行量化, 所以该方案被否决掉了. 而方案 $(2)$ 正是我们所需的, 宇宙就像是一道 "防火墙", 在其内可以进行大部分常见的集合论操作而不涉及到类, 并阻止了不合法, 有可能违反规则的操作, 因此我们现在引入关于它的定义.

### 定义 1.0.1 (Grothendieck 宇宙)

设 $\mathcal{U}$ 为集合, 称满足了以下条件的 $\mathcal{U}$ 为一个 **宇宙 (universe)**：

1. $\empty \in \mathcal{U}$ 且 $\N \in \mathcal{U}$;
2. 若 $x \in \mathcal{U}$ 且 $y \in x$, 则 $y \in \mathcal{U}$;
3. 若 $x \in \mathcal{U}$, 则 $\set{x} \in \mathcal{U}$;
4. 若 $x \in \mathcal{U}$, 则 $\mathcal{P}(x) \in \mathcal{U}$;
5. 对任意 $i \in I$, 若 $(x_i)_{i \in I}$ 为一集族使得 $I \in \mathcal{U}$ 且 $x_i \in \mathcal{U}$, 则 $\ds \bigcup_{i \in I} x_i \in \mathcal{U}$;

### 注释

在原始的定义中, 性质 $(1)$ 是不必要的, 但在如今大多数书本上我们仍要求这个性质. 现在让我们讨论一些关于宇宙的相关结论.

### 命题 1.0.2 (宇宙的基本性质)

1. 若 $x \in \mathcal{U}$, 则 $\ds \bigcup_{y \in x} y \in \mathcal{U}$;
2. 若 $x, y \in \mathcal{U}$, 则 $x \times y \in \mathcal{U}$;
3. 若 $x \in \mathcal{U}$ 且 $y \sub x$, 则 $y \in \mathcal{U}$;
4. 若 $x \in \mathcal{U}$, 那么任意 $x$ 的商集仍是 $\mathcal{U}$ 的元素;
5. 对任意 $i \in I$, 若 $(x_i)_{i \in I}$ 为一集族使得 $I \in \mathcal{U}$ 且 $x_i \in \mathcal{U}$, 则 $\ds \coprod_{i \in I} x_i \in \mathcal{U}$;
6. 若 $x, y \in \mathcal{U}$, 则任意 $x$ 与 $y$ 之间对应 (映射) 仍是 $\mathcal{U}$ 的元素;
7. 若 $x, y \in \mathcal{U}$, 则任意 $x$ 与 $y$ 之间对应的集合仍是 $\mathcal{U}$ 的元素;
8. 对任意 $i \in I$, 若 $(x_i)_{i \in I}$ 为一集族使得 $I \in \mathcal{U}$ 且 $x_i \in \mathcal{U}$, 则 $\ds \prod_{i \in I} x_i \in \mathcal{U}$;
9. 若 $x \sub \mathcal{U}$ 且存在 $y \in \mathcal{U}$ 使得 $\text{card}(x) \leq \text{card}(y)$, 则 $x \in \mathcal{U}$;
10. 对任意 $n \in \N$, 宇宙 $\mathcal{U}$ 包含了基数为 $n$ 的有限集.

### 公理 1.0.3 (宇宙公理)

对任意集合 $X$, 皆存在宇宙 $\mathcal{U}$ 使得 $X \in \mathcal{U}$.

### 注释

若要详细讨论上述这条公理的来由, 势必需要引入关于不可达基数的讨论, 而这不是我们讨论的重点, 因此从略带过.

### 定义 1.0.4 ($\mathcal{U}$-集, $\mathcal{U}$-小集)

对任意集合 $X$：

- 若 $X \in \mathcal{U}$ 则称之为 **$\mathcal{U}$-集 ($\mathcal{U}$-set)**.
- 若 $X$ 与某一个 $\mathcal{U}$-集 等势, 则称之为 **$\mathcal{U}$-小集 ($\mathcal{U}$-small set)**.

## 1.1. 范畴论的基本概念

### 定义 1.1.1 (范畴, 态射集, 单位与合成态射, 自态射)

若 $\mathcal{C}$ 被称为一个 **范畴 (category)**, 其是由以下资料所构成的代数结构：

1. 称集合 $\op{Ob}(\mathcal{C})$ 的元素为 $\mathcal{C}$ 中的 **对象 (objects)**, 为了方便一些文章亦会简记为 $X \in \mathcal{C}$ 以替代 $X \in \op{Ob}(\mathcal{C})$;

2. 称集合 $\op{Mor}(\mathcal{C})$ 的元素为 $\mathcal{C}$ 中的 **态射 (morphisms)**, 当给定一对映射 $\Mor{\mathcal{C}} \overundertto{s}{t} \Ob{\mathcal{C}}$, 其中：

   - $s$ 给出态射的 **来源 (source)**;
   - $t$ 给出态射的 **目标 (target)**.

   那么对任意 $X, Y \in \Ob{\mathcal{C}}$ 我们定义 $\Hom{\mathcal{C}}{X}{Y} \coloneqq s^{-1}(X) \cap t^{-1}(Y)$, 或记为 $\hom{X}{Y}$ 或 $\mathcal{C}(X, Y)$, 称为从 $X$ 到 $Y$ 所有态射组成的 **态射集 / Hom-集 (Hom-set)**.

3. 称 $\mathcal{C}(X, X)$ 中的元素为 **自态射 (endomorphisms)**, 记为 $\End_\mathcal{C}(X)$.

4. 称映射 $\Map{1_X}{X}{X}{x}{x}$ 为 **单位态射 / 恒等态射 (identity morphism)**, 记为 $1_X$ 或 $\op{id}_X$;

5. 对于任意 $X, Y, Z\in \op{Ob}(\mathcal{C})$, 称 $\mathcal{C}$ 中的二元运算 $\Map{\circ}{\mathcal{C}(Y, Z) \times \mathcal{C}(X, Y)}{\mathcal{C}(X, Z)}{(f, g)}{f \circ g}$ 为 **合成态射 (composition of morphisms)**, 在无歧义的情况下可将 $f \circ g$ 简记为 $fg$, 以 **图表 (diagram)** 观察则有：
   $$
   \xymatrix{
   X \ar@{->}[rd]_{f \circ g} \ar@{->}[r]^{g} & Y \ar@{->}[d]^{f} \\
    & Z
   }
   $$
   且 $\mathcal{C}$ 下的态射都应保有以下条件：

   - 态射的结合律：$\Forall{f \in \mathcal{C}(Y, Z)} \Forall{g \in \mathcal{C}(X, Y)} \Forall{h \in \mathcal{C}(W, X)} (f \circ g) \circ h = f \circ (g \circ h)$;

   - 单位态射律：$\Forall{f \in \mathcal{C}(X, Y)} 1_Y \circ f = f = f \circ 1_X$.

     同样地, 该两条件通过 **交换图表 (commutative diagram)** 观察则有：
     $$
     % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOls1LDFdLCJ2YWx1ZSI6IlgifSx7InBvc2l0aW9uIjpbNiwwXSwidmFsdWUiOiJZIn0seyJwb3NpdGlvbiI6WzcsMV0sInZhbHVlIjoiWiJ9LHsicG9zaXRpb24iOls0LDBdLCJ2YWx1ZSI6IlcifSx7InBvc2l0aW9uIjpbMSwwXSwidmFsdWUiOiJYIn0seyJwb3NpdGlvbiI6WzEsMV0sInZhbHVlIjoiWSJ9LHsicG9zaXRpb24iOlsyLDFdLCJ2YWx1ZSI6IlkifSx7InBvc2l0aW9uIjpbMCwwXSwidmFsdWUiOiJYIn1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjIsInZhbHVlIjoiZiBcXGNpcmMgZyIsImxhYmVsUG9zaXRpb24iOiJyaWdodCIsImJlbmQiOjB9LHsiZnJvbSI6MCwidG8iOjEsInZhbHVlIjoiZyJ9LHsiZnJvbSI6MSwidG8iOjIsInZhbHVlIjoiZiJ9LHsiZnJvbSI6MywidG8iOjAsInZhbHVlIjoiaCJ9LHsiZnJvbSI6MywidG8iOjEsImJlbmQiOjAsImxhYmVsUG9zaXRpb24iOiJsZWZ0IiwidmFsdWUiOiJnIFxcY2lyYyBoIn0seyJmcm9tIjo0LCJ0byI6NSwidmFsdWUiOiJmIiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6NSwidG8iOjYsInZhbHVlIjoiMV9ZIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjo0LCJ0byI6NiwidmFsdWUiOiIxX1kgXFxjaXJjIGYiLCJsYWJlbFBvc2l0aW9uIjoibGVmdCJ9LHsiZnJvbSI6NywidG8iOjQsInZhbHVlIjoiMV9YIiwibGFiZWxQb3NpdGlvbiI6ImxlZnQifSx7ImZyb20iOjcsInRvIjo1LCJiZW5kIjowLCJ2YWx1ZSI6ImYgXFxjaXJjIDFfWCIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9XX0=
     \xymatrix{
     X \ar@{->}[r]^{1_X} \ar@{->}[rd]_{f \circ 1_X} & X \ar@{->}[d]|-{f} \ar@{->}[rd]^{1_Y \circ f} &  &  & W \ar@{->}[rd]^{h} \ar@{->}[rr]^{g \circ h} &  & Y \ar@{->}[rd]^{f} &  \\
      & Y \ar@{->}[r]_{1_Y} & Y &  &  & X \ar@{->}[rr]_{f \circ g} \ar@{->}[ru]^{g} &  & Z
     }
     $$
     注意到交换图本身其实就意味着态射间的 "等价关系", 因此我们时常称为 **图表可交换 (diagram commutes)**.

### 定义 1.1.2 ($\mathcal{U}$-范畴, $\mathcal{U}$-小范畴)

设 $\mathcal{C}$ 为范畴：

- 称 $\mathcal{C}$ 为 **$\mathcal{U}$-范畴 ($\mathcal{U}$-category)**, 当对任意 $X, Y \in \Ob{\mathcal{C}}$, 集合 $\Hom{\mathcal{C}}{X}{Y}$ 为 $\mathcal{U}$-小集;
- 称 $\mathcal{C}$ 为 **$\mathcal{U}$-小范畴 ($\mathcal{U}$-small category)**, 当满足上述条件外, 态射集 $\Mor{\mathcal{C}}$ 亦为 $\mathcal{U}$-小集.

### 注释

- 一些文献中会称 $\mathcal{U}$-范畴 为 **局部 $\mathcal{U}$-小范畴 (locally $\mathcal{U}$-small category)**.
- 范畴 $\mathcal{C}$ 是 $\mathcal{U}$-小范畴 $\iff$ 它是 $\mathcal{U}$-范畴且 $\Ob{\mathcal{C}}$ 为 $\mathcal{U}$-小集, 这由嵌入 $\map{\Ob{\mathcal{C}}}{\Mor{\mathcal{C}}}{X}{1_X}$ 给出.
- 如果一些代数结构 (如群, 环, 拓扑空间等) 作为基础集时是一个 $\mathcal{U}$-集合, 则将它们称为如 $\mathcal{U}$-群, $\mathcal{U}$-环, $\mathcal{U}$-拓扑空间等 (或称为小集, 小群等).
- 提前选定宇宙 $\mathcal{U}$, 由 [公理 1.0.3](#公理_1.0.3_(宇宙公理)), 我们总是可以扩大宇宙 $\mathcal{U}$ 使得 $\mathcal{C}$ 是 $\mathcal{U}$-小范畴.
- **接下来总是默认任意的范畴皆为 $\mathcal{U}$-小范畴 的事实 (除非特别说明)**, 并将 $\mathcal{U}$-群, $\mathcal{U}$-环, $\mathcal{U}$-拓扑空间等前面的符号 $\mathcal{U}$ 省略不记.

### 例子 1.1.3 (范畴的初步例子)

以下这些较为常见且重要的例子：

- 以集合作为对象, 函数作为态射, 所构成的范畴记为 $\op{Set}$, 特别地当其中的集合有限时亦构成范畴, 记为 $\text{FinSet}$.
- 以群作为对象, 群同态作为态射, 所构成的范畴记为 $\op{Grp}$, 而交换群所构成的范畴则记为 $\op{Ab}$.
- 以环作为对象, 环同态作为态射, 所构成的范畴记为 $\op{Ring}$, 而交换环所构成的范畴则记为 $\op{CRing}$.
- 以任意域 $\mathbb F$ 上的线性空间作为对象, $\mathbb{F}$-线性映射作为态射, 所构成的范畴记为 $\op{Vect}_{\mathbb F}$, 一般于无歧义情况下亦可简记为 $\op{Vect}$.
- 以 (含幺) 环 $R$ 上的 左 $R$-模 作为对象, $R$-线性映射 作为态射, 所构成的范畴记为 $_R\Mod$, 同样地所有 右 $R$-模 连同 $R$-线性映射所构成的范畴则记为 $\Mod_R$. 而当 $R$ 本身可交换, 则 $\Mod_R = \op{_R\Mod}$, 而当 $R = \Z$ 则 $_R \Mod = \Ab$.
- 以交换环 $R$ 上的 $R$-代数 作为对象, $R$-代数同态 作为态射, 所构成的范畴记为 $R\text{-Alg}$, 如若为交换 $R$-代数则记为 $R\text{-CAlg}$, 李代数则记为 $R\text{-Lie}$.
- 以拓扑空间作为对象, 连续函数作为态射, 所构成的范畴记为 $\Top$, 而带基点的拓扑空间所构成的范畴则记为 $\Top^*$.

### 定义 1.1.4 (离散范畴, 连通范畴)

设 $\mathcal{C}$ 为范畴：

- 当其中的任意对象 $X \in \Ob{\mathcal{C}}$ 都仅有唯一的态射 $1_X$ 时, 则称 $\mathcal{C}$ 为 **离散范畴 (discrete category)**.
- 对任意的 $X, Y \in \Ob{\mathcal{C}}$, 当 $\Hom{\mathcal{C}}{X}{Y} \neq \empty$, 则称 $\mathcal{C}$ 为 **连通范畴 (connected category)**.

### 注释 (对偶性)

在范畴论中 **对偶性 / 二元性 (duality)** 无处不在. 一个简单的例子, 设有范畴 $\mathcal{C}$, 挑选 $\mathcal{C}$ 中的任一态射 $f : A \to B$, 将其态射的方向逆转后得到 $f^{\oppos} : B \to A$, 而 $\Ob{\mathcal{C}}$ 连带 $\mathcal{C}$ 中所有被逆转的态射则构成了 $\mathcal{C}$ 的对偶范畴. 除了范畴本身的对偶性外, 还有许多范畴中结构的对偶概念, 如：

- 任意范畴 $\mathcal{C}$ 的对偶概念是对偶范畴 $\mathcal{C}^{\op{op}}$, 这将于 [定义 1.1.5](#定义_1.1.5_(对偶范畴)) 提及;
- **始对象 (initial object)** 与 **终对象 (terminal object)** 相互对偶;
- **协变函子 (covariant functor)** 与 **逆变函子 (contravariant functor)** 相互对偶;
- **单同态 (monomorphism)** 与 **满同态 (epimorphism)** 相互对偶;
- **乘积 (product)** 与 **余积 (coproduct)** 相互对偶;
- **极限 (limit)** 与 **余极限 (colimit)** 相互对偶 (注意该极限是一种在范畴上的泛构造, 后续会提及到, 并不是分析学的那个极限).

虽然这些概念都还未曾定义和介绍, 此时无需去了解它们. 但可以见得英文名前面带 **co** 的多为原本结构的对偶结构.

### 定义 1.1.5 (对偶范畴)

设 $\mathcal{C}$ 为范畴, 称 $\mathcal{C}^{\op{op}}$ 为 $\mathcal{C}$ 的 **对偶范畴 / 反范畴 (opposite category)**, 定义为以下资料所构成的范畴：

- $\op{Ob}(\mathcal{C}^{\op{op}}) \coloneqq \op{Ob}(\mathcal{C})$;
- $\mathcal{C^{\op{op}}}(X, Y) \coloneqq \mathcal{C}(Y, X)$;
- $\mathcal{C}^{\op{op}}$ 中单位态射与 $\mathcal{C}$ 的定义一致;
- $\mathcal{C}^{\op{op}}$ 中合成态射 $\circ$ 定义为 $\mathcal{C}$ 的反向合成, 即：$\Map{\circ}{\mathcal{C}^\oppos(Y, Z) \times \mathcal{C}^\oppos(X, Y)}{\mathcal{C}^\oppos(X, Z)}{(f, g)}{g \circ_\mathcal{C} f}$, 其中 $\circ_{\mathcal{C}}$ 为 $\mathcal{C}$ 中的合成态射.

### 注释

- 通常 $\mathcal{C}$ 中 $f$ 的对偶于 $\mathcal{C}^\oppos$ 中被记为 $f^\oppos$, 而于无歧义的情况下, 方便起见可将符号 $^\oppos$ 略去.
- 直观上, $\mathcal{C}$ 中的合成态射 $g \circ f : X \overto{f} Y \overto{g} Z$, 于对偶范畴 $\mathcal{C}^\oppos$ 中形同 $f \circ g : X \overfrom{f} Y \overfrom{g} Z$.

### 定义 1.1.6 (子范畴, 全子范畴)

对于任意范畴 $\mathcal{C, D}$, 若称 $\mathcal{D}$ 为 $\mathcal{C}$ 的 **子范畴 (subcategory)**, 记为 $\mathcal{D} \sub \mathcal{C}$, 当其满足了以下条件：

- **对象集封闭**：$\op{Ob}(\mathcal{D}) \sub \op{Ob}(\mathcal{C})$ 以及 $\op{Mor}(\mathcal{D}) \sub \op{Mor}(\mathcal{C})$;
- **保有单位态射**：$\Forall{X \in \op{Ob}(\mathcal{D})} 1_X \in \End(\mathcal{D})$;
- **来源与目标封闭**：$\Forall{f \in \Hom{\mathcal{C}}{X}{Y}} X, Y \in \op{Ob}(\mathcal{D})$;
- **态射合成封闭**：$\Forall{f, g \in \op{Mor}(\mathcal{D})} g \circ f \in \Mor{\mathcal{C}} \implies g \circ f \in \op{Mor}(\mathcal{D})$.

特别地, 若 $\Forall{X, Y \in \op{Ob}(\mathcal{D})} \mathcal{D}(X, Y) = \mathcal{C}(X, Y)$ 成立, 则称 $\mathcal{D}$ 为 $\mathcal{C}$ 的 **全子范畴 (full subcategory)**.

### 例子 1.1.7 (交换群范畴, 有限维线性空间范畴)

- $\op{Ab}$ 为 $\op{Grp}$ 的全子范畴, 因为所有交换群必然是所有群的子集, 并且 $\op{Ab}(X, Y) = \op{Grp}(X, Y)$.
- 域 $\mathbb F$ 上的有限维线性空间范畴 $\op{FinVect}_{\mathbb F}$ 是 $\op{Vect}_{\mathbb F}$ 的全子范畴.

## 1.2. 同态与同构

### 注释 (单同态, 满同态, 同构)

将函数的单射与满射的消除律抽象出来, 我们可以得到单同态与满同态, 而将双射的条件进一步放宽, 则得到同构的概念.

### 定义 1.2.1 (单同态, 满同态, 同构, 自同构)

设 $\mathcal{C}$ 为范畴, 对象 $X, Y\in \op{Ob}(\mathcal{C})$, 以及任意态射 $f : X \to Y$：

- 称 $f$ 为 **单同态 (monomorphism)**, 记为 $f : X \hookrightarrow Y$, 当它可被左消除 (以图表 $W \underset{g_2}{\overset{g_1}{\rightrightarrows}} X \overto{f} Y$ 观察则是可被右消除)：
  $$
  \Forall{W \in \op{Ob}(\mathcal{C})} \Forall{g_1, g_2 \in \mathcal{C}(W, X)} f \circ g_1 = f \circ g_2 \implies g_1 = g_2
  $$

- 称 $f$ 为 **满同态 (epimorphism)** 的, 记为 $f : X \rightarrowtail Y$, 当它可被右消除 (以图表 $X \overto{f} Y \underset{g_2}{\overset{g_1}{\rightrightarrows}} Z$ 观察则是可被左消除)：
  $$
  \Forall{Z \in \op{Ob}(\mathcal{C})} \Forall{g_1, g_2 : \mathcal{C}(Y, Z)} g_1 \circ f = g_2 \circ f \implies g_1 = g_2
  $$

- 若存在 $g : Y \to X$ 使得同时满足：

  - $1_X = g \circ f$, 即 $\Forall{x \in X} x = g(f(x))$;
  - $f \circ g = 1_Y$, 即 $\Forall{y \in Y} y = f(g(y))$.

  则有以下结论：

  - 称 $g$ 为 $f$ 的 **逆态射 (inverse morphism)**, 记为 $f^{-1}$, 其唯一性由 [命题 1.2.5](#命题_1.2.5_(逆态射的唯一性)) 给出.
  - 称 $f$ 为 **同构 (isomorphism)**, 记为 $X \overset{\sim}{\to} Y$ 或 $X \cong Y$ 或 $X \simeq Y$, 并记所有 $X, Y$ 之间的所有同构构成的集为 $\op{Iso}(X, Y)$.
  - 特别地, 若有 $X = Y$, 称同构 $f \in \mathcal{C}(X, X) = \op{End}_{\mathcal{C}}(X)$ 为 **自同构 (automorphism)**, 并记所有 $X$ 上所有自同构态射集为 $\op{Aut}(X)$.

### 命题 1.2.2 (单同态的基本性质)

设 $\mathcal{C}$ 为任意范畴, 对象 $X, Y, Z \in \Ob{\mathcal{C}}$ 及任意态射 $f : X \to Y$ 与 $g : Y \to Z$：

1. 若 $f$ 为单同态, 则 $f^\oppos$ 于 $\mathcal{C}^{\op{op}}$ 为满同态;
2. 若 $g, f$ 皆为单同态, 则它们的合成 $g \circ f$ 仍为单同态;
3. 若合成态射 $g \circ f $ 为单同态, 则 $f$ 为单同态.

##### 证明

1. 将 $\mathcal{C}$ 中可被右消除的图表 $X \underset{\varphi'}{\overset{\varphi}{\rightrightarrows}} Y \overto{f} Z$ 态射逆转得 $X \underset{\varphi'}{\overset{\varphi}{\leftleftarrows}} Y \overfrom{f} Z$, 显然于 $\mathcal{C}^{\op{op}}$ 中图表可被左消除, 因此其为满射.

2. 由于 $g$ 为单同态 $\iff$ 图表 $X \underset{\varphi'}{\overset{\varphi}{\rightrightarrows}} Y \overto{g} Z$ 可被右消除, 而 $f$ 为单同态 $\iff$ 图表 $W \underset{\psi'}{\overset{\psi}{\rightrightarrows}} X \overto{f} Y$ 可被右消除, 显然图表 $W \underset{\psi'}{\overset{\psi}{\rightrightarrows}} X \overto{f} Y \overto{g} Z$ 可被右消除.

3. 由于 $g \circ f$ 为单同态意味着 $(g \circ f) \circ h_1 = (g \circ f) \circ h_2$ 透过结合律与消除 $g$ 后得 $f \circ h_1 = f \circ h_2$, 因此 $h_1 = h_2$, 显然 $f$ 仍为单同态.

### 例子 1.2.3 (代数学中常见的同态)

- 在集合范畴 $\Sets$ 中, **单射函数 (injective function)** 是单同态, **满射函数 (surjective function)** 是满同态, **双射函数 (bijective function)** 便是同构, 并且考虑 $\R \to \R$ 上的双射函数亦构成自同构.
- 在群范畴 $\Grp$ 中, **单同态 (group monomorphism)**, **满同态 (group epimorphism)** 以及 **群同构 (group isomorphism)** 分别为单同态, 满同态与同构.
- 在拓扑空间范畴 $\op{Top}$ 中, **同胚 (homeomorphism)** 是同构.
- 在微分流形范畴 $\op{Diff}$ 中, **微分同胚 (diffeomorphism)** 同构.

### 命题 1.2.4 (满同态的基本性质)

设 $\mathcal{C}$ 为任意范畴, 对象 $X, Y, Z \in \Ob{\mathcal{C}}$ 及任意态射 $f : X \to Y$ 与 $g : Y \to Z$：

1. 若 $f$ 为满同态, 则 $f^\oppos$ 于 $\mathcal{C}^{\op{op}}$ 为单同态;
2. 若 $g, f$ 皆为满同态, 则它们的合成 $g \circ f$ 仍为满同态;
3. 若合成态射 $g \circ f $ 为满同态, 则 $g$ 为满同态.

##### 证明

类似于 [命题 1.2.2](#命题_1.2.2_(单同态的基本性质)) 中的证明, 读者可尝试自证.

### 命题 1.2.5 (逆态射的唯一性)

对于任意范畴 $\mathcal{C}$, 对象 $X, Y \in \op{Ob}(\mathcal{C})$, 态射 $f : X \to Y$, 则具有以下性质：

1. **逆态射的唯一性**：若存在 $f$ 的逆态射 $g : Y \to X$, 则 $g$ 是唯一的;
2. **双重取逆等价于自身**：$(f^{-1})^{-1} = f$.

##### 证明

1. 设另一逆态射为 $g' : Y \to X$, 则有 $g = g \circ 1_Y = g \circ (f \circ g') = (g \circ f) \circ g' = 1_X \circ g' = g'$.

2. 由上述逆态射的唯一性所保证.

## 1.3. 泛性质初步

### 注释 (特殊对象, 乘积与泛性质的联系)

始对象与终对象除了作为范畴中的特殊对象, 并且一般是用来刻画范畴上的 **泛性质 (universal property)** 的, 至于为什么需要研究泛性质呢？这其实是因为数学上的许多结构都能够使用泛性质表示其结论, 例如接下来将提及到的 乘积 就满足了泛性质, 在集合范畴上乘积就是笛卡尔积, 那么考虑映射 $\Map{f}{\R}{\R \times \C}{x}{(x^2, x + xi)}$, 泛性质告诉我们分别将 $x \in \R$ 透过 $\Map{f_1}{\R}{\R}{x}{x^2}$ 或 $\Map{f_2}{\R}{\C}{x}{x + xi}$ 投影为 $\R$ 或 $\C$ 上的值与将 $x$ 先经过 $f$ 唯一地映射到 $\R \times \C$ 然后再分别映射到 $\R$ 或 $\C$ 上的结论是一样的, 这是初步了解泛性质的一个极佳例子, 并且不单止类似于上述这种较为基础的结构, 还有许许多多更复杂结构都满足了泛性质, 例如自由群可被表述为 $\op{Grp}$ 范畴中的自由对象, 而自由对象在范畴论上本身就是携带了泛性质的自由结构. 更多的例子数之不尽, 而由于泛性质的严格定义需要依赖到后续章节中的内容, 因此该处目前仅留个念想.

### 定义 1.3.1 (始对象, 终对象, 零对象)

对于任意范畴 $\mathcal{C}$ 以及任意 $X \in \op{Ob}(\mathcal{C})$：

- 对象 $I \in \op{Ob}(\mathcal{C})$ 被称为是 $\mathcal{C}$ 下的 **始对象 (initial object)**, 若存在唯一态射 $I \overset{\exists!}{\to} X$;

- 对象 $T \in \op{Ob}(\mathcal{C})$ 被称为是 $\mathcal{C}$ 下的 **终对象 (terminal object)**, 若存在唯一态射 $X \overset{\exists!}{\to} T$;

- 对象 $0 \in \op{Ob}(\mathcal{C})$ 同时为始对象以及终对象则称之为 **零对象 (zero object)**, 使得额外对于任意 $Y \in \op{Ob}(\mathcal{C})$, 存在唯一态射合成 $X \overset{\exists!}{\to} 0 \overset{\exists!}{\to} Y$, 该态射合成亦被称为 **零态射 (zero morphism)**.

### 注释 (唯一性)

- 始对象与终对象皆是唯一的, 因为若考虑始对象 $I, I' \in \Ob{\mathcal{C}}$, 那么就存在唯一态射 $f : I \to I'$ 以及 $g : I' \to I$, 那么它们的合成 $g \circ f : I \to I$ 是唯一的, 只能是 $1_I$, 同理我们有 $f \circ g = 1_{I'}$, 因此得同构 $I \simeq I'$, 终对象亦类似.

- 零对象亦是唯一的, 例如我们考虑任意对象 $X, Y \in \Ob{\mathcal{C}}$ 的两个零态射为 $X \to 0 \to Y$ 及 $X \to 0' \to Y$, 由于零对象同时为始对象与终对象, 那么从 $0, 0'$ 出入的态射都是唯一的, 则下图自动交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IlgifSx7InBvc2l0aW9uIjpbMiwxXSwidmFsdWUiOiJZIn0seyJwb3NpdGlvbiI6WzEsMF0sInZhbHVlIjoiMCJ9LHsicG9zaXRpb24iOlsxLDJdLCJ2YWx1ZSI6IjAnIn1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjJ9LHsiZnJvbSI6MiwidG8iOjF9LHsiZnJvbSI6MCwidG8iOjN9LHsiZnJvbSI6MywidG8iOjF9LHsiZnJvbSI6MiwidG8iOjMsImxpbmUiOiJzb2xpZCIsInZhbHVlIjoiXFxzaW1lcSJ9XX0=
  \xymatrix{
   & 0 \ar@{->}[rd] \ar@{->}[dd]^{\simeq} &  \\
  X \ar@{->}[ru] \ar@{->}[rd] &  & Y \\
   & 0' \ar@{->}[ru] & 
  }
  $$

### 例子 1.3.2 (单点集, 平凡群)

- 设 $\mathcal{C} = \Grp$, 则平凡群为该范畴中的零对象.

- 设 $\mathcal{C} = \Vect$, 则零空间 $V$, 即 $\dim(V) = 0$ 的线性空间为该范畴中的零对象.

然而并不是每个范畴都一定具备这些对象的, 例如在集合范畴中其始对象就是 $\empty$, 终对象为 $\set{*}$ (单点集), 但却不存在零对象, 因为当我们考虑终对象的条件, 存在许多函数从任意集 $X$ 映射至空集, 因此该态射不唯一.

### 注释

在集合论中, 我们可以透过笛卡尔积将多个集合联系起来讨论, 同样地这一概念亦可进一步推广至范畴论中, 因此就产生了以下关于范畴中的乘积以及余积的概念.

### 定义 1.3.3 (乘积, 余积)

对于任意范畴 $\mathcal{C}$ 以及 $X, Y \in \op{Ob}(\mathcal{C})$：

- 若称 $X \times Y \in \op{Ob}(\mathcal{C})$ 为对象 $X$ 与 $Y$ 之间的 **乘积 (product)**, 当其携带了一对 **典范投射 / 投射态射 (canonical projections / projection morphisms)** $X \times Y \overset{p_1}{\to} X$ 以及 $X \times Y \overset{p_2}{\to} Y$ 时满足了泛性质, 即：

  对于任意一对态射 $Q \overset{f_1}{\to} X$ 以及 $Q \overset{f_2}{\to} Y$, 存在唯一态射 $Q \overset{f}{\to} X \times Y$ 使得下图可交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IlggXFx0aW1lcyBZIn0seyJwb3NpdGlvbiI6WzEsMF0sInZhbHVlIjoiUSJ9LHsicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IlgifSx7InBvc2l0aW9uIjpbMiwxXSwidmFsdWUiOiJZIn1dLCJlZGdlcyI6W3siZnJvbSI6MSwidG8iOjAsImxpbmUiOiJkYXNoZWQiLCJ2YWx1ZSI6ImYiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjowLCJ0byI6MiwidmFsdWUiOiJwXzEifSx7ImZyb20iOjAsInRvIjozLCJ2YWx1ZSI6InBfMiIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6MSwidG8iOjIsInZhbHVlIjoiZl8xIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjoxLCJ0byI6MywidmFsdWUiOiJmXzIifV19
  \xymatrix{
   & Q \ar@{-->}[d]|-{f} \ar@{->}[ld]_{f_1} \ar@{->}[rd]^{f_2} &  \\
  X & X \times Y \ar@{->}[l]^{p_1} \ar@{->}[r]_{p_2} & Y
  }
  $$

- 若称 $X + Y \in \op{Ob}(\mathcal{C})$ 为对象 $X$ 与 $Y$ 之间的 **余积 (coproduct)** (或记为 $X \oplus Y$), 当其携带了一对 **典范注射 / 注射态射 (canonical injections / injection morphisms)** $X \overset{i_1}{\to} X + Y$ 以及 $Y \overset{i_2}{\to} X + Y$ 时满足了泛性质, 即：

  对于任意一对态射 $X \overset{f_1}{\to} Q$ 以及 $Y \overset{f_2}{\to} Q$, 存在唯一态射 $X + Y \overset{f}{\to} Q$ 使得下图可交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IlggKyBZIn0seyJwb3NpdGlvbiI6WzEsMF0sInZhbHVlIjoiUSJ9LHsicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IlgifSx7InBvc2l0aW9uIjpbMiwxXSwidmFsdWUiOiJZIn1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjEsImxpbmUiOiJkYXNoZWQiLCJ2YWx1ZSI6ImYiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjoyLCJ0byI6MCwidmFsdWUiOiJpXzEiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjMsInRvIjowLCJ2YWx1ZSI6ImlfMiIsImxhYmVsUG9zaXRpb24iOiJsZWZ0In0seyJmcm9tIjoyLCJ0byI6MSwidmFsdWUiOiJmXzEiLCJsYWJlbFBvc2l0aW9uIjoibGVmdCJ9LHsiZnJvbSI6MywidG8iOjEsInZhbHVlIjoiZl8yIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In1dfQ==
  \xymatrix{
   & Q &  \\
  X \ar@{->}[r]_{i_1} \ar@{->}[ru]^{f_1} & X + Y \ar@{-->}[u]|-{f} & Y \ar@{->}[l]^{i_2} \ar@{->}[lu]_{f_2}
  }
  $$

同样地, 我们可将上述仅有两个对象之间的乘积或余积进一步推广至一族对象 $\set{X_i}_{i \in I}$：

- 称 $\ds \prod_{i \in I} X_i \in \op{Ob}(\mathcal{C})$ 为是一族对象 $\set{X_i}_{i \in I}$ 的乘积, 当对于任意 $i \in I$ ($I$ 为指标集) 其有一族典范投射：
  $$
  p_i : \left( \prod_{i \in I} X_i \right) \to X_i
  $$
  使得其满足了泛性质, 即对于任意其他对象 $Q \in \op{Ob}(\mathcal{C})$ 以及态射 $Q \overset{f_i}{\to} X_i$, 存在唯一态射 $\ds (f_i)_{i \in I} : Q \to \prod_{i \in I} X_i$ 使得下图可交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IlxccHJvZF97aSBcXGluIEl9IFhfaSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IlhfaSJ9LHsicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IlEifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MSwidmFsdWUiOiJwX2kiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjIsInRvIjowLCJ2YWx1ZSI6IihmX2kpX3tpIFxcaW4gSX0iLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJsaW5lIjoiZGFzaGVkIn0seyJmcm9tIjoyLCJ0byI6MSwidmFsdWUiOiJmX2kifV19
  \xymatrix{
  Q \ar@{-->}[d]_{(f_i)_{i \in I}} \ar@{->}[rd]^{f_i} &  \\
  \prod_{i \in I} X_i \ar@{->}[r]_{p_i} & X_i
  }
  $$

- 称 $\ds \coprod_{i \in I} X_i \in \op{Ob}(\mathcal{C})$ (或记为 $\ds \bigoplus_{i \in I} X_i$) 为是一族对象 $\set{X_i}_{i \in I}$ 的余积, 当对于任意 $i \in I$ ($I$ 为指标集)其有一族典范注射：
  $$
  p_i : X_i \to \left( \coprod_{i \in I} X_i \right)
  $$
  使得其满足了泛性质, 即对于任意其他对象 $Q \in \op{Ob}(\mathcal{C})$ 以及态射 $X_i \overset{f_i}{\to} Q$, 存在唯一态射 $\ds (f_i)_{i \in I} : \coprod_{i \in I} X_i \to Q$ 使得下图可交换：
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

- $\op{Ob}(\mathcal{C} \times \mathcal{D}) \coloneqq \op{Ob}(\mathcal{C}) \times \op{Ob}(\mathcal{D})$;

- $(\mathcal{C} \times \mathcal{D})((X_1, X_2), (Y_1, Y_2)) \coloneqq \mathcal{C}(X_1, Y_1) \times \mathcal{D}(X_2, Y_2)$, 其中 $\forall (X_1, X_2), (Y_1, Y_2) \in \op{Ob}(\mathcal{C} \times \mathcal{D})$;

- $1_{\mathcal{C} \times \mathcal{D}} \coloneqq (1_{X_1}, 1_{X_2})$;

- $\mathcal{C} \times \mathcal{D}$ 的合成态射定义为：
  $$
  \begin{align}
  [\mathcal{C}(Y_1, Z_1) \times \mathcal{D}(Y_2, Z_2))] \times 
  [\mathcal{C}(X_1, Y_1) \times \mathcal{D}(X_2, Y_2)] & \overset{\circ}{\to} 
  \mathcal{C}(X_1, Z_1) \times \mathcal{D}(X_2, Z_2) \\
  (g_1, g_2) \circ (f_1, f_2) & \mapsto (g_1 \circ f_1, g_2 \circ f_2)
  \end{align}
  $$

### 注释 (乘积范畴的推广)

利用类似于 [定义 1.3.3 (乘积, 余积)](#定义_1.3.3_(乘积,_余积)) 的手段, 可推广并构造出一族范畴 $(\mathcal{C}_i)_{i \in I}$ 的乘积范畴 $\ds \prod_{i \in I} \mathcal{C}_i$, 定义为：

- $\ds \op{Ob}\b{\prod_{i \in I} \mathcal{C}_i}  \coloneqq\prod_{i \in I} \op{Ob}(\mathcal{C}_i)$;

- $\ds \hom{\prod_{i \in I} X_i}{\prod_{i \in I} Y_i} \coloneqq \prod_{i \in I} \mathcal{C}_i(X_i, Y_i)$;

- $\ds 1 \coloneqq (1_{X_1}, 1_{X_2}, \dots, 1_{X_i}, \dots)$;

- $\ds \prod_{i \in I} \mathcal{C}_i$ 的合成态射无非就是元组中逐项态射合成.

对偶的 **余积范畴 (coproduct category)** 亦类似, 分别记为 $\mathcal{C} + \mathcal{D}$ 或 $\mathcal{C} \oplus \mathcal{D}$ 以及 $\ds \coprod_{i \in I} \mathcal{C}_i$ 或 $\ds \bigoplus_{i \in I} \mathcal{C}_i$, 这里不再一一阐述, 读者可尝试自证其的确构成范畴.

{% end %}