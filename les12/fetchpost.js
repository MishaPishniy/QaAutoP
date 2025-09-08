 fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify ({
        name : 'Jhon Doe',
        age : 30 ,
        email: 'JhonDOe@gmail.com'
      })
    })
     .then(response => response.json())
  .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error("Помилка:", error);
    });

//2 priklad
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
