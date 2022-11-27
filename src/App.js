import { Redirect, Route, Switch } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>

          <Route path='/welcome'>
            <Welcome />
          </Route>

          <Route path='/products' exact>
            <Products />
          </Route>

          <Route path='/products/:productId'>
            <ProductDetails />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
