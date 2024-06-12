export type TRole = "user" | "admin";

export interface TUser {
  name: string;
  email: string;
  password: string;
  role: TRole;
  address: string;
}
