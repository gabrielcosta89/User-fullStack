import "express-async-errors";
import express, { Application } from "express";
import cors from "cors"; 
import { errorHandler } from "./errors";
import { clientsRoutes } from "./routes/clients.routes";
import { loginRoutes } from "./routes/login.routes";
import { contactsRoutes } from "./routes/contacts.routes";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use("/api/clients", clientsRoutes);
app.use("/api/login-clients", loginRoutes);
app.use("/api/contacts", contactsRoutes);



app.use(errorHandler);
export default app;
