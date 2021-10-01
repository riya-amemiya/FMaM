import { curry1 } from './Curry';
export interface RANDOM {
    (x: number): number;
    (): (x: number) => number;
}
/**
 * 整数の乱数
 */
export const random = curry1(function (num: number) {
    return Math.floor(Math.random() * (num || 1));
}) as RANDOM;
