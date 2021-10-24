export type ElemenType<X extends readonly any[] | any> = X extends readonly (infer A)[] ? A : never;

export interface GETARRAYSDIFF {
    (): <X extends unknown[], Y extends unknown[]>(array: X, ...arrays: Y) => (ElemenType<X> | ElemenType<ElemenType<Y>>)[];
    <X extends unknown[], Y extends unknown[]>(array: X, ...arrays: Y): (ElemenType<X> | ElemenType<ElemenType<Y>>)[];
}
/**
 * 共通しない要素をとりだす
 * @param  {any[]} array
 * @param  {any[]} ...arrays
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
