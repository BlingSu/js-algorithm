/**
 真题描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 输出: 1->4->3->2->5->NULL
 * */

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 * @description 反转链表+注意临界点
 * */

const reverseBetween = function (head, m, n) {
  // 定义pre, cur, 用leftHead链表中区间的前驱节点
  let pre,
      cur,
      leftHead

  const dummy = new ListNode();
  dummy.next = head;

  let p = dummy; // 游标，最初指向 dummy

  for (let i = 0; i < m - 1; i++) {
    // p 往前走 m-1步，走到整个区间的前驱节点位置
    p = p.next;
  }

  leftHead = p; // 缓存前驱节点

  let start = leftHead.next; // 反转的第一个节点
  pre = start; // pre 指向 start
  cur = pre.next; // start 的下一个节点

  // 开始反转
  for (let i = m; i < n; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  leftHead.next = pre; // 后继节点为反转的第一个节点
  start.next = cur; // 反转最后一个节点 next 指向 cur

  return dummy.next;
}
