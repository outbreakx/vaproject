import Exam from "@entities/Exam";
import { IExamRepository } from "@repositories/IExamRepository";
import { CreateExamRequestDTO } from "./CreateExamDTO";

export class CreateExamUseCase {
	constructor(private ExamRepository: IExamRepository) { }

	async execute(data: CreateExamRequestDTO) {
		const newExam = Exam.create(data);
		return this.ExamRepository.save(newExam);
	}
}