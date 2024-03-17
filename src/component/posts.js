import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import { getPostFetch } from "../redux/slice/postslice";

const Posts = () => {
  const post = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostFetch());
  }, [dispatch]);
  //   console.log("yo chai post middleware", isLoading, post);

  return (
    <div>
      <h1>FETCHING POST DATA</h1>
      {isLoading
        ? "Loading..."
        : post.map((data) => {
            return (
              <Fragment key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.body}</p>
              </Fragment>
            );
          })}
    </div>
  );
};
export default Posts;
