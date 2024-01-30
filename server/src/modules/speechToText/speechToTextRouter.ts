import express, { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

export const speechToText: Router = (() => {
  const router = express.Router();

  router.get("/", (_req: Request, res: Response) => {});

  return router;
})();
