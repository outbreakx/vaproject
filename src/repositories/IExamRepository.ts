import Exam from "@entities/Exam";
import Laboratory from "@entities/Laboratory";

export interface IExamParams {
	id?: string | number;
	name?: string;
	type?: string;
	status?: boolean;
	laboratories?: Laboratory[];
}


export interface IExamRepository {
	save(exam: Exam): Promise<Exam>;
	update(params: IExamParams): Promise<Exam>;
	list(params?: IExamParams): Promise<Exam[] | null>;
	get(params: IExamParams): Promise<Exam | null>;
	delete(params: IExamParams): Promise<boolean>;
	deleteMany?(ids: number[]): Promise<boolean>;

}