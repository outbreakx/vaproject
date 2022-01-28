import { PostGresLaboratoryRepository } from "@repositories/implementations/Postgres/PostGresDbLaboratoryRepository";

import { ListLaboratoryController } from "./ListLaboratoryController";
import { ListLaboratoryUseCase } from "./ListLaboratoryUseCase";


const postGresLaboratoryRepository = new PostGresLaboratoryRepository();

const listLaboratoryUseCase = new ListLaboratoryUseCase(postGresLaboratoryRepository);
const listLaboratoryController = new ListLaboratoryController(listLaboratoryUseCase);

export { listLaboratoryUseCase, listLaboratoryController };
