import React, { useState } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="searchable-list">
      <input onChange={handleChange} type="search" placeholder="Search" />
      <ul>
        {searchResults.map((item, index) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
