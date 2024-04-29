// Import Dependencies
import * as React from "react";

// Import Components
import CreatePost from "./CreatePosts";
import Post from "./Posts";

// Import Constants
import { authordata } from "./../../constants/constant";

// Import Assets
import author1 from "./../../assets/author1.png";

// Import Types
import { PostProps } from "./../../types/posts";

const Home: React.FC = () => {
  const [posts, setPosts] = React.useState<PostProps[]>(authordata);
  console.log(posts);

  const handleCreatePost = (content: string) => {
    const newPost: PostProps = {
      author: "Jane Doe",
      authorImage: author1,
      timeAgo: "just now",
      emoji: "🤩",
      content,
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <main className="flex flex-col items-center px-16 pt-20 bg-neutral-900 max-md:px-5">
      <div className="flex flex-col max-w-full w-[704px]">
        <h1 className="text-3xl font-medium text-stone-300 max-md:max-w-full">
          Hello Jane
        </h1>
        <p className="mt-6 text-base leading-6 text-zinc-500 max-md:max-w-full">
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>
        <CreatePost onPost={handleCreatePost} />
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </main>
  );
};

export default Home;
