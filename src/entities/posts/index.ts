import { flow, types } from "mobx-state-tree";
import { IPostsRequestDto, IPostsResponseDto } from "./dto";
import { postsRequestSchema, postsResponseSchema } from "./validators";
import { postsMapper } from "./mappers";
import { EEndpoints } from "shared/api/enums";
import { apiModule } from "index";

const Posts = types.model("Post", {
  id: types.number,
  userId: types.number,
  title: types.string,
  body: types.string,
});

const PostsStore = types
  .model("PostsStore", {
    loading: types.boolean,
    posts: types.array(Posts),
  })
  .actions((self) => ({
    load: flow(function* () {
      self.loading = true;
      try {
        const res = yield apiModule.getData<
          IPostsRequestDto,
          IPostsResponseDto
        >(
          `${EEndpoints.GET_POSTS}`,
          {},
          {
            requestValidationSchema: postsRequestSchema,
            responseValidationSchema: postsResponseSchema,
          }
        );
        self.posts = yield postsMapper(res);
      } finally {
        self.loading = false;
      }
    }),
  }));

export { PostsStore };
