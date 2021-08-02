import './css/style.css';
import First from  './components/First';
import Home from  './components/Home';
import Product from  './components/Product';
import Profile from  './components/Profile';
import {BrowserRouter, Route, Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    

    <Route exact path="/" component={First}></Route>
    <Route path="/home" component={Home}></Route>
    <Route path="/product" component={Product}></Route>
    <Route path="/profile" component={Profile}></Route>

</BrowserRouter>
  );
}

export default App;
