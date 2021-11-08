/**
 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

 输入: 1->1->2
 输出: 1->2
 示例 2:
 输入: 1->1->2->3->3
 输出: 1->2->3
 * */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * */

const deleteDuplicates = function (head) {
  let current = head; // 设定指针

  while (current != null && current.next != null) {
    if (current.val === current.next.val) { // 当前和下面一个相等
      current.next = current.next.next; // 删除下面一个
    } else {
      current = current.next; // 不想等的话 继续遍历
    }
  }
  return head;
}
