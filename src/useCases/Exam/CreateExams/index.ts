import { PostGresExamRepository } from "@repositories/implementations/Postgres/PostGresDbExamRepository";
import { PostGresLaboratoryRepository } from "@repositories/implementations/Postgres/PostGresDbLaboratoryRepository";

import { CreateExamsController } from "./CreateExamsController";
import { CreateExamsUseCase } from "./CreateExamsUseCase";


const mongoDbExamRepository = new PostGresExamRepository();
const mongoDbLaboratoryRepository = new PostGresLaboratoryRepository();

const createExamsUseCase = new CreateExamsUseCase(mongoDbExamRepository, mongoDbLaboratoryRepository);
const createExamsController = new CreateExamsController(createExamsUseCase);

export { createExamsUseCase, createExamsController };
