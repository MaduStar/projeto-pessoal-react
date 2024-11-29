import React, { Component } from 'react';

class AddBookForm extends Component {
  state = {
    title: '',
    author: ''
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleAuthorChange = (e) => {
    this.setState({ author: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title && this.state.author) {
      this.props.addBook(this.state.title, this.state.author);
      this.setState({ title: '', author: '' });
    }
  };

  render() {
    return (
      <form id="book-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="title"
          placeholder="Título do Livro"
          value={this.state.title}
          onChange={this.handleTitleChange}
          required
        />
        <input
          type="text"
          id="author"
          placeholder="Autor do Livro"
          value={this.state.author}
          onChange={this.handleAuthorChange}
          required
        />
        <button type="submit">Adicionar Livro</button>
      </form>
    );
  }
}

export default AddBookForm;
