/* eslint-disable react/react-in-jsx-scope */
import P from "prop-types";
import { PostCard } from "../PostCard";
import "./styles.css";

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post, i) => (
      <PostCard post={post} key={i} />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.arrayOf(P.shape({ cover: P.string.isRequired, title: P.string.isRequired, body: P.string.isRequired })),
};
