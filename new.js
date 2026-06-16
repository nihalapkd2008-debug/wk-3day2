console.log("==Grade Calculator==");

let marks = 95;

if (marks >= 90) {
    console.log("Grade A+");
}
else if (marks >= 80) {
    console.log("Grade A");
}
else if (marks >= 70) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Pass");
}
else {
    console.log("Fail");
}


console.log("==Multiplication Table==");

let number = 5;
for (let i = 1; i <= 10; i++) {
console.log(
  number + "x" + i + "=" + (number * i)
);

}

console.log("==Dry Run Loop Flow==");
for(let i = 1; i <= 5; i++){
  console.log(i);
}
console.log("==Beginner Logic Problem 1==");

console.log("Even or Odd");

let num = 8;
if (num % 2 === 0){

  console.log(num + " is Even");

}
else {
  console.log(num + " is Odd");

}
console.log("==Beginner Logic Problem 2==");

console.log("Positive or Negative");

let value = -10;
if (value > 0) {
  console.log("Positive");
}
else {
  console.log("Negative");
}

console.log("==Beginner Logic Problem 3==");
console.log("Largest NUmber");

let a = 10;
let b = 25;
 if (a > b) {

  console.log(a + " is Largest");
 }
 else{
  console.log(b + " is Largest");
 }