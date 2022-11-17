import Users from "../../database/models/Users";
import hash from "../../helpers/bcrypt";
// import User from "../interfaces/user.interface";

const UserService = {
  
  create: async (user: any) => {
    const { username, password } = user;

    const bcrypt = hash(password);
    await Users.create({ username, password: bcrypt });
  }
}

export default UserService;
