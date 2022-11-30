import Layout from '../Layout/Layout';
import ProductItem from './ProductItem';
const PRODUCT_DATA = [
  {
    id: 'p1',
    title: 'Black Tea',
    description: 'De-stree yourself with yummy black tea',
    isFavorite: true,
  },
  {
    id: 'p2',
    title: 'Black Coffee',
    description: 'Rest yourself with yummy black Coffee',
    isFavorite: true,
  },
];
const FavoriteProduct = () => {
  const clickedItemHandler = () => {};
  const filteredProduct = PRODUCT_DATA.filter((p) => p.isFavorite);
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
