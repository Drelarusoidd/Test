import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom';
import { Route } from  'react-router-dom';
import catsList  from  './catsList';
import  './App.css';

const BaseLayout = () => (
  <div className="container-fluid">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Some text</a>
  </nav>
  <p>Text</p>
    <div className="content">
      <Route path="/" exact component={catsList} />
    </div>
  </div>
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    )
  }
}

export default App;