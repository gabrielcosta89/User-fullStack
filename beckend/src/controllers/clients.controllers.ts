import { Request, Response } from "express";
import { TClientPatch, TClientRequest, TClientResponse } from "../interfaces/clients.intefaces";
import { createClientService, deleteClientService, listClientService, patchClientService } from "../services/clients";

// Controller for creating a new client
export const createClientsController = async (req: Request, res: Response): Promise<Response> => {
    console.log('hey')
    const clientData: TClientRequest = req.body;

    // Call the service function to create the client and receive the response
    const client: TClientResponse = await createClientService(clientData);

    // Return a JSON response with the created client data and status code 201 (Created)
    return res.status(201).json(client);
};

// Controller for listing a specific client
export const listClientController = async (req: Request, res: Response): Promise<Response> => {
    const clientId: number = parseInt(res.locals.user.id);

    // Call the service function to get the client details and receive the response
    const client: TClientResponse = await listClientService(clientId);

    // Return a JSON response with the client data and status code 200 (OK)
    return res.status(200).json(client);
};

// Controller for updating a specific client
export const patchClientController = async (req: Request, res: Response): Promise<Response> => {
 
    const clientId: number = parseInt(res.locals.user.id);
    const clientDataPatch: TClientPatch = req.body;

    // Call the service function to update the client and receive the updated client data
    const client: TClientResponse = await patchClientService(clientId, clientDataPatch);

    // Return a JSON response with the updated client data and status code 200 (OK)
    return res.status(200).json(client);
};

// Controller for deleting a specific client
export const deleteClientController = async (req: Request, res: Response): Promise<Response> => {
    const clientId: number = parseInt(res.locals.user.id);

    // Call the service function to delete the client
    await deleteClientService(clientId);

    return res.status(204).send();
};