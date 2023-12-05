function  calcFactorial (num) {
   if (num === 0 || num === 1){
    return 1;
   }
   else{
    return num *  calcFactorial(num-1);
   }
}
let answer =  calcFactorial(8)
console.log(answer);