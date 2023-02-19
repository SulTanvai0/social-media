import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Post from "./Post";
import { Data } from "../PostData/Data";
import NewsPost from "./NewsPost";

const Feed = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch("https://m-60-server.vercel.app/news")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);
  return (
    <Box flex={4} p={2}>
      {Data.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
      <Box>
        {newsData.map((news) => (<NewsPost key={news._id} news={news}></NewsPost>
        ))}
      </Box>
    </Box>
  );
};

export default Feed;
