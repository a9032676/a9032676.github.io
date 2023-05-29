+++

title = "同伦论基础 2 - 基本群与群胚"
date = 2023-05-30
draft = false

[taxonomies]
categories = ["代数拓扑"]
tags = ["数学", "代数学", "拓扑学", "代数拓扑"]

[extra]
lang = "zh"
toc = true
mathjax = true

+++

{% caution() %}本文存在部分内容尚未完全施工完毕, 作者将尽快更新！{% end %}

{% mathjax_escape() %}

## 2. 基本群与群胚

### 定义 2.1 (道路, 常值道路)

设 $X \in \Top$：

- 称连续函数 $\gamma : I \to X$ 为从 $\gamma(0)$ 到 $\gamma(1)$ 的 **道路 (path)**;
- 定义上述道路 $\gamma$ 的逆向道路为 $\Map{\gamma^{-1}}{I}{X}{t}{\gamma(1-t)}$;
- 称连续函数 $\Map{1_x}{I}{X}{t}{x}$ 为点 $x \in X$ 的 **常值道路 (constant path)**.

### 定义 2.2 (道路同伦)

设 $\gamma_1, \gamma_2 : I \to X$ 为两条道路, 若满足以下条件：

- 它们的基点保持一致：$\gamma_1(0) = \gamma_2(0)$ 以及 $\gamma_1(1) = \gamma_2(1)$;

- 存在 $\gamma_1, \gamma_2$ 间的同伦 $\eta : \gamma_1 \Rightarrow \gamma_2$ 使得以下连续函数满足：
  $$
  \begin{align}
  I \times I & \overset{\eta}{\to} X \\
  (0, -) & \mapsto 1_{\gamma_1(0)} = 1_{\gamma_2(0)} \\
  (1, -) & \mapsto 1_{\gamma_1(1)} = 1_{\gamma_2(1)}
  \end{align}
  $$

则称 $\eta$ 为 $\gamma_1$ 与 $\gamma_2$ 的 **道路同伦 (path homotopy)**, 或称 $\gamma_1$ **道路同伦于 (path homotopic to)** $\gamma_2$, 记号与同伦类似.

### 注释 (道路同伦构成等价关系)

道路同伦类似于同伦, 亦满足所有等价关系的性质, 因此我们可以定义它的商集.

### 定义 2.3 (全体道路同伦类的集合)

设 $X \in \Top$ 以及任意点 $x, y \in X$：

- 定义 $P_{x, y} X$ 为 $X$ 中端点为 $\gamma(0) = x$ 以及 $\gamma(1) = y$ 的任意道路 $\gamma$ 所构成的集合;
- $P_{x, y} X$ 商掉道路同伦 $\sim_h$ 后的商集定义为 $\Hom{\Pi_1(X)}{x}{y} \coloneqq (P_{x, y} X)/ \sim_h$;
- $\Hom{\Pi_1(X)}{x}{y}$ 中的元素 (等价类) 被称为从 $x$ 到 $y$ 的 **道路同伦类 (path homotopy classes)**.

### 命题 2.4 (道路同伦类的合成与性质)

设 $X \in \Top$, 定义道路同伦类的 **道路合成 (path concatenation)** 为：
$$
\Map{\cdot}{ \Hom{\Pi_1(X)}{x}{y} \times \Hom{\Pi_1(X)}{x}{z} }{ \Hom{\Pi_1(X)}{x}{z} }{ ([\gamma_1], [\gamma_2]) }{[\gamma_2] \cdot [\gamma_1] = [\gamma_2 \cdot \gamma_1]}
$$
并且满足了以下性质：

1. 结合律：$\Forall{x, y, z, w \in X} \Forall{ [\gamma_1] \in \Pi_1(X)(x, y) \\ [\gamma_2] \in \Pi_1(X)(y, z) \\ [\gamma_3] \in \Pi_1(X)(z, w) } [\gamma_3] \cdot ([\gamma_2] \cdot [\gamma_1]) = ([\gamma_3] \cdot [\gamma_2]) \cdot [\gamma_1]$;
2. 幺元律：$\Forall{x, y \in X \\ [\gamma] \in \Pi_1(X)(x, y)} [1_y] \cdot [\gamma] = [\gamma] = [\gamma] \cdot [1_x]$;
3. 逆元律：$\Forall{x, y \in X \\ [\gamma] \in \Pi_1(X)(x, y)} [\gamma^{-1}] \cdot [\gamma] = [1_x], \quad [\gamma] \cdot [\gamma^{-1}] = [1_y]$.

### 定义 2.5 (基本群胚)

设 $X \in \Top$, 我们称 $\Pi_1(X)$ 为 **基本群胚 (fundamental groupoid)**, 它是由以下结构所构成的范畴：

- $\Ob{\Pi_1(X)} \coloneqq X$;
- $\Hom{\Pi_1(X)}{x}{y} \coloneqq (P_{x, y} X)/ \sim_h$;
- $1_{x} \coloneqq [1_x]$.

### 定义 2.6 (群胚)

所有态射可逆的小范畴被称为 (小) **群胚 (groupoid)**, 而所有群胚连带群胚间的函子作为态射则构成群胚范畴 $\Grpd$.

### 注释

- 群胚是群的推广, 事实上任意群 $G$ 亦可被视作是只有一个对象的群胚, 复合由乘法给出, 所以我们有全忠实函子 $\Grp \to \Grpd$.
- 根据 [命题 2.4](#命题_2.4_(道路同伦类的合成与性质)) 的逆元律, 我们知道基本群胚 $\Pi_1(X)$ 中所有态射皆可逆, 那么 $\Pi_1(X)$ 自然就是群胚的特例, 因此可验证 $\Pi_1 : \Top \to \Grpd$ 为函子.
- $\Grpd$ 于高阶范畴论的视角下是个 $(2,1)$-范畴, 因此它亦为 $\op{Cat}$ 的 $2$-满子范畴. 

### 定义 2.7 ($\op{Hom}$-群胚)

我们记 $\mathcal{G}_1, \mathcal{G}_2 \in \Grpd$ 的 **$\op{Hom}$-群胚 ($\op{Hom}$-groupoid)** 为 $\Hom{\Grpd}{\mathcal{G}_1}{\mathcal{G}_2}$, 它是一个由下述结构所组成的范畴：

- $\Ob{\Hom{\Grpd}{\mathcal{G}_1}{\mathcal{G}_2}} \coloneqq \Set{ \mathcal{G}_1 \overset{\text{函子}}{\to} \mathcal{G}_2 }$;
- $\Hom{\Hom{\Grpd}{\mathcal{G}_1}{\mathcal{G}_2}}{G}{F} \coloneqq F \simeq G$, 即群胚同态 $F, G : \mathcal{G}_1 \to \mathcal{G}_2$ 间的自然同构, 或称为 **共轭作用 (conjugation action)**;
- $1_{\mathcal{G}_1 \to \mathcal{G}_2} \coloneqq \text{单位自然同构}$.

### 注释

设有 $\mathcal{G}_1, \mathcal{G}_2 \in \Grpd$ 以及它们之间的态射 (函子) $F, G : \mathcal{G}_1 \to \mathcal{G}_2$, 那么则可考虑它们的自然变换 $\eta : F \Rightarrow G$, 并且由于群胚中任意态射皆可逆因此 $\eta$ 为自然同构. 因此对于任意 $x, y \in \mathcal{G}_1$ 则可使下图交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkYoeCkifSx7InBvc2l0aW9uIjpbMCwxXSwidmFsdWUiOiJGKHkpIn0seyJwb3NpdGlvbiI6WzEsMF0sInZhbHVlIjoiRyh4KSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IkcoeSkifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MSwidmFsdWUiOiJGKGYpIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjoyLCJ0byI6MywidmFsdWUiOiJHKGYpIn0seyJmcm9tIjowLCJ0byI6MiwidmFsdWUiOiJcXGV0YV94In0seyJmcm9tIjoxLCJ0byI6MywibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwidmFsdWUiOiJcXGV0YV95In1dfQ==
\xymatrix{
F(x) \ar@{->}[d]_{F(f)} \ar@{->}[r]^{\eta_x} & G(x) \ar@{->}[d]^{G(f)} \\
F(y) \ar@{->}[r]_{\eta_y} & G(y)
}
$$
由于态射 $\eta_x, \eta_y$ 可逆, 我们可以得到以下 **共轭 (conjugation)** 形式：
$$
G(f) = \eta_y \circ F(f) \circ \eta_x^{-1} \qquad F(f) = \eta_y^{-1} \circ G(f) \circ \eta_x
$$
如若现在考虑 $F, G, H : \mathcal{G}_1 \to \mathcal{G}_2$ 的任意两个自然同构 $\eta_1 : F \Rightarrow G$ 及 $\eta_2 : G \Rightarrow H$, 则它们的纵合成诱导出组件的合成：
$$
(\eta_2 \circ \eta_1)(x) \coloneqq \eta_2(x) \circ \eta_1(x)
$$
连同该纵合操作我们可以得到 $\op{Hom}$-群胚 的定义.

### 例子 2.8 (范畴中的群胚核)

设 $\mathcal{C}$ 为任意小范畴, 我们将 $\mathcal{C}$ 中所有同构抽取并组成一个新的子范畴 $\op{Core}(\mathcal{C}) \in \Grpd$, 我们称它为 $\mathcal{C}$ 的 **核 (core)**, 它亦是 $\mathcal{C}$ 中的 **极大群胚 (maximal groupoid)**. 我们可以列举一些关于极大群胚的一些基本例子：

- 取 $\mathcal{C} = \Sets$ 则是集合的群胚, 其中的态射为集合间的双射;

- 取 $\mathcal{C} = \op{FinSet}$ 则该群胚的骨架 (即范畴中对象间的同构皆为等价) 为所有对称群的 **消圈群胚 (delooping groupoids)** 的不交并, 那么有以下同构：
  $$
  \op{Core}(\op{FinSet}) \simeq \bigsqcup_{n \in \N} \op{Sym}(n)
  $$

- 取 $\mathcal{C} = \Vect$ 则是线性空间的群胚, 其中的态射为线性双射;

- 取 $\mathcal{C} = \op{FinVect}$ 则该群胚的骨架是所有一般线性群的消圈群胚, 即：
  $$
  \op{Core}(\op{FinVect}) \simeq \bigsqcup_{n \in \N} \op{GL}(n)
  $$

### 例子 2.9 (离散群胚)

设 $X$ 为集合, 我们称 $\Disc{X}$ 为 $X$ 的 **离散群胚 (discrete groupoid)**, 当中的对象为 $X$ 中的对象而唯一的态射则是 $X$ 中恒等态射.

若我们考虑 $X$ 是一个离散拓扑空间, 那么 $\Disc{X}$ 则是它的基本群胚.

### 例子 2.10 (群胚的余积)

设 $\set{\mathcal{G}_i}_{i \in I}$ 为一族群胚的集合, 那么它们的不交并 $\displaystyle \bigsqcup_{i \in I} \mathcal{G}_i$ 仍为群胚, 称为 **余积群胚 (coproduct groupoid)**, 其中：

- $\displaystyle \Ob{\bigsqcup_{i \in I} \mathcal{G}_i} \coloneqq \bigsqcup_{i \in I} \Ob{\mathcal{G}_i}$;
- $\displaystyle \Hom{\bigsqcup_{i \in I} \mathcal{G}_i}{x}{y} \coloneqq \displaystyle \bigsqcup_{i \in I} \Hom{\mathcal{G}_i}{x}{y}$.

### 例子 2.11 (群胚的积)

设 $\set{ \mathcal{G}_i }_{i \in I}$ 为一族群胚的集合, 那么它们的积 $\displaystyle \prod_{i \in I} \mathcal{G}_i$ 仍为群胚, 称为 **群胚积 (product groupoid)**, 其中：

- $\displaystyle \Ob{ \prod_{i \in I} \mathcal{G}_i } \coloneqq \prod_{i \in I} \Ob{\mathcal{G}_i}$;
- $\Hom{\prod_{i \in I} \mathcal{G}_i}{(x_i)_{i \in I}}{(y_i)_{i \in I}} \coloneqq \displaystyle \prod_{i \in I} \Hom{\mathcal{G}_i}{x_i}{y_i}$.

这里有一些相关的例子z：

- 考虑一族群 $\set{G_i}_{i \in I}$ 的消圈群胚 $\mathcal{G}_i = BG_i$, 那么 $BG_i$ 的乘积同构于对 $\set{G_i}_{i \in I}$ 的群直积消圈, 即有：
  $$
  \prod_{i \in I} BG_i \simeq \kb{B}{\prod_{i \in I} G_i}
  $$

- 若 $\displaystyle \bigsqcup_{i \in I} \mathcal{G}_i$ 为余积群胚, 那么对任意 $\mathcal{G} \in \Grpd$, 有群胚同态 $\displaystyle \bigsqcup_{i \in I} \mathcal{G}_i \to \mathcal{G}$, 它等价于一族群胚同态 $f_i : \mathcal{G}_i \to \mathcal{G}$ 的元组 $(f_i)_{i \in I}$, 因此我们有以下关系：
  $$
  \Hom{\Grpd}{ \bigsqcup_{i \in I} \mathcal{G}_i }{\mathcal{G}} \simeq \prod_{i \in I} \Hom{\Grpd}{\mathcal{G}_i}{\mathcal{G}}
  $$

### 注释

无论是群胚还是 $\op{Hom}$-群胚, 它们都具有许多有趣的性质, 我们将于后续详细地讨论它, 现在先让我们引入基本群相关的一些概念.

### 定义 2.12 (点拓扑空间)

设 $X \in \Top$：

- 选取任意 $x \in X$ 为 **基点 (basepoint)**, 并称 $(X, x)$ 为 **点拓扑空间 (pointed topological space)**;
- 带基点拓扑空间之间的连续函数 $f : (X, x) \to (Y, y)$ 保持基点, 即 $f(x) = y$.

### 注释 (点拓扑空间范畴的同伦范畴)

- 由上述点拓扑空间及保持基点的连续函数所构成的范畴称为 **点拓扑空间范畴 (pointed topological space category)**, 记为 $\PTop$.
- 类似地, 在 $\PTop$ 中对任意连续函数 $f, f' : (X, x) \to (Y, y)$, 它们之间的同伦 $\eta : f \Rightarrow f'$, 连续函数 $\eta : X \times I \to Y$ 亦应于任何时刻下保持基点不变, 即 $\Forall{t \in I} \eta(x, t) = y$.
- 我们依旧可以透过 $\kappa : \PTop \to \Ho{\PTop}$ 获得 $\PTop$ 的同伦范畴, 该范畴中的态射为保持基点的同伦类.

### 定义 2.13 (基本群)

设 $(X, x) \in \PTop$, 我们定义 **基本群 (fundamental groups)** 为：
$$
\pi_1(X, x) \coloneqq \Aut_{\Pi_1(X)}(x)
$$
即为从基点 $x$ 到自身的环路的道路同伦类集合连带 [命题 2.3](#命题_2.4_(道路同伦类的合成与性质)) 中定义的合成道路所构成的自同构群.

### 注释

- 将基本群的概念推广至更高维度, 我们称 $\pi_n(X, x)$ 为第 $n$ 维 **同伦群 (homotopy groups)**, 因此基本群在该语境下亦被称为 **第一同伦群 (first homotopy group)**.
- 由于 $\Pi_1(X)$ 中所有的态射可逆, 态射集 $\Hom{\Pi_1(X)}{x}{x}$ 中的所有自同构将构成群, 我们记为 $\Aut_{\Pi_1(X)}(x)$.
- 基本群胚 $\mathcal{G}$ 中所包含的 "信息" 实际上就是许多个基本群.

### 定义 2.14 (基本群间的态射)

设 $(X, x), (Y, y) \in \PTop$ 以及它们之间的保基点连续函数 $f : X \to Y$, 则可诱导出它们的基本群同态：
$$
\Map{f_*}{\pi_1(X, x)}{\pi_1(Y, y)}{ \bb{I \overset{\gamma}{\to} X}_{\sim_h} }{ \bb{f \circ \gamma : I \overset{\gamma}{\to} X \overset{f}{\to} Y}_{\sim_h} }
$$

### 注释

注意到上述的推出操作 $f_* = \pi_1(f)$ 是函子性的, 因为有 **基本群函子 (fundamental group functor)**, 即 $\pi_1 : \PTop \to \Grp$.

### 命题 2.15 (基本群仅依赖于同伦类)

设 $(X, x), (Y, y) \in \PTop$ 及保基点的连续函数 $f_1, f_2 : X \to Y$：

1. 若存在它们之间的同伦 $\eta : f_1 \Rightarrow f_2$, 则其诱导出相同的推出 $(f_1)_* = (f_2)_* : \pi_1(X, x) \to \pi_1(Y, y)$;
2. 特别地若 $f : X \to Y$ 是同伦等价, 则 $f_* : \pi_1(X, x) \to \pi_1(Y, y)$ 是同构.

##### 证明

1. 由于 $f_1 \Rightarrow f_2$, 透过自然变换的横合易得 $f_1 \circ \gamma \Rightarrow f_2 \circ \gamma$, 因此 ${f_1}_*([\gamma]) = [f_1 \circ \gamma] = [f_2 \circ \gamma] = {f_2}_*([\gamma])$.
2. 若 $f : X \to Y$ 是同伦等价, 则存在 $f$ 的逆映射 $g : Y \to X$ 使得有推出 $g_* : \pi_1(Y, y) \to \pi_1(X, x)$.

### 注释

由于任意于 $\PTop$ 中的连续函数 $f : X \to Y$ 会被函子 $\kappa : \PTop \to \Ho{\PTop}$ 映射至他的同伦类 $[f]$, 而由 [命题 2.15](#命题_2.15_(基本群仅依赖于同伦类)) 又得知基本群间的映射仅依赖于同伦类, 则可使得下图交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IlxcdGV4dHtUb3B9XnsqL30ifSx7InBvc2l0aW9uIjpbMCwxXSwidmFsdWUiOiJcXHRleHR7SG99KFxcdGV4dHtUb3B9XnsqL30pIn0seyJwb3NpdGlvbiI6WzEsMF0sInZhbHVlIjoiXFx0ZXh0e0dycH0ifV0sImVkZ2VzIjpbeyJmcm9tIjoxLCJ0byI6Mn0seyJmcm9tIjowLCJ0byI6MiwibGFiZWxQb3NpdGlvbiI6ImxlZnQiLCJ2YWx1ZSI6IlxccGlfMSJ9LHsiZnJvbSI6MCwidG8iOjEsInZhbHVlIjoiXFxrYXBwYSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9XX0=
\xymatrix{
\text{Top}^{*/} \ar@{->}[r]^{\pi_1} \ar@{->}[d]_{\kappa} & \text{Grp} \\
\text{Ho}(\text{Top}^{*/}) \ar@{->}[ru] & 
}
$$

### 定义 2.16 (单连通拓扑空间)

我们称 $X \in \Top$ 是 **单连通 (simply connected)** 的, 当同时满足了：

1. 道路连通：$\pi_0(X) \simeq *$;
2. 基本群是平凡的：$\pi_1(X, x) \simeq 1$.

### 注释 (单连通空间的几何诠释)

直观地说单连通的空间中所有的闭曲线都能连续的收缩至一点, 换句话说, 单连通意味着该空间中没有 "洞", 因为洞会阻碍某些闭曲线收缩至一点上, 因此可等价地刻画为基本群是平凡的.

### 例子 2.17 (单连通的例子)

设有维度 $n \in \N$：

- $n$ 维球面 $S^n$ 与欧氏空间 $\R^n$ 是单连通的.
- 环面 $T^2$ 并不是单连通的, 更广义地亏格数不为 $0$ 的闭曲面都不是单连通的.

### 定义 2.18 (半局部单连通空间)

...

{% end%}
