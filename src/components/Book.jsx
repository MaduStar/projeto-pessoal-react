import React from 'react';

class Book extends React.Component {
  handleToggleRead = () => {
    this.props.toggleRead(this.props.book.id);
  };

  handleRemove = () => {
    this.props.removeBook(this.props.book.id);
  };

  render() {
    const { title, author, read } = this.props.book;
    return (
      <li>
        <span><strong className={read ? 'read' : ''}>{title}</strong> by {author}</span>
        <div>
          <button className="read-button" onClick={this.handleToggleRead}>
            {read ? 'Marcar como Não Lido' : 'Marcar como Lido'}
          </button>
          <button className="remove-button" onClick={this.handleRemove}>Remover</button>
        </div>
      </li>
    );
  }
}

export default Book;
