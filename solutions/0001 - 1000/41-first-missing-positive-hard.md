---
description: "Author: @Recedivies | https://leetcode.com/problems/first-missing-positive/"
---

# 41 - First Missing Positive (Hard)

## Problem Link

https://leetcode.com/problems/first-missing-positive/

## Problem Statement

Given an unsorted integer array `nums`, return the smallest missing positive integer.

You must implement an algorithm that runs in `O(n)` time and uses constant extra space.

**Example 1:**

```
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
```

**Example 2:**

```
Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
```

**Example 3:**

```
Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
```

**Constraints:**

- $1 <= nums.length <= 10^5$
- $-2^{31} <= nums[i] <= 2^{31} - 1$

## Approach 1: Array Manipulation

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Recedivies" link="https://github.com/Recedivies" />

```cpp
class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        int n = nums.size();
        for (int i = 0; i < n; i++) {
            if (nums[i] <= 0 || nums[i] > n || nums[i] == i + 1) continue;
            // 1 <= nums[i] <= n
            int prev = nums[i];
            int cur = nums[prev - 1];
            while (1 <= prev <= n) {
                nums[prev - 1] = prev;
                prev = cur;
                if (cur <= 0 || cur > n || cur == nums[cur - 1]) break;
                cur = nums[cur - 1];
            }
        }
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] != i + 1) {
                return i + 1;
            }
        }
        return n + 1;
    }
};
```

</TabItem>
</Tabs>
