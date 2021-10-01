export interface TOBINARY {
    (x: number, radix?: number): string;
    (): (x: number, radix?: number) => string;
}
/**
 * n進数に変換
 */
const toBinary = function (x?: number, radix: number = 2) {
    if (typeof x === 'undefined') {
        return (x: number, radix: number = 2) => toBinary(x, radix);
    }
    return x.toString(radix);
} as TOBINARY;
export default toBinary;
