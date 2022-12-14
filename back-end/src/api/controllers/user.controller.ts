import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import createToken from "../helpers/token";
import UserService from "../services/user.service";

const UserContronller = {
  
  create: async (req: Request, res: Response) => {
    try {
      const user = await UserService.create(req.body);

      if(user === null) return res.status(StatusCodes.UNAUTHORIZED)
        .json({ message: '"username" invalid or exist' });

      const token = createToken(req.body);
      res.status(StatusCodes.CREATED).json({ token });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const user = await UserService.login(req.body);

      if(!user) return res.status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Incorrect username or password' });

      const token = createToken(req.body);
      res.status(StatusCodes.ACCEPTED).json({ token });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}

export default UserContronller;
