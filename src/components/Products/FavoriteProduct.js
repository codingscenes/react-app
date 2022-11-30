import Layout from '../Layout/Layout';
import ProductItem from './ProductItem';
const PRODUCT_DATA = [
  {
    id: 'p1',
    title: 'Black Tea',
    description: 'De-stree yourself with yummy black tea',
    isFavorite: false,
  },
  {
    id: 'p2',
    title: 'Black Coffee',
    description: 'Rest yourself with yummy black Coffee',
    isFavorite: false,
  },
];
const FavoriteProduct = () => {
  const clickedItemHandler = () => {};
  return (
    <Layout>
      <div className='ui segment'>
        <div className='ui list'>
          {PRODUCT_DATA.map((item) => (
            <ProductItem
              key={item.id}
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

export default FavoriteProduct;
