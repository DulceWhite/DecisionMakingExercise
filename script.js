//DecisionMaking

//1a
let randomNum = Math.floor(Math.random()*5)+1;

console.log(randomNum);
//OR

/*
let randomNum = Math.random();
randomNum *= 5;
randomNum = Math.floor(randomNum);
randomNum ++;
*/

//1b
if (randomNum >= 4){
    console.log(`Greater than or equal to 4`);
} else if (randomNum === 3 || randomNum === 2){//best practice use === strict equality
    console.log(`Equal to 2 or 3`);
} else {
    console.log(`Equal to 1`);
}

//1c
if (randomNum !== 3){//use strict 
    console.log(`Not equal to 3`);
}

//1d
if (randomNum !== 3 && randomNum !== 5){
    console.log(`Not equal to 3 AND not equal to 5`);
}

//1e
if (randomNum === 2 || randomNum === 4){
    console.log(`Equal to 2 OR equal to 4`);
}

//BONUS



//2

randomNum >= 4? "Greater than or equal to 4" : "Less than 4";
console.log(randomNum);


if(randomNum >=4){
    console.log(`Greater than or equal to 4`);
} else {
    console.log(`Less than 4`);
}

//or
randomNum >= 4 ? console.log(`Greater than or equal to 4`): console.log(`Less than 4`);

//3
//Switch statement takes a parameter/argument and returns something based on the CASE (or match) of the parameter/argument goes with 
//In this example if randomNum is 1 it will display "one" in the terminal , if randomNum is 2 it will display "two" etc.

switch (randomNum){
    case 1:
        console.log(`One`);
        break;//breaks are needed between each case so that the code for the case that follows does NOT also run
    case 2:
        console.log(`Two`);
        break;
    case 3: 
        console.log(`Three`);
        break;
    case 4:
        console.log(`Four`);
        break;
    case 5:
        console.log(`Five`);
        //There is no need of a break at the end of a switch statement since there are no other cases.
 
}