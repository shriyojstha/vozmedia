import { redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postAction } from "../DataFiles/DataHandling";
import { useActionData } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authStore } from "../store/authStore";
import { postStore } from "../store/postStore";

const CreatePost2 = () => {
  const fileRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [url, setUrl] = useState(null);
  const { user } = authStore();
  const { postCreatePost } = postStore();

  const filePick = () => {
    fileRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://vozmedia.onrender.com/upload/uploads",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setUrl(response.data.url);
      console.log(response.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData(e.target);
    const body = formdata.get("body");
    const username = user.username;
    console.log(url);
    const postData = {
      username,
      body,
      imageUrl: url,
    };

    dispatch(postAction.addPost(postData));
    await postCreatePost(body, username, url);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="create-post">
      <div
        className="bg-[#ffffff] rounded-xl 
        shadow-md
       w-[400px] h-full 
        md:w-[600px] md:max-w-[95%] md:h-auto
        p-4  text-lg font-sans 
      transform [transform-style:preserve-3d]
      transition-transform  duration-300 ease-in-out  hover:shadow-2xl
      dark:bg-black dark:text-white dark:border-gray-700 dark:border
      
      [perspective:1500px] relative
      "
      >
        <div className="absolute rounded-lg bg-[rgba(0, 0, 0, 0.03)] w-50 h-50 top-[-40px] right-[-40px] z-[-1] "></div>
        <div className="flex items-center gap-3 mb-[16px]">
          <div className="w-12 h-12 rounded-full bg-[#ddd] flex-shrink-0"></div>
          <div className="font-bold text-md"> {user.username}</div>
        </div>
        <textarea
          rows="10"
          className="resize-y box-border w-full min-h-[100px] border border-[#ddd] rounded-xl text-sm p-2 mb-4 bg-[#f9f9f9]
          dark:bg-black dark:border-gray-900 
          "
          placeholder="What's on your mind?"
          name="body"
        />
        <div className="flex justify-between items-center">
          <div className="flex gap-3 overflow-visible">
            <div
              className="w-10 h-10 bg-[#ddd] !rounded-full flex items-center justify-center text-base cursor-pointer transition-transform duration-200 ease-in-out hover:scale-130
              dark:bg-gray-600"
              title="Add Image"
            >
              <div onClick={filePick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="file"
                ref={fileRef}
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept="image/*,video/*"
              />
            </div>
            <div
              className=" w-10 h-10 bg-[#ddd] rounded-full flex items-center justify-center text-base cursor-pointer transition-transform duration-200 ease-in-out hover:scale-130  dark:bg-gray-600"
              title="Add Video"
            >
              🎬
            </div>
            <div
              className="w-10 h-10 bg-[#ddd] rounded-full flex items-center justify-center text-base cursor-pointer transition-transform duration-200 ease-in-out hover:scale-130  dark:bg-gray-600"
              title="Tag Friends"
            >
              👥
            </div>
          </div>
          <button
            className="px-6 py-2 !rounded-full bg-[#e0e0e0] font-semibold border-0 cursor-pointer transition-transform duration-200 ease-in-out hover:shadow-md 
            dark:bg-gray-700"
            type="submit"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreatePost2;
