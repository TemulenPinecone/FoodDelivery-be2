import { UserModel } from "@/models/user.schema";
import { Jwt } from "jsonwebtoken";

export const loginService = async (email: string, password: string) => {
  if (email == "admin@gmail.com" && password == "admin") {
    const userInfo = {
      email: email,
      name: "John Doe",
    };
    const newToken = jwt.sign(userInfo, "my-super-duper-secret-key", {
      expireIn: "1h",
    });
  }
};

export const createUser = async (
  firstName: string,
  lastName: string,
  email: string,
  age: number
) => {
  const createUser = UserModel.create({ firstName, lastName, email, age });
  return createUser;
};
