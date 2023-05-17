import morphism, { Schema } from "morphism";
import { IPostsResponseDto } from "../dto";
import { IPosts } from "../interfaces";

export const postsMapper = async (
  source: IPostsResponseDto
): Promise<IPosts> => {
  type IPostsSchema = Schema<IPosts, IPostsResponseDto>;

  const schema = {
    id: "id",
    userId: "userId",
    title: "title",
    body: "body",
  };

  // @ts-ignore
  return await new Promise((res) =>
    // @ts-ignore
    res(morphism<IPostsSchema>(schema, source))
  );
};
