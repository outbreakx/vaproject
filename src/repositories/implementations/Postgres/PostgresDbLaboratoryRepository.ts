import Laboratory from "@entities/Laboratory";

import { ILaboratoryParams, ILaboratoryRepository } from "@repositories/ILaboratoryRepository";
import { getManager, In } from "typeorm";


export class PostGresLaboratoryRepository implements ILaboratoryRepository {
	async save(laboratory: Laboratory): Promise<Laboratory> {
		const repository = await getManager().getRepository(Laboratory);
		return repository.save(laboratory);
	}

	async list(params?: ILaboratoryParams): Promise<Laboratory[]> {
		const tParams = { ...params } as any;
		return Laboratory.find({
			where: tParams,
			relations: [
				'exams',
			]
		});
	}

	async update(params: Laboratory): Promise<Laboratory> {
		const repository = await getManager().getRepository(Laboratory);
		params.id = Number(params.id);
		let tmp = { ...params } as any;
		if (params.exams) {

			tmp['exams'] = params.exams.map(exam => {
				return {
					id: exam
				}
			});
		}
		return repository.save(tmp);
	}

	async get(params: ILaboratoryParams): Promise<Laboratory> {
		return Laboratory.findOne({
			where: {
				id: params.id
			},
			relations: [
				'exams',
			]
		});
	}

	async delete(params: ILaboratoryParams): Promise<boolean> {
		return (await Laboratory.delete({ id: params.id as number })).affected > 0;
	}

	async countMany(ids: number[]): Promise<number> {
		const items = await Laboratory.find({
			where: {
				id: In(ids)
			}
		});
		return items.length;
	}
}