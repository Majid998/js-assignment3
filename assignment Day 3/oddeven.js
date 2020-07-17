console.log('to check whether user input is even or odd ');

let num = Number(prompt('Please enter the number',0));
console.log(num);
let result
if(num % 2 == 0)
{
 console.log(`the number entered is ${num} and the number is Even`);
}
else
{
    console.log(`the number entered is ${num} and the number is Odd`);
}