import { PostGresLaboratoryRepository } from "@repositories/implementations/Postgres/PostGresDbLaboratoryRepository";

import { CreateLaboratoriesController } from "./CreateLaboratoriesController";
import { CreateLaboratoriesUseCase } from "./CreateLaboratoriesUseCase";


const mongoDbLaboratoryRepository = new PostGresLaboratoryRepository();

const createLaboratoriesUseCase = new CreateLaboratoriesUseCase(mongoDbLaboratoryRepository);
const createLaboratoriesController = new CreateLaboratoriesController(createLaboratoriesUseCase);

export { createLaboratoriesUseCase, createLaboratoriesController };
