import { Request, Response } from "express";
import { UpdateCarUseCase } from "./UpdateCarUseCase";


export class UpdateCarController {
	constructor(private updateCarUseCase: UpdateCarUseCase) { }

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
		const { id } = request.params;
		try {
			const data = await this.updateCarUseCase.execute({
				id,
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