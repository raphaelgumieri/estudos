import React, { Component } from "react";
import "./styles.css";
import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/loadPosts";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";

export default class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3,
    searchValue: "",
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const { loadMorePosts, handleChange } = this;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = searchValue
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <section className="container">
        <div className="search-container">
          <TextInput handleChange={handleChange} searchValue={searchValue} />
        </div>

        {filteredPosts.length > 0 ? (
          <Posts posts={filteredPosts} />
        ) : (
          <p>Não existem posts =(</p>
        )}

        <div className="button-container">
          {!searchValue && (
            <Button disabled={noMorePosts} onClick={loadMorePosts}>
              Load more posts
            </Button>
          )}
        </div>
      </section>
    );
  }
}
