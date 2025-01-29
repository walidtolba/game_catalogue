function ListGroup() {
  const items = ["Meskiana", "Oum El Bouaghi", "Alger", "Oran", "Annaba"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item here!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
