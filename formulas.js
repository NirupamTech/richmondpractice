/// Define the formulas for each subject
const mathFormulas = `
Math Formulas:
Sets:
1. The union of two sets A and B are said to be contained elements that are either in set A and set B. The union of A and B is denoted as, A∪B.
2. The intersection of two sets A and B are said to be contained elements that are common in both sets. The intersection of A and B is denoted as, A∩B. 
3. The complement of a set A is the set of all elements given in the universal set U that are not contained in A. The complement of A is denoted as, A’.
4. For any two sets A and B, the following holds true:(DE Morgan’s Theorem)
(A∪B)′=A′∩B′
(A∩B)′=A′∪B′
5. If the finite sets A and B are given such that, (A∩B)=ϕ, then:
n(A∪B)=n(A)+n(B)
6. If (A∪B)=ϕ, then: n(A∪B)=n(A)+n(B)−n(A∩B)
7. A – A = Ø
8. B – A = B⋂ A’
9. B – A = B – (A⋂B)
10. (A – B) = A if A⋂B =  Ø
11. (A – B) ⋂ C = (A⋂ C) – (B⋂C)
12. A ΔB = (A-B) U (B- A)
13. n(A∪B) = n(A) + n(B) – n(A⋂B)
14. n(A∪B∪C)= n(A) +n(B) + n(C) – n(B⋂C) – n (A⋂ B)- n (A⋂C) + n(A⋂B⋂C)
15. n(A – B) =  n(A∪B) – n(B)
16. n(A – B) = n(A) – n(A⋂B)
17. n(A’) = n(∪) – n(A)
18. n(U) =  n(A) + n(B) + – n(A⋂B) + n((A∪B)’)
19. n((A∪B)’) = n(U) +  n(A⋂B) – n(A) – n(B)

Relations & Functions:
1. Relations: A relation R is the subset of the cartesian product of A × B, where A and B are two non-empty elements. It is derived by stating the relationship between the first element and second element of the ordered pair of A × B.
2. Inverse of Relation: A and B are any two non-empty sets. Let R be a relationship between two sets A and B. The inverse of relation R, indicated as R-1, is a relationship that connects B and A and is defined by
R-1 ={(b, a) : (a, b) ∈ R}
where, Domain of R = Range of R-1 and Range of R = Domain of R-1.

3. Functions: A relation f from a set A to set B is said to be function, if every element of set A has one and only image in set B.
4. A cartesian product A × B of two sets A and B is given by: A × B = { (a,b) : a ϵ A, b ϵ B}
5. If (a, b) = (x, y); then a = x and b = y
6. If n(A) = x and n(B) = y, then n(A × B) = xy and A × ϕϕ = ϕϕ
7. The cartesian product: A × B ≠ B × A.
8. A function f from set A to set B considers a specific relation type where every element x in set A has one and only one image in set B. A function can be denoted as f : A → B, where f(x) = y.
9.Algebra of functions: If the function f : X → R and g : X → R; we have:
10. (f + g)(x) = f(x) + g(x) ; x ϵ X
11. (f – g)(x) = f(x) – g(x)
12. (f . g)(x) = f(x).g(x)
13. (kf)(x) = k(f(x)) where k is a real number
14. {f/g}(x) = f(x)/g(x), g(x)≠0

Trigonometric Functions:
1. f in a circle of radius r, an arc of length l subtends an angle of θ radians, then l = r×θ.
2. Radian Measure = π/180 × Degree Measure
3. Degree Measure = 180/π × Radian Measure
Trigonometric ratios:
4. sin θ = (Perpendicular (P)) / (Hypotenuse (H)).
5. cos θ = (Base (B)) / ( Hypotenuse (H)).
6. tan θ = (Perpendicular (P)) / (Base (B)).
7. cosec θ = (Hypotenuse (H)) / (Perpendicular (P)).
8. sec θ = (Hypotenuse (H)) / (Base (B)).
9. cot θ = (Base (B)) / (Perpendicular (P)).
Reciprocal Trigonometric Ratios:
10. sin θ = 1 / (cosec θ)
11. cosec θ = 1 / (sin θ)
12. cos θ = 1 / (sec θ)
13. sec θ = 1 / (cos θ)
14. tan θ =  1 / (cot θ)
15. cot θ = 1 / (tan θ)
Trigonometric Ratios of Complementary Angles:
16. sin (90° – θ) = cos θ
17. cos (90° – θ) = sin θ
18. tan (90° – θ) = cot θ
19. cot (90° – θ) = tan θ
20. sec (90° – θ) = cosec θ
21. cosec (90° – θ) = sec θ
Periodic Trigonometric Ratios
22. sin(π/2-θ) = cos θ
23. cos(π/2-θ) = sin θ
24. sin(π-θ) = sin θ
25. cos(π-θ) = -cos θ
26. sin(π+θ)=-sin θ
27. cos(π+θ)=-cos θ
28. sin(2π-θ) = -sin θ
29. cos(2π-θ) = cos θ
Trigonometric Identities
30. sin2 θ + cos2 θ = 1 ⇒ sin2 θ = 1 – cos2 θ ⇒ cos2 θ = 1 – sin2 θ
31. cosec2 θ – cot2 θ = 1 ⇒ cosec2 θ = 1 + cot2 θ ⇒ cot2 θ = cosec2 θ – 1
32. sec2 θ – tan2 θ = 1 ⇒ sec2 θ = 1 + tan2 θ ⇒ tan2 θ = sec2 θ – 1
Product to Sum Formulas
33. sin x sin y = 1/2 [cos(x–y) − cos(x+y)]
34. cos x cos y = 1/2[cos(x–y) + cos(x+y)]
35. sin x cos y = 1/2[sin(x+y) + sin(x−y)]
36. cos x sin y = 1/2[sin(x+y) – sin(x−y)]
Sum to Product Formulas
37. sin x + sin y = 2 sin [(x+y)/2] cos [(x-y)/2]
38. sin x – sin y = 2 cos [(x+y)/2] sin [(x-y)/2]
39. cos x + cos y = 2 cos [(x+y)/2] cos [(x-y)/2]
40. cos x – cos y = -2 sin [(x+y)/2] sin [(x-y)/2]
General Trigonometric Formulas:
41. sin (x+y) = sin x × cos y + cos x × sin y
42. cos(x+y)=cosx×cosy−sinx×siny
43. cos(x–y)=cosx×cosy+sinx×siny
44. sin(x–y)=sinx×cosy−cosx×siny
45. If there are no angles x, y and (x ± y) is an odd multiple of (π / 2); then:
tan (x+y) = tan x + tan y / 1 − tan x tan y
tan (x−y) = tan x − tan y / 1 + tan x tan y
46. If there are no angles x, y and (x ± y) is an odd multiple of π; then:
cot (x+y) = cot x cot y−1 / cot y + cot x
cot (x−y) = cot x cot y+1 / cot y − cot x
Formulas for twice of the angles:
47. sin2θ = 2sinθ cosθ = [2tan θ /(1+tan2θ)]
48. cos2θ = cos2θ–sin2θ = 1–2sin2θ = 2cos2θ–1= [(1-tan2θ)/(1+tan2θ)]
49. tan 2θ = (2 tan θ)/(1-tan2θ)
Formulas for thrice of the angles:
50. sin 3θ = 3sin θ – 4sin 3θ
51. cos 3θ = 4cos 3θ – 3cos θ
52. tan 3θ = [3tan θ–tan 3θ]/[1−3tan 2θ]

Principle of Mathematical Induction:
Principle of Mathematical Induction: The principle of mathematical induction is one such tool that can be used to prove a wide variety of mathematical statements. Each such statement is assumed as P(n) associated with positive integer n, for which the correctness for the case n = 1 is examined. Then assuming the truth of P(k) for some positive integer k, the truth of P (k+1) is established.
Working Rule:
Step 1: Show that the given statement is true for n = 1.
Step 2: Assume that the statement is true for n = k.
Step 3: Using the assumption made in step 2, show that the statement is true for n = k  + 1. We have proved the statement is true for n = k. According to step 3, it is also true for k + 1 (i.e., 1 + 1 = 2). By repeating the above logic, it is true for every natural number.

Complex Numbers and Quadratic Equations:
1. Complex Numbers: A number that can be expressed in the form a + b is known as the complex number; where a and b are the real numbers and i is the imaginary part of the complex number.
Imaginary Numbers: The square root of a negative real number is called an imaginary number, e.g. √-2, √-5 etc. The quantity √-1 is an imaginary unit and it is denoted by ‘i’ called iota.
i = √-1, i2 = -1, i3 = -i, i4 = 1

2. Equality of Complex Number: Two complex numbers z1 = x1 + iy1 and z2 = x2 + iy2 are equal, if x1 = x2 and y1 = y2 i.e. Re(z1) = Re(z2) and Im(z1) = Im(z2)
Algebra of Complex Numbers

3. Addition: Consider z1 = x1 + iy1 and z2 = x2 + iy2 are any two complex numbers, then their sum is defined as
z1 + z2 = (x1 + iy1) + (x2 + iy2) = (x1 + x2) + i (y1 + y2)

4. Subtraction: Consider z1 = (x1 + iy1) and z2 = (x2 + iy2) are any two complex numbers, then their difference is defined as
z1 – z2 = (x1 + iy1) – (x2 + iy2) = (x1 – x2) + i(y1 – y2)

5. Multiplication: Consider z1 = (x1 + iy1) and z2 = (x2 + iy2) be any two complex numbers, then their multiplication is defined as
z1z2 = (x1 + iy1) (x2 + iy2) = (x1x2 – y1y2) + i (x1y2 + x2y1)

6. Division: Consider z1 = x1 + iy1 and z2 = x2 + iy2 be any two complex numbers, then their division is defined as
z1/z2 = x1+iy1/x2+iy2 = (x1x2+y1y2)+i(x2y1-x1y2)/x²+y²

7. Conjugate of Complex Number

Consider z = x + iy, if ‘i’ is replaced by (-i), then it is called to be conjugate of the complex number z and it is denoted by z¯, i.e.

z̅ {Z bar → conjugate} = x - iy

8. Modulus of a Complex Number

Consider z = x + y be a complex number. So, the positive square root of the sum of square of real part and square of imaginary part is called modulus (absolute values) of z and it is denoted by |z| i.e.

|z| = √x2+y2

9. Argand Plane

Any complex number z = x + y can be represented geometrically by a point (x, y) in a plane, called argand plane or gaussian plane. 

A pure number x, i.e. (x + 0i) is represented by the point (x, 0) on X-axis. Therefore, X-axis is called real axis.
A purely imaginary number y i.e. (0 + y) is represented by the point (0, y) on the y-axis. Therefore, the y-axis is called the imaginary axis.
Argument of a complex Number

The angle made by line joining point z to the origin, with the positive direction of X-axis in an anti-clockwise sense is called argument or amplitude of complex number. It is denoted by the symbol arg(z) or amp(z).

arg(z) = θ = tan-1(y/x)

10. Principal Value of Argument
When x > 0 and y > 0 ⇒ arg(z) = θ
When x < 0 and y > 0 ⇒ arg(z) = π – θ
When x < 0 and y < 0 ⇒ arg(z) = -(π – θ)
When x > 0 and y < 0 ⇒ arg(z) = -θ
Polar Form of a Complex Number

11. When z = x + iy is a complex number, so z can be written as, 

z = |z| (cosθ + isinθ), where θ = arg(z).
which is known as the polar form. Now, when the general value of the argument is θ, so the polar form of z is written as,

z = |z| [cos (2nπ + θ) + isin(2nπ + θ)], where n is an integer.

Linear Inequalities:
1. Inequation: An inequation or inequality is a statement involving variables and the sign of inequality like >, <, ≥ or ≤.

2. Symbols used in inequalities
The symbol < means less than.
The symbol > means greater than.
The symbol < with a bar underneath ≤ means less than or equal to.
The symbol > with a bar underneath ≥ means greater than or equal to.
The symbol ≠ means the quantities on the left and right sides are not equal to.
Algebraic Solutions for Linear Inequalities in One Variable and its Graphical Representation

Using the trial-and-error method, the solution to the linear inequality can be determined. However, this method isn’t always possible, and computing the solution takes longer. So, using a numerical approach, the linear inequality can be solved. When solving linear inequalities, remember to follow these rules:

Rule 1: Don’t change the sign of an inequality by adding or subtracting the same integer on both sides of an equation.

Rule 2: Add or subtract the same positive integer from both sides of an inequality equation.

Permutations and Combinations:
1. Factorial: The continued product of first n natural number is called factorial ‘n’. It is denoted by n! which is given by,
n! = n(n – 1)(n – 2)… 3 × 2 × 1 and 0! = 1! = 1

2. Permutations: Permutation refers to the various arrangements that can be constructed by taking some or all of a set of things. The number of an arrangement of n objects taken r at a time, where 0 < r ≤ n, denoted by nPr is given by
nPr = n! / (n−r)!

3. The number of permutation of n objects of which p1 are of one kind, p2 are of second kind,… pk are of kth kind such that p1 + p2 + p3 + … + pk = n is
n! / p1! p2! p3! ….. pk!

4. Combinations: Combinations are any of the various selections formed by taking some or all of a number of objects, regardless of their arrangement. The number of r objects chosen from a set of n objects is indicated by nCr, and it is given by
nCr = n! / r!(n−r)!

5. Relation Between Permutation and combination: The relationship between the two concepts is given by two theorems as,
nPr = nCr r! when 0 < r ≤ n.
nCr + nCr-1 = n+1Cr

Binomial Theorem:
1. Binomial Theorem: The expansion of a binomial for any positive integer n is given by Binomial Theorem, which is
(a + b)n = nC0 an + nC1 an-1 b + nC2 an-2 b2 + … + nCn-1 a bn-1 + nCn bn

2. Some special cases from the binomial theorem can be written as:
(x – y)n = nC0 xn – nC1 xn-1 y + nC2 xn-2 y2 + … + (-1)n nCn xn
(1 – x)n = nC0 – nC1 x + nC2 x2 – …. (-1)n nCn xn
nC0 = nCn = 1
3. Pascal’s triangle: The coefficients of the expansions are arranged in an array called Pascal’s triangle.
General Term of following expansions are:
(a + b)n is Tr+1 = nCr an−r.br
(a – b)n is (-1)r nCr an−r.br
(1 + x)n = nCr . xr
(1 – x)n = (-1)r nCn xr
4. Middle Terms: In the expansion (a + b)n, if n is even, then the middle term is the (n/2 + 1)th term. If n is odd, then the middle terms are (n/2 + 1)th and ((n+1)/2+1)th terms.

Sequences and Series:
1. Progression: A sequence whose terms follow certain patterns is known as progression.
Arithmetic Progression (AP): An arithmetic progression (A.P.) is a sequence where the terms either increase or decrease regularly by the same constant. This constant is called the common difference (d). The first term is denoted by a and the last term of an AP is denoted by l.
For an Arithmetic Series: a, a+d, a+2d, a+3d, a+4d, …….a +(n-1)d
2. The first term: a1 = a,
The second term: a2 = a + d,
The third term: a3 = a + 2d,
3. The nth term: an = a + (n – 1)d
nth term of an AP from the last term is a’n =an – (n – 1)d.
an + a’n = constant
4. Common difference of an AP i.e. d = an – an-1, ∀ n>1.
Sum of n Terms of an AP: Sn = n/2 [2a + (n – 1)d] = n/2 (a1+ an)
A sequence is an AP If the sum of n terms is of the form An2 + Bn, where A and B are constant and A = half of common difference i.e. 2A = d.
an =Sn – Sn-1

5. Arithmetic Mean: If a, A and b are in A.P then A = (a+b)/2 is called the arithmetic mean of a and b. If a1, a2, a3,……an are n numbers, then their arithmetic mean is given by: A = (a1+a2+a3+....+an)/n
The common difference is given as, d = (b – a)/(n + 1)
The Sum of n arithmetic mean between a and b is, n (a+b/2).
Geometric Progression (GP): A sequence in which the ratio of two consecutive terms is constant is called geometric progression.
The constant ratio is called common ratio (r).
i.e. r = an+1/an, ∀ n>1
The general term or nth term of GP is an =arn-1
nth term of a GP from the end is a’n = 1/rn-1, l = last term
If a, b and c are three consecutive terms of a GP then b2 = ac.
Geometric Mean (GM): If a, G and b are in GR then G is called the geometric mean of a and b and is given by G = √(ab).
If a,G1, G2, G3,….. Gn, b are in GP then G1, G2, G3,……Gn are in GM’s between a and b, then
common ratio is: r = (b/a)^{1/n+1}
If a1, a2, a3,…, an are n numbers are non-zero and non-negative, then their GM is given by
GM = (a1 . a2 . a3 …an)1/n
Product of n GM is G1 × G2 × G3 ×… × Gn = Gn = (ab)n/2
Sum of first n natural numbers is: Σn = 1 + 2 + 3 +… + n = n(n+1)/2
Sum of squares of first n natural numbers is: Σn2 = 12 + 22 + 32 + … + n2 = n(n+1)(2n+1)/6
Sum of cubes of first n natural numbers is: Σn3 = 13 + 23 + 33 + .. + n3 = (n(n+1)(2n+1)/6)^2

Limits and Derivatives:
1. Limit: Let y = f(x) be a function of x. If at x = a, f(x) takes indeterminate form, then we consider the values of the function which is very near to a. If these value tend to a definite unique number as x tends to a, then the unique number so obtained is called the limit of f(x) at x = a and we write it as limx→a f(x)    .
2. Left Hand and Right-Hand Limits: If values of the function at the point which are very near to a on the left tends to a definite unique number as x tends to a, then the unique number so obtained is called the left-hand limit of f(x) at x = a, we write it as
f(a-0)=limx→a− f(x) = limh→0f(a-h)

Similarly, right hand limit is given as,
f(a+0)=\lim_{x\to a^+}f(x)=\lim_{h\to 0}f(a+h)

A limit \lim_{x\to a}f(x)        exists when:
\lim_{x\to a^-}f(x)        and \lim_{x\to a^+}f(x)        both exists or,

\lim_{x\to a^-}f(x) = \lim_{x\to a^+}f(x)

`;

const physicsFormulas = `
Physics Formulas:
Formula 1: ...
Formula 2: ...
`;

const chemistryFormulas = `
Chemistry Formulas:
Formula 1: ...
Formula 2: ...
`;

const bioFormulas = `
Biology Formulas:
Formula 1: ...
Formula 2: ...
`;

// Function to get formulas based on subject
function getFormulasBySubject(subject) {
  switch (subject) {
    case 'math':
      return mathFormulas;
    case 'physics':
      return physicsFormulas;
    case 'chemistry':
      return chemistryFormulas;
    case 'bio':
      return bioFormulas;
    default:
      return 'Formulas for this subject are not available.';
  }
}

// Make the function accessible globally
window.getFormulasBySubject = getFormulasBySubject;
