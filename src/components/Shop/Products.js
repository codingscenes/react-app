import ProductItem from './ProductItem';

const DUMMY_PRODUCTS = [
  {
    id: 'x1',
    price: 10,
    title: 'Coffee Mug',
    description: 'A hard and tough coffee mug for coffee lovers!',
  },
  {
    id: 'x2',
    price: 10,
    title: 'Tea Cup',
    description: 'A wonderful Cup for Tea lovers!',
  },
];
const Products = (props) => {
  return (
    <section className='products'>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
