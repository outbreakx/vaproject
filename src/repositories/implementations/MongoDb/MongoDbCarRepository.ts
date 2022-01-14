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
		return CarModel.findOneAndUpdate({
			_id: id
		},
			params, {
			new: true
		}).exec();
	}

	async list(params?: ICarParams): Promise<Car[] | LeanDocument<Car>[]> {
		let newParams = { ...params } as any;
		if (params.startRangeYear && params.endRangeYear) {
			newParams['year'] = {
				$gte: params.startRangeYear,
				$lte: params.endRangeYear
			};
		}
		else if (params.startRangeYear) {
			newParams['year'] = {
				$gte: params.startRangeYear
			};
		}
		else if (params.endRangeYear) {
			newParams['year'] = {
				$lte: params.endRangeYear
			};
		}

		if (params.startRangePrice && params.endRangePrice) {
			newParams['sellPrice'] = {
				$gte: params.startRangePrice,
				$lte: params.endRangePrice
			};
		}
		else if (params.startRangePrice) {
			newParams['sellPrice'] = {
				$gte: params.startRangePrice
			};
		}
		else if (params.endRangePrice) {
			newParams['sellPrice'] = {
				$lte: params.endRangePrice
			};
		}

		return CarModel.find(newParams).lean().exec();
	}

	async get(params: ICarParams): Promise<Car | LeanDocument<Car>> {
		return CarModel.findById(params.id).lean().exec();
	}

	async delete(params: ICarParams): Promise<boolean> {
		return (await CarModel.findOneAndDelete({ _id: params.id }).exec()) ? true : false;
	}
}