import { Request, Response } from "express";
import { CreateLaboratoryUseCase } from "./CreateLaboratoryUseCase";
import Validator from "@utils/validate";

export class CreateLaboratoryController {
	constructor(private createLaboratoryUseCase: CreateLaboratoryUseCase) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const {
			name,
			address,
			status
		} = request.body;
		try {
			const rules = {
				name: "required|string|min:4|max:256",
				address: "required|string|min:4|max:256",
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

			const data = await this.createLaboratoryUseCase.execute({
				name,
				address,
				status
			});

			return response.status(201).json({
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