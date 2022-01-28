import { ILaboratoryRepository } from "@repositories/ILaboratoryRepository";

import { DeleteLaboratoryRequestDTO } from "./DeleteLaboratoryDTO";

export class DeleteLaboratoryUseCase {
	constructor(private laboratoryRepository: ILaboratoryRepository) { }

	async execute(data: DeleteLaboratoryRequestDTO) {
		const laboratory = await this.laboratoryRepository.get(data);
		if (!laboratory) {
			throw new Error("Laboratory not found");
		}
		if (!laboratory.status) {
			throw new Error("Laboratory is not active");
		}
		return this.laboratoryRepository.delete(data);
	}
}