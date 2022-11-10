import classes from './Contact.module.css';
const AVATAR_URL = 'https://avatars.dicebear.com/api/adventurer/';
const Contact = (props) => {
  return (
    <li className={classes.contact}>
      <img src={`${AVATAR_URL}${props.avatar}`} alt={props.contactName} />
      <div className={classes.description}>
        <h2>{props.name}</h2>
        <b>{props.num}</b>
      </div>
    </li>
  );
};

export default Contact;
