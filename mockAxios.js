const axios = require('axios')

const mockAxios = () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.data)
}

module.exports = mockAxios