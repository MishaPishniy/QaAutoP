//Promise.reject(reason)

Promise.reject(new Error("Щось пішло не так")).catch(err => console.log(err.message)); 