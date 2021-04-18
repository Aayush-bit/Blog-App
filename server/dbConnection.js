const mongoose = require("mongoose");
const url = `mongodb://${process.env.DBHOSTNAME}/${process.env.DBNAME}`;

const dbConnectionFunction = () => {
    mongoose.connect(url, 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }
    );

    // checking for the connection
    const db = mongoose.connection;
    db.once('open', () => {
        // connected
    })
    .on('error', err => console.error(err));
}

module.exports = dbConnectionFunction;