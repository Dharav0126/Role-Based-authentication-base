const mongoose = require('mongoose');

const dbconnect = async () => {
    try {
        // mongodb connection string
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,//
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = dbconnect;