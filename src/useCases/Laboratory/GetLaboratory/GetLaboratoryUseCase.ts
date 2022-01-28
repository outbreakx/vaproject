import { ILaboratoryRepository } from "@repositories/ILaboratoryRepository";

import { GetLaboratoryRequestDTO } from "./GetLaboratoryDTO";

export class GetLaboratoryUseCase {
	constructor(private LaboratoryRepository: ILaboratoryRepository) { }

	async execute(data: GetLaboratoryRequestDTO) {
		return this.LaboratoryRepository.get(data);
	}
}