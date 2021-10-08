import './App.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addBook, deleteBook, editBook} from "./actions/book";
import ListBook from './ListBook';
import FilterBooks from './FilterBooks';

export class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.addBook = this.addBook.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    addBook(){
        this.props.dispatch(addBook());
    }

    editBook(bookId, event){
        this.props.dispatch(editBook(bookId, event));
    }

    deleteBook(bookId){
        this.props.dispatch(deleteBook(bookId));
    }

    render() {
        const books = this.props.books;
        if (!books)
            return (<p>Loading data</p>);
        return (
            <div className="App">
                <div className="container">
                    <h1>Book Manager</h1>
                    <table border="1" className='table-form'>
                        <thead>
                            <th>ID</th>
                            <th>Book Name</th>
                            <th>Delete</th>
                        </thead>
                        <tbody>
                        {
                            books.map((book, key) => {
                                return (<tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td className="name">
                                        <input type="text" defaultValue={book.name}  onChange={this.editBook.bind(this, book.id)} value={book.name}/></td>
                                    <td>
                                        <button onClick={this.deleteBook.bind(this,book.id)}>Delete</button>
                                    </td>
                                </tr>)
                            })
                        }
                        </tbody>
                    </table>
                    <button onClick={this.addBook}>Add New</button>

                    <div className="list-book">
                        <ListBook books={this.props.books}/>
                        <FilterBooks />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        books: state.book
    }
};
export default connect(mapStatesToProps)(App);
