const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let CoefA;
let CoefB;
let CoefC;

rl.question('Enter the coefficient a :', A => {
    CoefA = parseFloat(A);
    rl.question('Enter the coefficient b :', B => {
        CoefB = parseFloat(B)
        rl.question('Enter the coefficient c : ', C => {
            CoefC = parseFloat(C)
            const root1 = (-CoefB + Math.sqrt(CoefB**2 - 4*CoefA*CoefC))/(2*CoefA);
            const root2 = (-CoefB - Math.sqrt(CoefB**2 - 4*CoefA*CoefC))/(2*CoefA);
            console.log(`The quadratic equation : ${CoefA}x²${CoefB}x${CoefC}`)
            console.log(`The first root is ${root1} `)
            console.log(`The second root is ${root2} `)
            rl.close();
        });
    });
});