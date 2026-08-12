export interface IUser {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface RegisterUserBody {
  name: string;
  email: string;
  password: string;
}

export interface LoginUserBody {
  email: string;
  password: string;
}
