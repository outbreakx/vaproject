import { PostGresLaboratoryRepository } from "@repositories/implementations/Postgres/PostGresDbLaboratoryRepository";

import { CreateLaboratoryController } from "./CreateLaboratoryController";
import { CreateLaboratoryUseCase } from "./CreateLaboratoryUseCase";


const postGresLaboratoryRepository = new PostGresLaboratoryRepository();

const createLaboratoryUseCase = new CreateLaboratoryUseCase(postGresLaboratoryRepository);
const createLaboratoryController = new CreateLaboratoryController(createLaboratoryUseCase);

export { createLaboratoryUseCase, createLaboratoryController };
