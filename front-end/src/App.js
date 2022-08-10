import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Products from './pages/products';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/products" component={Products} />
      </Switch>
    </Router>
  );
}

export default App;
