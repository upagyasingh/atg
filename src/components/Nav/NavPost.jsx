import { ArrowLeft, UserPlus2 } from "lucide-react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { useContext } from "react";
import { GroupContext } from "../../context/GroupContext";

function NavPost() {
  const ctx = useContext(GroupContext);
  return (
    <Navbar
      expand="lg"
      className="bg-white"
      style={{
        position: "sticky",
        top: "65px",
        zIndex: 2,
        borderBottom: " 2px solid lightgrey",
      }}
    >
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">All Post (362) </Nav.Link>
            <Nav.Link href="#action1">Action </Nav.Link>
            <Nav.Link href="#action1">Event </Nav.Link>
            <Nav.Link href="#action1">Education </Nav.Link>
            <Nav.Link href="#action1">Job </Nav.Link>
          </Nav>

          <Button variant="outline-success mx-2">
            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={NavLink}>Write a Post </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Hello there!</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>{" "}
          </Button>
          <Button
            variant="primary"
            onClick={() => ctx.setJoinGroup((prv) => !prv)}
          >
            {" "}
            <div className="flex gap-2 p-1">
              {ctx.joinGroup ? (
                <>
                  <ArrowLeft /> Leave Group
                </>
              ) : (
                <>
                  <UserPlus2 /> Join Group
                </>
              )}
            </div>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavPost;
