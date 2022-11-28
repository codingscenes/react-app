import { Redirect, Route, Switch } from 'react-router-dom';
import MainHeader from './components/MainHeader';

import ProductDetails from './pages/ProductDetails';
import Welcome from './pages/Welcome';

import React, { Suspense } from 'react';

const Products = React.lazy(() => import('./pages/Products'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Suspense fallback={<p>Please wait. Page is loading</p>}>
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
        </Suspense>
      </main>
    </div>
  );
}

export default App;
