/**
 * @param {number[][]} edges
 * @param {number[]} patience
 * @return {number}
 */
var networkBecomesIdle = function (edges, patience) {

    function Node(idx) {
        this.idx = idx
        this.link = []
    }
    //  number: []  n: [edgesIdx...]
    // 每台服务器到主服务器的最短路径
    let len = edges.length,
        kn = [0], // 表示下标为 i 的服务器到 0 的最短路径。
        nodeMap = {},
        maxTime = 0;
    for (let i = 0; i < len; i++) {
        const [a, b] = edges[i];
        if (nodeMap[a]) {
            nodeMap[a].link.push(b)
        } else {
            nodeMap[a] = new Node(a)
            nodeMap[a].link.push(b)
        }
        if (nodeMap[b]) {
            nodeMap[b].link.push(a)
        } else {
            nodeMap[b] = new Node(b)
            nodeMap[b].link.push(a)
        }
    }

    // 0 开始向外遍历，遍历路径就是最短路径
    let start = nodeMap[0]
    function iter(root, deep = 0, hasGo = {}) {
        if (hasGo[root.idx]) return;
        hasGo[root.idx] = true
        deep++;
        for (let j = 0; j < root.link.length; j++) {
            const idx = root.link[j];
            if (kn[idx] === undefined || kn[idx] > deep) {
                kn[idx] = deep
            }
            iter(nodeMap[idx], deep, { ...hasGo })
        }
    }


    iter(start)

    for (let i = 1; i < kn.length; i++) {
        let l = 2 * kn[i];
        let s = (l - 1) / patience[i] * patience[i]
        maxTime = Math.max(maxTime, s + l)
    }

    return maxTime + 1

};

networkBecomesIdle([[0, 1], [1, 2]], [0, 2, 1])
networkBecomesIdle([[0, 1], [0, 2], [1, 2]], [0, 10, 10])
