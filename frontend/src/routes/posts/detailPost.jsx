import React from "react";
import { useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";

const DetailPostPage = () => {
  const post = useLoaderData();

  return (
    <div className="single">
      <div className="details">
        <div className="wrapper">
          <h1>{post.title}</h1>
          <div className="user">
            <img src={post.user.avatar} alt="" />
            <span>{post.user.username}</span>
          </div>
          <div
            className="bottom"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.postDetail.desc),
            }}
          ></div>
        </div>
      </div>
      <div className="features"></div>
    </div>
  );
};
export default DetailPostPage;
