# Solution for 26_primary

**Question:** 26. (a) If $tan \theta + sin \theta = m$ and $tan \theta - sin \theta = n$, then prove that $m^2 - n^2 = 4\sqrt{mn}$.

**Question Type:** Subjective

---

**Reasoning:**
- This question has no sub-parts. It is worth 3 marks, requiring [3 to 6] steps for the entire solution. **I will strictly adhere to this step count for each method.**
- Bloom's Level: Applying. The question assesses the student's ability to apply trigonometric identities and algebraic manipulation skills to prove a given relationship.

**Method solution:**
- Method 1: The plan is to first calculate $m^2 - n^2$ and $mn$ separately using algebraic identities and trigonometric simplifications. Then, calculate $4\sqrt{mn}$ and show that it is equal to $m^2 - n^2$.
- Method 2: The plan is to express $m$ and $n$ in terms of $\sin \theta$ and $\cos \theta$. Then, calculate $m^2 - n^2$ and $mn$ using these expressions and simplify them. Finally, show that $m^2 - n^2$ equals $4\sqrt{mn}$.

---
**Method 1: Direct Algebraic Manipulation**
---
- Step 1:
  - Step ID: 1
  - Teacher Expectation: Identifies the structure of $m^2 - n^2$ as a difference of squares, $a^2 - b^2$.
  - Pass if: Correctly states or implies $m^2 - n^2 = (m+n)(m-n)$ or recognizes the form $(a+b)^2 - (a-b)^2$.
  - Fail if: Fails to recognize the difference of squares structure.
  - Mark Type: B
- Step 2:
  - Step ID: 2
  - Teacher Expectation: Calculates $m^2 - n^2$ by applying the identity $(a+b)^2 - (a-b)^2 = 4ab$, with $a = \tan \theta$ and $b = \sin \theta$.
  - Pass if: Correctly computes $m^2 - n^2 = (\tan \theta + \sin \theta)^2 - (\tan \theta - \sin \theta)^2 = 4 \tan \theta \sin \theta$.
  - Fail if: Makes an error in applying the identity or in the substitution.
  - Mark Type: M
- Step 3:
  - Step ID: 3
  - Teacher Expectation: Calculates the product $mn$ by multiplying the given expressions.
  - Pass if: Correctly computes $mn = (\tan \theta + \sin \theta)(\tan \theta - \sin \theta) = \tan^2 \theta - \sin^2 \theta$.
  - Fail if: Makes an error in multiplication.
  - Mark Type: M
- Step 4:
  - Step ID: 4
  - Teacher Expectation: Simplifies the expression for $mn$ using trigonometric identities to express it in a form suitable for taking the square root.
  - Pass if: Correctly simplifies $\tan^2 \theta - \sin^2 \theta$ to $\sin^2 \theta \tan^2 \theta$.
  - Fail if: Makes an error in trigonometric simplification.
  - Mark Type: M
- Step 5:
  - Step ID: 5
  - Teacher Expectation: Calculates $4\sqrt{mn}$ by substituting the simplified expression for $mn$ and simplifying.
  - Pass if: Correctly computes $4\sqrt{\sin^2 \theta \tan^2 \theta} = 4 |\sin \theta \tan \theta|$.
  - Fail if: Makes an error in calculating the square root or handling the absolute value.
  - Mark Type: M
- Step 6:
  - Step ID: 6
  - Teacher Expectation: Concludes the proof by showing the equality between $m^2 - n^2$ and $4\sqrt{mn}$, considering the domain/quadrant for $\sin \theta$ and $\tan \theta$.
  - Pass if: Correctly shows $4 \tan \theta \sin \theta = 4 |\sin \theta \tan \theta|$ and concludes that $m^2 - n^2 = 4\sqrt{mn}$ holds when $\sin \theta \tan \theta \ge 0$.
  - Fail if: Fails to establish the equality or makes an incorrect conclusion about the proof.
  - Mark Type: A

---
**Method 2: Expressing in terms of $\sin \theta$ and $\cos \theta$**
---
- Step 1:
  - Step ID: 1
  - Teacher Expectation: Expresses $m$ and $n$ in terms of $\sin \theta$ and $\cos \theta$ using the identity $\tan \theta = \frac{\sin \theta}{\cos \theta}$.
  - Pass if: Correctly writes $m = \sin \theta \left(\frac{1+\cos \theta}{\cos \theta}\right)$ and $n = \sin \theta \left(\frac{1-\cos \theta}{\cos \theta}\right)$.
  - Fail if: Makes an error in converting $\tan \theta$ or in algebraic manipulation.
  - Mark Type: B
- Step 2:
  - Step ID: 2
  - Teacher Expectation: Calculates $m^2 - n^2$ by substituting the expressions for $m$ and $n$ and simplifying using algebraic and trigonometric identities.
  - Pass if: Correctly computes $m^2 - n^2 = \sin^2 \theta \left[ \left(\frac{1+\cos \theta}{\cos \theta}\right)^2 - \left(\frac{1-\cos \theta}{\cos \theta}\right)^2 \right] = \frac{4 \sin^2 \theta}{\cos \theta}$.
  - Fail if: Makes an error in substitution, algebraic expansion, or simplification.
  - Mark Type: M
- Step 3:
  - Step ID: 3
  - Teacher Expectation: Calculates the product $mn$ by multiplying the expressions for $m$ and $n$.
  - Pass if: Correctly computes $mn = \sin^2 \theta \left(\frac{1+\cos \theta}{\cos \theta}\right) \left(\frac{1-\cos \theta}{\cos \theta}\right)$.
  - Fail if: Makes an error in multiplication.
  - Mark Type: M
- Step 4:
  - Step ID: 4
  - Teacher Expectation: Simplifies $mn$ using the identity $1-\cos^2 \theta = \sin^2 \theta$.
  - Pass if: Correctly simplifies $mn$ to $\sin^2 \theta \left(\frac{\sin^2 \theta}{\cos^2 \theta}\right) = \sin^2 \theta \tan^2 \theta$.
  - Fail if: Makes an error in applying the identity or simplifying.
  - Mark Type: M
- Step 5:
  - Step ID: 5
  - Teacher Expectation: Calculates $4\sqrt{mn}$ by substituting the simplified expression for $mn$ and simplifying.
  - Pass if: Correctly computes $4\sqrt{\sin^2 \theta \tan^2 \theta} = 4 |\sin \theta \tan \theta|$.
  - Fail if: Makes an error in calculating the square root or handling the absolute value.
  - Mark Type: M
- Step 6:
  - Step ID: 6
  - Teacher Expectation: Concludes the proof by showing the equality between $m^2 - n^2$ and $4\sqrt{mn}$, considering the domain/quadrant for $\sin \theta$ and $\tan \theta$.
  - Pass if: Correctly shows $\frac{4 \sin^2 \theta}{\cos \theta} = 4 \sin \theta \tan \theta = 4 |\sin \theta \tan \theta|$ and concludes that $m^2 - n^2 = 4\sqrt{mn}$ holds when $\sin \theta \tan \theta \ge 0$.
  - Fail if: Fails to establish the equality or makes an incorrect conclusion about the proof.
  - Mark Type: A