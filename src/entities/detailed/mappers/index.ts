import morphism, { Schema } from "morphism";
import { IDetailedResponseDto } from "../dto";
import { IPaginationParams, IReceptions } from "../interafces";

export const detailedMapper = async (
  source: IDetailedResponseDto
): Promise<IReceptions> => {
  type IDetailedSchema = Schema<IReceptions, IDetailedResponseDto>;

  const schema = {
    reception: "reception",
    doctor: "doctor",
    research: "research",
  };

  // @ts-ignore
  return await new Promise((res) =>
    // @ts-ignore
    res(morphism<IDetailedSchema>(schema, source).items)
  );
};
