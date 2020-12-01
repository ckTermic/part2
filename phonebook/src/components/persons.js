import React from "react";

const PersonsRender = ({
  setType,
  setMessage,
  setPersons,
  persons,
  phonebookServices
}) => {
  const handleDelete = (id) => {
    const pers = persons.find((person) => person.id === id);
    if (
      pers &&
      window.confirm(`do you want to delete ${pers.name} from the phonebook?`)
    ) {
      phonebookServices
        .remove(id)
        .then((deletedPerson) => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          console.log(error.response);
        });
      setType("success");
      setMessage(`${pers.name} was deleted from the server`);
      setTimeout(() => {
        setType(null);
        setMessage(null);
      }, 5000);
    }
    console.log(persons);
  };

  const renderPersons = () =>
    persons.map((per) => (
      <div key={per.name}>
        <p>
          {per.name} {per.number}{" "}
          <button onClick={() => handleDelete(per.id)}>delete</button>
        </p>
      </div>
    ));
  return <div>{renderPersons()}</div>;
};

export default PersonsRender;
