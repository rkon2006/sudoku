import getSquare from '../src/index';

describe('getSquare() function', () => {
    const sudokuMap = [
        [0.0, 0.1, 0.2, /**/ 0.3, 0.4, 0.5, /**/ 0.6, 0.7, 0.8],
        [1.0, 1.1, 1.2, /**/ 1.3, 1.4, 1.5, /**/ 1.6, 1.7, 1.8],
        [2.0, 2.1, 2.2, /**/ 2.3, 2.4, 2.5, /**/ 2.6, 2.7, 2.8],

        [3.0, 3.1, 3.2, /**/ 3.3, 3.4, 3.5, /**/ 3.6, 3.7, 3.8],
        [4.0, 4.1, 4.2, /**/ 4.3, 4.3, 4.5, /**/ 4.6, 4.7, 4.8],
        [5.0, 5.1, 5.2, /**/ 5.3, 5.3, 5.5, /**/ 5.6, 5.7, 5.8],

        [6.0, 6.1, 6.2, /**/ 6.3, 6.4, 6.5, /**/ 6.6, 6.7, 6.8],
        [7.0, 7.1, 7.2, /**/ 7.3, 7.4, 7.5, /**/ 7.6, 7.7, 7.8],
        [8.0, 8.1, 8.2, /**/ 8.3, 8.4, 8.5, /**/ 8.6, 8.7, 8.8]
    ];

    it('should return whole array', () => {
        const actualResult = getSquare(sudokuMap);

        expect(actualResult).toEqual(sudokuMap);
    });

    describe('test row #1', () => {
        it('should return square 1,1', () => {
            const expectedResult = [
                [0.0, 0.1, 0.2],
                [1.0, 1.1, 1.2],
                [2.0, 2.1, 2.2]
            ];
            const actualResult = getSquare(sudokuMap,1,1);

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return square 1,2', () => {
            const expectedResult = [
                [0.3, 0.4, 0.5],
                [1.3, 1.4, 1.5],
                [2.3, 2.4, 2.5]
            ];
            const actualResult = getSquare(sudokuMap,1,2);

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return square 1,3', () => {
            const expectedResult = [
                [0.6, 0.7, 0.8],
                [1.6, 1.7, 1.8],
                [2.6, 2.7, 2.8]
            ];
            const actualResult = getSquare(sudokuMap,1,3);

            expect(actualResult).toEqual(expectedResult);
        });
    });


    describe('test row #2', () => {
        it('should return square 2,1', () => {
            const expectedResult = [
                [3.0, 3.1, 3.2],
                [4.0, 4.1, 4.2],
                [5.0, 5.1, 5.2]
            ];
            const actualResult = getSquare(sudokuMap,2,1);

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return square 2,2', () => {
            const expectedResult = [
                [3.3, 3.4, 3.5],
                [4.3, 4.3, 4.5],
                [5.3, 5.3, 5.5]
            ];
            const actualResult = getSquare(sudokuMap,2,2);

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return square 2,3', () => {
            const expectedResult = [
                [3.6, 3.7, 3.8],
                [4.6, 4.7, 4.8],
                [5.6, 5.7, 5.8]
            ];
            const actualResult = getSquare(sudokuMap,2,3);

            expect(actualResult).toEqual(expectedResult);
        });
    });


    describe('test row #3', () => {
        it('should return square 3,1', () => {
            const expectedResult = [
                [6.0, 6.1, 6.2],
                [7.0, 7.1, 7.2],
                [8.0, 8.1, 8.2]
            ];
            const actualResult = getSquare(sudokuMap,3,1);

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return square 3,2', () => {
            const expectedResult = [
                [6.3, 6.4, 6.5],
                [7.3, 7.4, 7.5],
                [8.3, 8.4, 8.5]
            ];
            const actualResult = getSquare(sudokuMap,3,2);

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return square 3,3', () => {
            const expectedResult = [
                [6.6, 6.7, 6.8],
                [7.6, 7.7, 7.8],
                [8.6, 8.7, 8.8]
            ];

            const actualResult = getSquare(sudokuMap,3,3);

            expect(actualResult).toEqual(expectedResult);
        });
    });
});