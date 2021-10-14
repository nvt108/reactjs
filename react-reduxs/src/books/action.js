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
    return {
        type: 'LIST'
    }
};