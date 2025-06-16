import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../styles/BlogPost.css'; // Asegúrate de tener un archivo CSS para estilos

const BlogPost = () => {
  const { id } = useParams();
  const [postContent, setPostContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/articles/post${id}.html`)
      .then(response => {
        if (!response.ok) throw new Error('Post no encontrado');
        return response.text();
      })
      .then(html => setPostContent(html))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Cargando post...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <article className="blog-post">
      <div dangerouslySetInnerHTML={{ __html: postContent }} />
      <Link to={`/blog/`} className="back-button">
        ← Volver al blog
      </Link>
    </article>
  );
};

export default BlogPost;
