import { PostGresExamRepository } from "@repositories/implementations/Postgres/PostGresDbExamRepository";

import { GetExamController } from "./GetExamController";
import { GetExamUseCase } from "./GetExamUseCase";


const postGresExamRepository = new PostGresExamRepository();

const getExamUseCase = new GetExamUseCase(postGresExamRepository);
const getExamController = new GetExamController(getExamUseCase);

export { getExamUseCase, getExamController };
