import React, { Component } from "react";
import PostItem from "../../Components/PostItem/PostItem";

export class Posts extends Component {
  render() {
    return (
      <section className="posts">
        <div className="container">
          <h1>Lập trình</h1>
          <hr />
          <div className="posts-list">
            <div className="row">
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
            </div>
            <div className="loadmore text-center pt-5">
              <button type="button" className="btn btn-danger">
                Xem thêm
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Posts;
