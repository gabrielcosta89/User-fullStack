import { z } from "zod";

const contactSchema = z.object({
    id: z.number(),
    nomeCompleto: z.string().max(200),
    email: z.string().email().max(45),
    telefone: z.string().max(10),
    createdAt: z.date()
})

const contactSchemaRequest = contactSchema.omit({
    id: true,
    createdAt: true,
})

const contactSchemaResponse = contactSchema

const contactSchemaUpdate = contactSchema.partial()

export {
    contactSchema,
    contactSchemaRequest,
    contactSchemaResponse,
    contactSchemaUpdate
}