import { types } from "mobx-state-tree";
import { PostsStore } from "./posts";
import { UserStore } from "./user";

const RootStore = types.model("RootStore", {
  posts: types.optional(PostsStore, { loading: false }),
  user: types.optional(UserStore, {
    loading: false,
  }),
});

export default RootStore;
