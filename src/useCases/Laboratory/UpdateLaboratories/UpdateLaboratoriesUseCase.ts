import { ILaboratoryRepository } from "@repositories/ILaboratoryRepository";
import { IExamRepository } from "@repositories/IExamRepository";
import { UpdateLaboratoriesRequestDTO } from "./UpdateLaboratoriesDTO";

export class UpdateLaboratoriesUseCase {
	constructor(
		private laboratoriesRepository: ILaboratoryRepository,
		private examRepository: IExamRepository) { }

	async execute(data: UpdateLaboratoriesRequestDTO[]) {

		for (const item of data) {
			if (item.exams) {
				for (const examId of item.exams) {
					const exam = await this.examRepository.get({
						id: examId
					});
					
					if (!exam) {
						throw new Error("Unable to make relation. Exam not found.");
					}
				}
			}
			await this.laboratoriesRepository.update(item)
		}
		return true;
	}
}