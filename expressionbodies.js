events = [3, 5, 36, 24, 23]
odds = evens.ma( v => v + 1)

// lib/math.js
export function sum (x, y) {
    return x + y;
}
export var pi = 3.141593

// someApp.js
import * as math from 'lib/math'
console.log('2phi = ' + math.sum(math.pi, math.pi))

export * from 'lib/math'
export var e = 2.718
export default (x) => Math.exp(x)