const { updateStudentScore, removeStudentScoreBySubject, transformData } = require('../utils');

const store = [
    {
        subject: 'math',
        students: [{ name: 'luffy', score: 10 }, { name: 'zoro', score: 15 }]
    },
    {
        subject: 'science',
        students: [{ name: 'luffy', score: 15 }, { name: 'zoro', score: 25 }]
    }
];

describe('update new student score', () => {
    test('should be update new student correctly', () => {
        const result = updateStudentScore(store, {
            name: 'sanji',
            scores: {
                math: 22,
                science: 33
            }
        });

        const expected = [
            {
                subject: 'math',
                students: [
                    { name: 'luffy', score: 10 },
                    { name: 'zoro', score: 15 },
                    { name: 'sanji', score: 22 }
                ]
            },
            {
                subject: 'science',
                students: [
                    { name: 'luffy', score: 15 },
                    { name: 'zoro', score: 25 },
                    { name: 'sanji', score: 33 }
                ]
            }
        ];

        expect(result).toEqual(expected);
    });

    test('should be update new subject correctly', () => {
        const result = updateStudentScore(store, {
            name: 'sanji',
            scores: {
                computer: 44
            }
        });

        const expected = [
            {
                subject: 'math',
                students: [{ name: 'luffy', score: 10 }, { name: 'zoro', score: 15 }]
            },
            {
                subject: 'science',
                students: [{ name: 'luffy', score: 15 }, { name: 'zoro', score: 25 }]
            },
            {
                subject: 'computer',
                students: [{ name: 'sanji', score: 44 }]
            }
        ];

        expect(result).toEqual(expected);
    });

    test('should be update old student score correctly', () => {
        const result = updateStudentScore(store, {
            name: 'luffy',
            scores: {
                math: 40,
                science: 60
            }
        });
        const expected = [
            {
                subject: 'math',
                students: [{ name: 'luffy', score: 40 }, { name: 'zoro', score: 15 }]
            },
            {
                subject: 'science',
                students: [{ name: 'luffy', score: 60 }, { name: 'zoro', score: 25 }]
            }
        ];

        expect(result).toEqual(expected);
    });
});

describe('remove score by student and subject', () => {
    test('should be remove correct', () => {
        const result = removeStudentScoreBySubject(store, { name: 'luffy', subject: 'math' });

        const expected = [
            {
                subject: 'math',
                students: [{ name: 'zoro', score: 15 }]
            },
            {
                subject: 'science',
                students: [{ name: 'luffy', score: 15 }, { name: 'zoro', score: 25 }]
            }
        ];

        expect(result).toEqual(expected);
    });
});

describe('transform data by student', () => {
    test('should be transform correctly', () => {
        const result = transformData(store);
        const expected = [
            {
                name: 'luffy',
                math: 10,
                science: 15
            },
            {
                name: 'zoro',
                math: 15,
                science: 25
            }
        ];

        expect(result).toEqual(expected);
    });
});
