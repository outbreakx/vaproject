import { PostGresLaboratoryRepository } from "@repositories/implementations/Postgres/PostGresDbLaboratoryRepository";

import { GetLaboratoryController } from "./GetLaboratoryController";
import { GetLaboratoryUseCase } from "./GetLaboratoryUseCase";


const postGresLaboratoryRepository = new PostGresLaboratoryRepository();

const getLaboratoryUseCase = new GetLaboratoryUseCase(postGresLaboratoryRepository);
const getLaboratoryController = new GetLaboratoryController(getLaboratoryUseCase);

export { getLaboratoryUseCase, getLaboratoryController };
