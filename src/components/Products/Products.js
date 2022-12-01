import { useStore } from '../../hooks-store/store';
import Layout from '../Layout/Layout';
import ProductItem from './ProductItem';

const Products = () => {
  const state = useStore()[0];

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
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
