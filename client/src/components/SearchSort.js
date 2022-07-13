import { useLocation } from 'react-router-dom';
import { Form, Dropdown } from 'react-bootstrap';

function SearchSort({ setSearch, setSort }) {
  let location = useLocation();

  return (
    <Form className="search-sort">
      {/* {if (location.pathName === '/athletes') {
       return <h1 className="page-title">athletes</h1>} else if (location.pathName === '/deals') {
        return <h1 className="page-title">deals</h1>
       } else if (location.pathName === '/collaborators' {
        return <h1 className="page-title">collaborators</h1>
       }} */}
      <Dropdown className="sort">
        <Dropdown.Toggle variant="success">Sort By:</Dropdown.Toggle>
        <Dropdown.Menu onChange={(e) => console.log('hi')}>
          <Dropdown.Item value="all">All</Dropdown.Item>
          <Dropdown.Item value="name">Name</Dropdown.Item>
          <Dropdown.Item value="sport">Sport</Dropdown.Item>
          <Dropdown.Item value="school">School</Dropdown.Item>
          <Dropdown.Item value="year">Year</Dropdown.Item>
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
