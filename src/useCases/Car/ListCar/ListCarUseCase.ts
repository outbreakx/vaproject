import { Car } from "@entities/Car";
import { ICarRepository } from "@repositories/ICarRepository";

import { ListCarRequestDTO } from "./ListCarDTO";

export class ListCarUseCase {
	constructor(private carRepository: ICarRepository) { }

	async execute(data: ListCarRequestDTO) {
		if (data.year && (data.startRangeYear || data.endRangePrice)) {
			throw new Error("Only year or range year.");
		}
		if (data.sellPrice && (data.startRangePrice || data.endRangePrice)) {
			throw new Error("Only price or range price.");
		}
		if ((data.startRangeYear && data.endRangeYear) && data.startRangeYear > data.endRangeYear) {
			throw new Error("StartRangeYear must be lower than EndRangeYear");
		}
		else if ((data.startRangePrice && data.endRangePrice) && data.startRangePrice > data.endRangePrice) {
			throw new Error("StartRangePrice must be lower than EndRangePrice");
		}

		for (const key in data) {
			if (data[key] === undefined) {
				delete data[key];
			}
		}
		return this.carRepository.list(data);
	}
}