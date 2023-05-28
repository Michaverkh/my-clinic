import { types } from "mobx-state-tree";
import { PostsStore } from "./posts";
import { UserStore } from "./user";
import { ReceptionsStore } from "./receptions";
import { DashboardItemsStore } from "./dashboard";
import { DataSetStore } from "./dataSet";
import { DetailedStore } from "./detailed";

const RootStore = types.model("RootStore", {
  posts: types.optional(PostsStore, { loading: false }),
  user: types.optional(UserStore, {
    loading: false,
  }),

  receptions: types.optional(ReceptionsStore, {
    loading: false,
    sortDirection: "ask",
  }),

  dashboardItems: types.optional(DashboardItemsStore, { loading: false }),
  detailed: types.optional(DetailedStore, { loading: false }),
  dataSet: types.optional(DataSetStore, {
    loading: false,
    isSuccess: true,
  }),
});

export default RootStore;
