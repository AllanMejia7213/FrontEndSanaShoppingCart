import axios from 'axios';

export const PRODUCTS = [];

// Modify this line with the API route you want to consume, modify the value for the category you want to consult or even change the services to display all the products
axios.get('http://localhost:57908/api/Products/GetProductListByCategory/1')
  .then(response => {
    const productsFromApi = response.data.response;
    if (Array.isArray(productsFromApi)) {
      PRODUCTS.length = 0;
      productsFromApi.forEach(product => PRODUCTS.push(product));
    } else {
      console.error('Response from API is not in expected format:', productsFromApi);
    }
  })
  .catch(error => {
    console.error('Error fetching products from API:', error);
  });

