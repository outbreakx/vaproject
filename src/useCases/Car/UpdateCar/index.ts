import { MongoDbCarRepository } from "@repositories/implementations/MongoDb/MongoDbCarRepository";

import { UpdateCarController } from "./UpdateCarController";
import { UpdateCarUseCase } from "./UpdateCarUseCase";


const mongoDbCarRepository = new MongoDbCarRepository();

const updateCarUseCase = new UpdateCarUseCase(mongoDbCarRepository);
const updateCarController = new UpdateCarController(updateCarUseCase);

export { updateCarUseCase, updateCarController };