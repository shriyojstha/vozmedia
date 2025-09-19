import { redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postAction } from "../DataFiles/DataHandling";
import { Form, useActionData } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost2 = () => {
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
    <Form method="POST"  className="create-post">
      <div
        className="bg-[#ffffff] rounded-xl 
        shadow-md w-[500px] max-w-[95%] 
        p-4 text-lg font-sans font-mono
      transform [transform-style:preserve-3d]
      transition-transform transition-shadow duration-300 ease-in-out  hover:shadow-2xl
      
      [perspective:1500px] relative
      "
      >
        <div className="absolute rounded-lg bg-[rgba(0, 0, 0, 0.03)] w-50 h-50 top-[-40px] right-[-40px] z-[-1] "></div>
        <div className="flex items-center gap-3 mb-[16px]">
          <div className="w-12 h-12 rounded-full bg-[#ddd] flex-shrink-0"></div>
          <div className="font-bold text-md"> Voz</div>
        </div>
        <textarea
          rows="10"
          className="resize-y box-border w-full min-h-[100px] border border-[#ddd] rounded-xl text-sm p-2 mb-4 bg-[#f9f9f9] "
          placeholder="What's on your mind?"
          name="body"
        />
        <div className="flex justify-between items-center">
          <div className="flex gap-3 overflow-visible">
            <div
              className="w-10 h-10 bg-[#ddd] !rounded-full flex items-center justify-center text-base cursor-pointer transition-transform duration-200 ease-in-out hover:scale-130"
              title="Add Image"
            >
              🖼️
            </div>
            <div
              className=" w-10 h-10 bg-[#ddd] rounded-full flex items-center justify-center text-base cursor-pointer transition-transform duration-200 ease-in-out hover:scale-130"
              title="Add Video"
            >
              🎬
            </div>
            <div
              className="w-10 h-10 bg-[#ddd] rounded-full flex items-center justify-center text-base cursor-pointer transition-transform duration-200 ease-in-out hover:scale-130"
              title="Tag Friends"
            >
              👥
            </div>
          </div>
          <button
            className="px-6 py-2 !rounded-full bg-[#e0e0e0] font-bold border-0 cursor-pointer transition-transform duration-200 ease-in-out hover:shadow-md "
            type="submit"
          >
            Post
          </button>
        </div>
      </div>
    </Form>
  );
};
export async function FormAction2({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // Send to your backend
  const res = await fetch("https://vozmedia.onrender.com/post/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const post = await res.json();
  return post;
}

export default CreatePost2;
