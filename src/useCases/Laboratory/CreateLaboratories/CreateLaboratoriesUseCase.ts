import Laboratory from "@entities/Laboratory";
import { ILaboratoryRepository } from "@repositories/ILaboratoryRepository";
import { CreateLaboratoriesRequestDTO } from "./CreateLaboratoriesDTO";

export class CreateLaboratoriesUseCase {
	constructor(private LaboratoriesRepository: ILaboratoryRepository) { }

	async execute(data: CreateLaboratoriesRequestDTO) {
		const newLaboratories = Laboratory.create(data);
		return this.LaboratoriesRepository.save(newLaboratories);
	}
}