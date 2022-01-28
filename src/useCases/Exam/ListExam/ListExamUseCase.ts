import { IExamRepository } from "@repositories/IExamRepository";

import { ListExamRequestDTO } from "./ListExamDTO";

export class ListExamUseCase {
	constructor(private examRepository: IExamRepository) { }

	async execute(data: ListExamRequestDTO) {
		for (const key in data) {
			if (data[key] === undefined) {
				delete data[key];
			}
		}
		return this.examRepository.list(data);
	}
}