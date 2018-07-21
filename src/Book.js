import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
    render() {
        const { book, updateBook } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <ShelfChanger
                        shelf={book.shelf}
                        updateBookShelf={ (shelf) => { updateBook(book, shelf) } }
                    />
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors && book.authors.map((author) => (
                    <div className="book-authors" key={author}>{author}</div>
                ))}
            </div>
        )
    }
}

export default Book