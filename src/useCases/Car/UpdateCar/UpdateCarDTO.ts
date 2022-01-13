export interface UpdateCarRequestDTO {
	id: string;
	brand?: string;
	model?: string;
	version?: number;
	year?: number;
	mileage?: number;
	shiftType?: string;
	sellPrice?: number;
}