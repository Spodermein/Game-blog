import React from 'react';
import posts from '../data';
import '../style.css'; // ✅ Import CSS!

const BlogList = () => (
  <div>
    <h1>Game Blog</h1>
    {posts.map(post => (
      <div key={post.id} className="blog-list-item">
        <h2>{post.title}</h2>
        <p>{post.summary}</p>
        <a href={`/post/${post.id}`}>Read more</a>
      </div>
    ))}
  </div>
);

export default BlogList;
