import React from "react";
import TopPosts from "./../ui-components/TopPosts";

const TopPostsWrapper = ({...props }) => {
    const embedcode = '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PLc3VQSe45A9f7LNzF3rfHimIHdBVPrrxv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  return (
    <div>
      <TopPosts {...props} />
      <div
        dangerouslySetInnerHTML={{ __html: embedcode }}
      ></div>
    </div>
  );
};

export { TopPostsWrapper };
