/*if (умова) {

    // якийсь код  = true
} else {
    // якийсь код  = false
}

if (умова) {

    // якийсь код  = true
} // якийсь код  = false


let age = 0 
if ( age >= 18) {
    console.log("Vam bilshe 18 abo 18")
}   console.log("Vam menshe 18 ")


if (){

} else if () {

} else if () {

} else {

}


// 0 -59 - не здав , 60 - с , 61-75 - В , 76-90 - А , 91-100 А+

let num = 101
if ( num <= 59) {
    console.log("Не здав")
}else if (num === 60 ) {
     console.log("C")
}else if (num > 60 && num <76) {
    console.log("B")
}else if (num >75 && num < 91) {
      console.log("A")
} else if (num > 90 && num < 101) {
    console.log("A+")
} console.log("Pomilka")


let isAdmin = true;
let isLogin = true;
let isSuperAdmin = false;

if (isLogin) {
    console.log("Hello in system")
    if (isAdmin) {
       console.log("Hello admin") 
       if (isSuperAdmin) {
         console.log("Hello Superadmin") 
       }
    } else {
        console.log("Hello User")
    }
} else  {
    console.log("Login in system")
} */
