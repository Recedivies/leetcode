---
description: "Author: @Recedivies | https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/"
---

# 1318 - Minimum Flips to Make a OR b Equal to c (Medium)

## Problem Link

https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/

## Problem Statement

Given 3 positives numbers `a`, `b` and `c`. Return the minimum flips required in some bits of `a` and `b` to make ( `a` OR `b` == `c` ). (bitwise OR operation). Flip operation consists of change **any** single bit 1 to 0 or change the bit 0 to 1 in their binary representation.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/01/06/sample_3_1676.png)

```
Input: a = 2, b = 6, c = 5
Output: 3
Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)
```

**Example 2:**

```
Input: a = 4, b = 2, c = 7
Output: 1
```

**Example 3:**

```
Input: a = 1, b = 2, c = 3
Output: 0
```

**Constraints:**

- $1 \le a \le 10^9$
- $1 \le b \le 10^9$
- $1 \le c \le 10^9$

## Approach 1: Bit Manipulation

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Recedivies" link="https://github.com/Recedivies" />

```cpp
class Solution {
public:
    int minFlips(int a, int b, int c) {
        int ans = 0;
        for (int i = 0; i <= 30; i++) {
            bool bitA = a & (1<<i) ? 1 : 0;
            bool bitB = b & (1<<i) ? 1 : 0;
            bool bitC = c & (1<<i) ? 1 : 0;
            if (bitC){
                if (!(bitA|bitB)) ans++;
            }
            if (!bitC){
                if (bitA) ans++;
                if (bitB) ans++;
            }
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>
