import React, { Component } from "react";
import "./Home.scss";
import { httpClient } from "../../Services/Helpers/httpClient";
import PostItem from "../../Components/PostItem/PostItem";

export class Home extends Component {
  // getPosts = async () => {
  //   const response = await client.get("/todos", {
  //     _limit: 10,
  //     _page: 1,
  //   });
  //   console.log(response);
  // };
  // componentDidMount = () => {
  //   this.getPosts();
  // };

  render() {
    return (
      <section className="posts">
        <div className="container">
          <h1>Bài viết mới nhất</h1>
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

export default Home;
