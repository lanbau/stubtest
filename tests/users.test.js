jest.mock('axios');
const axios = require ('axios')
const Users = require('../Users')


test('should fetch users', () => {
    const users = [{name: 'Bob'}]
    const resp = {data: users}

    // or you could use the following depending on your use case:
    axios.get.mockResolvedValue(resp)
    
    return Users.all().then(data => expect(data).toEqual(users))

})