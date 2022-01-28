import { PostGresExamRepository } from "@repositories/implementations/Postgres/PostGresDbExamRepository";

import { DeleteExamsController } from "./DeleteExamsController";
import { DeleteExamsUseCase } from "./DeleteExamsUseCase";


const postGresExamRepository = new PostGresExamRepository();

const deleteExamsUseCase = new DeleteExamsUseCase(postGresExamRepository);
const deleteExamsController = new DeleteExamsController(deleteExamsUseCase);

export { deleteExamsUseCase, deleteExamsController };
