import { useHistory, useParams } from 'react-router-dom';
const AddComments = () => {
  const history = useHistory();
  const params = useParams();

  const onAddComment = () => {
    // history.goBack();
    history.replace(`/products/${params.productId}`);
  };

  return (
    <section>
      <textarea rows={4} cols={4}></textarea>
      <button onClick={onAddComment}>Add</button>
    </section>
  );
};

export default AddComments;
