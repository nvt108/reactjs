import { useSelector, useDispatch } from 'react-redux'
import React from 'react';
const ListBook = () => {
    const books = useSelector((state) => state.book);
    return (
        <div>
            <h3>Alls Book</h3>
            <table border="1" className='table-list'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Book Name</th>
                </tr>
                </thead>
                <tbody>
                {
                    books.map((book, key) => {
                        return (<tr key={key}>
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
export default ListBook;