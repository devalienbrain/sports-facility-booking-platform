import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async (userData: TUser) => {
  // create a user
  const newUser = await UserModel.create(userData);
  return newUser;
};

export const UserServices = {
  createUserIntoDB,
};
