/* let numbers = 4;
 numbers = 5;
 letnumberArrays = [1,2,3,4,5];
console.log(numbers);


let string = 'string';
let strings = "strings";

let boolean = true; //slso false

////////////////////////*  */

//const firstName = 'Rob';
//const job= 'Student';
//const birthYear = 2002;
//let isMarried = false;

//console.log("Hello my name is " + firstName + "I am a " +job + "and I was born in" +birthYear + ) 
//console.log(`Hello my name is ${firstName}, I am a ${job}, I was born in ${birthYear} and am I married? ${isMarried}` );


//const now = new Date().getFullYear();
//const yearIlsa = 2003;
//let fullAge = 18; 
//let isFullAge = now - yearIlsa >= fullAge; 
//console.log(isFullAge);
//let ageWill = now - 2002;
//let ageNick = 18;
//let averageAge = (ageNick + ageWill) / 2; 
//console.log(averageAge);

//let x,y;
//x = 5;
//y = x;
//z = y;
//q = z;
//console.log(x);


/* const robMass = 78;
const robHeight = 1.69;
const dejonMass = 92;
const dejonHeight = 1.95;

let dejonBmi = dejonMass / (dejonHeight * dejonHeight);
let robBmi = robMass /  (robHeight * robHeight);
let tfRobBmi= robMass /  (robHeight * robHeight)  >= dejonBmi;

console.log(`   Is Rob's BMI higher than Dejon + ${tfRobBmi} `);

/* 
console.log(tfRobBmi);
console.log(robBmi);
console.log(dejonBmi);  */

//if else statements //

/* let firstName = 'Paul';
let status = 'married';

if (status === 'single') {
    console.log(`${firstName} is single and ready to mingle`);
} else {
    console.log(`Someone made a big mistake with ${firstName} `);
}
 */
/* const robMass = 78;
const robHeight = 1.69;
const dejonMass = 92;
const dejonHeight = 1.95;

let dejonBmi = dejonMass / (dejonHeight * dejonHeight);
let robBmi = robMass /  (robHeight * robHeight);

if(dejonBmi > robBmi) {
    console.log(`dejon is heavier`);

}else{
    console.log(`Rob is heavier`);
} */

/* let firstName = 'Sarah';
let age= 17;
if (age < 13) {
    console.log(`${firstName} is not a teenager`);
} else if (age>= 13 && <20) {
    console.log(`${firstName} is a teenager`);

} else if (age >= 20 && <30) {
    console.log(`${firstName} is a young woman`);

} else {
    console.log('She a boomer');
} */

/* let firstName = 'Nick';
let age = 22;

age >= 21 ? console.log(`${firstName} will drink alcohol`) : console.log(`${firstName} will drink water`);
 */

 ///Truth and falsy quality operTORS//
 //falsey= null, 0, undefined, '', NaN
 //True= anything not above this line//
/* 
 let height = 22

 if(height == 22) {
     console.log(` Hey this is type coercion!`);
 } else {
     console.log(`No type coercion with 3 =`);
 }

 */

let johnAvg =  (89 + 120 + 103) / 3;
let mikeAvg =  (116 + 94+ 123) / 3;


console.log(johnAvg);
console.log(mikeAvg);

if (johnAvg > mikeAvg) {
    console.log(`John is winner ${johnAvg}`)
} else {
    console.log(`Mike is winner=${mikeAvg}`)
}