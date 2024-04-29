// Import Dependencies
import React from "react";

// Import Types
import { PostProps } from "../../types/interfaces/posts";

// Import Assets
import dots from "./../../assets/dots.png";
import message from "./../../assets/message.png";

// Import Constants
import { homeStaticData } from "./../../constants/static/home";

const Post: React.FC<PostProps> = ({
  author,
  authorImage,
  timeAgo,
  edited,
  emoji,
  content,
  commentsCount,
}) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(0);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <article className="flex flex-col px-6 py-6 mt-3 rounded-lg border-2 border-solid bg-zinc-800 border-neutral-700 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full font-medium max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-4">
          <img
            src={authorImage}
            alt={`${author}'s profile`}
            className="shrink-0 w-11 h-11 rounded-full aspect-square"
          />
          <div className="flex flex-col self-start mt-1.5">
            <div className="text-base text-stone-300">{author}</div>
            <div className="mt-2 text-sm text-zinc-500">
              {timeAgo}
              {edited && " • Edited"}
            </div>
          </div>
        </div>
        <button
          type="button"
          className="shrink-0 my-auto w-5 aspect-square bg-transparent border-none cursor-pointer"
          aria-label={homeStaticData.posts.moreOption}
        >
          <img
            src={dots}
            alt={homeStaticData.posts.moreOption}
            className="w-full h-full object-contain"
          />
        </button>
      </div>
      <div className="flex gap-4 px-4 py-4 mt-5 rounded-lg bg-zinc-900 max-md:flex-wrap">
        <div
          role="img"
          aria-label={`Emoji: ${emoji}`}
          className="justify-center items-center self-start px-4 py-3 w-12 h-12 text-lg font-medium text-black whitespace-nowrap rounded-full bg-zinc-800"
        >
          {emoji}
        </div>
        <div className="flex-auto text-base leading-6 text-zinc-500 max-md:max-w-full">
          {content}
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4">
        {commentsCount !== undefined && (
          <div className="flex gap-2 text-sm font-medium text-zinc-500">
            <img
              src={message}
              alt={homeStaticData.posts.comments}
              className="shrink-0 w-5 aspect-square cursor-pointer"
            />
            <div className="my-auto">
              {commentsCount} {homeStaticData.posts.comments}
            </div>
          </div>
        )}
        <button
          type="button"
          className={`flex items-center gap-2 px-2 py-1 rounded-full border-none ${
            isLiked ? "bg-blue-600 text-white" : "bg-zinc-700 text-zinc-400"
          }`}
          onClick={handleLike}
          aria-label={
            isLiked ? homeStaticData.posts.unLike : homeStaticData.posts.like
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          <span>{likes}</span>
        </button>
      </div>
    </article>
  );
};

export default Post;
