// const express = require("express");
import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  // const a = 10;
  // console.log(a);

  res.send(
    "Hello From Dev Alien Brain's Sports Facility Booking Platform World!"
  );
});

// console.log(process.cwd());

export default app;
