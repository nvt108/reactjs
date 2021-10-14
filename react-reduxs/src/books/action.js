// import fetch from "node-fetch";
export const addBook = () => {
    return {
        type: "ADD",
    };
};
export const editBook = (bookId, event) => {
    return {
        type: "EDIT",
        data:{
            name: event.target.value,
            bookId: bookId,
        }
    };
};

export const deleteBook = (bookId) => {
    return {
        type: "DELETE",
        bookId: bookId
    };
};

export const listBook = () =>{
    return dispatch => {
        fetch("http://localhost:5000/api/users/list").then(res => res.json()).then(
            (result) => { dispatch(fetchBooks(result))},
            (error) => { dispatch(handlerError(error)) }
        );
    }
};

export const handlerError = (error) => {
    return {
        type: 'API_ERROR',
        message: error
    }
}

const fetchBooks = (books) => {
    return {
        type: 'LIST',
        books: books
    }
};
