const ProductItem = (props) => {
  return (
    <div className='item'>
      <i className='ui coffee icon icon-item ' />
      <div className='content'>
        <a className='header'>{props.title}</a>
        <div className='description'>{props.description}</div>
      </div>
      <button
        className='ui basic button favorite-btn'
        onClick={props.clikedItem}
      >
        <i className='icon heart'></i> Favorite
      </button>
    </div>
  );
};

export default ProductItem;
