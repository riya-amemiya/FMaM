import { curry1 } from './Curry';
export interface DEGTORAD {
    (x: number): void;
    (): (x: number) => void;
}
/**
 * 角度をラジアンに変換
 * @param  {number} x
 */
const degToRad = curry1(function (x: number) {
    return x * (Math.PI / 180);
}) as DEGTORAD;
export default degToRad;
