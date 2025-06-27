import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../data';
import '../style.css'; // ✅ Import CSS!

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id.toString() === id);

  if (!post) return <h2>Post not found</h2>;

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
