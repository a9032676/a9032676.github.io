+++
title = "群论中的特殊构造 - 群直积, 自由积, 半直积与群扩张"
date = 2023-12-06
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

正如同数可以做乘法般, 将此概念推广则可将一些群乘起来, 这样子我们便能方便地构造一些新的群/分解既有的群.

## 1. 群直积

### 注释

无论是幺半群直积还是群直积, 它们无非皆为幺半群范畴 $\op{Mon}$ 或群范畴 $\Grp$ 中的其中一种泛构造, 即范畴积.

### 定义 1.1 (幺半群与群的直积)

设 $I$ 为指标集, 且 $(M_i)_{i \in I}$ 为一族以 $I$ 为指标的幺半群 (非空), 则：

- $\displaystyle \b{\prod_{i \in I} M_i, \cdot}$ 构成幺半群, 称为一族幺半群 $(M_i)_{i \in I}$ 的 **幺半群直积 (direct product of monoid)**;

- 其中的二元运算定义为 $\begin{align}
  \left( \prod_{i \in I} M_i \right) \times \left( \prod_{i \in I} M_i \right) & \overset{\cdot}{\to} \left( \prod_{i \in I} M_i \right) \\
  (x_i)_{i \in I} \cdot (y_i)_{i \in I} & \mapsto (x_i y_i)_{i \in I}
  \end{align}$;

- $\displaystyle \prod_{i \in I} M_i$ 的幺元定义为 $(1)_{i \in I}$;

- 若 $(x_i)_{i \in I}$ 中每个 $x_i$ 皆可逆, 即 $(x_i)^{-1}_{i \in I} \coloneqq (x_i^{-1})_{i \in I}$, 则称 $\displaystyle \prod_{i \in I} M_i$ 为一族群 $(M_i)_{i \in I}$ 的 **群直积 (direct product of group)**.

且对任意指标 $j \in I$, 我们可定义 **投影同态 (projective homomorphism)**, 或称 **自然投射 (natural projections)**, 为以下幺半群 / 群同态：
$$
\begin{align}
\prod_{i \in I} M_i & \overset{p_j}{\to} M_j \\
(x_i)_{i \in I} & \mapsto x_j
\end{align}
$$
有限个幺半群 / 群 $M_1, \dots, M_n$ 的直积亦被记为 $M_1 \times \dots \times M_n$.

### 引理 1.2 (直积的泛性质)

设 $I$ 为指标集, 并且 $\displaystyle \prod_{i \in I} M_i$ 幺半群直积, 则对于任意幺半群 $M'$ 以及一族同态 $\varphi_j : M' \to M_i$, 存在唯一的 $\varphi : M' \to M$ 使得以下图表交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6Ik0nIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiXFxwcm9kX3tpIFxcaW4gSX0gTV9pIn0seyJwb3NpdGlvbiI6WzEsMV0sInZhbHVlIjoiTV9qIn1dLCJlZGdlcyI6W3siZnJvbSI6MSwidG8iOjIsInZhbHVlIjoicF9qIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjowLCJ0byI6MSwidmFsdWUiOiJcXGV4aXN0cyAhIFxcdmFycGhpIiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjowLCJ0byI6MiwidmFsdWUiOiJcXHZhcnBoaV9qIn1dfQ==
\xymatrix{
M' \ar@{->}[d]_{\exists ! \varphi} \ar@{->}[rd]^{\varphi_j} &  \\
\displaystyle \prod_{i \in I} M_i \ar@{->}[r]_{p_j} & M_j
}
$$
对每个 $j$ 皆可交换, 即 $\Forall{j \in I} \varphi_j = p_j \circ \varphi$.

##### 证明

对于任意 $x \in M'$, 则 $\varphi$ 的唯一取法为 $\varphi(x) = (\varphi_i(x))_{i \in I}$, 使得 $\varphi(x)$ 构成同态.

### 例子 1.3 ($\R^2, (\Z/2\Z)^n$)

- 我们知道实数集 $\R$ 连同它的加法会构成群, 而 $\R^2 = \R \times \R$ 亦类似的, 其中的加法操作被定义为 $\Map{+}{\R^2 \times \R^2}{\R^2}{(a, b) + (c, d)}{(a + b, c + d)}$, 零元为 $(0,0)$ 而逆元则为 $(-a, -b)$.

- 我们知道二进制里的数字都是逢二进一的, 并且只能用 $0$ 或 $1$ 表示, 而于群论中思考二进制问题一个更有益的想法是, 考虑由 $n$ 个 $\Z/2\Z$ 所组成的群直积：
  $$
  (\Z/2\Z)^n = \underbrace{\Z/2\Z \times \cdots \times \Z/2\Z}_{\text{$n$ 次}}
  $$
  则 $(\Z/2\Z)^n$ 里面的元素恰好为 $n$ 位二进制, 而该群的二元操作则可视为按位异或, 例如当 $n = 8$ 时 $(01011101) + (01001011) = (00010110)$, 为了方便起见该 $8$-元组中的逗号我们省略掉. 该群于计算机领域或密码学中占据着重要的地位.

### 定理 1.4 (群直积中元素的阶)

设有群直积中的元素 $(g, h) \in G \times H$, 则 $|(g, h)| = \text{lcm}(|g|, |h|)$.

##### 证明

令 $|(g, h)| = n$, 即要证当存在最小正整数 $n \in \Z^+$ 使得 $(g, h)^n = 1_{G \times H}$ 时, 则 $n = \op{lcm}(|g|, |h|)$：

由于 $(g, h)^n = (g^n, h^n) = (1_G, 1_H) = 1_{G \times H}$, 因此我们知道 $g^n = 1_G$ 以及 $h^n = 1_H$, 而由它们又必然有 $|g| \mid n$ 和 $|h| \mid n$ 因此 $n$ 为它们的公倍数, 再由 $n$ 的最小性当然就得知它必然为 $|g|, |h|$ 的最小公倍数, 因此 $n = \op{lcm}(|g|, |h|)$ 成立.

### 例子 1.5 (克莱因四元群)

我们定义 $V \coloneqq \Z/2\Z \times \Z/2\Z$ 为 **克莱因四元群 (Klein four-group)**, 可以发现虽然它与 $\Z/4\Z$ 的阶都是 $4$, 然而这两者并不同构, 这是因为 $V$ 中任意元素的阶都是 $2$, 例如 $(a, b) + (a, b) = 0$, 然而 $\Z/4\Z$ 是 $4$ 阶循环群, 即其内的元素只能当 $4(a, b) = (4a, 4b)$ 时方可归 $0$, 因此 $\Z/4\Z$ 与 $V$ 并不同构. 事实上 $V$ 又是最小的非循环群.

### 推论 1.6 (由多个群组成的直积中元素的阶)

设 $I$ 为指标集, 且 $(G_i)_{i \in I}$ 为 $n$ 个以 $I$ 为指标的群 (非空), 则 $(g_1, \ldots, g_n) \in \displaystyle \prod_{i = 1}^n G_i$ 的阶为 $\op{lcm}(|g_1|, \ldots, |g_n|)$.

### 例子 1.7 ($\Z/12\Z \times \Z/60\Z$ 中元素的阶)

当有了上述的 [定理 1.4](#定理_1.4_(群直积中元素的阶)) 与 [推论 1.5](#推论_1.6_(由多个群组成的直积中元素的阶)), 我们可以很轻易地计算出群直积的阶, 例如对于 $(8, 56) \in \Z/12\Z \times \Z/60\Z$, 由于 $|(8, 56)| = \op{lcm}(|8|, |56|)$, 而：

- $\gcd(8, 12) = 4$, 因此 $|8| = 12/4 = 3$;
- $\gcd(56, 60) = 4$, 又得 $|56| = 60/4 = 15$.

所以 $\op{lcm}(|8|,|56|) = \op{lcm}(3, 15) = 15$, 即 $|(8, 56)| = 15$.

### 例子 1.8 ($\Z/2\Z \times \Z/3\Z$)

虽然我们从 [例子 1.5](#例子_1.5_(克莱因四元群)) 中就已经知道克莱因四元群 $\Z/2\Z \times \Z/2\Z$ 并不同构于 $\Z/4\Z$, 然而 $\Z/2\Z \times \Z/3\Z \simeq \Z/6\Z$, 只需取生成元为 $(1, 1)$ 即可.

更进一步地, 我们如果可以确认对于任意一个模 $n$ 同余加法群何时可以被拆分为两个模同余加法群的直积, 则可以简化对同余群的研究, 因此引入以下命题.

### 定理 1.9 (对 $\Z/mn\Z$ 拆分为群直积)

设有正整数 $m, n$, 则 $\Z/m\Z \times \Z/n\Z \simeq \Z/mn\Z$ 当且仅当 $\gcd(m, n) = 1$.

##### 证明

由于 $\Z/mn\Z$ 本就是循环群, 若要证 $\Z/m\Z \times \Z/n\Z$ 与其不同构, 则只需证明假设当 $\gcd(m, n) > 1$ 时 $\Z/m\Z \times \Z/n\Z$ 不为循环群：

注意到由于 $\Z/mn\Z$ 循环, 其中元素的阶只能为 $mn$, 因此则只须找到一个比 $mn$ 更小的正整数 $d$ 使得对任意 $(a, b) \in \Z/m\Z \times \Z/n\Z$ 都有 $(a, b)d = (ad, bd) = 0$ 即可. 而由于 $\gcd(m, n) \mid m$ 以及 $\gcd(m, n) \mid n$, 且 $\displaystyle \frac{mn}{\gcd(m, n)}$ 可同时被 $m$ 与 $n$ 整除, 因此：
$$
(a, b) \cdot \frac{mn}{\gcd(m, n)} = \b{a \cdot \frac{mn}{\gcd(m, n)}, b \cdot \frac{mn}{\gcd(m, n)}} = 0
$$

### 推论 1.10 (对 $\displaystyle \prod_{i = 1}^k \Z/n_i \Z$ 拆分为群直积)

若 $n_1, \ldots, n_k$ 为正整数, 则 $\displaystyle \prod_{i = 1}^k \Z/n_i \Z \simeq \Z/n_1 \cdots n_k \Z$ 当且仅当对任意 $1 \leq i < j \leq k$ 有 $\gcd(n_i, n_j) = 1$.

### 注释

另一方面, 由整数因子分解, 对任意一个整数 $n \in \Z$ 当然都可以分解为有限个不同的素数 $p_i$ (其中对每个 $p_i$ 分别拥有不同的指数 $e_i$) 的乘积, 即 $n = {p_1}^{e_1} \cdots {p_k}^{e_k}$, 因此由上述推论我们知道有：
$$
\Z/{p_1}^{e_1} \cdots {p_k}^{e_k} \Z \simeq \displaystyle \prod_{i = 1}^k \Z/{p_i}^{e_i}\Z = \Z/{p_1}^{e_1}\Z \times \cdots \times \Z/{p_k}^{e_k}\Z
$$

## 2. 自由积

### 注释

范畴积的对偶结构为范畴余积, 于群论中我们依然有相关构造, 称之为自由积. 然而于其他范畴中, 例如集合范畴 $\Sets$ 那般, 集合的余积为不交并, 然而自由积的基础集却不是不交并, 究其原因是诸如 $\Grp, \Ring, \Vect$ 这些范畴皆为 **代数范畴 (algebraic category)**, 这里的定义不详细展开, 让我们回到正题.

### 定义 2.1 (自由积)

设 $I$ 为指标集, 给定一对群 $G_1, G_2 \in \Grp$, 或更广义的说有一族群构成的 $n$-元组 $(G_1, G_2, \ldots, G_n)$：

- 定义有态射 $\Map{\star}{\Ob\Grp \times \Ob\Grp}{\Ob\Grp}{(G_1, G_2)}{G_1 \star G_2}$, 或更广义的说定义 $\Map{\star_i}{\Ob\Grp \times \cdots \times \Ob\Grp}{\Ob\Grp}{(G_1, G_2, \ldots, G_n)}{ \underset{i \in I}{\star}\ G_i}$;
- 我们称上述的 $G_1 \star G_2$ 或 $\star_i\ G_i$ 为群的 **自由积 (free product)**, 当它们是 $\Grp$ 中的余积, 即 $\star_i\ G_i \simeq \coprod_i G_i \in \Grp$.

### 注释 (拓展为融合自由积)

我们知道自由群是由给定的集合自由地生成一个群, 而之所以自由积会带有 "自由" 二字亦是类似的原因. 例如考虑固定一个群 $H \in \Grp$, 且携带一族单同态 (内射) $\iota_i : H \to G_i$, 那么便可以从 $H$ 自由地生成出一族群的自由积, 即引入以下概念：

### 定义 2.2 (合并自由积)

设有群 $G_1, G_2, H \in \Grp$ 及一对同态 $\iota_1 : H \to G_1$ 和 $\iota_2 : H \to G_2$：

- 称 $G_1 \star_A G_2 \in \Grp$ 为群的 **合并自由积 (amalgamated free product)**, 当其同构于 $G_1, G_2$ 沿 $H$ 推出, 即 $G_1 \star_A G_2 \simeq G_1 \underset{H}{\sqcup} G_2 \in \Grp$;
- 或更广义地对一族群 $\set{G_i}_{i \in I}$ 及单同态 $\iota_i : H \to G_i$, 则应满足 $\displaystyle {\star_A}_i\ G_i \simeq \underset{H}{\coprod} G_i \in \Grp$.

### 注释

- 只要我们对上述 $\iota_i : H \to G_i$ 的 $H$ 取为平凡群, 那么由 $H$ 所 "生成" 的合并自由积则会退化到原始的自由积.

- 事实上合并自由积满足了泛性质, 具体地说若有：

  - 投射同态 $p_1 : G_1 \to G_1 \star_A G_2$ 及 $p_2 : G_2 \to G_1 \star_A G_2$;
  - 对任意群 $Q$ 都有 $f_1 : G_1 \to Q$ 及 $f_2 : G_2 \to Q$.

  则存在唯一同态 $G_1 \star_A G_2 \to Q$, 使以下图表交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IkgifSx7InBvc2l0aW9uIjpbMSwwXSwidmFsdWUiOiJHXzEifSx7InBvc2l0aW9uIjpbMSwyXSwidmFsdWUiOiJHXzIifSx7InBvc2l0aW9uIjpbMiwxXSwidmFsdWUiOiJHXzEgXFxzdGFyX0EgR18yIn0seyJwb3NpdGlvbiI6WzMsMV0sInZhbHVlIjoiUSJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJ2YWx1ZSI6IlxcaW90YV8xIiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6MCwidG8iOjIsInZhbHVlIjoiXFxpb3RhXzIiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjoxLCJ0byI6MywibGFiZWxQb3NpdGlvbiI6Imluc2lkZSIsInZhbHVlIjoicV8xIn0seyJmcm9tIjoyLCJ0byI6MywidmFsdWUiOiJxXzIiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjoxLCJ0byI6NCwiYmVuZCI6MzAsInZhbHVlIjoiZl8xIiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6MiwidG8iOjQsImJlbmQiOi0zMCwidmFsdWUiOiJmXzIiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjozLCJ0byI6NCwibGluZSI6ImRhc2hlZCJ9XX0=
  \xymatrix{
   & G_1 \ar@{->}[rd]|-{q_1} \ar@/^/@{->}[rrd]|-{f_1} &  &  \\
  H \ar@{->}[ru]|-{\iota_1} \ar@{->}[rd]|-{\iota_2} & (\text{PO}) & G_1 \star_A G_2 \ar@{-->}[r] & Q \\
   & G_2 \ar@{->}[ru]|-{q_2} \ar@/_/@{->}[rru]|-{f_2} &  & 
  }
  $$

### 例子 2.3 (自由群为合并自由积的特殊实例)

例如对任意 $S \in \Sets$, 由 $S$ 所生成的自由群事实上等价于复制 $|S|$ 次整数加法群的自由积 $F(S) \simeq \star_S\ \Z$.

更为抽象的说, 对于自由-遗忘函子伴随对 $\xymatrix@C+0pc{
\mathcal{\Sets} \rtwocell<6>^{F}_{U}{' \large\bot} & \Grp
}$, 我们有以下性质：

1. 左伴随函子 $F$ 保有余极限, 自由积无非又是 $\Grp$ 中的余积, 即 $F\b{\varinjlim X_i} = \varinjlim(F(X_i))$;
2. 任意的集合皆可视为为以 $s \in S$ 作为指标所给定的, 复制了 $|S|$ 次独点集 $* \in \Sets$ 的余积;
3. 于独点集上的自由群就仅仅只是整数加法群 $\Z$.

于是乎我们有 $\displaystyle F(S) \simeq F\b{\coprod_{s \in S} *} \simeq \coprod_{s \in S}(F(*)) \simeq \coprod_{s \in S} \Z \simeq \underset{s \in S}{\star}\ \Z$.

### 注释 (自由积的群表示)

若对所有的群 $G_i$ 都有群表示, 则它们的自由积 $\star_i\ G_i$ 亦有以下群表示, 我们设 $G_i = \lang S_i \mid R_i \rang = F_i/N_i$, 其中：

- 对每个 $F_i = \lang S_i \rang$ 皆为由 $S_i$ 所生成的自由群;
- 对每个 $N_i \lhd F_i$ 则是由 $R_i \sub F_i$ 所生成的 (注意自由群的子群仍为自由群).

那么则有 $G_i$ 的自由积 $\star_i\ G_i \coloneqq \displaystyle \left\langle \coprod_i S_i \mid \coprod_{i} R_i \right\rangle = (\star_i\ F_i) \bigg/\b{\bigcup_{i} N_i}$.

## 3. 半直积与群扩张初步

### 注释

于群论的研究中, 我们有一个比群直积更为复杂, 然而更富弹性的结构, 称之为半直积, 它是直积的推广, 而其又分为以下两个版本：

- 外半直积：一般用作从任意两个群 $N, H$ 构造出一个新的群 $G$, 而 "外" 的含义表示群 $N, H$ 不一定是 $G$ 的子群, 可以是来自于外界任意的群.
- 内半直积：一般用作将某个群 $G$ 分解 (或分裂) 为一个正规子群 $N$ 及一个子群 $H$.

事实上在后续我们会看到上述两者是等价的, 接下来我们给出它们的具体定义.

### 定义 3.1 (内半直积)

设有群 $G$, 及正规子群 $N \lhd G$, 子群 $H < G$, 若满足了以下任一条件：

1. $G = NH$ 且为了保证当中元素写法唯一, 须加上条件 $N \cap H = \set{ 1_G }$;
2. 任意 $G$ 中的元素 $g \in G$ 可以唯一地表示为标准形 $nh$, 其中 $n \in N, h \in H$;
3. 设有自然嵌入 $H \to G$ 及投影 $G \to G/N$, 则 $H \simeq G/N$;
4. 存在同态 $f : G \to H$, 且 $\Ker{f} = N$ 而 $\Im{f} = H$.

则称群 $G$ 为 $N$ 与 $H$ 的一个 **内半直积 (internal semidirect product)**, 或称 $G$ 在 $N$ 上 **分裂 (split)**.

### 注释

注意到若 $G$ 为 $N \lhd G$ 与 $H < G$ 的内半直积, 则它的阶 $|G| = |N| \cdot |H|$.

### 定义 3.2 (外半直积)

设有群 $H$, 那么当 $H$ (左) 作用于群 $N$ 的自同构群 $\Aut(N)$ 时, 即有同态 $\alpha : H \to \Aut(N)$, 并且：

- 以 $N \times H$ 作为基础集;
- 定义有二元运算 $\Map{\cdot}{(N \times H) \times (N \times H)}{(N \times H)}{\b{(n, h), (n', h')}}{(n \alpha(h)(n'), hh')}$;
- 幺元被定义为 $(1_N, 1_H)$;
- 逆元被定义为 $(n, h)^{-1} = (\alpha(h^{-1})(n^{-1}), h^{-1})$.

则 $(N \times H, \cdot)$ 构成群, 称其为 **外半直积 (external semidirect product)**, 记为 $N \rtimes H$.

### 注释

- 我们可将 $N, H$ 视为 $N \rtimes H$ 的子群, 例如考虑同构 $\Map{\sim}{N}{N \rtimes H}{n}{(n, 1_H)}$ 以及 $\Map{\sim}{H}{N \rtimes H}{h}{(1_N, h)}$. 此外我们还注意到当 $(n, 1_H) = (1_N, h)$, 则只能取 $n = 1_N$ 及 $h = 1_H$, 换句话说即 $N \cap H = \set{1_{N \cap H}}$.
- 而从二元运算的定义则直接可得 $N \lhd (N \rtimes H)$, 它是 $N \lhd \cdots$ 的变形.
- 只要同态 $\alpha$ 平凡, 则 $N \rtimes H$ 自动退化为 $N \times H$. 需要注意的是 $N \times H$ 与 $H \times N$ 是无任何区别的, 它们两者同构, 而对于半直积则不然, 这是由于其中之一为正规子群, 地位不同.

### 引理 3.3 (将给定的群描述为半直积)

设 $G$ 为群, 子群 $N, H < G$ 且 $H \sub N_G(N)$, 定义同态 $\Map{\alpha}{H}{\Aut(N)}{h}{\text{Ad}_h |_N}$, 则：

1. 映射 $\Map{\mu}{N \rtimes H}{G}{(n, h)}{nh}$ 为同态;
2. $\mu$ 为同构 $\iff$ $G$ 为内半直积.

##### 证明

1. 对任意 $(n, h), (n', h') \in N \rtimes H$, 则：
   $$
   \mu\b{(n, h) \cdot (n', h')} = \mu\b{ n \alpha(h)(n'), hh' } = n \alpha(h)(n')hh' = n(hn'h^{-1})hh' = nhn'h' = \mu((n,h)) \cdot \mu\b{(n', h')}
   $$
   就证得 $\mu$ 的确为群同态.

2. 只证 $(\Rightarrow)$, 当 $\mu$ 为同构时, 对任意 $(n, h) \in N \rtimes H$ 皆可直接表示为 $nh$, 且该种表示与 $G$ 中元素一一对应, 因此 $G = NH$ 是显然的, 而由于我们知道当 $H \sub N_G(N)$ 时就有 $NH = HN < G$, 那么对任意 $n \in N$ 以及 $h \in H$, 注意到：
   $$
   nhn^{-1}h^{-1} \in (nHn^{-1})H \cap N(hNh^{-1})
   $$
   那么由正规化子的条件, 则可得知 $H \cap N = \set{1_G}$.

### 注释

- 对群 $G$ 中的任意子集 $E$, 我们定义 $N_G(E) \coloneqq \set{ g \in G : g E g^{-1} = E }$, 称为 $G$ 的正规化子.
- 由于 $H \sub N_G(N)$ 意味着 $hNh^{-1} = N$, 我们可以将伴随同构 $\Map{\text{Ad}_h}{N}{N}{n}{hnh^{-1}}$ 限制于 $N$ 内, 因此有 $\text{Ad}_h |_N(n) = hnh^{-1} \in N$.
- 于证明的最后我们知道 $nhn^{-1}h^{-1} \in H \cap N = \set{1_G}$, 这意味着对任意 $n \in N, h \in H$, 我们可以交换子群 $N$ 与 $H$ 之间的元素, 即 $nh = hn$.
- 由于上述的 $(2)$ 证明了群的内/外半直积是同构的, 因此可以简单地合称为 **半直积 (semidirect product)**.

### 例子 3.4 (二面体群)

设 $n \in \Z_{\geq 0}$, 取循环群 $N \coloneqq \Z/n\Z, H \coloneqq \Z/2\Z$ (注意它们的二元运算皆须写为加法), 且定义 $\Z/2\Z$ 作用于 $\Aut(\Z/n\Z)$ 的同态为 $\begin{align}
\Z/2\Z & \overto{\alpha} \Aut(\Z/n\Z) \\
\overline{0} & \mapsto \bb{x \mapsto x} \\
\overline{1} & \mapsto \bb{x \mapsto -x}
\end{align}$, 则有同构 $\Z/2\Z \rtimes \Z/n\Z \simeq D_{2n}$, 其中的 $D_{2n}$ 称之为 **二面体群 (dihedral group)**, 其阶为 $2n$, 几何上观察即由固定于平面上的正 $n$ 边形的所有刚体运动组成, 包含了旋转与沿轴镜像反射两种操作, 其中若将 $\Z/n\Z$ 视为商群, 则陪集 $k + n \Z$ 的转角为 $\frac{2 \pi k}{n}$.

### 注释

- 事实上 $G = NH \simeq N \rtimes H$ 是一体两面的结构, $NH$ 依赖于 $G$ 内部的乘法而 $N \rtimes H$ 整个构造过程都是从外部而来的, 即 $N$ 与 $H$ 无须为 $G$ 的子群.
- [引理 3.3](#引理_3.3_(将给定的群描述为半直积)) 中当 $G \simeq N \rtimes H$ 时意味着将 $G$ 分解为它的两个子群, 而这个结论可以推广至多个子群的版本, 我们接下来给出.

### 推论 3.5 (内直积分解)

设有群 $G$ 的子群族 $\set{H_i}_{i \in I}$, 假设：

- $\Forall{i \in I} H_i \lhd G$;
- $\Forall{i \in I} H_i \cap (H_1 \cdots \widehat{H_i} \cdots H_n) = \set{ 1 }$, 其中 $\widehat{\cdots}$ 表示略去该项.

则 $H_i, H_j$ ($i \neq j$) 对乘法交换, 因此 $H_1 \cdots H_n$ 仍为 $G$ 的正规子群, 所以有以下同构, 称为内直积分解：
$$
\Map{\sim}{\prod_{i = 1}^n H_i}{G = H_1 \cdots H_n}{(h_1, \ldots, h_n)}{h_1 \cdots h_n}
$$

##### 证明

于 [引理 3.3](#引理_3.3_(将给定的群描述为半直积)) 已然给出 $n = 2$ 的情况, 由此可推出对任意子列 $1 \leq i_1 < \cdots < i_m \leq n$, 乘积 $H_{i_1} \cdots H_{i_m}$ 仍为正规子群, 对 $n$ 只须归纳地应用即可.

### 注释

接下来将简略地提及关于上述半直积于群扩张中的体现, 点到即止.

### 定义 3.6 (正合列)

考虑以下一列长度有限或无限的群同态：
$$
\cdots \overset{f_0}{\longrightarrow} G_1 \overset{f_1}{\longrightarrow} G_2 \overset{f_2}{\longrightarrow} \cdots \overset{f_i}{\longrightarrow} G_{i+1} \longrightarrow \cdots
$$
若对所有指标 $i$ 都满足 $\Im{f_i} = \Ker{f_{i + 1}}$, 则称上述序列为 **正合的 (exact)**, 其中又称形如：
$$
1 \longrightarrow G_1 \longrightarrow G_2 \longrightarrow G_3 \longrightarrow 1
$$
的正合列为 **短正合列 (short exact sequence)**.

### 注释

- 我们通常以 $0$ 代表平凡群, 或以乘法记号 $1$ 表示亦可, 这主要取决于正合列上的群究竟是哪种.
- 若需要逐个验证 $\Im{f_i} = \Ker{f_{i + 1}}$ 则会显得非常麻烦, 因此我们有一些简易的判断手段得知其中的部分是否正合.

### 命题 3.7 (正合列的基本性质)

设置 $G, G'$ 为群及同态 $\varphi : G \to G'$, 则：

1. 序列 $G \overto{\varphi} G' \to 1$ 正合 $\iff$ $\varphi$ 是满的;
2. 序列 $1 \to G \overto{\varphi} G'$ 正合 $\iff$ $\varphi$ 是单的;
3. 序列 $1 \to \Ker{\varphi} \overto{\sub} G \overto{\varphi} \Im{G} \to 1$ 是正合的.

##### 证明

1. 若 $G \to G' \to 1$ 正合, 则有 $\Im{\varphi} = \Ker{G' \to 1}$, 显然 $\Ker{G' \to 1} = G'$, 那么即有 $\Im{\varphi} = G'$ 易见 $\varphi$ 是满的, 反之亦然.
2. 若 $1 \to G \to G'$ 正合, 则有 $\Im{1 \to G} = \Ker{\varphi}$, 显然 $\Im{1 \to G} = 1$, 因此 $\Ker{\varphi} = 1$ 意味着 $\varphi$ 是单的, 反之亦然.
3. 利用 $(2)$ 可知 $1 \to \Ker{\varphi} \overto{\sub} G$ 是正合的, 同样地利用 $(1)$ 得知 $G \overto{\varphi} \Im{G} \to 1$ 是正合的, 而当然中间部分 $\Ker{\varphi} \overto{\sub} G \overto{\varphi} \Im{G}$ 也是正合的, 因为 $\Im{\sub}$ 无非就是将 $\Ker{\varphi}$ 嵌入至 $G$ 中, 因此 $\Im{\sub} = \Ker{\varphi}$ 就证得了该列确实为正合列.

### 注释

- 上述命题的 $(1)$ 与 $(2)$ 恰好说明了一个短正合列 $1 \to N \overto{i} G \overto{p} H \to 1$ 是正合的当且仅当 $i$ 是单的, $p$ 是满的, 且 $\Im{i} = \Ker{p}$.
- 而对于 $1 \to N \overto{i} G \overto{p} H \to 1$ 这一正合列, 由于 $i$ 单且 $\Im{i} = N = \Ker{p}$, 可将 $N$ 视为是嵌入到 $G$ 中的正规子群 (任何群的核都是正规的), 另一方面 $p$ 满, 因此由商群的泛性质又可得知 $G/N \simeq H$.
- 所以于群论的语境下, 通常上述这样子的短正合列又被称为 **群扩张 (group extension)**.

### 定理 3.8 (群扩张等价)

若有以下关于群同态的图表可交换, 且横行皆为群扩张：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IjEifSx7InBvc2l0aW9uIjpbMSwwXSwidmFsdWUiOiJOIn0seyJwb3NpdGlvbiI6WzIsMF0sInZhbHVlIjoiRyJ9LHsicG9zaXRpb24iOlszLDBdLCJ2YWx1ZSI6IkgifSx7InBvc2l0aW9uIjpbNCwwXSwidmFsdWUiOiIxIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiMSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6Ik4ifSx7InBvc2l0aW9uIjpbMiwxXSwidmFsdWUiOiJHJyJ9LHsicG9zaXRpb24iOlszLDFdLCJ2YWx1ZSI6IkgifSx7InBvc2l0aW9uIjpbNCwxXSwidmFsdWUiOiIxIn1dLCJlZGdlcyI6W3siZnJvbSI6MiwidG8iOjcsInZhbHVlIjoiXFx2YXJwaGkiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjoxLCJ0byI6MiwidGFpbCI6Imhvb2siLCJ2YWx1ZSI6ImkifSx7ImZyb20iOjIsInRvIjozLCJ2YWx1ZSI6InAiLCJ0YWlsIjoibm9uZSIsImhlYWQiOiJ0d29oZWFkcyJ9LHsiZnJvbSI6MywidG8iOjR9LHsiZnJvbSI6NywidG8iOjgsInZhbHVlIjoicCciLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQiLCJoZWFkIjoidHdvaGVhZHMifSx7ImZyb20iOjgsInRvIjo5fSx7ImZyb20iOjMsInRvIjo4LCJsaW5lIjoiZG91YmxlIiwiaGVhZCI6Im5vbmUifSx7ImZyb20iOjEsInRvIjo2LCJsaW5lIjoiZG91YmxlIiwiaGVhZCI6Im5vbmUifSx7ImZyb20iOjAsInRvIjoxfSx7ImZyb20iOjUsInRvIjo2fSx7ImZyb20iOjYsInRvIjo3LCJ0YWlsIjoiaG9vayIsInZhbHVlIjoiaSciLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifV19
\xymatrix{
1 \ar@{->}[r] & N \ar@{^{(}->}[r]^{i} \ar@{=}[d] & G \ar@{->}[d]|-{\varphi} \ar@{->>}[r]^{p} & H \ar@{->}[r] \ar@{=}[d] & 1 \\
1 \ar@{->}[r] & N \ar@{^{(}->}[r]_{i'} & G' \ar@{->>}[r]_{p'} & H \ar@{->}[r] & 1
}
$$
则其中的 $\varphi$ 必为同构.

##### 证明

证明方法共有两种, 分别为：

- 群论中的常规做法：

  由上述注释的讨论中我们知道 $N \lhd G$ 及 $N \lhd G'$, 并且知道 $G/N \simeq H \simeq G'/N$, 由此我们知道 $G/N$ 与 $G'/N$ 之间是双射, 所以对任意 $a \in G$ 则存在 $b \in G'$ 使得 $G/N \ni aN = bN \in G'/N$, 反之亦然, 因此 $GN = G'N$, 再加上 $N \sub G$ 且 $N \sub G'$ 则意味着 $G = G'$, 而 $\varphi$ 本就是同态因此其为同构.

- 透过交换图表追踪：

  这事实上可以直接由同调代数中的短五引理 (五引理置于短正合列的版本) 直接证得, 又或者详细地说可以分别证明：

  - $\varphi$ 是单射, 假设固定任意元素 $g \in G$, 且设 $\varphi(g) = 1$, 则 $g = 1$：

    由于 $\varphi(g) = 1$, 那么 $p'(\varphi(g)) = 1$, 由 $\vcenter{\xymatrix{
    G \ar@{->}[d]|-{\varphi} \ar@{->>}[r]^{p} & H \ar@{=}[d] \\
    G' \ar@{->>}[r]_{p'} & H
    }}$ 交换得知 $p(g) = p'(\varphi(g)) = 1$, 因此 $g \in \Ker{p} = \Im{i}$, 那么则有 $\Exists{n \in N} i(n) = g$. 此外由于 $p'(\varphi(g)) = 1$ 意味着 $\varphi(g) \in \Ker{p'} = \Im{i'}$, 则 $\Exists{n' \in N} i'(n') = \varphi(g) = 1$, 再由 $\vcenter{\xymatrix{
    N \ar@{^{(}->}[r]^{i} \ar@{=}[d] & G \ar@{->}[d]|-{\varphi} \\
    N \ar@{^{(}->}[r]_{i'} & G'
    }}$ 交换则得 $i'(n') = \varphi(i(n)) = 1$, 这意味着 $n = n'$, 而 $i'$ 又是单射, 因此 $N = 1$, 最终就得到 $i(n) = g = 1$.

  - $\varphi$ 是满射, 即 $\Forall{g' \in G'} \Exists{g \in G} \varphi(g) = g'$：

    假设对任意 $g' \in G'$, 由 $p$ 为满射可得 $\Forall{h \in H} \Exists{x \in G} p(x) = h$, 因此 $p(x) = p'(g') \in H$, 而由于 $\vcenter{\xymatrix{
    G \ar@{->}[d]|-{\varphi} \ar@{->>}[r]^{p} & H \ar@{=}[d] \\
    G' \ar@{->>}[r]_{p'} & H
    }}$ 交换又得：
    $$
    p'(\varphi(x)) = p(x) = p'(g') \in H
    $$
    然而我们知道 $p'$ 本为群同态, 因此移项后得 $p'\b{\varphi(x) \cdot g'^{-1}} = 1$, 由正合性我们又知道 $\varphi(x) \cdot g'^{-1} \in \Ker{p'} = \Im{i'}$, 那么就存在 $n \in N$ 使得 $i'(n) = \varphi(x) \cdot g'^{-1}$, 而再由 $\vcenter{\xymatrix{
    N \ar@{^{(}->}[r]^{i} \ar@{=}[d] & G \ar@{->}[d]|-{\varphi} \\
    N \ar@{^{(}->}[r]_{i'} & G'
    }}$ 交换得 $i'(n) = \varphi(i(n))$, 因此对 $\varphi(x) \cdot g'^{-1} = \varphi(i(n))$ 移项后得 $\varphi \b{x i(n)^{-1}} = g'$.

### 定义 3.9 (分裂扩张)

群扩张 $1 \to N \overto{i} G \overto{p} H \to 1$ 被称为 **分裂的 (split)** 当存在截面同态 $s : H \to G$ 使得 $p \circ s = \id_H$.

### 注释

现在我们可以建立起群扩张与半直积的联系, 例如以下的命题.

### 命题 3.10 (分裂扩张与半直积)

1. 设 $G = N \rtimes_\alpha H$ 为半直积, 则存在可裂扩张 $1 \to N \to G \underset{s}{\overset{p}{\rightleftarrows}} H \to 1$, 其中投射同态为 $\Map{p}{N \rtimes_\alpha H}{H}{(n, h)}{h}$, 而包含同态为 $\Map{s}{H}{N \times_\alpha H}{h}{(1_N, h)}$.

2. 反之, 若设有以上的群扩张, 分裂 $s : H \to G$, 以及给定伴随自同构 $\Map{\alpha}{H}{\Aut(G)}{h}{\text{Ad}(s(h))|_G}$, 则有群扩张等价：
   $$
   % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IjEifSx7InBvc2l0aW9uIjpbMSwwXSwidmFsdWUiOiJOIn0seyJwb3NpdGlvbiI6WzIsMF0sInZhbHVlIjoiTiBcXHJ0aW1lc19cXGFscGhhIEgifSx7InBvc2l0aW9uIjpbMywwXSwidmFsdWUiOiJIIn0seyJwb3NpdGlvbiI6WzQsMF0sInZhbHVlIjoiMSJ9LHsicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IjEifSx7InBvc2l0aW9uIjpbMSwxXSwidmFsdWUiOiJOIn0seyJwb3NpdGlvbiI6WzIsMV0sInZhbHVlIjoiRyJ9LHsicG9zaXRpb24iOlszLDFdLCJ2YWx1ZSI6IkgifSx7InBvc2l0aW9uIjpbNCwxXSwidmFsdWUiOiIxIn1dLCJlZGdlcyI6W3siZnJvbSI6MiwidG8iOjcsInZhbHVlIjoiXFx2YXJwaGkiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjoxLCJ0byI6MiwidGFpbCI6Imhvb2siLCJ2YWx1ZSI6ImkifSx7ImZyb20iOjIsInRvIjozLCJ0YWlsIjoibm9uZSIsImhlYWQiOiJ0d29oZWFkcyIsImJlbmQiOjAsInZhbHVlIjoicCJ9LHsiZnJvbSI6MywidG8iOjR9LHsiZnJvbSI6NywidG8iOjgsImxhYmVsUG9zaXRpb24iOiJsZWZ0IiwiaGVhZCI6InR3b2hlYWRzIiwidmFsdWUiOiJwJyIsImJlbmQiOjMwfSx7ImZyb20iOjgsInRvIjo5fSx7ImZyb20iOjMsInRvIjo4LCJsaW5lIjoiZG91YmxlIiwiaGVhZCI6Im5vbmUifSx7ImZyb20iOjEsInRvIjo2LCJsaW5lIjoiZG91YmxlIiwiaGVhZCI6Im5vbmUifSx7ImZyb20iOjAsInRvIjoxfSx7ImZyb20iOjUsInRvIjo2fSx7ImZyb20iOjYsInRvIjo3LCJ0YWlsIjoiaG9vayIsImxhYmVsUG9zaXRpb24iOiJyaWdodCIsInZhbHVlIjoiaScifSx7ImZyb20iOjgsInRvIjo3LCJiZW5kIjozMCwidmFsdWUiOiJzIiwidGFpbCI6Imhvb2sifV19
   \xymatrix{
   1 \ar@{->}[r] & N \ar@{^{(}->}[r]^{i} \ar@{=}[d] & N \rtimes_\alpha H \ar@{->}[d]|-{\varphi} \ar@{->>}[r]^{p} & H \ar@{->}[r] \ar@{=}[d] & 1 \\
   1 \ar@{->}[r] & N \ar@{^{(}->}[r]_{i'} & G \ar@/^/@{->>}[r]^{p'} & H \ar@{->}[r] \ar@/^/@{^{(}->}[l]^{s} & 1
   }
   $$
   并且定义其中的映射为 $\Map{\varphi}{N \rtimes_\alpha H}{G}{(n, h)}{n \cdot s(h)}$.

##### 证明

1. 显然有 $p' \circ s = \id_H$.

2. 事实上由 [定理 3.8](#定理_3.8_(群扩张等价)), 我们只需证明 $\vcenter{\xymatrix{
   N \ar@{^{(}->}[r]^{i} \ar@{=}[d] & N \rtimes_\alpha H \ar@{->}[d]|-{\varphi} \\
   N \ar@{^{(}->}[r]_{i'} & G
   }}$ 与 $\vcenter{\xymatrix{
   N \rtimes_\alpha H \ar@{->}[d]|-{\varphi} \ar@{->>}[r]^{p} & H \ar@{=}[d] \\
   G \ar@/^/@{->>}[r]^{p'} & H \ar@/^/@{^{(}->}[l]^{s}
   }}$ 交换：

   对任意 $(n, h) \in N \rtimes_\alpha H$, 由于 $p'\varphi((n, h)) = p'(ns(h))$, 由 $p'$ 为群同态得 $p'(ns(h)) = p'(n)p'(s(h)) = p'(n)h \in H$, 将该结果透过分裂 $s$ 映射回到 $G$ 则有：
   $$
   s(p'(n)h) = s(p'(n))s(h) = s(h)
   $$
   因此推得 $p'(n)h = h = p((n, h))$, 因此便证得了 $p'\varphi((n,h)) = p((n, h))$.

   另一方面, 对任意 $n \in N$, 我们有 $\varphi(i(n)) = \varphi((n, 1_H)) = n$, 并且由于 $i'$ 为嵌入同态, 因此 $i'(n) = n$ 便得到 $\varphi(i(n)) = i'(n)$, 因此就证得上边两图的交换性.

{% end %}
