/**
 * 共通の要素をとりだす
 */
const getArraysIntersect = (array: any[], ...arrays: any[]) => {
    let hasArr: any[] = [];
    for (const i of arrays) {
        hasArr.push(...i);
    }
    return [...new Set(array)].filter((value) => hasArr.includes(value));
};
export default getArraysIntersect;
