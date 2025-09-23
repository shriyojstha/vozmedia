import React from "react";
import SharePost from "../components/SharePost";
import Post from "./Post";
import { postStore } from "../store/postStore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postAction } from "../DataFiles/DataHandling";
import { useState } from "react";

import B1 from "../public/friends/B1.jpg";
import B2 from "../public/friends/B2.jpg";
import B3 from "../public/friends/B3.jpg";
import B4 from "../public/friends/B4.jpg";

import f1 from "../public/public/f1.jpg";
import f2 from "../public/public/f2.jpg";
import f3 from "../public/public/f3.jpg";
import f4 from "../public/public/f4.jpg";
import CreateDummy from "./createDummy";
import { authStore } from "../store/authStore";

const Feed = () => {
  const { getPost, postData } = postStore();
  const {isAuthenticated} = authStore();
  const state = useSelector((store) => store.POSTS);
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);

  console.log(postData);

  // const data = getPost();
  // console.log(data);

  useEffect(() => {
    const data = getPost();
    console.log(data);
  }, [getPost]);

  if(postData.success) {
    console.log('true');
  }
  useEffect(() => {
    if (postData.success) dispatch(postAction.addPosts(postData));
  }, [getPost]);

  const data = postData.post;
  console.log("data: ", data);
  console.log(state);

  return (
    <div className="flex flex-[2] flex-col justify-center items-center gap-3 px-3">
      <SharePost onOpen={() => setOpen(true)} />
      {isAuthenticated && isOpen && <CreateDummy close={setOpen} />}

      {postData.success && postData.post.map((items) => (
        <Post key={items._id} item={items} B1={B1} />
      ))}
      {/* <Post image={f1} friend={B1} name="Vaidya_1" />
      <Post image={f2} friend={B2} name="Vaidya_2" />
      <Post image={f3} friend={B3} name="Vaidya_3" />
      <Post image={f4} friend={B4} name="Vaidya_4" /> */}
    </div>
  );
};

export default Feed;
