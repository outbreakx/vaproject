import { Car } from "@entities/Car";
import { ICarRepository } from "@repositories/ICarRepository";

import { ListCarRequestDTO } from "./ListCarDTO";

export class ListCarUseCase {
	constructor(private carRepository: ICarRepository) { }

	async execute(data: ListCarRequestDTO) {
		return this.carRepository.list();
	}
}