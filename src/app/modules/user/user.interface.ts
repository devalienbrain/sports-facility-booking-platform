import { Model } from "mongoose";

export type TRole = "user" | "admin";

export interface TUser {
  name: string;
  email: string;
  password: string;
  role: TRole;
  address: string;
  isDeleted: boolean;
}
export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByCustomEmail(email: string): Promise<TUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
  ): boolean;
}
