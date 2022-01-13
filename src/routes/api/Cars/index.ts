import { createCarController } from "@useCases/Car/CreateCar";
import { getCarController } from "@useCases/Car/GetCar";
import { listCarController } from "@useCases/Car/ListCar";
import { updateCarController } from "@useCases/Car/UpdateCar";
import { deleteCarController } from "@useCases/Car/DeleteCar";

export default [
	{
		name: '/',
		type: 'post',
		handle: (request, response) => {
			return createCarController.handle(request, response)
		}
	},
	{
		name: '/:id',
		type: 'get',
		handle: (request, response) => {
			return getCarController.handle(request, response)
		}
	},
	{
		name: '/',
		type: 'get',
		handle: (request, response) => {
			return listCarController.handle(request, response)
		}
	},
	{
		name: '/:id',
		type: 'put',
		handle: (request, response) => {
			return updateCarController.handle(request, response)
		}
	},
	{
		name: '/:id',
		type: 'delete',
		handle: (request, response) => {
			return deleteCarController.handle(request, response)
		}
	},
];