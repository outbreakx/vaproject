import { MongoDbCarRepository } from "@repositories/implementations/MongoDb/MongoDbCarRepository";

import { ListCarController } from "./ListCarController";
import { ListCarUseCase } from "./ListCarUseCase";


const mongoDbCarRepository = new MongoDbCarRepository();

const listCarUseCase = new ListCarUseCase(mongoDbCarRepository);
const listCarController = new ListCarController(listCarUseCase);

export { listCarUseCase, listCarController };
