import express from "express";
import userRouter from "./user/user.routes.js";
const app = express();
const baseUrl = '/api/v1'
app.use(`${baseUrl}/users`,userRouter);

export default app;
