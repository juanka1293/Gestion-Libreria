import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from './Book'; // Asegúrate de importar el componente Book
import './css/Dashboard.css'; // Importa tu archivo de estilos CSS para Dashboard

const Dashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="dashboard">
      <div className="magazine">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            thumbnailUrl={book.thumbnailUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
