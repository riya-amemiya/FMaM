export interface ARRAYSJOIN {
    (): (array: any[], ...arrays: any[]) => unknown[];
    (array: any[], ...arrays: any[]): unknown[];
}
/**
 * 重複をしないで結合
 */
const arraysJoin = ((array: any[], ...arrays: any[]) => {
    if (typeof array === 'undefined') {
        return (array: any[], ...arrays: any[]) => arraysJoin(array, arrays);
    }
    for (const i of arrays) {
        array.push(...i);
    }
    return [...new Set(array)];
}) as ARRAYSJOIN;
export default arraysJoin;
