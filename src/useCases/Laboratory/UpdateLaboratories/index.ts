import { PostGresLaboratoryRepository } from "@repositories/implementations/Postgres/PostGresDbLaboratoryRepository";
import { PostGresExamRepository } from "@repositories/implementations/Postgres/PostGresDbExamRepository";

import { UpdateLaboratoriesController } from "./UpdateLaboratoriesController";
import { UpdateLaboratoriesUseCase } from "./UpdateLaboratoriesUseCase";


const postGresLaboratoryRepository = new PostGresLaboratoryRepository();
const postGresDbExamRepository = new PostGresExamRepository();

const updateLaboratoriesUseCase = new UpdateLaboratoriesUseCase(postGresLaboratoryRepository, postGresDbExamRepository);
const updateLaboratoriesController = new UpdateLaboratoriesController(updateLaboratoriesUseCase);

export { updateLaboratoriesUseCase, updateLaboratoriesController };