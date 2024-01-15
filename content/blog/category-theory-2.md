+++

title = "范畴论 2 - 函子与自然变换"
date = 2023-05-05
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

## 2.1. 函子的基本概念

### 注释 (函子的基本概念)

既然范畴内元素之间的映射称为态射, 那么自然地, 若果给出范畴 $\mathcal{C, D}$, 那么 $\mathcal{C, D}$ 之间的态射 $F$ 则是 **函子**.

### 定义 2.1.1 (共变/反变函子, 合成函子, 自函子)

设有范畴 $\mathcal{C, D}$, 若 $F : \mathcal{C \to D}$ 被称为从 $\mathcal{C}$ 到 $\mathcal{D}$ 的 **共变函子 / 函子 (covariant functor / functor)** $F$, 其包含了以下结构：

- **对象间的映射 (maps between objects)** $F_0 : \op{Ob}(\mathcal{C}) \to \op{Ob}(\mathcal{D})$;

- **态射间的映射 (maps between morphisms)** $F_1 : \op{Mor}(\mathcal{C}) \to \op{Mor}(\mathcal{D})$：

  即对于任意 $X, Y \in \op{Ob}(\mathcal{C})$, $F_1$ 则可等价地定义为 $F_1 : \mathcal{C}(X, Y) \to \mathcal{D}(F_0(X), F_0(Y))$.

其中 $F_i$ 一般可只简记为 $F$, 并且应该满足了 **函子定律 (functor laws)**, 即 **保持结构 (preserves structure)** 的条件, 即：

- $F$ 保有单位态射：$\Forall{X \in \op{Ob}(\mathcal{C})} F(1_X) = 1_{F(X)}$;

- $F$ 保有合成态射：$\Forall{f \in \mathcal{C}(Y, Z) \\ g \in \mathcal{C}(X, Y)} F(f \circ g) = F(f) \circ F(g)$.

  而该处之所以称保有合成态射是因若设 $h = f \circ g \in \mathcal{C}(X, Z)$, 那么则有 $F(h) = F(f) \circ F(g)$.

从以下交换图中易见它们之间是如何被映射的（该处使用了虚线表示函子 $F : \mathcal{C \to D}$）：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IlkifSx7InBvc2l0aW9uIjpbMCwwXSwidmFsdWUiOiJYIn0seyJwb3NpdGlvbiI6WzIsMF0sInZhbHVlIjoiWiJ9LHsicG9zaXRpb24iOlsyLDJdLCJ2YWx1ZSI6IkYoWikifSx7InBvc2l0aW9uIjpbMSwzXSwidmFsdWUiOiJGKFkpIn0seyJwb3NpdGlvbiI6WzAsMl0sInZhbHVlIjoiRihYKSJ9LHsicG9zaXRpb24iOlszLDJdLCJ2YWx1ZSI6IlxcbWF0aGNhbHtEfSJ9LHsicG9zaXRpb24iOlszLDBdLCJ2YWx1ZSI6IlxcbWF0aGNhbHtDfSJ9XSwiZWRnZXMiOlt7ImZyb20iOjEsInRvIjowLCJ2YWx1ZSI6ImciLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjEsInRvIjoyLCJ2YWx1ZSI6ImggPSBmIFxcY2lyYyBnIn0seyJmcm9tIjowLCJ0byI6MiwidmFsdWUiOiJmIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjoyLCJ0byI6MywibGluZSI6ImRvdHRlZCJ9LHsiZnJvbSI6MCwidG8iOjQsImxpbmUiOiJkb3R0ZWQifSx7ImZyb20iOjEsInRvIjo1LCJsaW5lIjoiZG90dGVkIn0seyJmcm9tIjo1LCJ0byI6MywidmFsdWUiOiJGKGgpID0gRihmIFxcY2lyYyBnKSJ9LHsiZnJvbSI6NSwidG8iOjQsInZhbHVlIjoiRihnKSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6NCwidG8iOjMsInZhbHVlIjoiRihmKSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6NywidG8iOjYsInZhbHVlIjoiRiIsImxhYmVsUG9zaXRpb24iOiJsZWZ0IiwibGluZSI6InNvbGlkIn1dfQ==
\xymatrix{
X \ar@{->}[rd]_{g} \ar@{->}[rr]^{h = f \circ g} \ar@{.>}[dd] &  & Z \ar@{.>}[dd] & \mathcal{C} \ar@{->}[dd]^{F} \\
 & Y \ar@{->}[ru]_{f} \ar@{.>}[dd] &  &  \\
F(X) \ar@{->}[rr]^{F(h) = F(f \circ g)} \ar@{->}[rd]_{F(g)} &  & F(Z) & \mathcal{D} \\
 & F(Y) \ar@{->}[ru]_{F(f)} &  & 
}
$$

其中亦会牵涉到一些额外的定义：

- 设有函子 $F : \mathcal{C}_1 \to \mathcal{C}_2$ 以及 $G : \mathcal{C}_2 \to \mathcal{C}_3$, 定义 **合成函子 (composition of functors)** $G \circ F : \mathcal{C}_1 \to \mathcal{C}_3$ 为以下映射的合成：
  $$
  \begin{array}{cc}
  \mathcal{C}_1 & \overset{F}{\longrightarrow} & \mathcal{C}_2 & \overset{G}{\longrightarrow} & \mathcal{C}_3 \\
  \op{Ob}(\mathcal{C}_1) & \overset{F_0}{\longrightarrow} & \op{Ob}(\mathcal{C}_2) & \overset{G_0}{\longrightarrow} &\op{Ob}(\mathcal{C}_3) \\
  \op{Mor}(\mathcal{C}_1) & \overset{F_1}{\longrightarrow} & \op{Mor}(\mathcal{C}_2) & \overset{G_1}{\longrightarrow} &\op{Mor}(\mathcal{C}_3) \\
  \end{array}
  $$

- 称 $F : \mathcal{C \to C}$ 为 **自函子 (endofunctor)**, 而 $\mathcal{C}$ 中所有自函子的集合记为 $\op{End}(\mathcal{C})$;

- 称自函子 $\Map{1_\mathcal{C}}{\mathcal{C}}{\mathcal{C}}{X}{X}$ 为 $\mathcal{C}$ 上的 **单位函子 / 恒等函子 (identity functor)**;

- 称 $F : \mathcal{C}^{\op{op}} \to \mathcal{D}$,  $F$ 为 **反变函子 (contravariant functor)**;

- 设有反范畴 $\mathcal{C}^{\op{op}}, \mathcal{D}^{\op{op}}$, 若存在它们之间的函子 $F^{\op{op}} : \mathcal{C}^{\op{op}} \to \mathcal{D}^{\op{op}}$ 使得 ${F_0}^\oppos = F_0$ 以及 ${F_1}^\oppos = F_1$, 则称 $F^{\op{op}}$ 为 **对偶函子 (opposite functor)**.

### 注释

实际上 $F : \mathcal{C} \to \mathcal{D}$ 以及 $F^{\op{op}} : \mathcal{C}^{\op{op}} \to \mathcal{D}^{\op{op}}$ 皆同属共变函子, 并且 $F = F^\oppos$, 因为被 $F^\oppos$ 所映射的对象与被映射后的对象相较于 $F$ 并没有发生任何实质改变, 即对任意 $X, Y \in \Ob{\mathcal{C}}$：
$$
\xymatrix{
\mathcal{C} \ar@{->}[r]^{F} & \mathcal{D} &  & \mathcal{C}^{\op{op}} \ar@{->}[r]^{F^{\op{op}}} & \mathcal{D}^{\op{op}} \\
X \ar@{->}[d]_{f} \ar@{->}[r] & F(X) \ar@{->}[d]^{F(f)} &  & X \ar@{->}[r] & F^{\op{op}}(X) \\
Y \ar@{->}[r] & F(Y) &  & Y \ar@{->}[u]^{f} \ar@{->}[r] & F^{\op{op}}(Y) \ar@{->}[u]_{F^{\op{op}}(f)}
}
$$

### 定义 2.1.2 (本质满函子, 忠实函子, 全函子)

设有范畴 $\mathcal{C, D}$ 以及函子 $F : \mathcal{C} \to \mathcal{D}$：

- 称 $F$ 为 **本质满射 (essentially surjective)**, 若 $\mathcal{D}$ 中任意对象 $Y$, 存在 $X \in \Ob{\mathcal{C}}$ 使得有同构 $X \simeq F(X)$;
- 称 $F$ 为 **忠实 (faithful)**, 若对任意 $X, Y \in \op{Ob}(\mathcal{C})$ 的映射 $\mathcal{C}(X, Y) \to \mathcal{D}(F(X), F(Y))$ 为单射;
- 称 $F$ 为 **完全 (fully)**, 若对任意 $X, Y \in \op{Ob}(\mathcal{C})$ 的映射 $\mathcal{C}(X, Y) \to \mathcal{D}(F(X), F(Y))$ 为满射;
- 称 $F$ 为 **完全忠实 (fully faithful)**, 当 $F$ 同时为完全以及忠实函子.

### 例子 2.1.3 (代数学中的函子)

- 由于子范畴 $\mathcal{D} \sub \mathcal{C}$ 同样类似于集合上的子集, 同属子结构, 那么便有 **包含函子 (Inclusion functor)** $\mathcal{D} \overset{\iota}{\hookrightarrow} \mathcal{C}$, 且其是忠实的, 并且若 $\iota$ 是完全函子当 $\mathcal{D}$ 是 $\mathcal{C}$ 的全子范畴, 取 $\mathcal{C} = \mathcal{D}$ 就得到了恒等函子.
- 对于群范畴 $\op{Grp}$, 以及任意 $(G, \cdot) \in \op{Ob}(\op{Grp})$, 则可忘掉群 $(G, \cdot)$ 上的二元运算而只剩其的基础集 $G$, 即有 **遗忘函子 (forgetful functor)**, 即 $\op{Grp} \to \op{Set}$, 并且遗忘函子是忠实的. 而遗忘函子的对偶 $\op{Set} \to \op{Grp}$ 则构成 **自由函子 (free functor)**, 使得由任意生成集映射至由 $X$ 产生的自由群, 集合之间的函数则映射至自由群间的群同态, 这类对象通常称为 **自由对象 (free object)**, 将于后续章节提及.
- 同样地对于域 $\mathbb F$ 上的线性空间范畴 $\op{Vect}_\mathbb{F}$, 取任意 $V \in \Ob{\op{Vect}_\mathbb{F}}$, 忘却掉 $V$ 上的标量乘法只观察其加法群 $(V, +)$, 显然亦是一个遗忘函子.

### 例子 2.1.4 (拓扑学中的例子)

- 对于拓扑空间范畴 $\Top$ 以及同伦范畴 $\op{Ho}(\Top)$, 则有函子 $\kappa : \Top \to \op{Ho}(\Top)$ 使得对于任意连续映射 $f : X \to Y$ 有 $\kappa(f) = [X, Y]$, 即连续函数将诱导出同伦类.

- 对于 $\Top$ 以及群胚范畴 $\Grpd$, 函子 $\Pi_1 : \Top \to \Grpd$ 将拓扑空间映射为它的基本群胚, 并且连续函数 $f : X \to Y$ 将诱导出基本群胚之间的映射 $f_* : \Pi_1(X) \to \Pi_1(Y)$ 使得将 $x \in X$ 递送至 $f(x) \in Y$.

- 对于任意 $n \in \Z$, $R$ 模范畴 $\Mod_R$ 以及链复形范畴 $\text{Ch}_R$, 设有以下三个函子：
  $$
  \begin{alignat}{3}
  \Ch_R & \overset{Z_n}{\to} \Mod_R \qquad &
  \Ch_R & \overset{B_n}{\to} \Mod_R \qquad &
  \Ch_R & \overset{H_n}{\to} \Mod_R \\
  \bb{C_n \overset{d}{\to} C_{n-1}} & \mapsto \ker d &
  \bb{C_n \overset{d}{\to} C_{n-1}} & \mapsto \im d &
  C_\bull & \mapsto Z_n(C_\bull)/B_n(C_\bull)
  \end{alignat}
  $$

  $Z_n, B_n, H_n : \text{Ch}_R \to \Mod_R$ 分别将其中 $n$ 维的 **循环 (cycles)**, **边界 (boundary)** 以及 **同调 (homology)** 映射为各自的 $R$ 模.

### 例子 2.1.5 (对偶空间与对偶线性映射)

考虑 $\op{Vect}_{\mathbb K}$, 对于任意域 $\mathbb K$ 上的线性空间 $V \in \op{Ob}(\op{Vect}_{\mathbb K})$, 我们定义 $V$ 的 **对偶空间 (dual vector space)** 为：
$$
V^* \coloneqq \op{Hom}_{\Vect_\mathbb{K}}(V, \mathbb K) = \Set{ V \overset{线性映射}{\longrightarrow} \mathbb K }
$$
那么对于任意两个线性空间 $V, W$ 以及线性映射 $f : V \to W$, 则可诱导出对偶空间之间的反向映射 $\Map{f^*}{W^*}{V^*}{\lambda}{\lambda \circ f}$ (或称为将 $\lambda$ 透过 $f$ **拉回 (pullback)**, 将于后续章节详细介绍此概念), 由此可见 $(-)^*$ 应定义为以下反变函子：
$$
\begin{align}
{\op{Vect}_{\mathbb K}}^\oppos & \overset{(-)^*}{\to} \op{Vect}_{\mathbb K} \\
V & \mapsto V^* & \text{(对象间的映射)} \\

\bb{V \overset{f}{\to} W} & \mapsto \bb{W^* \overset{f^*}{\to} V^*} & \text{(态射间的映射)}
\end{align}
$$
可验证 $(-)^*$ 是忠实的, 进一步则有以下合成函子：
$$
\begin{array}{cc}
\Vect_\mathbb{K} = ({\Vect_\mathbb{K}}^\oppos)^\oppos & \overset{((-)^*)^\oppos}{\longrightarrow} & {\Vect_\mathbb{K}}^\oppos & \overset{(-)^*}{\longrightarrow} & \Vect_\mathbb{K} \\
V & \longmapsto & V^* & \longmapsto & V^{**} \\
\bb{V \overset{f = (f^\oppos)^\oppos}{\to} W} & \longmapsto & \bb{W^* \overset{f^*}{\to} V^*} & \longmapsto & \bb{V^{**} \overset{f^{**}}{\to} W^{**}}
\end{array}
$$
我们将 $(-)^* \circ ((-)^*)^{\oppos}$ 简记为 $(-)^{**}$, 分别称 $(-)^*$ 与 $(-)^{**}$ 为对偶和双对偶函子 (若将它们限制于有限维线性空间范畴中则亦然).

## 2.2. 自然变换的基本概念

### 注释 (自然变换的基本概念)

若设 $F, G : \mathcal{C} \to \mathcal{D}$ 为函子, 则 $F$ 与 $G$ 之间的 "态射" 则可被视为自然变换.

### 定义 2.2.1 (自然变换, 构件, 自然同构)

设有范畴 $\mathcal{C}, \mathcal{D}$ 以及函子 $F, G : \mathcal{C \to D}$：

- 称 $\alpha : F \Rightarrow G$ 为从 $F$ 到 $G$ 的 **自然变换 (natural transformation)**, 若满足了：
  $$
  \Forall{X, Y \in \Ob{\mathcal{C}}} \Forall{f : \mathcal{C}(X, Y) \\ \alpha_\gamma : \mathcal{D}(F(\gamma), G(\gamma))} \alpha_Y \circ F(f) = G(f) \circ \alpha_X
  $$

- 称态射 $\alpha_{(-)} \in \mathcal{D}(F(-), G(-))$ 为 $\alpha$ 的 **构件 (component)**;

- 称 $\alpha$ 为函子 $F$ 与 $G$ 的 **自然同构 (natural isomorphism)**, 当 $\alpha_{(-)}$ 为 $\mathcal{D}$ 中的同构关系, 记为 $\alpha : F \overset{\sim}{\to} G$ 或 $F \simeq G$.

### 注释

换句话说, 即使得 $\mathcal{C}$ 中的态射 $f : \mathcal{C}(X, Y)$ 可诱导出下图底部的 **自然方块 (natural sequare)** 于 $\mathcal{D}$ 中可交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IlgifSx7InBvc2l0aW9uIjpbMiwxXSwidmFsdWUiOiJZIn0seyJwb3NpdGlvbiI6WzAsMl0sInZhbHVlIjoiRihYKSJ9LHsicG9zaXRpb24iOlsxLDNdLCJ2YWx1ZSI6IkYoWSkifSx7InBvc2l0aW9uIjpbMiwyXSwidmFsdWUiOiJHKFgpIn0seyJwb3NpdGlvbiI6WzMsM10sInZhbHVlIjoiRyhZKSJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJ2YWx1ZSI6ImYifSx7ImZyb20iOjAsInRvIjoyLCJsaW5lIjoiZG90dGVkIiwiYmVuZCI6MCwidmFsdWUiOiJGIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjowLCJ0byI6NCwibGluZSI6ImRvdHRlZCIsInZhbHVlIjoiRyIsImxhYmVsUG9zaXRpb24iOiJsZWZ0In0seyJmcm9tIjoxLCJ0byI6MywibGluZSI6ImRvdHRlZCIsImJlbmQiOjAsInZhbHVlIjoiRiIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6MSwidG8iOjUsImxpbmUiOiJkb3R0ZWQiLCJiZW5kIjowLCJ2YWx1ZSI6IkciLCJsYWJlbFBvc2l0aW9uIjoibGVmdCJ9LHsiZnJvbSI6MiwidG8iOjQsInZhbHVlIjoiXFxhbHBoYV9YIiwibGFiZWxQb3NpdGlvbiI6ImxlZnQifSx7ImZyb20iOjMsInRvIjo1LCJ2YWx1ZSI6IlxcYWxwaGFfWSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6NCwidG8iOjUsInZhbHVlIjoiRyhmKSIsImxhYmVsUG9zaXRpb24iOiJsZWZ0In0seyJmcm9tIjoyLCJ0byI6MywidmFsdWUiOiJGKGYpIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In1dfQ==
\xymatrix{
 & X \ar@{->}[rd]^{f} \ar@{.>}[ldd]_{F} \ar@{.>}[rdd]^{G} &  &  \\
 &  & Y \ar@{.>}[ldd]_{F} \ar@{.>}[rdd]^{G} &  \\
F(X) \ar@{->}[rr]^{\alpha_X} \ar@{->}[rd]_{F(f)} &  & G(X) \ar@{->}[rd]^{G(f)} &  \\
 & F(Y) \ar@{->}[rr]_{\alpha_Y} &  & G(Y)
}
$$

### 例子 2.2.2 (任意群皆自然同构于它的反群)

对于群 $(G, *)$, 我们可以按以下方式定义它的 **反群 (opposite group)** $(G^\oppos, *^\oppos)$：

- $G$ 的反群的基础集为 $G$ 本身, 即 $G^\oppos \coloneqq G$;
- $G^\oppos$ 的二元运算定义为 $a *^\oppos b = b * a$.

并且定义反群之间的同态 $(-)^\oppos$, 其为群范畴 $\Grp$ 上的自函子：
$$
\begin{align}
\Grp & \overset{(-)^\oppos}{\to} \Grp \\
(G, *) & \overset{\hphantom{(-)^\oppos}}{\mapsto} (G^\oppos, *^\oppos) \\
f & \overset{\hphantom{(-)^\oppos}}{\mapsto} f^\oppos \coloneqq f \\
\end{align}
$$
则可引出一个重要的结论, 即任意群 $G$ 皆是自然同构于它的反群 $G^\oppos$.

##### 证明

设有任意群 $G, H \in \Ob\Grp$ 以及群同态 $f : G \to H$ (皆简记任意的 $(G, *)$ 为 $G$, 反群亦然), 则需证明：

- $(-)^\oppos$ 保有群同态：由于 $f$ 可诱导出反群之间的映射 $f^\oppos : G^\oppos \to H^\oppos$, 那么对于任意 $a, b \in G^\oppos$ 显然 $f^\oppos$ 保有同态性：
  $$
  f^\oppos(a \  {*_G}^\oppos \  b) = f(a *_G b) = f(a) *_H f(b) = f^\oppos(a) \  {*_H}^\oppos \  f^\oppos(b)
  $$

- 考虑恒等函子 $1_\Grp$ 与 $(-)^\oppos$, 群同态 $f : G \to H$ 以及自然变换 $\alpha : 1_{\Grp} \Rightarrow (-)^\oppos$, 分别需要证明：

  - 自然性, 即下图于 $\Grp$ 中可交换：
    $$
    % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IjFfXFx0ZXh0e0dycH0oRykgPSBHIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiMV9cXHRleHR7R3JwfShIKSA9IEgifSx7InBvc2l0aW9uIjpbMSwwXSwidmFsdWUiOiJHXlxcdGV4dHtvcH0ifSx7InBvc2l0aW9uIjpbMSwxXSwidmFsdWUiOiJIXlxcdGV4dHtvcH0ifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MiwibGFiZWxQb3NpdGlvbiI6ImxlZnQiLCJ2YWx1ZSI6IlxcYWxwaGFfRyJ9LHsiZnJvbSI6MSwidG8iOjMsImxhYmVsUG9zaXRpb24iOiJyaWdodCIsInZhbHVlIjoiXFxhbHBoYV9IIn0seyJmcm9tIjowLCJ0byI6MSwidmFsdWUiOiIxX1xcdGV4dHtHcnB9KGYpID0gZiIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6MiwidG8iOjMsInZhbHVlIjoiZl5cXHRleHR7b3B9IiwibGFiZWxQb3NpdGlvbiI6ImxlZnQifV19
    \xymatrix{
    1_\text{Grp}(G) = G \ar@{->}[r]^{\alpha_G} \ar@{->}[d]_{1_\text{Grp}(f) = f} & G^\text{op} \ar@{->}[d]^{f^\text{op}} \\
    1_\text{Grp}(H) = H \ar@{->}[r]_{\alpha_H} & H^\text{op}
    }
    $$
    定义构件为 $\alpha_{(-)}(g) = g^{-1}$, 那么即可使得上图交换：
    $$
    (f^\oppos \circ \alpha_G)(g) = f^\oppos(g^{-1}) \overset{\text{群同态保逆}}{=} f^\oppos(g)^{-1} = (\alpha_H \circ f)(g)
    $$

  - $\alpha$ 为群同构：这是显然的, 因为取逆操作的确构成一一对应且保证了群同态.

### 例子 2.2.3 (群的交换化)

设有任意群 $G \in \Ob\Grp$, 即使 $G$ 本身非交换, 我们亦有办法使其交换化, 现在分别定义：

- 任意两个元素 $g, h \in G$ 的 **交换子 (commutator)** 为 $[g, h] \coloneqq g^{-1}h^{-1}gh \in G$;

- $G$ 的 **换位子群 / 导群 (commutator subgroup / derived subgroup)** 为：
  $$
  [G, G] \coloneqq \lang [g, h] \mid g, h \in G \rang
  $$
  即为所有 $G$ 中的交换子所生成的最小正规子群 $[G, G] \lhd G$ 使得 $G$ 商掉 $[G, G]$ 后是可交换的;

- 可交换商群 $G^{\text{ab}} \coloneqq G / [G, G]$ 称为对 $G$ 的 **交换化 (abelianization)**.

其中有典范投射 $\pi_G : G \to G^{\text{ab}}$, 则 $\pi_{(-)} : 1_\Grp(-) \to (-)^{\text{ab}}$ 为 $\pi$ 的构件, 因此 $\pi: 1_\Grp \to (-)^{\text{ab}}$.

##### 证明

要证明 $\pi$ 为自然变换, 那么对于任意群同态 $f : G \to H$, 则应诱导出下图可交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IjFfe1xcdGV4dHtHcnB9fShHKSA9IEcifSx7InBvc2l0aW9uIjpbMSwwXSwidmFsdWUiOiJHXntcXHRleHR7YWJ9fSJ9LHsicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IjFfe1xcdGV4dHtHcnB9fShIKSA9IEgifSx7InBvc2l0aW9uIjpbMSwxXSwidmFsdWUiOiJIXntcXHRleHR7YWJ9fSJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJ2YWx1ZSI6IlxccGlfRyJ9LHsiZnJvbSI6MCwidG8iOjIsImxhYmVsUG9zaXRpb24iOiJyaWdodCIsInZhbHVlIjoiMV97XFx0ZXh0e0dycH19KGYpID0gZiJ9LHsiZnJvbSI6MiwidG8iOjMsInZhbHVlIjoiXFxwaV9IIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjoxLCJ0byI6MywidmFsdWUiOiJmXntcXHRleHR7YWJ9fSJ9XX0=
\xymatrix{
1_{\text{Grp}}(G) = G \ar@{->}[r]^{\pi_G} \ar@{->}[d]_{1_{\text{Grp}}(f) = f} & G^{\text{ab}} \ar@{->}[d]^{f^{\text{ab}}} \\
1_{\text{Grp}}(H) = H \ar@{->}[r]_{\pi_H} & H^{\text{ab}}
}
$$
其中 $\pi_G(a) = a[G, G]$, 而由商群的泛性质, 对于合成同态 $\pi_H \circ f : G \to H^{\text{ab}}$, 并且 $[G, G] \lhd G$, 那么若可证得 $[G, G] \sub \Ker{\pi_H \circ f}$, 则可诱导出唯一同态 $\Map{f^{\text{ab}}}{G^{\text{ab}}}{H^{\text{ab}}}{a[G, G]}{\pi_H(f(a))}$ 使得上图可交换.

而由于 $H^\text{ab}$ 为交换群, 则它的换位子群为 $[H^\text{ab}, H^\text{ab}] = \lang [e_{H^{\text{ab}}}, e_{H^{\text{ab}}}] \rang = [H, H]$, 那么对于同态 $\pi_H \circ f$, 其会将所有 $G$ 中交换子坍塌为唯一的交换子 $[e_{H^{\text{ab}}}, e_{H^{\text{ab}}}]$, 因此 $\pi_H \circ f$ 为满同态, 使得换位子群的同态像为 $\pi_H(f([G, G])) = [H, H]$, 因此 $[G, G] \sub [H, H] = \Ker{\pi_H \circ f}$.

### 例子 2.2.4 (Hurewicz 同态)

于代数拓扑中, 对于任意道路连通且带基点的拓扑空间 $(X, x)$ 以及 $n \in \Z^+$, 那么则存在群同态：
$$
h_n : \pi_n(X, x) \to H_n(X)
$$
使得将 $(X, x)$ 的第 $n$ 同伦群映射为它的 $n$ 维同调群, 而 $\pi_n$ 与 $H_n$ 皆是函子 $\Top \to \Grp$, 因此 $h_n : \pi_n \Rightarrow H_n$.

### 例子 2.2.5 (行列式)

设有交换环 $R, S$ 以及环同态 $f : R \to S$, 那么它们各自 $n \times n$ 方阵的一般线性群 $\op{GL}_n(R)$ 以及 $\op{GL}_n(S)$, 那么则有群同态：
$$
\op{GL}_n(f) : \op{GL}_n(R) \to \op{GL}_n(S)
$$
类似地, 由于所有 $R, S$ 中的可逆元构成乘法可逆群 $R^\times, S^\times$, 我们可以对 $f$ 限制到群 $R^\times, S^\times$ 的群同态上, 那么则可诱导出下图交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IlxcdGV4dHtHTH1fbihSKSJ9LHsicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IlJeXFx0aW1lcyJ9LHsicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IlxcdGV4dHtHTH1fbihTKSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IlNeXFx0aW1lcyJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJ2YWx1ZSI6IlxcZGV0X1IifSx7ImZyb20iOjAsInRvIjoyLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJ2YWx1ZSI6IlxcdGV4dHtHTH1fbihmKSJ9LHsiZnJvbSI6MiwidG8iOjMsInZhbHVlIjoiXFxkZXRfUyIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6MSwidG8iOjMsInZhbHVlIjoiZnxfe1JeXFx0aW1lc30ifV19
\xymatrix{
\text{GL}_n(R) \ar@{->}[r]^{\det_R} \ar@{->}[d]_{\text{GL}_n(f)} & R^\times \ar@{->}[d]^{f|_{R^\times}} \\
\text{GL}_n(S) \ar@{->}[r]_{\det_S} & S^\times
}
$$
其中 $\det_{(-)} : \op{GL}_n(-) \to (-)^\times$ 为自然变换 $\det : \op{GL}_n(-) \Rightarrow f|_{(-)^\times}$ 的构件.

### 注释

下面是一些关于自然变换的运算与性质, 包含了纵合成, 横合成, 结合律以及互换律.

### 命题 2.2.6 (自然变换的纵合成)

设有范畴 $\mathcal{C}, \mathcal{D}$, 函子 $F, G, H : \mathcal{C} \to \mathcal{D}$ 以及自然变换 $\varphi : F \Rightarrow G, \psi : G \Rightarrow H$, 则有自然变换的纵合成 $\psi \circ \varphi : G \Rightarrow H$, 即：
$$
\xymatrix@C+1pc{
\mathcal{C}
\ruppertwocell^F{\kern{0.5em} \varphi}
\rlowertwocell_H{\kern{0.5em} \psi}
\ar[r]|-G & \mathcal{D}
}
\overset{\text{合成为}}{\Longrightarrow}
\xymatrix@C+1pc{
\mathcal{C} \rtwocell<6>^{F}_{H}{\kern{1.5em} \psi \circ \varphi} & \mathcal{D}
}
$$

##### 证明

若设 $X, Y \in \Ob{\mathcal{C}}$ 以及态射 $f \in \mathcal{C}(X, Y)$, 若有命题所设的自然变换, 则使下图可交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkYoWCkifSx7InBvc2l0aW9uIjpbMSwwXSwidmFsdWUiOiJHKFgpIn0seyJwb3NpdGlvbiI6WzIsMF0sInZhbHVlIjoiSChYKSJ9LHsicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IkYoWSkifSx7InBvc2l0aW9uIjpbMSwxXSwidmFsdWUiOiJHKFkpIn0seyJwb3NpdGlvbiI6WzIsMV0sInZhbHVlIjoiSChZKSJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJ2YWx1ZSI6IlxcdmFycGhpX1gifSx7ImZyb20iOjEsInRvIjoyLCJ2YWx1ZSI6IlxccHNpX1gifSx7ImZyb20iOjAsInRvIjozLCJ2YWx1ZSI6IkYoZikiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjEsInRvIjo0LCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIiwidmFsdWUiOiJHKGYpIn0seyJmcm9tIjoyLCJ0byI6NSwibGFiZWxQb3NpdGlvbiI6ImxlZnQiLCJ2YWx1ZSI6IkgoZikifSx7ImZyb20iOjMsInRvIjo0LCJ2YWx1ZSI6IlxcdmFycGhpX1kiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjQsInRvIjo1LCJ2YWx1ZSI6IlxccHNpX1kiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifV19
\xymatrix{
F(X) \ar@{->}[r]^{\varphi_X} \ar@{->}[d]_{F(f)} & G(X) \ar@{->}[r]^{\psi_X} \ar@{->}[d]|-{G(f)} & H(X) \ar@{->}[d]^{H(f)} \\
F(Y) \ar@{->}[r]_{\varphi_Y} & G(Y) \ar@{->}[r]_{\psi_Y} & H(Y)
}
$$
我们记 $(\varphi \circ \psi)_{(-)} \coloneqq \varphi_{(-)} \circ \psi_{(-)}$ 因此有：
$$
\begin{align}
(\psi_Y \circ \varphi_Y) \circ F(f) & = H(f) \circ (\psi_X \circ \varphi_X) \\
(\psi \circ \varphi)_Y \circ F(f) & = H(f) \circ (\psi \circ \varphi)_X
\end{align}
$$
根据定义, 显然 $\psi \circ \varphi$ 显然为从 $G$ 到 $H$ 的合成自然变换.

### 注释

自然变换同样可以定义横合成：
$$
\xymatrix@C+1pc{
\mathcal{C} \rtwocell<6>^{F_1}_{F_2}{\kern{0.5em} \varphi} & \mathcal{D}
\rtwocell<6>^{G_1}_{G_2}{\kern{0.5em} \psi} & \mathcal{E}
}
\overset{\text{合成为}}{\Longrightarrow}
\xymatrix@C+1pc{
\mathcal{C} \rtwocell<6>^{G_1 \circ F_1}_{G_2 \circ F_2}{\kern{1.5em} \psi * \varphi} & \mathcal{E}
}
$$
不过为了准确地定义 $\psi * \varphi$ 这样的操作, 我们需要考虑构件 $(\psi * \varphi)_{(-)}$, 那么不妨挑选任一对象 $X \in \Ob{\mathcal{C}}$, 则对于对象 $X$ 的构件应为：
$$
(\psi * \varphi)_X : G_1(F_1(X)) \to G_2(F_2(X))
$$
而对象 $X$ 分别被函子 $F_1, F_2$ 映射后可得到 $F_1(X)$ 以及 $F_2(X)$, 并且可以进一步确定它在自然变换 $\varphi$ 的构件为 $\varphi_X : F_1(X) \to F_2(X)$, 而 $\varphi_X$ 经过函子 $G_1, G_2$ 映射后则可进一步诱导出以下交换图：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IkZfMihYKSJ9LHsicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkZfMShYKSJ9LHsicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IkdfMShGXzEoWCkpIn0seyJwb3NpdGlvbiI6WzEsMV0sInZhbHVlIjoiR18xKEZfMihYKSkifSx7InBvc2l0aW9uIjpbMiwwXSwidmFsdWUiOiJHXzIoRl8xKFgpKSJ9LHsicG9zaXRpb24iOlsyLDFdLCJ2YWx1ZSI6IkdfMihGXzIoWCkpIn1dLCJlZGdlcyI6W3siZnJvbSI6MSwidG8iOjAsInZhbHVlIjoiXFx2YXJwaGlfWCIsImxpbmUiOiJkYXNoZWQiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjIsInRvIjozLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJ2YWx1ZSI6IkdfMShcXHZhcnBoaV9YKSJ9LHsiZnJvbSI6MiwidG8iOjQsInZhbHVlIjoiXFxwc2lfe0ZfMShYKX0ifSx7ImZyb20iOjMsInRvIjo1LCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJ2YWx1ZSI6IlxccHNpX3tGXzIoWCl9In0seyJmcm9tIjo0LCJ0byI6NSwidmFsdWUiOiJHXzIoXFx2YXJwaGlfWCkifSx7ImZyb20iOjIsInRvIjo1LCJ2YWx1ZSI6IihcXHBzaSAqIFxcdmFycGhpKV9YIiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9XX0=
\xymatrix{
F_1(X) \ar@{-->}[d]_{\varphi_X} & G_1(F_1(X)) \ar@{->}[d]_{G_1(\varphi_X)} \ar@{->}[r]^{\psi_{F_1(X)}} \ar@{->}[rd]|-{(\psi * \varphi)_X} & G_2(F_1(X)) \ar@{->}[d]^{G_2(\varphi_X)} \\
F_2(X) & G_1(F_2(X)) \ar@{->}[r]_{\psi_{F_2(X)}} & G_2(F_2(X))
}
$$
可见从 $G_1(F_1(X))$ 到 $G_2(F_2(X))$ 有两条可交换的道路, 因此就确定了构件 $(\psi * \varphi)_X$ 的定义：
$$
(\psi * \varphi)_X \coloneqq G_2(\varphi_X) \circ \psi_{F_1(X)} = \psi_{F_2(X)} \circ G_1(\varphi_X)
$$
现在就可以引入关于横合成的严格定义了.

### 命题 2.2.7 (自然变换的横合成)

设有范畴 $\mathcal{C}, \mathcal{D}, \mathcal{E}$, 函子 $F_1, F_2 : \mathcal{C} \to \mathcal{D}$ 和 $G_1, G_2 : \mathcal{D} \to \mathcal{E}$, 以及自然变换 $\varphi : F_1 \Rightarrow F_2$ 与 $\psi : G_1 \Rightarrow G_2$, 则有自然变换的横合成 $\psi * \varphi : G_1 \circ F_1 \Rightarrow G_2 \circ F_2$, 即：
$$
\xymatrix@C+1pc{
\mathcal{C} \rtwocell<6>^{F_1}_{F_2}{\kern{0.5em} \varphi} & \mathcal{D}
\rtwocell<6>^{G_1}_{G_2}{\kern{0.5em} \psi} & \mathcal{E}
}
\overset{\text{合成为}}{\Longrightarrow}
\xymatrix@C+1pc{
\mathcal{C} \rtwocell<6>^{G_1 \circ F_1}_{G_2 \circ F_2}{\kern{1.5em} \psi * \varphi} & \mathcal{E}
}
$$

简而言之, 即需证明下图于 $\mathcal{E}$ 中可交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkdfMShGXzEoWCkpIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiR18xKEZfMShZKSkifSx7InBvc2l0aW9uIjpbMSwwXSwidmFsdWUiOiJHXzIoRl8yKFgpKSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IkdfMihGXzIoWSkpIn1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjEsImxhYmVsUG9zaXRpb24iOiJyaWdodCIsInZhbHVlIjoiR18xKEZfMShmKSkifSx7ImZyb20iOjAsInRvIjoyLCJ2YWx1ZSI6IihcXHBzaSAqIFxcdmFycGhpKV9YIn0seyJmcm9tIjoyLCJ0byI6MywidmFsdWUiOiJHXzIoRl8yKGYpKSJ9LHsiZnJvbSI6MSwidG8iOjMsInZhbHVlIjoiKFxccHNpICogXFx2YXJwaGkpX1kiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifV19
\xymatrix{
G_1(F_1(X)) \ar@{->}[d]_{G_1(F_1(f))} \ar@{->}[r]^{(\psi * \varphi)_X} & G_2(F_2(X)) \ar@{->}[d]^{G_2(F_2(f))} \\
G_1(F_1(Y)) \ar@{->}[r]_{(\psi * \varphi)_Y} & G_2(F_2(Y))
}
$$

##### 证明

对于任意 $X, Y \in \Ob{\mathcal{C}}$ 以及态射 $f \in \mathcal{C}(X, Y)$, 由自然变换 $\varphi$ 知下图于 $\mathcal{D}$ 中可交换：
$$
\xymatrix{
F_1(X) \ar@{->}[d]_{F_1(f)} \ar@{->}[r]^{\varphi_X} & F_2(X) \ar@{->}[d]^{F_2(f)} \\
F_1(Y) \ar@{->}[r]_{\varphi_Y} & F_2(Y)
}
$$
那么此时希望获得 $G_1(F_1(-))$, 那么再应用函子 $G_1$ 至上图, 得到：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkdfMShGXzEoWCkpIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiR18xKEZfMShZKSkifSx7InBvc2l0aW9uIjpbMSwwXSwidmFsdWUiOiJHXzEoRl8yKFgpKSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IkdfMShGXzIoWSkpIn1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjEsInZhbHVlIjoiR18xKEZfMShmKSkiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjAsInRvIjoyLCJ2YWx1ZSI6IkdfMShcXHZhcnBoaV9YKSJ9LHsiZnJvbSI6MSwidG8iOjMsInZhbHVlIjoiR18xKFxcdmFycGhpX1kpIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjoyLCJ0byI6MywidmFsdWUiOiJHXzEoRl8yKGYpKSIsImxhYmVsUG9zaXRpb24iOiJsZWZ0In1dfQ==
\xymatrix{
G_1(F_1(X)) \ar@{->}[d]_{G_1(F_1(f))} \ar@{->}[r]^{G_1(\varphi_X)} & G_1(F_2(X)) \ar@{->}[d]^{G_1(F_2(f))} \\
G_1(F_1(Y)) \ar@{->}[r]_{G_1(\varphi_Y)} & G_1(F_2(Y))
}
$$
而为了获得 $G_2(F_2(-))$, 再对上述图表进行拓展, 那么就得到以下交换图：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkdfMShGXzEoWCkpIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiR18xKEZfMShZKSkifSx7InBvc2l0aW9uIjpbMSwwXSwidmFsdWUiOiJHXzEoRl8yKFgpKSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IkdfMShGXzIoWSkpIn0seyJwb3NpdGlvbiI6WzIsMV0sInZhbHVlIjoiR18yKEZfMihZKSkifSx7InBvc2l0aW9uIjpbMiwwXSwidmFsdWUiOiJHXzIoRl8yKFgpKSJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJ2YWx1ZSI6IkdfMShGXzEoZikpIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjowLCJ0byI6MiwidmFsdWUiOiJHXzEoXFx2YXJwaGlfWCkifSx7ImZyb20iOjEsInRvIjozLCJ2YWx1ZSI6IkdfMShcXHZhcnBoaV9ZKSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6MiwidG8iOjMsInZhbHVlIjoiR18xKEZfMihmKSkiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjozLCJ0byI6NCwibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwidmFsdWUiOiJcXHBzaV97Rl8yKFkpfSJ9LHsiZnJvbSI6MiwidG8iOjUsInZhbHVlIjoiXFxwc2lfe0ZfMihYKX0ifSx7ImZyb20iOjUsInRvIjo0LCJ2YWx1ZSI6IkdfMihGXzIoZikpIn1dfQ==
\xymatrix{
G_1(F_1(X)) \ar@{->}[d]_{G_1(F_1(f))} \ar@{->}[r]^{G_1(\varphi_X)} & G_1(F_2(X)) \ar@{->}[d]|-{G_1(F_2(f))} \ar@{->}[r]^{\psi_{F_2(X)}} & G_2(F_2(X)) \ar@{->}[d]^{G_2(F_2(f))} \\
G_1(F_1(Y)) \ar@{->}[r]_{G_1(\varphi_Y)} & G_1(F_2(Y)) \ar@{->}[r]_{\psi_{F_2(Y)}} & G_2(F_2(Y))
}
$$
由于图中左右两个小方块可交换, 因此大方块亦可交换, 即：
$$
\psi_{F_2(Y)} \circ G_1(\varphi_Y) \circ G_1(F_1(f)) = G_2(F_2(f)) \circ \psi_{F_2(X)} \circ G_1(\varphi_X) \\
$$
而该处的 $\psi_{F_2(Y)} \circ G_1(\varphi_Y) = (\psi * \varphi)_Y$ 而 $\psi_{F_2(X)} \circ G_1(\varphi_X) = (\psi * \varphi)_X$, 所以最终得到了自然变换的横合成 $\psi * \varphi : G_1 \circ F_1 \Rightarrow G_2 \circ F_2$.

### 注释

关于横合成的证明将得到以下这样的立方体交换图, 上述命题即要使得其中的斜面矩形可交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IkdfMShGXzEoWCkpIn0seyJwb3NpdGlvbiI6WzMsMF0sInZhbHVlIjoiR18xKEZfMihYKSkifSx7InBvc2l0aW9uIjpbMCwxXSwidmFsdWUiOiJHXzEoRl8xKFkpKSJ9LHsicG9zaXRpb24iOlsyLDFdLCJ2YWx1ZSI6IkdfMShGXzIoWSkpIn0seyJwb3NpdGlvbiI6WzEsM10sInZhbHVlIjoiR18yKEZfMShYKSkifSx7InBvc2l0aW9uIjpbMywzXSwidmFsdWUiOiJHXzIoRl8yKFgpKSJ9LHsicG9zaXRpb24iOlswLDRdLCJ2YWx1ZSI6IkdfMihGXzEoWSkpIn0seyJwb3NpdGlvbiI6WzIsNF0sInZhbHVlIjoiR18yKEZfMihZKSkifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MSwidmFsdWUiOiJHXzEoXFx2YXJwaGlfWCkiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjowLCJ0byI6MiwidmFsdWUiOiJHXzEoRl8xKGYpKSIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifSx7ImZyb20iOjIsInRvIjozLCJ2YWx1ZSI6IkdfMShcXHZhcnBoaV9ZKSIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifSx7ImZyb20iOjEsInRvIjozLCJ2YWx1ZSI6IkdfMShGXzIoZikpIiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6NCwidG8iOjYsInZhbHVlIjoiR18yKEZfMShmKSkiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjo0LCJ0byI6NSwidmFsdWUiOiJHXzIoXFx2YXJwaGlfWCkiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjo1LCJ0byI6NywidmFsdWUiOiJHXzIoRl8yKGYpKSIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifSx7ImZyb20iOjYsInRvIjo3LCJ2YWx1ZSI6IkdfMihcXHZhcnBoaV9ZKSIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifSx7ImZyb20iOjAsInRvIjo1LCJ2YWx1ZSI6IihcXHBzaSAqIFxcdmFycGhpKV9YIiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6MiwidG8iOjcsInZhbHVlIjoiKFxccHNpICogXFx2YXJwaGkpX1kiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjoyLCJ0byI6NiwibGluZSI6InNvbGlkIiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSIsInZhbHVlIjoiXFxwc2lfe0ZfMShZKX0ifSx7ImZyb20iOjAsInRvIjo0LCJsaW5lIjoic29saWQiLCJ2YWx1ZSI6IlxccHNpX3tGXzEoWCl9IiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6MSwidG8iOjUsImxpbmUiOiJzb2xpZCIsInZhbHVlIjoiXFxwc2lfe0ZfMihYKX0iLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjozLCJ0byI6NywibGluZSI6InNvbGlkIiwidmFsdWUiOiJcXHBzaV97Rl8yKFkpfSIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifV19
\xymatrix{
 & G_1(F_1(X)) \ar@{->}[rr]|-{G_1(\varphi_X)} \ar@{->}[ld]|-{G_1(F_1(f))} \ar@{->}[rrddd]|-{(\psi * \varphi)_X} \ar@{->}[ddd]|-{\psi_{F_1(X)}} &  & G_1(F_2(X)) \ar@{->}[ld]|-{G_1(F_2(f))} \ar@{->}[ddd]|-{\psi_{F_2(X)}} \\
G_1(F_1(Y)) \ar@{->}[rr]|-{G_1(\varphi_Y)} \ar@{->}[rrddd]|-{(\psi * \varphi)_Y} \ar@{->}[ddd]|-{\psi_{F_1(Y)}} &  & G_1(F_2(Y)) \ar@{->}[ddd]|-{\psi_{F_2(Y)}} &  \\
 &  &  &  \\
 & G_2(F_1(X)) \ar@{->}[ld]|-{G_2(F_1(f))} \ar@{->}[rr]|-{G_2(\varphi_X)} &  & G_2(F_2(X)) \ar@{->}[ld]|-{G_2(F_2(f))} \\
G_2(F_1(Y)) \ar@{->}[rr]|-{G_2(\varphi_Y)} &  & G_2(F_2(Y)) & 
}
$$

### 命题 2.2.8 (纵/横合成的结合律)

自然变换的纵合成与横合成皆是满足结合律的, 即：
$$
\xymatrix@C+1pc{
\mathcal{C} \rtwocell<6>^{F_1}_{F_2}{\ \varphi} & \mathcal{D}
\rtwocell<6>^{G_1}_{G_2}{\ \psi} & \mathcal{E}
\rtwocell<6>^{H_1}_{H_2}{\ \gamma} & \mathcal{F}
}
\qquad
\xymatrix@C+1pc{
\mathcal{C} \ruppertwocell<12>{<-4> \  \varphi} 
\rtwocell<4>{\  \psi}
\rlowertwocell<-12>_{}{<4> \  \gamma} & \mathcal{D}
}
$$
使得 $(\gamma \circ \psi) \circ \varphi = \gamma \circ (\psi \circ \varphi)$, 其中的 $\circ$ 为纵/横合成.

##### 证明

该处证明从略.

### 注释

我们引入并定义一种函子与自然变换间的二元操作, 以便于在证明自然变换的互换律时发挥作用.

### 定义 2.2.9 (Whisker 化)

设有范畴 $\mathcal{C}, \mathcal{D}, \mathcal{E}$, 函子 $F, F_1, F_2 : \mathcal{C} \to \mathcal{D}$ 以及 $G, G_1, G_2 : \mathcal{D} \to \mathcal{E}$：

- 对任意 $\eta : F_1 \Rightarrow F_2$ 则存在自然变换 $\xymatrix@C+1pc{
  \mathcal{C} \rtwocell<6>^{G \circ F_1}_{G \circ F_2}{\kern{1.5em} G \eta} & \mathcal{E}
  }$, 且对任意 $X \in \Ob{\mathcal{C}}$, 定义 $G \eta$ 的构件为 $(G \eta)_X \coloneqq G(\eta_X)$;
- 对任意 $\epsilon : G_1 \Rightarrow G_2$, 则存在自然变换 $\xymatrix@C+1pc{
  \mathcal{C} \rtwocell<6>^{G_1 \circ F}_{G_2 \circ F}{\kern{1.5em} \epsilon F} & \mathcal{E}
  }$, 且对任意 $X \in \Ob{\mathcal{D}}$, 定义 $\epsilon F$ 的构件为 $(\epsilon F)_X \coloneqq \epsilon_{F(X)}$.

我们称上述这样定义的 $(G \eta)_X$ 与 $(\epsilon F)_X$ 为 **Whisker 化 (Whiskering)**.

### 引理 2.2.10 (纵/横合成互换律)

设有范畴 $\mathcal{C}, \mathcal{D}, \mathcal{E}$, 函子 $F_1, F_2, F_3 : \mathcal{C} \to \mathcal{D}$ 和 $G_1, G_2, G_3 : \mathcal{D} \to \mathcal{E}$, 以及它们之间的自然变换 $\varphi, \varphi', \psi, \psi'$ 使得有：
$$
\xymatrix@C+1pc{
\mathcal{C}
\ruppertwocell^{F_1}{\kern{0.5em} \varphi}
\rlowertwocell_{F_3}{\kern{0.5em} \varphi'}
\ar[r]|-{F_2} & \mathcal{D}
\ruppertwocell^{G_1}{\kern{0.5em} \psi}
\rlowertwocell_{G_3}{\kern{0.5em} \psi'}
\ar[r]|-{G_2} & \mathcal{E}
}
$$
那么以下 **互换律 (interchange law)** 成立 (其中 $\circ$ 表示纵合成, $*$ 表示横合成)：
$$
(\psi' \circ \psi) * (\varphi' \circ \varphi) = (\psi' * \varphi') \circ (\psi * \varphi)
$$

##### 证明

对于任意 $X, Y \in \Ob{\mathcal{C}}$ 以及态射 $f \in \mathcal{C}(X, Y)$, 由自然变换的纵合成 $\varphi' \circ \varphi$ 知下图于 $\mathcal{D}$ 中可交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkZfMShYKSJ9LHsicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IkZfMShZKSJ9LHsicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IkZfMihYKSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IkZfMihZKSJ9LHsicG9zaXRpb24iOlsyLDBdLCJ2YWx1ZSI6IkZfMyhYKSJ9LHsicG9zaXRpb24iOlsyLDFdLCJ2YWx1ZSI6IkZfMyhZKSJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJ2YWx1ZSI6IkZfMShmKSJ9LHsiZnJvbSI6MCwidG8iOjIsInZhbHVlIjoiXFx2YXJwaGlfe1h9In0seyJmcm9tIjoyLCJ0byI6MywibGFiZWxQb3NpdGlvbiI6Imluc2lkZSIsInZhbHVlIjoiRl8yKGYpIn0seyJmcm9tIjoxLCJ0byI6MywidmFsdWUiOiJcXHZhcnBoaV9ZIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjoyLCJ0byI6NCwidmFsdWUiOiJ7XFx2YXJwaGknfV97WH0ifSx7ImZyb20iOjMsInRvIjo1LCJ2YWx1ZSI6IntcXHZhcnBoaSd9X3tZfSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6NCwidG8iOjUsInZhbHVlIjoiRl8zKGYpIn1dfQ==
\xymatrix{
F_1(X) \ar@{->}[d]_{F_1(f)} \ar@{->}[r]^{\varphi_{X}} & F_2(X) \ar@{->}[d]|-{F_2(f)} \ar@{->}[r]^{{\varphi'}_{X}} & F_3(X) \ar@{->}[d]^{F_3(f)} \\
F_1(Y) \ar@{->}[r]_{\varphi_Y} & F_2(Y) \ar@{->}[r]_{{\varphi'}_{Y}} & F_3(Y)
}
$$
此时即可将上述交换图分别透过三种不同的函子 $G_1, G_2, G_3 : \mathcal{D} \to \mathcal{E}$ 递送至范畴 $\mathcal{E}$ 中去, 使得我们有：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IkdfMShGXzEoWCkpIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiR18xKEZfMShZKSkifSx7InBvc2l0aW9uIjpbNCwwXSwidmFsdWUiOiJHXzEoRl8yKFgpKSJ9LHsicG9zaXRpb24iOlszLDFdLCJ2YWx1ZSI6IkdfMShGXzIoWSkpIn0seyJwb3NpdGlvbiI6WzcsMF0sInZhbHVlIjoiR18xKEZfMyhYKSkifSx7InBvc2l0aW9uIjpbNiwxXSwidmFsdWUiOiJHXzEoRl8zKFkpKSJ9LHsicG9zaXRpb24iOlsxLDJdLCJ2YWx1ZSI6IkdfMihGXzEoWCkpIn0seyJwb3NpdGlvbiI6WzQsMl0sInZhbHVlIjoiR18yKEZfMihYKSkifSx7InBvc2l0aW9uIjpbNywyXSwidmFsdWUiOiJHXzIoRl8zKFgpKSJ9LHsicG9zaXRpb24iOlswLDNdLCJ2YWx1ZSI6IkdfMihGXzEoWSkpIn0seyJwb3NpdGlvbiI6WzMsM10sInZhbHVlIjoiR18yKEZfMihZKSkifSx7InBvc2l0aW9uIjpbNiwzXSwidmFsdWUiOiJHXzIoRl8zKFkpKSJ9LHsicG9zaXRpb24iOlsxLDRdLCJ2YWx1ZSI6IkdfMyhGXzEoWCkpIn0seyJwb3NpdGlvbiI6WzQsNF0sInZhbHVlIjoiR18zKEZfMihYKSkifSx7InBvc2l0aW9uIjpbNyw0XSwidmFsdWUiOiJHXzMoRl8zKFgpKSJ9LHsicG9zaXRpb24iOlswLDVdLCJ2YWx1ZSI6IkdfMyhGXzEoWSkpIn0seyJwb3NpdGlvbiI6WzMsNV0sInZhbHVlIjoiR18zKEZfMihZKSkifSx7InBvc2l0aW9uIjpbNiw1XSwidmFsdWUiOiJHXzMoRl8zKFkpKSJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIiwidmFsdWUiOiJHXzEoRl8xKGYpKSJ9LHsiZnJvbSI6MCwidG8iOjIsInZhbHVlIjoiR18xKFxcdmFycGhpX3tYfSkifSx7ImZyb20iOjIsInRvIjozLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIiwidmFsdWUiOiJHXzEoRl8yKGYpKSJ9LHsiZnJvbSI6MSwidG8iOjMsInZhbHVlIjoiR18xKFxcdmFycGhpX1kpIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjoyLCJ0byI6NCwidmFsdWUiOiJHXzEoe1xcdmFycGhpJ31fe1h9KSJ9LHsiZnJvbSI6MywidG8iOjUsInZhbHVlIjoiR18xKHtcXHZhcnBoaSd9X3tZfSkiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjQsInRvIjo1LCJ2YWx1ZSI6IkdfMShGXzMoZikpIiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6NiwidG8iOjksInZhbHVlIjoiR18yKEZfMShmKSkiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjo2LCJ0byI6NywidmFsdWUiOiJHXzIoXFx2YXJwaGlfe1h9KSJ9LHsiZnJvbSI6NywidG8iOjgsInZhbHVlIjoiR18yKHtcXHZhcnBoaSd9X3tYfSkifSx7ImZyb20iOjEwLCJ0byI6MTEsInZhbHVlIjoiR18yKHtcXHZhcnBoaSd9X3tZfSkiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjcsInRvIjoxMCwidmFsdWUiOiJHXzIoRl8yKGYpKSIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifSx7ImZyb20iOjksInRvIjoxMCwidmFsdWUiOiJHXzIoXFx2YXJwaGlfWSkiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjgsInRvIjoxMSwidmFsdWUiOiJHXzIoRl8zKGYpKSIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifSx7ImZyb20iOjEyLCJ0byI6MTUsInZhbHVlIjoiR18zKEZfMShmKSkiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjoxNSwidG8iOjE2LCJ2YWx1ZSI6IkdfMyhcXHZhcnBoaV9ZKSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6MTIsInRvIjoxMywidmFsdWUiOiJHXzMoXFx2YXJwaGlfe1h9KSJ9LHsiZnJvbSI6MTMsInRvIjoxNiwidmFsdWUiOiJHXzMoRl8yKGYpKSIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifSx7ImZyb20iOjEzLCJ0byI6MTQsInZhbHVlIjoiR18zKHtcXHZhcnBoaSd9X3tYfSkifSx7ImZyb20iOjE0LCJ0byI6MTcsInZhbHVlIjoiR18zKEZfMyhmKSkiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjoxNiwidG8iOjE3LCJ2YWx1ZSI6IkdfMyh7XFx2YXJwaGknfV97WX0pIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjo2LCJ0byI6MTIsInZhbHVlIjoie1xccHNpJ31fe0ZfMShYKX0iLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjo5LCJ0byI6MTUsInZhbHVlIjoie1xccHNpJ31fe0ZfMShZKX0iLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjoxLCJ0byI6OSwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSIsInZhbHVlIjoiXFxwc2lfe0ZfMShZKX0ifSx7ImZyb20iOjAsInRvIjo2LCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIiwidmFsdWUiOiJcXHBzaV97Rl8xKFgpfSJ9LHsiZnJvbSI6MywidG8iOjEwLCJ2YWx1ZSI6IlxccHNpX3tGXzIoWSl9IiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6MTAsInRvIjoxNiwidmFsdWUiOiJ7XFxwc2knfV97Rl8yKFkpfSIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifSx7ImZyb20iOjIsInRvIjo3LCJ2YWx1ZSI6IlxccHNpX3tGXzIoWCl9IiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6NywidG8iOjEzLCJ2YWx1ZSI6IntcXHBzaSd9X3tGXzIoWCl9IiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6NCwidG8iOjgsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUiLCJ2YWx1ZSI6IlxccHNpX3tGXzMoWCl9In0seyJmcm9tIjo4LCJ0byI6MTQsInZhbHVlIjoie1xccHNpJ31fe0ZfMyhYKX0iLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjo1LCJ0byI6MTEsInZhbHVlIjoiXFxwc2lfe0ZfMyhZKX0iLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjoxMSwidG8iOjE3LCJ2YWx1ZSI6IntcXHBzaSd9X3tGXzMoWSl9IiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9XX0=
\xymatrix{
 & G_1(F_1(X)) \ar@{->}[ld]|-{G_1(F_1(f))} \ar@{->}[rrr]^{G_1(\varphi_{X})} \ar@{->}[dd]|-{\psi_{F_1(X)}} &  &  & G_1(F_2(X)) \ar@{->}[ld]|-{G_1(F_2(f))} \ar@{->}[rrr]^{G_1({\varphi'}_{X})} \ar@{->}[dd]|-{\psi_{F_2(X)}} &  &  & G_1(F_3(X)) \ar@{->}[ld]|-{G_1(F_3(f))} \ar@{->}[dd]|-{\psi_{F_3(X)}} \\
G_1(F_1(Y)) \ar@{->}[rrr]_{G_1(\varphi_Y)} \ar@{->}[dd]|-{\psi_{F_1(Y)}} &  &  & G_1(F_2(Y)) \ar@{->}[rrr]_{G_1({\varphi'}_{Y})} \ar@{->}[dd]|-{\psi_{F_2(Y)}} &  &  & G_1(F_3(Y)) \ar@{->}[dd]|-{\psi_{F_3(Y)}} &  \\
 & G_2(F_1(X)) \ar@{->}[ld]|-{G_2(F_1(f))} \ar@{->}[rrr]^{G_2(\varphi_{X})} \ar@{->}[dd]|-{{\psi'}_{F_1(X)}} &  &  & G_2(F_2(X)) \ar@{->}[rrr]^{G_2({\varphi'}_{X})} \ar@{->}[ld]|-{G_2(F_2(f))} \ar@{->}[dd]|-{{\psi'}_{F_2(X)}} &  &  & G_2(F_3(X)) \ar@{->}[ld]|-{G_2(F_3(f))} \ar@{->}[dd]|-{{\psi'}_{F_3(X)}} \\
G_2(F_1(Y)) \ar@{->}[rrr]_{G_2(\varphi_Y)} \ar@{->}[dd]|-{{\psi'}_{F_1(Y)}} &  &  & G_2(F_2(Y)) \ar@{->}[rrr]_{G_2({\varphi'}_{Y})} \ar@{->}[dd]|-{{\psi'}_{F_2(Y)}} &  &  & G_2(F_3(Y)) \ar@{->}[dd]|-{{\psi'}_{F_3(Y)}} &  \\
 & G_3(F_1(X)) \ar@{->}[ld]|-{G_3(F_1(f))} \ar@{->}[rrr]^{G_3(\varphi_{X})} &  &  & G_3(F_2(X)) \ar@{->}[ld]|-{G_3(F_2(f))} \ar@{->}[rrr]^{G_3({\varphi'}_{X})} &  &  & G_3(F_3(X)) \ar@{->}[ld]|-{G_3(F_3(f))} \\
G_3(F_1(Y)) \ar@{->}[rrr]_{G_3(\varphi_Y)} &  &  & G_3(F_2(Y)) \ar@{->}[rrr]_{G_3({\varphi'}_{Y})} &  &  & G_3(F_3(Y)) & 
}
$$
并且上述图中任何一个方块皆可交换, 现在我们整理并简化以上交换图, 将上述的对象 $X, Y$ 忽略并将 $G_i(F_j(-))$ 记为 $G_i \circ F_j$ 的形式：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkdfMSBcXGNpcmMgRl8xIn0seyJwb3NpdGlvbiI6WzIsMF0sInZhbHVlIjoiR18xIFxcY2lyYyBGXzIifSx7InBvc2l0aW9uIjpbNCwwXSwidmFsdWUiOiJHXzEgXFxjaXJjIEZfMyJ9LHsicG9zaXRpb24iOlswLDJdLCJ2YWx1ZSI6IkdfMiBcXGNpcmMgRl8xIn0seyJwb3NpdGlvbiI6WzIsMl0sInZhbHVlIjoiR18yIFxcY2lyYyBGXzIifSx7InBvc2l0aW9uIjpbNCwyXSwidmFsdWUiOiJHXzIgXFxjaXJjIEZfMyJ9LHsicG9zaXRpb24iOlswLDRdLCJ2YWx1ZSI6IkdfMyBcXGNpcmMgRl8xIn0seyJwb3NpdGlvbiI6WzIsNF0sInZhbHVlIjoiR18zIFxcY2lyYyBGXzIifSx7InBvc2l0aW9uIjpbNCw0XSwidmFsdWUiOiJHXzMgXFxjaXJjIEZfMyJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJ2YWx1ZSI6IkdfMShcXHZhcnBoaV97KC0pfSkiLCJsYWJlbFBvc2l0aW9uIjoibGVmdCJ9LHsiZnJvbSI6MSwidG8iOjIsInZhbHVlIjoiR18xKHtcXHZhcnBoaSd9X3soLSl9KSIsImxhYmVsUG9zaXRpb24iOiJsZWZ0In0seyJmcm9tIjozLCJ0byI6NCwidmFsdWUiOiJHXzIoXFx2YXJwaGlfeygtKX0pIiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6NCwidG8iOjUsInZhbHVlIjoiR18yKHtcXHZhcnBoaSd9X3soLSl9KSIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifSx7ImZyb20iOjYsInRvIjo3LCJ2YWx1ZSI6IkdfMyhcXHZhcnBoaV97KC0pfSkiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjcsInRvIjo4LCJ2YWx1ZSI6IkdfMyh7XFx2YXJwaGknfV97KC0pfSkiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjMsInRvIjo2LCJ2YWx1ZSI6IntcXHBzaSd9X3tGXzEoLSl9IiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjowLCJ0byI6MywibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwidmFsdWUiOiJcXHBzaV97Rl8xKC0pfSJ9LHsiZnJvbSI6MSwidG8iOjQsInZhbHVlIjoiXFxwc2lfe0ZfMigtKX0iLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjo0LCJ0byI6NywidmFsdWUiOiJ7XFxwc2knfV97Rl8yKC0pfSIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifSx7ImZyb20iOjIsInRvIjo1LCJsYWJlbFBvc2l0aW9uIjoibGVmdCIsInZhbHVlIjoiXFxwc2lfe0ZfMygtKX0ifSx7ImZyb20iOjUsInRvIjo4LCJ2YWx1ZSI6IntcXHBzaSd9X3tGXzMoLSl9IiwibGFiZWxQb3NpdGlvbiI6ImxlZnQifSx7ImZyb20iOjAsInRvIjo0fSx7ImZyb20iOjQsInRvIjo4fV19
\xymatrix{
G_1 \circ F_1 \ar@{->}[rr]^{G_1(\varphi_{(-)})} \ar@{->}[dd]_{\psi_{F_1(-)}} \ar@{->}[rrdd] &  & G_1 \circ F_2 \ar@{->}[rr]^{G_1({\varphi'}_{(-)})} \ar@{->}[dd]|-{\psi_{F_2(-)}} &  & G_1 \circ F_3 \ar@{->}[dd]^{\psi_{F_3(-)}} \\
 &  &  &  &  \\
G_2 \circ F_1 \ar@{->}[rr]|-{G_2(\varphi_{(-)})} \ar@{->}[dd]_{{\psi'}_{F_1(-)}} &  & G_2 \circ F_2 \ar@{->}[rr]|-{G_2({\varphi'}_{(-)})} \ar@{->}[dd]|-{{\psi'}_{F_2(-)}} \ar@{->}[rrdd] &  & G_2 \circ F_3 \ar@{->}[dd]^{{\psi'}_{F_3(-)}} \\
 &  &  &  &  \\
G_3 \circ F_1 \ar@{->}[rr]_{G_3(\varphi_{(-)})} &  & G_3 \circ F_2 \ar@{->}[rr]_{G_3({\varphi'}_{(-)})} &  & G_3 \circ F_3
}
$$
我们可观察到上图的主对角线 $G_1 \circ F_1 \to G_2 \circ F_2 \to G_3 \circ F_3$ 即为所希望证明的等式, 因为考虑对角线上方的梯形 (或下方) 是可交换的, 因此有等式：
$$
\begin{align}
{\psi'}_{F_3(-)} \circ \psi_{F_3(-)} \circ G_1({\varphi'}_{(-)}) \circ G_1(\varphi_{(-)}) & = {\psi'}_{F_3(-)} \circ G_2({\varphi'}_{(-)}) \circ \psi_{F_2(-)} \circ G_1(\varphi_{(-)}) \\
{(\psi' \circ \psi)}_{F_3(-)} \circ G_1({(\varphi' \circ \varphi)}_{(-)}) & = (\psi' * \varphi')_{(-)} \circ (\psi * \varphi)_{(-)} \\
((\psi' \circ \psi) * (\varphi' \circ \varphi))_{(-)} & = ((\psi' * \varphi') \circ (\psi * \varphi))_{(-)} \\
\end{align}
$$
此时再连带对象 $X, Y$ 一并考虑主对角线平面上的交换图, 得到：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IkdfMShGXzEoWCkpIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiR18xKEZfMShZKSkifSx7InBvc2l0aW9uIjpbNCwyXSwidmFsdWUiOiJHXzIoRl8yKFgpKSJ9LHsicG9zaXRpb24iOlszLDNdLCJ2YWx1ZSI6IkdfMihGXzIoWSkpIn0seyJwb3NpdGlvbiI6WzcsNF0sInZhbHVlIjoiR18zKEZfMyhYKSkifSx7InBvc2l0aW9uIjpbNiw1XSwidmFsdWUiOiJHXzMoRl8zKFkpKSJ9LHsicG9zaXRpb24iOls3LDBdLCJ2YWx1ZSI6IkdfMShGXzMoWCkpIn0seyJwb3NpdGlvbiI6WzYsMV0sInZhbHVlIjoiR18xKEZfMyhZKSkifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MSwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSIsInZhbHVlIjoiR18xKEZfMShmKSkifSx7ImZyb20iOjIsInRvIjozLCJ2YWx1ZSI6IkdfMihGXzIoZikpIiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6NCwidG8iOjUsInZhbHVlIjoiR18zKEZfMyhmKSkiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjowLCJ0byI6MiwidmFsdWUiOiIoXFxwc2kgKiBcXHZhcnBoaSlfWCIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6MiwidG8iOjQsInZhbHVlIjoiKFxccHNpJyAqIFxcdmFycGhpJylfWCIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6MywidG8iOjUsInZhbHVlIjoiKFxccHNpJyAqIFxcdmFycGhpJylfWSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6MSwidG8iOjMsImxhYmVsUG9zaXRpb24iOiJyaWdodCIsInZhbHVlIjoiKFxccHNpICogXFx2YXJwaGkpX1kifSx7ImZyb20iOjAsInRvIjo2LCJ2YWx1ZSI6IkdfMSgoXFx2YXJwaGknIFxcY2lyYyBcXHZhcnBoaSlfWCkifSx7ImZyb20iOjYsInRvIjo0LCJ2YWx1ZSI6IihcXHBzaScgXFxjaXJjIFxccHNpKV97Rl8zKFgpfSJ9LHsiZnJvbSI6NiwidG8iOjcsInZhbHVlIjoiR18xKEZfMyhmKSkiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjo3LCJ0byI6NSwidmFsdWUiOiIoXFxwc2knIFxcY2lyYyBcXHBzaSlfe0ZfMyhZKX0iLCJsYWJlbFBvc2l0aW9uIjoibGVmdCJ9LHsiZnJvbSI6MSwidG8iOjcsInZhbHVlIjoiR18xKChcXHZhcnBoaScgXFxjaXJjIFxcdmFycGhpKV9ZKSJ9XX0=
\xymatrix{
 & G_1(F_1(X)) \ar@{->}[ld]|-{G_1(F_1(f))} \ar@{->}[rrrdd]_{(\psi * \varphi)_X} \ar@{->}[rrrrrr]^{G_1((\varphi' \circ \varphi)_X)} &  &  &  &  &  & G_1(F_3(X)) \ar@{->}[dddd]^{(\psi' \circ \psi)_{F_3(X)}} \ar@{->}[ld]|-{G_1(F_3(f))} \\
G_1(F_1(Y)) \ar@{->}[rrrdd]_{(\psi * \varphi)_Y} \ar@{->}[rrrrrr]^{G_1((\varphi' \circ \varphi)_Y)} &  &  &  &  &  & G_1(F_3(Y)) \ar@{->}[dddd]^{(\psi' \circ \psi)_{F_3(Y)}} &  \\
 &  &  &  & G_2(F_2(X)) \ar@{->}[ld]|-{G_2(F_2(f))} \ar@{->}[rrrdd]_{(\psi' * \varphi')_X} &  &  &  \\
 &  &  & G_2(F_2(Y)) \ar@{->}[rrrdd]_{(\psi' * \varphi')_Y} &  &  &  &  \\
 &  &  &  &  &  &  & G_3(F_3(X)) \ar@{->}[ld]|-{G_3(F_3(f))} \\
 &  &  &  &  &  & G_3(F_3(Y)) & 
}
$$
就证得了关于互换律的自然性, 因此命题成立.

## 2.3. 范畴等价

### 定义 2.3.1 (范畴等价, 范畴间的同构)

设有范畴 $\mathcal{C}, \mathcal{D}$ 以及一对函子 $\xymatrix{\mathcal{C} \ar@/^0.8pc/@{->}[r]^{F} \ar@/_0.8pc/@{<-}[r]_{G} & \mathcal{D}}$, 若有自然同构 $\varphi : F \circ G \overset{\sim}{\to} 1_{\mathcal{D}}$ 以及 $\psi : G \circ F \overset{\sim}{\to} 1_{\mathcal{C}}$, 则：

- 称 $G$ 为 $F$ 的 **拟逆函子 (quasi-inverse functor)**;
- 称 $F$ 为范畴 $\mathcal{C}$ 到 $\mathcal{D}$ 的 **范畴等价 (equivalence of categories)**.

若进一步有 $F \circ G = 1_{\mathcal{D}}$ 以及 $G \circ F = 1_\mathcal{C}$, 则：

- 称 $F$ 为 **范畴间的同构 (isomorphism of categories)**;
- $G$ 为 $F$ 的 **逆函子 (inverse functor)**.

### 注释

- 可见范畴等价的合成仍为范畴等价, 该处的证明从略;
- 一些时候拟逆函子蕴含了 **弱可逆 (weak inverse)** 的意思;
- 事实上若将所有的 $1$-范畴视为 $2$-范畴 $\text{Cat}$ 中的对象, 那么范畴等价恰好就是 $\text{Cat}$ 中等价的定义.

### 命题 2.3.2 (同一个函子的拟逆函子皆是同构的)

若函子 $G, G'$ 皆为函子 $F : \mathcal{C} \to \mathcal{D}$ 的拟逆, 则存在函子同构 $G \simeq G'$.

##### 证明

假设有自然同构 $\varphi : F \circ G \overset{\sim}{\to} 1_{\mathcal{D}}$, $\psi : G \circ F \overset{\sim}{\to} 1_{\mathcal{C}}$ 以及 $\psi' : G' \circ F \overset{\sim}{\to} 1_{\mathcal{C}}$, 若希望证明 $G$ 同构于 $G'$, 则可考虑将 $G' \circ F$ 引入, 使得将 $G$ 拓展为横合成 $1_{\mathcal{C}} * G$ 后有：
$$
\xymatrix@C+2pc{
\mathcal{C} & \mathcal{D} \ltwocell<6>^{(G' \circ F) \circ G}_{1_{\mathcal{C}} \circ G}{\kern{3em} \simeq \hphantom{abc} \psi' * 1_G}
}
\overset{\text{函子结合律}}{\iff}
\xymatrix@C+2pc{
\mathcal{C} & \mathcal{D} \ltwocell<6>^{G' \circ (F \circ G)}_{G' \circ 1_{\mathcal{D}}}{\kern{3em} \simeq \hphantom{abc} 1_{G'} * \varphi}
}
$$

因此见得以下关系成立：
$$
G \overset{\psi' * 1_G}{\simeq} G \circ (G' \circ F) \circ G = G' \circ (F \circ G) \overset{1_{G'} * \psi}{\simeq} G'
$$

### 定义 2.3.3 (骨架, 骨架范畴)

设 $\op{sk}(\mathcal{C})$ 为 $\mathcal{C}$ 的全子范畴：

- 称 $\op{sk}(\mathcal{C})$ 为 $\mathcal{C}$ 的一副 **骨架 (skeleton)**, 若对于任意 $X \in \Ob{\mathcal{C}}$ 都有唯一的 $Y \in \Ob{\op{sk}(\mathcal{C})}$ 使得有同构 $X \overset{\sim}{\to} Y$;
- 称自为骨架的范畴为 **骨架范畴 (skeletal category)**, 即满足 $\mathcal{C} = \op{sk}(\mathcal{C})$.

### 注释

骨架范畴的另外一个等价定义是, 对于任意 $X, Y \in \Ob{\mathcal{C}}$, 若他们是同构的, 则必然是等价的.

### 引理 2.3.4 (骨架范畴的性质)

1. 任意范畴 $\mathcal{C}$ 总是存在一副骨架 $\op{sk}(\mathcal{C})$, 且包含函子 $\iota : \op{sk}(\mathcal{C}) \hookrightarrow \mathcal{C}$ 为范畴间的等价;
2. 骨架范畴间的完全忠实, 本质满的函子皆为同构.

##### 证明

1. 由选择公理, 于 $\Ob{\mathcal{C}}$ 的每个同构类中选定代表元, 这些代表元透过函子 $\kappa : \Ob{\mathcal{C}} \to \Ob{\op{sk}(\mathcal{C})}$ 映射后的对象的全体作为全子范畴 $\op{sk}(\mathcal{C})$ 的对象, 同样地对任意 $X \in \Ob{\mathcal{C}}$ 则可选定唯一同构 $\varphi_X : X \overset{\sim}{\to} \kappa(X)$ 为 $\varphi_X = 1_X$, 那么就有自然同构 $\varphi : 1_\mathcal{C} \overset{\sim}{\to} \kappa$, 即：
   $$
   % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IjFfe1xcbWF0aGNhbHtDfX0oWCkifSx7InBvc2l0aW9uIjpbMSwwXSwidmFsdWUiOiJcXGthcHBhKFgpIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiMV97XFxtYXRoY2Fse0N9fShZKSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6Ilxca2FwcGEoWSkifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MSwidmFsdWUiOiJcXHZhcnBoaV9YIn0seyJmcm9tIjowLCJ0byI6MiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwidmFsdWUiOiIxX3tcXG1hdGhjYWx7Q319KGYpIn0seyJmcm9tIjoyLCJ0byI6MywibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwidmFsdWUiOiJcXHZhcnBoaV9ZIn0seyJmcm9tIjoxLCJ0byI6MywidmFsdWUiOiJcXGthcHBhKGYpIn1dfQ==
   \xymatrix{
   1_{\mathcal{C}}(X) \ar@{->}[r]^{\varphi_X} \ar@{->}[d]_{1_{\mathcal{C}}(f)} & \kappa(X) \ar@{->}[d]^{\kappa(f)} \\
   1_{\mathcal{C}}(Y) \ar@{->}[r]_{\varphi_Y} & \kappa(Y)
   }
   $$
   而由于 $\varphi_X$ 为同构, 将其箭头反转便可定义 $\kappa(f)$ 为共轭形式 $\varphi_Y \circ f \circ {\varphi_X}^{-1}$.

   另一方面, 由于包含函子 $\iota$ 为范畴间的等价, 即存在 $\iota$ 的拟逆函子, 那么现在证明 $\kappa$ 是它的拟逆函子, 即需要说明以下的自然同构成立：
   $$
   \alpha : \iota \circ \kappa \overset{\sim}{\to} 1_{\mathcal{C}} \qquad \beta : \kappa \circ \iota \overset{\sim}{\to} 1_{\op{sk}(\mathcal{C})}
   $$
   而骨架为 $\mathcal{C}$ 的全子范畴, 因此包含函子 $\iota$ 必然是完全忠实的恒等函子, 并且 $\varphi : 1_\mathcal{C} \overset{\sim}{\to} \kappa$, 因此上述自然同构成立.

2. 设 $F : \op{sk}(\mathcal{C}) \to \op{sk}(\mathcal{D})$ 为骨架范畴之间的完全忠实, 本质满函子, 那么对任意 $Z \in \Ob{\op{sk}(\mathcal{D})}$, 存在 $X \in \Ob{\op{sk}(\mathcal{C})}$ 使得有同构 $Z \simeq F(X)$, 按骨架范畴的等价定义就有 $Z = F(X)$, 且由于 $F$ 是完全忠实的, 即对任意 $X, Y \in \op{Ob}(\op{sk}(\mathcal{C}))$ 的映射 $\Hom{\op{sk}(\mathcal{C})}{X}{Y} \to \Hom{\op{sk}(\mathcal{D})}{F(X)}{F(Y)}$ 是一一对应的, 那么若有同构 $F(X) \overset{\sim}{\to} F(Y)$, 则蕴含了 $X \overset{\sim}{\to} Y$, 即 $X = Y$, 因此 $F$ 于对象集上仍是双射, 则可定义其的拟逆函子 $G$.

### 定理 2.3.5 (范畴等价的等价定义)

设有范畴 $\mathcal{C}, \mathcal{D}$ 且函子 $F : \mathcal{C} \to \mathcal{D}$, 则以下命题等价：

1. $F$ 为 $\mathcal{C}$ 到 $\mathcal{D}$ 的范畴等价;
2. $F$ 为全忠实, 且本质满的函子.

##### 证明

$(1) \Rightarrow (2)$：假设 $F$ 为范畴等价, 即意味着存在一对函子 $\xymatrix{\mathcal{C} \ar@/^0.8pc/@{->}[r]^{F} \ar@/_0.8pc/@{<-}[r]_{G} & \mathcal{D}}$ 使得 $\varphi : F \circ G \overset{\sim}{\to} 1_{\mathcal{D}}$ 与 $\psi : G \circ F \overset{\sim}{\to} 1_{\mathcal{C}}$ 为自然同构, 使得下图交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkYoRyhYKSkifSx7InBvc2l0aW9uIjpbMCwxXSwidmFsdWUiOiJGKEcoWSkpIn0seyJwb3NpdGlvbiI6WzEsMF0sInZhbHVlIjoiMV97XFxtYXRoY2Fse0R9fShYKSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IjFfe1xcbWF0aGNhbHtEfX0oWSkifSx7InBvc2l0aW9uIjpbMywwXSwidmFsdWUiOiJHKEYoWCkpIn0seyJwb3NpdGlvbiI6WzMsMV0sInZhbHVlIjoiRyhGKFkpKSJ9LHsicG9zaXRpb24iOls0LDBdLCJ2YWx1ZSI6IjFfXFxtYXRoY2Fse0N9KFgpIn0seyJwb3NpdGlvbiI6WzQsMV0sInZhbHVlIjoiMV9cXG1hdGhjYWx7Q30oWSkifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MSwibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwidmFsdWUiOiJGKEcoZikpIn0seyJmcm9tIjowLCJ0byI6MiwidmFsdWUiOiJcXHZhcnBoaV9YIiwibGFiZWxQb3NpdGlvbiI6ImxlZnQifSx7ImZyb20iOjIsInRvIjozLCJ2YWx1ZSI6IjFfe1xcbWF0aGNhbHtEfX0oZikifSx7ImZyb20iOjEsInRvIjozLCJ2YWx1ZSI6IlxcdmFycGhpX1kiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjQsInRvIjo1fSx7ImZyb20iOjQsInRvIjo2LCJ2YWx1ZSI6IlxccHNpX1giLCJsYWJlbFBvc2l0aW9uIjoibGVmdCJ9LHsiZnJvbSI6NCwidG8iOjUsInZhbHVlIjoiRyhGKGYpKSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6NSwidG8iOjcsInZhbHVlIjoiXFxwc2lfWSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6NiwidG8iOjcsInZhbHVlIjoiMV9cXG1hdGhjYWx7Q30oZikifV19
\xymatrix{
F(G(X)) \ar@{->}[d]_{F(G(f))} \ar@{->}[r]^{\varphi_X} & 1_{\mathcal{D}}(X) \ar@{->}[d]^{1_{\mathcal{D}}(f)} &  & G(F(X)) \ar@{->}[d] \ar@{->}[r]^{\psi_X} \ar@{->}[d]_{G(F(f))} & 1_\mathcal{C}(X) \ar@{->}[d]^{1_\mathcal{C}(f)} \\
F(G(Y)) \ar@{->}[r]_{\varphi_Y} & 1_{\mathcal{D}}(Y) &  & G(F(Y)) \ar@{->}[r]_{\psi_Y} & 1_\mathcal{C}(Y)
}
$$
对于函子 $F$ 态射间的映射 $F : \mathcal{C}(X, Y) \to \mathcal{D}(F(X), F(Y))$, 现在分别证明以下命题：

- $F$ 是忠实的：对任意 $f, g \in \mathcal{C}(X, Y)$, 由于 $F(f) = F(g)$, 根据上图, 等式两侧透过函子 $G$ 提升后则有 $G(F(f)) = G(F(g))$, 透过自然同构 $\psi$ 推得 $f = g$, 那么 $F$ 为单射意味着 $F$ 是忠实函子.

- $F$ 是完全的：对任意 $g \in \mathcal{D}(F(X), F(Y))$, 若存在 $f \in \mathcal{C}(X, Y)$ 使得 $F(f) = g$, 则可推得 $F$ 为满射, 那么考虑改造上述左侧自然性交换图为：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkYoRyhGKFgpKSkifSx7InBvc2l0aW9uIjpbMCwxXSwidmFsdWUiOiJGKEcoRihZKSkpIn0seyJwb3NpdGlvbiI6WzIsMF0sInZhbHVlIjoiMV97XFxtYXRoY2Fse0R9fShGKFgpKSJ9LHsicG9zaXRpb24iOlsyLDFdLCJ2YWx1ZSI6IjFfe1xcbWF0aGNhbHtEfX0oRihZKSkifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MSwibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwidmFsdWUiOiJGKEcoZykpIn0seyJmcm9tIjoyLCJ0byI6MCwidmFsdWUiOiJ7XFx2YXJwaGlfe0YoWCl9fV57LTF9ID0gRih7XFxwc2lfWH1eey0xfSkiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjIsInRvIjozLCJ2YWx1ZSI6IjFfe1xcbWF0aGNhbHtEfX0oRihmKSkifSx7ImZyb20iOjEsInRvIjozLCJ2YWx1ZSI6IlxcdmFycGhpX3tGKFkpfSA9IEYoXFxwc2lfWSkiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifV19
  \xymatrix{
  F(G(F(X))) \ar@{->}[d]_{F(G(g))} &  & 1_{\mathcal{D}}(F(X)) \ar@{->}[ll]_{{\varphi_{F(X)}}^{-1} = F({\psi_X}^{-1})} \ar@{->}[d]^{1_{\mathcal{D}}(F(f))} \\
  F(G(F(Y))) \ar@{->}[rr]_{\varphi_{F(Y)} = F(\psi_Y)} &  & 1_{\mathcal{D}}(F(Y))
  }
  $$
  则得 $F(f) = \varphi_{F(Y)} \circ F(G(g)) \circ {\varphi_{F(X)}}^{-1}$, 展开则有：
  $$
  F(\psi_Y) \circ F(G(g)) \circ F({\psi_X}^{-1}) = F(\psi_Y \circ G(g) \circ {\psi_X}^{-1})
  $$
  因此 $f = \psi_Y \circ G(g) \circ {\psi_X}^{-1}$, 使得 $F$ 为完全函子.

- $F$ 本质满：对任意 $Y \in \Ob{\mathcal{D}}$, 只需取 $G(Y) \in \Ob{\mathcal{C}}$ 则可使得 $F(G(Y)) \simeq Y$, 显然 $F$ 是本质满的.

$(1) \Leftarrow (2)$：假设 $F$ 为全忠实, 本质满函子, 若 $F$ 是 $\mathcal{C}, \mathcal{D}$ 间的等价, 则需找到 $F$ 的拟逆函子 $G$ 使得上述自然同构成立. 现在分别从 $\mathcal{C}, \mathcal{D}$ 挑选两副骨架 $\op{sk}(\mathcal{C})$ 以及 $\op{sk}(\mathcal{D})$, 则分别有包含函子 $\iota_\mathcal{C} : \op{sk}(\mathcal{C}) \to \mathcal{C}$ 以及 $\iota_\mathcal{D} : \op{sk}(\mathcal{D}) \to \mathcal{D}$, 并且它们都是范畴间的等价, 因此必然存在它们的拟逆函子 $\kappa_\mathcal{C} : \mathcal{C} \to \op{sk}(\mathcal{C})$ 以及 $\kappa_\mathcal{D} : \mathcal{D} \to \op{sk}(\mathcal{D})$, 那么透过 $(1)$ 得知 $\iota_\mathcal{C} \circ \kappa_\mathcal{C}$ 及 $\iota_\mathcal{D} \circ \kappa_\mathcal{D}$ 皆为全忠实, 本质满函子, 即：
$$
\xymatrix{
{\op{sk}(\mathcal{C})} \ar@/^1.2pc/@{->}[r]^{\iota_\mathcal{C}} \ar@/_1.2pc/@{<-}[r]_{\kappa_\mathcal{C}} & \mathcal{C}
\ar@/^1.2pc/@{->}[r]^{F} \ar@/_1.2pc/@{<-}[r]_{G} & \mathcal{D}
\ar@/^1.2pc/@{->}[r]^{\kappa_\mathcal{D}} \ar@/_1.2pc/@{<-}[r]_{\iota_\mathcal{D}} & \mathcal{\op{sk}}(\mathcal{D})
}
$$
因此取 $G \coloneqq \iota_\mathcal{C} \circ (\kappa_\mathcal{D} \circ F \circ \iota_\mathcal{C})^{-1} \circ \kappa_\mathcal{D}$ 则 $G$ 亦为全忠实, 本质满函子, 现在分别证明：

- $\varphi : F \circ G \overset{\sim}{\to} 1_{\mathcal{D}}$ 为自然同构：
  $$
  F \circ G = F \circ \iota_\mathcal{C} \circ (\kappa_\mathcal{D} \circ F \circ \iota_\mathcal{C})^{-1} \circ \kappa_\mathcal{D}
  = \iota_{\mathcal{D}} \circ (\kappa_{\mathcal{D}} \circ F \circ \iota_\mathcal{C}) \circ (\kappa_\mathcal{D} \circ F \circ \iota_\mathcal{C})^{-1} \circ \kappa_\mathcal{D}
  = \iota_{\mathcal{D}} \circ \kappa_{\mathcal{D}} \simeq 1_\mathcal{D}
  $$

- $\psi : G \circ F \overset{\sim}{\to} 1_{\mathcal{C}}$ 为自然同构：
  $$
  G \circ F = \iota_\mathcal{C} \circ (\kappa_\mathcal{D} \circ F \circ \iota_\mathcal{C})^{-1} \circ \kappa_\mathcal{D} \circ F
  = \iota_\mathcal{C} \circ (\kappa_\mathcal{D} \circ F \circ \iota_\mathcal{C})^{-1} \circ (\kappa_\mathcal{D} \circ F \circ \iota_{\mathcal{C}}) \circ \kappa_{\mathcal{C}} = \iota_{\mathcal{C}} \circ \kappa_{\mathcal{C}} \simeq 1_{\mathcal{C}}
  $$

因此就证得了 $G$ 为 $F$ 的拟逆函子, 使得 $F$ 为 $\mathcal{C}, \mathcal{D}$ 间的等价.

### 	例子 2.3.6 (双对偶线性空间)

设有域 $\mathbb{K}$ 上的线性空间范畴 $\Vect_\mathbb{K}$ 以及它的全子范畴 $\text{FinVect}_\mathbb{K}$, 于 [例子 2.1.5](#例子_2.1.5_(对偶空间与对偶线性映射)) 中已定义双对偶函子：
$$
\begin{align}
\Vect_\mathbb{K} & \overset{(-)^{**}}{\to} \Vect_\mathbb{K}
\\
V & \overset{\phantom{(-)^{**}}}{\mapsto} V^{**} \\
\bb{V \overset{f}{\to} W} & \overset{\phantom{(-)^{**}}}{\mapsto} \bb{V^{**} \overset{f^{**}}{\to} W^{**}}
\end{align}
$$
那么对任意线性空间 $V \in \Vect_\mathbb{K}$ 则可诱导出求值映射：
$$
\Map{\text{ev}}{V}{ V^{**} = \op{Hom}_{\Vect_\mathbb{K}}(V^*, \mathbb K) }{v}{ [ \lambda \mapsto \lambda(v)] }
$$
因此对任意线性映射 $f : V \to W$, 则有以下交换图：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IlYifSx7InBvc2l0aW9uIjpbMCwxXSwidmFsdWUiOiJXIn0seyJwb3NpdGlvbiI6WzEsMF0sInZhbHVlIjoiVl57Kip9In0seyJwb3NpdGlvbiI6WzEsMV0sInZhbHVlIjoiV157Kip9In1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjEsInZhbHVlIjoiZiIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6MCwidG8iOjIsInZhbHVlIjoiXFx0ZXh0e2V2fV9WIn0seyJmcm9tIjoyLCJ0byI6MywidmFsdWUiOiJmXnsqKn0ifSx7ImZyb20iOjEsInRvIjozLCJ2YWx1ZSI6IlxcdGV4dHtldn1fVyIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9XX0=
\xymatrix{
V \ar@{->}[d]_{f} \ar@{->}[r]^{\text{ev}_V} & V^{**} \ar@{->}[d]^{f^{**}} \\
W \ar@{->}[r]_{\text{ev}_W} & W^{**}
}
$$
于是便得到了自然变换 $\op{ev} : 1_{\Vect_\mathbb{K}} \Rightarrow (-)^{**}$, 而由于 $(-)^*$ 是忠实函子, 因此易知 $\op{ev}$ 总是单射, 事实上可证明 $\op{ev}$ 为双射当且仅当 $V$ 是有限维的, 那么进一步将上述线性空间限制于全子范畴 $\FinVect_\mathbb{K}$ 上则有自然同构：
$$
\op{ev} : 1_{\op{FinVect}_\mathbb{K}} \overset{\sim}{\to} (-)^{**} = (-)^* \circ ((-)^*)^\oppos
$$
而于反范畴 ${\FinVect_\mathbb{K}}^\oppos$ 中, 则可定义 $(-)^{**} \coloneqq ((-)^*)^\oppos \circ (-)^*$, 使得有自然同构：
$$
\op{ev}^\oppos : 1_{{\op{FinVect}_\mathbb{K}}^\oppos} \overset{\sim}{\to} (-)^{**} = ((-)^*)^\oppos \circ (-)^*
$$
故 $(-)^* : {\FinVect_\mathbb{K}}^\oppos \to {\FinVect_\mathbb{K}}$ 为范畴间的等价, 而 $((-)^*)^\oppos : {\FinVect_\mathbb{K}} \to {\FinVect_\mathbb{K}}^\oppos$ 为它的拟逆函子.

### 例子 2.3.7 (矩阵乘法)

选定域 $\mathbb{K}$, 称携带有以下资料的范畴 $\Mat$ 为 **矩阵范畴 (matrix category)**：

- $\Ob{\op{Mat}} \coloneqq \Z_{\geq 0}$, 即该范畴中的对象为包含 $0$ 的正整数;

- $\Hom{\op{Mat}}{n}{m} \coloneqq M_{m \times n}(\mathbb{K})$, 即为全体 $m \times n$ 矩阵所组成的集合;

- 约定 $M_{0 \times n}(\mathbb{K}) = M_{m \times 0}(\mathbb{K}) \coloneqq \set{0}$;

- $\op{Mat}$ 中的态射合成为矩阵乘法 $\Map{\cdot}{ \hom{n}{m} \times \hom{m}{k} }{\hom{n}{k}}{(A, B)}{A \cdot B \coloneqq B \circ A}$.

现在再定义函子 $F$ 为：
$$
\begin{align}
\op{Mat} & \overset{F}{\to} \FinVect_\mathbb{K} \\
n & \mapsto \mathbb{K}^{\oplus n} \coloneqq M_{n \times 1}(\mathbb{K}) \\
\bb{n \overto{A} m} & \mapsto \bb{ \begin{aligned} \mathbb{K}^{\oplus n} & \overto{F(A)} \mathbb{K}^{\oplus m} \\ v & \mapsto Av \end{aligned} } 
\end{align}
$$
注意到 $\hom{n}{m} \to \hom{\mathbb{K}^{\oplus n}}{\mathbb{K}^{\oplus m}}$ 显然为双射, 因此 $F$ 全忠实, 再者有 $V \simeq \mathbb{K}^{\oplus \dim V}$, 因此 $F$ 亦是本质满的, 由 [定理 2.3.5](#定理_2.3.5_(范畴等价的等价定义)) 可知 $F$ 为范畴等价.

{% end %}