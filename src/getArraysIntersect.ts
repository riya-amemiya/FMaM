export type ElemenType<X extends readonly any[] | any> = X extends readonly (infer A)[] ? A : never;
export interface GETARRAYSINTERSECT {
    (): <X extends unknown[], Y extends unknown[]>(array: X, ...arrays: Y) => (ElemenType<X> | ElemenType<ElemenType<Y>>)[];
    <X extends unknown[], Y extends unknown[]>(array: X, ...arrays: Y): (ElemenType<X> | ElemenType<ElemenType<Y>>)[];
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
