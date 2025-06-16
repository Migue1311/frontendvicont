import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/BlogList.css'; // Asegúrate de tener un archivo CSS para estilos

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/articles/posts.json') // Archivo con metadatos
      .then(response => {
        if (!response.ok) throw new Error('Error al cargar posts');
        return response.json();
      })
      .then(data => setPosts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Cargando posts...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!posts.length) return <div>No hay posts disponibles</div>;

  return (
    <div className="blog-list">
      <h2>Últimos Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <h3>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </h3>
          <p>{post.excerpt}</p>
          <Link to={`/blog/${post.id}`} className="read-more">
            Leer más →
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
