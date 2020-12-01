import React from "react";

const Filter = (props) => {
  const renderFilter = () => {
    const person = props.persons.filter(
      (n) => n.name.toLocaleLowerCase() === props.filter.toLowerCase()
    );
    return person.map((per) => (
      <p key={per.name}>
        {per.name} {per.number}
      </p>
    ));
  };

  return (
    <>
      <form>
        <div>
          filter shown with
          <input
            value={props.filter}
            onChange={(e) => props.setFilter(e.target.value)}
          />
        </div>
      </form>
      {renderFilter()}
    </>
  );
};

export default Filter;
