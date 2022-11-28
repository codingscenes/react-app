import { Navigate, Route, Routes } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' element={<Navigate to='/welcome' />} />
          <Route path='/welcome/*' element={<Welcome />}>
            <Route
              path='new-user'
              element={<p>Welcome new user! This is waste of your time.</p>}
            ></Route>
          </Route>
          <Route path='/products/*' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
// xyz.com/product-details/p1 => p1 product details
// xyz.com/product-details/p2 => p2 product details
// xyz.com/product-details/:<any value> => p2 product details

//
