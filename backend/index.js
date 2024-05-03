import express from "express";
import cors from "cors";
import { connectToDatabase } from "./src/db/connection.js";
import { config } from "dotenv";
import appRouter from "./src/routes/index.js";
config();


const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use(cors({
    origin: ["https://recipe-app-frontend-six.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true
}));

app.use("/recipe-app/api/v1/", appRouter);

connectToDatabase()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on port ${PORT} and is connected to database`);
        });
    }).catch((error) => {
        console.log(error);
    });
