import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import Users from './components/Pages/Users';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/users'>
          <Users />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
