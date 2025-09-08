switch (зміна) {
    case значення : 
    код 
    break;
    case значення2 :
         код 
    break;
    default :
    код 
} 

let day = 3;

switch (day) {
case 1: 
console.log("Понеділок");
case 2:
    console.log("Vivtorok");
case 3:
    console.log("Sereda");
case 4:
    console.log("Chetver");
    default :
     console.log("Nema takogo dny");
}


let moth = 1

switch(moth) {
    case 1 :
    case 2 :
    case 12 :
        console.log("Зима");
        break;

        case 3:
        case 4:
        case 5: 
        console.log("Весна")
        break;

        case 6:
        case 7:
        case 8: 
        console.log("Літо")
        break; 

        
        case 9:
        case 10:
        case 11: 
        console.log("Осінь")
        break; 
}

let moth1 = "Winter"
switch(moth1) {
    case "Winter" :
    case "Зима" :
        console.log("Це зима");
        break;
    case "Spring":
    case "Весна":
         console.log("Це Весна");
         break;
    }


    let moth2 = "Winter"

    if (["Winter","Зима"].includes(moth2)) 
    {  console.log("Це зима");

    } else if (["Spring","Весна"].includes(moth2)){
        console.log("Це Весна");
    }


let moth4 = "Spring";  
if (moth4 === "Winter" || moth4 === "Зима") {
  console.log("Це зима");
} else if (moth4 === "Spring" || moth4 === "Весна"){
       console.log("Це Весна");
}