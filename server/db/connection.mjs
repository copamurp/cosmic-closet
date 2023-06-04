import mongoose from "mongoose";

let _conn;

const databaseObject = {
    connectToServer: function () {
        mongoose.connect(process.env.MONGOOSE_COSMICCLOSET_URI, {
            useNewUrlParser:    true,
            useUnifiedTopology: true,
        }).then(() => {
            _conn = mongoose.connection;
            console.log(
                    "Mongoose established connection to Cosmic Closet database");
        }).catch((err) => {
            console.error(err);
        });
    },
    getConnection:   () => {
        return _conn;
    },
};

export default databaseObject;