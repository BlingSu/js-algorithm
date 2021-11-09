/**
 真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。

 输入: 1->2->3->4->5->NULL
 输出: 5->4->3->2->1->NULL
 * */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * @description 多指针 current.next = pre;
 * */


const reverseList = function (head) {
  let pre = null; // 初始化节点为null（要当成最后）

  let current = head; // 初始化目标节点为头节点

  while (current != null) { // 没为null就说明还有可以继续遍历

    // 记录一下next节点
    let next = current.next;

    // 反转指针
    current.next = pre;

    //  pre 往前走一步
    pre = current;

    //  current 往前走一步
    current = next;
  }

  return pre; // 反转结束 pre变成新链表的头节点
}
