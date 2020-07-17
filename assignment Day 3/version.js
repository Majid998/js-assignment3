var   OS = prompt('Please enter the OS and version of phone software (seprated by a single space)');
console.log(OS);
var arr  = OS.split(" ");
console.log(arr);
console.log(`the OS of the software is ${arr[0]} and the version is ${arr[1]}`);
