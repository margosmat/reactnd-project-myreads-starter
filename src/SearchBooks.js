import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
    state = {
        query: '',
        searchResult: [],
    }

    updateQuery = (query) => {
        this.setState({ query: query })
        if (!query.length) this.setState({ searchResult: [] })
    }

    searchForBook = (query, books) => {
        BooksAPI.search(query).then((searchResult) => {
            if (searchResult === undefined)
            {
                this.setState({ searchResult: [] });
            } else {
                this.setState({searchResult}, () => {
                    if (!this.state.searchResult.length) return;
                    for (let searchResultBook of this.state.searchResult)
                    {
                        for (let book of books)
                        {
                            if (book.id === searchResultBook.id)
                            {
                                searchResultBook.shelf = book.shelf;
                            }
                            else {
                                searchResultBook.shelf = 'none';
                            }
                            this.setState({searchResult: searchResult.filter((item) => item.id !== searchResultBook.id).concat(searchResultBook)});
                        }
                    }
                });
            }
        })
    }
    
    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className='close-search'>Close</Link>
              <div className="search-books-input-wrapper">
                {
                /*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                    type="text" 
                    placeholder="Search by title or author" 
                    value={this.state.query} 
                    onChange={(event) => {
                        this.updateQuery(event.target.value);
                        this.searchForBook(event.target.value, this.props.books);
                    }} />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {(this.state.searchResult.length > 0) && this.state.searchResult.map((book) =>(
                    <li key={book.id}>
                        <Book 
                        book={book}
                        updateBook={this.props.updateBook}
                        />
                    </li>
                ))}
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks