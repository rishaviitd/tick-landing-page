# Solution for 26_secondary

**Question:** (b) Prove that : $(cot A - 1) / (2 - sec^2 A) = cot A / (1 + tan A)$.

**Question Type:** Subjective

---

**Reasoning:**
- This question has no sub-parts. It is worth 3 marks, requiring [3 to 6] steps for the entire solution. **I will strictly adhere to this step count for each method.**
- Bloom's Level: Applying. The question requires students to apply trigonometric ratios, reciprocal identities, and Pythagorean identities to prove a given identity.

**Method solution:**
- Method 1: The plan is to start with the Left Hand Side (LHS), apply the Pythagorean identity $sec^2 A = 1 + tan^2 A$ to the denominator, simplify the denominator, express $cot A$ in terms of $tan A$ in the numerator, factorize the denominator, simplify the numerator, cancel common factors, and finally show that the simplified LHS matches the Right Hand Side (RHS).

---
**Method 1: Manipulate LHS to RHS using tan/cot identities**
---
- Step 1:
  - Step ID: 1
  - Teacher Expectation: Writes down the Left Hand Side (LHS) of the identity.
  - Pass if: Correctly writes $(cot A - 1) / (2 - sec^2 A)$.
  - Fail if: Writes anything else or makes an error in copying the expression.
  - Mark Type: B
- Step 2:
  - Step ID: 2
  - Teacher Expectation: Applies the Pythagorean identity $sec^2 A = 1 + tan^2 A$ to the denominator of the LHS.
  - Pass if: Correctly substitutes $sec^2 A$ with $(1 + tan^2 A)$ in the denominator, resulting in $(cot A - 1) / (2 - (1 + tan^2 A))$.
  - Fail if: Makes an error in substitution or uses an incorrect identity.
  - Mark Type: M
- Step 3:
  - Step ID: 3
  - Teacher Expectation: Simplifies the denominator of the LHS.
  - Pass if: Correctly simplifies $2 - (1 + tan^2 A)$ to $1 - tan^2 A$, resulting in $(cot A - 1) / (1 - tan^2 A)$.
  - Fail if: Makes an arithmetic error in simplifying the denominator.
  - Mark Type: M
- Step 4:
  - Step ID: 4
  - Teacher Expectation: Expresses $cot A$ in terms of $tan A$ in the numerator and factorizes the denominator.
  - Pass if: Correctly expresses $cot A$ as $(1/tan A)$ and factors the denominator $1 - tan^2 A$ as $(1 - tan A)(1 + tan A)$, leading to $((1/tan A) - 1) / ((1 - tan A)(1 + tan A))$.
  - Fail if: Incorrect substitution of $cot A$ or incorrect factorization of the denominator.
  - Mark Type: M
- Step 5:
  - Step ID: 5
  - Teacher Expectation: Simplifies the numerator and cancels common factors.
  - Pass if: Correctly simplifies the numerator to $(1 - tan A)/tan A$ and cancels the term $(1 - tan A)$ from the numerator and denominator, resulting in $(1/tan A) / (1 + tan A)$.
  - Fail if: Errors in simplifying the numerator or in the cancellation process.
  - Mark Type: A
- Step 6:
  - Step ID: 6
  - Teacher Expectation: Rewrites the simplified expression to match the Right Hand Side (RHS).
  - Pass if: Correctly rewrites $(1/tan A) / (1 + tan A)$ as $cot A / (1 + tan A)$, thus proving LHS = RHS.
  - Fail if: Makes an error in the final representation or fails to show the equality with RHS.
  - Mark Type: A