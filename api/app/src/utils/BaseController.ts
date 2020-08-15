import { Request, Response } from "express";

export abstract class BaseController {
    notFound(response: Response, message: string = 'Entite dont find'): Response {
        return response
                .status(404)
                .json({message})
    }
}