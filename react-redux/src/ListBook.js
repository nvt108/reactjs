import { useSelector, useDispatch } from 'react-redux'

const ListBook = () => {
    const books = useSelector((state) => state.book);
    return (
        <div>
            <h3>List Book</h3>
            <table border="1" className='table-list'>
                <head>
                    <th>ID</th>
                    <th>Book Name</th>
                </head>
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
export default ListBook;