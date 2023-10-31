import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link ,NavLink} from 'react-router-dom';
import logo from './logo.png'
import './Navbar_PR.css'

function Navbar_PR() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
     <Link to={'/'}><img src={logo} className='logo'/></Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">            
           
<NavLink
  to={"/products"}
  className={({ isActive, isPending, isTransitioning }) =>
    [
      isPending ? "pending" : "",
      isActive ? "active" : "",
      isTransitioning ? "transitioning" : "",
    ].join(" ")
  }
   style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bolder" : "bold",
      color: isActive ? "#000" : "#00000088",
    };
  }}
>
  PRODUCTS
</NavLink>

         
<NavLink
  to={"/Restaurant"}
  className={({ isActive, isPending, isTransitioning }) =>
    [
      isPending ? "pending" : "",
      isActive ? "active" : "",
      isTransitioning ? "transitioning" : "",
    ].join(" ")
  }
   style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bolder" : "bold",
      color: isActive ? "#000" : "#00000088",
    };
  }}
>
  RESTAURANT
</NavLink>
          
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar_PR;