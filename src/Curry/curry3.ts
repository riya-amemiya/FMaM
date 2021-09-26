interface CURRY3 {
    <T extends (a: A, b: B, c: C) => ReturnType<T>, A extends any, B extends any, C extends any>(fn: T): {
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1], c: ArgumentTypes<typeof fn>[2]): ReturnType<T>;
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1]): (c: ArgumentTypes<typeof fn>[2]) => ReturnType<T>;
        (a: ArgumentTypes<typeof fn>[0]): (b: ArgumentTypes<typeof fn>[1], c: ArgumentTypes<typeof fn>[2]) => ReturnType<T>;
    };
    <T extends <A extends any, B extends any, C extends any>(a: A, b: B, c: C) => ReturnType<T>>(fn: T): {
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1], c: ArgumentTypes<typeof fn>[2]): ReturnType<T>;
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1]): (c: ArgumentTypes<typeof fn>[2]) => ReturnType<T>;
        (a: ArgumentTypes<typeof fn>[0]): (b: ArgumentTypes<typeof fn>[1], c: ArgumentTypes<typeof fn>[2]) => ReturnType<T>;
    };
    <T extends <A extends any>(a: A, b: B, c: C) => ReturnType<T>, B extends any, C extends any>(fn: T): {
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1], c: ArgumentTypes<typeof fn>[2]): ReturnType<T>;
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1]): (c: ArgumentTypes<typeof fn>[2]) => ReturnType<T>;
        (a: ArgumentTypes<typeof fn>[0]): (b: ArgumentTypes<typeof fn>[1], c: ArgumentTypes<typeof fn>[2]) => ReturnType<T>;
    };
    <T extends <A extends any, B extends any>(a: A, b: B, c: C) => ReturnType<T>, C extends any>(fn: T): {
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1], c: ArgumentTypes<typeof fn>[2]): ReturnType<T>;
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1]): (c: ArgumentTypes<typeof fn>[2]) => ReturnType<T>;
        (a: ArgumentTypes<typeof fn>[0]): (b: ArgumentTypes<typeof fn>[1], c: ArgumentTypes<typeof fn>[2]) => ReturnType<T>;
    };
    <T extends <A extends any, C extends any>(a: A, b: B, c: C) => ReturnType<T>, B extends any>(fn: T): {
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1], c: ArgumentTypes<typeof fn>[2]): ReturnType<T>;
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1]): (c: ArgumentTypes<typeof fn>[2]) => ReturnType<T>;
        (a: ArgumentTypes<typeof fn>[0]): (b: ArgumentTypes<typeof fn>[1], c: ArgumentTypes<typeof fn>[2]) => ReturnType<T>;
    };
    <T extends <B extends any>(a: A, b: B, c: C) => ReturnType<T>, A extends any, C extends any>(fn: T): {
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1], c: ArgumentTypes<typeof fn>[2]): ReturnType<T>;
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1]): (c: ArgumentTypes<typeof fn>[2]) => ReturnType<T>;
        (a: ArgumentTypes<typeof fn>[0]): (b: ArgumentTypes<typeof fn>[1], c: ArgumentTypes<typeof fn>[2]) => ReturnType<T>;
    };
    <T extends <B extends any, C extends any>(a: A, b: B, c: C) => ReturnType<T>, A extends any>(fn: T): {
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1], c: ArgumentTypes<typeof fn>[2]): ReturnType<T>;
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1]): (c: ArgumentTypes<typeof fn>[2]) => ReturnType<T>;
        (a: ArgumentTypes<typeof fn>[0]): (b: ArgumentTypes<typeof fn>[1], c: ArgumentTypes<typeof fn>[2]) => ReturnType<T>;
    };
    <T extends <C extends any>(a: A, b: B, c: C) => ReturnType<T>, A extends any, B extends any>(fn: T): {
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1], c: ArgumentTypes<typeof fn>[2]): ReturnType<T>;
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1]): (c: ArgumentTypes<typeof fn>[2]) => ReturnType<T>;
        (a: ArgumentTypes<typeof fn>[0]): (b: ArgumentTypes<typeof fn>[1], c: ArgumentTypes<typeof fn>[2]) => ReturnType<T>;
    };
}
type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;
export const curry3 = (<T extends <A, B, C>(a: A, b: B, c: C) => ReturnType<T>>(fn: T) => {
    function curry(a: ArgumentTypes<typeof fn>[0], b?: ArgumentTypes<typeof fn>[1], c?: ArgumentTypes<typeof fn>[2]) {
        switch (arguments.length) {
            case 1:
                return (b: ArgumentTypes<typeof fn>[1], c?: ArgumentTypes<typeof fn>[2]) => curry(a, b, c);
            case 2:
                return (c: ArgumentTypes<typeof fn>[2]) => curry(a, b, c);
            case 3:
                return fn(a, b, c);
        }
    }
    return curry;
}) as CURRY3;
