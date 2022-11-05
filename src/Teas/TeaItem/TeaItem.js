import TeaItemForm from './TeaItemForm';
import classes from './TeamItem.module.css';

const TeaItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;
  return (
    <li className={classes.tea}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div> <TeaItemForm/> </div>
    </li>
  );
};

export default TeaItem;
