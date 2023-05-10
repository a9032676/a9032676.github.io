+++
title = "环论 1 - 环论基础, 环同态"
date = 2023-04-16
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

{% mathjax_escape() %}

## 1.1. 环论基础

### 定义 1.1.1 (环, 交换环, 含幺环, 零环)

设有非空集 $R$ 以及其上的两个二元运算 $\begin{align} + & : R \times R \to R \\ \cdot & : R \times R \to R  \end{align}$,, 若 $(R, +, \cdot)$ 被称之为 **环 (ring)**, 当满足了：

- $(R, +)$ 为交换群且 $(R, \cdot)$ 为半群;
- 乘法 $\cdot$ 的分配律：
  - **左分配律 (left distributive law)**：$a(b + c) = ab + bc$;
  - **右分配律 (right distributive law)**：$(a + b)c = ac + bc$.

若在乘法运算 $\cdot$ 下, 任意元素皆可交换, 则称 $R$ 为 **交换环 (commutative ring)**, 即满足了：

- **交换律 (commutativity)**：$\Forall{a, b \in R} ab = ba$.

若 $R$ 包含乘法幺元 $1_R$ (或 $(R, \cdot)$ 为幺半群), 则称 $R$ 为 **含幺环 (ring with identity)**, 即满足了：

- **幺元律 (identity law)**：$\Exists{1_R \in R} \Forall{a \in R} 1_R a = a = a 1_R$.

注意到, 若有 $1_R = 0$, 则该环中只有一个元素 $0$, 被称作 **零环 (zero ring)**.

### 注释

为了区分接下来即将提及在 $R$ 中乘法上定义的单位元以及 $(R, +)$ 中的幺元, 将 $(R, +)$ 的幺元称为 **零元 (zero element)**.

### 定理 1.1.2 (环的基本性质)

设 $R$ 为环：

1. $\Forall{a \in R} 0a = 0 = a0$;
2. $\Forall{a, b \in R} (-a)b = -(ab) = a(-b)$;
3. $\Forall{a,b \in R} (-a)(-b) = ab$;
4. $\Forall{a, b \in R \\ n \in \Z} (na)b = n(ab) = a(nb)$;
5. $\displaystyle \Forall{a_i, b_j \in R} \sum_{i = 1}^n a_i \sum_{j = 1}^m b_j = \sum_{i = 1}^n \sum_{j = 1}^m a_i b_j$.

##### 证明

1. $0a = (0 + 0)a \overset{\text{右分配律}}{=} 0a + 0a \implies 0a = 0$, 而 $a0 = 0$ 同理.

2. $ab + (-a)b \overset{右分配律}{=} (a + (-a))b = 0b = 0$, 因此 $(-a)b = -(ab)$, 而 $a(-b) = -(ab)$ 同理.

3. 显然由 $(2)$ 即有 $(-a)(-b) = a(-(-b)) = ab$.

4. $(na)b = \displaystyle \b{\sum_{i = 1}^n a_i} b \overset{\text{右分配律}}{=} \sum_{i = 1}^n a_i b = n(ab)$, 并且 $a(nb) = n(ab)$ 亦类似;

5. 透过归纳法证明：

   - 若 $n = 1$ (或 $m = 1$)：
     $$
     \sum_{i=1}^1 a_i \sum_{j=1}^m b_j = a \sum_{j = 1}^m b_j \overset{\text{左分配律}}{=} \sum_{j=1}^m ab_j = \sum_{i = 1}^1 \sum_{j = 1}^m a_i b_j
     $$
     对于 $m = 1$ 亦然, 证明略.

   - 若假设 $\displaystyle \sum_{i = 1}^n a_i \sum_{j = 1}^m b_j = \sum_{i = 1}^n \sum_{j = 1}^m a_i b_j$ 成立, 那么透过归纳显然 $\displaystyle \sum_{i = 1}^{n+1} a_i \sum_{j = 1}^{m+1} b_j$ 仍为相同形式, 因此命题成立.

### 定义 1.1.3 (零因子)

对任意环 $R$ 中的非零元素 $a \in R$ 被分别称为：

- **左零因子 (left zero divisor)**, 当满足 $\Exists{b \in R \\ b \neq 0} ab = 0$;
- **右零因子 (right zero divisor)**, 当满足 $\Exists{b \in R \\ b \neq 0} ba = 0$;
- **零因子 (zero divisor)**, 当 $b$ 同时为 $R$ 中的左零因子及右零因子.

全体 $R$ 中的左零因子的集合被记为 (右零因子亦类似)：
$$
\op{Ann}(R) \coloneqq \Set{ a \in R : \Exists{b \in R \\ b \neq 0} ab = 0 }
$$

### 注释

显然当环 $R$ 没有零因子时当且仅当 $R$ 中同时拥有左和右消除律, 即：
$$
\Forall{a, b, c \in R \\ a \neq 0} (ab = ac) \or (ba = ca) \implies b = c.
$$

### 定义 1.1.4 (左逆元, 右逆元, 可逆元)

对任意环 $R$ 中的元素 $a \in R$ 被分别称为：

- **左可逆的 (left invertible)**, 当满足 $\Exists{c \in R} ca = 1_R$, 其中 $c$ 被称为是 $a$ 的 **左逆元 (left inverse)**;
- **右可逆的 (right invertible)**, 当满足 $\Exists{b \in R} ab = 1_R$, 其中 $b$ 被称为是 $a$ 的 **右逆元 (right inverse)**;
- **可逆元 / 单位元 (invertible / unit)**, 当 $a$ 同时是左可逆且右可逆的.

全体 $R$ 中左可逆元的集合被记为 (右可逆元亦类似)：
$$
R^\times \coloneqq \Set{ a \in R : \Exists{b \in R} ab = 1_R }
$$

### 注释

- 环 $R$ 中可逆元 $a \in R$ 的左右逆元必定是相同的, 因为 $ab = 1_R = ca$ 蕴含了 $b = 1_R b = (ca)b = c(ab) = c1_R = c$;
- 含幺环 $R$ 中全体由可逆元所组成的集合于乘法下构成群 $(R, \cdot)$.

### 定义 1.1.5 (幂零元)

对任意环 $R$ 中的元素 $a \in R$, 若存在 $n \in \N$ 使得 $a^n = 0$, 则称 $a$ 为 **幂零元 (nilpotent)**, 而全体 $R$ 中的幂零元集合记为：
$$
\op{Nil}(R) \coloneqq \Set{ a \in R : \Exists{n \in \N} a^n = 0 }
$$

### 定义 1.1.5 (整环, 除环, 域)

- 设有含乘法幺元 $1_R \neq 0$ 的交换环 $R$, 若 $R$ 中没有任何零因子, 则 $R$ 被称为 **整环 / 整域 (integral domain)**;
- 设有含乘法幺元 $1_D \neq 0$ 的环 $D$, 且任意非零元皆为可逆元, 则 $D$ 被称为 **除环 (division ring)**;
- 一个 **可交换除环 (commutative division ring)** $\mathbb{F}$ 被称之为 **域 (field)**.

### 注释

- 任意的整环和除环至少有两个元素, 分别是加法幺元 $0$ 和乘法幺元 $1_R$;

- 含幺环 $R$ 是个除环当且仅当 $R$ 中的非零元素与乘法构成群 $(R, \cdot)$;

- 任意域 $\mathbb{F}$ 都是个整环, 即意味着 $\mathbb{F}$ 中任意非零元皆可逆, 因此当 $ab = 0$ 且 $a \neq 0$ 时：
  $$
  b = 1_F b = (a^{-1} a)b = a^{-1}(ab) = a^{-1}0 = 0
  $$
  那么所有 $\mathbb{F}$ 中的非零元素 $a$ 只有在乘以零元时才可以得到 $0$, 意味着 $\mathbb{F}$ 中没有零因子.

- 事实上为了衡量从环到域的差距, 所以分别定义出 可逆元, 零因子 以及 幂零元的概念, 它们的集合有以下的包含关系：
  $$
  \begin{array}{c}
  \set{0} & \sub & \op{Nil}(R) & \overset{\text{(注)}}{\sub} & \op{Ann}(R) & \sub & R \backslash R^\times \\
  \text{零元} & \sub & \text{幂零元} & \sub & \text{零因子} & \sub & \text{不可逆元}
  \end{array}
  $$
  请注意, 于本文中的零因子是不能为 $0$ 的元素, 而事实上于交换代数中, 交换环的零因子是可以为 $0$ 的, 因此会有幂零元含于零因子中.

### 例子 1.1.6 ($\Z, \Q, \R, \C, \op{M}_n(\mathbb{F})$)

- 整数集所构成的环 $\Z$ 是个整环;
- 所有偶数组成的集合 $E$ 为不含 (乘法) 幺元的交换环;
- 有理数集 $\Q$, 实数集 $\R$ 以及复数集 $\C$ 携带它们各自的加法与乘法, 则构成域;
- 域 $\mathbb{F}$ 上的 $n \times n$ 矩阵的集合 $\op{M}_n(\mathbb{F})$ 构成非交换的含幺环, 其中该环上的逆元便是非奇异矩阵 (可逆矩阵).

### 例子 1.1.7 ($\Z_n, \mathbb{F}_p$)

对于任意正整数 $n$, 整数模 $n$ 的集合 $\Z_n$ 构成环. 并且：

- 若 $n$ 并非素数, 例如 $n = kr$, 其中 $k > 1, r > 1$, 那么 $\overline{k} \cdot \overline{r} = \overline{kr} = \overline{n} = \overline{0}$, 因此 $\overline k$ 与 $\overline r$ 都是其中的零因子.
- 若 $n = p$, 其中 $p$ 为素数, 则 $\Z_p$ 构成一个域, 并被称为 **有限域 (finite field)**, 记为 $\mathbb{F}_p$.

### 例子 1.1.8 ($\End(A)$) 

设 $A$ 为交换群且令 $\End(A)$ 为所有 $A$ 中自态射所构成的集合, 定义其中的加法为 $\Map{+}{\End(A) \times \End(A)}{\End(A)}{(f, g)}{f + g \coloneqq f(a) + g(a)}$, 而由于 $A$ 本身是可交换的, 那么 $\End(A)$ 亦可交换, 并且定义其中的乘法为态射的复合, 即 $\Map{\cdot}{\End(A) \times \End(A)}{\End(A)}{(f, g)}{fg}$, 那么 $\End(A)$ 则为含幺 $1_A : A \to A$ 的 (可能是非交换的) 环.

### 例子 1.1.9 (布尔环)

设有环 $R$, 若对于任意 $a \in R$ 有 $a^2 = a$, 则称 $R$ 为 **布尔环 (Boolean ring)**, 并且对于任意 $a \in R$ 有 $a + a = 0$, 而 $R$ 亦是可交换的.

### 例子 1.1.10 (幺半群环, 群环, 多项式环)

设 $G$ 为群且 $R$ 为环, 则可定义 **群环 (group ring)** $R[G]$ 中的元素为积集 $R^G$ (或记为 $\displaystyle \sum_{g \in G} R$, 即对每个 $g \in G$ 复制出一个 $R$) 中形如 $(r_g)_{g \in G}$ 的列, 且仅有限多项非零, 我们通常将 $(r_g)_{g \in G}$ 形式地写为 $R$ 上的有限线性组合：
$$
(r_g)_{g \in G} = \sum_{i = 1}^n r_{g_i} g_i = r_{g_1} g_1 + r_{g_2} g_2 + \dots + r_{g_n} g_n
$$
现在分别定义 $R[G]$ 中的加法和乘法为：
$$
\begin{align}
\b{\sum_{i=1}^n r_{g_i} g_i} + \b{\sum_{i=1}^n s_{g_i} g_i} & = \sum_m (r_{g_i} + s_{g_i})g_i \\
\b{\sum_{i=1}^n r_i g_i} \cdot \b{\sum_{j=1}^m s_j h_j} & = \sum_{i=1}^n \sum_{j=1}^m (r_i s_j)(g_i h_j)
\end{align}
$$
其中零元为 $\displaystyle 0_{R[G]} = \sum_{i=1}^n 0 \cdot g_i$, 幺元为 $1_{R[G]} = 1_R \cdot 1_G$. 倘若 $G$ 为幺半群时则构成 **幺半群环 (monoid ring)**. 其中群环是群表示论的核心研究结构, 关于群环的详细叙述将于后续回顾.

### 例子 1.1.11 (实四元数环)

 设 $\R$ 为实数域且由符号组成的集合 $S = \set{ 1, i, j, k }$, 令 $K$ 为加法交换群 $\R \oplus \R \oplus \R \oplus \R$, 且 $K$ 中的元素表示为：
$$
(a_0, a_1, a_2, a_3) \coloneqq a_0 1 + a_1 i + a_2 j + a_3 k
$$
则 $a_0 1 + a_1 i + a_2 j + a_3 k = b_0 1 + b_1 i + b_2 j + b_3 k$ 当且仅当 $a_i = b_i$, 其中对于任意 $i \in \N$, 并简记 $a_0 1 \in K$ 为 $a_0 \in R$, 且分别定义 $K$ 的加法与乘法为：
$$
\begin{align}
(a_0 + a_1 i + a_2 j + a_3 k) + (b_0 + b_1 i + b_2 j + b_3 k) & \coloneqq (a_0 + b_0) + (a_1 + b_1)i + (a_2 + b_2)j + (a_3 + b_3)k \\
(a_0 + a_1 i + a_2 j + a_3 k) \cdot (b_0 + b_1 i + b_2 j + b_3 k) & \coloneqq (a_0 b_0 - a_1 b_1 - a_2 b_2 - a_3 b_3) + (a_0 b_1 + a_1 b_0 + a_2 b_3 - a_3 b_2)i \\
& + (a_0 b_2 + a_2 b_0 + a_3 b_1 - a_1 b_3)j + (a_0 b_3 + a_3 b_0 + a_1 b_2 - a_2 b_1)k
\end{align}
$$
其中的乘法为线性组合之间的乘法, 且满足了以下关系：

1. 结合律;
2. $ri = ir$, $rj = jr$ 以及 $rk = kr$, 对于任意 $r \in R$;
3. $i^2 = j^2 = k^2 = ijk = -1$;
4. $ij = -ji = k$;
5. $jk = -kj = i$ 以及 $ki = -ik = j$.

并且于该乘法运算下 $K$ 构成非交换除环, 因为 $K$ 中元素 $a_0 + a_1 i + a_2 j + a_3 k$ 的乘法逆元为：
$$
\frac{a_0}{d} - \frac{a_1}{d}i - \frac{a_2}{d}j - \frac{a_3}{d}k
$$
其中 $d = {a_0}^2 + {a_1}^2 + {a_2}^2 + {a_3}^2$. 如此定义的 $K$ 被称为 **实四元数 (real quaternions)** 除环, 通常记为 $\H$.

### 定理 1.1.12 (二项式/多项式定理)

设 $R$ 为含幺环, $n \in \Z^+$ 以及对任意 $a, b, a_i \in R$, 则以下命题成立：

1. **二项式定理 (binomial theorem)**：若 $ab = ba$, 则 $\displaystyle (a + b)^n = \sum_{k = 0}^n \binom{n}{k} a^k b^{n-k}$;

2. **多项式定理 (multinomial theorem)**：若 $a_i a_j = a_j a_i$, 则：
   $$
   (a_1 + a_2 + \cdots + a_k)^n = \sum_{n_1 + n_2 + \dots + n_k = n} \frac{n!}{ (n_1!) \cdots (n_k!) } {a_1}^{n_1} {a_2}^{n_2} \dots {a_k}^{n_k}
   $$
   其中 $n_1, n_2, \dots, n_k$ 为一切满足求和条件的非负组合, 其中 $0 \leq n_i \leq n$.

## 1.2. 环同态与特征

### 定义 1.2.1 (环同态)

设 $R, S$ 为环, 若映射 $f : R \to S$ 被称为 **环同态 (homomorphism of rings)**, 当对于任意 $a, b \in R$ 同时满足了：

1. 加法交换群同态：$f(a + b) = f(a) + f(b)$;
2. 乘法半群同态：$f(ab) = f(a)f(b)$.

### 注释

- 对于环的 单同态, 满同态, 同构, 自同构 等的定义类似于群中的定义, 这里不再重复叙述;
- 偶尔会将环的单同态 $R \to S$ 称为将 $R$ **嵌入 (embedding)** 至 $S$;
- 环同态下依然有 **核 (kernel)** 与 **像 (image)**, 它们为环同态 $f : R \to S$ 于加法交换群的同态 $f : (R, +) \to (S, +)$ 的核与像;
- 特别地, 即使 $R$ 与 $S$ 均为含幺环时, 它们之间的环同态亦不会保有乘法幺元, 这与群同态有明显的区别.

### 例子 1.2.2 (整数模 $n$ 环 $\Z_m$ 相关的同态)

- 从整数环 $\Z$ 到整数模 $m$ 环 $\Z_m$ 之间的典范同态 $\map{\Z}{\Z_m}{k}{\overline k}$ 显然为满同态;
- 映射 $\map{\Z_3}{\Z_6}{\overline k}{\overline{4k}}$ 为一个定义良好的单同态.

### 例子 1.2.3 (幺半群环/群环的同态)

设 $G, H$ 为乘法群, $f : G \to H$ 为群同态以及环 $R$, 则可诱导出群环之间的环同态 $\overline{f} : R[G] \to R[H]$：
$$
\overline{f} \b{ \sum_{i = 1}^n r_i g_i } = \sum_{i = 1}^n r_i f(g_i)
$$

### 注释

环的特征是反馈了关于环的性质的一个量, 特征类似于群阶至于群一样, 即若一个环 $R$ 中存在最小正整数 $n$ 使得对任意 $a \in R$ 有：
$$
\underbrace{a + a + \dots + a}_{\text{$n$ 次}} = na = 0
$$
即于加法运算下加了 $n$ 次的 $a$ 会回到零元上, 那么则称 $R$ 的特征为 $n$.

### 定义 1.2.4 (环的特征)

设 $R$ 为任意环：

- 若对于任意 $a \in R$ 都存在最小正整数 $n$ 使得 $na = 0$, 则称 $R$ 的 **特征 (characteristic)** 为 $n$, 记为 $\op{char} R = n$.
- 若不存在这样的 $n$ 则称 $R$ 的特征为零 (或无穷大).

### 性质 1.2.5 (特征不为零的含幺环性质)

设 $R$ 为含幺环且特征 $n > 0$：

1. 若有映射 $\Map{\varphi}{\Z}{R}{m}{m 1_R}$, 则 $\varphi$ 为环同态, 且 $\varphi$ 的核为 $\lang n \rang = n\Z = \set{ kn : k \in \Z }$;
2. $n$ 为最小正整数使得 $n 1_R = 0$;
3. 若 $R$ 没有零因子, 则特征 $n$ 为素数.

##### 证明

1. 由于 $\varphi(m) = m1_R$, 并且 $\op{char} R = n$, 因此必然存在最小正整数 $n$ 使得 $n 1_R = 0$, 因此 $\underbrace{n 1_R + \dots + n 1_R}_{\text{$k$ 次}} = kn 1_R = 0$, 所以 $\lang n \rang = \set{kn : k \in \Z}$.
2. 若存在最小正整数 $n$ 使得 $\Forall{a \in R} na = 0$, 那么显然有 $n1_R = 0$.
3. 若假设 $n$ 不为素数, 设 $n = kr$, 其中 $1 < k < n$ 以及 $1 < r < n$, 那么由 $\op{char} R = n$ 知对任意 $a \in R$ 有 $na = (kr)a = 0$, 取 $a = 1_R 1_R$ 则有 $(kr)1_R 1_R = (k 1_R)(r 1_R)$, 同样由环的特征得到 $k1_R = 0$ 或 $r1_R = 0$, 而由于 $k < n, r < n$, 因此不可能存在小于最小正整数 $n$ 的数 $k$ 或 $r$ 使得 $k1_R = 0$ 或 $r1_R = 0$, 便与 $(2)$ 产生矛盾.

### 注释

其中的映射 $\varphi$ 被称为 **始同态 (initial homomorphism)**, 且其保有幺元, 即 $\varphi(1_\Z) = 1_R$, 因此其为单位环同态.

### 例子 1.2.6

- 环 $\Z_n$ 的特征为 $n$, 因为对于任意 $\overline{k} \in \Z_n$ 总是存在最小正整数 $n$ 使得 $n \overline{k} = \overline{0}$;
- 由于整环 $R$ 不含任何零因子, 因此 $R$ 的特征只能为素数或等于零;
- 非零的布尔环特征为 $2$.

### 定理 1.2.7 (环嵌入至含幺环的方法)

任意环 $R$ 都可以嵌入至含幺环 $S$ 中, 其中 $S$ 的特征为零或 $\op{char} R = \op{char} S$.

##### 证明

- $\op{char} S = 0$：

  令加法交换群 $S = R \oplus \Z$ 且定义 $S$ 中的乘法为 (其中 $r_i \in R, k_i \in \Z$)：
  $$
  (r_1, k_1)(r_2, k_2) = (r_1 r_2 + k_2 r_1 + k_1 r_2, k_1 k_2)
  $$
  可以验证 $S$ 是个含幺 $(0, 1)$ 的环且特征为零, 且映射 $\map{R}{S}{r}{(r, 0)}$ 为环的嵌入.

- $\op{char} R = \op{char} S$：

  假设 $\op{char} R = n > 0$, 那么类似于上述设 $S = R \oplus \Z_n$ 且定义乘法为 (其中 $r_i \in R, \overline{k}_i \in \Z_n$)：
  $$
  (r_1, \overline{k}_1)(r_2, \overline{k}_2) = (r_1 r_2 + k_2 r_1 + k_1 r_2, \overline{k}_1 \overline{k}_2)
  $$
  并且于典范映射 $\map{\Z}{\Z_n}{k_i}{\overline{k}_i}$ 下 $\overline{k}_i$ 是 $k_i$ 的像, 易见存在最小正整数 $n$ 使得 $n\overline{k}_i = 0 $, 因此 $\op{char} S = n$.

{% end %}
