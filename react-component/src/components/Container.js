import React from 'react'

export default class Container extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: 'Container',
            detail: 'This is Class Component',
            books: this.props.books,
            totalNewBook: 0
        };
        this.addNewBook = this.addNewBook.bind(this);
    }

    addNewBook(){
        let newId = this.state.totalNewBook + 1;
        this.setState({books: this.state.books.concat({id: newId, name: `You are hero ${newId}!`})});
        this.setState({totalNewBook: newId},() => {
            this.props.callToParent(this.state.totalNewBook);
        });

    }

    render(){
        return (git
            <div className="container">
                <h1>This is {this.state.title} Component</h1>
                <h3>{this.state.detail}</h3>
                <button onClick={() => this.setState({detail: 'This is new detail page'})}>Change Detail</button>
                <button onClick={this.addNewBook}>Add New Book</button>
                <di>
                    <h3>List Book ({this.state.books.length})</h3>
                    {
                        this.state.books.map((book, key) =>{
                            return <li key={key}> ID: {book.id}, Name: {book.name}</li>
                        })
                    }
                </di>
            </div>
        )
    }

}
