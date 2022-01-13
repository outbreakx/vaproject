import { Car } from "@entities/Car";
import { ICarRepository } from "@repositories/ICarRepository";

import { DeleteCarRequestDTO } from "./DeleteCarDTO";

export class DeleteCarUseCase {
	constructor(private carRepository: ICarRepository) { }

	async execute(data: DeleteCarRequestDTO) {
		return this.carRepository.delete(data);
	}
}