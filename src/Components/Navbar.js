import React from "react";
import { Navbar, Nav, Button, Form, NavDropdown, Image } from "react-bootstrap";
import cartIMG from "../img/shoppingcart.png";
import { Link } from "react-router-dom";
import { useStore } from "../Store/store";
import { useHistory } from "react-router-dom";

function NavBar() {
  const cart = useStore((state) => state.cart);
  const user = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);

  const history = useHistory();
  const reRoute = (e) => history.push("/");

  const logout = (e) => {
    // console.log(user);
    dispatch({ type: "LOGOUT" });
    reRoute();
  };

  return (
    <>
      <Navbar variant="dark" expand="lg">
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3 className="logo">Book Store</h3>
          </Link>
        </Navbar.Brand>
        <Form inline></Form>
        <div className="myAccount">
          <NavDropdown
            title={
              user.accessToken ? `Hi, ${user.user.firstName}` : "My Account"
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item to="#action/3.4">
              <div className="signInButton">
                {!user.accessToken ? (
                  <Button
                    variant="outline-dark"
                    style={{ backgroundColor: "rgb(240, 224, 209)" }}
                  >
                    <Link
                      to="/LogInPage"
                      style={{
                        color: "black",
                      }}
                    >
                      Sign In
                    </Link>
                  </Button>
                ) : (
                  <Button variant="outline-dark" onClick={logout}>
                    <a to="/">Log Out</a>
                  </Button>
                )}
              </div>
            </NavDropdown.Item>
            {!user.accessToken ? (
              <NavDropdown.Item to="#action/3.1">
                <Link to="/SignUp" style={{ color: "black" }}>
                  Create an Account
                </Link>
              </NavDropdown.Item>
            ) : (
              ""
            )}
            <NavDropdown.Divider />
            {user.accessToken ? (
              <NavDropdown.Item to="#action/3.1">
                <Link to="/UserProfile" style={{ color: "black" }}>
                  My Page
                </Link>
              </NavDropdown.Item>
            ) : (
              ""
            )}

            {user.accessToken ? (
              <NavDropdown.Item to="#action/3.4">
                Credit Balance <h5>${user.user.creditBalance}</h5>{" "}
              </NavDropdown.Item>
            ) : (
              ""
            )}
          </NavDropdown>

          {user.accessToken ? (
            <Link to="/shoppingCart">
              <img className="cart" src={cartIMG} />
            </Link>
          ) : (
            ""
          )}
          {user.accessToken ? <h5>{cart.length}</h5> : ""}
        </div>
      </Navbar>

      <Navbar variant="light">
        <Nav className="mr-auto" style={{ margin: "auto" }}>
          <Link to="/Allbooks" className="navbar-link">
            <h4 className="navbar-items"> All </h4>
          </Link>
          <Link to="/AllArtBooks" className="navbar-link">
            <h4 className="navbar-items"> Art </h4>
          </Link>
          <Link to="/AllCodingBooks" className="navbar-link">
            <h4 className="navbar-items"> Coding </h4>
          </Link>
          <Link to="/AllCookingBooks" className="navbar-link">
            <h4 className="navbar-items"> Cooking </h4>
          </Link>
          <Link to="/AllHistoryBooks" className="navbar-link">
            <h4 className="navbar-items"> History </h4>
          </Link>
          <Link to="/AllMathBooks" className="navbar-link">
            <h4 className="navbar-items"> Math </h4>
          </Link>
          <Link to="/AllPetsBooks" className="navbar-link">
            <h4 className="navbar-items"> Pets </h4>
          </Link>
          <Link to="/Searchresult" className="navbar-link">
            <h4 className="navbar-items"> Search </h4>
          </Link>
        </Nav>
        <Form inline></Form>
      </Navbar>
    </>
  );
}
export default NavBar;
