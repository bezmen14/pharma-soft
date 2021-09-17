import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom';
import { removeUser } from '../../redux/actionCreators/userAC';

function Header() {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const HomeButton = () => {
    history.push('/');
  };

  const handlerLogout = () => {
    dispatch(removeUser())
    HomeButton()
  }

  useEffect(() => {
    if (user.id) {
    }
  }, [user]);

  return (
    <Navbar bg="dark" variant={"dark"} expand="lg">
      <Navbar.Brand className='ml-3'>PharmaSoft</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>

        <Navbar.Collapse
          style={{ maxHeight: '100px' }}
          className="justify-content-end">
          {user.name || localStorage.name ? (
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Navbar.Text>{`Hello, ${user.name || localStorage.name}!`}</Navbar.Text>
              <Nav.Link as={Link} to="/" onClick={handlerLogout}>Logout</Nav.Link>
            </Nav>
          ) : (
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Nav.Link as={Link} to="/login">Sign In</Nav.Link>
              <Nav.Link as={Link} to="/registration">Sign Up</Nav.Link>
            </Nav>
          )
          }
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar >
  );
}

export default Header;
