
// QUESTION 3

// Bolatito just got admitted to Greenfield High School as an Arts student. To commence her studies, 
// she needs to know the subjects she will be taking as an Arts student. All students have to take the General subjects.
// 	The subjects for each class group are as follows:
// 	Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
// Social Science Subjects - Accounting, Commerce, Marketing, Geography
// Arts Subjects - Government, Economics, Literature, History
// General Subjects - English, Mathematics

// Using if…else conditional statement, write a program that will help Bolatito determine the subjects she will be taking for
//  the session using her class group. Also, in the case of an invalid class group, your output should be the General subjects. 

let classGroup = 'ART';

if (classGroup === 'SCIENCES') {
    console.log('Physics, Chemistry, Biology, Technical Drawing, English, Mathematics')
}
else if (classGroup === 'SOCIAL SCIENCES') {
    console.log('Accounting, Commerce, Marketing, Geography, English, Mathematics');
} 
else if (classGroup === 'ART') {
    console.log('Government, Economics, Literature, History, English, Mathematics');
} 
else {
    console.log('Invalid class group. You will be taking General subjects: English, Mathematics');
  }

// Question 5
let num = 70;
let x = Math.log2(num); // gives the number to which 2 is raised to obtain num
let y = Math.round(x); // rounds that number to the nearest integer
let pwr = Math.pow(2,y); // calculates the power of 2 nearest to num

console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`); // Log the result to the console

