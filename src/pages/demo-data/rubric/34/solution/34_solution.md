# Solution for 34

**Question:** 34. Find the mean and median for the following data :
Classes | Frequency
------- | --------
5-15    | 2
15-25   | 3
25-35   | 5
35-45   | 7
45-55   | 4
55-65   | 2
65-75   | 2

**Question Type:** Subjective

---

**Reasoning:**
- This question has no sub-parts. It is worth 5 marks, requiring [5 to 10] steps for the entire solution. **I will strictly adhere to this step count for each method.**
- Bloom's Level: Applying.

**Method solution:**
- Method 1: The plan is to calculate the mean of the grouped data using the formula $\bar{x} = \frac{\sum f_i x_i}{\sum f_i}$ and the median using the formula Median $= L + \left(\frac{\frac{n}{2} - CF}{f}\right) h$. This involves calculating class marks, $f_i x_i$, cumulative frequencies, identifying the median class, and then applying the respective formulas.

---
**Method 1: Calculation of Mean and Median for Grouped Data**
---
- Step 1:
  - Step ID: 1
  - Teacher Expectation: Calculates the class mark ($x_i$) for each class interval by finding the midpoint of each interval.
  - Pass if: Correctly identifies the class marks for all intervals (e.g., 10, 20, 30, 40, 50, 60, 70).
  - Fail if: Makes errors in calculating class marks or misses any.
  - Mark Type: M
- Step 2:
  - Step ID: 2
  - Teacher Expectation: Calculates the product of frequency and class mark ($f_i x_i$) for each class interval.
  - Pass if: Correctly computes all $f_i x_i$ values (e.g., 20, 60, 150, 280, 200, 120, 140).
  - Fail if: Makes errors in multiplication or misses any $f_i x_i$ product.
  - Mark Type: M
- Step 3:
  - Step ID: 3
  - Teacher Expectation: Calculates the total frequency ($\sum f_i$) and the sum of the products ($\sum f_i x_i$).
  - Pass if: Correctly determines $\sum f_i = 25$ and $\sum f_i x_i = 970$.
  - Fail if: Makes summation errors for either $\sum f_i$ or $\sum f_i x_i$.
  - Mark Type: M
- Step 4:
  - Step ID: 4
  - Teacher Expectation: Applies the formula for the mean of grouped data ($\bar{x} = \frac{\sum f_i x_i}{\sum f_i}$) and computes the mean.
  - Pass if: Correctly calculates the mean as 38.8.
  - Fail if: Uses incorrect values from previous steps or makes a calculation error.
  - Mark Type: A
- Step 5:
  - Step ID: 5
  - Teacher Expectation: Calculates the cumulative frequencies (CF) for each class interval.
  - Pass if: Correctly lists the cumulative frequencies for all classes (e.g., 2, 5, 10, 17, 21, 23, 25).
  - Fail if: Makes errors in calculating or listing the cumulative frequencies.
  - Mark Type: M
- Step 6:
  - Step ID: 6
  - Teacher Expectation: Determines the value of $n/2$ from the total frequency ($n$).
  - Pass if: Correctly calculates $n/2 = 12.5$.
  - Fail if: Uses an incorrect total frequency or makes a calculation error.
  - Mark Type: B
- Step 7:
  - Step ID: 7
  - Teacher Expectation: Identifies the median class by locating the class interval whose cumulative frequency is the first to be greater than or equal to $n/2$.
  - Pass if: Correctly identifies the median class as 35-45.
  - Fail if: Selects an incorrect class interval as the median class.
  - Mark Type: M
- Step 8:
  - Step ID: 8
  - Teacher Expectation: Identifies the necessary components for the median formula: $L$ (lower limit of the median class), $f$ (frequency of the median class), $CF$ (cumulative frequency of the class preceding the median class), and $h$ (class width).
  - Pass if: Correctly identifies $L=35$, $f=7$, $CF=10$, and $h=10$.
  - Fail if: Incorrectly identifies any of these values.
  - Mark Type: M
- Step 9:
  - Step ID: 9
  - Teacher Expectation: Substitutes the identified values ($L, n/2, CF, f, h$) into the median formula for grouped data.
  - Pass if: Correctly substitutes all values into the median formula: $35 + \left(\frac{12.5 - 10}{7}\right) 10$.
  - Fail if: Substitutes incorrect values or uses an incorrect formula structure.
  - Mark Type: M
- Step 10:
  - Step ID: 10
  - Teacher Expectation: Calculates the median using the substituted values in the formula.
  - Pass if: Correctly calculates the median (e.g., 38.57 or equivalent fraction).
  - Fail if: Makes calculation errors after correct substitution.
  - Mark Type: A