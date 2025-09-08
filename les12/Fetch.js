//fetch(url, [options])

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw new Error("Мережева помилка");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Помилка:", error);
  }
}

fetchData();