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

let generatedLypsum = `Donec sit amet dui nec tellus condimentum porta ut at metus. Phasellus aliquam, nisi sed 
sodales vulputate, nibh dui malesuada est, at pellentesque ante odio pulvinar mi. Sed vitae ante diam. Nam lorem 
velit, accumsan et odio vitae, dignissim ultricies ligula. Mauris ut pharetra massa, sodales vehicula
 sem. In aliquam malesuada malesuada. Aliquam a sollicitudin libero, molestie laoreet arcu. Aliquam erat volutpat.

Ut id euismod est, a sollicitudin odio. Nunc quis orci fermentum, dignissim nunc at, bibendum nibh. Etiam risus 
est, rutrum eu lacus at, auctor tincidunt eros. Vestibulum posuere eros in ipsum facilisis, et varius massa ornare.
 Donec feugiat eros quis turpis viverra, sit amet aliquet metus convallis. In sit amet blandit ex, at egestas elit.
  Sed eu dignissim sem.

Sed faucibus erat malesuada elit ornare luctus. Suspendisse tempor finibus laoreet. Suspendisse ut ornare magna. Sed 
sed dolor posuere, cursus risus quis, dictum justo. Mauris imperdiet ac odio quis imperdiet. Vivamus urna quam, accumsan
 id lobortis eget, semper ac lorem. Vivamus ultrices interdum ipsum in ornare. Mauris egestas orci sed turpis dignissim efficitur.`
 
 console.log(generatedLypsum.length)

 console.log(generatedLypsum.match(/et/g).length)