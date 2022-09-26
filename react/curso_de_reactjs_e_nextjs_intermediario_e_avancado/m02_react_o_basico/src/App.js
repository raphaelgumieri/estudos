import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsRes = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosRes = fetch("https://jsonplaceholder.typicode.com/photos");

    const [posts, photos] = await Promise.all([postsRes, photosRes]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, i) => {
      return {...post, cover: photosJson[i].url}
    });

    this.setState({ posts: postsAndPhotos });
  };

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <div className="post">
              <img src={post.cover} alt={post.title} />
              <div key={post.id} className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
