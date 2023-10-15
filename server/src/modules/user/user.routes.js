import { Router } from "express";
import * as userCtrl from "./user.crtl.js";

const userRouter = Router();
userRouter.get("/", userCtrl.getAllUsers);
userRouter.get("/getoneuser/:id", userCtrl.getOneUser);
userRouter.post("/createuser", userCtrl.addUser);
userRouter.put("/updateuser/:id", userCtrl.updateUser);
userRouter.delete("/deleteuser/:id", userCtrl.deleteUser);

export default userRouter;
