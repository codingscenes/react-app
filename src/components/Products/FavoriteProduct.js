import Layout from '../Layout/Layout';
import ProductItem from './ProductItem';

import { useStore } from '../../hooks-store/store';

const FavoriteProduct = () => {
  const state = useStore()[0];

  const filteredProduct = state.products.filter((p) => p.isFavorite);
  return (
    <Layout>
      <div className='ui segment'>
        <div className='ui list'>
          {filteredProduct.map((item) => (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              isFavorite={item.isFavorite}
            />
          ))}
          {!filteredProduct.length && (
            <div className='item'>
              <h2>No favorite product available!</h2>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default FavoriteProduct;
