import addition from './addition';
import { curry1 } from './Curry';
import division from './division';
import multiplication from './multiplication';
import subtract from './subtract';
export interface CALCULATOR {
    (x: string): string;
    (): (x: string) => string;
}
const calculator = curry1(function (x: string) {
    if (x.indexOf('*') != -1 || x.indexOf('/') != -1) {
        x = x.replace(/\s+/g, '');
        const y: [RegExpMatchArray | null, string[]] = [x.match(/\d+\.?\d?(\*|\/)\d+\.?\d?/), ['']];

        if (y[0]) {
            y[1] = y[0][0].split(/(\d+\.\d+)|(\d+)/g).filter((n) => {
                return typeof n != 'undefined' && n != '';
            });
            x = x.replace(
                y[0][0],
                `${
                    y[1][1] == '*'
                        ? multiplication(Number(y[1][0]), Number(y[1][2]))
                        : y[1][1] == '/'
                        ? division(Number(y[1][0]), Number(y[1][2]))[0]
                        : '0'
                }`,
            );

            return calculator(
                x.replace(
                    y[0][0],
                    `${
                        y[1][1] == '*'
                            ? multiplication(Number(y[1][0]), Number(y[1][2]))
                            : y[1][1] == '/'
                            ? division(Number(y[1][0]), Number(y[1][2]))[0]
                            : '0'
                    }`,
                ),
            );
        }
        return x;
    } else if (x.indexOf('+') != -1 || x.indexOf('-') != -1) {
        const y: [RegExpMatchArray | null, string[]] = [x.match(/\d+\.?\d?(\+|\-)\d+\.?\d?/), ['']];

        if (y[0]) {
            y[1] = y[0][0].split(/(\d+\.\d+)|(\d+)/g).filter((n) => {
                return typeof n != 'undefined' && n !== '';
            });
            x = x.replace(
                y[0][0],
                `${
                    y[1][1] == '+'
                        ? addition(Number(y[1][0]), Number(y[1][2]))
                        : y[1][1] == '-'
                        ? subtract(Number(y[1][0]), Number(y[1][2]))
                        : '0'
                }`,
            );
            return calculator(x);
        }
        return x;
    } else {
        return x;
    }
}) as CALCULATOR;
export default calculator;
