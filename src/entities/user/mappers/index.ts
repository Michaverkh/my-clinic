import morphism, { Schema } from "morphism";
import { IUserResponseDto } from "../dto";
import { IUser } from "../interfaces";

export const userMapper = async (source: IUserResponseDto): Promise<IUser> => {
  type IUserSchema = Schema<IUser, IUserResponseDto>;

  const schema = {
    id: "id",
    name: "name",
    username: "username",
    email: "email",
    phone: "phone",
    website: "website",
    address: "address",
    company: "company",
  };

  // @ts-ignore
  return await new Promise((res) =>
    // @ts-ignore
    res(morphism<IUserSchema>(schema, source))
  );
};
