// import { AiFillDelete } from "react-icons/ai";
// import { postAction } from "../DataFiles/DataHandling";
// import { useDispatch } from "react-redux";

// const Post = ({ item }) => {
//   const dispatch = useDispatch();


//   return (
//     <div className="card post-card mr-20 sm:w-11/12 md:w-3/4 lg:w-[50rem]">
//       <div className="card-body">
//         <span
//           className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//           onClick={() => {
//             dispatch(postAction.delPost(item._id));
//           }}
//         >
//           <AiFillDelete />
//         </span>

//         <h5 className="card-title">Hey User</h5>
//         <p className="card-text">{item.body}</p>
//         {/* 
//         {Array.isArray(item.tags) &&
//           item.tags.map((tag) => ( */}
//         <span className="badge text-bg-primary hashtag">default</span>
//         {/* ))} */}
//         <div className="alert alert-light" role="alert">
//           This post has 10 reactions
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post;
