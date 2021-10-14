const saleOff = 10;
const initState = {
    books: [
        // {id: 1, name: 'I love you so', price: 10},
        // {id: 2, name: 'My dad love me', price: 9},
        // {id: 3, name: 'You!!', price: 13},
    ]
};


const getIndexOfBook = (books, bookId)  => {
    if(!books.length) return -1;
    for(var i = 0; i < books.length; i++) {
        var book = books[i];
        if(book.id === bookId) {
            return i;
        }
    }
    return -1;
};
export const book = (state = initState, action) => {
    let books = [];
    let nexBookId = 0;
    if('books' in state && state.books.length){
        books = state.books.slice();
        nexBookId = state.books.length;
    }
    switch (action.type) {
        case "ADD":
            nexBookId++;
            books.push({id: nexBookId, name: ''});
            break;
        case "EDIT":
            var index = getIndexOfBook(books,action.data.bookId);
            if(index != -1)  {
                books[index].name = action.data.name;
                books[index].status = action.data.status;
            }
            break;
        case "DELETE":
            var index = getIndexOfBook(books,action.bookId);
            if(index != -1){
                books.splice(index,1)
            }
            break;
        case "LIST":
            books = action.books;
            break;
        default:
            break;
    }
    return {books: books, saleOff: saleOff};
};
export default book;