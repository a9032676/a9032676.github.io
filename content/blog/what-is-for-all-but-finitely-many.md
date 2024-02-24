+++

title = "何为至多有限多个例外"
date = 2024-02-24
draft = false

[taxonomies]
categories = ["杂谈"]
tags = ["杂谈", "数学黑话"]

[extra]
lang = "zh"
toc = true
mathjax = true

+++

{% good() %}本文内容已完全施工完毕, 读者可放心阅读！{% end %}

{% mathjax_escape() %}

## 引言

在数学中, 设 $X$ 为任意集合 (有限或无限皆可), 我们经常会遇到以下一些 "黑话", 例如：

1. **对任意但至多有限多个例外 (for all but up to finitely many exceptions)** $x \in X$, 满足了性质 $P(x)$;
2. **对任意除了有限多个 (for all but finitely many)** $x \in X$, 满足了性质 $P(x)$;
3. **几乎所有的 (for almost all)** $x \in X$, 满足了性质 $P(x)$;
4. **对无限多个 (for infinitely many)** $x \in X$, 满足了性质 $P(x)$.

事实上, 上述 $(1),(2),(3)$ 的陈述是等价的, 皆是指 "尽管有无限种方式使 $x$ 满足了 $P(x)$, 但不满足性质 $P(x)$ 的元素 $x$ 仅有限多个", 用逻辑符号则可表示为：
$$
\bigg( \Set{ x \in X : P(x) }\ \text{为无限集} \bigg) \and \bigg( \Set{ x \in X : \neg P(x) }\ \text{为有限集} \bigg)
$$
而基于 $X$ 的选取不同, 存在不同的语境, 因此可以分类讨论：

- 当 $X$ 为无限集时, 非正式地, 实际上是在指 "存在有限多个不满足 $P(x)$ 的元素, 不过对后续所有无穷多的元素皆满足了 $P(x)$" 这句话, 因此直观上可以体现出来是 "对近乎所有的 $x \in X$ 都满足了性质 $P(x)$, 除了那少得几乎可以忽略不计的有限个元素外", 即 $(3)$ 的陈述.
- 当 $X$ 为有限集时, 显然满足性质 $P(x)$ 的元素是有限多的, 同样地剩下不满足 $P(x)$ 的元素也是有限多的, 即 $\Set{ x \in X : \neg P(x) }$ 同为有限集, 因此只要 $X$ 有限, 就必定满足 $(1), (2), (3)$ 这些等价的陈述.

而前三者恰好蕴含了 $(4)$, 它声称的是 "有无限种方式使 $x$ 满足了 $P(x)$", 具体地：
$$
\Set{ x \in X : P(x) }\ \text{为无限集}
$$
显然陈述 $(1), (2), (3)$ 蕴含了 $(4)$. 下面让我们观察一些例子.

## 例子

### 例子 1 (基本例子)

- 几乎所有的自然数都大于 $5$, 除了 $0,1,2,3,4,5 \in \set{ n \in \N : n \leq 5 }$.
- 几乎所有的素数都是奇数, 除了 $2 \in \set{ n \in \N^\times : \text{$n$ 为素数 $\and$ $n$ 为偶数} }$.
- 几乎所有的正偶数都可以被表示为两个素数之和 (同样除了 $2$).

### 例子 2 (数列极限的定义)

设 $(a_n)_{n \geq 1}$ 为实数列, 观察数列极限 $\ds \lim_{n \to \infin} a_n = L$ 的定义 $\Forall{\epsilon > 0} \Exists{N \in \N^\times} \Forall{n \geq N} | a_n - L | < \epsilon$, 我们对其中的 $n \in \N^\times$ 分类讨论：

- 当 $n \geq N$ 时, 按定义这当然直接满足了 $|a_n - L| < \epsilon$, 即 $\Set{ n \in \N^\times : (n \geq N) \and (|a_n - L| < \epsilon) }$ 为无限集.
- 当 $n < N$ 时, 则至多仅有 $N - 1$ 个元素满足 $|a_n - L| \geq \epsilon$, 即 $\Set{ n \in \N^\times : (n < N) \and (|a_n - L| \geq \epsilon) }$ 为有限集.

因此又可非正式地称为：

- 对任意除了有限多项的 $n \in \N^\times$, 满足 $|a_n - L| < \epsilon$; 或
- 对 **充分大 (sufficiently large)** 的 $n \in \N^\times$, 满足 $|a_n - L| < \epsilon$.

### 例子 3 (可以忽略不计的集合)

我们注意到少得几乎 **可以忽略不计的集合 (negligible set)** 满足了以下规律：

- 空集对于整体来说几乎可以忽略不计;
- 这些可以忽略不计集合的子集, 仍是可以忽略不计的;
- 任意两个可以忽略不计的集合之并, 仍是可以忽略不计的.

我们可以将上述这些抽象地定义为一个代数结构的实例, 例如在序理论中, 存在以下的代数结构：

> 称资料 $(S, \or, \leq)$ 为一个 **并联半格 (join semilattice)**, 其中：
>
> - $(S, \leq)$ 为有序集;
> - 二元运算 $\Map{\or}{S \times S}{S}{(a, b)}{\sup\set{a, b}}$, 即取元素之上确界, 称该运算为 **并联 (join)**.

然后就可以定义其中的子结构：

> 设 $(S, \or, \leq)$ 为一个并联半格, 且令 $I \sube S$ 为其中的非空子集, 称 $I$ 为 $S$ 的 **理想 (ideal)** 当同时满足：
>
> - **$I$ 为 $S$ 的下截面** $\Forall{x \in I} \Forall{y \in S} y \leq x \implies y \in I$;
> - **$I$ 为 $S$ 的子半格**：$\Forall{x, y \in I} x \or y \in I$.

现在对任意集 $X$, 再令 $(\mathcal{P}(X), \cup, \sube)$ 为并联半格, 则可以定义上述可以忽略不计的集合为其中的理想 $I$ 了.

### 例子 4 (形式线性组合)

我们通常会用形式 (或有限多的) 线性组合去定义一些代数结构 (如自由阿贝尔群, 线性空间等) 中的元素, 而它的准确定义为：

> 设 $S$ 为任意集, $S$ 中元素的 **形式线性组合 (formal linear combination)** 为一函数 $a_{(-)} : S \to \Z$, 使得同时满足：
>
> - $S$ 中有限多个元素之和可以被写为 $\ds \sum_{s \in S} a_s \cdot s$, 其中 $a_s \in \Z$ 为系数;
> - 其中仅 **对有限多个 (for finitely many)** $a_s$ 不为零.

其中的 "仅对有限多个 $a_s \neq 0$" 这个陈述等价于 "对任意除了有限多个 $a_s \in \Z$, 满足了 $a_s = 0$".

{% end %}

