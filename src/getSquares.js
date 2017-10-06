export default function getSquare(sudokuMap, row, col) {
    if (!row && !col) return sudokuMap;

    // row = row || 1;
    // col = col | 1;

    const sideMaxLength = 9;
    const squareSide = 3;

    const maxRowIndex = sideMaxLength / squareSide * row;
    const maxColIndex = sideMaxLength / squareSide * col;

    const minRowIndex = maxRowIndex - squareSide;
    const minColIndex = maxColIndex - squareSide;

    const square = [];

    for(let r = minRowIndex, rr = 0; r < maxRowIndex; r++, rr++) {
        square[rr] = [];

        for(let c = minColIndex, cc = 0; c < maxColIndex; c++, cc++) {
            square[rr].push(sudokuMap[r][c]);
        }
    }

    return square;
}
