// src/App.jsx
import './App.css';

const App = () => {
  const books = [
    { name: 'The Alchemist', read: true },
    { name: 'Maktoob', read: false },
    { name: 'The Secret', read: true },
  ];

  return (
    <>
      <h1>Book List</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index} className={book.read ? 'completed' : 'not-completed'}>
            {book.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;