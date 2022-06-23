import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact/AddContact";
import Body from "./components/Body/Body";
import List from "./components/List/List";
import "./App.css";
import Edit from "./components/Edit/Edit";

function App() {
  const API = "http://localhost:8001/name";
  const [contacts, setContacts] = useState([]);
  const [oneContact, setOneContact] = useState(null);
  // !CREATE
  async function addContact(newContact) {
    await axios.post(API, newContact);
    getContacts();
  }
  // !READ
  async function getContacts() {
    let res = await axios(API);
    setContacts(res.data);
  }
  // !DELETE
  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }
  // !EDIT
  async function getOneContact(id) {
    let res = await axios(`${API}/${id}`);
    // console.log(res.data);
    setOneContact(res.data);
  }
  async function updateContact(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
    getContacts();
  }

  return (
    <BrowserRouter>
      <Body />
      <Routes>
        <Route
          path="/"
          element={
            <List
              contacts={contacts}
              getContacts={getContacts}
              deleteContact={deleteContact}
            />
          }
        />
        <Route path="/add" element={<AddContact addContact={addContact} />} />
        <Route
          path="/edit/:id"
          element={
            <Edit
              oneContact={oneContact}
              getOneContact={getOneContact}
              updateContact={updateContact}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
