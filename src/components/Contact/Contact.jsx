import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success('Контакт успішно видалений!');
      });
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{number}</p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Видалити
      </button>
    </div>
  );
}
export default Contact;