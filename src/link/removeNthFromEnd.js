/**
 真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

 给定一个链表: 1->2->3->4->5, 和 n = 2.
 当删除了倒数第二个结点后，链表变为 1->2->3->5.
 * */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * @description 快慢指针，快指针到尾的时候慢指针正好在len-n上
 * */

const removeNthFromEnd = function (head, n) {
  const dummy = new ListNode();

  const current = dummy;

  dummy.next = head; // 以上构造虚拟节点

  let fast = dummy; // 快指针
  let slow = dummy; // 慢指针

  while (n != 0) { // 快指针先走n步
    fast = fast.next;
    n--;
  }

  while (fast.next) { // 然后快慢指针一起走
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next; // 慢指针删除自己的后继节点

  return dummy.next;
}
