import { PostGresLaboratoryRepository } from "@repositories/implementations/Postgres/PostGresDbLaboratoryRepository";

import { CreateLaboratoryController } from "./CreateLaboratoryController";
import { CreateLaboratoryUseCase } from "./CreateLaboratoryUseCase";


const mongoDbLaboratoryRepository = new PostGresLaboratoryRepository();

const createLaboratoryUseCase = new CreateLaboratoryUseCase(mongoDbLaboratoryRepository);
const createLaboratoryController = new CreateLaboratoryController(createLaboratoryUseCase);

export { createLaboratoryUseCase, createLaboratoryController };
