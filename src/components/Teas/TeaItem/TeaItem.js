import classes from './TeaItem.module.css';
import TeaItemForm from './TeaItemForm';
const TeaItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;
  return (
    <li className={classes.tea}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <TeaItemForm id={props.id} />
      </div>
    </li>
  );
};

export default TeaItem;
