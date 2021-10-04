import { curry2 } from './Curry/curry2';
import getDecimalLength from './getDecimalLength';
import max from './max';
import multiplication from './multiplication';
export interface ADDITION {
    /**
     * 誤差のない足し算
     * @param  {number} x
     * @param  {number} y
     */
    (x: number, y: number): number;
    /**
     * 誤差のない足し算
     * @param  {number} x
     */
    (x: number): (y: number) => number;
}

const addition = curry2(function (x: number, y: number) {
    const z = Math.pow(10, max(getDecimalLength(x), getDecimalLength(y)));
    return (multiplication(x, z) + multiplication(y, z)) / z;
}) as ADDITION;
export default addition;
