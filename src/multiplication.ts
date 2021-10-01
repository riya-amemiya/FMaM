import { curry2 } from './Curry/curry2';
import getDecimalLength from './getDecimalLength';
interface MULTIPLICATION {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
}
/**
 * 誤差のない掛け算
 * @param  {number} x
 * @param  {number} y
 */
const multiplication = curry2(function (x: number, y: number) {
    const n = 10 ** (getDecimalLength(x) + getDecimalLength(y));
    x = +(x + '').replace('.', '');
    y = +(y + '').replace('.', '');
    return (x * y) / n;
}) as MULTIPLICATION;
export default multiplication;
