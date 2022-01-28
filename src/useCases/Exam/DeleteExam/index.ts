import { PostGresExamRepository } from "@repositories/implementations/Postgres/PostGresDbExamRepository";

import { DeleteExamController } from "./DeleteExamController";
import { DeleteExamUseCase } from "./DeleteExamUseCase";


const postGresExamRepository = new PostGresExamRepository();

const deleteExamUseCase = new DeleteExamUseCase(postGresExamRepository);
const deleteExamController = new DeleteExamController(deleteExamUseCase);

export { deleteExamUseCase, deleteExamController };
