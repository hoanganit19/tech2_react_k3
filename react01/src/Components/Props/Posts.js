import React from "react";

export default function Posts({ posts }) {
  return (
    <div>
      <h2>Danh sách bài đăng</h2>
      {posts.map(({ id, title }) => (
        <p key={id}>{title}</p>
      ))}
    </div>
  );
}
