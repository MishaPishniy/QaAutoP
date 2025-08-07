console.log( 0.1 + 0.2 == 0.3)
console.log(0.3 - 0.1 )
console.log(0.015 * 0.2 )
console.log(0.3/0.1)

//let a = 3.145678909
//console.log(a.toFixed(4))

let a = 0.1 + 0.2
let b = 0.3
const esp = Number.EPSILON

console.log(Math.abs(a - b) < esp )

console.log(Number.EPSILON)

let a1 = 3.1456789
a1 = Math.round(a1 * 100) /100
console.log(a1)


console.log(Math.(4 , 2))

let a1 = 3.1456789
let truncate = Math.trunc(a1 * 100) /100
console.log(truncate)

let name = "M"
let age = "30"
let newName = "Hello/,.!@ world"
console.log(newName.charAt(3))
let lastIndex = newName.length - 1 
        //   0 1 2 3 4 5 6 7 8 9 10
        console.log(newName.length)
         console.log(newName[11])
         console.log(lastIndex)
console.log(newName.slice(1,4))
console.log(newName.substring(0,4))
firstSim = newName[0]
lastSim = newName[newName.length-1]
let allSim = firstSim + " " + lastSim 
console.log(allSim)
console.log(firstSim+lastSim)

thriSim = newName[2]
console.log( firstSim + " " + lastSim+ " " + thriSim)

greate = `helo world ${name} i have ${age}`
console.log(greate)



let age1 = 20 
let isAudit = age1 >= 18 
console.log("Вік людини:",age1)
console.log("ЧИ повнолітня",isAudit)

let radius = 5 ;
let area = Math.PI * radius ** 2 
console.log(area)

let radius = 5 ;
let area = Math.PI * Math.pow(radius,2)
console.log(area)