Promise.reject("Помилка").catch(error => console.log("Зловлено:", error));


Promise.reject("Помилка")
setTimeout(() => console.log("Кіець програми"),1000) 