import cors from "cors";
import express, { Request, Response } from "express";
import { config } from "dotenv"
import { dbConnect } from "./lib/dbConnect";
import compilerRouter from "./routes/compilerRouter";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/compiler", compilerRouter);

config();

app.get("/", (req: Request, res: Response) => {
    return res.send("Runnin Ok bruh !!!");
});

dbConnect();
app.listen(4000, () => {
    console.log('running server 4000');
    console.log('http://localhost:4000');
})