import { Request, Response } from "express";
import { GetExamUseCase } from "./GetExamUseCase";


export class GetExamController {
	constructor(private getExamUseCase: GetExamUseCase) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const {
			id
		} = request.params;

		try {
			const data = await this.getExamUseCase.execute({
				id
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