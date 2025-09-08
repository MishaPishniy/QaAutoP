const pizza = new Promise((resolve, reject) => {

    let seccses = true;
  if (seccses) {
    resolve("Приїхала піці"); }
  else {
    reject("Піца не приїхала");
  }
});
pizza
.then(console.log)
.catch(console.error)
.finally(() => console.log("Інщі дії. Пити колу"));


const getUser = new Promise((resolve, reject) => {

    setTimeout(() => {

        let seccses = false;
          if (seccses) {
            resolve(["Misha","Pasha","sasha"]); }
  else {
             reject("Логінів не має");
  }
    },2000)

});

getUser
.then(users => console.log("Логіни користувачів",users))
.catch(error => console.log("Логіни не прийшли",error))



