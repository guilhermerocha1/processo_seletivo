import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from "../services/user.service";


const UserContronller = {
  
  create: async (req: Request, res: Response) => {
    try {
      UserService.create(req.body);
      res.status(StatusCodes.CREATED).json({ message: 'Created!!' });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}

export default UserContronller;
