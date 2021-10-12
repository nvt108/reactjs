import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addBook, deleteBook, editBook} from "../action";
import ListBook from './ListBook';


export class BookManager extends Component {
    constructor(props, context) {
        super(props, context);
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
                            <tr>
                                <th>ID</th>
                                <th>Book Name</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            books.map((book, key) => {
                                return (<tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td className="name">
                                        <input type="text" defaultValue={book.name}  onChange={this.props.editBook.bind(this, book.id)}/></td>
                                    <td>
                                        <button onClick={this.props.deleteBook.bind(this,book.id)}>Delete</button>
                                    </td>
                                </tr>)
                            })
                        }
                        </tbody>
                    </table>
                    <button onClick={this.props.addBook}>Add New</button>
                    <div className="list-book">
                        <ListBook books={this.props.books}/>
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
const mapDispatchToProps = (dispatch) =>{
    return {
        addBook: () => dispatch(addBook()),
        editBook: (id, event) => dispatch(editBook(id,event)),
        deleteBook: (id) => dispatch(deleteBook(id)),
    }
};
export default connect(mapStatesToProps,mapDispatchToProps)(BookManager);
