import { MongoDbCarRepository } from "@repositories/implementations/MongoDb/MongoDbCarRepository";

import { CreateCarController } from "./CreateCarController";
import { CreateCarUseCase } from "./CreateCarUseCase";


const mongoDbCarRepository = new MongoDbCarRepository();

const createCarUseCase = new CreateCarUseCase(mongoDbCarRepository);
const createCarController = new CreateCarController(createCarUseCase);

export { createCarUseCase, createCarController };
