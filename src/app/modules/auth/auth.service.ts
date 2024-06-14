import bcrypt from "bcrypt";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../config";
import AppError from "../../errors/AppError";
import { TLoginUser } from "./auth.interface";
import { createToken } from "./auth.utils";
import { User } from "../user/user.model";

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  // const user = await User.isUserExistsByCustomEmail(payload.email);

  // if (!user) {
  //   throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
  // }
  // checking if the user is already deleted

  // const isDeleted = user?.isDeleted;

  // if (isDeleted) {
  //   throw new AppError(httpStatus.FORBIDDEN, "This user is deleted !");
  // }

  //checking if the password is correct

  // if (!(await User.isPasswordMatched(payload?.password, user?.password)))
  //   throw new AppError(httpStatus.FORBIDDEN, "Password do not matched");

  //create token and sent to the  client

  // const jwtPayload = {
  //   userEmail: user.email,
  //   role: user.role,
  // };

  // const accessToken = createToken(
  //   jwtPayload,
  //   config.jwt_access_secret as string,
  //   config.jwt_access_expires_in as string
  // );

  // const refreshToken = createToken(
  //   jwtPayload,
  //   config.jwt_refresh_secret as string,
  //   config.jwt_refresh_expires_in as string
  // );

  // return {
  //   accessToken,
  //   refreshToken,
  // };
  return {};
};

// const changePassword = async (
//   userData: JwtPayload,
//   payload: { oldPassword: string; newPassword: string }
// ) => {
//   // checking if the user is exist
//   const user = await User.isUserExistsByCustomEmail(userData.);

//   if (!user) {
//     throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
//   }
//   // checking if the user is already deleted

//   const isDeleted = user?.isDeleted;

//   if (isDeleted) {
//     throw new AppError(httpStatus.FORBIDDEN, "This user is deleted !");
//   }

//   //checking if the password is correct

//   if (!(await User.isPasswordMatched(payload.oldPassword, user?.password)))
//     throw new AppError(httpStatus.FORBIDDEN, "Password do not matched");

//   //hash new password
//   const newHashedPassword = await bcrypt.hash(
//     payload.newPassword,
//     Number(config.bcrypt_salt_rounds)
//   );

//   await User.findOneAndUpdate(
//     {
//       id: userData.userId,
//       role: userData.role,
//     },
//     {
//       password: newHashedPassword,
//       needsPasswordChange: false,
//       passwordChangedAt: new Date(),
//     }
//   );

//   return null;
// };

// const refreshToken = async (token: string) => {
//   // checking if the given token is valid
//   const decoded = jwt.verify(
//     token,
//     config.jwt_refresh_secret as string
//   ) as JwtPayload;

//   const { userId, iat } = decoded;

//   // checking if the user is exist
//   const user = await User.isUserExistsByCustomId(userId);

//   if (!user) {
//     throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
//   }
//   // checking if the user is already deleted
//   const isDeleted = user?.isDeleted;

//   if (isDeleted) {
//     throw new AppError(httpStatus.FORBIDDEN, "This user is deleted !");
//   }

//   const jwtPayload = {
//     userId: "123",
//     role: user.role,
//   };

//   const accessToken = createToken(
//     jwtPayload,
//     config.jwt_access_secret as string,
//     config.jwt_access_expires_in as string
//   );

//   return {
//     accessToken,
//   };
// };

export const AuthServices = {
  loginUser,
  // changePassword,
  // refreshToken,
};
