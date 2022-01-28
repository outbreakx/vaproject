import { ILaboratoryRepository } from "@repositories/ILaboratoryRepository";

import { ListLaboratoryRequestDTO } from "./ListLaboratoryDTO";

export class ListLaboratoryUseCase {
	constructor(private LaboratoryRepository: ILaboratoryRepository) { }

	async execute(data: ListLaboratoryRequestDTO) {
		for (const key in data) {
			if (data[key] === undefined) {
				delete data[key];
			}
		}
		return this.LaboratoryRepository.list(data);
	}
}