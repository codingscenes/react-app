import { useStore } from '../../hooks-store/store';
import Layout from '../Layout/Layout';
import ProductItem from './ProductItem';

const Products = () => {
  const state = useStore()[0];

  const clickedItemHandler = () => {};
  return (
    <Layout>
      <div className='ui segment'>
        <div className='ui list'>
          {state.products.map((item) => (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              isFavorite={item.isFavorite}
              clikedItem={clickedItemHandler}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
