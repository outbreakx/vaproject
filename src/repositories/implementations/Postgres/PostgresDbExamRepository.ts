import Exam from "@entities/Exam";

import { IExamParams, IExamRepository } from "@repositories/IExamRepository";
import { getManager } from "typeorm";


export class PostGresExamRepository implements IExamRepository {
	async save(exam: Exam): Promise<Exam> {
		const repository = await getManager().getRepository(Exam);
		let tmp = { ...exam } as any;
		if (exam.laboratories) {	

			tmp['laboratories'] = exam.laboratories.map(laboratory => {
				return {
					id: laboratory
				}
			});
		}
		return repository.save(tmp);
	}

	async list(params: IExamParams): Promise<Exam[]> {
		const tParams = { ...params } as any;
		return Exam.find({
			where: tParams,
			relations: [
				'laboratories',
			]
		});
	}

	async update(params: Exam): Promise<Exam> {
		const repository = await getManager().getRepository(Exam);
		params.id = Number(params.id);
		let tmp = { ...params } as any;
		if (params.laboratories) {

			tmp['laboratories'] = params.laboratories.map(laboratory => {
				return {
					id: laboratory
				}
			});
		}
		return repository.save(tmp);
	}

	async get(params: IExamParams): Promise<Exam> {
		return Exam.findOne({
			where: {
				id: params.id
			},
			relations: [
				'laboratories',
			]
		});
	}

	async delete(params: IExamParams): Promise<boolean> {
		return (await Exam.delete(params.id as number)).affected > 0;
	}
	async deleteMany(ids: number[]): Promise<boolean> {
		return (await Exam.delete(ids)).affected > 0;
	}
}