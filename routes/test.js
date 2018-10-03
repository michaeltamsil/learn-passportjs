// lib/math.js
export function sum(x, y) {
    return x + y;
}
export var pi = 3.141593;

// app.js
import * as math from "lib/math";
aert("2n = " + math.sum(math.pi, math.pi));

// otherApp.js
import { sum, pi } from 'lib/math';
alert("2n = " + sum(pi, pi))

// lib/mathplusplus.js
export * from "lib/math";
export var e = 2.7182818;
export default function(e) {
    return Math.log(x)
}

// app.js
import ln, {pi, e} from "lib/mathplusplus";
alert("2n = " + ln(e) * pi * 2)