
import { useEffect, useState } from 'react';
import ContactList from "./component/ContactList";
import list from "./listcontact"
import ContactForm from './component/ContactForm';
import ContactEditModal from './component/ContactEditModal';
import ColorPaper from './component/ColorPaper'
function App() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [addContact, setAddContact] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [search, setSearch] = useState('');
  const [isSorted, setIsSorted] = useState(false);
  const [bgPaper, setBgPaper] = useState("5");

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (!storedContacts) {
      localStorage.setItem("contacts", JSON.stringify(list));
      setContacts(list);
      setFilteredContacts(list);
    } else {
      setContacts(storedContacts);
      setFilteredContacts(storedContacts);
    }

  }, []);

  const updateLocalStorage = (updatedContacts) => {
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value); if (value.trim() === '') {
      setFilteredContacts(contacts);
    } else {
      const filtered = contacts.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase()));
      setFilteredContacts(filtered);
    }
  };
  const handleSort = () => {
    const sortedContacts = [...filteredContacts].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredContacts(isSorted ? contacts : sortedContacts);
    setIsSorted(!isSorted);
  };
  const handleRemove = (id) => {
    const updatedList = contacts.filter((person) => person.id !== id);
    setContacts(updatedList);
    setFilteredContacts(updatedList);
    updateLocalStorage(updatedList);
    search && setSearch('')
  };

  const handleAddContact = () => {
    setAddContact(true);
  };
  const handleAddNewContact = (newContact) => {
    const updatedList = [newContact, ...contacts];
    setContacts(updatedList);
    setFilteredContacts(updatedList);
    updateLocalStorage(updatedList);
    setAddContact(false);
  };
  const handleEditContact = (contact) => {
    setEditingContact(contact);
  };
  const handleSaveEdit = (updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
    contact.id === updatedContact.id ? { ...contact, ...updatedContact } : contact);
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
    updateLocalStorage(updatedContacts);
    setEditingContact(null);

  };

  return (
    <div className='flex-col flex justify-center items-center m-auto  h-full bg-earthy relative'>
      <h1 className=' font-bold text-xl bg-earthy-dark w-[90%] sm:w-[90%] md:w-3/4 lg:w-[45%]  p-3 text-center rounded-sm'>Phonebook contact list</h1>
      {addContact && (
        <ContactForm onAddContact={handleAddNewContact}
          onCancel={() => setAddContact(false)} />
      )
      }
      {editingContact && (
        <ContactEditModal
          contact={editingContact}
          onSave={handleSaveEdit}
          onCancel={() => setEditingContact(null)} />
      )}

      <div className='flex W-div justify-between mt-3'>
        <label className='flex  rounded-sm px-2 py-1 border-b-2 border-earthy-dark'>
          <img className='w-5 mb-1 m-auto' src='../img/web.png' />
          <input value={search} onChange={handleSearch} className='bg-earthy outline-none ml-2 text-[16px]' placeholder='Search' />
        </label>
        <div className='flex gap-1'>
          <button className='w-9 border-2  border-earthy-dark rounded-sm p-1' onClick={handleSort}>
            <img className='w-4 m-auto' src='../img/sort.png' />
          </button>
          <button className='w-16 bg-green rounded-sm p-1' onClick={handleAddContact}>
            <img className='w-4  m-auto' src='../img/add-user.png' />
          </button>
        </div>

      </div>

      <ContactList
        bgPaper={bgPaper}
        contacts={filteredContacts}
        onRemove={handleRemove}
        onEdit={handleEditContact} />

      <ColorPaper setBgPaper={setBgPaper} />

    </div>
  );
}

export default App;
