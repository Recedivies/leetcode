---
description: "Author: @Recedivies | https://leetcode.com/problems/number-of-provinces/"
---

# 547 - Number of Provinces (Medium)

## Problem Link

https://leetcode.com/problems/number-of-provinces/

## Problem Statement

There are `n` cities. Some of them are connected, while some are not. If city `a` is connected directly with city `b`, and city `b` is connected directly with city `c`, then city `a` is connected indirectly with city `c`.

A **province** is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an `n x n` matrix `isConnected` where `isConnected[i][j] = 1` if the `ith` city and the `jth` city are directly connected, and `isConnected[i][j] = 0` otherwise.

Return _the total number of **provinces**_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/12/24/graph1.jpg)

```
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/12/24/graph2.jpg)

```
Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
```

**Constraints:**

- $1 \le n \le 200$
- $n == isConnected.length$
- $n == isConnected[i].length$
- $isConnected[i][j] is 1 or 0.$
- $isConnected[i][i] == 1$
- $isConnected[i][j] == isConnected[j][i]$

## Approach 1: DFS

<EditorialAuthor name="@Recedivies" />

We can see that two cities `a` and `b` belong to the same province if both `a` and `b` are connected.

So this leads us to consider the problem is graphs. The number of provinces is the number of **connected components** formed in such a graph. To check the number of connected components in a graph, we can use a graph traversal algorithm like depth first search (DFS).

To do this, we just run DFS starting from each vertex, except for vertices which have already been visited from previous runs. Thus, we perform normal DFS from each of the vertices, but do not reset the array $visit[]$ each and every time we get a new connected component

Time complexity: $O(N^2)$.

- $N$ - # of vertices.
- Note that the worst-case scenario occurs when the number of **connected components** in a graph is equal to the number of nodes. In this case, starting from each node, we iterate over all possible edges, which takes $O(N)$ time

Space complexity: $O(N)$.

- The visit array takes $O(N)$ space.
- the worst-case scenario occurs when there are `n` elements in the recursion call stack used by `dfs`, resulting in an allocation of $O(N)$ space in memory.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Recedivies" link="https://github.com/Recedivies" />

```cpp
class Solution {
public:
    bool visit[201];
    int n;
    int findCircleNum(vector<vector<int>>& isConnected) {
        int ans = 0;
        n = isConnected.size();
        for (int i = 0; i < n; i++) {
            if (visit[i]) continue;
            ans++;
            dfs(i, isConnected);
        }
        return ans;
    }
    void dfs(int u, vector<vector<int>>& isConnected) {
        visit[u]=1;
        for (int v = 0; v < n; v++) {
            if (isConnected[u][v]==0 || visit[v]) continue;
            dfs(v, isConnected);
        }
    }
};
```

</TabItem>
</Tabs>
