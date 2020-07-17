let points = Number(prompt('Please enter the total points scored by the student'));
console.log(`You have scored ${points}`); 

if(points >= 90) {
    console.log(`You have scored ${points} and your letter grade is an A!`);
    }
    if(points<=89&&points>=80) {
    console.log(`You have scored ${points} and your letter grade is a B !`);
    }
    if(points<=79&&points>=70) {
    console.log(`You have scored ${points} and your letter grade is a C !`);
    }
    if(points<=69&&points>=60) {
    console.log(`You have scored ${points} and your letter grade is a D !`);
    }
    if(points<60) 
    {
    console.log(`You have scored ${points} and your letter grade is an F !`);
    }