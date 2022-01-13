import { Car } from "@entities/Car";
import { ICarRepository } from "@repositories/ICarRepository";

import { GetCarRequestDTO } from "./GetCarDTO";

export class GetCarUseCase {
	constructor(private carRepository: ICarRepository) { }

	async execute(data: GetCarRequestDTO) {
		return this.carRepository.get(data);
	}
}