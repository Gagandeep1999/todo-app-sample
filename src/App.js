import React, { useContext } from 'react';
import BooksContextProvider from './contexts/BooksContext';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import AddBook from './components/AddBook';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="App">
    <div className={theme.div}>
    <BooksContextProvider>
      <Navbar />
      <AddBook />
      <BookList/>
      </BooksContextProvider>
    </div>
    </div>
  );
}

export default App;
