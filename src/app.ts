import express from "express";
import { mongoConnection } from "./repositories/implementations/MongoDb/MongoDbConnection";
import Routes from "./routes";

const app = express();
app.disable("x-powered-by");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


mongoConnection(process.env.MONGO_COLLECTION);

app.use(Routes);

export { app };