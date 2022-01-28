import { IExamRepository } from "@repositories/IExamRepository";

import { GetExamRequestDTO } from "./GetExamDTO";

export class GetExamUseCase {
	constructor(private examRepository: IExamRepository) { }

	async execute(data: GetExamRequestDTO) {
		return this.examRepository.get(data);
	}
}