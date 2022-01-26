import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand as={HashLink} to="/">
					EndGame Travel
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={HashLink} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={HashLink} to="/about">
							About
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link as={HashLink} to="/login">
							Login
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
