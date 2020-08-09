import { CreateSubjectUseCase } from "./CreateSubjectUseCase";
import { SubjectRepository } from "../../repositories/implementations/SubjectRepository";
import { CreateSubjectController } from "./CreateSubjectController";
import { createUserUseCase } from "../CreateUser";

const subjectRepository = new SubjectRepository 
const createSubjectUseCase = new CreateSubjectUseCase(
    subjectRepository
)
const createSubjectController = new CreateSubjectController(
    createSubjectUseCase
)

export {
    createSubjectController,
    createUserUseCase
}