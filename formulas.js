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
Relations: A relation R is the subset of the cartesian product of A × B, where A and B are two non-empty elements. It is derived by stating the relationship between the first element and second element of the ordered pair of A × B.
Inverse of Relation: A and B are any two non-empty sets. Let R be a relationship between two sets A and B. The inverse of relation R, indicated as R-1, is a relationship that connects B and A and is defined by
R-1 ={(b, a) : (a, b) ∈ R}

where, Domain of R = Range of R-1 and Range of R = Domain of R-1.

Functions: A relation f from a set A to set B is said to be function, if every element of set A has one and only image in set B.
A cartesian product A × B of two sets A and B is given by: A × B = { (a,b) : a ϵ A, b ϵ B}
If (a, b) = (x, y); then a = x and b = y
If n(A) = x and n(B) = y, then n(A × B) = xy and A × ϕϕ = ϕϕ
The cartesian product: A × B ≠ B × A.
A function f from set A to set B considers a specific relation type where every element x in set A has one and only one image in set B. A function can be denoted as f : A → B, where f(x) = y.
Algebra of functions: If the function f : X → R and g : X → R; we have:
(f + g)(x) = f(x) + g(x) ; x ϵ X
(f – g)(x) = f(x) – g(x)
(f . g)(x) = f(x).g(x)
(kf)(x) = k(f(x)) where k is a real number
{f/g}(x) = f(x)/g(x), g(x)≠0
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
