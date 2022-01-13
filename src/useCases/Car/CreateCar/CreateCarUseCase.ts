import { Car } from "@entities/Car";
import { ICarRepository } from "@repositories/ICarRepository";

import { CreateCarRequestDTO } from "./CreateCarDTO";

export class CreateCarUseCase {
	constructor(private carRepository: ICarRepository) { }

	async execute(data: CreateCarRequestDTO) {
		const newCar = new Car(data);
		return this.carRepository.save(newCar);
	}
}