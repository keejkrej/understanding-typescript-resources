type Operations = {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
}

type Operations2 = {
    add?: (a: number, b: number) => number;
    subtract?: (a: number, b: number) => number;
}

type Operations3 = {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
}

type Operations4 = {
    readonly add: (a: number, b: number) => number;
    readonly subtract: (a: number, b: number) => number;
}

type Results<T> = {
    [K in keyof T]?: number;
}

type Results2<T> = {
    [K in keyof T]-?: number;
}

type Results3<T> = {
    readonly [K in keyof T]?: number;
}

type Results4<T> = {
    -readonly [K in keyof T]?: number;
}

let mathOperations: Operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
}

let mathResults: Results<Operations> = {
    add: mathOperations.add(1, 2),
}

let mathResults2: Results2<Operations2> = {
    add: mathOperations.add(1, 2),
    subtract: mathOperations.subtract(1, 2),
}

let mathResults3: Results3<Operations3> = {
    add: mathOperations.add(1, 2),
    subtract: mathOperations.subtract(1, 2),
}

let mathResults4: Results4<Operations4> = {
    add: mathOperations.add(1, 2),
    subtract: mathOperations.subtract(1, 2),
}

// mathResults3.add = 10;
mathResults4.add = 10;

console.log(mathResults.add);
console.log(mathResults2.add);
console.log(mathResults2.subtract);

export {};