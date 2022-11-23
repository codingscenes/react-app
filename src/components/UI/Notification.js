import './Notification.css';
const Notification = (props) => {
  let statusClasses = '';
  if (props.status === 'pending') statusClasses = 'pending';
  if (props.status === 'error') statusClasses = 'error';
  if (props.status === 'success') statusClasses = 'success';

  return (
    <section className={`notification ${statusClasses}`}>
      <div>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
      </div>
    </section>
  );
};

export default Notification;
