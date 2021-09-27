import { curry1 } from './Curry';
export interface ISDOUBLE {
    (x: any): boolean;
    (): (x: any) => boolean;
}
/**
 * 自然数かどうか
 * @param  {any} x
 */
const isDouble = curry1(function (x: any) {
    return isFinite(x) && !Number.isNaN(x) && Number.isFinite(Number(x)) && !Number.isInteger(Number(x));
}) as ISDOUBLE;
export default isDouble;
