// Original
// Number.prototype.isPrime = function() {
//     for( let i=2; i<this; i++ ) {
//         if( this % i === 0 ) {
//                 return false;
//             }
//         }
//     return true;
// }


// Version 1, only up to square root
Number.prototype.isPrime = function() {
    for( let i=2; i<=Math.sqrt(this); i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e5 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 100,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);


/* ============================================================================= */


// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
const { performance } = require('perf_hooks');
const start1 = performance.now();
console.log(`The 20th Fibonacci number is ${rFib(20)}`);
console.log(`This took ${performance.now() - start1} milliseconds to run using recursion.`);

// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
const start2 = performance.now();
console.log(`The 20th Fibonacci number is ${iFib(20)}`);
console.log(`This took ${performance.now() - start2} milliseconds to run using iteration.`);

/*
The 20th Fibonacci number is 6765
This took 4.656700015068054 milliseconds to run using recursion.
The 20th Fibonacci number is 6765
This took 0.07699999213218689 milliseconds to run using iteration.
*/


/* ============================================================================= */


const { performance } = require('perf_hooks');
const start3 = performance.now();
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam \
reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium \
tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae \
fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto \
mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(`String reversed: ${reversed1}`);
console.log(`** This took ${performance.now() - start3} milliseconds to run using split, reverse and join methods. **`);


const start4 = performance.now();
function reverseStr(str) {
    return (str.length <= 1) ? str : reverseStr(str.slice(1)) + str[0]
}
const reversed2 = reverseStr(story)
console.log(`String reversed: ${reversed2}`);
console.log(`** This took ${performance.now() - start4} milliseconds to run using recursion. **`);

/*
String reversed: !seroirepsa erobal oitpo aitillom otsui tidepmi orev masoirobal ,seroiam saitselom mulli ,imina talleper ,diuqilA !tiguf eauq etatidipuc atulos subirolod atidepxe rutauqesnoc sudnellepeR
?rutanrepsa aropmet muitnadual eropmet tiguf tua adnemussa saitselom sidneicier sutceled tiredneherper maspi mauqila aiuq ,emixam masoirobal allun talleper lihin apluc tnedivorP .tile gnicisipida rutetcesnoc tema tis rolod muspi meroL
** This took 3.915600001811981 milliseconds to run using split, reverse and join methods. **
String reversed: !seroirepsa erobal oitpo aitillom otsui tidepmi orev masoirobal ,seroiam saitselom mulli ,imina talleper ,diuqilA !tiguf eauq etatidipuc atulos subirolod atidepxe rutauqesnoc sudnellepeR
?rutanrepsa aropmet muitnadual eropmet tiguf tua adnemussa saitselom sidneicier sutceled tiredneherper maspi mauqila aiuq ,emixam masoirobal allun talleper lihin apluc tnedivorP .tile gnicisipida rutetcesnoc tema tis rolod muspi meroL
** This took 0.2662000060081482 milliseconds to run using recursion. **
*/