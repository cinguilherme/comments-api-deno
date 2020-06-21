import {
  BaseModel,
  dso,
  Model,
  Field,
  FieldType,
  Where
} from "https://deno.land/x/dso@v1.0.0/mod.ts";
import { Client } from "https://deno.land/x/mysql/mod.ts";

const db = "commentsDb";
const dbhost = "127.0.0.1";
const dbuser = "root";
const dbpass = "strongDbPass";
const dbport = 3306;

@Model("comments")
class CommentModel extends BaseModel {
  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true,
  })
  id!: number;

  @Field({
    type: FieldType.STRING,
    notNull: true,
  })
  post!: number;

  @Field({
    type: FieldType.STRING,
    notNull: true,
  })
  comment_text!: string;
}

const commentModel = dso.define(CommentModel);

dso.connect({
  hostname: dbhost,
  port: dbport,
  username: dbuser,
  password: dbpass,
  poolSize: 10,
  db: db,
});

await dso.sync(false);

const getCommentByContent = async (id: string) => {
  const allComments = await commentModel.findAll(
    Where.expr("post is not null"),
  );
  console.log(`allCmmment => ${allComments}`);
  return allComments;
};

const getCommentById = async (id: number) => {
  const byId = await commentModel.findById(id);
  console.log(`byId => ${byId}`);

  return byId;
};

const createNewComment = async (comment: any) => {
  const inserted = await commentModel.insert(comment);
  console.log(`inserted => ${inserted}`);
  return inserted;
};

export {
  commentModel as userModel,
  getCommentById,
  createNewComment,
  getCommentByContent
};
