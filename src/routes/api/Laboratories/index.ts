import { createLaboratoryController } from "@useCases/Laboratory/CreateLaboratory";
import { deleteLaboratoryController } from "@useCases/Laboratory/DeleteLaboratory";
import { getLaboratoryController } from "@useCases/Laboratory/GetLaboratory";
import { listLaboratoryController } from "@useCases/Laboratory/ListLaboratory";
import { updateLaboratoriesController } from "@useCases/Laboratory/UpdateLaboratories";
import { updateLaboratoryController } from "@useCases/Laboratory/UpdateLaboratory";


export default [
	{
		name: '/',
		type: 'post',
		handle: (request, response) => {
			return createLaboratoryController.handle(request, response)
		}
	},
	{
		name: '/:id',
		type: 'get',
		handle: (request, response) => {
			return getLaboratoryController.handle(request, response)
		}
	},
	{
		name: '/',
		type: 'get',
		handle: (request, response) => {
			return listLaboratoryController.handle(request, response)
		}
	},
	{
		name: '/:id',
		type: 'put',
		handle: (request, response) => {
			return updateLaboratoryController.handle(request, response)
		}
	},
	{
		name: '/:id',
		type: 'delete',
		handle: (request, response) => {
			return deleteLaboratoryController.handle(request, response)
		}
	},
];