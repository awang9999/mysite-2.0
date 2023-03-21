Chapter 1: Preliminaries
========================

The Derivative
--------------

We can begin the discussion of matrix calculus by revisiting the
definition of a derivative. For many students, the difference quotient
definition will be familiar. We will show that this is equivalent to a
defining the derivative as the best linear approximator of the function
as this setup will lay the foundations for discussing derivatives of
matrix-like objects.

Recall the difference quotient definition of the derivative. Let
$U \subseteq \mathbb{R}$ be an open subset (for simplicity) and
$f: U \to \mathbb{R}$ be a sufficiently smooth, single variable,
scalar-valued function. Let $a \in U$. Then we can define the derivative
of $f$ at $a$ to be

$$
\begin{equation}
    \frac{d}{dx} f(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}
\end{equation}
$$

If $f$ has a derivative at every point in its domain, then we say $f$ is
a differentiable function and its derivative
$\frac{df}{dx}: U \to \mathbb{R}$ is a function defined by the
difference quotient.

$$
\begin{equation}
    \frac{df}{dx} (x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
\end{equation}
$$

This function is unique to $f$ although this property will not be proven
here. Refer to Strichartz Chapter 5 for more details.

If you are unfamiliar with the rigorous definitions of open subsets or
\"sufficiently smooth,\" that is okay. The idea behind them in the
definition is to prevent the case where we try to define the derivative
on a non-differentiable function. A more rigorous discussion on
differentiability and subset topology belongs to an analysis course and
is unfortunately out of scope for this guide.

Now observe how we can convert the difference quotient expression to
that of a linear approximation. If we remove the limit, then there must
exist a function $\epsilon(h)$ which represents the error between the
difference quotient and the derivative at a point. We know that this
function $\epsilon(h)$ must satisfy $\lim_{x \to 0} \epsilon(h) = 0$.
Then we can write,

$$
\begin{equation}
    \frac{df}{dx}(x) + \epsilon(h) = \frac{f(x+h) - f(x)}{h}
\end{equation}
$$

and consequently

$$
\begin{equation}
    f(x+h) = f(x) + \frac{df}{dx}(x)(h) + \epsilon(h)h
\end{equation}
$$

When $h \to 0$ the term $\epsilon(h) h \approx h^2 = o(h)$ using
little-O notation.

Here is a quick recap of little-O notation and the main property that we
will use: If $f(x) = o(g(x))$ then

$$
\begin{equation}
    \lim_{x \to 0} \frac{f(x)}{g(x)} = 0
\end{equation}
$$

We can rearrange the above expression to demonstrate how the derivative
is a linear approximation.

$$
\begin{equation}
    f(x+h) = f(x) + \frac{df}{dx}(x)(h) + o(h).
\end{equation}
$$

For small values of $h$, the error term can be disregarded. Observe how
$f(x+h)$ can be approximated by an affine function (of the type
$ax + b$) where the derivative $\frac{df}{dx}(x)$ acts as the slope. We
can define the derivative as being the unique scalar value for which the
error is minimal. (Although uniqueness is not proven here) By
rearranging the terms and dividing both sides by $h$, we get

$$
\begin{equation}
    \frac{f(x+h) - f(x) - \frac{df}{dx}(x)(h)}{h} = \frac{o(h)}{h}
\end{equation}
$$

If we take the absolute value and limit of both sides as $h \to 0$, we
arrive at an alternate definition for the derivative.

Let $U \subseteq \mathbb{R}$ be an open subset and $f: U \to \mathbb{R}$
be a sufficiently smooth, single variable, scalar-valued function. Let
$a \in U$. If there exists a scalar value $A$ such that

$$
\begin{equation}
    \lim_{h \to 0} \frac{f(a+h) - f(a) - Ah}{h} = \lim_{h \to 0} \frac{o(h)}{h} = 0
\end{equation}
$$

then we say that $f$ is differentiable at $a$, and we can usually denote
the quantity $A$ as

$$
\begin{equation}
    \frac{df}{dx}(a) = A
\end{equation}
$$

If $f$ is differentiable at every point $x \in U$, then we say $f$ is
differentiable in $U$ and it\'s derivative is the function
$\frac{df}{dx}: U \to \mathbb{R}$ that maps points in the domain to the
scalar value that satisfies the above pointwise condition. Now that we
have established this alternate definition of the derivative, we are in
good shape to continue deciphering matrix calculus.

Partial Derivatives
-------------------

The partial derivative is closely related to the normal derivative.
However, partial derivatives pertain to functions of several variables
in the domain. The partial derivative of a function of several variables
is its derivative with respect to one of the variables in its domain
with the others held constant. We can formalize this the following way.

Let $U \subseteq \mathbb{R}^n$ be an open subset and
$f: U \to \mathbb{R}$ a function. The partial derivative of $f$ at the
point $\mathbf{a} = (a_1, ..., a_n) \in U$ with respect to the $i$\'th
variable is the scalar value $A$ with satisfies

$$
\begin{align*}
    \lim_{h \to 0} \frac{f(\mathbf{a} + h\mathbf{e}_i) - f(\mathbf{a}) - Ah \mathbf{e}_i}{h} = 0
\end{align*}
$$

This is equivalent to

$$
\begin{equation}
    f(\mathbf{a} + h\mathbf{e}_i) = f(\mathbf{a}) + Ah\mathbf{e}_i + o(h)
\end{equation}
$$

Here, $\mathbf{e}_i$ is the unit vector in $\mathbb{R}^n$ with zeros in
all elements except for a $1$ in the $i$\'th element. The value $A$ is
often denoted the following way:

$$
\begin{align*}
    A = \frac{\partial f}{\partial x_i}(\mathbf{a})
\end{align*}
$$

and read as the partial derivative of $f$ with respect to $x_i$ at point
$\mathbf{a}$. The partial derivative will be important for deciphering
what elements make up the total derivative discussed next chapter.

Linear Maps
-----------

Soon we will learn that the total derivative is defined to be a linear
map. But before we dive into that topic, we must first recall some
properties of linear maps. Here is a hopefully familiar definition for a
linear map from linear algebra.

Let $V$ and $W$ be vector spaces over the same field $K$. Let
$T: U \to V$ be a mapping from the $V$ vector space to the $W$ vector
space. The mapping $T$ is said to be a linear map if it satisfies the
following two conditions for any $\mathbf{u}, \mathbf{v} \in V$ and any
scalar $k \in K$:

1. Additivity:
    $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$
2. Degree 1 Homogeneity: $T(k \mathbf{v}) = kT(\mathbf{v})$

Another useful property of linear maps is that they can be entirely
determined by its action on a set of basis vectors for the domain. This
allows us to create a matrix that represents the linear mapping and
applying the linear mapping to a vector becomes equivalent to
multiplying the matrix and the vector. This is vastly useful because it
allows for concrete computations. Secondly, most applications of matrix
calculus deal with linear mappings in $\mathbb{R}^n$ and thus the values
of the linear transformation matrix and vectors in the domain correspond
to real quantities.

Suppose $V$ and $W$ are finite-dimensional vector spaces and let
$\{\mathbf{v_1}, ..., \mathbf{v_n}\}$ and
$\{\mathbf{w_1}, ..., \mathbf{w_m}\}$ be bases for $V$ and $W$
respectively. Every vector $\mathbf{v} \in V$ can be uniquely determined
by the coefficients $c_1, ..., c_n$ in the field $\mathbb{R}$.

$$
\begin{equation}
    \mathbf{v} = \sum_{j=1}^n c_j \mathbf{v_j}
\end{equation}
$$
Note that conventionally, the entries $c_j$ make up the elements in the
vector when written out in the $\mathbf{v}_j$ coordinate system. That
is,

$$
\begin{equation}
    \mathbf{v} = \begin{bmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{bmatrix}_{[\mathbf{v}_j]}
\end{equation}
$$
If the basis for a certain coordinate system is already understood, then
the subscript is often dropped from the explicit vector notation. If
$f: V \to W$ is a linear map, then

$$
\begin{equation}
    f(\mathbf{v}) = f(\sum_{j=1}^n c_j \mathbf{v}_j) = \sum_{j=1}^n c_j f(\mathbf{v}_j)
\end{equation}
$$
This shows that the function $f$ can be entirely determined by the
vectors $f(\mathbf{v_j})$ for $j = 1,...,n$. Since each of these vectors
are in $W$, we can represent each $f(\mathbf{v}_j)$ as

$$
\begin{equation}
    f(\mathbf{v}_j) = \sum_{i=1}^m a_{ij} \mathbf{w}_i
\end{equation}
$$
Putting this into the equation above it, we get

$$
\begin{equation}
    f(\mathbf{v}) = \sum_{j=1}^n c_j \sum_{i=1}^m a_{ij} \mathbf{w}_i
\end{equation}
$$
Now watch what happens when we put the $a_{ij}$ entries into an
$m \times n$ matrix. Consider the matrix

$$
\begin{equation}
    M =
    \begin{bmatrix}
    a_{11} & a_{12} & \cdots & a_{1n} \\ 
    a_{21} & a_{22} & \cdots & a_{2n} \\ 
    \vdots & \vdots & \ddots & \vdots \\ 
    a_{m1} & a_{m2} & \cdots & a_{mn} \\ 
    \end{bmatrix}
\end{equation}
$$
If we take an arbitrary $\mathbf{v} \in V$ and multiply it by $M$ we get

$$
\begin{equation}
    Mv = 
    \begin{bmatrix}
    a_{11} & a_{12} & \cdots & a_{1n} \\ 
    a_{21} & a_{22} & \cdots & a_{2n} \\ 
    \vdots & \vdots & \ddots & \vdots \\ 
    a_{m1} & a_{m2} & \cdots & a_{mn} \\ 
    \end{bmatrix}
    \begin{bmatrix}
        c_1 \\ c_2 \\ \vdots \\ c_n 
    \end{bmatrix}
    =
    \begin{bmatrix}
        \sum_{j=1}^n c_j a_{1j} \\
        \sum_{j=1}^n c_j a_{2j} \\
        \vdots \\
        \sum_{j=1}^n c_j a_{mj} \\
    \end{bmatrix}
    =
    \sum_{i=1}^m \sum_{j=1}^n c_j a_{ij} \mathbf{w}_i
\end{equation}
$$
Rearranging the terms, we arrive at the exact same expression as
$f(\mathbf{v})$:

$$
\begin{equation}
    Mv = \sum_{j=1}^n c_j \sum_{i=1}^m a_{ij} \mathbf{w}_i = f(\mathbf{v})
\end{equation}
$$
which shows that we can indeed represent any linear transformation with
a matrix whose entries are dependent on the bases we choose for the
domain and codomain vector spaces.

Linearity of Differentiation
----------------------------

Consider two differentiable functions $f: \mathbb{R} \to \mathbb{R}$ and
$g: \mathbb{R} \to \mathbb{R}$ and the scalar $a \in \mathbb{R}$. The
sum and constant rules for derivatives is hopefully a familiar concept.
For instance,

$$
\begin{equation}
    \frac{d}{dx}(f(x) + g(x)) = \frac{df}{dx}(x) + \frac{dg}{dx}(x)
\end{equation}
$$
and

$$
\begin{equation}
    \frac{d}{dx}(a f(x)) = a \frac{df}{dx}(x)
\end{equation}
$$
Proof for the sum and constant rules can be found
[here](https://en.wikipedia.org/wiki/Linearity_of_differentiation) and
basically requires us to use the difference quotient definition of the
derivative to derive these properties.

Notice that differentiation, if treated like an operator on the space of
functions, satisfies the properties of a linear map. Hence, the
linearity property of the derivative is something we hope to preserve in
the case of multivariable and vector-valued functions.

Vector-Valued Functions
-----------------------

We now investigate the derivative of functions that map $\mathbb{R}$ to
$\mathbb{R}^m$. This generalization is not significantly complicated and
putting it here sets up the necessary pre-work for discussing the total
derivative next chapter. Let $\mathbf{f}: \mathbb{R} \to \mathbb{R}^m$
be a single-variable, vector-valued function. If we expand $\mathbf{f}$

$$
\begin{equation}
    \mathbf{f}(x) = \begin{bmatrix} f_1(x) \\ f_2(x) \\ \vdots \\ f_m(x) \end{bmatrix}
\end{equation}
$$
into its components, then $\mathbf{f}$ is differentiable at $a$ if and
only if all of its components, $f_j(x)$ are differentiable at $a$ and
$D\mathbf{f}(a)$ is the $m \times 1$ matrix where the $j$th entry is
$\frac{df_j}{dx} (a)$. That is,

$$
\begin{equation}
    D\mathbf{f}(a) = 
    \begin{bmatrix} 
        D_x f_1(a) \\ 
        D_x f_2(a) \\ 
        \vdots \\ 
        D_x f_m(a) 
    \end{bmatrix}
\end{equation}
$$
If $\mathbf{f}$ is differentiable everywhere in its domain, we can
define its derivative to be a function $Df: \mathbb{R} \to \mathbb{R}^m$

$$
\begin{equation}
    D\mathbf{f}(x) = 
    \begin{bmatrix} 
        D_x f_1(x) \\ 
        D_x f_2(x) \\ 
        \vdots \\ 
        D_x f_m(x) 
    \end{bmatrix}
    =
    \begin{bmatrix} 
        D_x f_1 \\ 
        D_x f_2 \\ 
        \vdots \\ 
        D_x f_m 
    \end{bmatrix}
    (x)
\end{equation}
$$
This characterization of the derivative of vector-valued functions will
indeed preserve the linearity of the differentiation operator. For
instance, let $\mathbf{f}, \mathbf{g}: \mathbb{R} \to \mathbb{R}^m$ be
two differentiable vector-valued functions and $a,b \in \mathbb{R}$ a
scalar. We will drop the subscript $x$ within the matrix since it is
understood that for each $f_j$ and $g_j$ there is only a single variable
in the domain to derive respect to. Then we can write,

$$
\begin{equation}
    D(a\mathbf{f} + b\mathbf{g})(x)
    =
    \begin{bmatrix} 
    D(af_1 + bg_1)(x) \\ 
    D(af_2 + bg_2)(x) \\ 
    \vdots \\
    D(af_m + bg_m)(x) \\ 
    \end{bmatrix}
    =
    \begin{bmatrix} 
         aDf_1(x) + bDg_1(x) \\ 
         aDf_2(x) + bDg_2(x) \\ 
         \vdots \\ 
         aDf_m(x) + bDg_m(x)
    \end{bmatrix}
\end{equation}
$$
using the linearity property for scalar-valued functions we discussed
earlier. It follows, then, that

$$
\begin{equation}
    D(a \mathbf{f} + b \mathbf{g})(x)
    =
    a
    \begin{bmatrix}
     Df_1(x) \\ Df_2(x) \\ \vdots \\ Df_m(x)
    \end{bmatrix}
    +
    b
    \begin{bmatrix}
     Dg_1(x) \\ Dg_2(x) \\ \vdots \\ Dg_m(x)
    \end{bmatrix}
    =
    a D\mathbf{f}(x) + b D \mathbf{g}(x).
\end{equation}
$$
This shows the linearity property holds in the case of single-variable
vector-valued functions.

We now have the necessary tools to discuss the total derivative, what it
means, what it is comprised of, and how to begin computing them in the
next chapter.

Sources
------------

-   <https://en.wikipedia.org/wiki/Partial_derivative>
-   <https://en.wikipedia.org/wiki/Derivative>
-   <https://en.wikipedia.org/wiki/Directional_derivative>
-   <https://en.wikipedia.org/wiki/Linear_map>
-   Strichartz, Robert \"The Way of Analysis\"
-   Rudin, Walter \"Principles of Mathematical Analysis\"
