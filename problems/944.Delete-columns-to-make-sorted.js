/**
 * Created by Anshi on 2019/1/18.
 */

/*A 是字符串数组(每个字符串等长)，求出最小删除索引，使得剩余的字符串每列都是非降序排序。*/
/*这个和贪心选择有什么关系...???*/
var minDeletionSize = function (A) {
  let D = [];
  out:for (let i = 0, len = A[0].length; i < len; i++) {

	inner:for (let j = 1, len = A.length; j < len; j++) {
	  let current = A[j], last = A[j - 1];
	  if (current[i] < last[i]) {
		D.push(i);
		break inner;
	  }
	}
  }
  return D.length;
}

minDeletionSize(["cba", "daf", "ghi"])
minDeletionSize(["a", "b"])
minDeletionSize(["zyx", "wvu", "tsr"])