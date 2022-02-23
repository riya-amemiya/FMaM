import { curry1 } from './Curry/curry1';
export interface RANDOM {
    (x: number): number;
    (): (x: number) => number;
}
/**
 * 整数の乱数
 * @param  {number} num
 */
const random = curry1(function (num: number) {
    return Math.floor(Math.random() * (num || 1));
}) as RANDOM;
export default random;
