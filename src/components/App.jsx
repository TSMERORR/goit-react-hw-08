import { useEffect } from 'react';
import './App.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contactsOps';

function App() {
  const disoatch = useDispatch();

  useEffect(() => {
    disoatch(fetchContacts());
  }, [disoatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;