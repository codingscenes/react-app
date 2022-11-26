import { useParams } from 'react-router-dom';

const ProductDetails = () => {

  const params = useParams();

  const productId = params.productId;


  return (
    <div>
      <h2>This is product details.</h2>
      <p>{productId === 'p1' && 'This is  about Mobile details'}</p>
      <p>{productId === 'p2' && 'This is  about Laptop details'}</p>
      <p>{productId === 'p3' && 'This is  about Tablet details'}</p>
    </div>
  );
};

export default ProductDetails;
