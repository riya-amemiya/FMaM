import { curry1 } from './Curry/curry1';

export interface FACT {
    (): (x: number) => number;

    (x: number): number;
}
/**
 * 階乗
 * @param  {number} x
 */
const fact = curry1(function (x: number) {
    if (x === 0) {
        return 1;
    } else {
        return x * fact(x - 1);
    }
}) as FACT;
export default fact;
