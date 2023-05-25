import morphism, { Schema } from "morphism";
import { IReceptionsResponseDto } from "../dto";
import { IPaginationParams, IReceptions } from "../interafces";

export const receptionsItemsMapper = async (
  source: IReceptionsResponseDto
): Promise<IReceptions> => {
  type IReceptionsSchema = Schema<IReceptions, IReceptionsResponseDto>;

  const schema = {
    items: "items",
  };

  // @ts-ignore
  return await new Promise((res) =>
    // @ts-ignore
    res(morphism<IReceptionsSchema>(schema, source).items)
  );
};

export const paginationMapper = async (
  source: IReceptionsResponseDto
): Promise<IPaginationParams> => {
  type IPaginationSchema = Schema<IPaginationParams, IReceptionsResponseDto>;

  const schema = {
    limit: "limit",
    offset: "offset",
    totalSize: "totalSize",
  };

  // @ts-ignore
  return await new Promise((res) =>
    // @ts-ignore
    res(morphism<IPaginationSchema>(schema, source))
  );
};
