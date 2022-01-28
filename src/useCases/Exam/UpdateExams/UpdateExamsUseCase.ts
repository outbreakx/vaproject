import { IExamRepository } from "@repositories/IExamRepository";
import { ILaboratoryRepository } from "@repositories/ILaboratoryRepository";
import { UpdateExamsRequestDTO } from "./UpdateExamsDTO";

export class UpdateExamsUseCase {
	constructor(
		private examRepository: IExamRepository,
		private laboratoryRepository: ILaboratoryRepository) { }

	async execute(data: UpdateExamsRequestDTO[]) {
		for (const item of data) {
			if (item.laboratories) {
				const labsTotal = await this.laboratoryRepository.countMany(item.laboratories);
				if (labsTotal !== item.laboratories.length) {
					throw new Error("Unable to make relation. Exam not found.");
				}
			}
			await this.examRepository.update(item);
		}
		return true;
	}
}