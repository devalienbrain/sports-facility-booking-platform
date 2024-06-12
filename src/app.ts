import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send(
    "Hello From Dev Alien Brain's Sports Facility Booking Platform World!"
  );
});

export default app;
