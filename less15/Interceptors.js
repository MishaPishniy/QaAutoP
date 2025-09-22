// Додавання request interceptor
axios.interceptors.request.use(
  (config) => {
    // Логіка перед відправкою
    return config;
  },
  (error) => {
    // Обробка помилок
    return Promise.reject(error);
  }
);

// Додавання response interceptor
axios.interceptors.response.use(
  (response) => {
    // Логіка після отримання відповіді
    return response;
  },
  (error) => {
    // Обробка помилок
    return Promise.reject(error);
  }
);