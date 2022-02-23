import { curry3 } from './Curry/curry3';
export interface QUICKSORT {
    <T>(array: T[], startID: number, endID: number): T[];
    <T>(array: T[], startID: number): (endID: number) => T[];
    <T>(array: T[]): (startID: number, endID: number) => T[];
}
let n = 0;
//配列を高速にソート
const quickSort = curry3(function (array: any[], startID: number, endID: number) {
    if (!n) {
        array = array.sort((x, y) => {
            if (x < y) return -1;
            if (x > y) return 1;
            return 0;
        });
        n++;
    }
    const pivot = array[Math.floor((startID + endID) / 2)];
    let left = startID;
    let right = endID;
    while (true) {
        while (array[left] < pivot) {
            left++;
        }
        while (pivot < array[right]) {
            right--;
        }
        if (right <= left) {
            break;
        }
        const tmp = array[left];
        array[left] = array[right];
        array[right] = tmp;
        left++;
        right--;
    }
    if (startID < left - 1) {
        quickSort(array, startID, left - 1);
    }
    if (right + 1 < endID) {
        quickSort(array, right + 1, endID);
    }
    return array;
}) as QUICKSORT;
export default quickSort;
