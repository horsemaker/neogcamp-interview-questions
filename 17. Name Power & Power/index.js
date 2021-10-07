// Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points. Write a function which takes two objects and return the person with more power based on their name and power both.

var personOne = {
  name: 'Ram',
  power: 2500,
  yuga: 'Treta',
}

var personTwo = {
  name: 'Krishna',
  power: 2325,
  yuga: 'Dwapar',
}

function checkPowers(personOne, personTwo) {
  namePowerPersonOne = personOne.name.length * 35
  // console.log(namePowerPersonOne)
  namePowerPersonTwo = personTwo.name.length * 35
  // console.log(namePowerPersonTwo)

  if (namePowerPersonOne > namePowerPersonTwo) {
    console.log(`${personOne.name} has more name power than ${personTwo.name}.`)
  } else if (namePowerPersonOne < namePowerPersonTwo) {
    console.log(`${personTwo.name} has more name power than ${personOne.name}.`)
  } else {
    console.log(`${personOne.name} & ${personTwo.name} have equal name powers.`)
  }

  console.log('---------------------------------------')

  if (personOne.power > personTwo.power) {
    console.log(`${personOne.name} has more power than ${personTwo.name}.`)
  } else if (personOne.power < personTwo.power) {
    console.log(`${personTwo.name} has more power than ${personOne.name}.`)
  } else {
    console.log(`${personOne.name} & ${personTwo.name} have equal powers.`)
  }
}

checkPowers(personOne, personTwo)
