import React from 'react'
import { Form, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import SearchBox from '../searchBar/SearchBox'

const Header = ({ setTitle, pageHandler }) => {
  return (
    <Navbar className="bg-body-tertiary px-3">
      <Navbar.Brand>DevTown</Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-sm`}
        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
            DevTown
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-center flex-grow-1">
            <SearchBox setQuery={setTitle} pageHandler={pageHandler} />
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>

  )
}

export default Header