import { PostGresLaboratoryRepository } from "@repositories/implementations/Postgres/PostGresDbLaboratoryRepository";

import { CreateLaboratoriesController } from "./CreateLaboratoriesController";
import { CreateLaboratoriesUseCase } from "./CreateLaboratoriesUseCase";


const postGresLaboratoryRepository = new PostGresLaboratoryRepository();

const createLaboratoriesUseCase = new CreateLaboratoriesUseCase(postGresLaboratoryRepository);
const createLaboratoriesController = new CreateLaboratoriesController(createLaboratoriesUseCase);

export { createLaboratoriesUseCase, createLaboratoriesController };
