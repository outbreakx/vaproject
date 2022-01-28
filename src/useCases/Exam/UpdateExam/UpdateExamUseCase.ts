import { IExamRepository } from "@repositories/IExamRepository";

import { UpdateExamRequestDTO } from "./UpdateExamDTO";

export class UpdateExamUseCase {
	constructor(private examRepository: IExamRepository) { }

	async execute(data: UpdateExamRequestDTO) {
		return this.examRepository.update(data);
	}
}