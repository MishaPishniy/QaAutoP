const { default: axios } = require("axios")
const { Axios } = require("axios")

test('check get /BookStore/v1/Books status code 200', async () => {

    const response = await axios.get('https://demoqa.com/BookStore/v1/Books')
    expect(response.status).toBe(200)
    console.log(response.data)
})

test('check get /BookStore/v1/Books toBeDefined books', async () => {

    const response = await axios.get('https://demoqa.com/BookStore/v1/Books')
    expect(response.data.books).toBeDefined()
    console.log(response.data)
})


test('check get /BookStore/v1/Books toHaveLength 10', async () => {

    const response = await axios.get('https://demoqa.com/BookStore/v1/Books')
    expect(response.data.books).toHaveLength(8)
    console.log(response.data)
})

