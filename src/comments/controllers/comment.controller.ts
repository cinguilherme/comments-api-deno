import { Comment, getCommentByContent } from "../models/comment.ts";

const getCommentsForContent = ({ params, response }: {
  params: { id: string };
  response: any;
}) => {
  response.status = 200;
  response.body = getCommentByContent(params.id);
};

export { getCommentsForContent };
