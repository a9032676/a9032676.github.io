+++

title = "从幺半群到幺半范畴"
date = 2024-01-18
draft = false

[taxonomies]
categories = ["范畴论"]
tags = ["数学", "代数学", "范畴论", "幺半范畴"]

[extra]
lang = "zh"
toc = true
mathjax = true

+++

{% caution() %}本文存在部分内容尚未完全施工完毕, 作者将尽快更新！{% end %}

{% mathjax_escape() %}

## 引言

范畴论秉承了 "推广概念" 的精神, 而对于经典代数学中所定义的代数结构, 如幺半群, 于范畴论中亦能被推广为某些范畴 $\mathcal{C}$ 中的幺半对象, 而幺半群自身无非就是集合范畴下的幺半对象而已, 不过究竟怎么样的 $\mathcal{C}$ 足以容纳这些幺半对象呢? 接下来让我们娓娓道来.

## 1. 幺半对象与内部化

众所周知, 在经典的抽象代数学中, 幺半群 $M$ 的定义如下：

### 定义 1.1 (幺半群)

> 设有一组资料 $(M, \cdot, 1)$, 称其为 **幺半群 (monoid)**, 其中：
>
> - $M$ 为任意非空集;
> - 称 $1 \in M$ 为 $M$ 的 **幺元 (identity element)**;
> - 二元运算 $\cdot : M \times M \to M$, 该处已蕴含封闭性;
>
> 使得满足了：
>
> - **结合律**：$\Forall{x,y,z \in M} (x \cdot y) \cdot z = x \cdot (y \cdot z)$;
> - **左/右幺元律**：$\ExistU{1 \in M} \Forall{x \in M} 1 \cdot x = x = x \cdot 1$.

关于上述的二元运算 $\Map{\cdot}{M \times M}{M}{(x, y)}{x \cdot y}$, 这里有另外一个角度来理解它, 它是一种将 $2$-元组 $(x, y)$ 编码为标准形 $x \cdot y$ 的过程, 因此有：

- **编码前的结合律**：$\Map{\text{双射}}{(M \times M) \times M}{M \times (M \times M)}{((x, y), z)}{(x, (y, z))}$;
- **编码前的左/右幺元律**：$\Map{\text{双射}}{\set{1} \times M}{M}{(1, x)}{x}$ 以及 $\Map{\text{双射}}{M \times \set{1}}{M}{(x, 1)}{x}$, 其中 $\set{1}$ 为平凡幺半群.

然而该处的笛卡尔积 $\times$ 是将两个集合 "乘" 在一起的二元操作, 是定义在集合范畴 $\Sets$ 内定义的, 从范畴论的观点审视就未免有点过于狭隘了, 那么我们可以放宽到任意一个范畴 $\mathcal{C}$, 定义二元运算 $\otimes : \mathcal{C} \times \mathcal{C} \to \mathcal{C}$ 以取代 $\times$, 便可将某个对象 $M \in \Ob{\mathcal{C}}$ 视为 $\mathcal{C}$ 中的 "幺半群", 因此上述规律可被重绘为：

- **结合律**：$\alpha_{M,M,M} : (M \otimes M) \otimes M \overto{\text{同构}} M \otimes (M \otimes M)$;
- **左/右幺元律**：$\lambda_M : 1 \otimes M \overto{\text{同构}} M$ 以及 $\rho_M : M \otimes 1 \overto{\text{同构}} M$, 其中 $1 \in \Ob{\mathcal{C}}$ 为 $\mathcal{C}$ 中的 "幺元".

事实上 $\otimes$ 本就是一个从乘积范畴 $\mathcal{C} \times \mathcal{C}$ 到 $\mathcal{C}$ 的函子, 因此上述的 $\alpha_{M, M, M}$ 为以下自然同构的构件 ($\lambda_M$ 与 $\rho_M$ 亦类似, 同时将通配符 $(-)$ 略写为 $-$)：
$$
\alpha : \bigg( (- \otimes -) \otimes - \bigg) \overto{\sim} \bigg(- \otimes (- \otimes -) \bigg)
$$
此外, 回顾幺半群所定义的结合律 $\Forall{x,y,z \in M} (x \cdot y) \cdot z = x \cdot (y \cdot z)$, 它说明了 "元组 $((x, y), z)$ 与 $(x, (y, z))$ 在被二元运算 $\cdot$ 编码后的元素 $(x \cdot y) \cdot z$ 与 $x \cdot (y \cdot z)$ 亦应相等" 这一事实, 形式化后即有：
$$
\begin{array}{cc}
(M \times M) \times M & \overto{\cdot} & M \times M & \overto{\cdot} & M & \overfrom{\cdot} & M \times M & \overfrom{\cdot} & M \times (M \times M) \\
((x, y), z) & \mapsto & (x \cdot y, z) & \mapsto & (x \cdot y) \cdot z = x \cdot (y \cdot z) & \mapsfrom & (x, y \cdot z) & \mapsfrom & (x, (y, z))
\end{array}
$$
这样子的映射同样可推广至带有 $\otimes$ 操作的范畴 $\mathcal{C}$ 中. 综上所述, 则可自然地引出以下定义：

### 定义 1.2 (幺半对象)

>对任意范畴 $\mathcal{C}$, 设有一组资料 $(M, \mu, \eta)$, 称其为 $\mathcal{C}$ 中的 **幺半对象 (monoid object)**, 其中：
>
>- $M$ 为任意范畴 $\mathcal{C}$ 中的对象;
>- $1 \in \Ob{\mathcal{C}}$ 称为 $M$ 的 **幺元 (unit object)**;
>- 二元函子 $\otimes : \mathcal{C} \times \mathcal{C} \to \mathcal{C}$;
>- "乘法" 态射 $\mu : M \otimes M \to M$ 及 "幺元" 态射 $\eta : 1 \to M$;
>- 同构 (自然同构 $\alpha$ 的构件) $\alpha_{M, M, M} : (M \otimes M) \otimes M \overto{\sim} M \otimes (M \otimes M)$, 称为 **结合子 (associator)**;
>- 同构 (自然同构 $\lambda$ 的构件) $\lambda_M : 1 \otimes M \overto{\sim} M$, 称为 **左单位子 (left unitor)**;
>- 同构 (自然同构 $\rho$ 的构件) $\rho_M : M \otimes 1 \overto{\sim} M$, 称为 **右单位子 (right unitor)**;
>
>使得以下内外图表交换：
>$$
>% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IihNIFxcb3RpbWVzIE0pIFxcb3RpbWVzIE0ifSx7InBvc2l0aW9uIjpbMywwXSwidmFsdWUiOiJNIFxcb3RpbWVzIChNIFxcb3RpbWVzIE0pIn0seyJwb3NpdGlvbiI6WzQsMl0sInZhbHVlIjoiTSBcXG90aW1lcyBNIn0seyJwb3NpdGlvbiI6WzAsMl0sInZhbHVlIjoiTSBcXG90aW1lcyBNIn0seyJwb3NpdGlvbiI6WzIsNF0sInZhbHVlIjoiTSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IjEgXFxvdGltZXMgTSJ9LHsicG9zaXRpb24iOlsyLDNdLCJ2YWx1ZSI6Ik0ifSx7InBvc2l0aW9uIjpbMywxXSwidmFsdWUiOiJNIFxcb3RpbWVzIDEifSx7InBvc2l0aW9uIjpbMiwxXSwidmFsdWUiOiJNIFxcb3RpbWVzIE0ifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MSwidmFsdWUiOiJcXGFscGhhX3tNLE0sTX0ifSx7ImZyb20iOjEsInRvIjoyLCJ2YWx1ZSI6IjFfTSBcXG90aW1lcyBcXG11In0seyJmcm9tIjowLCJ0byI6MywibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwidmFsdWUiOiJcXG11IFxcb3RpbWVzIDFfTSJ9LHsiZnJvbSI6MywidG8iOjQsInZhbHVlIjoiXFxtdSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6MiwidG8iOjQsInZhbHVlIjoiXFxtdSJ9LHsiZnJvbSI6NSwidG8iOjYsInZhbHVlIjoiXFxsYW1iZGFfTSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6NywidG8iOjYsInZhbHVlIjoiXFxyaG9fTSJ9LHsiZnJvbSI6NSwidG8iOjgsInZhbHVlIjoiXFxldGEgXFxvdGltZXMgMV9NIn0seyJmcm9tIjo3LCJ0byI6OCwibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwidmFsdWUiOiIxX00gXFxvdGltZXMgXFxldGEifSx7ImZyb20iOjgsInRvIjo2fV19
>\xymatrix{
>& (M \otimes M) \otimes M \ar@{->}[rr]^{{\alpha_{M,M,M}}} \ar@{->}[ldd]_{\mu \otimes 1_M} &  & M \otimes (M \otimes M) \ar@{->}[rdd]^{1_M \otimes \mu} &  \\
>& 1 \otimes M \ar@{->}[rdd]_{\lambda_M} \ar@{->}[r]^{\eta \otimes 1_M} & M \otimes M \ar@{->}[dd] & M \otimes 1 \ar@{->}[ldd]^{\rho_M} \ar@{->}[l]_{1_M \otimes \eta} &  \\
>M \otimes M \ar@{->}[rrdd]_{\mu} &  &  &  & M \otimes M \ar@{->}[lldd]^{\mu} \\
>&  & M &  &  \\
>&  & M &  & 
>}
>$$

然而定义上述幺半对象所要求的资料过多了, 我们可以将部分共通的性质抽象出来, 例如只要 $\mathcal{C}$ 连带运算 $\otimes$ 本身长得像个 "幺半群", 则在其中可以自然地容纳幺半对象的存在, 将这一概念推而广之, 当我们尝试将任意的代数结构 (如群, 环, 作用等) 推广为范畴论中的特殊对象 (群对象, 环对象, 作用对象等) 时, 或称为对代数结构 **内部化 (internalization)**, 而这个过程应遵从以下的 **微缩宇宙原则 (microcosm principle)**：

> 当尝试内部化一些代数结构 $S$ 为任意范畴 $\mathcal{C}$ 中的对象时, $\mathcal{C}$ 本身应保持与 $S$ 有着相同的结构.

那么究竟怎样的范畴与幺半群的内部化兼容呢? 答案是幺半范畴, 我们在下一节将引入关于它的讨论.

## 2. 幺半范畴与融贯条件

我们先给出什么为之 "长得像是个幺半群的范畴", 即幺半范畴的严格定义, 再逐步剖析定义中的意义：

### 定义 2.1 (幺半范畴)

> 设有一组资料 $(\mathcal{V}, \otimes, 1, \alpha, \lambda, \rho)$ (偶尔亦简记为 $(\mathcal{V}, \otimes, 1)$), 称其为 **幺半范畴 (monoidal category)**, 其中：
>
> - $\mathcal{V}$ 是一个范畴;
> - $1 \in \Ob{\mathcal{V}}$, 称为 $\mathcal{V}$ 的 **幺元 (unit object)**;
> - 二元函子 $\MMap{\otimes}{\mathcal{V} \times \mathcal{V}}{\mathcal{V}}{(X, Y)}{X \otimes Y}{\b{X \overto{f} X', Y \overto{g} Y'}}{\b{X \otimes Y \overto{f \otimes g} X' \otimes Y'}}$, 称为 **幺半积 (monoidal product)** 或 **张量积 (tensor product)**;
> - 自然同构 $\alpha : \bigg((- \otimes -) \otimes - \bigg) \overto{\sim} \bigg(- \otimes (- \otimes -) \bigg)$, 称为 **结合子 (associator)**;
> - 自然同构 $\lambda : 1 \otimes (-) \overto{\sim} (-)$, 称为 **左单位子 (left unitor)**;
> - 自然同构 $\rho : (-) \otimes 1 \overto{\sim} (-)$, 称为 **右单位子 (right unitor)**;
>
> 对任意 $W, X, Y, Z \in \Ob{\mathcal{V}}$, 使以下内外图表交换 (内外侧所有态射皆为同构)：
> $$
> % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlsyLDBdLCJ2YWx1ZSI6IigoVyBcXG90aW1lcyBYKSBcXG90aW1lcyBZKSBcXG90aW1lcyBaIn0seyJwb3NpdGlvbiI6WzAsMl0sInZhbHVlIjoiKFcgXFxvdGltZXMgKFggXFxvdGltZXMgWSkpIFxcb3RpbWVzIFoifSx7InBvc2l0aW9uIjpbMSw0XSwidmFsdWUiOiJXIFxcb3RpbWVzICgoWCBcXG90aW1lcyBZKSBcXG90aW1lcyBaKSJ9LHsicG9zaXRpb24iOlszLDRdLCJ2YWx1ZSI6IlcgXFxvdGltZXMgKFggXFxvdGltZXMgKFkgXFxvdGltZXMgWikpIn0seyJwb3NpdGlvbiI6WzQsMl0sInZhbHVlIjoiKFcgXFxvdGltZXMgWCkgXFxvdGltZXMgKFkgXFxvdGltZXMgWikifSx7InBvc2l0aW9uIjpbMSwyXSwidmFsdWUiOiIoWCBcXG90aW1lcyAxKSBcXG90aW1lcyBZIn0seyJwb3NpdGlvbiI6WzMsMl0sInZhbHVlIjoiWCBcXG90aW1lcyAoMSBcXG90aW1lcyBZKSJ9LHsicG9zaXRpb24iOlsyLDNdLCJ2YWx1ZSI6IlggXFxvdGltZXMgWSJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJ2YWx1ZSI6IlxcbGFyZ2UgXFxhbHBoYV97VyxYLFl9IFxcb3RpbWVzIDFfWiJ9LHsiZnJvbSI6MSwidG8iOjIsInZhbHVlIjoiXFxsYXJnZSBcXGFscGhhX3tXLCBYIFxcb3RpbWVzIFksIFp9IiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjowLCJ0byI6NCwidmFsdWUiOiJcXGxhcmdlIFxcYWxwaGFfe1cgXFxvdGltZXMgWCwgWSwgWn0ifSx7ImZyb20iOjQsInRvIjozLCJ2YWx1ZSI6IlxcbGFyZ2UgXFxhbHBoYV97VywgWCwgWSBcXG90aW1lcyBafSJ9LHsiZnJvbSI6MiwidG8iOjMsImxhYmVsUG9zaXRpb24iOiJyaWdodCIsInZhbHVlIjoiXFxsYXJnZSAxX1cgXFxvdGltZXMgXFxhbHBoYV97WCwgWSwgWn0ifSx7ImZyb20iOjUsInRvIjo2LCJ2YWx1ZSI6IlxcYWxwaGFfe1gsIDEsIFl9In0seyJmcm9tIjo1LCJ0byI6NywibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwidmFsdWUiOiJcXHJob19YIFxcb3RpbWVzIDFfWSJ9LHsiZnJvbSI6NiwidG8iOjcsImxhYmVsUG9zaXRpb24iOiJsZWZ0IiwidmFsdWUiOiIxX1ggXFxvdGltZXMgXFxsYW1iZGFfWSJ9XX0=
> \xymatrix{
>  &  & ((W \otimes X) \otimes Y) \otimes Z \ar@{->}[lldd]_{{\large \alpha_{W,X,Y} \otimes 1_Z}} \ar@{->}[rrdd]^{{\large \alpha_{W \otimes X, Y, Z}}} &  &  \\
>  &  &  &  &  \\
> (W \otimes (X \otimes Y)) \otimes Z \ar@{->}[rdd]_{{\large \alpha_{W, X \otimes Y, Z}}} & (X \otimes 1) \otimes Y \ar@{->}[rr]^{{\alpha_{X, 1, Y}}} \ar@{->}[rd]_{\rho_X \otimes 1_Y} &  & X \otimes (1 \otimes Y) \ar@{->}[ld]^{1_X \otimes \lambda_Y} & (W \otimes X) \otimes (Y \otimes Z) \ar@{->}[ldd]^{{\large \alpha_{W, X, Y \otimes Z}}} \\
>  &  & X \otimes Y &  &  \\
>  & W \otimes ((X \otimes Y) \otimes Z) \ar@{->}[rr]_{{\large 1_W \otimes \alpha_{X, Y, Z}}} &  & W \otimes (X \otimes (Y \otimes Z)) & 
> }
> $$
> 其中分别称：
>
> - 外侧的交换图为 **五角恒等式 (pentagon identity)**;
> - 内侧的交换图为 **三角恒等式 (triangle identity)** (切记不要与伴随函子的三角恒等式混淆);
> - 将内外侧的交换图合称为幺半范畴的 **融贯条件 (coherence conditions)**.

然而注意到上述的五角恒等式, 为何考虑的是四个对象的结合情况, 与幺半对象的定义只有三个对象不同呢？这是因为就像在幺半群中可以构造广义的结合律般, 例如考虑 $A_1, A_2, \ldots, A_n \in \Ob{\mathcal{C}}$ 时, 我们当然希望它有以下这样子的同构：
$$
\alpha_{A_1, A_2, \ldots, A_n} : (((\cdots (A_1 \otimes A_2) \otimes \cdots ) \otimes A_{n-1}) \otimes A_n) \overto{\sim} A_1 \otimes (A_2 \otimes (\cdots \otimes (A_{n-1} \otimes A_n) \cdots))
$$
例如当取 $n = 4$ 时, 于幺半群中所定义的结合律所采用的是严格的等同关系 (即等号 $=$), 因此存在唯一的恒等态射使得以下元素于幺半群中相等：
$$
((w \cdot x) \cdot y) \cdot z = (w \cdot (x \cdot y)) \cdot z = \cdots = (w \cdot (x \cdot (y \cdot z)))
$$
由等同关系这一点我们可以直接确保, 无论怎样挪动其中的括号, 它们都是等价的. 然而于幺半范畴中, 若不依赖于以上的融贯条件我们就无法保证以下自然同构是唯一的：
$$
\bigg( ((- \otimes -) \otimes -) \otimes - \bigg) \overto{\sim} \bigg( - \otimes\ (- \otimes (- \otimes -)) \bigg)
$$
因为对于 $W, X, Y,Z \in \Ob{\mathcal{V}}$ 而言下图的五角柱 (不含底与顶面的正五边形) 可交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IigoVyBcXG90aW1lcyBYKSBcXG90aW1lcyBZKSBcXG90aW1lcyBaIn0seyJwb3NpdGlvbiI6WzQsMV0sInZhbHVlIjoiVyBcXG90aW1lcyAoWCBcXG90aW1lcyAoWSBcXG90aW1lcyBaKSkifSx7InBvc2l0aW9uIjpbMCw0XSwidmFsdWUiOiIoKFcnIFxcb3RpbWVzIFgnKSBcXG90aW1lcyBZJykgXFxvdGltZXMgWicifSx7InBvc2l0aW9uIjpbNCw0XSwidmFsdWUiOiJXJyBcXG90aW1lcyAoWCcgXFxvdGltZXMgKFknIFxcb3RpbWVzIFonKSkifSx7InBvc2l0aW9uIjpbMSwyXSwidmFsdWUiOiIoVyBcXG90aW1lcyAoWCBcXG90aW1lcyBZKSkgXFxvdGltZXMgWiJ9LHsicG9zaXRpb24iOlsyLDBdLCJ2YWx1ZSI6IihXIFxcb3RpbWVzIFgpIFxcb3RpbWVzIChZIFxcb3RpbWVzIFopIn0seyJwb3NpdGlvbiI6WzMsMl0sInZhbHVlIjoiVyBcXG90aW1lcyAoKFggXFxvdGltZXMgWSkgXFxvdGltZXMgWikifSx7InBvc2l0aW9uIjpbMSw1XSwidmFsdWUiOiIoVycgXFxvdGltZXMgKFgnIFxcb3RpbWVzIFknKSkgXFxvdGltZXMgWicifSx7InBvc2l0aW9uIjpbMyw1XSwidmFsdWUiOiJXJyBcXG90aW1lcyAoKFgnIFxcb3RpbWVzIFknKSBcXG90aW1lcyBaJykifSx7InBvc2l0aW9uIjpbMiwzXSwidmFsdWUiOiIoVycgXFxvdGltZXMgWCcpIFxcb3RpbWVzIChZJyBcXG90aW1lcyBaJykifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MiwidmFsdWUiOiIoKGYgXFxvdGltZXMgZykgXFxvdGltZXMgaCkgXFxvdGltZXMgaSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6MSwidG8iOjMsInZhbHVlIjoiZiBcXG90aW1lcyAoZyBcXG90aW1lcyAoaCBcXG90aW1lcyBpKSkifSx7ImZyb20iOjAsInRvIjo0LCJ2YWx1ZSI6IlxcbGFyZ2UgXFxjb2xvcntibHVldmlvbGV0fXtcXGFscGhhX3tXLCBYLCBZfSBcXG90aW1lcyAxX1p9IiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6MCwidG8iOjUsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUiLCJ2YWx1ZSI6IlxcbGFyZ2UgXFxjb2xvcntnb2xkZW5yb2R9e1xcYWxwaGFfe1cgXFxvdGltZXMgWCwgWSwgWn19In0seyJmcm9tIjo0LCJ0byI6NiwidmFsdWUiOiJcXGxhcmdlIFxcY29sb3J7Ymx1ZXZpb2xldH17XFxhbHBoYV97VywgWCBcXG90aW1lcyBZLCBafX0iLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjo1LCJ0byI6MSwidmFsdWUiOiJcXGxhcmdlIFxcY29sb3J7Z29sZGVucm9kfXtcXGFscGhhX3tXLCBYLCBZIFxcb3RpbWVzIFp9fSIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifSx7ImZyb20iOjYsInRvIjoxLCJ2YWx1ZSI6IlxcbGFyZ2UgXFxjb2xvcntibHVldmlvbGV0fXsxX1cgXFxvdGltZXMgXFxhbHBoYV97WCwgWSwgWn19IiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6MiwidG8iOjcsInZhbHVlIjoiXFxsYXJnZSBcXGNvbG9ye2JsdWV2aW9sZXR9e1xcYWxwaGFfe1cnLCBYJywgWSd9IFxcb3RpbWVzIDFfe1onfX0iLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjo3LCJ0byI6OCwidmFsdWUiOiJcXGxhcmdlIFxcY29sb3J7Ymx1ZXZpb2xldH17XFxhbHBoYV97VycsIFgnIFxcb3RpbWVzIFknLCBaJ319IiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6OCwidG8iOjMsInZhbHVlIjoiXFxsYXJnZSBcXGNvbG9ye2JsdWV2aW9sZXR9ezFfe1cnfSBcXG90aW1lcyBcXGFscGhhX3tYJywgWScsIFonfX0iLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjoyLCJ0byI6OSwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSIsInZhbHVlIjoiXFxsYXJnZSBcXGNvbG9ye2dvbGRlbnJvZH17XFxhbHBoYV97VycgXFxvdGltZXMgWCcsIFknLCBaJ319In0seyJmcm9tIjo5LCJ0byI6MywibGFiZWxQb3NpdGlvbiI6Imluc2lkZSIsInZhbHVlIjoiXFxsYXJnZSBcXGNvbG9ye2dvbGRlbnJvZH17XFxhbHBoYV97VycsIFgnLCBZJyBcXG90aW1lcyBaJ319In0seyJmcm9tIjo1LCJ0byI6OSwibGluZSI6ImRhc2hlZCJ9LHsiZnJvbSI6NCwidG8iOjcsImxpbmUiOiJkYXNoZWQifSx7ImZyb20iOjYsInRvIjo4LCJsaW5lIjoiZGFzaGVkIn1dfQ==
\xymatrix{
 &  & (W \otimes X) \otimes (Y \otimes Z) \ar@{->}@[goldenrod][rrd]|-{{\large \color{goldenrod}{\alpha_{W, X, Y \otimes Z}}}} \ar@{-->}[ddd] &  &  \\
((W \otimes X) \otimes Y) \otimes Z \ar@{->}[ddd]_{((f \otimes g) \otimes h) \otimes i} \ar@{->}@[blueviolet][rd]|-{{\large \color{blueviolet}{\alpha_{W, X, Y} \otimes 1_Z}}} \ar@{->}@[goldenrod][rru]|-{{\large \color{goldenrod}{\alpha_{W \otimes X, Y, Z}}}} &  &  &  & W \otimes (X \otimes (Y \otimes Z)) \ar@{->}[ddd]^{f \otimes (g \otimes (h \otimes i))} \\
 & (W \otimes (X \otimes Y)) \otimes Z \ar@{->}@[blueviolet][rr]|-{{\large \color{blueviolet}{\alpha_{W, X \otimes Y, Z}}}} \ar@{-->}[ddd] &  & W \otimes ((X \otimes Y) \otimes Z) \ar@{->}@[blueviolet][ru]|-{{\large \color{blueviolet}{1_W \otimes \alpha_{X, Y, Z}}}} \ar@{-->}[ddd] &  \\
 &  & (W' \otimes X') \otimes (Y' \otimes Z') \ar@{->}@[goldenrod][rrd]|-{{\large \color{goldenrod}{\alpha_{W', X', Y' \otimes Z'}}}} &  &  \\
((W' \otimes X') \otimes Y') \otimes Z' \ar@{->}@[blueviolet][rd]|-{{\large \color{blueviolet}{\alpha_{W', X', Y'} \otimes 1_{Z'}}}} \ar@{->}@[goldenrod][rru]|-{{\large \color{goldenrod}{\alpha_{W' \otimes X', Y', Z'}}}} &  &  &  & W' \otimes (X' \otimes (Y' \otimes Z')) \\
 & (W' \otimes (X' \otimes Y')) \otimes Z' \ar@{->}@[blueviolet][rr]|-{{\large \color{blueviolet}{\alpha_{W', X' \otimes Y', Z'}}}} &  & W' \otimes ((X' \otimes Y') \otimes Z') \ar@{->}@[blueviolet][ru]|-{{\large \color{blueviolet}{1_{W'} \otimes \alpha_{X', Y', Z'}}}} & 
}
$$
因此共计有两条不同的路径使得以下的自然性成立：
$$
\begin{align}
f \otimes (g \otimes (h \otimes i)) \circ \textcolor{goldenrod}{\alpha_{W, X, Y \otimes Z}} \circ \textcolor{goldenrod}{\alpha_{W \otimes X, Y, Z} } & = \textcolor{goldenrod}{ \alpha_{W', X', Y' \otimes Z'}} \circ \textcolor{goldenrod}{\alpha_{W' \otimes X', Y', Z'} } \circ ((f \otimes g) \otimes h) \otimes i \\
f \otimes (g \otimes (h \otimes i)) \circ \textcolor{blueviolet}{1_W \otimes \alpha_{X, Y, Z}} \circ \textcolor{blueviolet}{\alpha_{W, X \otimes Y, Z}} \circ \textcolor{blueviolet}{\alpha_{W, X, Y} \otimes 1_Z} & = \textcolor{blueviolet}{1_{W'} \otimes \alpha_{X', Y', Z'}} \circ \textcolor{blueviolet}{\alpha_{W', X' \otimes Y', Z'}} \circ \textcolor{blueviolet}{\alpha_{W', X', Y'} \otimes 1_{Z'}} \circ ((f \otimes g) \otimes h) \otimes i
\end{align}
$$
同样地, 当我们挪动其他的括号, 这将改变我们的自然同构, 例如：
$$
\bigg( (- \otimes (- \otimes -)) \otimes - \bigg) \overto{\sim} \bigg( (- \otimes -) \otimes (- \otimes -) \bigg)
$$
就可以得到以下五角柱 (不含底与顶面的正五边形) 可交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IigoVyBcXG90aW1lcyBYKSBcXG90aW1lcyBZKSBcXG90aW1lcyBaIn0seyJwb3NpdGlvbiI6WzQsMV0sInZhbHVlIjoiVyBcXG90aW1lcyAoWCBcXG90aW1lcyAoWSBcXG90aW1lcyBaKSkifSx7InBvc2l0aW9uIjpbMCw0XSwidmFsdWUiOiIoKFcnIFxcb3RpbWVzIFgnKSBcXG90aW1lcyBZJykgXFxvdGltZXMgWicifSx7InBvc2l0aW9uIjpbNCw0XSwidmFsdWUiOiJXJyBcXG90aW1lcyAoWCcgXFxvdGltZXMgKFknIFxcb3RpbWVzIFonKSkifSx7InBvc2l0aW9uIjpbMSwyXSwidmFsdWUiOiIoVyBcXG90aW1lcyAoWCBcXG90aW1lcyBZKSkgXFxvdGltZXMgWiJ9LHsicG9zaXRpb24iOlsyLDBdLCJ2YWx1ZSI6IihXIFxcb3RpbWVzIFgpIFxcb3RpbWVzIChZIFxcb3RpbWVzIFopIn0seyJwb3NpdGlvbiI6WzMsMl0sInZhbHVlIjoiVyBcXG90aW1lcyAoKFggXFxvdGltZXMgWSkgXFxvdGltZXMgWikifSx7InBvc2l0aW9uIjpbMSw1XSwidmFsdWUiOiIoVycgXFxvdGltZXMgKFgnIFxcb3RpbWVzIFknKSkgXFxvdGltZXMgWicifSx7InBvc2l0aW9uIjpbMyw1XSwidmFsdWUiOiJXJyBcXG90aW1lcyAoKFgnIFxcb3RpbWVzIFknKSBcXG90aW1lcyBaJykifSx7InBvc2l0aW9uIjpbMiwzXSwidmFsdWUiOiIoVycgXFxvdGltZXMgWCcpIFxcb3RpbWVzIChZJyBcXG90aW1lcyBaJykifV0sImVkZ2VzIjpbeyJmcm9tIjo0LCJ0byI6MCwidmFsdWUiOiJcXGxhcmdlIFxcY29sb3J7Z29sZGVucm9kfXsoXFxhbHBoYV97VywgWCwgWX0gXFxvdGltZXMgMV9aKV57LTF9fSIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifSx7ImZyb20iOjAsInRvIjo1LCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIiwidmFsdWUiOiJcXGxhcmdlIFxcY29sb3J7Z29sZGVucm9kfXtcXGFscGhhX3tXIFxcb3RpbWVzIFgsIFksIFp9fSJ9LHsiZnJvbSI6NCwidG8iOjYsInZhbHVlIjoiXFxsYXJnZSBcXGNvbG9ye2JsdWV2aW9sZXR9e1xcYWxwaGFfe1csIFggXFxvdGltZXMgWSwgWn19IiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6MSwidG8iOjUsInZhbHVlIjoiXFxsYXJnZSBcXGNvbG9ye2JsdWV2aW9sZXR9eyhcXGFscGhhX3tXLCBYLCBZIFxcb3RpbWVzIFp9KV57LTF9fSIsImxhYmVsUG9zaXRpb24iOiJpbnNpZGUifSx7ImZyb20iOjYsInRvIjoxLCJ2YWx1ZSI6IlxcbGFyZ2UgXFxjb2xvcntibHVldmlvbGV0fXsxX1cgXFxvdGltZXMgXFxhbHBoYV97WCwgWSwgWn19IiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6NywidG8iOjIsInZhbHVlIjoiXFxsYXJnZSBcXGNvbG9ye2dvbGRlbnJvZH17KFxcYWxwaGFfe1cnLCBYJywgWSd9IFxcb3RpbWVzIDFfe1onfSleey0xfX0iLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjo3LCJ0byI6OCwidmFsdWUiOiJcXGxhcmdlIFxcY29sb3J7Ymx1ZXZpb2xldH17XFxhbHBoYV97VycsIFgnIFxcb3RpbWVzIFknLCBaJ319IiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6OCwidG8iOjMsInZhbHVlIjoiXFxsYXJnZSBcXGNvbG9ye2JsdWV2aW9sZXR9ezFfe1cnfSBcXG90aW1lcyBcXGFscGhhX3tYJywgWScsIFonfX0iLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjoyLCJ0byI6OSwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSIsInZhbHVlIjoiXFxsYXJnZSBcXGNvbG9ye2dvbGRlbnJvZH17XFxhbHBoYV97VycgXFxvdGltZXMgWCcsIFknLCBaJ319In0seyJmcm9tIjozLCJ0byI6OSwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSIsInZhbHVlIjoiXFxsYXJnZSBcXGNvbG9ye2JsdWV2aW9sZXR9eyhcXGFscGhhX3tXJywgWCcsIFknIFxcb3RpbWVzIFonfSleey0xfX0ifSx7ImZyb20iOjUsInRvIjo5LCJsYWJlbFBvc2l0aW9uIjoibGVmdCJ9LHsiZnJvbSI6NCwidG8iOjcsImxhYmVsUG9zaXRpb24iOiJsZWZ0In0seyJmcm9tIjowLCJ0byI6MiwibGluZSI6ImRhc2hlZCJ9LHsiZnJvbSI6MSwidG8iOjMsImxpbmUiOiJkYXNoZWQifSx7ImZyb20iOjYsInRvIjo4LCJsaW5lIjoiZGFzaGVkIn1dfQ==
\xymatrix{
 &  & (W \otimes X) \otimes (Y \otimes Z) \ar@{->}[ddd] &  &  \\
((W \otimes X) \otimes Y) \otimes Z \ar@{->}@[goldenrod][rru]|-{{\large \color{goldenrod}{\alpha_{W \otimes X, Y, Z}}}} \ar@{-->}[ddd] &  &  &  & W \otimes (X \otimes (Y \otimes Z)) \ar@{->}@[blueviolet][llu]|-{{\large \color{blueviolet}{(\alpha_{W, X, Y \otimes Z})^{-1}}}} \ar@{-->}[ddd] \\
 & (W \otimes (X \otimes Y)) \otimes Z \ar@{->}@[goldenrod][lu]|-{{\large \color{goldenrod}{(\alpha_{W, X, Y} \otimes 1_Z)^{-1}}}} \ar@{->}@[blueviolet][rr]|-{{\large \color{blueviolet}{\alpha_{W, X \otimes Y, Z}}}} \ar@{->}[ddd] &  & W \otimes ((X \otimes Y) \otimes Z) \ar@{->}@[blueviolet][ru]|-{{\large \color{blueviolet}{1_W \otimes \alpha_{X, Y, Z}}}} \ar@{-->}[ddd] &  \\
 &  & (W' \otimes X') \otimes (Y' \otimes Z') &  &  \\
((W' \otimes X') \otimes Y') \otimes Z' \ar@{->}@[goldenrod][rru]|-{{\large \color{goldenrod}{\alpha_{W' \otimes X', Y', Z'}}}} &  &  &  & W' \otimes (X' \otimes (Y' \otimes Z')) \ar@{->}@[blueviolet][llu]|-{{\large \color{blueviolet}{(\alpha_{W', X', Y' \otimes Z'})^{-1}}}} \\
 & (W' \otimes (X' \otimes Y')) \otimes Z' \ar@{->}@[goldenrod][lu]|-{{\large \color{goldenrod}{(\alpha_{W', X', Y'} \otimes 1_{Z'})^{-1}}}} \ar@{->}@[blueviolet][rr]|-{{\large \color{blueviolet}{\alpha_{W', X' \otimes Y', Z'}}}} &  & W' \otimes ((X' \otimes Y') \otimes Z') \ar@{->}@[blueviolet][ru]|-{{\large \color{blueviolet}{1_{W'} \otimes \alpha_{X', Y', Z'}}}} & 
}
$$
图中所有横向的边都是同构 (可逆), 因此同样可得到两条各异的路径, 显然只要我们令底面与顶面可交换, 则可确认下来这些自然同构都是唯一的. 另一方面, 由 $4$ 个对象所刻画的五角恒等式可谓是最小的, 可使得上述这些自然同构 (同构之间的对象括号数大于或等于 $2$) 保持唯一一条路径的交换图.

再者, 三角恒等式 $\vcenter{\xymatrix{
(X \otimes 1) \otimes Y \ar@{->}[rr]^{{\alpha_{X, 1, Y}}} \ar@{->}[rd]_{\rho_X \otimes 1_Y} &  & X \otimes (1 \otimes Y) \ar@{->}[ld]^{1_X \otimes \lambda_Y} \\
 & X \otimes Y & 
}}$ 的作用与上述的五角恒等式类似, 也是为了保证当幺元 $1$ 参与到结合律运算时, 总能得到唯一的自然同构, 例如：
$$
(X \otimes (Y \otimes 1)) \otimes (Z \otimes 1) \overto{\sim} (X \otimes Y) \otimes Z \overto{\sim} (X \otimes (Y \otimes Z)) \otimes (1 \otimes 1)
$$

## 3. 幺半范畴与幺半对象的例子

在完成幺半范畴与幺半对象定义的铺垫后, 现在我们可以先来找些例子充实对这些概念的认知.

### 例子 3.1 (线性空间的张量积)

考虑域 $\mathbb{K}$ 上的有限维线性空间范畴 $\FinVect_\mathbb{K}$ 与其中一系列线性空间的直和, 分别设为：
$$
U = \bigoplus_{k = 1}^m U_k, \qquad V = \bigoplus_{j = 1}^n V_j, \qquad W = \bigoplus_{i = 1}^p W_i
$$
以及它们之间的线性映射 $U \overto{A} V \overto{B} W$, 则 $A, B$ 分别可被视为以下这样子的 $n \times m$ 与 $p \times n$ 矩阵：
$$
A \coloneqq \pmatrix{ A^1_1 & A^1_2 & \cdots & A^1_m \\ A^2_1 & A^2_2 & \cdots & A^2_m \\ \vdots & \vdots & & \vdots \\ A^n_1 & A^n_2 & \cdots & A^n_m }, \qquad
B \coloneqq \pmatrix{ B^1_1 & B^1_2 & \cdots & B^1_n \\ B^2_1 & B^2_2 & \cdots & B^2_n \\ \vdots & \vdots & & \vdots \\ B^p_1 & B^p_2 & \cdots & B^p_n }
$$
且由于 $\FinVect_\mathbb{K}$ 中的积与余积是重叠的, 即上述的直和皆为 **双积 (biproduct)**, 因此该矩阵中第 $j$ 行第 $k$ 列的元素 $A^j_k$ 可被定义为 ($B^i_j$ 亦类似)：
$$
\begin{align}
A^j_k & \coloneqq \bb{ U_k \overto{\iota_k} U \overto{A} V \overto{\pi_j} V_j } = \cases{ 1_{U_k} & \text{若 $j = k$} \\ 0_{kj} & \text{若 $j \neq k$} } \\
B^i_j & \coloneqq \bb{ V_j \overto{\iota_j} V \overto{B} W \overto{\pi_i} W_i } = \cases{ 1_{V_j} & \text{若 $i = j$} \\ 0_{ji} & \text{若 $i \neq j$} }
\end{align}
$$
那么矩阵乘法则被定义为 $\Map{\cdot}{ \hom{U}{V} \times \hom{V}{W} }{ \hom{U}{W} }{(A, B)}{A \cdot B \coloneqq B \circ A}$, 即直和之间的线性映射合成, 而其中的元素则为：
$$
\begin{align}
(A \cdot B)^i_k = \bb{ U_k \overto{\iota_k} U \overto{B \circ A} W \overto{\pi_i} W_i }
\end{align}
$$
在这个角度之下, 矩阵乘法 $A \cdot B$ 事实上构成了 **双线性映射 (bilinear maps)**, 即是说同时满足了：

- 对任意 $\displaystyle B \in \hom{V}{W}$, 映射 $\Map{\varphi}{ \hom{U}{V} }{ \hom{U}{W} }{A}{A \cdot B}$ 是线性的, 即是说它又分别满足：
  - **保线性**：$\Forall{\lambda \in \mathbb{K}} \Forall{A \in \hom{U}{V}} \varphi(\lambda A) = \lambda \varphi(A)$, 展开后有 $\lambda A \cdot B = \lambda(A \cdot B)$;
  - **同态性**：$\Forall{A_1, A_2 \in \hom{U}{V}} \varphi(A_1 + A_2) = \varphi(A_1) + \varphi(A_2)$, 展开后有 $(A_1 + A_2) \cdot B = A_1 \cdot B + A_2 \cdot B$.
- 对任意 $\displaystyle A \in \hom{U}{V}$, 映射 $\Map{\psi}{ \hom{V}{W} }{ \hom{U}{W} }{B}{A \cdot B}$ 是线性的, 即是说它又分别满足：
  - **保线性**：$\Forall{\lambda \in \mathbb{K}} \Forall{B \in \hom{V}{W}} \psi(\lambda B) = \lambda \psi(B)$, 展开后有 $A \cdot \lambda B = \lambda(A \cdot B)$;
  - **同态性**：$\Forall{B_1, B_2 \in \hom{V}{W}} \psi(B_1 + B_2) = \psi(B_1) + \psi(B_2)$, 展开后有 $A \cdot (B_1 + B_2) = A \cdot B_1 + A \cdot B_2$.

不要忘记所有的 $\mathbb{K}$-线性映射 依然为 $\mathbb{K}$-线性空间, 因此上述的矩阵加法 (线性映射之间的加法) 可随意使用.

那么现在我们可以得到以下这些范畴论上的信息：

- $\FinVect_\mathbb{K}$ 连同 $\otimes$ 构成了幺半范畴 $(\FinVect_\mathbb{K}, \otimes, 1)$, 并且它的幺元 $1$ 由恒同线性映射给出;

- 由于 $\FinVect_\mathbb{K}$ 中的态射都是 $\mathbb{K}$-线性映射, 而它又是 $\mathbb{K}$-线性空间, 推而广之的说, 这里本来该是 **$\text{Hom}$-集** 的结构, 即是说：
  $$
  \Forall{X, Y \in \Ob{\mathcal{V}} \\ \text{$\mathcal{V}$ 为幺半范畴} } \Hom{\mathcal{V}}{X}{Y} \in \Ob{\Sets}
  $$
  但现在被替换为了某个范畴 $\mathcal{K}$ 中的 **$\text{Hom}$-对象**, 即 $\Hom{\mathcal{V}}{X}{Y} \in \Ob{\mathcal{K}}$, 我们就称这样子的幺半范畴为：

  - **$\mathcal{K}$-丰化幺半范畴 ($\mathcal{K}$-enriched monoidal category)**, 又简称为 **$\mathcal{K}$-丰化范畴**; 或
  - **$\mathcal{K}$ 上的丰化幺半范畴 $\mathcal{V}$ (enriched monoidal category $\mathcal{V}$ over $\mathcal{K}$)**, 又简称为 **$\mathcal{K}$ 上的范畴 $\mathcal{V}$**.

  显然幺半范畴 $\FinVect_\mathbb{K}$ 就是一个 $\FinVect_\mathbb{K}$ (或于自身之) 上的范畴.

现在回到正题, 注意到双线性映射在处理某些问题上是较为复杂的, 因为它的定义本身就不是个简单的线性映射了, 那么有没有一种可能, 将双线性映射简化为线性映射呢? 我们可以考虑在 $\FinVect_\mathbb{K}$ 中定义张量积 $\otimes$ 的泛性质, 即是说对任意一个双线性映射 $A \times B \to C$ 及一个双线性映射 $A \times B \to A \otimes B$, 总是存在唯一的线性映射 $A \otimes B \to C$ 使得下图可交换：
$$
\xymatrix{
A \times B \ar@{->}[rr]^{\text{(泛) 双线性映射}} \ar@{->}[rrd]_{\text{双线性映射}} &  & A \otimes B \ar@{-->}[d]^{\text{$\exists !$ 线性映射}} \\
 &  & C
}
$$
意思就是说, 将双线性映射 $A \times B \to C$ 唯一地拓展为线性映射 $A \otimes B \to C$, 因此对任意矩阵的乘法 $(-) \cdot (-)$ (双线性映射) 就应当使得以下图表可交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IlxcdGV4dHtIb219KFUsIFYpIFxcdGltZXMgXFx0ZXh0e0hvbX0oViwgVykifSx7InBvc2l0aW9uIjpbMiwwXSwidmFsdWUiOiJcXHRleHR7SG9tfShVLCBWKSBcXG90aW1lcyBcXHRleHR7SG9tfShWLCBXKSJ9LHsicG9zaXRpb24iOlsyLDFdLCJ2YWx1ZSI6IlxcdGV4dHtIb219KFUsIFcpIn1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjEsInZhbHVlIjoidSJ9LHsiZnJvbSI6MCwidG8iOjIsInZhbHVlIjoiKC0pIFxcY2RvdCAoLSkiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjEsInRvIjoyLCJ2YWx1ZSI6IlxcZXhpc3RzICEgXFx3aWRlaGF0eygtKSBcXGNkb3QgKC0pfSIsImxpbmUiOiJkYXNoZWQifV19
\xymatrix{
\text{Hom}(U, V) \times \text{Hom}(V, W) \ar@{->}[rr]^{u} \ar@{->}[rrd]_{(-) \cdot (-)} &  & \text{Hom}(U, V) \otimes \text{Hom}(V, W) \ar@{-->}[d]^{\exists ! \widehat{(-) \cdot (-)}} \\
 &  & \text{Hom}(U, W)
}
$$

而构造它的过程与即将引入的下一个例子是类似的, 我们将在下方详细叙述.

### 例子 3.2 (阿贝尔群的张量积)

由 [例子 3.1](#例子_3.1_(线性空间的张量积)) 我们可将双线性映射的推广至 $\Ab$, 那么对任意的 $A, B, C \in \Ob{\Ab}$, 称阿贝尔群中基础集之间的映射 $\varphi : A \times B \to C$ 为 **双同态 (bi-homomorphism)**, 当 $\varphi$ 同时满足了：
$$
\begin{align}
\Forall{a_1, a_2 \in A} \Forall{b \in B} \varphi(a_1 + a_2, b) & = \varphi(a_1, b) + \varphi(a_2, b) \\
\Forall{a \in A} \Forall{b_1, b_2 \in B} \varphi(a, b_1 + b_2) & = \varphi(a, b_1) + \varphi(a, b_2)
\end{align}
$$
由于 $\varphi$ 并非群同态, 我们当然希望存在张量积 $A \otimes B$ 的泛性质, 即有交换图 $\vcenter{\xymatrix{
A \times B \ar@{->}[rr]^{\text{(泛) 双同态}} \ar@{->}[rrd]_{\text{双同态}} &  & A \otimes B \ar@{-->}[d]^{\text{$\exists !$ 群同态}} \\
 &  & C
}}$ 使得将 $\varphi$ 唯一地拓展至群同态 $\widehat{\varphi} : A \otimes B \to C$, 然而从 $A \times B$ 构造出 $A \otimes B$ 的步骤是值得商榷的, 而由直积 $A \times B$ 所生成的自由阿贝尔群：
$$
F_\Ab(A \times B) = \Set{ \sum_{(a, b) \in A \times B} k_{(a, b)}(a, b) : k_{(a, b)} \in \Z \text{ 且 仅有限多个 $k_{(a, b)} \neq 0$} } \simeq \bigoplus_{(a, b) \in A \times B} \Z
$$
它满足了泛性质, 使得图表 $\vcenter{\xymatrix{
A \times B \ar@{->}[r]^u \ar@{->}[rd]_\varphi & F_\Ab(A \times B) \ar@{-->}[d]^{\exists ! \widehat{\varphi}} \\
 & C
}}$ 可交换, 那么就提供了定义张量积的可能性, 但我们没法将 $F_\Ab(A \times B)$ 直接作为 $A \otimes B$ 的定义, 因为这里所希望的 $u$ 也应是个双同态, 而自由阿贝尔群本身是不自带这个条件的, 转而考虑商掉由以下元素所生成的 (加法) 子群：
$$
R(A, B) \coloneqq \Bigg{\langle} \begin{align}
\varphi(a_1 + a_2, b) & - \varphi(a_1, b) - \varphi(a_2, b), \\
\varphi(a, b_1 + b_2) & - \varphi(a, b_1) - \varphi(a, b_2)
\end{align} \Bigg{\rangle} \quad \large \Forall{a, a_1, a_2 \in A \\ b, b_1, b_2 \in B}
$$
因此我们就可以定义 $\Ab$ 的张量积为 $A \otimes B \coloneqq F_\Ab(A \times B)/R(A, B)$. 另一方面, 由于该商群中的陪集恰好为 $F_\Ab(A \times B)$ 中元素的等价类, 而对任意只有一个项的这些元素 $[(a, b)] \in A \otimes B$, 我们简记为 $a \otimes b$, 那么 $A \otimes B$ 中的元素就形如：
$$
\underbrace{\bb{ \sum_{(a, b) \in A \times B} k_{(a, b)}(a, b) }}_\text{等价类} = \sum_{[(a, b)] \in S_{A, B}} k_{[(a, b)]}[(a, b)] = \sum_{a \otimes b \in S_{A, B}} k_{a \otimes b}(a \otimes b)
$$
从这个角度观察, 可见 $A \otimes B$ 实际上也是由集合 $S_{A, B} \coloneqq \set{ a \otimes b : a \in A, b \in B } \sub A \otimes B$ 所生成的自由阿贝尔群, 即是说有同构 $A \otimes B \simeq F_\Ab(S_{A, B})$. 此外, 我们知道 $\Z$ 恰好就是 $\Ab$ 中的幺元, 即是说 $\Z \otimes A \to A$ 与 $A \otimes \Z \to A$ 皆应为同构, 我们只证后者的情形.

由于 $A \otimes \Z \simeq F_\Ab(S_{A, \Z})$, 而由 $F_\Ab(S_{A, \Z})$ 的泛性质可知, 对任意的嵌入映射 $f : F_\Ab(S_{A, \Z}) \to A$ 以及 $u : S_{A, \Z} \to F_\Ab(S_{A, \Z})$, 就必定可以拓展为唯一的同态 $\rho_A : A \otimes \Z \to A$ 使得以下图表交换：
$$
\vcenter{\xymatrix{
S_{A, \Z} \ar@{->}[r]^u \ar@{->}[rd]_f & F_\Ab(S_{A, \Z}) \ar@{-->}[d]^{\exists ! \rho_A} \\
 & A
}}
$$
其中的 $f$ 我们定义为 $\Map{f}{S_{A, \Z}}{A}{a \otimes n}{n \cdot a}$, 其中 $n \cdot a = \underbrace{a + a + \cdots + a}_{\text{$n$ 次}}$, 另一方面由于 $S_{A,\Z} \sub F_\Ab(S_{A,\Z})$ 并且：
$$
a \otimes n = a \otimes (\underbrace{1 + 1 + \cdots + 1}_{\text{$n$ 次}}) \overset{\text{$F_\Ab(S_{A, \Z})$ 保有商掉的双同态}}{=} \underbrace{(a \otimes 1) + (a \otimes 1) + \cdots + (a \otimes 1)}_{\text{$n$ 次}}
$$
便得到 $\Map{u}{S_{A, \Z}}{F_\Ab(S_{A,\Z})}{a \otimes n}{n \cdot (a \otimes 1)}$, 最终就建立起双射 $\Map{\rho_A}{F_\Ab(S_{A,\Z})}{A}{n \cdot (a \otimes 1)}{n \cdot a}$, 而群的同态性也是显然的, 因此得到 $A \otimes \Z \simeq F_\Ab(S_{A,\Z}) \simeq A$.

综上所述, $(\Ab, \otimes, \Z)$ 就构成了幺半范畴, 且该范畴还额外带有 **辩结构 (braiding)**, 即存在以下同构 (或自然同构 $\beta : (- \otimes -) \overto{\sim} (- \otimes -)$ 的构件)：
$$
\beta_{X, Y} : X \otimes Y \overto{\sim} Y \otimes X
$$
而在 $(\Ab, \otimes, \Z)$ 中我们取这样子的同构为 $\Map{\beta_{A, B}}{A \otimes B}{B \otimes A}{a \otimes b}{b \otimes a}$, 因此又称 $(\Ab, \otimes, \Z)$ 为 **对称幺半范畴 (symmetric monoidal category)**.

### 例子 3.3 ($R\Mod$ 范畴与 $R$-模 的张量积)

...

### 例子 3.4 (环与单位结合代数)

...

## 4. 参考链接

本文参考了以下链接中的内容：

- [代数学方法 (卷一) - 李文威](https://gitee.com/wen-wei-li/AlJabr-1/blob/master/Al-jabr-1.pdf)
- [Monoidal Category - nLab](https://ncatlab.org/nlab/show/monoidal+category#MonoidalCategory)
- [Monoidal categories - The Unapologetic Mathematician](https://unapologetic.wordpress.com/2007/06/28/monoidal-categories/)
- [Tensor product of groups - GroupProps](https://groupprops.subwiki.org/wiki/Tensor_product_of_groups)
- [Tensor Products of Abelian Groups](http://galileo.math.siu.edu/Courses/531/S20/tensor.pdf)
- [Understanding the definition of tensor product as a quotient of a free abelian group - StackExchange](https://math.stackexchange.com/questions/1067027/understanding-the-definition-of-tensor-product-as-a-quotient-of-a-free-abelian-g)

{% end %}