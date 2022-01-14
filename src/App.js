import { useState } from 'react';
import './App.css';
import { ContactList } from './ContactList';
import { Table } from './Table';
import data from "./mock-data.json";

function App() {
  const [contacts, setContacts] = useState(data);

  return (
    <div>
      <ContactList value={contacts} setContacts={setContacts} />
      <Table contacts={contacts} setContacts={setContacts} />
    </div>
  );
}
export default App;
