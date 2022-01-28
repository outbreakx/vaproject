import { Request, Response } from "express";
import { DeleteExamsUseCase } from "./DeleteExamsUseCase";


export class DeleteExamsController {
	constructor(private deleteExamsUseCase: DeleteExamsUseCase) { }

	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const isArray = Array.isArray(request.body);
			console.log(request.body)
			if (!isArray) {
				throw new Error("Bulk request must be an array.");
			}
			for(const item of request.body) {
				if (!Number.isInteger(item)) {
					throw new Error("Bulk request must contain only ids.");
				}
			}
			const data = await this.deleteExamsUseCase.execute(request.body.map(item => {
				return {
					id: item
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