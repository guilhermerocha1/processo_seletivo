import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import createToken from "../helpers/token";
import UserService from "../services/user.service";


const UserContronller = {
  
  create: async (req: Request, res: Response) => {
    try {
      UserService.create(req.body);
      const token = createToken(req.body);
      res.status(StatusCodes.CREATED).json({ token });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}

export default UserContronller;
