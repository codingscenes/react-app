import ProductItem from './ProductItem';

const Products = (props) => {
  return (
    <section className='products'>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='WorldCup'
          price={140}
          description='Buy this cup and offer to the world!'
        />
      </ul>
    </section>
  );
};

export default Products;
