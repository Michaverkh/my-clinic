import { InferType } from "yup";
import { postsRequestSchema, postsResponseSchema } from "../validators";

export type IPostsRequestDto = InferType<typeof postsRequestSchema>;
export type IPostsResponseDto = InferType<typeof postsResponseSchema>;
