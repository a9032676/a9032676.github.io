+++

title = "范畴论 3 - 函子范畴, 泛性质与可表函子"
date = 2023-06-11
draft = false

[taxonomies]
categories = ["范畴论"]
tags = ["数学", "代数学", "范畴论"]

[extra]
lang = "zh"
toc = true
mathjax = true

+++

{% caution() %}本文存在部分内容尚未完全施工完毕, 作者将尽快更新！{% end %}

{% mathjax_escape() %}

## 3.1. 函子范畴

### 注释

回顾第一章, 我们已然定义了什么为之 (余) 乘积范畴, 则可定义形如 $\mathcal{C}_1 \times \mathcal{C}_2 \to \mathcal{D}$ 为二元函子, 而多元函子则为：
$$
\mathcal{C}_1 \times \dots \times \mathcal{C}_n \to \mathcal{D}
$$
使得我们可以定义类似于代数结构上的二元/多元运算, 例如下述的 $\op{Hom}$ 函子便是很好的例子.

### 定义 3.1.1 ($\op{Hom}$-函子)

设有范畴 $\mathcal{C}$, 定义二元函子为 $\Map{\op{Hom}_\mathcal{C}}{\mathcal{C}^\oppos \times \mathcal{C}}{\op{Set}}{(X, Y)}{\Hom{\mathcal{C}}{X}{Y}}$, 称其为 **$\op{Hom}$-函子 ($\op{Hom}$-functor)**. 而由于 $\mathcal{C}$ 中任意一对态射 $f : X' \to X$ 以及 $g : Y \to Y'$ 皆可诱导下述映射 $\Hom{\mathcal{C}}{f}{g}$：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlsyLDBdLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtDfShYLCBZKSJ9LHsicG9zaXRpb24iOlsyLDFdLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtDfShYJywgWScpIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiWCcifSx7InBvc2l0aW9uIjpbMCwwXSwidmFsdWUiOiJYIn0seyJwb3NpdGlvbiI6WzEsMF0sInZhbHVlIjoiWSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IlknIn0seyJwb3NpdGlvbiI6WzMsMF0sInZhbHVlIjoiXFxwaGkifSx7InBvc2l0aW9uIjpbMywxXSwidmFsdWUiOiJnIFxcY2lyYyBcXHBoaSBcXGNpcmMgZiJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIiwidmFsdWUiOiJcXHRleHR7SG9tfV9cXG1hdGhjYWx7Q30oZiwgZykifSx7ImZyb20iOjIsInRvIjozLCJsaW5lIjoiZGFzaGVkIiwidmFsdWUiOiJmIn0seyJmcm9tIjo0LCJ0byI6NSwibGluZSI6ImRhc2hlZCIsInZhbHVlIjoiZyIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6NiwidG8iOjcsInRhaWwiOiJtYXBzdG8ifSx7ImZyb20iOjAsInRvIjo2LCJsaW5lIjoic29saWQiLCJoZWFkIjoibm9uZSIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUiLCJ2YWx1ZSI6IlxcbmkifSx7ImZyb20iOjcsInRvIjoxLCJsaW5lIjoic29saWQiLCJoZWFkIjoibm9uZSIsInZhbHVlIjoiXFxuaSIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifV19
\xymatrix{
X & Y \ar@{-->}[d]_{g} & \text{Hom}_\mathcal{C}(X, Y) \ar@{->}[d]|-{{\text{Hom}_\mathcal{C}(f, g)}} \ar@{}[r]|-{\ni} & \phi \ar@{|->}[d] \\
X' \ar@{-->}[u]^{f} & Y' & \text{Hom}_\mathcal{C}(X', Y') & g \circ \phi \circ f \ar@{}[l]|-{\ni}
}
$$

### 注释

- 惯常称 $\phi$ 对 $f$ 作 **拉回 (pullback)**, 记为 $f^*\phi = \phi \circ f$, 对 $g$ 作 **推出 (pushout)**, 记为 $g_* \phi = g \circ \phi$.
- 可观察到拉回 $(f_1 \circ f_2)^* = {f_2}^* \circ {f_1}^*$.

### 定义 3.1.2 (函子范畴)

设 $\mathcal{C}, \mathcal{D}$ 为范畴, 我们定义从 $\mathcal{C}$ 到 $\mathcal{D}$ 的 **函子范畴 (functor category)**, 记为 $\Fct(\mathcal{C}, \mathcal{D})$, $[\mathcal{C}, \mathcal{D}]$ 或 $\mathcal{D}^\mathcal{C}$, 为以下结构所构成的范畴：

- $\Ob{\Fct(\mathcal{C}, \mathcal{D})} \coloneqq \Set{\mathcal{C} \overset{\text{函子}}{\to} \mathcal{D}}$, 即所有从 $\mathcal{C}$ 到 $\mathcal{D}$ 的函子;
- $\Hom{\Fct(\mathcal{C}, \mathcal{D})}{F}{G} \coloneqq F \Rightarrow G$, 即为从 $F$ 到 $G$ 的自然变换;
- $1_{\Fct(\mathcal{C}, \mathcal{D})} \coloneqq \eta : F \Rightarrow F$, 其中定义构件为 $\eta_{(-)} \coloneqq 1_{(-)}$;
- $\Fct(\mathcal{C}, \mathcal{D})$ 的合成则定义为自然变换间的纵合成.

### 注释 (函子范畴的大小问题)

- 若 $\mathcal{C}, \mathcal{D}$ 皆为小范畴, 则 $\Fct(\mathcal{C},\mathcal{D})$ 仍为小范畴 (粗略的说, 小范畴即指其全体对象与全体态射都应为集合而非真类);
- 若 $\mathcal{C}$ 为小范畴而 $\mathcal{D}$ 为局部小范畴, 则 $\Fct(\mathcal{C}, \mathcal{D})$ 仍为局部小范畴 (即指其全体态射应为集合而非真类);
- 若 $\mathcal{C}, \mathcal{D}$ 都是局部小, 并且若 $\mathcal{C}$ 不为小范畴 (即其全体对象不为集合), 则 $\Fct(\mathcal{C}, \mathcal{D})$ 通常不是局部小的.

### 命题 3.1.3 (函子范畴的对偶同构于对偶范畴间的函子范畴)

设 $\mathcal{C}, \mathcal{D}$ 为范畴, 则存在自然同构 $\Map{\sim}{\Fct(\mathcal{C},\mathcal{D})^\oppos}{\Fct(\mathcal{C}^\oppos,\mathcal{D}^\oppos)}{\varphi}{\varphi^\oppos}$.

### 例子 3.1.4 (离散范畴)

考虑指标集 $I$ ($\mathcal{U}$-小集), 取离散范畴 $\Disc{I}$, 则对任意 $\mathcal{C}$ 皆有范畴间的同构 $\mathcal{C}^{\Disc{I}} \simeq \prod_{i \in I} \mathcal{C}$.

### 定义 3.1.5 (范畴的中心)

设 $\mathcal{C}$ 为范畴, 则 $\mathcal{C}$ 的 **中心 (center)** 被定义为 $Z(\mathcal{C}) \coloneqq \End(1_\mathcal{C}) = \Hom{\Fct(\mathcal{C}, \mathcal{C})}{1_\mathcal{C}}{1_\mathcal{C}}$, 即由 $\mathcal{C}$ 中全体恒等函子间的 **自-自然变换 (endo natural transformation)** 所组成的集合, 且 $(Z(\mathcal{C}), \circ)$ 构成交换幺半群. 其中的元素无非就是一族以自然变换的构件作为自同态的态射 $\psi_{(-)} : (-) \to (-)$, 使得对任意 $f : X \to Y$ 下图皆可交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IjFfXFxtYXRoY2Fse0N9KFgpIn0seyJwb3NpdGlvbiI6WzEsMF0sInZhbHVlIjoiMV9cXG1hdGhjYWx7Q30oWCkifSx7InBvc2l0aW9uIjpbMCwxXSwidmFsdWUiOiIxX1xcbWF0aGNhbHtDfShZKSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IjFfXFxtYXRoY2Fse0N9KFkpIn1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjIsInZhbHVlIjoiMV9cXG1hdGhjYWx7Q30oZikiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjEsInRvIjozLCJ2YWx1ZSI6IjFfXFxtYXRoY2Fse0N9KGYpIn0seyJmcm9tIjowLCJ0byI6MSwidmFsdWUiOiJcXHBzaV9YIn0seyJmcm9tIjoyLCJ0byI6MywidmFsdWUiOiJcXHBzaV9ZIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In1dfQ==
\xymatrix{
1_\mathcal{C}(X) \ar@{->}[d]_{1_\mathcal{C}(f)} \ar@{->}[r]^{\psi_X} & 1_\mathcal{C}(X) \ar@{->}[d]^{1_\mathcal{C}(f)} \\
1_\mathcal{C}(Y) \ar@{->}[r]_{\psi_Y} & 1_\mathcal{C}(Y)
}
$$


### 命题 3.1.6 (范畴等价诱导中心同构)

设 $\mathcal{C},\mathcal{D}$ 为范畴, 若有范畴等价 $F : \mathcal{C} \to \mathcal{D}$, 则可诱导出 $Z(\mathcal{C}) \simeq Z(\mathcal{D})$.

## 3.2. 泛性质

### 注释 (始对象与终对象)

- 于第一章中我们已然定义了始对象与终对象的定义, 它们有一个较为方便的等价定义, 即：
  - 称范畴 $\mathcal{C}$ 中的 $I \in \Ob{\mathcal{C}}$ 为 **始对象 (initial object)**, 当对任意 $X \in \Ob{\mathcal{C}}$ 态射集 $\Hom{\mathcal{C}}{I}{X}$ 仅有一个元素;
  - 称范畴 $\mathcal{C}$ 中的 $T \in \Ob{\mathcal{C}}$ 为 **终对象 (terminal object)**, 当对任意 $X \in \Ob{\mathcal{C}}$ 态射集 $\Hom{\mathcal{C}}{X}{T}$ 仅有一个元素.
- 而始对象与终对象是互为对偶的概念, 即 $\mathcal{C}$ 的始对象无非就是 $\mathcal{C}^\oppos$ 的终对象, 反之亦然.
- 始对象与终对象都是唯一的, 例如设 $I, I'$ 为 $\mathcal{C}$ 的始对象, 则存在唯一同构 $I \overto{\sim} I'$, 终对象亦类似.

它们的作用多是用作描述某一类结构的泛性质 (例如自由结构, 完备化等), 但为了准确阐述泛性质这一概念, 我们需要引入以下范畴.

### 定义 3.2.1 (逗号范畴)

设有一对函子 $\mathcal{A} \overto{S} \mathcal{C} \overfrom{T} \mathcal{B}$, 称 $(S/T)$ 为 **逗号范畴 (comma category)**, 它是由以下结构所构成的范畴：

- $\Ob{S/T} \coloneqq \Set{ \b{A, B, S(A) \overto{f} T(B)} : A \in \Ob{\mathcal{A}}, B \in \Ob{\mathcal{B}} }$;
- $\Hom{(S/T)}{(A, B, f)}{(A', B', f')} \coloneqq \Set{ (A \overto{g} A', B \overto{h} B') : \vcenter{\xymatrix{
  S(A) \ar@{->}[d]_{f} \ar@{->}[r]^{S(g)} & S(A') \ar@{->}[d]^{f'} \\
  T(B) \ar@{->}[r]_{T(h)} & T(B')
  }} }$;
- 对象 $(A, B, f)$ 的单位元为 $1_{(A, B, f)} \coloneqq (1_A, 1_B)$;
- 态射的合成为 $(g_1, h_1) \circ (g_2, h_2) = (g_1 \circ g_2, h_1 \circ h_2)$.

### 注释

- 由于历史原因, 许多旧著作会将 $(S/T)$ 记为 $(S, T)$, 这是逗号范畴名字的由来.
- 由于上述定义的 $(S/T)$ 的对象为元组 $(A, B, f)$, 类似范畴积般显然有一对投影函子 $\mathcal{A} \overfrom{P} (S/T) \overto{Q} \mathcal{B}$.
- 逗号范畴给予了另一种方式让我们可以观察范畴的态射, 下面是一些例子.

### 注释 (特例 $(X/T)$ 与余切范畴)

记仅有一个对象和态射的范畴为 $\bold{1}$, 如果我们指定 $\mathcal{C}$ 中的一个对象 $X$ 相当于是指定了函子 $X : \bold{1} \to \mathcal{C}$, 若考虑 $\bold{1} \overto{X} \mathcal{C} \overfrom{T} \mathcal{W}$ 的逗号范畴 $(X/T)$, 则它的结构为：

- $\Ob{X/T} \coloneqq \Set{ \b{W, X \overto{f} T(W)} : W \in \mathcal{W} }$;
- $\Hom{(X/T)}{\b{W, X \overto{f} T(W)}}{\b{W', X \overto{f'} T(W')}} \coloneqq \Set{ W \overto{h} W' : \vcenter{\xymatrix{
  & X \ar@{->}[ld]_{f} \ar@{->}[rd]^{f'} &  \\
  T(W) \ar@{->}[rr]_{T(h)} &  & T(W')
  }} }$.

若取 $\mathcal{W} = \mathcal{C}$ 及 $T = 1_\mathcal{C}$ 即得一对函子 $\bold{1} \overto{X} \mathcal{C} \overfrom{1_\mathcal{C}} \mathcal{C}$, 它的逗号范畴我们称之为对象 $X$ 的 **余切范畴 (coslice category) ** 或 **仰范畴 (over category)**, 记为 $\mathcal{C}_{X/}$ 或 $^{X/}\mathcal{C}$. 不过余切范畴我们暂且不在这里讨论, 下述两个例子仍以特例 $(X/T)$ 作举.

### 例子 3.2.2 (自由线性空间)

若考虑域 $\mathbb{F}$ 上的线性空间 $\Vect_\mathbb{F}$, 定义函子 $\MMap{V}{\Sets}{\Vect_\mathbb{F}}{X}{\bigoplus_{x \in X} \mathbb{F}x}{\bb{X \overto{f} Y}}{\bb{V(X) \overto{V(f)} V(Y)}}$ 为以 $X$ 为基的线性空间, 且令 $U : \Vect_\mathbb{F} \to \Sets$ 为遗忘函子, 我们便能给出 $\Sets$ 中的一个态射 $\Map{\iota}{X}{U(V(X))}{x}{x \in V(X)}$, 可见 $X$ 生成了 $V(X)$, 因此又我们称它为 **自由线性空间 (free vector space)**.

而为了刻画 $V(X)$ 的泛性质, 我们考虑范畴 $(X/U)$, 其中的任何连续映射 $h : W \to W'$ 应要使下图于 $\Sets$ 中交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IlUoVykifSx7InBvc2l0aW9uIjpbMiwxXSwidmFsdWUiOiJVKFcnKSJ9LHsicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IlgifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MSwidmFsdWUiOiJVKGgpIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjoyLCJ0byI6MCwidmFsdWUiOiJmIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjoyLCJ0byI6MSwidmFsdWUiOiJmJyJ9XX0=
\xymatrix{
 & X \ar@{->}[ld]_{f} \ar@{->}[rd]^{f'} &  \\
U(W) \ar@{->}[rr]_{U(h)} &  & U(W')
}
$$
现在我们断言 $\b{V(X), X \overto{\iota} U(V(X))} \in \Ob{X/U}$ 为 $(X/U)$ 的始对象, 那么对任意 $\b{W, X \overto{i} U(W)} \in \Ob{X/U}$, 由于 $X$ 是 $V(X)$ 的基, 因此就存在唯一的连续映射 $h : V(X) \to W$ 使得下图交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IlUoVihYKSkifSx7InBvc2l0aW9uIjpbMiwxXSwidmFsdWUiOiJVKFcpIn0seyJwb3NpdGlvbiI6WzEsMF0sInZhbHVlIjoiWCJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJ2YWx1ZSI6IlUoaCkiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjIsInRvIjowLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJ2YWx1ZSI6IlxcaW90YSJ9LHsiZnJvbSI6MiwidG8iOjEsInZhbHVlIjoiaSJ9XX0=
\xymatrix{
 & X \ar@{->}[ld]_{\iota} \ar@{->}[rd]^{i} &  \\
U(V(X)) \ar@{->}[rr]_{U(h)} &  & U(W)
}
$$
因此 $(X/U)$ 中的始对象准确地刻画了关于 $V(X)$ 的泛性质. 事实上该类结构我们称之为 **自由构造 (free construction)**, 并且后续将见得它可以以更精确的方式, 即 **自由对象 (free object)** 构造而来.

### 例子 3.2.3 (完备度量空间)

考虑所有度量空间 $(X, d)$ 构成的范畴 $\op{Metr}$, 其中的态射为保距映射 $f : (X, d_X) \to (Y, d_Y)$, 即：
$$
\Forall{u, v \in X} d_Y(f(u), f(v)) = d_X(u, v)
$$
那么对度量空间完备化则给出一个函子 $\Map{C}{\op{Metr}}{\op{ComMetr}}{(X, d)}{(\hat X, \hat d)}$, 我们记 $\op{ComMetr}$ 为完备度量空间所构成的范畴, 其中：

- $\hat{X} \coloneqq \text{$X$ 中所有柯西列 $\vec{x} = (x_n)_{n \geq 0}$ 的等价类}$;
- $\displaystyle \vec{d}(\vec{x}, \vec{y}) \coloneqq \lim_{n \to \infin} d(x_n, y_n)$.

而由于 $\op{ComMetr}$ 是 $\op{Metr}$ 的全子范畴, 我们给出包含函子 $\Map{\iota}{X}{I(\hat{X})}{x}{(x_n \coloneqq x)_{n \geq 1}}$, 如同 [例子 3.2.2](#例子_3.2.2_(自由线性空间)) 般我们将完备化描述为 $(X/I)$ 中的始对象 $\b{\hat{X}, X \overto{\iota} I(\hat{X})}$, 那么对任意 $\b{ Y, X \overto{i} I(Y) } \in \Ob{X/I}$ 则存在唯一的态射 $h : \hat{X} \to Y$ 使得下图交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IkkoXFxoYXR7WH0pIn0seyJwb3NpdGlvbiI6WzIsMV0sInZhbHVlIjoiSShZKSJ9LHsicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IlgifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MSwidmFsdWUiOiJJKGgpIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjoyLCJ0byI6MCwibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwidmFsdWUiOiJcXGlvdGEifSx7ImZyb20iOjIsInRvIjoxLCJ2YWx1ZSI6ImkifV19
\xymatrix{
 & X \ar@{->}[ld]_{\iota} \ar@{->}[rd]^{i} &  \\
I(\hat{X}) \ar@{->}[rr]_{I(h)} &  & I(Y)
}
$$

### 注释 (特例 $(S/X)$ 与切范畴)

反过来考虑一对函子 $\mathcal{W} \overto{S} \mathcal{C} \overfrom{X} \bold{1}$, 逗号范畴 $(S/X)$ 的结构则为：

- $\Ob{S/X} \coloneqq \Set{ \b{W, S(W) \overto{f} X} : W \in \mathcal{W} }$;
- $\Hom{(S/X)}{\b{W, S(W) \overto{f} X}}{\b{W', S(W') \overto{f'} X}} \coloneqq \Set{ W \overto{h} W' : \vcenter{\xymatrix{
  S(W) \ar@{->}[rd]_{f} \ar@{->}[rr]^{S(h)} &  & S(W') \ar@{->}[ld]^{f'} \\
   & X & 
  }} }$.

同样地, 若取 $\mathcal{W} = \mathcal{C}$ 及 $S = 1_\mathcal{C}$, 我们称一对函子 $\mathcal{C} \overto{1_\mathcal{C}} \mathcal{C} \overfrom{X} \bold{1}$ 的逗号范畴为对象 $X$ 的 **切范畴 (slice category)** 或 **俯范畴 (under category)**, 记为 $\mathcal{C}_{/X}$ 或 $^{/X}\mathcal{C}$, 它是余切范畴的对偶概念.

### 例子 3.2.4 (空间上的纤维化)

- 考虑取 $\mathcal{C}$ 为某类几何空间 (拓扑空间, 复代数族等) 的范畴, 则它的切范畴 $\mathcal{C}_{/X}$ 中的态射 $h : W \to W'$ 可使下图交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IlcifSx7InBvc2l0aW9uIjpbMSwxXSwidmFsdWUiOiJYIn0seyJwb3NpdGlvbiI6WzIsMF0sInZhbHVlIjoiVycifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MSwidmFsdWUiOiJwIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjoyLCJ0byI6MSwidmFsdWUiOiJwJyJ9LHsiZnJvbSI6MCwidG8iOjIsInZhbHVlIjoiaCJ9XX0=
  \xymatrix{
  W \ar@{->}[rd]_{p} \ar@{->}[rr]^{h} &  & W' \ar@{->}[ld]^{p'} \\
   & X & 
  }
  $$
  我们可将上图的 $p : W \to X$ 设想为一族可以被 $X$ 参数化的空间, 即对于任一点 $x \in X$, 相应的空间是 $x$ 上的 **纤维 (fiber)** $W_x \coloneqq p^{-1}(x)$, 因此又将其称之为 **纤维化对象 (fibrant object)**.

- 若对任意 $p : W \to X$ 皆为 $X \in \Top$ 上的 **覆叠空间 (covering space)**, 那么由全体 $X$ 上的覆叠空间所构成的范畴 $\op{Cov}(X)$ 恰好就是切范畴 $\mathcal{\Top}_{/X}$ 的满子范畴.

### 注释 (箭头范畴)

我们称一对恒等函子 $\mathcal{C} \overto{1_\mathcal{C}} \mathcal{C} \overfrom{1_\mathcal{C}} \mathcal{C}$ 的逗号范畴 $(1_\mathcal{C}/1_\mathcal{C})$ 为 **箭头范畴 (arrow category)**, 它的结构为：

- $\Ob{1_\mathcal{C}/1_\mathcal{C}} \coloneqq \Set{ \b{ A, B, A \overto{f} B } : A, B \in \Ob{\mathcal{C}} }$;
- $\Hom{(1_\mathcal{C}/1_\mathcal{C})}{(A, B, f)}{(A', B', f')} \coloneqq \Set{ (A \overto{g} A', B \overto{h} B') : \vcenter{\xymatrix{
  A \ar@{->}[d]_{f} \ar@{->}[r]^{g} & A' \ar@{->}[d]^{f'} \\
  B \ar@{->}[r]_{h} & B'
  }} }$.

## 3.3. 可表函子

### 定义 3.3.1 (米田嵌入)

设 $\mathcal{C}$ 为局部小范畴, 我们称函子 $\Map{h_\mathcal{C}}{\mathcal{C}}{\Fct(\mathcal{C}^\oppos, \Sets)}{X}{\Hom{\mathcal{C}}{-}{X}}$ 为 **米田嵌入 (Yoneda embedding)**.

### 注释

- 若 $\mathcal{C}$ 为局部小范畴, 我们称 $\Fct(\mathcal{C}^\oppos, \Sets)$ 为 $\mathcal{C}$ 上的 **预层范畴 (category of presheaves)**, 记为 $\Psh{\mathcal{C}}$ 或 $\Sets^{\mathcal{C}^\oppos}$.

- 称函子 $\Map{h^\mathcal{C}}{\mathcal{C}^\oppos}{\Fct(\mathcal{C}, \Sets)}{X}{\Hom{\mathcal{C}}{X}{-}}$ 为 **逆变米田嵌入 (contravariant Yoneda embedding)**, 它是米田嵌入的逆变版本. 而现在我们设任意 $Y, Y' \in \Ob{\mathcal{C}}$ 以及它们之间的态射 $f : Y \to Y'$, 则可诱导出以下 $\Sets$ 中的映射：
  $$
  \Hom{\mathcal{C}}{X}{Y} \overto{\Hom{\mathcal{C}}{1_X}{f}} \Hom{\mathcal{C}}{X}{Y'}
  $$
  该映射中来源与目标态射集若取为对偶范畴, 则等价于以下映射：
  $$
  \Hom{\mathcal{C}^\oppos}{Y}{X} \overto{\Hom{\mathcal{C}^\oppos}{f}{1_X}} \Hom{\mathcal{C}^\oppos}{Y'}{X}
  $$
  因此我们得到 $\bb{\mathcal{C} \overto{\Hom{\mathcal{C}}{X}{-}} \Sets} = \bb{(\mathcal{C}^\oppos)^\oppos \overto{\Hom{\mathcal{C}^\oppos}{-}{X}} \Sets}$, 这意味着逆变米田嵌入无非亦是从米田嵌入构造而来的.

- 我们分别称：

  - 预层 $h_\mathcal{C}(X) : \mathcal{C}^\oppos \to \Sets$ 为由 $X$ 所表示的可表函子, 于一些文章中会被简记为 $h_X$;

  - 函子 $h^\mathcal{C}(X) : \mathcal{C} \to \Sets$ 为由 $X$ 所表示的余可表函子, 于一些文章中会被简记为 $h^X$.

  关于它们的具体定义将由下述 [定义 3.2.4](#定义_3.2.4_(可表函子/预层, 余可表函子)) 给出.

- 事实上米田嵌入有以下的伴随对, 即 $\op{Hom}$-集间的自然同构, 于集合范畴上又称 **自然双射 (natural bijections)**：
  $$
  \hom{\mathcal{C}^\oppos \times \mathcal{C}}{\Sets} \overto{\simeq} \hom{\mathcal{C}}{\Fct(\mathcal{C}^\oppos, \Sets)}
  $$

### 定义 3.3.2 (求值函子)

设 $\mathcal{C}$ 为局部小范畴, 我们称以下一对函子为 **求值函子 (evaluation functor)**：
$$
\begin{alignat}{3}
\mathcal{C}^\oppos \times \Fct(\mathcal{C}^\oppos, \Sets) & \overto{\op{ev}} \Sets \qquad \qquad &
\Fct(\mathcal{C}, \Sets) \times \mathcal{C} & \overto{\op{ev}} \Sets \\
(X, F) & \mapsto F(X) &
(F, X) & \mapsto F(X)
\end{alignat}
$$

### 注释

- 类似于编程语言上的惰性求值一般, 我们可以将上述的函子 $F$ 与值 $X$ 分别储存起来, 于适当时候再执行求值过程;

- 求值函子之所以可以自然地存在, 根本的原因在于 $\op{Cat}$ 为笛卡尔闭范畴. 而我们称一个范畴 $\mathcal{C}$ 是 **笛卡尔闭范畴 (cartesian closed category)**, 若对任意 $X, Y \in \Ob{\mathcal{C}}$ 满足：

  - $\mathcal{C}$ 中含有终对象;
  - $X, Y$ 的积 $X \times Y$ 仍封闭于 $\mathcal{C}$ 中;
  - $X, Y$ 的指数对象 , 即 $Y^X$ 仍封闭于 $\mathcal{C}$ 中.

  其中称我们称 $Y^X$ 为 $X, Y$ 的 **指数对象 (exponential object)**, 当有求值映射 $\op{ev} : Y^X \times X \to Y$ 对任意 $W \in \Ob{\mathcal{C}}$ 以及 $g : W \times X \to Y$ 皆存在唯一的态射 $\lambda g : W \to Y^X$ 使得下图可交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IlcifSx7InBvc2l0aW9uIjpbMCwxXSwidmFsdWUiOiJZXlgifSx7InBvc2l0aW9uIjpbMSwwXSwidmFsdWUiOiJXIFxcdGltZXMgWCJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IlleWCBcXHRpbWVzIFgifSx7InBvc2l0aW9uIjpbMiwxXSwidmFsdWUiOiJZIn1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjEsImxpbmUiOiJkYXNoZWQiLCJ2YWx1ZSI6IlxcbGFtYmRhIGciLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjIsInRvIjozLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJ2YWx1ZSI6IlxcbGFtYmRhIGcgXFx0aW1lcyAxX1gifSx7ImZyb20iOjIsInRvIjo0LCJsYWJlbFBvc2l0aW9uIjoibGVmdCIsInZhbHVlIjoiZyJ9LHsiZnJvbSI6MywidG8iOjQsInZhbHVlIjoiXFx0ZXh0e2V2fSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9XX0=
  \xymatrix{
  W \ar@{-->}[d]_{\lambda g} & W \times X \ar@{->}[d]_{\lambda g \times 1_X} \ar@{->}[rd]^{g} &  \\
  Y^X & Y^X \times X \ar@{->}[r]_{\text{ev}} & Y
  }
  $$
  根据以上交换图, 只要给定态射 $g$, 便可拓展出唯一态射 $\lambda g$ 使得有态射集间的同构 $\hom{W \times X}{Y} \simeq \hom{W}{Y^X}$. 如若此时令 $\mathcal{C} = \op{Cat}$, 其中指数对象 $\Sets^{\mathcal{C}} = \Fct(\mathcal{C}, \Sets)$, 即 $\op{ev} : \Sets^\mathcal{C} \times \mathcal{C} \to \Sets$ 为定义中的求值函子.

### 定理 3.3.3 (余米田引理)

设 $\mathcal{C}$ 为局部小范畴, 对任意预层 $F : \mathcal{C}^\oppos \to \Sets$ 以及 $X \in \Ob{\mathcal{C}}$, 则以下映射构成自然双射：
$$
\Map{\Phi_{X, F}}{\Hom{\Psh{\mathcal{C}}}{h_\mathcal{C}(X)}{F}}{F(X)}{\bb{ \Hom{\mathcal{C}}{-}{X} \overto{\eta} F(-) }}{\eta_X(1_X)}
$$
其中 $\Phi_{X, F}$ 于 $X$ 与 $F$ 上自然, 因此 $\Phi$ 给出了自然同构 $\Hom{\Psh{\mathcal{C}}}{h_\mathcal{C}(-)}{-} \overto{\sim} \op{ev}(-,-)$.

##### 证明

我们分别需要证明以下两件事：

- 构造 $\Phi_{X, F}$ 的逆映射 $\Map{\Psi_{X, F}}{F(X)}{\Hom{\Psh{\mathcal{C}}}{h_\mathcal{C}(X)}{F}}{\xi}{\bb{\Hom{\mathcal{C}}{-}{X} \overto{\Psi_{X, F}(\xi)} F(-)}}$, 即需证明 $\Psi_{X, F}(\xi)$ 为自然变换, 那么对任意 $W, W' \in \Ob{\mathcal{C}^\oppos}$ 以及 $f : W' \to W$ 我们需验证以下自然方块可交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtDfShXLCBYKSJ9LHsicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtDfShXJywgWCkifSx7InBvc2l0aW9uIjpbMiwwXSwidmFsdWUiOiJGKFcpIn0seyJwb3NpdGlvbiI6WzIsMV0sInZhbHVlIjoiRihXJykifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MSwibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwidmFsdWUiOiJmXioifSx7ImZyb20iOjAsInRvIjoyLCJ2YWx1ZSI6IlxcUHNpX3tYLCBGfShcXHhpKV9XIn0seyJmcm9tIjoyLCJ0byI6MywidmFsdWUiOiJGKGYpIn0seyJmcm9tIjoxLCJ0byI6MywidmFsdWUiOiJcXFBzaV97WCwgRn0oXFx4aSlfe1cnfSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9XX0=
  \xymatrix{
  \text{Hom}_\mathcal{C}(W, X) \ar@{->}[d]_{f^*} \ar@{->}[rr]^{{\Psi_{X, F}(\xi)_W}} &  & F(W) \ar@{->}[d]^{F(f)} \\
  \text{Hom}_\mathcal{C}(W', X) \ar@{->}[rr]_{{\Psi_{X, F}(\xi)_{W'}}} &  & F(W')
  }
  $$
  此时我们取 $W = X$, 考虑定义 $\Map{\Psi_{X, F}(\xi)_X}{\Hom{\mathcal{C}}{X}{X}}{F(X)}{1_X}{\xi = \Psi_{X, F}(\xi)_X(1_X)}$ 那么上述交换图则有以下特例：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtDfShYLCBYKSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtDfShXJywgWCkifSx7InBvc2l0aW9uIjpbMywwXSwidmFsdWUiOiJGKFgpIn0seyJwb3NpdGlvbiI6WzMsMV0sInZhbHVlIjoiRihXJykifSx7InBvc2l0aW9uIjpbMCwwXSwidmFsdWUiOiIxX1gifSx7InBvc2l0aW9uIjpbMCwxXSwidmFsdWUiOiIxX1ggXFxjaXJjIGYgPSBmIn0seyJwb3NpdGlvbiI6WzQsMF0sInZhbHVlIjoiXFx4aSJ9LHsicG9zaXRpb24iOls0LDFdLCJ2YWx1ZSI6IkYoZikoXFx4aSkifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MSwibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwidmFsdWUiOiJmXioifSx7ImZyb20iOjAsInRvIjoyLCJ2YWx1ZSI6IlxcUHNpX3tYLCBGfShcXHhpKV9YIn0seyJmcm9tIjoyLCJ0byI6MywidmFsdWUiOiJGKGYpIn0seyJmcm9tIjoxLCJ0byI6MywidmFsdWUiOiJcXFBzaV97WCwgRn0oXFx4aSlfe1cnfSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6NCwidG8iOjUsInRhaWwiOiJtYXBzdG8ifSx7ImZyb20iOjYsInRvIjo3LCJ0YWlsIjoibWFwc3RvIn0seyJmcm9tIjo0LCJ0byI6MCwiaGVhZCI6Im5vbmUiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIiwidmFsdWUiOiJcXGluIn0seyJmcm9tIjo1LCJ0byI6MSwiaGVhZCI6Im5vbmUiLCJ2YWx1ZSI6IlxcaW4iLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjo2LCJ0byI6MiwiaGVhZCI6Im5vbmUiLCJ2YWx1ZSI6IlxcbmkiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjo3LCJ0byI6MywiaGVhZCI6Im5vbmUiLCJ2YWx1ZSI6IlxcbmkiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn1dfQ==
  \xymatrix{
  1_X \ar@{|->}[d] \ar@{}[r]|-{\in} & \text{Hom}_\mathcal{C}(X, X) \ar@{->}[d]_{f^*} \ar@{->}[rr]^{{\Psi_{X, F}(\xi)_X}} &  & F(X) \ar@{->}[d]^{F(f)} & \xi \ar@{|->}[d] \ar@{}[l]|-{\ni} \\
  1_X \circ f = f \ar@{}[r]|-{\in} & \text{Hom}_\mathcal{C}(W', X) \ar@{->}[rr]_{{\Psi_{X, F}(\xi)_{W'}}} &  & F(W') & F(f)(\xi) \ar@{}[l]|-{\ni}
  }
  $$
  易见上图 $F(W')$ 的元素完全被 $\xi$ 所确定, 那么便能够按以下方式定义构件 $\Psi_{X, F}(\xi)_{W'}$ 为唯一态射：
  $$
  \Map{\Psi_{X, F}(\xi)_{W'}}{\Hom{\mathcal{C}}{W'}{X}}{F(W')}{f}{\Psi_{X, F}(\xi)_{W'}(f) \overset{\text{等式 $(1)$}}{=} F(f)(\xi)}
  $$
  现在回到我们需要证明的自然方块上, 那么对任意 $g \in \Hom{\mathcal{C}}{W}{X}$ 可使下图交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtDfShXLCBYKSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtDfShXJywgWCkifSx7InBvc2l0aW9uIjpbMywwXSwidmFsdWUiOiJGKFcpIn0seyJwb3NpdGlvbiI6WzMsMV0sInZhbHVlIjoiRihXJykifSx7InBvc2l0aW9uIjpbMCwwXSwidmFsdWUiOiJnIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiZyBcXGNpcmMgZiJ9LHsicG9zaXRpb24iOls0LDBdLCJ2YWx1ZSI6IlxcUHNpX3tYLCBGfShcXHhpKV9XKGcpIn0seyJwb3NpdGlvbiI6WzQsMV0sInZhbHVlIjoiXFxQc2lfe1gsIEZ9KFxceGkpX3tXJ30oZyBcXGNpcmMgZikgPSBGKGYpKFxcUHNpX3tYLCBGfShcXHhpKV9XKGcpKSJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJ2YWx1ZSI6ImZeKiJ9LHsiZnJvbSI6MCwidG8iOjIsInZhbHVlIjoiXFxQc2lfe1gsIEZ9KFxceGkpX1cifSx7ImZyb20iOjIsInRvIjozLCJ2YWx1ZSI6IkYoZikifSx7ImZyb20iOjEsInRvIjozLCJ2YWx1ZSI6IlxcUHNpX3tYLCBGfShcXHhpKV97Vyd9IiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjo0LCJ0byI6NSwidGFpbCI6Im1hcHN0byJ9LHsiZnJvbSI6NiwidG8iOjcsInRhaWwiOiJtYXBzdG8ifSx7ImZyb20iOjQsInRvIjowLCJoZWFkIjoibm9uZSIsInZhbHVlIjoiXFxpbiIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifSx7ImZyb20iOjUsInRvIjoxLCJoZWFkIjoibm9uZSIsInZhbHVlIjoiXFxpbiIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifSx7ImZyb20iOjYsInRvIjoyLCJoZWFkIjoibm9uZSIsInZhbHVlIjoiXFxuaSIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifSx7ImZyb20iOjcsInRvIjozLCJoZWFkIjoibm9uZSIsInZhbHVlIjoiXFxuaSIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifV19
  \xymatrix{
  g \ar@{|->}[d] \ar@{}[r]|-{\in} & \text{Hom}_\mathcal{C}(W, X) \ar@{->}[d]_{f^*} \ar@{->}[rr]^{{\Psi_{X, F}(\xi)_W}} &  & F(W) \ar@{->}[d]^{F(f)} & \Psi_{X, F}(\xi)_W(g) \ar@{|->}[d] \ar@{}[l]|-{\ni} \\
  g \circ f \ar@{}[r]|-{\in} & \text{Hom}_\mathcal{C}(W', X) \ar@{->}[rr]_{{\Psi_{X, F}(\xi)_{W'}}} &  & F(W') & \Psi_{X, F}(\xi)_{W'}(g \circ f) = F(f)(\Psi_{X, F}(\xi)_W(g)) \ar@{}[l]|-{\ni}
  }
  $$
  其中 $\Psi_{X, F}(\xi)$ 的自然性由以下等式给出：
  $$
  \Psi_{X, F}(\xi)_{W'}(g \circ f) \overset{(1)}{=} F(g \circ f)(\xi) \overset{\text{反变函子合成}}{=} (F(f) \circ F(g))(\xi) = F(f)(\Psi_{X, F}(\xi)_{W'}(g))
  $$
  因此就构造出了反向映射 $\Psi_{X, F}$.

- 另一方面, 我们需要证明 $\Psi_{X, F}$ 为双射 (同构), 它的逆映射为 $\Phi_{X, F}$, 那么我们分别需证明：

  - $\Forall{\eta \in \Hom{\Psh{\mathcal{C}}}{h_\mathcal{C}(X)}{F}} (\Psi_{X, F} \circ \Phi_{X, F})(\eta) = \eta$：

    对任意 $W \in \Ob{\mathcal{C}^\oppos}$ 以及 $f \in \Hom{\mathcal{C}}{W}{X}$, 我们考虑自然变换 $\Psi_{X, F}$ 与 $\Phi_{X, F}(\eta)$ 于构件下的情形：
    $$
    \Psi_{X, F} \big(\Phi_{X, F}(\eta) \big)_W(f) \overset{\text{展开 $\Phi_{X, F}$}}{=} \Psi_{X, F} \big(\eta_X(1_X) \big)_W(f) \overset{\text{透过 $(1)$ 展开 $\Psi_{X, F} \big(\eta_X(1_X) \big)$}}{=} F(f)(\eta_X(1_X)) \overset{\text{$\eta$ 的自然性}}{=} \eta_W(f)
    $$
    而关于 $X$ 于 $\eta$ 上的自然性由以下交换图给出：
    $$
    % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtDfShYLCBYKSJ9LHsicG9zaXRpb24iOlsyLDBdLCJ2YWx1ZSI6IkYoWCkifSx7InBvc2l0aW9uIjpbMiwxXSwidmFsdWUiOiJGKFcpIn0seyJwb3NpdGlvbiI6WzEsMV0sInZhbHVlIjoiXFx0ZXh0e0hvbX1fXFxtYXRoY2Fse0N9KFcsIFgpIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiZiJ9LHsicG9zaXRpb24iOlszLDBdLCJ2YWx1ZSI6IlxcZXRhX1goMV9YKSJ9LHsicG9zaXRpb24iOlszLDFdLCJ2YWx1ZSI6IkYoZikoXFxldGFfWCgxX1gpKSJ9LHsicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IjFfWCJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJ2YWx1ZSI6IlxcZXRhX1gifSx7ImZyb20iOjEsInRvIjoyLCJ2YWx1ZSI6IkYoZikifSx7ImZyb20iOjMsInRvIjoyLCJ2YWx1ZSI6IlxcZXRhX3tXfSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6NCwidG8iOjMsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUiLCJ2YWx1ZSI6IlxcaW4iLCJoZWFkIjoibm9uZSJ9LHsiZnJvbSI6NSwidG8iOjEsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUiLCJ2YWx1ZSI6IlxcbmkiLCJoZWFkIjoibm9uZSJ9LHsiZnJvbSI6NiwidG8iOjIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUiLCJ2YWx1ZSI6IlxcbmkiLCJsaW5lIjoic29saWQiLCJoZWFkIjoibm9uZSJ9LHsiZnJvbSI6NSwidG8iOjYsInRhaWwiOiJtYXBzdG8ifSx7ImZyb20iOjcsInRvIjowLCJoZWFkIjoibm9uZSIsInZhbHVlIjoiXFxpbiIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifSx7ImZyb20iOjAsInRvIjozLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJ2YWx1ZSI6ImZeKiJ9LHsiZnJvbSI6NywidG8iOjQsInRhaWwiOiJtYXBzdG8ifV19
    \xymatrix{
    1_X \ar@{}[r]|-{\in} \ar@{|->}[d] & \text{Hom}_\mathcal{C}(X, X) \ar@{->}[r]^{\eta_X} \ar@{->}[d]_{f^*} & F(X) \ar@{->}[d]^{F(f)} & \eta_X(1_X) \ar@{}[l]|-{\ni} \ar@{|->}[d] \\
    f \ar@{}[r]|-{\in} & \text{Hom}_\mathcal{C}(W, X) \ar@{->}[r]_{\eta_{W}} & F(W) & F(f)(\eta_X(1_X)) \ar@{}[l]|-{\ni}
    }
    $$

  - $\Forall{\xi \in F(X)} (\Phi_{X, F} \circ \Psi_{X, F})(\xi) = \xi$：
    $$
    \Phi_{X, F}(\Psi_{X, F}(\xi)) \overset{\text{展开 $\Phi_{X, F}$}}{=} \Psi_{X, F}(\xi)_X(1_X) = \xi
    $$

  便证得了 $\Phi_{X, F}$ 为双射.

### 注释 (余米田引理与米田引理)

我们之所以称上述引理为 **余米田引理 (co-Yoneda lemma)**, 是因为它由可表预层给出的, 而它的对偶概念, 即 **米田引理 (Yoneda lemma)** 是由余可表函子给出的, 因此我们有以下定义.

### 定理 3.3.4 (米田引理)

设 $\mathcal{C}$ 为局部小范畴, 对任意函子 $F : \mathcal{C} \to \Sets$ 以及 $X \in \Ob{\mathcal{C}^\oppos}$, 则以下映射构成自然双射：
$$
\Map{\Phi_{X, F}}{\Hom{\Fct(\mathcal{C}, \Sets)}{h^\mathcal{C}(X)}{F}}{F(X)}{\bb{ \Hom{\mathcal{C}}{X}{-} \overto{\eta} F(-) }}{\eta_X(1_X)}
$$

##### 证明

由于余可表函子 $h^\mathcal{C}(X)$ 于对偶范畴中等价于可表预层 $h_\mathcal{C^\oppos}(X)$, 因此上述命题可以直接由余米田引理, 即 [定理 3.3.3](#定理_3.3.3_(余米田引理)) 给出.

### 定义 3.3.5 (可表函子/预层, 余可表函子)

设 $\mathcal{C}$ 为任意范畴：

- 称预层 $F : \mathcal{C}^\oppos \to \Sets$ 为 **可表函子 (representable functor)** 或 **可表预层 (representable presheaf)**, 当存在 $X \in \Ob{\mathcal{C}}$ 使得有自然同构 $\phi : \Hom{\mathcal{C}}{-}{X} \overto{\sim} F$, 并称 $(X, \phi)$ 为它的代表元.
- 称函子 $F : \mathcal{C} \to \Sets$ 为 **余可表函子 (corepresentable functor)**, 当存在 $X \in \Ob{\mathcal{C}^\oppos}$ 使得有自然同构 $\phi : \Hom{\mathcal{C}}{X}{-} \overto{\sim} F$, 并称 $(X, \phi)$ 为它的代表元.

### 注释

- 代表元 $\b{X, h_\mathcal{C}(X) \overto{\phi} F}$ 相当于给定 $(X, u)$, 其中 $u \in F(X)$ 被称为 **泛族 (universal elements)**, 它是 $1_X$ 被 $\Phi_{X, F}$ 映射后的像, 即 $u = \eta_X(1_X)$.
- (余) 米田引理可直接推出以下一些较为重要的性质.

### 推论 3.3.6 (米田嵌入为完全忠实函子)

设 $\mathcal{C}$ 为任意范畴, 则米田嵌入 $h_\mathcal{C}$ 与逆变米田嵌入 $h^\mathcal{C}$ 皆为完全忠实函子.

##### 证明

由余米田引理, 对任意 $X, Y \in \Ob{\mathcal{C}}$, 我们取 $F = h_\mathcal{C}(Y) \in \Psh{\mathcal{C}}$ 则得以下双射：
$$
\Map{\Phi_{X, h_\mathcal{C}(Y)}}{\Hom{\Psh{\mathcal{C}}}{h_\mathcal{C}(X)}{h_\mathcal{C}(Y)}}{h_\mathcal{C}(Y)(X) = \Hom{\mathcal{C}}{X}{Y}}{\bb{ \Hom{\mathcal{C}}{-}{X} \overto{\eta} \Hom{\mathcal{C}}{-}{Y} }}{\eta_X(1_X)}
$$
显然范畴 $\Psh{\mathcal{C}}$ 与 $\mathcal{C}$ 的态射集间是双射, 因此得到了 $h_\mathcal{C}$ 的全忠实性, 对 $h^\mathcal{C}$ 亦然, 只需考虑米田引理即可.

### 推论 3.3.7 (代表元的唯一性)

1. 若有可表函子 $F : \mathcal{C}^\oppos \to \Sets$, 则其代表元 $\b{X, h_\mathcal{C}(X) \overset{\phi}{\simeq} F}$ 在至多差一个同构的意义下是唯一的;
2. 若有余可表函子 $F : \mathcal{C} \to \Sets$, 则其代表元 $\b{X, h^\mathcal{C}(X) \overset{\phi}{\simeq} F}$ 亦有类似结论.

##### 证明

我们只证明 $(1)$, 因为 $(2)$ 是类似的. 考虑一对函子 $\mathcal{C} \overto{h_\mathcal{C}} \Psh{\mathcal{C}} \overfrom{F} \bold{1}$ 上述命题可于逗号范畴 $(h_\mathcal{C}/F)$ 中讨论. 那么对于任意其他对象 $\b{W, h_\mathcal{C}(W) \overset{\psi}{\simeq} F} \in \Ob{h_\mathcal{C}/F}$ 及态射 $f \in \Hom{\mathcal{C}}{W}{X}$ 可使下图交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6ImhfXFxtYXRoY2Fse0N9KFcpIn0seyJwb3NpdGlvbiI6WzEsMV0sInZhbHVlIjoiRiJ9LHsicG9zaXRpb24iOlsyLDBdLCJ2YWx1ZSI6ImhfXFxtYXRoY2Fse0N9KFgpIn1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjEsImxhYmVsUG9zaXRpb24iOiJyaWdodCIsInZhbHVlIjoiXFxwaGkifSx7ImZyb20iOjIsInRvIjoxLCJ2YWx1ZSI6IlxccHNpIn0seyJmcm9tIjowLCJ0byI6MiwidmFsdWUiOiJoX1xcbWF0aGNhbHtDfShmKSJ9XX0=
\xymatrix{
h_\mathcal{C}(W) \ar@{->}[rd]_{\phi} \ar@{->}[rr]^{h_\mathcal{C}(f)} &  & h_\mathcal{C}(X) \ar@{->}[ld]^{\psi} \\
 & F & 
}
$$
其中由 [推论 3.3.6](#推论_3.3.6_(米田嵌入为完全忠实函子)) 知 $h_\mathcal{C}$ 是完全忠实的, 因而自然同构的合成 $\psi^{-1} \circ \phi : h_\mathcal{C}(W) \overto{\sim} h_\mathcal{C}(X)$ 当且仅当 $W \simeq X$, 显然 $f$ 是唯一的.

### 注释

- 从上述证明易见 $\b{X, h_\mathcal{C}(X) \overset{\phi}{\simeq} F}$ 为 $(h_\mathcal{C}/F)$ 的终对象, 因为从任意其他对象 $\b{W, h_\mathcal{C}(W) \overset{\psi}{\simeq} F}$ 到 $\b{X, h_\mathcal{C}(X) \overset{\phi}{\simeq} F}$ 的态射 $h_\mathcal{C}(f)$ 被 $f$ 唯一确定, 满足了终对象的泛性质.
- 另一方面, 该唯一性可被总结为 $h_\mathcal{C}(X) \simeq h_\mathcal{C}(Y) \iff X \simeq Y$, 对 $h^\mathcal{C}$ 亦是类似的.

### 例子 3.3.8 (自由线性空间函子的表示)

回顾 [例子 3.2.2](#例子_3.2.2_(自由线性空间)) 中的函子 $V : \Sets \to \Vect_\mathbb{F}$, 其泛性质给出了：
$$
\phi : \Hom{\Vect_\mathbb{F}}{V(X)}{-} \overto{\sim} \Hom{\Sets}{X}{U(-)}
$$
因此 $(V(X), \phi)$ 表示了函子 $\Hom{\Sets}{X}{U(-)} : \Vect_\mathbb{F} \to \Sets$.

{% end %}