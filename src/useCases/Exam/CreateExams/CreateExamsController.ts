import { Request, Response } from "express";
import { CreateExamsUseCase } from "./CreateExamsUseCase";
import Validator from "@utils/validate";

export class CreateExamsController {
	constructor(private createExamsUseCase: CreateExamsUseCase) { }

	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const rules = {
				name: "required|string|min:4|max:256",
				type: "required|string|min:4|max:48",
				status: "boolean",
				laboratories: "array"
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

			const data = await this.createExamsUseCase.execute(request.body.map(item => {
				return {
					name: item.name,
					type: item.type,
					status: item.status,
					laboratories: item.laboratories
				}
			}));

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