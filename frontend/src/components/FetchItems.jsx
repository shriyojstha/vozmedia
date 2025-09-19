// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchAction} from "../DataFiles/FetchingState";
// import { postAction } from "../DataFiles/DataHandling";

// export const PostLoader = () => {
//   const dispatch = useDispatch();
//   const data_fetch = useSelector((store) => store.fetch);

//   useEffect(() => {
//     if (data_fetch.markdataFetched) return;

//     dispatch(fetchAction.markdataFetchingStarted());
//     console.log("data Fetching: ", data_fetch.markdataFetchingStarted);
//     return fetch("https://dummyjson.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         dispatch(fetchAction.markdataFetched());
//         console.log("data Fetchined: ", data_fetch.markdataFetched);
//         dispatch(fetchAction.markdataFetchingEnded());
//         console.log("data Fetching: ", data_fetch.markdataFetchingEnded);
//         //  dispatch(postAction.addPosts(data.posts));
//       });
//   }, [data_fetch]);
// };
