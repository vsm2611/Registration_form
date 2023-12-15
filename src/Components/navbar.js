import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,useLocation } from 'react-router-dom';

function Menu() {
    const location = useLocation();

    const logout = () => {
        localStorage.removeItem("token-info");
    };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/reg" className={location.pathname === '/reg' ? 'active' : ''}>Registration</Nav.Link>
            <Nav.Link as={Link} to="/history" className={location.pathname === '/history' ? 'active' : ''}>Data</Nav.Link>
            <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='/'>
                <button className='btn btn-primary ms-3' onClick={logout}>Logout</button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>      
    </>
  );
}

export default Menu;