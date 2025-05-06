import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const TopNav = () => {
  return (
    <Navbar expand="lg" className="topnav">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>

      {/* Move collapse outside Container and make it full width */}
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="w-100 px-3 py-2 d-lg-flex position-absolute top-100 start-0"
        style={{
          backgroundColor: window.innerWidth < 992 ? '#C5CBA4' : 'transparent',
        }}
      >
        <Nav className="mx-auto justify-content-evenly w-100 text-center">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#ourStory">Our Story</Nav.Link>
          <Nav.Link href="#venue">Event Venue</Nav.Link>
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          <Nav.Link href="#dressCode">Dress Code</Nav.Link>
          <Nav.Link href="#entourage">Wedding Entourage</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;
