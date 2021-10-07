import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        title: 'This is first component of react',
        books: [
            {id: 1, name: 'I love you so!'},
            {id: 2, name: 'My dad love me!'}
        ],
        totalNewBook: 0,
    }
    this.setCountBook = this.setCountBook.bind(this)
  }

  setCountBook(count){
      console.log(" runn ko",count);
      this.setState({totalNewBook: count})
  }

  render(){
      return (
          <div className="App">
              <h5>You have added {this.state.totalNewBook} new book(s)</h5>
              <header className="header">
                  <Header title="Header"/>
              </header>
              <Container books={this.state.books} callToParent={this.setCountBook}/>
              <Footer/>
          </div>
      );
  }

}

export default App;
