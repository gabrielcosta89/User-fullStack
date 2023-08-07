import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Contact } from "../entities.ts";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

// Middleware to verify if a contact with the given email already exists
const verifyEmailContactExistMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

    const email: string = req.body.email;


    if (email === undefined) {
        // If the email is undefined, continue to the next middleware or route handler
        next();
    } else {
        // If the email is provided in the request body, check if a contact with the same email already exists
        const findContact = await contactRepository.find({
            where: {
                email: email
            }
        });

        if (findContact.length > 0) {
            throw new AppError('Email already exists', 409);
        }

        next();
    }
};

export default verifyEmailContactExistMiddleware;
