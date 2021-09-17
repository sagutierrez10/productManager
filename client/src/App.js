import logo from './logo.svg';
import './App.css';
import AllProducts from './components/AllProducts';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import OneProduct from './components/OneProduct';
import ProductForm from './components/ProductForm';

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
        <Route exatc path="/products/:idParams">
          <Link className="btn btn-success" to="/">Home</Link>
          <OneProduct></OneProduct>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
