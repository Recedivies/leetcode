---
description: "Author: @Recedivies | https://leetcode.com/problems/find-the-maximum-divisibility-score/"
---

# 2644 - Find the Maximum Divisibility Score (Easy)

## Problem Link

https://leetcode.com/problems/find-the-maximum-divisibility-score/

## Problem Statement

You are given two **0-indexed** integer arrays `nums` and `divisors`.

The **divisibility score** of `divisors[i]` is the number of indices `j` such that `nums[j]` is divisible by `divisors[i]`.

Return _the integer_ `divisors[i]` _with the maximum divisibility score_. If there is more than one integer with the maximum score, return the minimum of them.

**Example 1:**

```
Input: nums = [4,7,9,3,9], divisors = [5,2,3]
Output: 3
Explanation: The divisibility score for every element in divisors is:
The divisibility score of divisors[0] is 0 since no number in nums is divisible by 5.
The divisibility score of divisors[1] is 1 since nums[0] is divisible by 2.
The divisibility score of divisors[2] is 3 since nums[2], nums[3], and nums[4] are divisible by 3.
Since divisors[2] has the maximum divisibility score, we return it.
```

**Example 2:**

```
Input: nums = [20,14,21,10], divisors = [5,7,5]
Output: 5
Explanation: The divisibility score for every element in divisors is:
The divisibility score of divisors[0] is 2 since nums[0] and nums[3] are divisible by 5.
The divisibility score of divisors[1] is 2 since nums[1] and nums[2] are divisible by 7.
The divisibility score of divisors[2] is 2 since nums[0] and nums[3] are divisible by 5.
Since divisors[0], divisors[1], and divisors[2] all have the maximum divisibility score, we return the minimum of them (i.e., divisors[2]).
```

**Example 3:**

```
Input: nums = [12], divisors = [10,16]
Output: 10
Explanation: The divisibility score for every element in divisors is:
The divisibility score of divisors[0] is 0 since no number in nums is divisible by 10.
The divisibility score of divisors[1] is 0 since no number in nums is divisible by 16.
Since divisors[0] and divisors[1] both have the maximum divisibility score, we return the minimum of them (i.e., divisors[0]).
```

**Constraints:**

- 1 $\le nums.length, divisors.length \le 1000$
- 1 $\le nums[i], divisors[i] \le 10^9$

## Approach 1: Brute Force

<Tabs>
<TabItem value="golang" label="Go">
<SolutionAuthor name="@Recedivies" link="https://github.com/Recedivies" />

```go
func maxDivScore(nums []int, divisors []int) int {
    var ans int = divisors[0];
    var currCount int = 0;
    for i := 0; i < len(divisors); i++ {
        var count int = 0;
        for j := 0; j < len(nums); j++ {
            if nums[j] % divisors[i] == 0 {
                count += 1;
            }
        }
        if currCount < count {
            currCount = count;
            ans = divisors[i];
        } else if currCount == count && ans > divisors[i] {
            ans = divisors[i]
        }
    }
    return ans;
}
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Recedivies" link="https://github.com/Recedivies" />

```cpp
class Solution {
public:
    int maxDivScore(vector<int>& nums, vector<int>& divisors) {
        int ans = divisors[0];
        int currCount = 0;
        for (int div: divisors) {
            int cnt = 0;
            for (int n: nums) {
                if (n % div == 0) {
                    cnt++;
                }
            }
            if (currCount < cnt) {
                currCount = cnt;
                ans = div;
            } else if (currCount == cnt) {
                ans = min(ans, div);
            }
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>
