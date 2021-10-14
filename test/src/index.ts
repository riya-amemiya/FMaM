import { FMaM } from 'fmam';

const fn_test = <X extends unknown[][]>(x: X) => {
    for (const i of x) {
        if (typeof i[0] != 'object' && !Array.isArray(i[0])) {
            if (!(i[0] === i[1])) {
                throw `Error x:${i[0]},y:${i[1]}`;
            }
        } else if (Array.isArray(i[0])) {
            for (let n = 0; n < i[0].length; n++) {
                if (!(JSON.stringify(i[n]) === JSON.stringify(i[i[0].length < n + 1 ? n + 1 : 0]))) {
                    throw `Error x:${i[0]},y:${i[1]}`;
                }
            }
        } else if (typeof i[0] === 'boolean') {
            if (!i[0] && i[1]) {
                throw `Error x:${i[0]},y:${i[1]}`;
            }
        }
    }
};
const test = [
    [FMaM.gcd(8, 9), 1],
    [FMaM.fact(3), 6],
    [FMaM.gcd(9, 3), 3],
    [FMaM.hanpu(5, 2, { x: 1, y: 4 }), [135, 512]],
    [FMaM.lcm(8, 9), 72],
    [FMaM.nCr(81, 2), 3240],
    [FMaM.nCr(4, 3), 4],
    [FMaM.getArraysIntersect([9, 313134], [3109, 9]), [9]],
    [FMaM.getArraysDiff([0, 1, 2, 3, 4], [0, 1, 2, 3, 4, 5, 6]), [5, 6]],
    [FMaM.isDouble('0.1', false), false],
    [FMaM.isDouble(1), false],
    [FMaM.isDouble('0.1'), true],
    [FMaM.isDouble('1'), false],
    [FMaM.isNumber(8), true],
    [FMaM.isNumber(0.1), true],
    [FMaM.isNumber('0.1'), true],
    [FMaM.gcd(4, FMaM.gcd(6, 8)), 2],
    [FMaM.lcm(4, FMaM.lcm(6, 8)), 24],
    [FMaM.subtract(67, 66.9), 0.1],
    [FMaM.multiplication(66.9, 100), 6690],
    [FMaM.addition(67, 66.9), 133.9],
    [FMaM.division(10.1, 101)[0], 0.1],
    [FMaM.isPrimeNumber(11), true],
    [FMaM.isPrimeNumber(12), false],
    [FMaM.isPrimeNumber(1), false],
    [FMaM.toBinary(2010, 16), '7da'],
];
console.log((94 * (Math.PI / 180)) / 90);
console.log((94 * FMaM.division(Math.PI, 180)[0]) / 90);

fn_test(test);
