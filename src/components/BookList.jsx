import React from 'react';
import Book from './Book';

class BookList extends React.Component {
  render() {
    return (
      <section id="book-list">
        <h2>Livros</h2>
        <ul id="books">
          {this.props.books.map(book => (
            <Book
              key={book.id}
              book={book}
              removeBook={this.props.removeBook}
              toggleRead={this.props.toggleRead}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default BookList;
