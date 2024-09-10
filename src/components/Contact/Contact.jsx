import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{number}</p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;