import { Link } from 'react-router-dom';
const Products = () => {
  return (
    <div>
      <h1>These are the list of products!</h1>
      <ul>
        <li>
          <Link to='/products/p1'>Mobile</Link>
        </li>
        <li>
          <Link to='/products/p2'>Laptop</Link>
        </li>
        <li>
          <Link to='/products/p3'>Tablet</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
