async function fetchMultiple() {
  try {
    const urls = [
      'https://jsonplaceholder.typicode.com/posts/1',
      'https://jsonplaceholder.typicode.com/posts/2',
      'https://api.example.com/data3',
    ];
    const requests = urls.map((url) => fetch(url).then((res) => res.json()));
    const results = await Promise.all(requests);
    console.log(results); // Масив результатів від усіх запитів
  } catch (error) {
    console.error('Помилка:', error);
  }
}

fetchMultiple();
