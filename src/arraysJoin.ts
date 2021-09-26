/**
 * 重複をしないで結合
 */
const arraysJoin = (array: any[], ...arrays: any[]): unknown[] => {
    for (const i of arrays) {
        array.push(...i);
    }
    return [...new Set(array)];
};
export default arraysJoin;
