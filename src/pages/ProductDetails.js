import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import AddComments from './AddComments';
import ProductComments from './ProductComments';

const dummyDetails = {
  p1: ['APPLE', 'HUAWEI', 'XIAOMI', 'OPPO', 'LENOVO', 'LG', 'NOKIA'],
  p2: ['APPLE MAC', 'Samsung', 'Dell', 'ASUS'],
  p3: ['APPLE', 'XIAOMI', 'LENOVO', 'LG'],
};
const ProductDetails = () => {
  const params = useParams();

  const productId = params.productId;

  let isSortingAsc = true;

  const sortAscFn = (a, b) => a.localeCompare(b);

  const sortDescFn = (a, b) => b.localeCompare(a);

  const list = dummyDetails[productId].sort(
    isSortingAsc ? sortAscFn : sortDescFn
  );

  const changeSortingHandler = () => { };
  
  return (
    <div className='details'>
      <button onClick={changeSortingHandler}>Sort Ascending</button>
      <h2>This is product details.</h2>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;
