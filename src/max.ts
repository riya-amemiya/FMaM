export interface MAX {
    (...num: number[]): number;
    (): (...num: number[]) => number;
}
const max = function (...num: number[]) {
    if (typeof num === 'undefined') {
        return (...num: number[]) => Math.max.apply(null, [...new Set(num)]);
    } else {
        return Math.max.apply(null, [...new Set(num)]);
    }
} as MAX;
export default max;
