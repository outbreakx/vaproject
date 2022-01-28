import { PostGresExamRepository } from "@repositories/implementations/Postgres/PostGresDbExamRepository";

import { UpdateExamController } from "./UpdateExamController";
import { UpdateExamUseCase } from "./UpdateExamUseCase";


const postGresExamRepository = new PostGresExamRepository();

const updateExamUseCase = new UpdateExamUseCase(postGresExamRepository);
const updateExamController = new UpdateExamController(updateExamUseCase);

export { updateExamUseCase, updateExamController };