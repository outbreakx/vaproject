import Exam from "@entities/Exam";

import { IExamRepository } from "@repositories/IExamRepository";
import { ILaboratoryRepository } from "@repositories/ILaboratoryRepository";
import { CreateExamsRequestDTO } from "./CreateExamsDTO";

export class CreateExamsUseCase {
	constructor(
		private examRepository: IExamRepository,
		private laboratoryRepository: ILaboratoryRepository ) { }

	async execute(data: CreateExamsRequestDTO[]) {
		for (const item of data) {
			if (item.laboratories) {
				const labsTotal = await this.laboratoryRepository.countMany(item.laboratories);
				if (labsTotal !== item.laboratories.length) {
					throw new Error("Unable to make relation. Exam not found.");
				}
			}
			await this.examRepository.save(item as any);
		}
		return true;
	}
}