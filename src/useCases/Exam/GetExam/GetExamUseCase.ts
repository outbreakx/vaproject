import { IExamRepository } from "@repositories/IExamRepository";

import { GetExamRequestDTO } from "./GetExamDTO";

export class GetExamUseCase {
	constructor(private examRepository: IExamRepository) { }

	async execute(data: GetExamRequestDTO) {
		const item = await this.examRepository.get(data);
		if(!item) {
			throw new Error("Exam not found");
		}
		return item;
	}
}