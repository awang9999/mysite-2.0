Preface
=======

Matrix Calculus. An elusive topic that is too complicated for
multivariable calculus, too simple for analysis, too off-topic for
linear algebra, and a prerequisite for several machine learning courses.
As a machine learning course TA for several semesters I had the unique
opportunity to coach hundreds of students through their introductory
pass at machine learning. One struggle that was often common to students
was their first encounter with matrix calculus. Even those who were
familiar with multivariable calculus initially struggled to make sense
of the notation, and more importantly, the meaning of it all. But who
could blame them? After all, there is disagreement on what notation to
use even between mathematicians, statisticians, and physicists. In
writing this piece I hope to bridge the gap between multivariable
calculus and matrix calculus, as the latter is in many ways just a
notational difference from the former. The first part will develop
fundamentally the meaning of several matrix-like derivative structures.
We will derive common expressions and develop a framework for
understanding and deriving further derivatives of matrix expressions.
The second part will connect the ideas developed in the first part to
applications in machine learning. We will examine several cost functions
and how to compute their gradient descent updates. We will also discuss
the derivation of the back-propagation algorithm using matrix calculus.
Matrix calculus is inherently an advanced topic as it requires both
knowledge from linear algebra and multivariable calculus so those two
topics can be considered prerequisite to this piece. Nevertheless, I
will try to provide the necessary context wherever possible to keep this
guide accessible to readers from all backgrounds.

A note on notation
==================

The most familiar symbols used to express the derivative and likely the
ones taught in elementary courses are $f'(x)$ (Lagrange\'s notation) and
$\frac{df}{dx}$ (Leibniz\'s notation). While both of these notations are
valid and have their own advantages, this guide will refer to Euler\'s
notation, $D_x f$ to denote the derivative of matrix-like objects or
elements within a matrix-like object. When the derivative is a
scalar-like object, we will use Leibniz\'s notation. An example is given
below:

Suppose $f: \mathbb{R} \to \mathbb{R}$ given by $f(x) = x^2$. The
derivative of this function following the well-known power rule is
$\frac{df}{dx} = 2x$. Notice that we used Leibniz\'s notation because
the derivative is a scalar value.

Suppose $f: \mathbb{R}^2 \to \mathbb{R}$ is given by
$f(x,y) = x^2 + y^2$. The total derivative of this function is

$$
\begin{equation}
    Df = 
    \begin{bmatrix} 
        D_x f & D_y f
    \end{bmatrix}
    =
    \begin{bmatrix}
        2x & 2y
    \end{bmatrix}
\end{equation}
$$

(don\'t worry if you aren\'t sure what a total derivative is yet because
it is a concept we will build up during this guide!) Notice how we use
Euler\'s notation this time to denote the matrix-like object that is the
total derivative of $f$. If we want to refer to either of the objects
inside the total derivative we can write,
$D_y f = \frac{\partial f}{\partial y} = 2y$ where the subscript $y$
means the derivative with respect to the $y$ variable.

Lastly, when we use differentiation as an operator, we may write $D$ or
$\frac{d}{dx}$ interchangeably depending on the context. If we are
propagating the differentiation operator into a matrix-like object, we
will continue using the Euler\'s, $D$, notation.
