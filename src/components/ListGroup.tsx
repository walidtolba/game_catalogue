import { useState } from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
}

function ListGroup({items, heading}: ListGroupProps) {
  const [selectedItem, setSelectedItem] = useState(-1);


  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item here!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={"list-group-item" + (selectedItem === index ? " active": "")} onClick={
            () => setSelectedItem(index)
          } key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
