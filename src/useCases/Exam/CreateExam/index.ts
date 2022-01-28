import { PostGresExamRepository } from "@repositories/implementations/Postgres/PostGresDbExamRepository";

import { CreateExamController } from "./CreateExamController";
import { CreateExamUseCase } from "./CreateExamUseCase";


const mongoDbExamRepository = new PostGresExamRepository();

const createExamUseCase = new CreateExamUseCase(mongoDbExamRepository);
const createExamController = new CreateExamController(createExamUseCase);

export { createExamUseCase, createExamController };
