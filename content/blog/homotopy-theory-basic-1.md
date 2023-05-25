+++

title = "同伦论基础 1 - 同伦与同伦等价"
date = 2023-03-05
draft = false

[taxonomies]
categories = ["代数拓扑"]
tags = ["数学", "代数学", "拓扑学", "代数拓扑"]

[extra]
lang = "zh"
toc = true
mathjax = true

+++

{% good() %}本文内容已完全施工完毕, 读者可放心阅读！{% end %}

{% mathjax_escape() %}

## 1. 同伦与同伦等价

### 注释

对于任意 $n \geq 1$ 的欧氏空间 $\R^n$ 或与 $\R^n$ 同胚的单位开球 $B_0^\circ(1)$, 我们都知道它们均不可能同胚于 $* = \R^0$, 因为这两者从基础集上就已经不为双射了, 但直觉上我们知道开球 $B_0^\circ(1)$ 可以连续地收缩至其原点 $0$ 上, 所以直观上 $n$ 维开球亦被称为是其原点的 **连续形变 (continuous deformations)**. 那么现在假设我们定义有以下闭单位区间 $[0, 1]$ 与 $B_0^\circ(1)$ 到 $B_0^\circ(1)$ 的连续函数：
$$
\Map{\eta}{[0, 1] \times B_0^\circ(1)}{B_0^\circ(1)}{(t, x)}{t \cdot x}
$$
显然当取值 $t = 1$ 时单位开球 $B_0^\circ(1)$ 保持不变, 而 $t = 0$ 时会将该开球收缩至原点上, 那么透过交换图我们可总结出以下规律：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6Ilxcc2V0ezB9IFxcdGltZXMgQl5cXGNpcmNfMCgxKSJ9LHsicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IlswLCAxXSBcXHRpbWVzIEJfMF5cXGNpcmMoMSkifSx7InBvc2l0aW9uIjpbMCwyXSwidmFsdWUiOiJcXHNldHsxfSBcXHRpbWVzIEJeXFxjaXJjXzAoMSkifSx7InBvc2l0aW9uIjpbMSwwXSwidmFsdWUiOiIqIn0seyJwb3NpdGlvbiI6WzEsMV0sInZhbHVlIjoiQl8wXlxcY2lyYygxKSJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjozLCJ2YWx1ZSI6IlxcZXhpc3RzICEifSx7ImZyb20iOjMsInRvIjo0LCJ2YWx1ZSI6IlxcdGV4dHtjb25zdH1fMCJ9LHsiZnJvbSI6MSwidG8iOjQsInZhbHVlIjoiXFxldGEifSx7ImZyb20iOjIsInRvIjo0LCJ2YWx1ZSI6Ilxcc2ltZXEiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjAsInRvIjoxfSx7ImZyb20iOjIsInRvIjoxfV19
\xymatrix{
\set{0} \times B^\circ_0(1) \ar@{->}[r]^{\exists !} \ar@{->}[d] & * \ar@{->}[d]^{\const_0} \\
[0, 1] \times B_0^\circ(1) \ar@{->}[r]^{\eta} & B_0^\circ(1) \\
\set{1} \times B^\circ_0(1) \ar@{->}[ru]_{\simeq} \ar@{->}[u] & 
}
$$
其中该处的连续形变 $\eta$ 便被我们称为 **同伦 (homotopies)**.

### 定义 1.1 (拓扑区间)

设闭区间 $[0, 1] \sub \R$ 为携带了 $\R$ 的度量拓扑的拓扑子空间, 若 $[0, 1]$ 被称为 **拓扑区间 (topological interval)**, 当其满足了：

1. 携带了连续函数 $\const_0 : * \to [0, 1]$ 以及 $\const_1 : * \to [0, 1]$;
2. 携带了从该区间到点拓扑空间 $*$ ($\Top$ 中的终对象) 的唯一连续函数 $[0, 1] \to *$.

事实上即可将点空间 $*$ 的 **余对角 (codiagonal)** $\nabla_*$, 即从不交并点空间 $* \sqcup *$ (其中 $* \sqcup * \simeq \Disc{\set{0, 1}}$) 到点空间的唯一连续函数分解为以下形式：
$$
\nabla_* : * \sqcup * \overset{(\const_0, \const_1)}{\to} [0, 1] \to *
$$

### 定义 1.2 (同伦)

设 $X, Y \in \Top$, 以及连续函数 $f, g : X \to Y$, 若存在连续函数 $\eta : X \times [0, 1] \to Y$ (其中 $[0, 1]$ 为拓扑区间) 使得其被称为：

- 从 $f$ 到 $g$ 的 **左同伦 (left homotopy)**, 记为 $\eta : f \Rightarrow g$; 或
- $f$ **同伦于 (homotopic to)** $g$, 记为 $f \sim_h g$.

当满足了条件 $\eta \circ (\id, \const_0) = f$ (或为 $\eta(-, 0) = f$) 以及 $\eta \circ (\id, \const_1) = g$ (或为 $\eta(-, 1) = g$), 即使得下图可交换：

$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IlggXFx0aW1lcyBcXHNldHswfSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IlkifSx7InBvc2l0aW9uIjpbMCwyXSwidmFsdWUiOiJYIFxcdGltZXMgXFxzZXR7MX0ifSx7InBvc2l0aW9uIjpbMCwxXSwidmFsdWUiOiJYIFxcdGltZXMgWzAsIDFdIn1dLCJlZGdlcyI6W3siZnJvbSI6MywidG8iOjEsInZhbHVlIjoiXFxldGEifSx7ImZyb20iOjAsInRvIjoxLCJ2YWx1ZSI6ImYifSx7ImZyb20iOjIsInRvIjoxLCJ2YWx1ZSI6ImciLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjAsInRvIjozLCJ2YWx1ZSI6IihcXHRleHR7aWR9LCBcXHRleHR7Y29uc3R9XzApIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjoyLCJ0byI6MywidmFsdWUiOiIoXFx0ZXh0e2lkfSwgXFx0ZXh0e2NvbnN0fV8xKSJ9XX0=
\xymatrix{
X \times \set{0} \ar@{->}[rd]^{f} \ar@{->}[d]_{{(\id, \const_0)}} &  \\
X \times [0, 1] \ar@{->}[r]^{\eta} & Y \\
X \times \set{1} \ar@{->}[ru]_{g} \ar@{->}[u]^{{(\id, \const_1)}} & 
}
$$

### 命题 1.3 (同伦构成等价关系)

设 $X, Y \in \Top$, 连续函数 $f, g \in \Top(X, Y)$, 以及他们之间的一个同伦 $f \sim_h g$, 则 $\sim_h$ 构成等价关系;

##### 证明

若 $\sim_h$ 构成等价关系, 分别证明：

- 自反性 $\Forall{f \in \Top(X, Y)} f \sim_h f$：

  设有连续函数 $\eta : X \times [0, 1] \overset{\text{pr}_1}{\to} X \overset{f}{\to} Y$, 则可使得下图可交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IlggXFx0aW1lcyBcXHNldHswfSJ9LHsicG9zaXRpb24iOlsyLDFdLCJ2YWx1ZSI6IlkifSx7InBvc2l0aW9uIjpbMCwyXSwidmFsdWUiOiJYIFxcdGltZXMgXFxzZXR7MX0ifSx7InBvc2l0aW9uIjpbMCwxXSwidmFsdWUiOiJYIFxcdGltZXMgWzAsIDFdIn0seyJwb3NpdGlvbiI6WzEsMV0sInZhbHVlIjoiWCJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJsYWJlbFBvc2l0aW9uIjoibGVmdCIsInZhbHVlIjoiZiJ9LHsiZnJvbSI6MiwidG8iOjEsInZhbHVlIjoiZiIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6MCwidG8iOjMsInZhbHVlIjoiKFxcdGV4dHtpZH0sIFxcdGV4dHtjb25zdH1fMCkiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjIsInRvIjozLCJ2YWx1ZSI6IihcXHRleHR7aWR9LCBcXHRleHR7Y29uc3R9XzEpIn0seyJmcm9tIjozLCJ0byI6NCwidmFsdWUiOiJcXHRleHR7cHJ9XzEiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjo0LCJ0byI6MSwidmFsdWUiOiJmIiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9XX0=
  \xymatrix{
  X \times \set{0} \ar@{->}[rrd]^{f} \ar@{->}[d]_{{(\text{id}, \text{const}_0)}} &  &  \\
  X \times [0, 1] \ar@{->}[r]|-{\text{pr}_1} & X \ar@{->}[r]|-{f} & Y \\
  X \times \set{1} \ar@{->}[rru]_{f} \ar@{->}[u]^{{(\text{id}, \text{const}_1)}} &  & 
  }
  $$
  其中 $\text{pr}_1$ 为乘积拓扑空间的典范投射, 因此仍为连续函数, 且由于有 $\eta(-, 0) = \eta(-, 1) = f$, 因此 $\eta$ 为从 $f$ 到自身的同伦.

- 对称性 $\Forall{f, g \in \Top(X, Y)} f \sim_h g \implies g \sim_h f$：

  假设 $f \sim_h g$ 为同伦 $\eta_1 : f \Rightarrow g$, 则有 $\eta_1(-, 0) = f$ 以及 $\eta_1(-, 1) = g$, 若定义有连续函数 $\Map{\eta_2}{X \times [0, 1]}{Y}{(x, t)}{\eta_1(x, 1-t)}$, 则可使得下图交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IlggXFx0aW1lcyBcXHNldHswfSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IlkifSx7InBvc2l0aW9uIjpbMCwyXSwidmFsdWUiOiJYIFxcdGltZXMgXFxzZXR7MX0ifSx7InBvc2l0aW9uIjpbMCwxXSwidmFsdWUiOiJYIFxcdGltZXMgWzAsIDFdIn1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjMsInZhbHVlIjoiKFxcdGV4dHtpZH0sIFxcdGV4dHtjb25zdH1fMCkiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjIsInRvIjozLCJ2YWx1ZSI6IihcXHRleHR7aWR9LCBcXHRleHR7Y29uc3R9XzEpIn0seyJmcm9tIjowLCJ0byI6MSwiYmVuZCI6MCwidmFsdWUiOiJcXGV0YV8xKC0sIDEpID0gZyJ9LHsiZnJvbSI6MiwidG8iOjEsImJlbmQiOjAsImxhYmVsUG9zaXRpb24iOiJyaWdodCIsInZhbHVlIjoiXFxldGFfMSgtLCAwKSA9IGYifSx7ImZyb20iOjMsInRvIjoxLCJ2YWx1ZSI6IlxcZXRhXzIiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn1dfQ==
  \xymatrix{
  X \times \set{0} \ar@{->}[d]_{{(\text{id}, \text{const}_0)}} \ar@{->}[rd]^{{\eta_1(-, 1) = g}} &  \\
  X \times [0, 1] \ar@{->}[r]|-{\eta_2} & Y \\
  X \times \set{1} \ar@{->}[u]^{{(\text{id}, \text{const}_1)}} \ar@{->}[ru]_{{\eta_1(-, 0) = f}} & 
  }
  $$
  其中使得有 $\eta_2(-, 0) = \eta_1(-, 1) = g$ 以及 $\eta_2(-, 1) = \eta_1(-, 0) = f$, 因此 $\eta_2$ 为从 $g$ 到 $f$ 的同伦.

- 传递性 $\Forall{f, g, h \in \Top(X, Y)} (f \sim_h g) \and (g \sim_h h) \implies f \sim_h h$：

  分别假设 $f \sim_h g$ 以及 $g \sim_h h$ 为同伦 $\eta_1 : f \Rightarrow g$ 以及 $\eta_2 : g \Rightarrow h$, 那么则有 $\eta_1(-, 0) = f, \eta_1(-, 1) = g$ 以及 $\eta_2(-, 0) = g, \eta_2(-, 1) = h$, 若定义有连续函数 $\eta_3 = \eta_2 \circ \eta_1$：
  $$
  \Map{\eta_3}{X \times [0, 1]}{Y}{(x, t)}{\cases{ \eta_1(x, 2t) & if $0 \leq t \leq \frac{1}{2}$ \\ \eta_2(x, 2t-1) & if $\frac{1}{2} \leq t \leq 1$ }}
  $$
  则使得有 $\eta_3(-, 0) = \eta_1(-, 0) = f$ 和 $\eta_3(-, \frac{1}{2}) = \eta_1(-, 1) = \eta_2(-, 0) = g$ 以及 $\eta_3(-, 1) = \eta_2(-, 1) = h$, 因此 $\eta_3$ 为从 $f$ 到 $h$ 的同伦.

### 定义 1.4 (同伦类)

设 $X, Y \in \Top$ 以及任意连续函数 $f \in \Top(X, Y)$, 则 $f$ 的 **同伦类 (homotopy class)** 定义为携带了同伦 $\simeq_h$ 作等价关系的等价类, 即：
$$
[f] \coloneqq \Set{ X \overset{g}{\to} Y \in \Top(X, Y) : f \sim_h g }
$$
而全体连接 $X$ 与 $Y$ 的连续函数的同伦类则构成了商集 $[X, Y] \coloneqq \Top(X, Y)/\sim_h$.

### 命题 1.5 (同伦类兼容结合律)

同伦类兼容连续函数的结合律, 并且对于 $X, Y, Z \in \Top$, 存在唯一映射 $[X, Y] \times [Y, Z] \to [X, Z]$ 使得下图可交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IlxcVG9wKFgsIFkpIFxcdGltZXMgXFxUb3AoWSwgWikifSx7InBvc2l0aW9uIjpbMiwwXSwidmFsdWUiOiJcXFRvcChYLCBaKSJ9LHsicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IltYLCBZXSBcXHRpbWVzIFtZLCBaXSJ9LHsicG9zaXRpb24iOlsyLDFdLCJ2YWx1ZSI6IltYLCBaXSJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJ2YWx1ZSI6IlxcY2lyY197WCwgWSwgWn0ifSx7ImZyb20iOjAsInRvIjoyfSx7ImZyb20iOjIsInRvIjozfSx7ImZyb20iOjEsInRvIjozfV19
\xymatrix{
\Top(X, Y) \times \Top(Y, Z) \ar@{->}[rr]^{{\circ_{X, Y, Z}}} \ar@{->}[d] &  & \Top(X, Z) \ar@{->}[d] \\
[X, Y] \times [Y, Z] \ar@{->}[rr] &  & [X, Z]
}
$$

##### 证明

定义连续函数的复合 $X \overset{f}{\to} Y \overset{g'}{\underset{g}\rightrightarrows} Z \overset{h}\to W$, 若有同伦 $\eta_1 : g \Rightarrow g'$, 即有连续函数 $\eta_1 : Y \times [0, 1] \to Z$, 则它们应满足结合律, 即应有同伦 $\eta_2 : h \circ g \circ f \Rightarrow h \circ g' \circ f$, 那么只需取 $\eta_2 = h \circ \eta_1 \circ (f, \id)$ 即可使得下图可交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IlkifSx7InBvc2l0aW9uIjpbMywxXSwidmFsdWUiOiJXIn0seyJwb3NpdGlvbiI6WzEsMl0sInZhbHVlIjoiWSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IlkgXFx0aW1lcyBbMCwgMV0ifSx7InBvc2l0aW9uIjpbMiwxXSwidmFsdWUiOiJaIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiWCBcXHRpbWVzIFswLCAxXSJ9LHsicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IlgifSx7InBvc2l0aW9uIjpbMCwyXSwidmFsdWUiOiJYIn1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjMsInZhbHVlIjoiKFxcdGV4dHtpZH0sIFxcdGV4dHtjb25zdH1fMCkiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjIsInRvIjozLCJ2YWx1ZSI6IihcXHRleHR7aWR9LCBcXHRleHR7Y29uc3R9XzEpIn0seyJmcm9tIjozLCJ0byI6NCwidmFsdWUiOiJcXGV0YV8xIn0seyJmcm9tIjowLCJ0byI6NCwidmFsdWUiOiJnIiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6MiwidG8iOjQsInZhbHVlIjoiZyciLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjo0LCJ0byI6MSwidmFsdWUiOiJoIiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6NiwidG8iOjUsInZhbHVlIjoiKFxcdGV4dHtpZH0sIFxcdGV4dHtjb25zdH1fMCkiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjcsInRvIjo1LCJ2YWx1ZSI6IihcXHRleHR7aWR9LCBcXHRleHR7Y29uc3R9XzApIn0seyJmcm9tIjo2LCJ0byI6MCwidmFsdWUiOiJmIn0seyJmcm9tIjo3LCJ0byI6MiwidmFsdWUiOiJmIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjo1LCJ0byI6MywidmFsdWUiOiIoZiwgXFx0ZXh0e2lkfV97WzAsIDFdfSkifV19
\xymatrix{
X \ar@{->}[d]_{{(\text{id}, \text{const}_0)}} \ar@{->}[r]^{f} & Y \ar@{->}[d]_{{(\text{id}, \text{const}_0)}} \ar@{->}[rd]|-{g} &  &  \\
X \times [0, 1] \ar@{->}[r]^{{(f, \text{id}_{[0, 1]})}} & Y \times [0, 1] \ar@{->}[r]^{\eta_1} & Z \ar@{->}[r]|-{h} & W \\
X \ar@{->}[u]^{{(\text{id}, \text{const}_0)}} \ar@{->}[r]_{f} & Y \ar@{->}[u]^{{(\text{id}, \text{const}_1)}} \ar@{->}[ru]|-{g'} &  & 
}
$$

### 定义 1.6 (同伦范畴)

若将全体连续函数的同伦的集合类视为态射, 则由它们所组成的范畴被称为 **同伦范畴 (homotopy category)**, 记为 $\text{Ho}(\Top)$, 具体定义为：

- $\Ob{\text{Ho}(\Top)} \coloneqq \Ob{\Top}$;
- $\Hom{\text{Ho}(\Top)}{X}{Y} \coloneqq [X, Y]$;
- $1_{\text{Ho}(\Top)} \coloneqq \kappa(1_\Top)$;
- $\text{Ho}(\Top)$ 中的复合态射为 $\Top$ 中的复合态射, 由 [命题 1.5](#命题_1.5_(同伦类兼容结合律)) 保证了结合律.

其中于 $\Top$ 中的连续函数则可由函子 $\Top \overset{\kappa}{\to} \text{Ho}(\Top)$ 映射为它所对应的同伦类, 即 $\Map{\kappa}{\Top(X, Y)}{[X, Y]}{f}{[f]}$.

### 定义 1.7 (同伦等价)

设 $X, Y \in \Top$, 若连续函数 $f : X \to Y$ 被称为是 **同伦等价 (homotopy equivalence)** 的, 或称 $X$ 与 $Y$ 有相同的 **同伦型 (homotopy type)**, 当满足了：

1. 存在逆连续函数 $g : Y \to X$;
2. 使得有同伦 $f \circ g \Rightarrow \id_Y$ 以及 $g \circ f \Rightarrow \id_X$.

则记为 $X \overset{\simeq_h}{\to} Y$, 若存在一些 $X$ 与 $Y$ 之间的同伦等价则记为 $X \simeq_h Y$.

### 注释 (同伦等价为同伦范畴中的同构)

- 事实上, 若给定一个 $\Top$ 中的连续函数 $f$ 是同伦等价的, 当且仅当函子 $\kappa$ 的像 $\kappa(f)$ 于 $\text{Ho}(\Top)$ 中是同构.
- $\text{Ho}(\Top)$ 中的对象虽然亦是拓扑空间, 但通常被称为同伦型, 该范畴中的拓扑空间也许离真正的同胚还十分 "遥远", 但却可以拥有相同的同伦型.

### 例子 1.8 (同胚为同伦等价)

任意拓扑空间之间的同胚都是同伦等价的.

### 命题 1.9 (同伦等价构成等价关系)

设 $X, Y \in \Top$, 以及它们之间的一个同伦等价 $X \simeq_h Y$, 则 $\simeq_h$ 构成等价关系.

##### 证明

分别证明：

- 自反性 $\Forall{X \in \Top} X \simeq_h X$：

  由于有恒等连续函数 $\id_X : X \to X$, 而函子保有单位态射, 因此 $\kappa(\id_X) = \id_X : \End_{\text{Ho}(\Top)}(X)$, 这显然是个同伦范畴中的同构关系.

- 对称性 $\Forall{X, Y \in \Top} X \simeq_h Y \implies Y \simeq_h X$：

  由于 $X \simeq_h Y$ 意味着对于任意连续函数 $f : X \to Y$, 存在 $g : Y \to X$ 使得有同伦 $f \circ g \Rightarrow \id_Y$ 以及 $g \circ f \Rightarrow \id_X$, 因此对于连续函数 $g : Y \to X$, 则存在 $f : X \to Y$ 使得有同伦 $g \circ f \Rightarrow \id_X$ 以及 $f \circ g \Rightarrow \id_Y$.

- 传递性 $\Forall{X, Y, Z \in \Top} (X \simeq_h Y) \and (Y \simeq_h Z) \implies X \simeq_h Z$：

  由于 $X \simeq_h Y$ 以及 $Y \simeq_h Z$ 意味着对于连续函数 $f : X \to Y$ 和 $g : Y \to Z$, 它们分别存在 $f' : Y \to X$ 以及 $g' : Z \to Y$ 使得有同伦：
  $$
  \begin{array}{cc}
  \eta_1 : f' \circ f \Rightarrow \id_X \qquad \eta_2 : f \circ f' \Rightarrow \id_Y \\
  \eta_3 : g' \circ g \Rightarrow \id_Y \qquad \eta_4 : g \circ g' \Rightarrow \id_Z
  \end{array}
  $$
  现在需证明对于 $h : X \overset{f}{\to} Y \overset{g}{\to} Z$, 则存在 $h' : Z \overset{g'}{\to} Y \overset{f'}{\to} X$ 使得 $h' \circ h = (f' \circ g') \circ (g \circ f) \Rightarrow \id_X$：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlszLDFdLCJ2YWx1ZSI6IlgifSx7InBvc2l0aW9uIjpbMCwyXSwidmFsdWUiOiJYIn0seyJwb3NpdGlvbiI6WzEsMF0sInZhbHVlIjoiWSJ9LHsicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IlgifSx7InBvc2l0aW9uIjpbMCwxXSwidmFsdWUiOiJYIFxcdGltZXMgWzAsIDFdIn0seyJwb3NpdGlvbiI6WzIsMV0sInZhbHVlIjoiWSJ9LHsicG9zaXRpb24iOlsxLDJdLCJ2YWx1ZSI6IlkifSx7InBvc2l0aW9uIjpbMSwxXSwidmFsdWUiOiJZIFxcdGltZXMgWzAsIDFdIn1dLCJlZGdlcyI6W3siZnJvbSI6MywidG8iOjIsInZhbHVlIjoiZiJ9LHsiZnJvbSI6MywidG8iOjQsImxhYmVsUG9zaXRpb24iOiJyaWdodCIsInZhbHVlIjoiKFxcdGV4dHtpZH0sIFxcdGV4dHtjb25zdH1fMCkifSx7ImZyb20iOjEsInRvIjo0LCJ2YWx1ZSI6IihcXHRleHR7aWR9LCBcXHRleHR7Y29uc3R9XzEpIn0seyJmcm9tIjo1LCJ0byI6MCwidmFsdWUiOiJmJyIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifSx7ImZyb20iOjEsInRvIjo2LCJ2YWx1ZSI6ImYiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjYsInRvIjo1LCJ2YWx1ZSI6IlxcdGV4dHtpZH1fWSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6NywidG8iOjUsInZhbHVlIjoiXFxldGFfMyJ9LHsiZnJvbSI6MiwidG8iOjUsInZhbHVlIjoiZycgXFxjaXJjIGcifSx7ImZyb20iOjQsInRvIjo3LCJ2YWx1ZSI6IihmLCBcXHRleHR7aWR9X3tbMCwgMV19KSJ9LHsiZnJvbSI6MiwidG8iOjcsInZhbHVlIjoiKFxcdGV4dHtpZH0sIFxcdGV4dHtjb25zdH1fMCkiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjYsInRvIjo3LCJ2YWx1ZSI6IihcXHRleHR7aWR9LCBcXHRleHR7Y29uc3R9XzEpIn1dfQ==
  \xymatrix{
  X \ar@{->}[r]^{f} \ar@{->}[d]_{{(\text{id}, \text{const}_0)}} & Y \ar@{->}[rd]^{g' \circ g} \ar@{->}[d]_{{(\text{id}, \text{const}_0)}} &  &  \\
  X \times [0, 1] \ar@{->}[r]^{{(f, \text{id}_{[0, 1]})}} & Y \times [0, 1] \ar@{->}[r]^{\eta_3} & Y \ar@{->}[r]|-{f'} & X \\
  X \ar@{->}[u]^{{(\text{id}, \text{const}_1)}} \ar@{->}[r]_{f} & Y \ar@{->}[ru]_{\text{id}_Y} \ar@{->}[u]^{{(\text{id}, \text{const}_1)}} &  & 
  }
  $$
  显然其中只需取同伦的连续映射为 $f' \circ \eta_3 \circ (f, \id_{[0, 1]}) : X \times [0, 1] \to X$ 即可得证. 另一方面, 同伦 $h \circ h' \Rightarrow \id_Z$ 亦是类似的证明方式, 该处略过.

### 定义 1.10 (可缩拓扑空间)

对于任意 $X \in \Top$, 若 $X$ 被称为是 **可缩的 (contractible)** 当其存在唯一的连续函数映射至点空间上, 即 $X \overset{\simeq_h}{\to} *$, 并使得该映射是同伦等价的.

### 注释 (可缩拓扑空间为同伦范畴中的终对象)

显然, 若一个拓扑空间 $X$ 是可缩的当且仅当函子的像 $\kappa(X)$ 于同伦范畴中是终对象.

### 例子 1.11 (开/闭球以及欧氏空间均为可缩空间)

设 $B^n \sub \R^n$ 为 $n$ 维欧氏空间中的单位开/闭球, 则 $B^n$ 是可收缩的, 即 $B^n \overset{\simeq_h}{\to} *$.

##### 证明

- 若设有连续函数 $p : B^n \to *$, 则可定义它的一个映射至开/闭球原点的逆态射 $\const_0 : * \to B^n$, 使得 $p \circ \const_0 = \id_*$, 由 [命题 1.3](#命题_1.3_(同伦构成等价关系)) 得知同伦作为等价关系满足自反性, 因此有 $p \circ \const_0 = \id_* \Rightarrow \id_*$ 成立.
- 另一方面, 由于 $\const_0 \circ p = \const_0 : \End_{\text{Ho}(\Top)}(B^n)$, 而定义连续映射 $\Map{\eta}{B^n \times [0, 1]}{B^n}{(x, t)}{t \cdot x}$ 则可证明它与 $\id_{B^n}$ 是同伦的, 因为 $\eta(-, 0) = \const_0$ 而 $\eta(-, 1) = \id_{B^n}$, 因此 $\const_0 \circ p \Rightarrow \id_{B^n}$ 成立.

{% end%}
