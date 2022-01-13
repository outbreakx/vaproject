import { MongoDbCarRepository } from "@repositories/implementations/MongoDb/MongoDbCarRepository";

import { DeleteCarController } from "./DeleteCarController";
import { DeleteCarUseCase } from "./DeleteCarUseCase";


const mongoDbCarRepository = new MongoDbCarRepository();

const deleteCarUseCase = new DeleteCarUseCase(mongoDbCarRepository);
const deleteCarController = new DeleteCarController(deleteCarUseCase);

export { deleteCarUseCase, deleteCarController };
