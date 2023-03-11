import { Router } from "../deps.ts";
import {
  createUser,
  findUserAll,
  findUserById,
} from "../controller/user.controller.ts";

export const userRouter = new Router()
  .get("/users", findUserAll)
  .get("/users/:id", findUserById)
  .post("/users", createUser);
