import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogList from '../components/blogComponents/BlogList';
import BlogPost from '../components/blogComponents/BlogPost';
import '../styles/Blog.css'; // Asegúrate de tener un archivo CSS para estilos

const Blog = () => {
  return (
    <div className="blog-container">
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/:id" element={<BlogPost />} />
      </Routes>
    </div>
  );
};

export default Blog;