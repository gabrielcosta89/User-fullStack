import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Client } from "../entities.ts";
import { AppError } from "../errors";

// Middleware to verify if a client with the given email already exists
const verifyEmailClientExistMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const ClientsRepository: Repository<Client> = AppDataSource.getRepository(Client);

    const email: string = req.body.email;

    // Check if the email is undefined (e.g., when updating a client without changing the email)
    if (email === undefined) {
        // If the email is undefined, continue to the next middleware or route handler
        next();
    } else {
        // If the email is provided in the request body, check if a client with the same email already exists
        const findClient = await ClientsRepository.find({
            where: {
                email: email
            }
        });

        // If a client with the same email is found, throw an AppError with a message indicating the conflict (email already exists)
        if (findClient.length > 0) {
            throw new AppError('Email already exists', 409);
        }

        next();
    }
};

export default verifyEmailClientExistMiddleware;
