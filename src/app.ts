import express, { Application, Request, Response } from "express";

import cors from "cors";
import { StudentRoutes } from "./app/modules/student/student.route";
const app: Application = express();
// const port = 3000

// Parser start
app.use(express.json());
app.use(cors());

// Application Routes
app.use("/api/v1/students", StudentRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get("/", getAController);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// console.log(process.cwd());

export default app;