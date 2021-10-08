import { useSelector, useDispatch } from 'react-redux'

const ListBook = () => {
    const books = useSelector((state) => state.book);
    return (
        <div>
            <h3>Alls Book</h3>
            <table border="1" className='table-list'>
                <thead>
                    <th>ID</th>
                    <th>Book Name</th>
                    <th>Status</th>
                </thead>
                <tbody>
                {
                    books.map((book, key) => {
                        return (<tr key={book.id}>
                            <td>{book.id}</td>
                            <td className="name">{book.name}</td>
                            <td className="">
                                {book.status ? 'Published' : 'Unpublished'}
                            </td>
                        </tr>)
                    })
                }
                </tbody>
            </table>
        </div>

    )
}
export default ListBook;