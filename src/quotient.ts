import { curry2 } from './Curry';
export interface QUOTIENT {
    (x: number, y: number): {
        answer: number;
        surplus: number;
    };
    (x: number): (y: number) => {
        answer: number;
        surplus: number;
    };
}
/**
 * あまりの割り算
 * @param  {number} x
 * @param  {number} y
 */
const quotient = curry2(function (x: number, y: number) {
    return {
        answer: (x - (x % y)) / y,
        surplus: (x % y) + 0,
    };
}) as QUOTIENT;
export default quotient;
