import React, { Component } from 'react';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import './App.css';

class App extends Component {
  state = {
    books: [
      { id: 1, title: '1984', author: 'George Orwell', read: false },
      { id: 2, title: 'Brave New World', author: 'Aldous Huxley', read: false },
    ]
  };

  addBook = (title, author) => {
    this.setState((prevState) => ({
      books: [...prevState.books, { id: prevState.books.length + 1, title, author, read: false }]
    }));
  };

  removeBook = (id) => {
    this.setState((prevState) => ({
      books: prevState.books.filter(book => book.id !== id)
    }));
  };

  toggleRead = (id) => {
    this.setState((prevState) => ({
      books: prevState.books.map(book =>
        book.id === id ? { ...book, read: !book.read } : book
      )
    }));
  };

  render() {
    return (
      <div className="app-container">
        <header>
          <h1>Minha Lista de Livros para Ler</h1>
        </header>
        <main>
          <AddBookForm addBook={this.addBook} />
          <BookList books={this.state.books} removeBook={this.removeBook} toggleRead={this.toggleRead} />
        </main>
      </div>
    );
  }
}

export default App;
