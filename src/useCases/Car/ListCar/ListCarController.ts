import { Request, Response } from "express";
import { ListCarUseCase } from "./ListCarUseCase";


export class ListCarController {
	constructor(private listCarUseCase: ListCarUseCase) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const {
			brand,
			model,
			version,
			year,
			mileage,
			shiftType,
			sellPrice,
		} = request.body;

		try {
			const data = await this.listCarUseCase.execute({
				brand,
				model,
				version,
				year,
				mileage,
				shiftType,
				sellPrice
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