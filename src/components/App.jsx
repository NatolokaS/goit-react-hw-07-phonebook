import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { ContactsForm } from'./ContactsForm/ContactsForm';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import Loader from './Loader/Loader';


export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading =useSelector(selectIsLoading);
  const error = useSelector(selectError)
const dispatch = useDispatch();
useEffect (()=>{
  dispatch(fetchContacts())
  
},[dispatch])
  return (
    <div className={css.section}>
      <h1 className={css.mainTitle}> Phonebook</h1>
      <ContactsForm />
      {error!==null&& <p>error</p>}
			{isLoading&&<Loader/>}
     {contacts.length >0 ? (<div>
      <h2 className={css.secondaryTitle}>Contacts</h2>
     
          <Filter /> 
    <ContactList/>
      </div>) :<p>Unfortunately you don't have any contacts in your Phonebook</p>} 
      
      
    </div>
  );
};