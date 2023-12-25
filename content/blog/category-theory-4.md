+++

title = "范畴论 4 - 伴随函子"
date = 2023-12-15
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

## 4.1. 伴随函子

### 注释 (动机)

范畴论的其中一个最核心的课题是研究对象之间的关系究竟如何, 例如在高阶范畴论的视角下：

- 考虑集合范畴 ($0$-范畴), 例如所有自然数的搜集, 则自然数之间的态射为保序映射 $x \leq y$, 可见这是一个命题;
- 考虑 $1$-群胚 ($1$-范畴), 则它们之间的态射为一族所有映射都可逆的态射集 $\Hom{\mathcal{G}}{x}{y}$;
- 考虑 $2$-群胚 ($2$-范畴), 其中的对象为 $1$-群胚 $\mathcal{G}_1, \mathcal{G}_2$, 而态射则为 $1$-群胚之间的映射 $\Hom{\Grpd}{\mathcal{G}_1}{\mathcal{G}_2}$.

当然有了映射后, 我们可以考虑两个对象之间其中一个最关键的性质, 也就是 **等价性 (equivalence)**, 我们再叙述一遍关于上面三点的等价性：

- 于集合范畴中, 若其中的元素 $x, y$ 被称为是相等的, 当元素任意 $x$ 与 $y$ 必须完全等价, 亦即是最强的一种等价关系 $x = y$;
- 于 $1$-群胚中, 若其中的元素 $x, y$ 被称为是相等的, 只要 $1$-群胚中的元素是同构的, 即对任意态射 $f : x \to y$, 都存在它的逆 $g : y \to x$ 使得有 $g \circ f = 1_x$ 以及 $f \circ g = 1_y$, 显然于 $1$-群胚中, 所有元素都满足了该条件;
- 于 $2$-群胚中, 若其中的元素 $\mathcal{G}_1, \mathcal{G}_2$ 被称为是相等的, 只要它们是范畴等价的, 即对任意函子 $F : \mathcal{G}_1 \to \mathcal{G}_2$ 都存在它的拟逆函子 $G : \mathcal{G}_2 \to \mathcal{G}_1$ 遂有自然同构 $G \circ F \simeq 1_{\mathcal{G}_1}$ 以及 $F \circ G \simeq 1_{\mathcal{G}_2}$, 其中 $\simeq$ 表示同构的意思, 显然于 $2$-群胚中所有的态射都满足该条件.

因此将这个过程无限地持续下去, 我们会发现当考虑的等价性层级越来越高时, 则等价性会变得越来越弱.

而由前面的文章我们知道, 范畴等价属于范畴论中一种较强的等价关系 (虽然从上述可见它比完全等价与同构要弱), 不过完全构成等价的范畴是非常少的, 因此按照该种方式对范畴分类显得略为粗糙, 那么就很有必要退而求其次, 转而考虑比范畴等价更弱的一种等价关系, 例如对任意 $2$-范畴中的对象 $\mathcal{C}, \mathcal{D}$, 考虑它们的一对函子 $\xymatrix{\mathcal{C} \ar@/^0.8pc/@{->}[r]^{L} \ar@/_0.8pc/@{<-}[r]_{R} & \mathcal{D}}$, 我们将其中一个自然同构 $1_\mathcal{C} \simeq R \circ L$ 与 $L \circ R \simeq 1_\mathcal{D}$ 放宽为以下的自然变换：
$$
\eta : 1_{\mathcal{C}} \rArr R \circ L \quad \text{以及} \quad \epsilon : L \circ R \rArr 1_{\mathcal{D}}
$$
遗憾的是这种方式定义并不满足所谓的 **融贯条件 (coherence condition)**, 粗略地说就是我们有两条不同的路从自身到自身, 即 $L \rArr L$ 可分别被叙述为：
$$
\begin{align}
1_\mathcal{D} : L \rArr L \quad \text{以及} \quad L \rArr (L \circ R) \circ L \rArr L 
\end{align}
$$
因此我们必须要附加上额外的融贯条件, 使得其中的元素无论走这两条路的任何一条都是等价的, 即对于 $L \rArr L$ 与 $R \rArr R$ 则下图应交换：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkwifSx7InBvc2l0aW9uIjpbMSwwXSwidmFsdWUiOiJMIFxcY2lyYyBSIFxcY2lyYyBMIn0seyJwb3NpdGlvbiI6WzEsMV0sInZhbHVlIjoiTCJ9LHsicG9zaXRpb24iOlszLDBdLCJ2YWx1ZSI6IlIifSx7InBvc2l0aW9uIjpbNCwxXSwidmFsdWUiOiJSIn0seyJwb3NpdGlvbiI6WzQsMF0sInZhbHVlIjoiUiBcXGNpcmMgTCBcXGNpcmMgUiJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJ2YWx1ZSI6IkxcXGV0YSJ9LHsiZnJvbSI6MCwidG8iOjIsImxhYmVsUG9zaXRpb24iOiJyaWdodCIsInZhbHVlIjoiXFx0ZXh0e2lkfV9cXG1hdGhjYWx7RH0ifSx7ImZyb20iOjEsInRvIjoyLCJ2YWx1ZSI6IlxcZXBzaWxvbiBMIn0seyJmcm9tIjozLCJ0byI6NCwidmFsdWUiOiJcXHRleHR7aWR9X1xcbWF0aGNhbHtDfSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6MywidG8iOjUsInZhbHVlIjoiXFxldGEgUiJ9LHsiZnJvbSI6NSwidG8iOjQsInZhbHVlIjoiUiBcXGVwc2lsb24ifV19
\xymatrix{
L \ar@{->}[r]^{L\eta} \ar@{->}[rd]_{\text{id}_\mathcal{D}} & L \circ R \circ L \ar@{->}[d]^{\epsilon L} &  & R \ar@{->}[rd]_{\text{id}_\mathcal{C}} \ar@{->}[r]^{\eta R} & R \circ L \circ R \ar@{->}[d]^{R \epsilon} \\
 & L &  &  & R
}
$$
那么我们就称上述 $L, R$ 为一对伴随函子, 而上述这两个交换图我们又称为伴随函子的三角恒等式, 不过首先让我们明确关于伴随对的具体定义.

### 定义 4.1.1 (以 $\op{Hom}$-集 同构定义伴随函子)

设有三元组 $(L, R, \varphi)$ 以及一对函子 $\xymatrix@C+0pc{
\mathcal{C} \rtwocell<4>^{L}_{R}{'} & \mathcal{D}
}$, 若有自然同构 $\Hom{\mathcal{D}}{L(-)}{-} \overset{\varphi}{\simeq} \Hom{\mathcal{C}}{-}{R(-)}$, 则称：

- $L$ 为 $R$ 的 **左伴随函子 (left adjoint functor)**, 记为 $L \dashv R$;
- $R$ 为 $L$ 的 **右伴随函子 (right adjoint functor)**, 记为 $R \vdash L$;
- $\varphi$ 为伴随函子 $L$ 与 $R$ 的 **伴随同构 (adjunction isomorphism)**;
- $(L, R, \varphi)$ 为 $L$ 与 $R$ 的 **伴随对 (adjoint pair)**, 通常将 $\varphi$ 省略不记.

### 注释 (伴随同构的自然性)

上述的伴随同构 $\varphi$ 具体地说是指：

- $\varphi$ 为 $\op{Hom}$-集 间的双射, 即对任意 $C \in \Ob{\mathcal{C}}$ 以及 $D \in \Ob{\mathcal{D}}$ 有以下双射：
  $$
  \Map{\varphi_{C, D}}{\Hom{\mathcal{D}}{L(C)}{D}}{\Hom{\mathcal{C}}{C}{R(D)}}{\bb{L(C) \overto{\psi} D}}{\bb{C \overto{\widetilde{\psi}} R(D)}}
  $$
  其中我们称态射 $\widetilde{\psi}$ **伴随 (adjunct)** 于 $\psi$, 或称态射 $\psi$ 的伴随为 $\widetilde{\psi}$, 因此又通常简记双射 $\varphi_{C, D}$ 为 $\widetilde{(-)}$.

- $\varphi$ 应满足自然性, 即其于 $C, D$ 上是自然的, 亦即是说对任意 $C_1, C_2 \in \Ob{\mathcal{C}}$ 与 $D_1, D_2 \in \Ob{\mathcal{D}}$ 以及 $f : C_1 \to C_2$ 和 $g : D_1 \to D_2$, 须使以下自然方块交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtEfShMKENfMSksIERfMSkifSx7InBvc2l0aW9uIjpbMiwwXSwidmFsdWUiOiJcXHRleHR7SG9tfV9cXG1hdGhjYWx7Q30oQ18xLCBSKERfMSkpIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiXFx0ZXh0e0hvbX1fXFxtYXRoY2Fse0R9KEwoQ18yKSwgRF8yKSJ9LHsicG9zaXRpb24iOlsyLDFdLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtDfShDXzIsIFIoRF8yKSkifV0sImVkZ2VzIjpbeyJmcm9tIjoyLCJ0byI6MywidmFsdWUiOiJcXHdpZGV0aWxkZXsoLSl9IiwibGFiZWxQb3NpdGlvbiI6InJpZ2h0In0seyJmcm9tIjowLCJ0byI6MSwidmFsdWUiOiJcXHdpZGV0aWxkZXsoLSl9In0seyJmcm9tIjowLCJ0byI6MiwidmFsdWUiOiJcXHRleHR7SG9tfV9cXG1hdGhjYWx7RH0oTChmKSwgZykiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjEsInRvIjozLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtDfShmLCBSKGcpKSJ9XX0=
  \xymatrix{
  \text{Hom}_\mathcal{D}(L(C_1), D_1) \ar@{->}[rr]^{\widetilde{(-)}} \ar@{->}[d]_{{\text{Hom}_\mathcal{D}(L(f), g)}} &  & \text{Hom}_\mathcal{C}(C_1, R(D_1)) \ar@{->}[d]^{{\text{Hom}_\mathcal{C}(f, R(g))}} \\
  \text{Hom}_\mathcal{D}(L(C_2), D_2) \ar@{->}[rr]_{\widetilde{(-)}} &  & \text{Hom}_\mathcal{C}(C_2, R(D_2))
  }
  $$
  具体的说, 将上述交换图拆分为左右两侧观察的话, 可以得出以下态射的复合是等价的 (注意 $\op{Hom}$-函子左侧参数为对偶范畴, 即态射取逆)：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IkwoQ18yKSJ9LHsicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkwoQ18xKSJ9LHsicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IkRfMSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IkRfMiJ9LHsicG9zaXRpb24iOlszLDFdLCJ2YWx1ZSI6IkNfMiJ9LHsicG9zaXRpb24iOlszLDBdLCJ2YWx1ZSI6IkNfMSJ9LHsicG9zaXRpb24iOls0LDBdLCJ2YWx1ZSI6IlIoRF8xKSJ9LHsicG9zaXRpb24iOls0LDFdLCJ2YWx1ZSI6IlIoRF8yKSJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJ2YWx1ZSI6IkwoZikiLCJsaW5lIjoic29saWQiLCJoZWFkIjpudWxsfSx7ImZyb20iOjEsInRvIjoyLCJ2YWx1ZSI6IlxccHNpIn0seyJmcm9tIjoyLCJ0byI6MywidmFsdWUiOiJnIn0seyJmcm9tIjo0LCJ0byI6NSwidmFsdWUiOiJmIn0seyJmcm9tIjo1LCJ0byI6NiwidmFsdWUiOiJcXHdpZGVoYXR7XFxwc2l9In0seyJmcm9tIjo2LCJ0byI6NywidmFsdWUiOiJSKGcpIn1dfQ==
  \xymatrix{
  L(C_1) \ar@{->}[r]^{\psi} & D_1 \ar@{->}[d]^{g} & \vcenter{=} & C_1 \ar@{->}[r]^{\widetilde{\psi}} & R(D_1) \ar@{->}[d]^{R(g)} \\
  L(C_2) \ar@{->}[u]^{L(f)} & D_2 & = & C_2 \ar@{->}[u]^{f} & R(D_2)
  }
  $$

### 例子 4.1.2 (双线性型的伴随同构)

设有域 $\mathbb{K}$ 以及其上的线性空间 $V, W \in \Vect_\mathbb{K}$, 则存在自然同构 $\Map{\varphi_{V, W}}{\Hom{\Vect_\mathbb{K}}{V}{W^*}}{\Hom{\Vect_\mathbb{K}}{W}{V^*}}{f}{[w \mapsto [v \mapsto f(v)(w)]]}$, 且由于：
$$
% https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IlxcdGV4dHtIb219X3tcXHRleHR7VmVjdH1fXFxtYXRoYmJ7S319KFYsIFdeKikifSx7InBvc2l0aW9uIjpbMiwwXSwidmFsdWUiOiJcXHRleHR7SG9tfV97XFx0ZXh0e1ZlY3R9X1xcbWF0aGJie0t9fShXLCBWXiopIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiXFx0ZXh0e0hvbX1fe1xcdGV4dHtWZWN0fV9cXG1hdGhiYntLfX0oViBcXHRpbWVzIFcsIFxcbWF0aGJie0t9KSJ9LHsicG9zaXRpb24iOlsyLDFdLCJ2YWx1ZSI6IlxcdGV4dHtIb219X3tcXHRleHR7VmVjdH1fXFxtYXRoYmJ7S319KFcgXFx0aW1lcyBWLCBcXG1hdGhiYntLfSkifV0sImVkZ2VzIjpbeyJmcm9tIjowLCJ0byI6MSwidmFsdWUiOiJcXHZhcnBoaV97ViwgV30ifSx7ImZyb20iOjAsInRvIjoyLCJ2YWx1ZSI6Ilxcc2ltZXEiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjEsInRvIjozLCJ2YWx1ZSI6Ilxcc2ltZXEifSx7ImZyb20iOjIsInRvIjozLCJ2YWx1ZSI6Ilxcc2ltZXEiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifV19
\xymatrix{
\text{Hom}_{\text{Vect}_\mathbb{K}}(V, W^*) \ar@{->}[rr]^{{\varphi_{V, W}}} \ar@{->}[d]_{\simeq} &  & \text{Hom}_{\text{Vect}_\mathbb{K}}(W, V^*) \ar@{->}[d]^{\simeq} \\
\text{Hom}_{\text{Vect}_\mathbb{K}}(V \times W, \mathbb{K}) \ar@{->}[rr]_{\simeq} &  & \text{Hom}_{\text{Vect}_\mathbb{K}}(W \times V, \mathbb{K})
}
$$
注意到其中任意域 $\mathbb{K}$ 都是 $\mathbb{K}$ 上的线性空间, 因此 $\mathbb{K} \in \Vect_\mathbb{K}$, 那么只要设 $\Map{D}{\Vect_\mathbb{K}^\oppos}{\Vect_\mathbb{K}}{V}{V^*}$, 则上述自然同构 $\varphi$ 可改写为伴随同构：
$$
\Hom{\Vect_\mathbb{K}}{V}{D(W)} \overset{\varphi_{V, W}}{\simeq} \Hom{\Vect_\mathbb{K}^\oppos}{D^\oppos(V)}{W}
$$
且对 $V, W$ 满足函子性, 因此便有了一对伴随函子 $\xymatrix@C+0pc{
\Vect_{\mathbb{K}}^\oppos \rtwocell<5>^{D}_{D^\oppos}{' \Large\bot} & \Vect_{\mathbb{K}}
}$, 而伴随对为 $(D^\oppos, D, \varphi^{-1})$.

然而只要限制上述线性空间到有限维的情况, 即于 $\op{FinVect}_\mathbb{K}$ 范畴内, $D, D^\oppos$ 这一对函子则可提升为范畴等价.

### 定义 4.1.3 (单位与余单位)

设 $\xymatrix@C+0pc{
\mathcal{C} \rtwocell<4>^{L}_{R}{'\Large \bot} & \mathcal{D}
}$ 为一对伴随函子, 则：

- 对任意 $C \in \Ob{\mathcal{C}}$, 称态射 $\eta_C \coloneqq \bb{ 1_\mathcal{C}(C) \overto{\widetilde{1_{L(C)}}} R(L(C)) }$ 为 $L \dashv R$ 的 **单位 (unit of adjunction)**;
- 对任意 $D \in \Ob{\mathcal{D}}$, 称态射 $\epsilon_D \coloneqq \bb{ L(R(D)) \overto{1_{R(D)}} 1_\mathcal{D}(D) }$ 为 $L \dashv R$ 的 **余单位 (counit of adjunction)**.

### 注释 (单位与余单位定义的补充)

设 $\Map{\widetilde{(-)}}{\Hom{\mathcal{D}}{L(C)}{D}}{\Hom{\mathcal{C}}{C}{R(D)}}{\bb{L(C) \overto{\psi} D}}{\bb{C \overto{\widetilde{\psi}} R(D)}}$ 为上述 $L \dashv R$ 的伴随同构, 那么只要：

- 取 $D = L(C)$ 则有 $\op{Hom}$-集 之间的同构 $\Map{\widetilde{(-)}}{\Hom{\mathcal{D}}{L(C)}{L(C)}}{\Hom{\mathcal{C}}{C}{R(L(C))}}{\bb{L(C) \overto{1_{L(C)}} L(C)}}{\bb{C \overto{\widetilde{1_{L(C)}}} R(L(C))}}$, 故可定义 $\eta_C$ 为 $\widetilde{1_{L(C)}}$;
- 取 $C = R(D)$ 则有 $\op{Hom}$-集 之间的同构 $\LMap{\widetilde{(-)}}{\Hom{\mathcal{D}}{L(R(D))}{D}}{\Hom{\mathcal{C}}{R(D)}{R(D)}}{\bb{L(R(D)) \overto{\widetilde{1_{R(D)}}} D}}{\bb{R(D) \overto{1_{R(D)}} R(D)}}$, 故可定义 $\epsilon_D$ 为 $\widetilde{1_{R(D)}}$.

### 命题 4.1.4 (由单位与余单位刻画伴随函子)

设 $\xymatrix@C+0pc{
\mathcal{C} \rtwocell<4>^{L}_{R}{'\Large \bot} & \mathcal{D}
}$ 为一对伴随函子, 对任意 $C \in \Ob{\mathcal{C}}$ 以及 $D \in \Ob{\mathcal{D}}$, 则以下命题成立：

1. 对 $\mathcal{D}$ 中的任意态射 $L(C) \overto{\psi} D$, 则它的伴随 $C \overto{\widetilde{\psi}} R(D)$ 可由态射复合 $C \overto{\eta_C} R(L(C)) \overto{R(\psi)} R(D)$ 给出;

   同样地, 对 $\mathcal{C}$ 中的任意态射 $C \overto{\psi} R(D)$, 则它的伴随 $L(C) \overto{\widetilde{\psi}} D$ 可由态射复合 $L(C) \overto{L(\psi)} L(R(D)) \overto{\epsilon_D} D$ 给出.

2. 事实上 [定义 4.1.3](#定义_4.1.3_(单位与余单位)) 中的 $\eta_C$ 与 $\epsilon_D$ 皆为自然变换 $\eta : 1_\mathcal{C} \rArr R \circ L$ 与 $\epsilon : L \circ R \rArr 1_\mathcal{D}$ 的构件, 请验证它们的自然性.

3. 以下 **三角恒等式 (triangle equality)** 成立：
   $$
   \begin{align}
   \bb{ R \overto{\eta R} (RL)R = R(LR) \overto{R \epsilon} R } & = 1_R \\
   \bb{ L \overto{L \eta} L(RL) = (LR)L \overto{\epsilon L} L } & = 1_L
   \end{align}
   $$

##### 证明

1. 我们只证 $\widetilde{\psi} : C \to R(D)$ 的情况, 即 $\vcenter{\xymatrix{
   C \ar@{->}[r]^{\eta_C} \ar@{->}[rd]_{\widetilde{\psi}} & R(L(C)) \ar@{->}[d]^{R(\psi)} \\
    & R(D)
   }}$ 应交换, 而由于 $\widetilde{\psi}$ 与 $\eta_C \circ R(\psi)$ 都在 $\Hom{\mathcal{C}}{C}{R(D)}$ 内, 那么由伴随同构的自然性：
   $$
   % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtEfShMKEMpLCBMKEMpKSJ9LHsicG9zaXRpb24iOlszLDBdLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtDfShDLCBSKEwoQykpKSJ9LHsicG9zaXRpb24iOlszLDFdLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtDfShDLCBSKEQpKSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtEfShMKEMpLCBEKSJ9LHsicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IjFfe0woQyl9In0seyJwb3NpdGlvbiI6WzQsMF0sInZhbHVlIjoiXFx3aWRldGlsZGV7MV97TChDKX19ID0gXFxldGFfQyJ9LHsicG9zaXRpb24iOls0LDFdLCJ2YWx1ZSI6Ilxcd2lkZXRpbGRle1xccHNpfSA9IFIoXFxwc2kpIFxcY2lyYyBcXGV0YV9DIn0seyJwb3NpdGlvbiI6WzAsMV0sInZhbHVlIjoiXFxwc2kgXFxjaXJjIDFfe0woQyl9In1dLCJlZGdlcyI6W3siZnJvbSI6MCwidG8iOjEsInZhbHVlIjoiXFx3aWRldGlsZGV7KC0pfSJ9LHsiZnJvbSI6MSwidG8iOjIsInZhbHVlIjoiXFx0ZXh0e0hvbX1fXFxtYXRoY2Fse0N9KDFfQywgUihcXHBzaSkpIiwibGFiZWxQb3NpdGlvbiI6ImxlZnQifSx7ImZyb20iOjAsInRvIjozLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtEfShMKDFfQyksIFxccHNpKSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6MywidG8iOjIsInZhbHVlIjoiXFx3aWRldGlsZGV7KC0pfSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6NCwidG8iOjAsImxpbmUiOiJzb2xpZCIsImhlYWQiOiJub25lIiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSIsInZhbHVlIjoiXFxpbiJ9LHsiZnJvbSI6NSwidG8iOjYsInRhaWwiOiJtYXBzdG8ifSx7ImZyb20iOjQsInRvIjo3LCJ0YWlsIjoibWFwc3RvIn0seyJmcm9tIjo3LCJ0byI6MywiaGVhZCI6Im5vbmUiLCJ2YWx1ZSI6IlxcaW4iLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjo1LCJ0byI6MSwiaGVhZCI6Im5vbmUiLCJ2YWx1ZSI6IlxcbmkiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjo2LCJ0byI6MiwiaGVhZCI6Im5vbmUiLCJ2YWx1ZSI6IlxcbmkiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn1dfQ==
   \xymatrix{
   1_{L(C)} \ar@{}[r]|-{\in} \ar@{|->}[d] & \text{Hom}_\mathcal{D}(L(C), L(C)) \ar@{->}[rr]^{\widetilde{(-)}} \ar@{->}[d]_{{\text{Hom}_\mathcal{D}(L(1_C), \psi)}} &  & \text{Hom}_\mathcal{C}(C, R(L(C))) \ar@{->}[d]^{{\text{Hom}_\mathcal{C}(1_C, R(\psi))}} & \widetilde{1_{L(C)}} = \eta_C \ar@{|->}[d] \ar@{}[l]|-{\ni} \\
   \psi \circ 1_{L(C)} \ar@{}[r]|-{\in} & \text{Hom}_\mathcal{D}(L(C), D) \ar@{->}[rr]_{\widetilde{(-)}} &  & \text{Hom}_\mathcal{C}(C, R(D)) & \widetilde{\psi} = R(\psi) \circ \eta_C \ar@{}[l]|-{\ni}
   }
   $$
   可得知上述图表交换, 因此 $\widetilde{\psi} = R(\psi) \circ \eta_C$ 成立.

2. 首先验证 $1_\mathcal{C} \rArr R \circ L$ 的自然性, 假设有 $C_1, C_2 \in \Ob{\mathcal{C}}$ 以及它们之间的态射 $f : C_1 \to C_2$, 应使得 $\vcenter{\xymatrix{
   1_\mathcal{C}(C_1) \ar@{->}[r]^{\eta_{C_1}} \ar@{->}[d]_{f} & R(L(C_1)) \ar@{->}[d]^{R(L(f))} \\
   1_\mathcal{C}(C_2) \ar@{->}[r]_{\eta_{C_2}} & R(L(C_2))
   }}$ 交换, 那么由伴随同构的自然性, 遂得知以下自然方块是可交换的：
   $$
   % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtEfShMKENfMiksIEwoQ18yKSkifSx7InBvc2l0aW9uIjpbMywwXSwidmFsdWUiOiJcXHRleHR7SG9tfV9cXG1hdGhjYWx7Q30oQ18yLCBSKEwoQ18yKSkpIn0seyJwb3NpdGlvbiI6WzEsMV0sInZhbHVlIjoiXFx0ZXh0e0hvbX1fXFxtYXRoY2Fse0R9KEwoQ18xKSwgTChDXzIpKSJ9LHsicG9zaXRpb24iOlszLDFdLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtDfShDXzEsIFIoTChDXzIpKSkifSx7InBvc2l0aW9uIjpbMCwwXSwidmFsdWUiOiIxX3tMKENfMil9In0seyJwb3NpdGlvbiI6WzQsMF0sInZhbHVlIjoiXFx3aWRldGlsZGV7MV97TChDXzIpfX0gPSBcXGV0YV97Q18yfSJ9LHsicG9zaXRpb24iOls0LDFdLCJ2YWx1ZSI6IlIoTChmKSkgXFxjaXJjIFxcZXRhX3tDXzF9ID1cXGV0YV97Q18yfSBcXGNpcmMgZiJ9LHsicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IjFfe0woQ18yKX0gXFxjaXJjIEwoZikifV0sImVkZ2VzIjpbeyJmcm9tIjoyLCJ0byI6MywibGFiZWxQb3NpdGlvbiI6InJpZ2h0IiwidmFsdWUiOiJcXHdpZGV0aWxkZXsoLSl9In0seyJmcm9tIjowLCJ0byI6MSwidmFsdWUiOiJcXHdpZGV0aWxkZXsoLSl9In0seyJmcm9tIjowLCJ0byI6MiwidmFsdWUiOiJcXHRleHR7SG9tfV9cXG1hdGhjYWx7RH0oTChmKSwgMV97TChDXzIpfSkiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjEsInRvIjozLCJ2YWx1ZSI6IlxcdGV4dHtIb219X1xcbWF0aGNhbHtDfShmLCAxX3tSKEwoQ18yKSl9KSIsImxhYmVsUG9zaXRpb24iOiJsZWZ0In0seyJmcm9tIjo0LCJ0byI6MCwiaGVhZCI6Im5vbmUiLCJ2YWx1ZSI6IlxcaW4iLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjo1LCJ0byI6MSwiaGVhZCI6Im5vbmUiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIiwidmFsdWUiOiJcXG5pIn0seyJmcm9tIjo2LCJ0byI6MywiaGVhZCI6Im5vbmUiLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIiwidmFsdWUiOiJcXG5pIn0seyJmcm9tIjo3LCJ0byI6MiwiaGVhZCI6Im5vbmUiLCJ2YWx1ZSI6IlxcaW4iLCJsYWJlbFBvc2l0aW9uIjoiaW5zaWRlIn0seyJmcm9tIjo1LCJ0byI6NiwidGFpbCI6Im1hcHN0byJ9LHsiZnJvbSI6NCwidG8iOjcsInRhaWwiOiJtYXBzdG8ifV19
   \xymatrix{
   1_{L(C_2)} \ar@{}[r]|-{\in} \ar@{|->}[d] & \text{Hom}_\mathcal{D}(L(C_2), L(C_2)) \ar@{->}[rr]^{\widetilde{(-)}} \ar@{->}[d]_{{\text{Hom}_\mathcal{D}(L(f), 1_{L(C_2)})}} &  & \text{Hom}_\mathcal{C}(C_2, R(L(C_2))) \ar@{->}[d]^{{\text{Hom}_\mathcal{C}(f, 1_{R(L(C_2))})}} & \widetilde{1_{L(C_2)}} = \eta_{C_2} \ar@{}[l]|-{\ni} \ar@{|->}[d] \\
   1_{L(C_2)} \circ L(f) \ar@{}[r]|-{\in} & \text{Hom}_\mathcal{D}(L(C_1), L(C_2)) \ar@{->}[rr]_{\widetilde{(-)}} &  & \text{Hom}_\mathcal{C}(C_1, R(L(C_2))) & R(L(f)) \circ \eta_{C_1} =\eta_{C_2} \circ f \ar@{}[l]|-{\ni} \\
   }
   $$
   同理可证 $\epsilon$ 的自然性, 此处略过.

3. 由 $(1)$, 只要对 $L(C) \overto{L(\psi)} L(R(D)) \overto{\epsilon_D} D$ 代入 $D = L(C)$, 则有以下等式：
   $$
   \begin{align}
   1_L(C) & = C \overto{\widetilde{\widetilde{1_{L(C)}}}} R(L(C)) & [\text{由于 $\widetilde{(-)}$ 为同构}] \\
   & = L(C) \overto{\widetilde{\eta_C}} L(C) \\
   & = L(C) \overto{L(\eta_C)} L(R(L(C))) \overto{\epsilon_{L_C}} L(C) & [\text{由 $(1)$ 给出}] \\
   & = L(C) \overto{(L \eta)_C} L(R(L(C))) \overto{(\epsilon L)_C} L(C) & [\text{Whisker 化}] \\
   \end{align}
   $$

### 命题 4.1.5 (以三角恒等式定义伴随函子)

设有一对函子 $\xymatrix@C+0pc{
\mathcal{C} \rtwocell<4>^{L}_{R}{'} & \mathcal{D}
}$, 则这是一对伴随函子 $\iff$ 存在 [命题 4.1.4](#命题_4.1.4_(由单位与余单位刻画伴随函子)) 中 $(2)$ 的自然变换以及 $(3)$ 中的三角恒等式.

##### 证明

事实上 $(\rArr)$ 已由 [命题 4.1.4](#命题_4.1.4_(由单位与余单位刻画伴随函子)) 的 $(2), (3)$ 给出, 因此以下只证 $(\lArr)$ 的情形：

设存在自然变换 $\eta : 1_\mathcal{C} \rArr R \circ L$ 与 $\epsilon : L \circ R \rArr 1_\mathcal{D}$ 以及三角恒等式 $\begin{align}
\bb{ R \overto{\eta R} (RL)R = R(LR) \overto{R \epsilon} R } & = 1_R \\
\bb{ L \overto{L \eta} L(RL) = (LR)L \overto{\epsilon L} L } & = 1_L
\end{align}$ 成立, 对任意 $C_1, C_2 \in \Ob{\mathcal{C}}$ 与 $D_1, D_2 \in \Ob{\mathcal{D}}$, 我们定义 $\op{Hom}$-集 间的态射为：
$$
\LRMap{\widetilde{(-)}}{\Hom{\mathcal{D}}{L(C)}{D}}{\Hom{\mathcal{C}}{C}{R(D)}}{ \bb{L(C) \overto{\psi} D} }{ \widetilde{\psi} \coloneqq \bb{ C \overto{\eta_C} R(L(C)) \overto{R(\psi)} R(D) }}{ \bb{L(C) \overto{L(\psi)} L(R(D)) \overto{\epsilon_D} D} \eqqcolon \widetilde{\psi} }{ \bb{C \overto{\psi} R(D)} }
$$
现在分别证明：

- $\widetilde{(-)}$ 的自然性, 则应证明对任意 $f : C_2 \to C_1$ 和 $g : D_1 \to D_2$, 须使以下自然方块交换 (同时设 $\psi \in \Hom{\mathcal{D}}{L(C_1)}{D_1}$)：
  $$
  \xymatrix{
  \psi \ar@{}[r]|-{\in} & \text{Hom}_\mathcal{D}(L(C_1), D_1) \ar@{->}[rr]^{\widetilde{(-)}} \ar@{->}[d]_{{\text{Hom}_\mathcal{D}(L(f), g)}} &  & \text{Hom}_\mathcal{C}(C_1, R(D_1)) \ar@{->}[d]^{{\text{Hom}_\mathcal{C}(f, R(g))}} & \widetilde{\psi} \ar@{}[l]|-{\ni} \\
  g \circ \psi \circ L(f) \ar@{}[r]|-{\in} & \text{Hom}_\mathcal{D}(L(C_2), D_2) \ar@{->}[rr]_{\widetilde{(-)}} &  & \text{Hom}_\mathcal{C}(C_2, R(D_2)) & 
  }
  $$
  即应使得 $\widetilde{g \circ \psi \circ L(f)} = R(g) \circ \widetilde{\psi} \circ f$ 成立, 而代入 $\widetilde{\psi}$ 的定义即应有：
  $$
  \bb{ C_2 \overto{\eta_{C_2}} R(L(C_2)) \overto{R(g \circ \psi \circ L(f))} R(D_2) } = \bb{ C_2 \overto{f} C_1 \overto{\eta_{C_1}} R(L(C_1)) \overto{R(\psi)} R(D_1) \overto{R(g)} R(D_2) }
  $$
  那么由 $R$ 的函子性以及 $\eta$ 的自然性, 便可得知以下图表交换：
  $$
  % https://darknmt.github.io/res/xypic-editor/#eyJub2RlcyI6W3sicG9zaXRpb24iOlswLDBdLCJ2YWx1ZSI6IkNfMiJ9LHsicG9zaXRpb24iOlswLDFdLCJ2YWx1ZSI6IkNfMSJ9LHsicG9zaXRpb24iOlsxLDBdLCJ2YWx1ZSI6IlIoTChDXzIpKSJ9LHsicG9zaXRpb24iOlsxLDFdLCJ2YWx1ZSI6IlIoTChDXzEpKSJ9LHsicG9zaXRpb24iOlsyLDFdLCJ2YWx1ZSI6IlIoRF8xKSJ9LHsicG9zaXRpb24iOlsyLDJdLCJ2YWx1ZSI6IlIoRF8yKSJ9XSwiZWRnZXMiOlt7ImZyb20iOjAsInRvIjoxLCJ2YWx1ZSI6ImYiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjAsInRvIjoyLCJ2YWx1ZSI6IlxcZXRhX3tDXzJ9In0seyJmcm9tIjoyLCJ0byI6MywidmFsdWUiOiJSKEwoZikpIiwibGFiZWxQb3NpdGlvbiI6Imluc2lkZSJ9LHsiZnJvbSI6MSwidG8iOjMsInZhbHVlIjoiXFxldGFfe0NfMX0iLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjIsInRvIjo0LCJ2YWx1ZSI6IlIoXFxwc2kgXFxjaXJjIEwoZikpIn0seyJmcm9tIjozLCJ0byI6NCwidmFsdWUiOiJSKFxccHNpKSIsImxhYmVsUG9zaXRpb24iOiJyaWdodCJ9LHsiZnJvbSI6MywidG8iOjUsInZhbHVlIjoiUihnIFxcY2lyYyBcXHBzaSkiLCJsYWJlbFBvc2l0aW9uIjoicmlnaHQifSx7ImZyb20iOjQsInRvIjo1LCJ2YWx1ZSI6IlIoZykifV19
  \xymatrix{
  C_2 \ar@{->}[d]_{f} \ar@{->}[r]^{\eta_{C_2}} & R(L(C_2)) \ar@{->}[d]|-{R(L(f))} \ar@{->}[rd]^{R(\psi \circ L(f))} &  \\
  C_1 \ar@{->}[r]_{\eta_{C_1}} & R(L(C_1)) \ar@{->}[r]_{R(\psi)} \ar@{->}[rd]_{R(g \circ \psi)} & R(D_1) \ar@{->}[d]^{R(g)} \\
   &  & R(D_2)
  }
  $$

- $\widetilde{(-)}$ 为双射, 即应使得 $\widetilde{\widetilde{\psi}} = \psi \in \Hom{\mathcal{D}}{L(C)}{D}$, 因此有：
  $$
  \begin{align}
  \widetilde{\widetilde{\psi}}
  & = \widetilde{ C \overto{\eta_C} R(L(C)) \overto{R(\psi)} R(D) } \\
  & = L(C) \overto{L(R(\psi) \circ \eta_C)} L(R(D)) \overto{\epsilon_D} D \\
  & = L(C) \overto{L(\eta_C)} L(R(L(C))) \overto{L(R(\psi))} L(R(D)) \overto{\epsilon_D} D \\
  & = L(C) \overto{L(\eta_C)} L(R(L(C))) \overto{\epsilon_{L(C)}} L(C) \overto{\psi} D \\
  & = L(C) \overto{\psi} D & [三角恒等式] \\
  \end{align}
  $$

  此外, 对于 $\widetilde{\widetilde{\psi}} = \psi \in \Hom{\mathcal{C}}{C}{R(D)}$ 亦然, 因此便得知 $\widetilde{(-)}$ 的确为双射.

## 4.2. 伴随函子与可表性

...

{% end %}