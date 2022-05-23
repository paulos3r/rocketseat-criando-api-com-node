import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationUseCase } from "../modules/cars/useCases/createSpecification/CreateSpecificationUseCase";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response)=>{
    const {name, description } = request.body;
    const createSpecificationService = new CreateSpecificationUseCase(specificationsRepository);

    createSpecificationService.execute({name, description});

    return response.status(201).send();
})

export { specificationsRoutes }