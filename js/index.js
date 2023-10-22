// Iteration 1: Names and Input
let hacker1 = 'John'
console.log(`the driver's name is ${hacker1}`)

let hacker2 = 'Peter'

console.log(`The navigator's name is ${hacker2}`)


//
// Iteration 2: Conditionals

let lengthOfDriverName = hacker1.length;
let lengthOfNavigatorsName = hacker2.length;

if (lengthOfDriverName > lengthOfNavigatorsName){
    console.log(`The driver has the longest name, it has ${lengthOfDriverName}characters`)
}
else if(lengthOfNavigatorsName > lengthOfDriverName){
    console.log(`It seems that the navigator has the longest name, it has ${lengthOfNavigatorsName} characters`)
}
else if(lengthOfDriverName === lengthOfNavigatorsName){
    console.log(`Wow, you both have equally long names, ${lengthOfNavigatorsName} characters!`)
}

// Iteration 3: Loops

console.log(hacker1.split("").join(" ").toUpperCase())
console.log(hacker2.split("").reverse("").join(""))


if (hacker1 > hacker2){
    console.log('The driver\'s name goes first')
}

else if(hacker2 > hacker1){
    console.log('Yo, the navigator goes first definitely')
}

else  if(hacker1 === hacker2){
    console/log('What? You both have the same name')
}



console.log('i am ready')


