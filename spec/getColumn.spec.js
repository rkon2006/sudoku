import sudokuMap from './sudokuMap';
import getColumn from '../src/getColumn';

describe('getColumn()', () => {
    describe('get first three columns', () => {
        it('should return column #1', () => {
            const actualResult = getColumn(sudokuMap, 1);
            const expectedResult = ['0.0', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0', '7.0', '8.0'];

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return column #2', () => {
            const actualResult = getColumn(sudokuMap, 2);
            const expectedResult = ['0.1', '1.1', '2.1', '3.1', '4.1', '5.1', '6.1', '7.1', '8.1'];

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return column #3', () => {
            const actualResult = getColumn(sudokuMap, 3);
            const expectedResult = ['0.2', '1.2', '2.2', '3.2', '4.2', '5.2', '6.2', '7.2', '8.2'];

            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe('get second three columns', () => {
        it('should return column #4', () => {
            const actualResult = getColumn(sudokuMap, 4);
            const expectedResult = ['0.3', '1.3', '2.3', /**/ '3.3', '4.3', '5.3', /**/ '6.3', '7.3', '8.3'];

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return column #5', () => {
            const actualResult = getColumn(sudokuMap, 5);
            const expectedResult = ['0.4', '1.4', '2.4', '3.4', '4.4', '5.4', '6.4', '7.4', '8.4'];

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return column #6', () => {
            const actualResult = getColumn(sudokuMap, 6);
            const expectedResult = ['0.5', '1.5', '2.5', '3.5', '4.5', '5.5', '6.5', '7.5', '8.5'];

            expect(actualResult).toEqual(expectedResult);
        });
    });


    describe('get third three columns', () => {
        it('should return column #7', () => {
            const actualResult = getColumn(sudokuMap, 7);
            const expectedResult = ['0.6', '1.6', '2.6', '3.6', '4.6', '5.6', '6.6', '7.6', '8.6'];

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return column #8', () => {
            const actualResult = getColumn(sudokuMap, 8);
            const expectedResult = ['0.7', '1.7', '2.7', '3.7', '4.7', '5.7', '6.7', '7.7', '8.7'];

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return column #9', () => {
            const actualResult = getColumn(sudokuMap, 9);
            const expectedResult = ['0.8', '1.8', '2.8', '3.8', '4.8', '5.8', '6.8', '7.8', '8.8'];

            expect(actualResult).toEqual(expectedResult);
        });
    });
});
