import { rest } from "msw";
import receptions from "./data/receptions.json";
import dashboardItems from "./data/dashboardItems.json";
import { EEndpoints } from "shared/api/enums";

export const handlers = [
  rest.get(EEndpoints.GET_RECEPTIONS_LIST, (req, res, ctx) => {
    const response = receptions;

    const totalSize = req.url.searchParams.get("totalSize") || "12";
    const offset = req.url.searchParams.get("offset") || "0";
    const limit = req.url.searchParams.get("limit") || "10";
    const sort = req.url.searchParams.get("sortDirection") || "ask";

    response.offset = parseInt(offset, 10);
    response.totalSize = parseInt(totalSize, 10);
    response.limit = parseInt(limit, 10);

    if (sort === "desk") {
      response.items.reverse();
    }

    // @ts-ignore
    // const arr = req.body?.status || [];
    // const resp = arr?.length
    //   ? response.body.items.filter((item) => {
    //       return arr?.includes(item.status);
    //     })
    //   : response.body.tasks;
    return res(ctx.status(200), ctx.json(response), ctx.delay(0));
  }),
  rest.get(EEndpoints.GET_DASHBOARD_LIST, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dashboardItems), ctx.delay(1000));
  }),
  // rest.get(EEndpoints.GET_POSTS, (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(posts), ctx.delay(1000));
  // }),
  // rest.get(EEndpoints.GET_USER, (req, res, ctx) => {
  //   // Check if the user is authenticated in this session
  //   const isAuthenticated = sessionStorage.getItem("is-authenticated");
  //   if (!isAuthenticated) {
  //     // If not authenticated, respond with a 403 error
  //     return res(
  //       ctx.status(403),
  //       ctx.json({
  //         errorMessage: "Not authorized",
  //       })
  //     );
  //   }
  //   // If authenticated, return a mocked user details
  //   return res(ctx.status(200), ctx.json(user));
  // }),
  // rest.post(EEndpoints.LOGIN, (req, res, ctx) => {
  //   // Persist user's authentication in the session
  //   sessionStorage.setItem("is-authenticated", "true");
  //   return res(
  //     // Respond with a 200 status code
  //     ctx.status(200)
  //   );
  // }),
];
