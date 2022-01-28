import { PostGresExamRepository } from "@repositories/implementations/Postgres/PostGresDbExamRepository";

import { ListExamController } from "./ListExamController";
import { ListExamUseCase } from "./ListExamUseCase";


const postGresExamRepository = new PostGresExamRepository();

const listExamUseCase = new ListExamUseCase(postGresExamRepository);
const listExamController = new ListExamController(listExamUseCase);

export { listExamUseCase, listExamController };
