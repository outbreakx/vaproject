import express from "express";
import Routes from "./routes";


const app = express();
app.disable("x-powered-by");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(Routes);

export { app };