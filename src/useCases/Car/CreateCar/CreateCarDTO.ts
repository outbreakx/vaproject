export interface CreateCarRequestDTO {
	brand: string;
	model: string;
	version: number;
	year: number;
	mileage: number;
	shiftType: string;
	sellPrice: number;
}