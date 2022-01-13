import dotenv from 'dotenv';

dotenv.config({
	path: process.env.NODE_ENV === "development" ? ".env" : ".env.production"
});

import { mongoConnection } from "@repositories/implementations/MongoDb/MongoDbConnection";

if (process.env.NODE_ENV != 'test') {
	mongoConnection(process.env.MONGO_COLLECTION);
}


import { app } from "./app";

const PORT = process.env.SERVER_PORT || 8000;

const server = app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at ${process.env.SERVER_URL}:${PORT}`);
})


export default server;