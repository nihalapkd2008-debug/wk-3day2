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