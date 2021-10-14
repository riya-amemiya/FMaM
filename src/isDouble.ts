export interface ISDOUBLE {
    (): (x: any, loose?: boolean) => boolean;
    (x: any, loose?: boolean): boolean;
}
/**
 * 小数点を含むかどうか
 * @param  {any} x
 */
const isDouble = function (x?: any, loose: boolean = true) {
    if (typeof x === 'undefined') {
        return (x: any, loose: boolean = true) => isDouble(x, loose);
    }
    if (loose) {
        return isFinite(x) && !Number.isNaN(x) && Number.isFinite(Number(x)) && !Number.isInteger(Number(x));
    } else {
        return x !== null && typeof x !== 'boolean' && Number.isFinite(x);
    }
} as ISDOUBLE;
export default isDouble;
