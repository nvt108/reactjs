import {createSelector} from "reselect/lib/index";

const bookItemSelector = state => state.book.books;
const bookSaleOffSelector = state => state.book.saleOff;

export const getBooks = createSelector(
    [bookItemSelector, bookSaleOffSelector],
    (books, saleOff) =>{
        return books.reduce(function (accumulator, currentBook) {
            currentBook.salePrice = 0;
            if(currentBook.price !== undefined){
                let price = currentBook.price;
                let newPrice = price - ((price*saleOff)/100);
                currentBook.salePrice = newPrice.toFixed(2);
            }
            accumulator.push(currentBook);
            return accumulator;
        }, []);
    }
);