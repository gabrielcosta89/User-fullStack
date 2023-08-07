import { Repository } from "typeorm";
import { TClientRequest, TClientResponse } from "../../interfaces/clients.intefaces";
import { Client } from "../../entities.ts";
import { AppDataSource } from "../../data-source";
import { clientSchemaResponse } from "../../schemas/clients.schema";

const createClientService = async (clienteData: TClientRequest): Promise<TClientResponse> => {
    const clienteRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const cliente: Client = clienteRepository.create(clienteData)

    await clienteRepository.save(cliente)

    const clienteCreate = clientSchemaResponse.parse(cliente)

    return clienteCreate
}

export default createClientService