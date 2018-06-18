/* Generated from Java with JSweet 2.0.0 - http://www.jsweet.org */
var Islands = (function () {
    function Islands() {
    }
    Islands.prototype.isSafe = function (M, row, col, visited) {
        return (row >= 0) && (row < Islands.ROW) && (col >= 0) && (col < Islands.COL) && (M[row][col] === 1 && !visited[row][col]);
    };
    Islands.prototype.DFS = function (M, row, col, visited) {
        var rowNbr = [-1, -1, -1, 0, 0, 1, 1, 1];
        var colNbr = [-1, 0, 1, -1, 1, -1, 0, 1];
        visited[row][col] = true;
        for (var k = 0; k < 8; ++k)
            if (this.isSafe(M, row + rowNbr[k], col + colNbr[k], visited))
                this.DFS(M, row + rowNbr[k], col + colNbr[k], visited);
        ;
    };
    Islands.prototype.countIslands = function (M) {
        var visited = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
            return undefined;
        }
        else {
            var array = [];
            for (var i = 0; i < dims[0]; i++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([Islands.ROW, Islands.COL]);
        var count = 0;
        for (var i = 0; i < Islands.ROW; ++i)
            for (var j = 0; j < Islands.COL; ++j)
                if (M[i][j] === 1 && !visited[i][j]) {
                    this.DFS(M, i, j, visited);
                    ++count;
                }
        ;
        ;
        return count;
    };
    Islands.main = function (args) {
        var M = [[1, 1, 0, 0, 0], [0, 1, 0, 0, 1], [1, 0, 0, 1, 1], [0, 0, 0, 0, 0], [1, 0, 1, 0, 1]];
        var I = new Islands();
        console.info("Number of islands is: " + I.countIslands(M));
    };
    return Islands;
}());
Islands.ROW = 5;
Islands.COL = 5;
Islands["__class"] = "Islands";
Islands.main(null);
