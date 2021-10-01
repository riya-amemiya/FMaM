export interface GETARRAYSDIFF {
    (): (array: any[], ...arrays: any[]) => unknown[];
    (array: any[], ...arrays: any[]): unknown[];
}
/**
 * 共通しない要素をとりだす
 */
const getArraysDiff = ((array: any[], ...arrays: any[]) => {
    if (typeof array === 'undefined') {
        return (array: any[], ...arrays: any[]) => getArraysDiff(array, arrays);
    }
    let hasArr: any[] = [];
    for (const i of arrays) {
        hasArr.push(...i);
    }
    const arr01 = [...new Set(array)];
    const arr02 = [...new Set(hasArr)];
    return [...arr01, ...arr02].filter((value) => !arr01.includes(value) || !arr02.includes(value));
}) as GETARRAYSDIFF;
export default getArraysDiff;
