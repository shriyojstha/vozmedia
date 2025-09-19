import { redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postAction } from "../DataFiles/DataHandling";
import { Form, useActionData } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useActionData();

  useEffect(() => {
    if (data) {
      dispatch(postAction.addPost(data));
      navigate("/");
    }
  }, [data]);

  return (
    <Form method="POST" className="create-post">
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Post</h2>

        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col text-left w-full">
            <label className="text-md font-medium text-gray-600 mb-1">
              userId
            </label>
            <input
              type="text"
              name="userId"
              placeholder="Enter your User ID"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Title */}
          <div className="flex flex-col text-left w-full">
            <label className="text-md font-medium text-gray-600 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter post title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col text-left w-full">
            <label className="text-md font-medium text-gray-600 mb-1">
              Description
            </label>
            <textarea
              rows="4"
              name="body"
              placeholder="Write something..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-violet-500"
            ></textarea>
          </div>

          {/* Tags */}
          <div className="flex flex-col text-left w-full">
            <label className="text-md font-medium text-gray-600 mb-1">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              placeholder="e.g. react, tailwind, ui"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* File Upload */}
          <div className="flex flex-col text-left w-full">
            <label className="text-md font-medium text-gray-600 mb-1">
              Upload Image
            </label>
            <input
              type="file"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-violet-500 file:text-white hover:file:bg-violet-600"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-4 w-full bg-violet-600 text-white font-semibold py-2 rounded-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out"
          >
            Post
          </button>
        </div>
      </div>
    </Form>
  );
};

export async function FormAction(Data1) {
  const data1 = await Data1.request.formData();
  const data = Object.fromEntries(data1);
  console.log(data);
  

  return fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((posts) => {
      console.log(posts);
      return posts;
    });
}

export default CreatePost;
