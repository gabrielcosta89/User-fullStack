import { Request, Response, NextFunction } from "express";
import { AppError } from '../errors';
import jwt from 'jsonwebtoken';

// Middleware to ensure that a JWT token is valid and extract user information from it
const ensureTokenIsValidMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Get the JWT token from the request's Authorization header
    let token = req.headers.authorization;

    if (!token) {
        throw new AppError('Missing bearer token', 401);
    }

    // Extract the token from the "Bearer" prefix
    token = token.split(' ')[1];

    // Verify the token using the SECRET_KEY from the environment
    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {

        if (error) {
            // If there's an error during token verification, throw an AppError with the error message and a status code of 401 (Unauthorized)
            throw new AppError(error.message, 401);
        }

        // If the token is successfully verified, store the decoded user information in the res.locals.user object
        res.locals.user = {
            email: decoded.email,
            id: Number(decoded.sub)
        };

        next();
    });
};

export default ensureTokenIsValidMiddleware;
