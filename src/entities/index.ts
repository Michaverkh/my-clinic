import { types } from "mobx-state-tree";
import { PostsStore } from "./posts";
import { UserStore } from "./user";
import { ReceptionsStore } from "./receptions";
import { DashboardItemsStore } from "./dashboard";

const RootStore = types.model("RootStore", {
  posts: types.optional(PostsStore, { loading: false }),
  user: types.optional(UserStore, {
    loading: false,
  }),
  receptions: types.optional(ReceptionsStore, { loading: false }),
  dashboardItems: types.optional(DashboardItemsStore, { loading: false }),
});

export default RootStore;
