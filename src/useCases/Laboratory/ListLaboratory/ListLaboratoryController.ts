import { Request, Response } from "express";
import { ListLaboratoryUseCase } from "./ListLaboratoryUseCase";
import { ListLaboratoryRequestDTO } from "./ListLaboratoryDTO";
import Validator from "@utils/validate";

export class ListLaboratoryController {
	constructor(private listLaboratoryUseCase: ListLaboratoryUseCase) { }

	async handle(request: Request<{}, {}, {}, ListLaboratoryRequestDTO>, response: Response): Promise<Response> {
		const {
			name,
			status
		} = request.query;

		try {
			const rules = {
				name: "string|min:4|max:256",
				status: "boolean"
			};
			const validate = Validator(request.body, rules);
			if (validate.errors) {
				return response.status(422)
					.send({
						error: {
							code: 400,
							message: 'Validation failed',
							data: validate
						}
					});
			}
			
			const data = await this.listLaboratoryUseCase.execute({
				name,
				status
			});

			return response.status(200).json({
				data: data
			});
		}
		catch (err) {
			return response.status(400).json({
				error: {
					code: 400,
					message: err.message || "Unknown error."
				}
			})
		}
	}
}