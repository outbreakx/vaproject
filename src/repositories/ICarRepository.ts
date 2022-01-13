import { Car } from "@entities/Car";

export interface ICarParams {
	id?: string;
	brand?: string;
	model?: string;
	version?: number;
	year?: number
	mileage?: number;
	shiftType?: string;
	sellPrice?: number;
}


export interface ICarRepository {
	save(car: Car): Promise<Car>;
	update(params: ICarParams): Promise<Car>;
	list(params?: ICarParams): Promise<Car[] | null>;
	get(params: ICarParams): Promise<Car | null>;
	delete(params: ICarParams): Promise<boolean>;
}