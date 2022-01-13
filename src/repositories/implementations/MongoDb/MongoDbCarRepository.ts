import { Car } from "@entities/Car";
import CarModel from "@models/Car";

import { ICarParams, ICarRepository } from "@repositories/ICarRepository";
import { LeanDocument } from "mongoose";


export class MongoDbCarRepository implements ICarRepository {
	async save(car: Car): Promise<Car> {
		return CarModel.create(car);
	}
	async update(params: ICarParams): Promise<Car> {
		const id = params.id;
		delete params.id;
		const existsCar = await CarModel.findOneAndUpdate({
			_id: id
		},
			params, {
			new: true
		}).exec();
		return existsCar;
	}

	async list(params?: ICarParams): Promise<Car[] | LeanDocument<Car>[]> {
		return CarModel.find().lean().exec();
	}

	async get(params: ICarParams): Promise<Car | LeanDocument<Car>> {
		return CarModel.findById(params.id).lean().exec();
	}

	async delete(params: ICarParams): Promise<boolean> {
		return (await CarModel.findOneAndDelete({ _id: params.id }).exec()) ? true : false;;
	}
}