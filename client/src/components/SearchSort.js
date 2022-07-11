import { useState } from 'react';
import { Form, Dropdown } from 'react-bootstrap';

function SearchSort({ setSearch }) {
  return (
    <Form className="search-sort">
      <Dropdown className="sort">
        <Dropdown.Toggle variant="success">Sort By:</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Name</Dropdown.Item>
          <Dropdown.Item>Sport</Dropdown.Item>
          <Dropdown.Item>University</Dropdown.Item>
          <Dropdown.Item>Year</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Form.Group className="mb-3 search">
        <Form.Control
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
}

export default SearchSort;
