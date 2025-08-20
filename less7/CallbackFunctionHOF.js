function doSomething(callback) {
  console.log('Роблю щось');
  callback(); // Виклик callback
}

doSomething(function() { console.log('Callback!'); });



function greet (name) {
    console.log(`Hello + ${name}`)

}


function ageName (age) {
    console.log(`Hello its ageNAme+ ${age}`)

}

function procesname (age, name , callback) {
    console.log("Дія функції procesname ")
    callback(age)
    callback(name)
}

procesname(12,"Оля",greet)





function greet (name) {
    console.log(`Hello + ${name}`)

}

function procesname ( name , greet) {
    console.log("Дія функції procesname ")
    greet(name)
}

procesname("Оля",greet)