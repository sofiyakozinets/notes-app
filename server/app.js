import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import { serverPort } from "./config";

const notesRouter = require("./controllers/notes");

const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(express.json());

app.use("/notes", notesRouter);

app.listen(serverPort, () => {
	console.log(`Server is up and running on port ${serverPort}`);
});
