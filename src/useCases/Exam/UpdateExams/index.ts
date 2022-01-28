import { PostGresExamRepository } from "@repositories/implementations/Postgres/PostGresDbExamRepository";
import { PostGresLaboratoryRepository } from "@repositories/implementations/Postgres/PostGresDbLaboratoryRepository";
import { UpdateExamsController } from "./UpdateExamsController";
import { UpdateExamsUseCase } from "./UpdateExamsUseCase";


const postGresExamRepository = new PostGresExamRepository();
const postGresLaboratoryRepository = new PostGresLaboratoryRepository();

const updateExamsUseCase = new UpdateExamsUseCase(postGresExamRepository, postGresLaboratoryRepository);
const updateExamsController = new UpdateExamsController(updateExamsUseCase);

export { updateExamsUseCase, updateExamsController };