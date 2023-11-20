import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectToDatabase } from "./src/db/connection.js";
import { config } from "dotenv";
import appRouter from "./src/routes/index.js";
config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
}));

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use("/recipe-app/api/v1/", appRouter);

connectToDatabase()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT} and is connected to database`);
        });
    }).catch((error) => {
        console.log(error);
    });
