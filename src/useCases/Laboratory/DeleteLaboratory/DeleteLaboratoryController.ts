import { Request, Response } from "express";
import { DeleteLaboratoryUseCase } from "./DeleteLaboratoryUseCase";


export class DeleteLaboratoryController {
	constructor(private deleteLaboratoryUseCase: DeleteLaboratoryUseCase) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const {
			id
		} = request.params;

		try {
			const data = await this.deleteLaboratoryUseCase.execute({
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