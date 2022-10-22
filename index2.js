// rember is the sum of last two numbers of secuence 

let fiboNumber1 = 0; 
let fiboNumber2 = 1; 
// could change number of iteration ... 
const number = 30; 


for ( let i = 1 ; i <= number ; i ++){
    let fibonacci = fiboNumber1 + fiboNumber2;
    fiboNumber1 = fiboNumber2;
    fiboNumber2 = fibonacci;
    console.log(fiboNumber1);
}



