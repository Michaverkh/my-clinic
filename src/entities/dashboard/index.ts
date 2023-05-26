import { flow, types } from "mobx-state-tree";
import { EEndpoints } from "shared/api/enums";
import { apiModule } from "index";
import { IDashboardRequestDto, IDashboardResponseItemsDto } from "./dto";
import { dashboardDataMapper } from "./mappers";
import {
  dashboardRequestSchema,
  dashboardResponseItemsSchema,
} from "./validators";

const DashboardItem = types.model("DashboardItem", {
  id: types.optional(types.string, ""),
  name: types.optional(types.string, ""),
  standart: types.optional(types.number, 0),
  poorQuality: types.optional(types.number, 0),
  suboptimal: types.optional(types.number, 0),
  unverifiable: types.optional(types.number, 0),
  date: types.optional(types.string, ""),
});

const DashboardItemsStore = types
  .model("DashboardItems", {
    loading: types.boolean,
    items: types.array(DashboardItem),
  })
  .actions((self) => ({
    getList: flow(function* () {
      self.loading = true;
      try {
        const res = yield apiModule.getData<
          IDashboardRequestDto,
          IDashboardResponseItemsDto
        >(
          `${EEndpoints.GET_DASHBOARD_LIST}`,
          {},
          {
            requestValidationSchema: dashboardRequestSchema,
            responseValidationSchema: dashboardResponseItemsSchema,
          }
        );
        self.items = yield dashboardDataMapper(res);
      } finally {
        self.loading = false;
      }
    }),
  }));

export { DashboardItemsStore };
