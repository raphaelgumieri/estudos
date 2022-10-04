/* eslint-disable react/react-in-jsx-scope */
import P from "prop-types";
import "./styles.css";

export const PostCard = ({ post }) => (
  <div className="post">
    <img src={post.cover} alt={post.title} />
    <div className="post-content">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  post: P.shape({
    cover: P.string.isRequired,
    title: P.string.isRequired,
    body: P.string.isRequired,
  }).isRequired,
};
