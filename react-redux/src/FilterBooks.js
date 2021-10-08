import React, { Component } from 'react';
import {connect} from 'react-redux';

class  FilterBooks extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const books = this.props.books;
        return (
            <div >
                <h3>Published Book</h3>
                <table border="1" className='table-list'>
                    <thead>
                        <th>ID</th>
                        <th>Book Name</th>
                    </thead>
                    <tbody>
                    {
                        books.map((book, key) => {
                            return (<tr key={book.id}>
                                <td>{book.id}</td>
                                <td className="name">{book.name}</td>
                            </tr>)
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
const getFilterBook = (books, filter) => {
    switch (filter){
        case 'PUBLISHED':
            return books.filter(book => book.status);
        case 'UNPUBLISHED':
            return books.filter(book => !book.status);
        default:
            return books;

    }
};

const mapStateToProps = (state) =>{
    return {
        books: getFilterBook(state.book,'PUBLISHED')
    }
};

export default connect(mapStateToProps, null)(FilterBooks)