import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { getPhonebookValue } from 'redux/phonebookSlice';
import { ContactItemStyle, ContactsStyle } from './Contacts.styled';
import { ButtonStyle } from 'components/App.styled';
import { useEffect } from 'react';
import {
  delContactThunk,
  getContactsThunk,
} from 'components/services/FetchContacts';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const phonebook = useSelector(getPhonebookValue);
  const filterPhonebook = useSelector(getFilter);

  const lowerFilter = filterPhonebook.toLowerCase();
  const visibleContacts = phonebook.filter(
    ({ name, phone }) =>
      name.toLowerCase().includes(lowerFilter) || phone.includes(lowerFilter)
  );

  const deleteContact = contactId => {
    dispatch(delContactThunk(contactId));
  };
  return (
    <ContactsStyle>
      {visibleContacts.map(({ name, phone, id }) => (
        <ContactItemStyle key={id}>
          <p>
            {name}: {phone}
          </p>
          <ButtonStyle type="botton" onClick={() => deleteContact(id)}>
            Delete
          </ButtonStyle>
        </ContactItemStyle>
      ))}
    </ContactsStyle>
  );
};