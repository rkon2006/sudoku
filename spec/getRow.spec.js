import sudokuMap from './sudokuMap';
import getRow from '../src/getRow';

describe('getRow()', () => {
    for(let i = 1; i <= 9; i++) {
        it(`should return line ${i}`, () => {
            const actualResult = getRow(sudokuMap, i);
            const expectedResult = sudokuMap[i-1];

            expect(actualResult).toEqual(expectedResult);
        });
    }
});
