import { Request, Response } from "express";
import { CreateExamUseCase } from "./CreateExamUseCase";
import Validator from "@utils/validate";

export class CreateExamController {
	constructor(private createExamUseCase: CreateExamUseCase) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const {
			name,
			type,
			status
		} = request.body;
		try {
			const rules = {
				name: "required|string|min:4|max:256",
				type: "required|string|min:4|max:48",
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

			const data = await this.createExamUseCase.execute({
				name,
				type,
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