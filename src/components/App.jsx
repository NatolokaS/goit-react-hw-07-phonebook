import { useSelector } from 'react-redux';
import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import {
  getError,
  getIsLoading,
  getPhonebookValue,
} from 'redux/phonebookSlice';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error';

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const phonebook = useSelector(getPhonebookValue);
  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      {phonebook.lenght === 0 && !error && !isLoading ? (
        "You don't have any contacts yet"
      ) : (
        <Filter />
      )}
      {isLoading && <Loader />}
      {error ? <Error /> : <Contacts />}
    </Container>
  );
};