import { Request, Response } from "express";
import { UpdateLaboratoriesUseCase } from "./UpdateLaboratoriesUseCase";
import Validator from "@utils/validate";

export class UpdateLaboratoriesController {
	constructor(private updateLaboratoriesUseCase: UpdateLaboratoriesUseCase) { }

	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const rules = {
				id: "required|integer",
				name: "string|min:4|max:256",
				address: "string|min:4|max:256",
				status: "boolean",
				exams: "array"
			};

			const isArray = Array.isArray(request.body);

			if (!isArray) {
				throw new Error("Bulk request must be an array.");
			}
			
			for (const item of request.body) {
				const validate = Validator(item, rules);
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
			}

			const data = await this.updateLaboratoriesUseCase.execute(request.body.map(item => {
				return {
					id: item.id,
					name: item.name,
					address: item.address,
					status: item.status,
					exams: item.exams
				}
			}));

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