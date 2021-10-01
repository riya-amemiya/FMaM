export interface ISNUMBER {
    (): (x: any, loose?: boolean) => boolean;
    (x: any, loose?: boolean): boolean;
}
/**
 * 数字かどうか
 *  @param  {any} x
 * @param  {boolean} loose 曖昧な判定を許すかどうか(default:true)
 */
const isNumber = ((x: any, loose: boolean = true) => {
    if (typeof x === 'undefined') {
        return (x: any, loose: boolean = true) => isNumber(x, loose);
    }
    return x !== null && typeof x !== 'boolean' && loose ? isFinite(x) : Number.isFinite(x);
}) as ISNUMBER;
export default isNumber;
