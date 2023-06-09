---
description: "Author: @Recedivies | https://leetcode.com/problems/snapshot-array/"
---

# 1146 - Snapshot Array (Medium)

## Problem Link

https://leetcode.com/problems/snapshot-array/

## Problem Statement

- `SnapshotArray(int length)` initializes an array-like data structure with the given length. **Initially, each element equals 0**.

- `void set(index, val)` sets the element at the given `index` to be equal to `val`.

- `int snap()` takes a snapshot of the array and returns the `snap_id`: the total number of times we called `snap()` minus `1`.

- `int get(index, snap_id)` returns the value at the given `index`, at the time we took the snapshot with the given `snap_id`

**Example 1:**

```
Input: ["SnapshotArray","set","snap","set","get"]
[[3],[0,5],[],[0,6],[0,0]]
Output: [null,null,0,null,5]
Explanation:
SnapshotArray snapshotArr = new SnapshotArray(3); // set the length to be 3
snapshotArr.set(0,5);  // Set array[0] = 5
snapshotArr.snap();  // Take a snapshot, return snap_id = 0
snapshotArr.set(0,6);
snapshotArr.get(0,0);  // Get the value of array[0] with snap_id = 0, return 5
```

**Constraints:**

- $1 \le length \le  5 * 10^4$
- $0 \le index < length$
- $0 \le val \le 10^9$
- $ 0 \le snap_id < $ (the total number of times we call $snap()$)
- At most $5 * 10^4$ calls will be made to `set`, `snap`, and `get`.

## Approach 1: Binary Search

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Recedivies" link="https://github.com/Recedivies" />

```cpp
class SnapshotArray {
public:
    vector<pair<int, int>> snapShotArr[50001];
    int snapId;
    SnapshotArray(int length) {
        snapId = 0;
    }

    void set(int index, int val) {
        snapShotArr[index].push_back({snapId, val});
    }

    int snap() {
        return snapId++;
    }

    int get(int index, int snap_id) {
        auto itr = upper_bound(snapShotArr[index].begin(), snapShotArr[index].end(), pair<int, int>(snap_id, INT_MAX));
        return itr == snapShotArr[index].begin() ? 0 : prev(itr)->second;
    }
};
```

</TabItem>
</Tabs>
