import React from "react";
import CreatePost2 from "./createPost2";

const CreateDummy = ({ close }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay for desktop */}
      <div
        className="hidden md:block absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => close(false)}
      />

      {/* Fullscreen for mobile */}
      <div className="block md:hidden absolute inset-0 bg-white dark:bg-black" />
      {/* The actual CreatePost card */}
      <CreatePost2 />
    </div>
  );
};

export default CreateDummy;
