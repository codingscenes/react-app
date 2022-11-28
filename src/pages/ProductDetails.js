import { useHistory, useLocation, useParams } from 'react-router-dom';

const dummyDetails = {
  p1: ['APPLE', 'HUAWEI', 'XIAOMI', 'OPPO', 'LENOVO', 'LG', 'NOKIA'],
  p2: ['APPLE MAC', 'Samsung', 'Dell', 'ASUS'],
  p3: ['APPLE', 'XIAOMI', 'LENOVO', 'LG'],
};
const ProductDetails = () => {
  const params = useParams();

  const productId = params.productId;

  const history = useHistory();

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAsc = queryParams.get('sort') === 'asc';

  const sortAscFn = (a, b) => a.localeCompare(b);

  const sortDescFn = (a, b) => b.localeCompare(a);

  let productListing = <p>No product found!</p>;

  if (productId in dummyDetails) {
    const list = dummyDetails[productId].sort(
      isSortingAsc ? sortAscFn : sortDescFn
    );
    productListing = list.map((item) => <li key={item}>{item}</li>);
  }

  const changeSortingHandler = () => {
    history.push(
      `/products/${productId}?sort=${isSortingAsc ? 'desc' : 'asc'}`
    );
  };

  return (
    <div className='details'>
      <button onClick={changeSortingHandler}>
        Sort {isSortingAsc ? 'Descending' : 'Ascending'}
      </button>
      <h2>This is product details.</h2>
      <ul>{productListing}</ul>
    </div>
  );
};

export default ProductDetails;
