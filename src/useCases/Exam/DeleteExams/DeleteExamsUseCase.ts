import { IExamRepository } from "@repositories/IExamRepository";

import { DeleteExamsRequestDTO } from "./DeleteExamsDTO";

export class DeleteExamsUseCase {
	constructor(private examRepository: IExamRepository) { }

	async execute(data: DeleteExamsRequestDTO[]) {
		return this.examRepository.deleteMany(data.map(item => item.id));
	}
}