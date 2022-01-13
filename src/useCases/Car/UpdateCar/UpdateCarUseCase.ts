import { Car } from "@entities/Car";
import { ICarRepository } from "@repositories/ICarRepository";

import { UpdateCarRequestDTO } from "./UpdateCarDTO";

export class UpdateCarUseCase {
	constructor(private carRepository: ICarRepository) { }

	async execute(data: UpdateCarRequestDTO) {
		return this.carRepository.update(data);
	}
}