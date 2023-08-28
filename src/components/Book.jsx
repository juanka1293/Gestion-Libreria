// Book.js
import React from 'react';

import './css/Book.css'; // Importa tu archivo de estilos CSS para Dashboard

const Book = ({ id,title, author, thumbnailUrl }) => {
  return (
    <div className="book">
      <img src={thumbnailUrl} alt={`${title} - Portada`} />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default Book;
