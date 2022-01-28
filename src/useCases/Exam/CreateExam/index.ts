import { PostGresExamRepository } from "@repositories/implementations/Postgres/PostGresDbExamRepository";

import { CreateExamController } from "./CreateExamController";
import { CreateExamUseCase } from "./CreateExamUseCase";


const postGresExamRepository = new PostGresExamRepository();

const createExamUseCase = new CreateExamUseCase(postGresExamRepository);
const createExamController = new CreateExamController(createExamUseCase);

export { createExamUseCase, createExamController };
