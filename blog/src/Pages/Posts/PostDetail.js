import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

export class PostDetail extends Component {
  render() {
    const content = `## Tech2 dạy lập trình
**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

![markdown](https://images.viblo.asia/518eea86-f0bd-45c9-bf38-d5cb119e947d.png)`;
    return (
      <div className="post-detail">
        <div className="container">
          <h1>Học React JS có khó không?</h1>
          <div className="post-meta">
            <ul className="list-unstyled d-flex gap-2">
              <li>Đăng lúc: 27/12/2022 05:00:00</li>
              <li>
                Bởi: <a href="#">Hoàng An</a>
              </li>
            </ul>
          </div>
          <div className="py-3">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </div>
    );
  }
}

export default PostDetail;

/*
Sử dụng markdown Editor
*/
