import { rest } from "msw";
import posts from "./data/posts.json";
import user from "./data/user.json";
import receptions from "./data/receptions.json";
import { EEndpoints } from "shared/api/enums";

export const handlers = [
  rest.get(EEndpoints.GET_RECEPTIONS_LIST, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(receptions), ctx.delay(1000));
  }),
  rest.get(EEndpoints.GET_POSTS, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(posts), ctx.delay(1000));
  }),
  rest.get(EEndpoints.GET_USER, (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated");
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }
    // If authenticated, return a mocked user details
    return res(ctx.status(200), ctx.json(user));
  }),
  rest.post(EEndpoints.LOGIN, (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),
];
