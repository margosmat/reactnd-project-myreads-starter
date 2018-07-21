import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Library from './Library'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    shelves: [
      {title: 'Currently Reading', id: 'currentlyReading'}, 
      {title: 'Want to Read', id: 'wantToRead'}, 
      {title: 'Read', id: 'read'}]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  updateBook = (book, shelf) => {
    book.shelf = shelf;
    this.setState((state) => ({
      books: (state.books.filter((item) => item.id !== book.id).concat(book))
    }))
    BooksAPI.update(book, shelf);
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        <Route path='/' exact render={() => (
          <Library
            books={this.state.books}
            shelves={this.state.shelves}
            updateBook={this.updateBook}
          />
        )} />
        <Route path='/search' render={() => (
          <SearchBooks
            updateBook={this.updateBook}
            books={this.state.books}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
