import React from 'react';
import {connect} from 'react-redux';
import { getBooks } from '../selector';

class ListBook extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let books = this.props.books;
        if (!books.length)
            return (<p>Loading data</p>);
        return (
            <div className="my-listbook">
                <h3>Alls Book</h3>
                <table border="1" className='table-list'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Book Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        books.map((book, key) => {
                            return (<tr key={key}>
                                <td>{book.id}</td>
                                <td className="name">{book.name}</td>
                                    <td className="name">{book.salePrice}</td>
                            </tr>)
                        })
                    }
                    </tbody>
                </table>
            </div>

        )
    }
}
const mapStateToProps = (state) =>{
    return {
        books: getBooks(state),
    }
};

export default connect(mapStateToProps)(ListBook);