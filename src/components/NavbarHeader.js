import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
function NavbarHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='py-3' fixed='top' >
      <Container>
        <Navbar.Brand href="#home">Orderi Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
          </Nav>
          <Nav>
            <button type="button" class="btn btn-light  position-relative">
            <i class="bi bi-cart me-1"></i>Pesanan
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                9
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;