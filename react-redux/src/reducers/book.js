const initBook =[
    {id: 1, name: 'I love you so', status: 1},
    {id: 2, name: 'My dad love me', status: 1},
    {id: 3, name: 'You!!', status: 0},
];
var nexBookId = initBook.length;
const getIndexOfBook = (books, bookId)  => {
    for(var i = 0; i < books.length; i++) {
        var book = books[i];
        if(book.id === bookId) {
            return i;
        }
    }
    return -1;
};
export const bookReducer = (state = initBook, action) => {
    let books = state.slice();

    switch (action.type) {
        case "ADD":
            nexBookId++;
            books.push({id: nexBookId, name: '',status: 0});
            break;
        case "EDIT":
            var index = getIndexOfBook(books,action.data.bookId);
            if(index !== -1)  {
                books[index].name = action.data.name;
                books[index].status = action.data.status;
            }
            break;
        case "DELETE":
            var index = getIndexOfBook(books,action.bookId);
            if(index !== -1){
                books.splice(index,1)
            }
            break;
        case "LIST":
        default:
            break;
    }
    return books;
};

export default bookReducer;