import { IExamRepository } from "@repositories/IExamRepository";

import { DeleteExamRequestDTO } from "./DeleteExamDTO";

export class DeleteExamUseCase {
	constructor(private examRepository: IExamRepository) { }

	async execute(data: DeleteExamRequestDTO) {
		const exam = await this.examRepository.get(data);
		if (!exam) {
			throw new Error("Exam not found");
		}
		if (!exam.status) {
			throw new Error("Exam is not active");
		}
		return this.examRepository.delete(data);
	}
}