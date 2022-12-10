+++

title = "F-Algebra 简记"
date = 2022-08-31
draft = false

[taxonomies]
categories = ["范畴论"]
tags = ["范畴论", "PLT", "函数式编程"]

[extra]
lang = "zh"
toc = true
mathjax = true

+++

{% good() %}本文内容已完全施工完毕, 读者可放心阅读！{% end %}

{% mathjax_escape() %}

### 定义 1.1 ($F$-algebra)

设有范畴 $\mathcal{C}$，自函子 $F : \mathcal{C \to C}$：

- 对于 $A \in \mathcal{C}$ 以及态射 $\alpha: F(A) \to A$， 二元组 $(A, \alpha)$ 构成了 **$F$-algebra**. 当中 $A$ 被称为 **carrier of the algebra**.

  而对于 $F$-algebra 范畴上的同态 $h : (A, \alpha) \to (B, \beta)$，设有 $f : \mathcal{C}(A, B)$，则可使原范畴 $\mathcal{C}$ 有 $f \circ \alpha = \beta \circ F(f)$，即令下图交换：

$$
\xymatrix{
F(A) \ar@{->}[d]_{\alpha} \ar@{->}[r]^{F(f)} & F(B) \ar@{->}[d]^{\beta} \\
A \ar@{->}[r]_{f} & B
}
$$

- 对于 $A \in \mathcal{C}$ 以及态射 $\alpha : A \to F(A)$，二元组 $(A, \alpha)$ 构成了 **$F$-coalgebra**. 当中 $A$ 被称为 **carrier of the coalgebra**.

  而对于从 $F$-coalgebra 范畴上的同态 $h : (A, \alpha) \to (B, \beta)$，设有 $f : \mathcal{C}(A, B)$，则可使原范畴 $\mathcal{C}$ 有 $\beta \circ f = F(f) \circ \alpha$，即令下图交换：
  $$
  \xymatrix{
  F(A) \ar@{->}[r]^{F(f)} & F(B) \\
  A \ar@{->}[u]^{\alpha} \ar@{->}[r]_{f} & B \ar@{->}[u]_{\beta}
  }
  $$

其中 $F$-coalgebra 是 $F$-algebra 的对偶概念，而对象为 $F$-(co)algebra，态射为它们之间的同态的范畴则被称为 **$F$-(co)algebra 范畴**，记为 $F\text{-(co)alg}$.

### 例子 1.2

设有群 $\mathcal{G} = (G, m : G \times G \to G)$ 以及 $m(x, y) = x \cdot y$，若将 $\mathcal{G}$ 翻译为范畴框架，那么对于：

- 单位元，可定义为态射 $e : 1 \to G$ 使得 $e(*) = 1$，其中 $1$ 表示为只有单元素集，即 $1 = \set{*}$.
- 逆元，可定义为态射 $i : G \to G$ 使得对于任意 $x \in G$ 有 $i(x) = x^{-1}$.

而对于群公理，当然地可将它们定义为函数的形式：

- 结合律：$\forall x \in G, \forall y \in G, \forall z \in G, m(m(x,y), z) = m(x, m(y, z))$,
- 单位元：$\forall x \in G, m(e(*), x) = m(x, e(*)) = x$,
- 逆元：$\forall x \in G, m(i(x), x) = m(x, i(x)) = e(*)$.

而上述公理均可表示为下面的交换图：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkcgXFx0aW1lcyAoRyBcXHRpbWVzIEcpIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiRyBcXHRpbWVzIEcifSx7InBvc2l0aW9uIjpbMiwwXSwidmFsdWUiOiIoRyBcXHRpbWVzIEcpIFxcdGltZXMgRyJ9LHsicG9zaXRpb24iOlsyLDFdLCJ2YWx1ZSI6IkcgXFx0aW1lcyBHIn0seyJwb3NpdGlvbiI6WzEsMV0sInZhbHVlIjoiRyJ9LHsicG9zaXRpb24iOls4LDBdLCJ2YWx1ZSI6IkcifSx7InBvc2l0aW9uIjpbMTAsMF0sInZhbHVlIjoiRyJ9LHsicG9zaXRpb24iOls4LDFdLCJ2YWx1ZSI6IjEifSx7InBvc2l0aW9uIjpbMTAsMV0sInZhbHVlIjoiMSJ9LHsicG9zaXRpb24iOls5LDFdLCJ2YWx1ZSI6IkcifSx7InBvc2l0aW9uIjpbOSwwXSwidmFsdWUiOiJHIFxcdGltZXMgRyJ9LHsicG9zaXRpb24iOls0LDBdLCJ2YWx1ZSI6IjEgXFx0aW1lcyBHIn0seyJwb3NpdGlvbiI6WzUsMV0sInZhbHVlIjoiRyJ9LHsicG9zaXRpb24iOls2LDBdLCJ2YWx1ZSI6IkcgXFx0aW1lcyAxIn0seyJwb3NpdGlvbiI6WzUsMF0sInZhbHVlIjoiRyBcXHRpbWVzIEcifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MSwibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwidmFsdWUiOiIoXFx0ZXh0e0lkfSwgbSkifSx7ImZyb20iOjIsInRvIjozLCJ2YWx1ZSI6IihtLCBcXHRleHR7SWR9KSJ9LHsiZnJvbSI6MSwidG8iOjQsInZhbHVlIjoibSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6MywidG8iOjQsImxhYmVsUG9zaXRpb24iOiJsZWZ0IiwidmFsdWUiOiJtIn0seyJmcm9tIjowLCJ0byI6MiwidmFsdWUiOiJcXGNvbmcifSx7ImZyb20iOjcsInRvIjo5LCJ2YWx1ZSI6ImUiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjgsInRvIjo5LCJ2YWx1ZSI6ImUifSx7ImZyb20iOjUsInRvIjoxMCwidmFsdWUiOiIoaSwgXFx0ZXh0e0lkfSkifSx7ImZyb20iOjYsInRvIjoxMCwidmFsdWUiOiIoXFx0ZXh0e0lkfSwgaSkiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjEwLCJ0byI6OSwidmFsdWUiOiJtIiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6NiwidG8iOjgsInZhbHVlIjoiISIsImxpbmUiOiJkYXNoZWQifSx7ImZyb20iOjUsInRvIjo3LCJ2YWx1ZSI6IiEiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJsaW5lIjoiZGFzaGVkIn0seyJmcm9tIjoxMSwidG8iOjEyLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJ2YWx1ZSI6IlxcY29uZyJ9LHsiZnJvbSI6MTMsInRvIjoxMiwidmFsdWUiOiJcXGNvbmcifSx7ImZyb20iOjExLCJ0byI6MTQsInZhbHVlIjoiKGUsXFx0ZXh0e0lkfSkifSx7ImZyb20iOjEzLCJ0byI6MTQsInZhbHVlIjoiKFxcdGV4dHtJZH0sIGUpIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjoxNCwidG8iOjEyLCJ2YWx1ZSI6Im0iLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn1dfQ==
\xymatrix{
G \times (G \times G) \ar@{->}[d]_{{(\text{Id}, m)}} \ar@{->}[rr]^{\cong} &  & (G \times G) \times G \ar@{->}[d]^{{(m, \text{Id})}} &  & 1 \times G \ar@{->}[rd]_{\cong} \ar@{->}[r]^{{(e,\text{Id})}} & G \times G \ar@{->}[d]|-{m} & G \times 1 \ar@{->}[ld]^{\cong} \ar@{->}[l]_{{(\text{Id}, e)}} &  & G \ar@{->}[r]^{{(i, \text{Id})}} \ar@{-->}[d]_{!} & G \times G \ar@{->}[d]|-{m} & G \ar@{->}[l]_{{(\text{Id}, i)}} \ar@{-->}[d]^{!} \\
G \times G \ar@{->}[r]_{m} & G & G \times G \ar@{->}[l]^{m} &  &  & G &  &  & 1 \ar@{->}[r]_{e} & G & 1 \ar@{->}[l]^{e}
}
$$
然后对于上述的三条态射 $e,i,m$，便可以使用余积将它们粘合起来，那么便有 $\alpha = e + i + m$：
$$
\begin{alignat*}{2}
\alpha : 1 + G & + G \times G && \to G \\
& * && \mapsto 1, \\
& x && \mapsto x^{-1}, \\
(x & ,y) && \mapsto x \cdot y.
\end{alignat*}
$$
而群 $\mathcal{G}$ 为 $F$-algebra 则是当 $F$ 为一函子 $F(G) = 1 + G + G \times G$.

### 定义 1.3 (Initial / terminal $F$-algebra)

设有范畴 $\mathcal{C}$，自函子 $F : \mathcal{C \to C}$，**initial algebra** 是指在 $F\text{-alg}$ 范畴中的始对象，实质上作为了 inductive types 的范畴语义. 而该概念的对偶 **terminal coalgebra** 则指在 $F\text{-coalg}$ 范畴上的终对象，并且是 coinductive types 的范畴语义.

### 注释 1.4

若设在 $F\text{-alg}$ 范畴上的 initial algebra 为 $(I, in)$，另一对象 $(A, \alpha)$ 以及同态 $h : (I, in) \to (A, \alpha)$，则该同态唯一，并且 unique up to (unique) isomorphism.

### 定理 1.5 (Lambek's theorem)

设范畴 $\mathcal{C}$ 以及其上的自函子 $F$，若 $F\text{-alg}$ 范畴中存在 initial algebra $in : F(I) \to I$，那么 $I$ 将透过 $in$ 同构于 $F(I)$. 反之若 $F\text{-coalg}$ 范畴中有 terminal coalgebra $out : T \to F(T)$，那么 $T$ 将透过 $out$ 同构于 $F(T)$.

##### 证明

由于我们需要证的是在 $F\text{-}alg$ 范畴上 $F(I)$ 与 $I$ 之间同构，并且默认给出了 $in : F(I) \to I$ 是个 initial algebra，因此需要找到 $in$ 的逆态射 $out :  I \to F(I)$，而逆态射则需要满足如下条件：

1. $out$ 为唯一态射（由逆态射的特性给出）;
2. $out \circ in = \text{id}_{F(I)} : F(I) \to F(I)$ 以及 $in \circ out = \text{Id}_I : I \to I$（类似群中左右逆元结合对应的群元保证了单位元）.

对于 (1)，由于 $in : F(I) \to I$​ 为始对象，而从始对象到其他对象的态射 $out$​ 必然唯一，因此满足了唯一性.

对于 (2)，由于在 $F\text{-alg}$ 上的对象应为 algebra，因此对于这个结合态射中协变位置的 $F(I)$，也必须为 algebra，即应有 $F(in) : F(F(I)) \to F(I)$，使得 $out \circ in = F(in) \circ F(out)$，即令下图交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkYoSSkifSx7InBvc2l0aW9uIjpbMCwxXSwidmFsdWUiOiJJIn0seyJwb3NpdGlvbiI6WzEsMV0sInZhbHVlIjoiRihJKSJ9LHsicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IkYoRihJKSkifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MSwidmFsdWUiOiJpbiIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6MSwidG8iOjIsInZhbHVlIjoib3V0IiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwibGluZSI6ImRhc2hlZCJ9LHsiZnJvbSI6MCwidG8iOjMsInZhbHVlIjoiRihvdXQpIn0seyJmcm9tIjozLCJ0byI6MiwidmFsdWUiOiJGKGluKSJ9XX0=
\xymatrix{
F(I) \ar@{->}[d]_{in} \ar@{->}[r]^{F(out)} & F(F(I)) \ar@{->}[d]^{F(in)} \\
I \ar@{-->}[r]_{out} & F(I)
}
$$
而对于 $in \circ out : I \to I$，可考虑拓展如上交换图，即增加一个 initial algebra $(I, in : F(I) \to I)$ 到最右侧使得 $in \circ out = \text{Id}_I$，并且 $in \circ F(in) = in \circ F(in) : F(F(I)) \to I$，即有以下交换图：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkYoSSkifSx7InBvc2l0aW9uIjpbMCwxXSwidmFsdWUiOiJJIn0seyJwb3NpdGlvbiI6WzEsMV0sInZhbHVlIjoiRihJKSJ9LHsicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IkYoRihJKSkifSx7InBvc2l0aW9uIjpbMiwwXSwidmFsdWUiOiJGKEkpIn0seyJwb3NpdGlvbiI6WzIsMV0sInZhbHVlIjoiSSJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJ2YWx1ZSI6ImluIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjoxLCJ0byI6MiwidmFsdWUiOiJvdXQiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJsaW5lIjoiZGFzaGVkIn0seyJmcm9tIjowLCJ0byI6MywidmFsdWUiOiJGKG91dCkifSx7ImZyb20iOjMsInRvIjoyLCJ2YWx1ZSI6IkYoaW4pIiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6MywidG8iOjQsInZhbHVlIjoiRihpbikifSx7ImZyb20iOjQsInRvIjo1LCJ2YWx1ZSI6ImluIn0seyJmcm9tIjoyLCJ0byI6NSwibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwidmFsdWUiOiJpbiJ9XX0=
\xymatrix{
F(I) \ar@{->}[d]_{in} \ar@{->}[r]^{F(out)} & F(F(I)) \ar@{->}[d]|-{F(in)} \ar@{->}[r]^{F(in)} & F(I) \ar@{->}[d]^{in} \\
I \ar@{-->}[r]_{out} & F(I) \ar@{->}[r]_{in} & I
}
$$
观察该图可得其外侧的长方形亦是交换图，即有 $in \circ F(in) \circ F(out) = in \circ out \circ in$​​​，并将其化简：
$$
\begin{align}
in \circ F(in) \circ F(out) & = in \circ out \circ in \\
F(in) \circ F(out) & = out \circ in \\
F(in \circ out) & = \text{Id}_{F(I)} \\
in \circ out & = \text{Id}_{I}
\end{align}
$$
证得 $in \circ out = \text{Id}_I$，最终使得 $out = in^{-1}$，因此有同构 $F(I) \cong I$​​​​​​​，至此证毕.

而对偶情况，即 terminal coalgebra，由于思路相近，因此证明略.

### 注释 1.6

而透过不动点的方式进行解释，对于 $F\text{-alg}$​ 范畴上 initial algebra $(I, in)$​ 中的 $I \in \mathcal{C}$​，我们可设该 $I = \text{Fix}(F)$​，即变为 $(\text{Fix}(F), in)$​，那么便有态射 $in : F(\text{Fix}(F)) \to \text{Fix}(F)$​ 以及 $out : \text{Fix}(F) \to F(\text{Fix}(F))$​，那么 $I$​ 亦将被称为自函子 $F$​ 的 **smallest fixed point（最小不动点）**.

反之对于 terminal coalgebra $(T, out)$ 则设 $T \in \mathcal{C}$ 为 $T = \text{Fix}(F)$，并且 $T$ 被称为自函子 $F$ 的 **largest fixed point（最大不动点）**.

### 定义 1.7 (Catamorphism / anamorphism)

于 $F\text{-alg}$ 范畴中，对于 initial algebra $(I, in : F(\text{Fix}(F)) \to \text{Fix}(F))$ 到任意 $(A, \alpha : F(A) \to A)$ 的同态，态射 $cata(\alpha) : \text{Fix}(F) \to A$ 被称为 $\alpha$ 的 **catamorphism**，并且依据 *定理 1.5 (Lambek's theorem)*，由于 $F(\text{Fix}(F))$ 与 $\text{Fix}(F)$ 是同构的，便可将 $in$ 反转为其的逆态射 $out$，使得 $cata(\alpha) = \alpha \circ F(cata(\alpha)) \circ out$，令下图交换：

$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkYoXFx0ZXh0e0ZpeH0oRikpIn0seyJwb3NpdGlvbiI6WzAsMl0sInZhbHVlIjoiXFx0ZXh0e0ZpeH0oRikifSx7InBvc2l0aW9uIjpbMiwwXSwidmFsdWUiOiJGKEEpIn0seyJwb3NpdGlvbiI6WzIsMl0sInZhbHVlIjoiQSJ9XSwiZWRnZXMiOlt7ImZyb20iOjEsInRvIjowLCJsYWJlbFBvc2l0aW9uIjoibGVmdCIsInZhbHVlIjoib3V0In0seyJmcm9tIjoyLCJ0byI6MywidmFsdWUiOiJcXGFscGhhIn0seyJmcm9tIjoxLCJ0byI6MywibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwibGluZSI6ImRhc2hlZCIsInZhbHVlIjoiY2F0YShcXGFscGhhKSJ9LHsiZnJvbSI6MCwidG8iOjIsInZhbHVlIjoiRihjYXRhKFxcYWxwaGEpKSJ9XX0=
\xymatrix{
F(\text{Fix}(F)) \ar@{->}[rr]^{F(cata(\alpha))} &  & F(A) \ar@{->}[dd]^{\alpha} \\
 &  &  \\
\text{Fix}(F) \ar@{->}[uu]^{out} \ar@{-->}[rr]_{cata(\alpha)} &  & A
}
$$
对偶地，于 $F\text{-coalg}$​ 范畴中，对于任意 $(A, \alpha : A \to F(A))$​ 到 terminal coalgebra $(T, out : \text{Fix}(F) \to F(\text{Fix}(F)))$​ 的同态，态射 $ana(\alpha) : A \to \text{Fix}(F)$​ 则被称为 $\alpha$​ 的 **anamorphism**，同样地依据 *定理 1.5 (Lambek's theorem)*，使得 $ana(\alpha) = in \circ F(ana(\alpha)) \circ \alpha$​（其中 $in$​ 为 $out$​ 的逆态射），令下图交换：

$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkYoQSkifSx7InBvc2l0aW9uIjpbMiwwXSwidmFsdWUiOiJGKFxcdGV4dHtGaXh9KEYpKSJ9LHsicG9zaXRpb24iOlswLDJdLCJ2YWx1ZSI6IkEifSx7InBvc2l0aW9uIjpbMiwyXSwidmFsdWUiOiJcXHRleHR7Rml4fShGKSJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJ2YWx1ZSI6IkYoYW5hKFxcYWxwaGEpKSJ9LHsiZnJvbSI6MiwidG8iOjAsInZhbHVlIjoiXFxhbHBoYSJ9LHsiZnJvbSI6MywidG8iOjEsInZhbHVlIjoiaW4iLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjIsInRvIjozLCJ2YWx1ZSI6ImFuYSIsImxpbmUiOiJkYXNoZWQiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifV19
\xymatrix{
F(A) \ar@{->}[rr]^{F(ana(\alpha))} &  & F(\text{Fix}(F)) \ar@{->}[dd]^{in} \\
 &  &  \\
A \ar@{-->}[rr]_{ana} \ar@{->}[uu]^{\alpha} &  & \text{Fix}(F)
}
$$
{% end %}