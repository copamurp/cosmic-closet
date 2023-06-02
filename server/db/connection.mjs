import {MongoClient} from "mongodb";

const dbUrl = process.env.ATLAS_URI;
const client = new MongoClient(dbUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const databaseObject = {
	connectToServer: function (callback) {
		try {
			// Connect the client to the server	(optional starting in v4.7)
			client.connect();

			// Send a ping to confirm a successful connection
			client.db("cosmic_closet").command({ping: 1}).then(r => {
				console.log("Pinged cosmic_closet deployment. MongoDB connection established.");
			}).catch(err => {
				console.error("Unable to ping cosmic_closet deployment. MongoDB connection failed.");
			})
		} catch (e) {
			console.error(e);
		}
	},
	getDb: function (targetDb) {
		try {
			return client.db(targetDb);
		} catch (e) {
			console.error(e);
			return null;
		}
	},
};

export default databaseObject;