// Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well?

var readlineSync = require("readline-sync")

var nameArray = []
var unitArray = []
var preFinalArray = []
var finalArray = []
var totalMarksArray = []
var avgMarksArray = []

for (var i = 0; i < 5; i++) {
  console.log("Enter details of student", i+1, ":")
  // name
  name = readlineSync.question("Name: ")
  nameArray.push(name)

  // unit marks
  unitMarks = parseInt(readlineSync.question("Unit Marks: "))
  unitArray.push(unitMarks)

  // pre final marks
  preFinalMarks = parseInt(readlineSync.question("Pre Final Marks: "))
  preFinalArray.push(preFinalMarks)

  // final marks
  finalMarks = parseInt(readlineSync.question("Final Marks: "))
  finalArray.push(finalMarks)

  console.log("-----------")
}

// result
for (var i = 0; i < 5; i++) {
  var sum = (unitArray[i] + preFinalArray[i] + finalArray[i])
  var avg = sum/3

  totalMarksArray.push(sum)
  avgMarksArray.push(avg)
}

console.log(nameArray[totalMarksArray.indexOf(Math.max(...totalMarksArray))], "has the highest marks of all.")

console.log("-----------")

console.log("Average Marks:")
for (var i = 0; i < 5; i++) {
  console.log(nameArray[i], ":", avgMarksArray[i])
}

// We can also solve this question by using functions