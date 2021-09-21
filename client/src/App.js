import logo from './logo.svg';
import './App.css';
import AllProducts from './components/AllProducts';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import OneProduct from './components/OneProduct';
import ProductForm from './components/ProductForm';
import Edit from './components/Edit';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h1>Product Manager</h1>
      <Switch>
        <Route exact path="/">
          <ProductForm></ProductForm>
          <AllProducts></AllProducts>
        </Route>
        <Route exact path="/products/:idParams">
          <Link className="btn btn-success" to="/">Home</Link>
          <OneProduct></OneProduct>
        </Route>
        <Route exact path= "/products/:idParams/edit">
          <Edit></Edit>
          <Link className="btn btn-success" to="/">Home</Link>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
