import { fetchContacts } from '../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';

const ContactsPage = () => {
  const disoatch = useDispatch();

  useEffect(() => {
    disoatch(fetchContacts());
  }, [disoatch]);

  return (
    <div>
      <h1>Phone book</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;