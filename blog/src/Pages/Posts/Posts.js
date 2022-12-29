import React, { Component } from "react";
import PostItem from "../../Components/PostItem/PostItem";
import { withContext } from "../../Services/Context/withContext";
import { withRouter } from "../../Services/Helpers/withRouter";
import { httpClient } from "../../Services/Helpers/httpClient";
import Error404 from "../../Errors/Error404";

const client = httpClient();

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "none",
      category: {},
    };
    this.id = this.props.params.id;
    this.dispatch = this.props.dispatch;
  }

  componentDidMount = () => {
    this.dispatch.getPosts(this.id);
    this.getCategory();
  };

  render() {
    const { isLoading, postList } = this.props.data.posts;
    const { status, category } = this.state;
    const { name: categoryName } = category;
    console.log(status);
    return (
      <section className="posts">
        <div className="container">
          {status !== "none" &&
            (status === "error" ? (
              <Error404 />
            ) : (
              <>
                <h1>{categoryName}</h1>
                <hr />
                <div className="posts-list">
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <>
                      {postList.length ? (
                        <div className="row">
                          {postList.map((post) => (
                            <PostItem key={post.id} {...post} />
                          ))}
                        </div>
                      ) : (
                        <div className="alert alert-danger text-center">
                          Không có bài viết
                        </div>
                      )}

                      <div className="loadmore text-center pt-5">
                        <button type="button" className="btn btn-danger">
                          Xem thêm
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </>
            ))}
        </div>
      </section>
    );
  }

  getCategory = async () => {
    const response = await client.get("/categories/" + this.id);

    if (response.res.ok) {
      const category = response.data;
      this.setState({
        category: category,
        status: "success",
      });
    } else {
      this.setState({
        status: "error",
      });
    }
  };
}

export default withRouter(withContext(Posts));

/**
 * Chuyên mục tồn tại => Không có bài viết
 * Chuyên mục không tồn tại
 *
 *
 */
