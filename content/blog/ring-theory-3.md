+++
title = "环论 3 - 交换环分解"
date = 2024-05-01
draft = false

[taxonomies]
categories = ["抽象代数"]
tags = ["数学", "代数学", "抽象代数", "环论"]

[extra]
lang = "zh"
toc = true
mathjax = true

+++

{% good() %}本文内容已完全施工完毕, 读者可放心阅读！{% end %}

{% important() %}本文最后更新日期：2024-05-01{% end %}

{% mathjax_escape() %}

### 注释

我们在整数环 $\Z$ 上研究的一些数论性质皆可被推广至更广义的代数结构上, 例如：

- 整除性, (最大) 公因数, 素数可被推广至一般的 (含幺) 交换环上.
- 算术基本定理可被抽象并推广为唯一分解环.

然而并不是所有 (含幺) 交换环 $R$ 中的一对元素都必定存在最大公因数, 又或是对每个 $R$ 中的元素都可以被唯一分解的, 除非 $R$ 本身是一个主理想整环. 换句话亦即是说在整除性上, 主理想整环的很好地继承了 $\Z$ 的这些性质 (或直接视作 $\Z$ 的推广).

即便主理想整环 $R$ 中任意一对元素 $a, b \in R$ 皆存在最大公因数 $\gcd(a, b) \in R$, 但这不意味着我们总是可以使用欧几里得算法去求得 $\gcd(a, b)$, 除非 $R$ 本身是个欧几里得环. 而欧几里得整环就是将欧几里得算法抽象而来的一个环, 并且可以证明任意的欧几里得整环都必定是主理想整环 (反之不然).

### 定义 3.1 (整除, 相伴)

设 $R$ 为交换环, 非零元 $a \in R$ 以及 $b \in R$：

- 称 $a$ **整除 (divide)** $b$, 或称 $b$ 是 $a$ 的 **倍数 (multiple)**, 当 $\Exists{x \in R} ax = b$, 并记为 $a \mid b$;
- 称 $a, b$ 是 **相伴的 (associates)**, 或称 $b$ 是 $a$ 的 **相伴元 (associate element)**, 当 $(a \mid b) \and (b \mid a)$.

### 定理 3.2 (整除与相伴的基本性质)

设 $R$ 为含幺交换环以及 $a, b, u \in R$, 下述结论成立：

1. $a \mid b \iff (b) \sub (a)$;
2. $\text{$a, b$ 相伴} \iff (a) = (b)$;
3. $\text{$u$ 是单位} \iff \b{\Forall{r \in R} u \mid r} \iff (u) = R$;
4. $a, b$ 相伴构成等价关系;
5. 若 $\Exists{\text{单位 $u \in R$}} a = bu$, 则 $a, b$ 仍相伴;
6. 若 $R$ 是整环, 那么 $(5)$​ 的逆亦成立.

##### 证明

1. $(\rArr)$ 由于 $R$ 为含幺交换环, 因此 $(b) = bR$, 那么对任意 $br \in bR$ 由 $a \mid b$ 可得 $a \mid br$, 这说明 $\Exists{r' \in R} br = ar' \in aR = (a)$​.

   $(\lArr)$ 由于 $b \in (b) \sub (a)$, 这说明 $\Exists{r \in R} b = ar$.

2. 显然的, 由 $(1)$ 立得.

3. $u$ 是单位当且仅当 $\Exists{v \in R} uv = 1_R$, 这又当且仅当 $\Forall{r \in R} u(vr) = r$, 因此 $u \mid r$.

   另一方面, 而由于单位 $u$ 可整除环 $R$ 中所有元素, 这当且仅当 $\Forall{r \in R} \Exists{r' \in R} r = ur'$, 因而 $R \sub (u)$ 并且 $(u) \sub R$ 是恒有的, 遂得 $(u) = R$, 反之亦然.

4. 若 $a, b$ 相伴, 由 $(2)$ 当且仅当 $(a) = (b)$, 因此集合间的等价显然是个等价关系.

5. 由于 $u \in R$ 是单位, 则 $\Exists{v \in R} uv = 1_R$, 现在对等式 $a = bu$ 两侧分别乘以 $u$ 的逆 $v$ 则得 $av = b$, 连同 $a = bu$ 易知 $a, b$ 是相伴的.

6. 设 $a, b$ 相伴, 那么按定义有 $\Exists{u \in R} a = bu$ 以及 $\Exists{v \in R} b = av$, 将 $b$ 代入前面的等式易得 $a = avu$, 再由 $R$ 是整环, 也就当且仅当 $R$ 中同时满足左/右消除律, 因此得 $vu = 1_R$. 另一方面再将 $a$ 代入后面的等式 $b$ 同样可得 $uv = 1_R$, 因此 $u$ 的确是个单位.


### 定义 3.3 (不可约, 素元)

设 $R$ 为含幺交换环：

- 称 $c \in R$ 是 **不可约的 (irreducible)**, 当 $(\text{$c$ 非零非单位}) \and \b{\Forall{a, b \in R} c = ab \implies \text{$a$ 或 $b$ 是单位}}$.
- 若 $c \in R$ 不是不可约的, 则称之为 **可约的 (reducible)**.
- 称 $p \in R$ 是 **素元 (prime)**, 当 $(\text{$p$ 非零非单位}) \and \b{\Forall{a, b \in R} p \mid ab \implies (p \mid a) \or (p \mid b)}$.

### 例子 3.4

- 考虑整数环 $\Z$, 显然素数 $p$ 与 $-p$ 皆是该环中的素元 (环 $\Z$ 的单位仅有 $-1$ 及 $1$), 而且它们也是不可约的.
- 显然 $\overline{2} \in \Z_6$ 是素元, 但它是可约的, 例如 $\overline{2} = \overline{2} \cdot \overline{4}$ 但无论是 $\overline{2}$ 还是 $\overline{4}$ 皆不为 $\Z_6$ 的单位.

### 定理 3.5 (整环的基本性质)

设 $R$ 为整环以及其中的非零元 $p, c \in R$：

1. $p$ 是素元 $\iff$ $(p)$ 是非零素理想;
2. $c$ 不可约 $\iff$ $(c)$ 是集合 $S \coloneqq \Set{ \text{$R$ 的主理想} }$​ 中的真极大理想;
3. 所有 $R$ 中的素元皆是不可约的;
4. 若 $R$ 是主理想整环, 则 $p \in R$ 是素元 $\iff$ $p$ 不可约;
5. 任意 $R$ 中不可约元 (或素元) 的相伴元亦不可约 (亦为素元);
6. $R$ 中不可约元唯一的除数是它的相伴元或 $R$ 中的单位.

##### 证明

1. $(\rArr)$ 利用素理想测试, 即须证明 $\bigg((p) \neq R \bigg) \and \b{\Forall{a, b \in R} ab \in (p) \implies a \in (p) \or b \in (p)}$, 以及 $(p)$ 非零：

   设任意 $ab \in (p)$, 由 $p$ 是素元的定义可得当 $p \mid ab$ 时有 $p \mid a$ 或 $p \mid b$, 因此又有 $a \in (a) \sub (p)$ 或 $b \in (b) \sub (p)$ 成立.

   另一方面, 由于 $p$ 非零, 且 $R$ 是整环, 那么该环中任意一个非零元与 $p$ 相乘都不可能是 $0$, 因此 $(p) \neq (0)$. 此外, 由于 $p$ 非单位再由 [定理 3.2](#定理_3.2_(整除与相伴的基本性质)) 的 $(3)$ 立得 $(p) \neq R$​.

   $(\lArr)$ 由于 $(p)$ 是素理想且 $R$ 可交换, 有 $\Forall{a, b \in R} ab \in (p) \implies a \in (p) \or b \in (p)$, 显然属于 $(p)$ 的元素皆可被 $p$ 整除, 立得：
   $$
   \Forall{a, b \in R} p \mid ab \implies (p \mid a) \or (p \mid b)
   $$
   此外, 由于 $(p)$ 非零, 它不可能被 $0$ 所生成, 因此 $p \neq 0$, 并且按照素理想的定义得 $(p) \neq R$, 再由 [定理 3.2](#定理_3.2_(整除与相伴的基本性质)) 的 $(3)$ 立即得证.

2. $(\rArr)$ 我们希望证明 $(c)$ 是所有 $R$ 中主理想的真极大理想, 按 $(c)$ 的定义则应证明：
   $$
   \bigg((c) \neq R \bigg) \and \b{ \Forall{\text{主理想 $(d) \in S$}} (c) \sub (d) \sub R \implies \big((d) = (c) \big) \or \big( (d) = R \big) }
   $$
   由于 $c$ 非单位, 由 [定理 3.2](#定理_3.2_(整除与相伴的基本性质)) 的 $(3)$ 立得 $(c) \neq R$. 此外对任意主理想 $(d) \in S$, 由 [定理 3.2](#定理_3.2_(整除与相伴的基本性质)) 的 $(1)$ 知道 $(c) \sub (d)$ 当且仅当 $d \mid c$, 亦即 $\Exists{r \in R} c = dr$, 那么同由 $c$ 不可约的定义得 $d$ 或 $r$ 为单位, 假设 $d$ 为单位时则 $(d) = R$, 此外再由 [定理 3.2](#定理_3.2_(整除与相伴的基本性质)) 的 $(5)$ 得知当 $r$ 为单位且 $c = dr$ 时 $c, d$ 相伴, 亦即 $(c) = (d)$.

   $(\lArr)$ 按 $c$ 不可约的定义, 须证明 $(\text{$c$ 非零非单位}) \and \b{\Forall{a, b \in R} c = ab \implies \text{$a$ 或 $b$ 是单位}}$：

   首先由于 $(c)$ 是真极大理想, 那么 $(c) \neq (0)$, 即该主理想不能由 $0$ 生成, 因此 $c \neq 0$. 此外由于 $(c)$ 是真理想, 因此 $(c) \neq R$ 说明 $c$ 也不是单位.

   另一方面, 由于对任意 $a, b \in R$ 皆有 $c = ab$, 那么由 [定理 3.2](#定理_3.2_(整除与相伴的基本性质)) 有 $a \mid c$ 或 $b \mid c$, 这又得 $(c) \sub (a)$ 或 $(c) \sub (b)$, 那么由极大理想的定义则有：
   $$
   \big( (a) = (c) \big) \or \big( (a) = R \big) \quad \text{或} \quad \big( (b) = (c) \big) \or \big( (b) = R \big)
   $$
   现在考虑左侧的情况, 当 $(a) = R$ 时当然 $a$ 就是单位. 而当 $(a) = (c)$ 时 $\Exists{r' \in R} a = cr'$, 因此 $c = ab = cr'b$, 由整环满足消除律得 $r'b = 1_R$, 因此 $b$ 的确为单位. 对右侧的情况亦是类似的, 最终便证得 $c$ 的确不可约.

3. 设 $p$ 为素元, 显然它是非零非单位的. 此外当 $p = ab$ 时, 由素元的定义可知 $p \mid a$ 或 $p \mid b$, 这说明 $\Exists{r \in R} pr = a$ 或 $\Exists{r' \in R} pr' = b$, 现在例如将前者代入至 $p = ab$ 则得 $p = prb$, 因此 $rb = 1_R$, 这说明 $b$ 是个单位, 反之代入后者则得 $p = apr'$, 交换 $p$ 的位置并消去它后显然有 $ar' = 1_R$, 这说明 $a$ 是个单位.

4. 显然由 $(3)$, 所有整环中的素元皆不可约. 此外, 若 $p$ 不可约, 利用 $(2)$ 即有 $(p)$ 是 $R$ 中所有主理想的真极大理想, 而 $R$ 中所有的理想皆为主理想, 再利用含幺交换环中的极大理想皆为素理想以及条件 $(1)$, 可得 $p$ 的确为素元.

5. 设 $c, d \in R$ 相伴且 $c$ 不可约, 由 [定理 3.2](#定理_3.2_(整除与相伴的基本性质)) 的 $(6)$ 可得 $\Exists{\text{单位 $u \in R$}} c = du$, 现在证明 $d$ 不可约, 即按定义即应有 $\Forall{a, b \in R} d = ab \implies \text{$a$ 或 $b$ 是单位}$​：

   将 $d = ab$ 代入回 $c = du$ 得 $c = abu$, 再由 $c$ 不可约的定义得 $a$ 或 $bu$ 为单位, 而当 $bu$ 为单位时, 显然 $b$ 必然也是单位.

6. 设 $a$ 不可约以及假设 $b \mid a$, 这等价于 $(a) \sub (b)$, 再由 $(2)$ 知 $(a)$ 是极大理想, 即有 $(b) = (a)$ 或 $(b) = R$, 因此 $a, b$ 相伴或 $c$ 为单位.

### 定义 3.6 (唯一分解整环)

称整环 $R$ 为 **唯一分解整环 (unique factorization domain, UFD)**, 当同时满足了：

1. **分解为不可约元之积**：任意 $R$ 中的非零非单位元 $a \in R$ 皆可被写作 $a = c_1 c_2 \cdots c_n$, 其中 $\Forall{1 \leq i \leq n} c_i$ 不可约;
2. **不可约元的唯一性**：若 $a = c_1 c_2 \cdots c_n$ 且 $a = d_1 d_2 \cdots d_m$, 其中 $c_i$ 与 $d_j$ 皆不可约, 那么 $n = m$ 并且 $\Exists{\text{置换 $\sigma \in S_n$}} \Forall{1 \leq i \leq n} \text{$c_i, d_{\sigma(i)}$ 相伴}$.

### 注释

由于在整环中, 由 [定理 3.5](#定理_3.5_(整环的基本性质)) 知不可约元与素元是重叠的, 我们可以将上述定义中的不可约元皆替换为素元的条件.

### 引理 3.7 (主理想环满足升链条件)

设 $R$ 为主理想环以及 $(a_1) \sub (a_2) \sub \cdots$ 为 $R$ 中理想的链, 那么 $\Exists{\text{最小 $n \in \Z^{+}$}} \Forall{j \geq n} (a_j) = (a_n)$​​.

##### 证明

首先考虑证明 $\ds A = \bigcup_{i \geq 1} (a_i)$ 的确是理想, 通过其等价定义即应证明：

- $\Forall{b, c \in A} b - c \in A$：

  假设 $b \in (a_i)$ 而 $c \in (a_j)$, 其中 $i \geq j$, 那么当然有 $(a_j) \sub (a_i)$ 并且 $b, c \in (a_i)$, 再由 $(a_i)$ 本就是理想, 便得 $b - c \in (a_i) \sub A$.

- $\Forall{b \in A} \Forall{r \in R} (rb \in A) \and (br \in A)$：

  若 $r \in R$ 而 $b \in (a_i)$, 同由 $(a_i)$ 是理想得 $rb \in (a_i) \sub A$, 此外还有 $br \in (a_i) \sub A$.

而 $R$ 是主理想环, 则有 $A = (a)$, 那么 $\Exists{n \in \Z^+} a \in (a_n) \sub A$, 由主理想的定义又得 $(a) \sub (a_n)$, 因此只要对任意 $j \geq n$ 便有：
$$
(a) \sub (a_n) \sub (a_j) \sub A = (a)
$$

### 注释

我们将 $(\Set{\text{$R$ 中的主理想}}, \sub)$ 视作有序集, 我们总希望其中的主理想链皆是有限的, 换句话说从第 $n$ 步起的主理想逐渐趋于 "稳定"：
$$
(a_1) \sub (a_2) \sub
\cdots \sub (a_n) = (a_{n + 1}) = (a_{n + 2}) = \cdots
$$
上述的引理恰好就刻画了这个事实, 我们称之为主理想环的 **升链条件 (ascending chain condition, ACC)**.

### 定理 3.8 (任意主理想整环皆为唯一分解整环)

任意主理想整环 $R$​ 皆为唯一分解整环.

##### 证明

- $\Forall{\text{非零非单位 $a \in R$}} \Forall{1 \leq i \leq n \\ \text{$c_i$ 不可约}} a = c_1 c_2 \cdots c_n$​, 分别验证：

  - 若 $a$ 是不可约的, 证明完毕.

  - 若 $a$ 是可约的, 那么 $\Exists{a_1, a_2 \in R} a = a_1 a_2$, 其中 $a_1$ 及 $a_2$ 皆不是单位, 再进一步假设, 若 $a_2$ 是可约的, 那么 $\Exists{a_3, a_4 \in R} a_2 = a_3 a_4$, 其中 $a_3$ 及 $a_4$ 皆不是单位, 因此 $a = a_1 a_2 = a_1 a_3 a_4$, 不断重复将该过程重复, 当 $a_i$ 可约时, 便可将其分解为 $a_{i + 1} a_{i + 2}$, 它们皆不是单位, 因此 ($i \geq 1$)：
    $$
    \begin{array}{c|cc}
    & \text{算式} \\
    \hline
    \text{若 $a$ 可约} & a = a_1 \cdot a_2 & (\text{$a_1, a_2$ 非单位}) \\
    \text{若 $a_2$ 可约} & a = a_1 a_3 \cdot a_4 & (\text{$a_1, a_3, a_4$ 非单位}) \\
    \text{若 $a_4$ 可约} & a = a_1 a_3 a_5 \cdot a_6 & (\text{$a_1, a_3, a_5, a_6$ 非单位}) \\
    \vdots & \vdots \\
    \text{若 $a_{2i}$ 可约} & a = a_1 a_3 \cdots a_{2i + 1} \cdot a_{2i + 2} & (\text{$a_1, a_3, \ldots, a_{2i + 2}$ 非单位}) \\
    \vdots & \vdots
    \end{array}
    $$
    换言之, 我们又可以得到以下的主理想链：
    $$
    (a) \sub (a_2) \sub (a_4) \sub (a_6) \sub \cdots \sub (a_{2i + 2}) \sub \cdots
    $$
    再由 [引理 3.7](#引理_3.7_(主理想环满足升链条件)) 可知这样的链在主理想环 $R$ 中是有限的, 上述过程至多持续有限多步, 因此 $a$ 只能被表示为有限多个元素之积. 此外因为 $R$ 是整环, 那么由 [定理 3.5](#定理_3.5_(整环的基本性质)) 的 $(2)$ 易知不可约元 $a_n \in R$ 为其中主理想的极大理想, 而上述主理想链皆含于极大理想 $(a_n)$ 中, 例如：
    $$
    (a) \sub (a_2) \sub (a_4) \sub \cdots \sub (a_{2i + 2}) \sub \cdots \sub (a_n)
    $$
    再由 $a \in (a) \sub (a_n)$, 可得 $\Exists{b \in R} a = a_n \cdot b$, 该处的 $a_n$ 为不可约元, 严格地说即有：
    $$
    \Forall{x \in R \\ \text{$x$ 非零可约}} \Exists{c \in R \\ \text{$c$ 不可约}} \Exists{y \in R} x = c \cdot y
    $$
    另一方面, 我们同样希望 $b$ 是不可约的, 那么类似于 $a$, 假设 $b$ 为可约元, 对其应用上述命题, 以逐步分解 $b$：
    $$
    \begin{array}{c|cc}
    & \text{算式} \\
    \hline
    \text{若 $a$ 可约} & a = a_n \cdot b & (\text{$a_n$ 不可约}) \\
    \text{若 $b$ 可约} & a = a_n b_1 \cdot b_2 & (\text{$a_n, b_1$ 不可约}) \\
    \text{若 $b_2$ 可约} & a = a_n b_1 b_3 \cdot b_4 & (\text{$a_n, b_1, b_3$ 不可约}) \\
    \vdots & \vdots \\
    \text{若 $b_{2j}$ 可约} & a = a_n b_1 b_3 \cdots \cdot b_{2j + 1} \cdot b_{2j + 2} & (\text{$a_n, b_1, b_3, \ldots, b_{2j + 1}$ 不可约}) \\
    \vdots & \vdots
    \end{array}
    $$
    同样地由 [引理 3.7](#引理_3.7_(主理想环满足升链条件)), 这个过程不可能无限地重复下去, 例如：
    $$
    (b) \sub (b_2) \sub (b_4) \sub \cdots \sub (b_{2j + 2}) \sub \cdots \sub (b_m)
    $$
    这说明 $a = a_n b_1 b_3 \cdots b_m$, 且其中的 $a_n, b_1, b_3, \ldots, b_m$ 皆为不可约元, 因此命题成立.

- 若 $a = c_1 c_2 \cdots c_n$ 且 $a = d_1 d_2 \cdots d_m$, 其中 $c_i$ 与 $d_j$ 皆不可约, 那么 $n = m$ 并且 $\Exists{\text{置换 $\sigma \in S_n$}} \Forall{1 \leq i \leq n} \text{$c_i, d_{\sigma(i)}$ 相伴}$：

  若 $c_1 c_2 \cdots c_n = a = d_1 d_2 \cdots d_m$, 因为 $R$ 为主理想整环, 由 [定理 3.5](#定理_3.5_(整环的基本性质)) 的 $(4)$ 易知：
  $$
  \begin{align}
  \Forall{1 \leq i \leq n} (\text{$c_i$ 不可约}) \iff \bigg(c_i \mid d_1 d_2 \cdots d_m \implies (c_i \mid d_1) \or (c_i \mid d_2) \or \cdots \or (c_i \mid d_m)\bigg) \\
  \Forall{1 \leq j \leq m} (\text{$d_j$ 不可约}) \iff \bigg(d_j \mid c_1 c_2 \cdots c_n \implies (d_j \mid c_1) \or (d_j \mid c_2) \or \cdots \or (d_j \mid c_n)\bigg)
  \end{align}
  $$
  现在取定 $i = j$ 时, 可知上述 $c_i, d_j$ 是相伴的, 而再由 [定理 3.5](#定理_3.5_(整环的基本性质)) 的 $(6)$ 得知整环 $R$ 中的不可约元, 唯一的除数只能是它的相伴元或单位, 因此 $n = m$.

### 定义 3.9 (欧几里得环, 欧几里得整环)

设 $R$ 为交换环, 称 $R$ 为 **欧几里得环 (Euclidean ring)** 当存在函数 $\varphi : R \backslash \set{0} \to \Z_{\geq 0}$ 使得：

1. $\Forall{a, b \in R} ab \neq 0 \implies \varphi(a) \leq \varphi(ab)$;
2. $\Forall{a, b \in R \\ b \neq 0} \Exists{q, r \in R} a = bq + r$, 其中 $r = 0$ 或 $r \neq 0$ 时有 $\varphi(r) < \varphi(b)$.

若欧几里得环同时是整环, 则称之为 **欧几里得整环 (Euclidean domain)**.

### 例子 3.10 (欧几里得整环的例子)

- 整数环 $\Z$ 连同 $\Map{\varphi}{\Z \backslash \set{0}}{\Z_{\geq 0}}{x}{|x|}$ 构成欧几里得整环.
- 若 $\mathbb{F}$ 是域, 它连同 $\Map{\varphi}{\mathbb{F} \backslash \set{0}}{\Z_{\geq 0}}{x}{1}$ 同样构成欧几里得整环.
- 若 $\mathbb{F}$ 是域, 由它给出的单变量多项式环 $\mathbb{F}[x]$ 连同 $\Map{\varphi}{\mathbb{F}[x] \backslash \set{0}}{\Z_{\geq 0}}{f}{\deg f}$ 同样是欧几里得环.
- 集合 $\Z[i] \coloneqq \Set{ a + bi : a, b \in \Z } \sub \C$ 是一个整环, 称之为 **高斯整数环 (domain of Gaussian integers)**, 那么 $\Z[i]$ 连同 $\Map{\varphi}{\Z[x] \backslash \set{0}}{\Z_{\geq 0}}{a + bi}{a^2 + b^2}$ 亦容易证得是欧几里得整环. 

### 定理 3.11 (欧几里得环与欧几里得整环的性质)

1. 任意欧几里得环 $R$ 皆为含幺主理想环;
2. 任意欧几里得整环 $R$ 皆为唯一分解整环.

##### 证明

由于 $(2)$ 是 $(1)$ 与 [定理 3.8](#定理_3.8_(任意主理想整环皆为唯一分解整环)) 的推论, 因此下面只证明 $(1)$. 现在分别验证：

- 任意 $R$ 中的非零理想皆为主理想：

  选取其中的非零元 $b \in I$, 且 $\varphi(b)$ 为集合 $\Set{ \varphi(x) \in \Z^+ : x \neq 0, x \in I }$ 的最小正整数, 而通过欧几里得算法, 若 $a \in I$, 则有：
  $$
  \Exists{q, r \in R} a = bq + r \qquad \text{其中 $(r = 0) \or \bigg( (r \neq 0) \and (\varphi(r) < \varphi(b)) \bigg)$ }
  $$
  再由 $b \in I$ 可得 $bq \in I$, 加上 $a \in R$ 可得知 $r$ 亦封闭于 $I$ 中, 但我们有 $\varphi(r) < \varphi(b)$, 这与 $\varphi(b)$ 的最小性相矛盾, 得 $r = 0$, 因此 $a = bq$ 说明每个 $I$ 中的元素皆为 $b$ 的倍数, 因此 $I \sub bR \sub (b) \sub I$, 遂得 $I = bR = (b)$.

- $R$​ 含乘法幺元, 即 $\Exists{e \in R} \Forall{a \in R} ea = a = ae$：

  由刚才证出的, 知道 $R$ 本身也是主理想, 即是说 $\Exists{x \in R} xR = R = Rx$, 而由于 $x \in R$, 即又得 $\Exists{e \in R} xe = x = ex$, 且对任意 $a \in R$ 又总是 $\Exists{r \in R} a = rx$, 因此：
  $$
  ae = (rx)e = r(xe) = rx = a
  $$
  对 $ea = a$ 的证明亦类似, 因此得 $ea = a = ae$ 成立.

### 定义 3.12 (公因数, 最大公因数)

设 $X$ 为交换环 $R$ 的非空子集：

- 称 $c \in R$ 为 $X$ 中元素的 **公因数 (common divisor)**, 当 $\Forall{a \in X} c \mid a$;
- 称 $d \in R$ 为 $X$ 中元素的 **最大公因数 (greatest common divisor)**, 当 $d$ 为 $X$ 中元素的公因数且 $\Forall{a, c \in X} c \mid a \implies c \mid d$.

### 定理 3.13 (含幺交换环中最大公因数的等价刻画)

设 $R$ 为含幺交换环以及 $a_1, \dots, a_n \in R$：

1. $d \in R$ 为 $a_1, \dots, a_n$ 的最大公因数使得 $\Exists{r_i \in R} d = r_1 a_1 + \cdots + r_n a_n$ 当且仅当 $(d) = (a_1) + (a_2) + \cdots + (a_n)$;
2. 若 $R$ 为主理想环, 那么 $a_1, \dots, a_n$ 的最大公因数存在且每一个 $a_i$ 皆可被写作形式和 $r_1 a_1 + \cdots + r_n a_n$, 其中 $(r_i \in R)$;
3. 若 $R$ 为唯一分解整环, 同样存在 $a_1, \dots, a_n$ 的最大公因数.

{% end %}

