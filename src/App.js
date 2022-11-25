import { Route } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path='/welcome'>
          <Welcome />
        </Route>

        <Route path='/products'>
          <Products />
        </Route>

        <Route path='/product-details/:productId'>
          <ProductDetails />
        </Route>
      </main>
    </div>
  );
}

export default App;
// xyz.com/product-details/p1 => p1 product details
// xyz.com/product-details/p2 => p2 product details
// xyz.com/product-details/:<any value> => p2 product details

//
