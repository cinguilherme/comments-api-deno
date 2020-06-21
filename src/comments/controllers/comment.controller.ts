import {
  getCommentByContent,
  createNewComment,
  getCommentById
} from "../models/comment.ts";

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
  response.body = await getCommentById(params.id);
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
