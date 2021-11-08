/**
 真题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。

 示例：

 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4
 * */


/**
 * @param {listNode} l1
 * @param {listNode} l2
 * @return {listNode}
 * */

const mergeTwoLists = function (l1, l2) {
  // 定义头节点同时确保链表可以被访问到
  let head = new ListNode();

  let current = head; // 这里代表的是要串的头，也就是针

  while (l1 && l2) {
    // 对比 l1 和 l2 之间的大小
    if (l1.val <= l2.val) {
      current.next = l1; // 串 l1 的节点
      l1 = l1.next; // 第一条链表前向移动一步（因为已经串走一个了）
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    current = current.next; // 串起来的链表也要往前一步（上面if判断完）
  }

  current.next = l1 !== null ? l1 : l2; // 不等长的情况，有序的直接放过去就好了
  return head.next; // 返回开始的节点
}
