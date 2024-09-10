import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.contactList}>
        {filteredContacts.map(contact => {
          return (
            <li className={css.contactItem} key={contact.id}>
              <Contact
                id={contact.id}
                name={contact.name}
                number={contact.number}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ContactList;