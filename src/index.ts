import express from "express";
import { useMongoose } from "./libs/mongoose";
import { router } from "./routes";

const app = express();

app.listen(3000, () => console.log("Server is listening"));
app.use(express.json());
app.use("/api", router);

useMongoose();
