import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import ProductComments from './ProductComments';

const ProductDetails = () => {
  const params = useParams();

  const match = useRouteMatch();
  console.log(match);

  const productId = params.productId;

  return (
    <div>
      <Route path={match.path} exact>
        <h2>This is product details.</h2>
        <Link to={`${match.url}/ProductComments`}>Check Comments</Link>
      </Route>
      <p>{productId === 'p1' && 'This is  about Mobile details'}</p>
      <p>{productId === 'p2' && 'This is  about Laptop details'}</p>
      <p>{productId === 'p3' && 'This is  about Tablet details'}</p>

      <Route path={`${match.path}/ProductComments`}>
        <ProductComments />
      </Route>
    </div>
  );
};

export default ProductDetails;
