import { PostGresLaboratoryRepository } from "@repositories/implementations/Postgres/PostGresDbLaboratoryRepository";

import { UpdateLaboratoryController } from "./UpdateLaboratoryController";
import { UpdateLaboratoryUseCase } from "./UpdateLaboratoryUseCase";


const postGresLaboratoryRepository = new PostGresLaboratoryRepository();

const updateLaboratoryUseCase = new UpdateLaboratoryUseCase(postGresLaboratoryRepository);
const updateLaboratoryController = new UpdateLaboratoryController(updateLaboratoryUseCase);

export { updateLaboratoryUseCase, updateLaboratoryController };