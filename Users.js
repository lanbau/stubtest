// users.js
const axios = require ('axios') ;

class Users {
  // there is only one instance of all and it's shared by all instances of this class
  static all() {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1').then(resp => resp.data);
  }
}

module.exports = Users;