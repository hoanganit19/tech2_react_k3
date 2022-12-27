import React, { Component } from "react";
import "./PostItem.scss";

export class PostItem extends Component {
  render() {
    return (
      <div className="col-3">
        <div className="post-item">
          <a href="#">
            <img
              src="https://i.picsum.photos/id/825/500/400.jpg?hmac=D-Cv4D8T_Wlv2nEkUxcPTB-z5UFBwpd2yWd0dXeCglU"
              alt=""
            />
          </a>
          <h2 className="title">
            <a href="#">Bài viết 01</a>
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            corrupti debitis molestiae deleniti! Consequatur doloremque
            distinctio vitae fugit maiores commodi ab impedit numquam esse a,
            sed ex et, beatae eaque.
          </p>
        </div>
      </div>
    );
  }
}

export default PostItem;
