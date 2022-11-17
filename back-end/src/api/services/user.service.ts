import Users from "../../database/models/Users";
import { hash, compare } from "../helpers/bcrypt";
// import User from "../interfaces/user.interface";

const UserService = {
  
  create: async (user: any) => {
    const { username, password } = user;

    const isValidUser = await Users.findOne({ where: { username } });
    if (isValidUser?.dataValues.username === username) {
      return null;
    }

    const bcrypt = hash(password);
    await Users.create({ username, password: bcrypt });
  },

  login: async (user: any) => {
    const { username, password } = user;
    const isValidUser = await Users.findOne({ where: { username } });
    
    if (isValidUser?.dataValues.username === undefined) {
      return null;
    }
    const bcryptComare = compare(password, isValidUser?.dataValues.password);
    if (bcryptComare === false) {
      return null;
    }

    return {};
  }
}

export default UserService;

// test
// 12345678