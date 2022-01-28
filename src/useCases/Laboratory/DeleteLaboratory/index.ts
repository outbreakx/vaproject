import { PostGresLaboratoryRepository } from "@repositories/implementations/Postgres/PostGresDbLaboratoryRepository";

import { DeleteLaboratoryController } from "./DeleteLaboratoryController";
import { DeleteLaboratoryUseCase } from "./DeleteLaboratoryUseCase";


const postGresLaboratoryRepository = new PostGresLaboratoryRepository();

const deleteLaboratoryUseCase = new DeleteLaboratoryUseCase(postGresLaboratoryRepository);
const deleteLaboratoryController = new DeleteLaboratoryController(deleteLaboratoryUseCase);

export { deleteLaboratoryUseCase, deleteLaboratoryController };
