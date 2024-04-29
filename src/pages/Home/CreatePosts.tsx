// Import Dependencies
import React from "react";

interface CreatePostProps {
  onPost: (content: string) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onPost }) => {
  const [content, setContent] = React.useState("");

  const handlePost = () => {
    onPost(content);
    setContent("");
  };

  return (
    <section className="flex flex-col py-7 mt-10 rounded-lg border-2 border-solid bg-zinc-800 border-neutral-700 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col px-6 max-md:px-5 max-md:max-w-full">
        <h2 className="text-lg font-medium text-stone-300 max-md:max-w-full">
          Create post
        </h2>
        <div className="flex gap-4 px-4 py-4 mt-4 rounded-lg bg-zinc-900 max-md:flex-wrap">
          <div
            role="img"
            aria-label="Speech balloon"
            className="justify-center items-center px-4 py-3 w-12 h-12 text-lg font-medium text-black whitespace-nowrap rounded-full bg-zinc-800"
          >
            💬
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="How are you feeling today?"
            className="flex-auto my-auto text-base leading-6 text-zinc-500 bg-transparent border-none resize-none focus:outline-none max-md:max-w-full"
            rows={2}
          />
        </div>
      </div>
      <button
        type="button"
        onClick={handlePost}
        disabled={!content}
        className="justify-center self-end px-10 py-3 mt-4 mr-6 text-base font-medium text-white whitespace-nowrap bg-blue-500 rounded max-md:px-5 max-md:mr-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Post
      </button>
    </section>
  );
};

export default CreatePost;
