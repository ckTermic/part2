import React, { useState, useEffect } from "react";
import PersonsRender from "./components/persons";
import PersonForm from "./components/personForm";
import Filter from "./components/filter";
import phonebookServices from "./services/phonebook";
import MessageComponent from "./components/messageComponent";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);

  useEffect(() => {
    phonebookServices.getAll().then((initialResponse) => {
      setPersons(initialResponse);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <MessageComponent message={message} type={type} />
      <Filter persons={persons} filter={filter} setFilter={setFilter} />
      <h2>add a new </h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        phonebookServices={phonebookServices}
        setMessage={setMessage}
        setType={setType}
      />
      <h2>Numbers</h2>
      <PersonsRender
        persons={persons}
        setPersons={setPersons}
        phonebookServices={phonebookServices}
        setMessage={setMessage}
        setType={setType}
      />
    </div>
  );
};

export default App;
