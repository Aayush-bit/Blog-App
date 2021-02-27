const uuid = require('uuid');

const usersData = [
    {
        id: uuid.v4(),
        name: "Madhav",
        email: "madhav@gmail.com",
        password: "madhav1234",
        followers: [],
        following: [],
    }
]

module.exports = usersData;