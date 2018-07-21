# MyReads Project

This is the repository for the project MyReads. MyReads allows you to track the state of your library with the simple and responsive UI.

## Starting the app

Prerequesites: NodeJS and npm installed.

To get the app started:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Using the MyReads app

On the main page are available three shelves. You can move your books from shelf to shelf by clicking on the green button on the right side of a book, and clicking the shlef name you move book to.
You can also search for new books. To search, click the plus button on the right bottom of the page. Then on the new page insert details of the book you're searching in the search bar. During your typing the results will show up. Then you can put the searched books on your shelves similarly as on the main page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
