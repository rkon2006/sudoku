export default function getColumn(sudokuMap, col) {
    const column = [];

    sudokuMap.forEach((row) => {
        console.log(row);
        column.push(row[col-1]);
    });

    return column;
}
