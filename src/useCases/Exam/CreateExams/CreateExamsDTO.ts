export interface CreateExamsRequestDTO {
	name: string;
	type: string;
	status?: boolean;
	laboratories: any[];
}