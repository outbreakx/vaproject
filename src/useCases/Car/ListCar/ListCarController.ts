import { Request, Response } from "express";
import { ListCarUseCase } from "./ListCarUseCase";
import { ListCarRequestDTO } from "./ListCarDTO";

export class ListCarController {
	constructor(private listCarUseCase: ListCarUseCase) { }

	async handle(request: Request<{}, {}, {}, ListCarRequestDTO>, response: Response): Promise<Response> {
		const {
			brand,
			model,
			version,
			year,
			mileage,
			shiftType,
			sellPrice,
			startRangeYear,
			endRangeYear,
			startRangePrice,
			endRangePrice
		} = request.query;

		try {
			const data = await this.listCarUseCase.execute({
				brand,
				model,
				version,
				year,
				mileage,
				shiftType,
				sellPrice,
				startRangeYear,
				endRangeYear,
				startRangePrice,
				endRangePrice
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