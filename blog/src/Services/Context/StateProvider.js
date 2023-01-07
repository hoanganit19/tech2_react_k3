import React, { Component, createContext } from "react";

import { httpClient } from "../Helpers/httpClient";

export const StateContext = createContext();

const client = httpClient();

export class StateProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {
        postList: [],
        postCount: 0,
        isLoading: true,
      },
    };

    this.dispatch = {
      getPosts: this.getPosts,
    };
  }

  getPosts = async (
    categoryId = 0,
    sort = "id",
    order = "desc",
    keywords = null,
    limit = 8,
    page = 1
  ) => {
    /*
    Phương thức lấy danh sách bài viết từ server
    Nếu categoryId = 0 => Lấy tất cả bài viết
    Nếu categoryId != 0 => Lọc bài viết theo chuyên mục
    */

    const params = {
      _sort: sort,
      _order: order,
      _limit: limit,
      _page: page,
    };
    if (categoryId !== 0) {
      params.category_id = categoryId;
    }

    if (keywords !== null) {
      params.q = keywords;
    }

    const { res, data: postList } = await client.get("/posts", params);
    const postCount = res.headers.get("x-total-count");

    const posts = {
      isLoading: false,
      postList: postList,
      postCount: postCount,
    };

    this.setState({
      posts: posts,
    });
  };

  render() {
    const { children } = this.props;

    return (
      <StateContext.Provider
        value={{
          data: this.state,
          dispatch: this.dispatch,
        }}
      >
        {children}
      </StateContext.Provider>
    );
  }
}

export default StateProvider;
