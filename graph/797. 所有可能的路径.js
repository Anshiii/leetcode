/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

// graph => g[i] 表示 下标为i的节点有一条路径通往的节点的下标
// 例如 [[1,2],[3],[3],[]] g[0]表示下标为0的节点，有一条路径通往下标为1和2两个节点
var allPathsSourceTarget = function (graph) {
  let result = [];
  let visited = [];

  function pickPoint(vertexIdx, paths = []) {
    if (vertexIdx === graph.length - 1) {
      // 输出结果
      result.push([...paths]);
      return;
    }
    let vertexList = graph[vertexIdx];
    if (vertexList.length === 0) {
      // 死路
      return;
    }

    for (let i = 0; i < vertexList.length; i++) {
      const vertex = vertexList[i];
      if (visited[vertex]) continue;
      visited[vertex] = true;
      paths.push(vertex);
      pickPoint(vertex, paths);
      paths.pop();
      visited[vertex] = false;
    }
  }
  pickPoint(0,[0]);
  return result;
};


allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]])
allPathsSourceTarget([[1,2],[3],[3],[]])