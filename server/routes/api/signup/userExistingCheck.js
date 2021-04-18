const User = require("../../../model/user");

const userExistingCheck = (req, res, next) => {
    const newUserEmail = req.body.email;
    
    User.findOne({email: newUserEmail})
    .then(match => {
        if (match === null) next();
        else res.send("User already exists");
    })
    .catch(err => console.error(err));
}


module.exports = userExistingCheck;