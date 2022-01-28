import Laboratory from "@entities/Laboratory";
import { ILaboratoryRepository } from "@repositories/ILaboratoryRepository";
import { CreateLaboratoryRequestDTO } from "./CreateLaboratoryDTO";

export class CreateLaboratoryUseCase {
	constructor(private LaboratoryRepository: ILaboratoryRepository) { }

	async execute(data: CreateLaboratoryRequestDTO) {
		const newLaboratory = Laboratory.create(data);
		return this.LaboratoryRepository.save(newLaboratory);
	}
}