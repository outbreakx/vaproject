import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

export async function mongoConnection(collection: string) {
	if (mongoose.connection.readyState >= 1) {
		console.log("Tried new connection. MongoDB is allready connected.");
		return;
	}
	return mongoose.connect(`${MONGO_URL}/${collection}`).then(() => {
		console.log("mongodb connected");
	});
}

