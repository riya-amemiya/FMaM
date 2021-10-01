export interface MIN {
    (x: number[]): number;
    (): (x: number[]) => number;
}
/**
 * 最小値を返す
 */
const min = function (num: number[]) {
    if (typeof num === 'undefined') {
        return (...num: number[]) => Math.min.apply(null, [...new Set(num)]);
    } else {
        return Math.min.apply(null, [...new Set(num)]);
    }
} as MIN;
export default min;
