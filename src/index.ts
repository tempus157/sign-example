import express from "express";
import { useRoutes } from "./routes";
import { useMongoose } from "./libs/mongoose";

const app = express();
app.listen(3000, () => console.log("Server is listening"));

useRoutes(app);
useMongoose();
