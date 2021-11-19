/**
 题目描述：给定一个二叉树，返回它的前序（先序）遍历序列。
 示例:
 输入: [1,null,2,3]
   1
   \
   2
   /
   3
 输出: [1,2,3]
 * */

/**
 * @param {TreeNode} root
 * @return {number[]}
 * @description 先序遍历
 * */

const preorderTraversal = function (root) {
  const res = []; // 结果数组

  if (!root) {
    return res;
  }

  const stack = []; // 初始化栈
  stack.push(root); // 根节点入栈

  // 若栈不为空，重复出栈，入栈
  while (stack.length) {
    // 栈顶节点记为当前节点
    const cur = stack.pop();
    // 当前节点就是当前子树的根节点，把这个节点放在数组尾部
    res.push(cur.val);

    // 子树有右孩子，入栈
    if (cur.right) {
      stack.push(cur.right);
    }

    // 子树有左孩子，入栈
    if (cur.left) {
      stack.push(cur.left);
    }
  }
  return res;
}
