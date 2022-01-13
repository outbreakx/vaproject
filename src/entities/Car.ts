import { v4 as uuid } from "uuid";

export class Car {
	public readonly id: string;
	public brand: string;
	public model: string;
	public version: number;
	public year: number;
	public mileage: number;
	public shiftType: string;
	public sellPrice: number;
	public createdAt?: Date;
	
	constructor(props: Omit<Car, "id">, id?: string) {
		Object.assign(this, props);

		if (!id) {
			this.id = uuid();
		}

		this.createdAt = new Date();
	}
}