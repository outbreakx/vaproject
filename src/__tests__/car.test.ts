import request from "supertest";
import { mongoConnection } from "@repositories/implementations/MongoDb/MongoDbConnection";

import Server from "../server";
import mongoose from "mongoose";


beforeAll(async () => {
	await mongoConnection('test');
})

describe("ROUTES CARS", () => {
	it("should create a car", async () => {
		const res = await request(Server)
			.post('/api/cars')
			.send({
				brand: "brand 1",
				model: "model 1",
				version: 1,
				year: 2010,
				milieage: 100,
				shiftType: "manual",
				sellPrice: 60000
			});
		const data = res.body.data;
		expect(data.brand).toBe('brand 1');
	});


	it("should list cars", async () => {
		const res = await request(Server)
			.get('/api/cars');

		expect(Array.isArray(res.body.data)).toBe(true);
	});
});


afterAll(done => {
	mongoose.connection.close();
	Server.close();
	done();
})
