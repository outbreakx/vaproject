import { PostGresExamRepository } from "@repositories/implementations/Postgres/PostGresDbExamRepository";
import { PostGresLaboratoryRepository } from "@repositories/implementations/Postgres/PostGresDbLaboratoryRepository";

import { CreateExamsController } from "./CreateExamsController";
import { CreateExamsUseCase } from "./CreateExamsUseCase";


const postGresExamRepository = new PostGresExamRepository();
const postGresLaboratoryRepository = new PostGresLaboratoryRepository();

const createExamsUseCase = new CreateExamsUseCase(postGresExamRepository, postGresLaboratoryRepository);
const createExamsController = new CreateExamsController(createExamsUseCase);

export { createExamsUseCase, createExamsController };
