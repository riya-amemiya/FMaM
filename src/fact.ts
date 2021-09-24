export interface FACT {
    (x: number, y?: number): number;
}
/**
 * 階乗
 * @param  {number} x
 * @param  {number} y
 */
const fact = ((x: number, y: number = 1): number => {
    if (x === 0 || x < y) {
        if (y === 0) {
            return NaN;
        }
        return 1;
    } else {
        return x * fact(x - 1, y);
    }
}) as FACT;
export default fact;
