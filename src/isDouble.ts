export interface ISDOUBLE {
    (): <T extends string | number>(x: T, loose?: boolean) => boolean;
    <T extends string | number>(x: T, loose?: boolean): boolean;
}
/**
 * 小数点を含むかどうか
 */
const isDouble = function (x?: any, loose: boolean = true) {
    if (typeof x === 'undefined') {
        return (x: any, loose: boolean = true) => isDouble(x, loose);
    }
    if (loose) {
        return isFinite(x) && !Number.isNaN(x) && Number.isFinite(Number(x)) && !Number.isInteger(Number(x));
    }
    return (
        typeof x !== 'string' && x !== null && typeof x !== 'boolean' && Number.isFinite(x) && !Number.isInteger(Number(x))
    );
} as ISDOUBLE;
export default isDouble;
