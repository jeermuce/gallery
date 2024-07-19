import React from "react";

const page = () => {
  return (
    <>
      {/* Placeholder for forum posts */}
      <div className="mb-4">
        <h1 className="text-xl font-semibold">Posts</h1>
        <ul className="list-disc pl-5">
          <li className="mb-2">Post 1 - Placeholder content</li>
          <li className="mb-2">Post 2 - Placeholder content</li>
          <li className="mb-2">Post 3 - Placeholder content</li>
        </ul>
      </div>

      {/* Placeholder for new post form */}
      <div>
        <h2 className="text-xl font-semibold">Add a New Post</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <textarea
              rows={50}
              id="title"
              name="title"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter your post title"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows={50}
              placeholder="Enter your post content"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default page;
