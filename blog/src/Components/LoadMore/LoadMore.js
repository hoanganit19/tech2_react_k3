import React, { Component } from "react";

export class LoadMore extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="loadmore text-center pt-5">
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.props.onLoadMore}
        >
          Xem thêm
        </button>
      </div>
    );
  }
}

export default LoadMore;
