export interface GETARRAYSINTERSECT {
    (): (array: any[], ...arrays: any[]) => unknown[];
    (array: any[], ...arrays: any[]): unknown[];
}
/**
 * 共通の要素をとりだす
 * @param  {any[]} array
 * @param  {any[]} ...arrays
 */
const getArraysIntersect = ((array: any[], ...arrays: any[]) => {
    if (typeof array === 'undefined') {
        return (array: any[], ...arrays: any[]) => getArraysIntersect(array, arrays);
    }
    let hasArr: any[] = [];
    for (const i of arrays) {
        hasArr.push(...i);
    }
    return [...new Set(array)].filter((value) => hasArr.includes(value));
}) as GETARRAYSINTERSECT;
export default getArraysIntersect;
