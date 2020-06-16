interface Comment {
  text: string;
  time: Date;
  timestamp: number;
  link: string;
  likes: number;
  dislikes: number;
  tags: string[];
}

const getCommentByContent = (id: string) => {
  return ["one", "two"];
};

const newCommentForContent = () => {
};

const likeComment = () => {};
const dislikeComment = () => {};

const getCommentByTags = () => {};

export { Comment, newCommentForContent, getCommentByContent };
