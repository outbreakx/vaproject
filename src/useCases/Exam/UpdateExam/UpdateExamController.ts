import { Request, Response } from "express";
import { UpdateExamUseCase } from "./UpdateExamUseCase";
import Validator from "@utils/validate";


export class UpdateExamController {
	constructor(private updateExamUseCase: UpdateExamUseCase) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const {
			name,
			address,
			status,
			laboratories
		} = request.body;
		const { id } = request.params;
		try {
			const rules = {
				name: "string|min:4|max:256",
				address: "string|min:4|max:256",
				status: "boolean",
				laboratories: "array"
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

			const data = await this.updateExamUseCase.execute({
				id,
				name,
				address,
				status,
				laboratories
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