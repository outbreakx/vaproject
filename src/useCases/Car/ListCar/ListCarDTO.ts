export interface ListCarRequestDTO {
	brand?: string;
	model?: string;
	version?: number;
	year?: number;
	mileage?: number;
	shiftType?: string;
	sellPrice?: number;
	startRangeYear?: number;
	endRangeYear?: number;
	startRangePrice?: number;
	endRangePrice?: number;
}