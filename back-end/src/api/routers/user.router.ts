import { Router } from "express";
import UserContronller from "../controllers/user.controller";
import userMiddleware from "../middlewares/user.middleware";

const router = Router();

router.post('/register', userMiddleware, UserContronller.create);
router.post('/login', userMiddleware, UserContronller.login);

export default router;
