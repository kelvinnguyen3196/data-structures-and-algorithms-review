// create matrix
const numOfVertices = 5;
const matrix = [];
for(let i = 0; i < numOfVertices; i++) {
    matrix.push([]);
}

const printMatrix = (matrix) => {
    // print header row
    let headerRow = ``.padEnd(6, ' ');
    for(let i = 0; i < numOfVertices; i++) {
        headerRow += `${i}  `;
    }
    console.log(headerRow);
    // print matrix
    for(let r = 0; r < numOfVertices; r++) {
        let rowOutput = `${r}`.padEnd(4, ' ');
        rowOutput += `[ `;
        for(let c = 0; c < numOfVertices; c++) {
            if(!matrix[r][c]) {
                rowOutput += `0, `
                continue;
            }
            rowOutput += `${matrix[r][c]}, `;
        }
        console.log(`${rowOutput.substring(0, rowOutput.length - 2)} ]`);
    }
}

/* graph
    0-1
    |\
    2 3
    |/
    4
*/
// add edges
matrix[0][1] = 1;
matrix[0][2] = 1;
matrix[0][3] = 1;
matrix[1][0] = 1;
matrix[2][0] = 1;
matrix[2][4] = 1;
matrix[3][0] = 1;
matrix[3][4] = 1;
matrix[4][2] = 1;
matrix[4][3] = 1;
// print matrix
printMatrix(matrix);