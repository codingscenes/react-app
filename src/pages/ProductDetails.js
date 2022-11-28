import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = () => {

  const params = useParams();

  const productId = params.productId;

  const navigate = useNavigate();

  const goToWelcomeHandler = () => {
    // history.push('/welcome') // new page ko push stack/screen
    // navigate('/welcome', {replace: true})
    navigate(1)// naivagte like history
  }
  return (
    <div>
      <h2>This is product details.</h2>
      <p>{productId === 'p1' && 'This is  about Mobile details'}</p>
      <p>{productId === 'p2' && 'This is  about Laptop details'}</p>
      <p>{productId === 'p3' && 'This is  about Tablet details'}</p>
      <button onClick={goToWelcomeHandler}>Go To Welcome Page</button>
    </div>
  );
};

export default ProductDetails;
