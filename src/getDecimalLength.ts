import { curry1 } from './Curry';
export interface GETDECIMALLENGTH {
    (value: number): number;
    (): (value: number) => number;
}
/**
 * 小数点以下の桁
 * @param  {number} value
 */
const getDecimalLength = curry1(function (value: number) {
    let x = (value + '').split('.')[1];
    if (typeof x !== 'undefined' && x.length > 0) {
        return x.length;
    }
    return 0;
}) as GETDECIMALLENGTH;
export default getDecimalLength;
