/**
 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。

 输入: 1->2->3->3->4->4->5
 输出: 1->2->5
 示例 2:
 输入: 1->1->1->2->3
 输出: 2->3
 * */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * */

const deleteDuplicates2 = function (head) {
  // 如果0节点或者1个，直接return
  if (!head || !head.next) {
    return head;
  }

  let dummy = new ListNode(); // 创建一个虚拟的
  dummy.next = head; // dummy永远在头

  let current = dummy; // current从头dummy开始遍历

  while (current.next && current.next.next) { // 对current后面两个节点进行比较

    if (current.next.val === current.next.next.val) { // 如果重复
      let val = current.next.val; // 记录下

      while (current.next && current.next.val === val) { // 反复地排查后面的元素是否存在多次重复该值的情况
        current.next = current.next.next; // 有就删除
      }
    } else {
      current = current.next; // 没有继续遍历
    }
  }
  return dummy.next; // 返回开始的节点
}
