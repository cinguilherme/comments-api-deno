import {
  getCommentByContent,
  createNewComment,
  getCommentById
} from "../models/comment.ts";

import { getRedisConnection } from "../cache/redisConfig.ts";

const getCommentsForContent = async ({ params, response }: {
  params: { id: string };
  response: any;
}) => {
  console.log("id lookup " + params.id);

  response.status = 200;
  response.body = await getCommentByContent(params.id);
};

const getById = async ({ params, response }: {
  params: { id: number };
  response: any;
}) => {
  response.status = 200;
  let redis = await getRedisConnection();
  const res = await redis.get(`${params.id}`);

  if (res) {
    response.body = JSON.parse(res);
  } else {
    const val = await getCommentById(params.id);
    redis.set(`${params.id}`, JSON.stringify(val));
    response.body = val;
  }
};

const postComment = async ({ request, response }: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  response.status = 201;
  response.body = await createNewComment(body.value);
};

export { getCommentsForContent, postComment, getById };
