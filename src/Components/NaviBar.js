import { Link,Outlet } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


function NaviBar(){
return <>
<Navbar bg="dark" variant="dark">
    <Container className='d-flex justify-content-start'>
    <Navbar.Brand>SehajBlogs</Navbar.Brand>
    <Nav as="ul">
      <Nav.Item as="li">
        <Link className="text-decoration-none nav-link" to="/">Home</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link className="text-decoration-none nav-link" to="/about">About</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link className="text-decoration-none nav-link" to="/articles-list">Articles</Link>
      </Nav.Item>
    </Nav>
    </Container>
  </Navbar>
</>
}

export default NaviBar;