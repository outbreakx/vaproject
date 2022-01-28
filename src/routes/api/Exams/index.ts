import { createExamController } from "@useCases/Exam/CreateExam";
import { createExamsController } from "@useCases/Exam/CreateExams";
import { deleteExamController } from "@useCases/Exam/DeleteExam";
import { deleteExamsController } from "@useCases/Exam/DeleteExams";
import { getExamController } from "@useCases/Exam/GetExam";
import { listExamController } from "@useCases/Exam/ListExam";
import { updateExamController } from "@useCases/Exam/UpdateExam";
import { updateExamsController } from "@useCases/Exam/UpdateExams";


export default [
	{
		name: '/',
		type: 'post',
		handle: (request, response) => {
			return createExamController.handle(request, response)
		}
	},
	{
		name: '/:id',
		type: 'get',
		handle: (request, response) => {
			return getExamController.handle(request, response)
		}
	},
	{
		name: '/',
		type: 'get',
		handle: (request, response) => {
			return listExamController.handle(request, response)
		}
	},
	{
		name: '/:id',
		type: 'put',
		handle: (request, response) => {
			return updateExamController.handle(request, response)
		}
	},
	{
		name: '/:id',
		type: 'delete',
		handle: (request, response) => {
			return deleteExamController.handle(request, response)
		}
	},
	{
		name: '/bulk/add',
		type: 'post',
		handle: (request, response) => {
			return createExamsController.handle(request, response)
		}
	},
	{
		name: '/bulk/add',
		type: 'put',
		handle: (request, response) => {
			return updateExamsController.handle(request, response)
		}
	},
	{
		name: '/bulk/delete',
		type: 'post',
		handle: (request, response) => {
			return deleteExamsController.handle(request, response)
		}
	},
];