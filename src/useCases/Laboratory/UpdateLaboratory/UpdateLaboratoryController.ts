import { Request, Response } from "express";
import { UpdateLaboratoryUseCase } from "./UpdateLaboratoryUseCase";
import Validator from "@utils/validate";


export class UpdateLaboratoryController {
	constructor(private updateLaboratoryUseCase: UpdateLaboratoryUseCase) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const {
			name,
			address,
			status,
			exams	
		} = request.body;
		const { id } = request.params;
		try {
			const rules = {
				name: "string|min:4|max:256",
				address: "string|min:4|max:256",
				status: "boolean",
				exams: "array"
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

			const data = await this.updateLaboratoryUseCase.execute({
				id,
				name,
				address,
				status,
				exams
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