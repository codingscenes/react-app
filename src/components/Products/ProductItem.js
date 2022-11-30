const ProductItem = (props) => {
  const toggleHandler = () => {};
  return (
    <div className='item'>
      <i className='ui coffee icon icon-item ' />
      <div className='content'>
        <a className='header'>{props.title}</a>
        <div className='description'>{props.description}</div>
      </div>
      <button
        className={`ui  button favorite-btn ${props.isFavorite && 'green'}`}
        onClick={toggleHandler}
      >
        <i className='icon heart'></i>{' '}
        {props.isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
};

export default ProductItem;
