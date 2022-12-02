import { useContext } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../Layout/Layout';
import { ProductContext } from './../../store-context/product-context';
import ProductItem from './ProductItem';

const FavoriteProduct = () => {
  // const products = useSelector((state) => state.teaShop.products);
  const products = useContext(ProductContext).products;
  const filteredProduct = products.filter((p) => p.isFavorite);
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
