import React from "react";
import B1 from "../public/friends/B1.jpg";
import B2 from "../public/friends/B2.jpg";
import B3 from "../public/friends/B3.jpg";
import B4 from "../public/friends/B4.jpg";

const Friends = () => {
  const friendList = [
    {
      img: B1,
      name: "Vaidya_1",
    },
    {
      img: B2,
      name: "Vaidya_2",
    },
    {
      img: B3,
      name: "Vaidya_3",
    },
    {
      img: B4,
      name: "Vaidya_4",
    },
  ];

  return (
    <div className="sticky hidden xl:flex items-start justify-start flex-1">
      <div className="sticky top-10 flex flex-col w-5/6 gap-5 rounded-3xl border border-gray-400 bg-white p-5 text-center md:5/6
      dark:border-gray-700 dark:bg-black dark:text-white">
        <h3 className="text-2xl font-semibold">Friends</h3>
        <ul className="flex w-full flex-col gap-5">
          {friendList.map((user, index) => (
            <li
              key={index}
              className="flex cursor-pointer flex-wrap items-start justify-between gap-5 rounded-3xl
              bg-gray-100 p-3 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 dark:bg-gray-900 dark:text-white"
            >
              <div className="flex items-center gap-5">
                <img
                  src={user.img}
                  alt=""
                  className="w-8 rounded-full md:w-8"
                />
                <span className="text-sm font-normal">{user.name}</span>
              </div>
              <button className='rounded-3xl text-sm bg-blue-500 p-2 text-white transition-all duration-300 hover:bg-blue-400'>Message</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Friends;
