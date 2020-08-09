import { RetriveUserController } from "./RetriveUserController";
import { UserRepository } from "../../repositories/implementations/UserRepository";

const userRepository = new UserRepository
const retriveUserController = new RetriveUserController(
    userRepository
)

export {
    retriveUserController
}