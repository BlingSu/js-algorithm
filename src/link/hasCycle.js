/**
 真题描述：给定一个链表，判断链表中是否有环。
 输入：[3,2,0,4]（链表结构如下图） 输出：true
 解释：链表中存在一个环
 * */

/**
 * @param {ListNode} head
 * @return {boolean}
 * */

const hasCycle = function (head) {
  while (head) {
    if (head.flag) {
      return true;
    } else {
      head.flag = true;
      head = head.next;
    }
  }
  return false;
}
