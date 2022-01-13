import dotenv from 'dotenv';

dotenv.config({
	path: process.env.NODE_ENV === "development" ? ".env" : ".env.production"
});

import { app } from "./app";

const PORT = process.env.SERVER_PORT || 8000;

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at ${process.env.SERVER_URL}:${PORT}`);
})