import { ILaboratoryRepository } from "@repositories/ILaboratoryRepository";

import { GetLaboratoryRequestDTO } from "./GetLaboratoryDTO";

export class GetLaboratoryUseCase {
	constructor(private LaboratoryRepository: ILaboratoryRepository) { }

	async execute(data: GetLaboratoryRequestDTO) {
		const item = await this.LaboratoryRepository.get(data);
		if(!item) {
			throw new Error("Laboratory not found");
		}
		return item;
	}
}