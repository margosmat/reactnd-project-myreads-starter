import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
    render() {
        const { shelf, books, updateBook } = this.props;
        return (
            <div>
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
                        <li key={book.id}>
                            <Book 
                                book={book}
                                updateBook={updateBook}
                            />
                        </li>
                    ))}
                </ol>
                </div>
            </div>
        )
    }
}

export default Shelf