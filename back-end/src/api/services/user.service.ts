import Users from "../../database/models/Users";
import User from "../interfaces/user.interface";

const UserService = {
  
  create: async (user: any) => {
    Users.create(user);
  }
}

export default UserService;
