import Exam from "@entities/Exam";
import Laboratory from "@entities/Laboratory";

export interface ILaboratoryParams {
	id?: number | string;
	name?: string;
	address?: string;
	status?: boolean;
	exams?: Exam[];
}


export interface ILaboratoryRepository {
	save(laboratory: Laboratory): Promise<Laboratory>;
	update(params: ILaboratoryParams): Promise<Laboratory>;
	list(params?: ILaboratoryParams): Promise<Laboratory[] | null>;
	get(params: ILaboratoryParams): Promise<Laboratory | null>;
	delete(params: ILaboratoryParams): Promise<boolean>;
	countMany?(ids: number[]): Promise<number>;
}