import Input from '../../UI/Input';
import classes from './TeaItemForm.module.css';
const TeaItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+Add</button>
    </form>
  );
};

export default TeaItemForm;
