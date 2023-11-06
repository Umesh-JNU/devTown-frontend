import React, { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ setQuery, pageHandler }) => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="search-box float-end">
      <InputGroup>
        <Form.Control
          aria-label="Search Input"
          placeholder="Search"
          type="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <InputGroup.Text
          style={{ cursor: "pointer" }}
          onClick={() => {
            setQuery(searchInput);
            pageHandler(1);
          }}
        >
          <FaSearch />
        </InputGroup.Text>
      </InputGroup>
    </div>
  )
}

export default SearchBox;