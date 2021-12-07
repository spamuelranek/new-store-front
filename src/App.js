import logo from './logo.svg';
import './App.css';
import {Component}  from "react"
import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"

class App extends Component {

  render(){
    return (
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    );
  }
}

export default App;
