export type ElemenType<X extends readonly any[] | any> = X extends readonly (infer A)[] ? A : never;
export interface ARRAYSJOIN {
    (): <X extends unknown[], Y extends unknown[]>(array: X, ...arrays: Y) => (ElemenType<X> | ElemenType<ElemenType<Y>>)[];
    <X extends unknown[], Y extends unknown[]>(array: X, ...arrays: Y): (ElemenType<X> | ElemenType<ElemenType<Y>>)[];
}
/**
 * 重複をしないで結合
 * @param  {any[]} array
 * @param  {any[]} ...arrays
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
