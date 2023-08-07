import { Request, Response } from "express";
import { TContactPatch, TContactRequest, TContactResponse } from "../interfaces/contacts.interfaces";
import { createContactService, listContactService, patchContactService } from "../services/contacts";
import deleteContactService from "../services/contacts/deleteContact.service";

// Controller for creating a new contact
export const createContactController = async (req: Request, res: Response): Promise<Response> => {
    const clientId: number = parseInt(res.locals.user.id);
    const contactData: TContactRequest = req.body;

    // Call the service function to create the contact and receive the response
    const contact: TContactResponse = await createContactService(clientId, contactData);

 
    return res.status(201).json(contact);
};

// Controller for listing a specific contact
export const listContactController = async (req: Request, res: Response): Promise<Response> => {
    const idContact: number = parseInt(req.params.id);
    const clientId: number = parseInt(res.locals.user.id);

    // Call the service function to get the contact details and receive the response
    const contact: TContactResponse = await listContactService(idContact, clientId);


    return res.status(200).json(contact);
};

// Controller for updating a specific contact
export const updateContactController = async (req: Request, res: Response): Promise<Response> => {
    const clientId: number = parseInt(res.locals.user.id);
    const idContact: number = parseInt(req.params.id);
    const dataPatch: TContactPatch = req.body;

    // Call the service function to update the contact and receive the updated contact data
    const contact: TContactResponse = await patchContactService(idContact, dataPatch, clientId);

    // Return a JSON response with the updated contact data and status code 200 (OK)
    return res.status(200).json(contact);
};

// Controller for deleting a specific contact
export const deleteContactController = async (req: Request, res: Response): Promise<Response> => {
    const clientId: number = parseInt(res.locals.user.id);
    const idContact: number = parseInt(req.params.id);

    // Call the service function to delete the contact
    await deleteContactService(idContact, clientId);

    // Return a response with status code 204 (No Content) to indicate successful deletion
    return res.status(204).send();
};
