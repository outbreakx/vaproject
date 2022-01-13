import { Request, Response } from "express";
import { CreateCarUseCase } from "./CreateCarUseCase";


export class CreateCarController {
	constructor(private createCarUseCase: CreateCarUseCase) { }

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
			const data = await this.createCarUseCase.execute({
				brand,
				model,
				version,
				year,
				mileage,
				shiftType,
				sellPrice
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