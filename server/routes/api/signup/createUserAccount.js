// * to create an account for a new user
const User = require("../../../model/user"); 
const bcrypt = require("bcrypt");

const createUserAccount = async (req, res, next) => {
    const newUserData = req.body;
    
    // encrypt password
    const hashedPassword = await bcrypt.hash(newUserData.password, 10); 

    // defining a newUser for saving into the database
    const newUser = new User({
        name: newUserData.name,
        email: newUserData.email,
        password: hashedPassword
    });

    // saving User in the database
    newUser
    .save()
    .then(() => {
        if (newUser.isNew === false) res.status(200);
        else res.status(500).send('Failed to create user account! Please try again :))');
    })
    .catch(err => res.status(500).send(err));

    // putting newUser in req.user for use in following middlewares
    req.user = newUser;

    next();
}

module.exports = createUserAccount;