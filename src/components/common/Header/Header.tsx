import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import styles from "./styles.module.css";
import { HeaderBasket } from "../../ecommerce";
import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useAppSelector } from "@store/hooks";
const { headerContainer, headerLogo } = styles;
const Header = () => {
  const cartItems = useAppSelector((state) => state.addToCart.items);
  const totalQuantity = Object.values(cartItems).reduce((item, current) => {
    return item + current;
  }, 0);
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>Our</span>
          <Badge bg="info"> Ecom </Badge>
        </h1>
        <div>
          <HeaderBasket totalQuantity={totalQuantity} />
        </div>
      </div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/categories">
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About us
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
