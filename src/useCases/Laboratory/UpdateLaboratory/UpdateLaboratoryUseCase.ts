import { ILaboratoryRepository } from "@repositories/ILaboratoryRepository";
import { IExamRepository } from "@repositories/IExamRepository";
import { UpdateLaboratoryRequestDTO } from "./UpdateLaboratoryDTO";

export class UpdateLaboratoryUseCase {
	constructor(private LaboratoryRepository: ILaboratoryRepository) { }

	async execute(data: UpdateLaboratoryRequestDTO) {
		return this.LaboratoryRepository.update(data);
	}
}