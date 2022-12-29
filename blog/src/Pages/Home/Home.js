import React, { Component } from "react";
import "./Home.scss";

import PostItem from "../../Components/PostItem/PostItem";

import { withContext } from "../../Services/Context/withContext";

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { getPosts } = this.props.dispatch;
    getPosts();
  };

  render() {
    const { isLoading, postList } = this.props.data.posts;

    return (
      <section className="posts">
        <div className="container">
          <h1>Bài viết mới nhất</h1>
          <hr />
          <div className="posts-list">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="row">
                  {postList.map((post) => (
                    <PostItem key={post.id} {...post} />
                  ))}
                </div>

                <div className="loadmore text-center pt-5">
                  <button type="button" className="btn btn-danger">
                    Xem thêm
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default withContext(Home);
