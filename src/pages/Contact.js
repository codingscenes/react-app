const Contact = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className='ui form '>
        <div className='field'>
          <label>Write your message:</label>
          <textarea rows='2'></textarea>
        </div>
        <button className='positive ui button'>Submit</button>
      </div>
    </form>
  );
};

export default Contact;
