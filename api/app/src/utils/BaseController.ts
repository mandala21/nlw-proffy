import { Request, Response } from "express";
import { ITransformer } from "../transformers/ITransformer";

export abstract class BaseController {
    notFound(response: Response, message: string = 'Entite dont find'): Response {
        return response
                .status(404)
                .json({message})
    }

    async collection<T>(response: Response, data: Array<T>, transformer: ITransformer<T>): Promise<Response> {
        let results: object[] = []
        for (let i = 0; i < data.length; i++) {
            const result = await transformer.transform(data[i]);
            results.push(result)
        }
        return response.json({data: results})
    }
}