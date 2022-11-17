import { Router } from "express";
import UserContronller from "../controllers/user.controller";

const router = Router();

router.post('/register', UserContronller.create);

export default router;
