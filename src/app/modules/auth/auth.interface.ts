export type TLoginUser = {
  email: string;
  password: string;
};

// Added new
export type TChangePassword = {
  oldPassword: string;
  newPassword: string;
};

export type TRefreshToken = {
  refreshToken: string;
};
