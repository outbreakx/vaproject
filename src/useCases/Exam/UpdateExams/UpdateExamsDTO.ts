export interface UpdateExamsRequestDTO {
	id?: string;
	name?: string;
	type?: string;
	status?: boolean;
	laboratories?: any[];
}