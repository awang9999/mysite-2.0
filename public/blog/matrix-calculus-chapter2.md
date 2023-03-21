Chapter 2: The Total Derivative
===============================

At the end of the previous chapter, we briefly discussed single-variable
vector-valued functions and how the derivative generalizes to that type
of function. In this chapter, we will examine how the derivative
generalizes to functions with multiple variables in its domain. This is
unfortunately not a trivial generalization and the definition we provide
will seem cryptic at first. However, we will soon see that the
definition provides several of the conveniences we would expect from the
derivative, and maybe even some additional advantages.

Definition
----------

Recall from Chapter 1 where we gave an alternate definition for the
derivative of a single variable, scalar-valued function. Let
$U \subseteq \mathbb{R}$ be an open subset and $f: U \to \mathbb{R}$ be
differentiable. The derivative of $f$ at $a$ is the unique number
$\frac{df}{dx}(a)$ such that

$$
\begin{equation}
    \lim_{h \to 0} \frac{f(a + h) - f(a) - \frac{df}{dx}(a)h}{h} = 0
\end{equation}
$$

This is equivalent to

$$
\begin{equation}
    \lim_{h \to 0} \frac{|f(a + h) - f(a) - \frac{df}{dx}(a)h|}{|h|} = 0
\end{equation}
$$

because a function limits to zero if and only if the absolute value of
the function limits to zero. This formula generalizes rather naturally
to multi-variable domains by replacing the absolute values with vector
norms.

We can now provide a definition for the total derivative of a function:

Let $U \subseteq \mathbb{R}^n$ be an open subset and
$\mathbf{f}: U \to \mathbb{R}^m$ be a sufficiently smooth,
multivariable, vector-valued function. Let $\mathbf{a} \in U$. If there
exists a linear map $A: U \to \mathbb{R}^m$ (dependent on $\mathbf{a}$)
such that

$$
\begin{equation}
    \lim_{\mathbf{h} \to 0} \frac{\|\mathbf{f}(\mathbf{a}+\mathbf{h}) - \mathbf{f}(\mathbf{a}) - A(\mathbf{h})\|}{\|\mathbf{h}\|} = 0
\end{equation}
$$

then we say $\mathbf{f}$ is totally differentiable at $\mathbf{a}$ and
$A$ is the total derivative. The total derivative is usually denoted
using Euler\'s notation:

$$
\begin{equation}
    A = D\mathbf{f}(\mathbf{a})
\end{equation}
$$

If $\mathbf{f}$ is totally differentiable at every point in $U$, then we
say the function is totally differentiable. It\'s total derivative is
$Df: U \to U \times \mathbb{R}^m$. That is, a function that maps points
in the domain $U$ to linear maps that map from $U \to \mathbf{R}^m$.
Usually the codomain space is represented by $m \times n$ matrices of
real numbers since ever linear map can also be represented as a matrix.

As the Best Linear Approximator
-------------------------------

By defining the total derivative as a linear map, we maintain the
property that it is a linear approximator of $\mathbf{f}$ at point
$\mathbf{a}$. To make this precise, we can quantify the error the
following way:

$$
\begin{equation}
    \mathbf{f}(\mathbf{a} + \mathbf{h}) = \mathbf{f}(\mathbf{a}) + D\mathbf{f}(a)(\mathbf{h}) + \epsilon(\mathbf{h})
\end{equation}
$$

where $\epsilon(h)$ is the error in the approximation. Similar to the
single variable case, when $\mathbf{h} \to 0$ we get that
$\epsilon(\mathbf{h}) = o(\|\mathbf{h}\|)$ and hence limits to zero as
well.

The total derivative, then, can be defined as the unique linear
transformation for which the error term is minimal. Unfortunately, like
in the single variable case, we will not prove uniqueness here. The
consequence of this fact is that the total derivative is the best linear
approximation to $\mathbf{f}$.

As a Differential Form
----------------------

Now that we have developed some intuition for what the total derivative
means, we want to discover how we can use it as a tool for computation.
We mentioned in the previous chapter that every linear map can be
represented as a matrix which is much more useful for concrete
computations. However, to formulate the matrix of a linear map requires
us to choose bases for the domain and codomain of the transformation.

Since most applications of matrix calculus pertain to real numbers, the
domain and codomain of functions we are concerned with are in the family
of vector spaces $\mathbf{R}^k$ for $k \in \mathbf{N}$. These vector
spaces have a standard basis comprised of the set of vectors whose
components are all zero, except one that equals 1. Formally, the
standard basis of $\mathbb{R}^k$ is the set of vectors
$\{\mathbf{e}_j\}$ for $j = 1,...,k$. Each vector $\mathbf{e}_j$ has a 1
in the $j$th element and 0s in all other elements.

With the bases defined, we can determine the matrix of the total
derivative. Consider the function from earlier,
$\mathbf{f}: U \to \mathbb{R}^m$. Since $U \subseteq \mathbb{R}^n$, the
sets of vectors $\{\mathbf{e}_j\}, j=1,...,n$ and
$\{\mathbf{e}_i\}, i=1,...,m$ are the standard bases for the domain and
codomain respectively. Let $\mathbf{u}$ be some arbitrary point in $U$.

We want to find a matrix that represents $D\mathbf{f}(\mathbf{u})$.
Since $D\mathbf{f}(\mathbf{u})$ is a linear transformation that maps
points from $U$ to $\mathbb{R}^m$, consider an arbitrary point
$\mathbf{x} \in U, \mathbf{x} \neq \mathbf{u}$. Then,
$\mathbf{x} = \mathbf{u} + \mathbf{h}$ for some $\mathbf{h}$. Then,
using the linear approximation definition of the derivative,
$D\mathbf{f}(\mathbf{u})$ must satisfy

$$
\begin{equation}
    \mathbf{f}(\mathbf{x}) = f(\mathbf{u} + \mathbf{h}) = \mathbf{f}(\mathbf{u}) + D\mathbf{f}(\mathbf{u})(\mathbf{h}) + o(\|\mathbf{h}\|)
\end{equation}
$$

where the error is minimal. But we can represent $\mathbf{h}$ as
$\sum_{j=1}^n h_j \mathbf{e}_j$ using the standard basis for
$\mathbb{R}^n$. So we can write

$$
\begin{align*}
    \mathbf{f}(\mathbf{u} + \mathbf{h}) &= \mathbf{f}(\mathbf{u}) + D\mathbf{f}(\mathbf{u})\left( \sum_{j=1}^n h_j \mathbf{e}_j \right) + o(\|h\|)\\
    &= \mathbf{f}(\mathbf{u}) + \sum_{j=1}^n h_j D\mathbf{f}(\mathbf{u})(\mathbf{e}_j) + o(\|h\|)
\end{align*}
$$

using the linearity property of the total derivative. Now let us
consider only the $i$\'th coordinate of the expression above:

$$
\begin{align*}
    f_i(\mathbf{u} + \mathbf{h}) = f_i(\mathbf{u}) + \sum_{j=1}^n h_j D\mathbf{f}(\mathbf{u})_{ij} + o(\|h\|)
\end{align*}
$$

If we further only let the $j$\'th variable vary and hold all other
variables constant we get,

$$
\begin{align*}
    f_{i}(\mathbf{u} + \mathbf{h} \mathbf{e}_j) = f_i(\mathbf{u}) + h_j D\mathbf{f}(\mathbf{u})_{ij} + o(|h_j|)
\end{align*}
$$

We recognize that the value $D\mathbf{f}(\mathbf{u})_{ij}$ satisfies the
definition for the partial derivative of $f_i$ at the point $\mathbf{u}$
with respect to the $j$\'th variable in the domain. Thus, if we write
out the total derivative explicitly, we would get the following
$m \times n$ matrix:

$$
\begin{align*}
    D\mathbf{f} =
    \begin{bmatrix}
        \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} & \cdots & \frac{\partial f_1}{\partial x_n} \\
        \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} & \cdots & \frac{\partial f_2}{\partial x_n} \\
        \vdots & \vdots & \ddots & \vdots \\
        \frac{\partial f_m}{\partial x_1} & \frac{\partial f_m}{\partial x_2} & \cdots & \frac{\partial f_m}{\partial x_n} \\
    \end{bmatrix}
\end{align*}
$$

This matrix is also commonly called the Jacobian and understanding it
will be critical for nearly all aspects of differentiating matrix-like
expressions.

### The Gradient

For those who are familiar with vector calculus, you may recognize the
total derivative in a slightly different form. Consider a
differentiable, scalar-valued function of several variables,
$f: \mathbb{R}^n \to \mathbb{R}$. The gradient of $f$ at point
$\mathbf{p}$ is usually denoted $\nabla f (\mathbf{p})$ and can be
defined as

$$
\begin{align*}
    \nabla f (p) = 
           \begin{bmatrix}
            \frac{df}{dx_1} (\mathbf{p}) \\
            \vdots \\
            \frac{df}{dx_n} (\mathbf{p}) \\
           \end{bmatrix}
\end{align*}
$$

Intuitively, the value $\nabla f(\mathbf{p})$ represents the direction
and rate of fastest increase in $f$ at $\mathbf{p}$. The gradient is
also intrinsically related to the total derivative in that the dot
product of $\nabla f(\mathbf{p})$ with another tangent vector
$\mathbf{v}$ is the directional derivative of $f$ at $\mathbf{p}$ of the
function along the vector $\mathbf{v}$ which is exactly the total
derivative at $\mathbf{v}$. That is,

$$
\begin{align*}
    \nabla f (\mathbf{p}) = \frac{df}{d\mathbf{v}} = Df(\mathbf{p})(\mathbf{v})
\end{align*}
$$

One might also notice that the rows of the total derivative are
comprised of the transpose of the gradient of each of the coordinate
functions. That is,

$$
\begin{align*}
    D\mathbf{f} =
    \begin{bmatrix}
        \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} & \cdots & \frac{\partial f_1}{\partial x_n} \\
        \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} & \cdots & \frac{\partial f_2}{\partial x_n} \\
        \vdots & \vdots & \ddots & \vdots \\
        \frac{\partial f_m}{\partial x_1} & \frac{\partial f_m}{\partial x_2} & \cdots & \frac{\partial f_m}{\partial x_n} \\
    \end{bmatrix}
    =
    \begin{bmatrix}
        (\nabla f_1)^T \\
        (\nabla f_2)^T \\
        \vdots \\
        (\nabla f_m)^T \\
    \end{bmatrix}
\end{align*}
$$

This explains the algebraic connection between the total derivative and
the gradient.

The Chain Rule for Total Derivatives
------------------------------------

One of the convenient properties of the total derivative is how it
interfaces with the chain rule. Recall the chain rule from elementary
single-variable calculus:

Let $g$ be a differentiable function at a point $a$ and $f$ be a
differentiable function at $g(a)$, then the composite function
$f \circ g$ is differentiable at point $a$. It\'s derivative is

$$
\begin{align*}
    (f \circ g)'(c) = f'(g(c)) \cdot g'(c)
\end{align*}
$$

If we let $y = f(u)$ and $u = g(x)$, we can express the chain rule
through Leibniz\'s notation too:

$$
\begin{align*}
    \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}
\end{align*}
$$

Although we will not include the proof of the single variable chain
rule, the essence of the proof involves studying the error in the linear
approximation determined by the derivative. The full proof can be found
on the
[wikipedia](https://en.wikipedia.org/wiki/Chain_rule#Second_proof) for
the chain rule. This proof can be naturally generalized to the
multivariable case but it is a rather technical argument that requires
expanding many terms. In any case we will provide the multivariable
chain rule statement in terms of total derivatives.

Let $f$ and $g$ be totally differentiable functions. The total
derivative of the composite function $f \circ g$ at point $a$ satisfies

$$
\begin{align*}
    D(f \circ g)(a) = Df(g(a)) \cdot Dg(a)
\end{align*}
$$

This statement is rather elegant because when we treat the total
derivative of $f$ and $g$ as matrices, the expression on the right hand
side is simply matrix multiplication. This consequence is extremely
important because it effectively means we can reason about arbitrary
dependencies among the arguments of composite multivariable functions.

We are now properly equipped to dive into the world of matrix calculus.
In the following chapters we will discuss how to take the derivative of
expressions involving vectors and matrices with respect to vectors and
matrices. Additionally, we will explore where these structures arise in
machine learning and how to reason about it all.

Sources
------------

-   <https://en.wikipedia.org/wiki/Derivative>
-   <https://en.wikipedia.org/wiki/Total_derivative>
-   <https://en.wikipedia.org/wiki/Chain_rule>
-   <https://en.wikipedia.org/wiki/Gradient>
-   Dummit, Richard S. and Foote, Richard M. \"Abstract Algebra\"
-   Strichartz, Robert \"The Way of Analysis\"
