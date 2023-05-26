import morphism, { Schema } from "morphism";
import { IDashboardResponseDto, IDashboardResponseItemsDto } from "../dto";
import { IDashBoardData, IDashBoardDataItems } from "../interafces";

const dashboardItemsDataMapper = (
  source: IDashboardResponseDto[]
): IDashBoardData[] => {
  type IDashboardSchema = Schema<IDashBoardData, IDashboardResponseDto>;

  const schema: IDashboardSchema = {
    id: "id",
    name: "name",
    standart: "standart",
    poorQuality: "poorQuality",
    suboptimal: "suboptimal",
    unverifiable: "unverifiable",
    date: "date",
  };

  return morphism<IDashboardSchema>(schema, source);
};

export const dashboardDataMapper = async (
  source: IDashboardResponseItemsDto
): Promise<IDashBoardData[]> => {
  type IDashboardSchema = Schema<
    IDashBoardDataItems,
    IDashboardResponseItemsDto
  >;

  const schema: IDashboardSchema = {
    items: (value) => dashboardItemsDataMapper(value.items),
  };

  return await new Promise((res) =>
    res(morphism<IDashboardSchema>(schema, source).items)
  );
};
