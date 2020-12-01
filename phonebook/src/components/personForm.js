import React from "react";

const PersonForm = ({
  persons,
  newName,
  newNumber,
  setNewName,
  setNewNumber,
  phonebookServices,
  setPersons,
  setType,
  setMessage
}) => {
  const addPerson = (e) => {
    e.preventDefault();
    const pers = persons.find(
      (per) => per.name.toLowerCase() === newName.toLowerCase()
    );
    if (
      pers &&
      pers.number !== newNumber &&
      window.confirm(
        `${pers.name} already exist in the phonebook, do you want to update the number?`
      )
    ) {
      const personToUpdate = { ...pers, number: newNumber };
      phonebookServices
        .update(pers.id, personToUpdate)
        .then((updatedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== pers.id ? person : updatedPerson
            )
          );
          setType("success");
          setMessage(
            `${updatedPerson.name} phone number updated to ${updatedPerson.number} in the phonebook`
          );
        })
        .catch((error) => {
          console.log(error.message);
          setType("error");
          setMessage(`${pers.name} already deleted from the phonebook`);
          setTimeout(() => {
            setType(null);
            setMessage(null);
          }, 5000);
        });
    } else if (pers || newName === "") {
      alert(`${newName} already exist in the phonebook`);
      setType("error");
      setMessage(`${pers.name} already exist in the phonebook`);
      setTimeout(() => {
        setType(null);
        setMessage(null);
      }, 5000);
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      };
      phonebookServices.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(personObject));
        setNewName("");
        setNewNumber("");
      });
      setType("success");
      setMessage(`${personObject.name} is added to the phonebook`);
      setTimeout(() => {
        setType(null);
        setMessage(null);
      }, 5000);
    }
  };
  return (
    <>
      <form onSubmit={addPerson}>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
