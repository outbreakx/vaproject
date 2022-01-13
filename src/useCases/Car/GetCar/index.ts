import { MongoDbCarRepository } from "@repositories/implementations/MongoDb/MongoDbCarRepository";

import { GetCarController } from "./GetCarController";
import { GetCarUseCase } from "./GetCarUseCase";


const mongoDbCarRepository = new MongoDbCarRepository();

const getCarUseCase = new GetCarUseCase(mongoDbCarRepository);
const getCarController = new GetCarController(getCarUseCase);

export { getCarUseCase, getCarController };
