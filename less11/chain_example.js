Promise.resolve(1).then(x => x + 1).then(console.log);

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
.then(users => console.log("Логіни користувачів",users);
return users.map(u => u.toUpperCases());
})
.then(upperUsers => {
    console.log("Кількість користувачів",upperUsers);
    return upperUsers.lenght
})
.then(count => console.log("Кількість ",count);
return `Кількість ${count}`;)
.catch(error => console.log("Логіни не прийшли",error))
