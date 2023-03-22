import { Container, Nav, Navbar } from "react-bootstrap";
import { User } from "../models/users";
import NavBarLoggedInView from "./NavBarLoggedInView";
import NavBarLoggedOutView from "./NavBarLoggedOutView";

interface NavBarProps {
    loggedInUser: User | null,
    onSignUpClicked: () => void,
    onLoginClicked: () => void,
    onLogoutSuccessful: () => void,
}

const NavBar = ({loggedInUser ,onSignUpClicked, onLoginClicked, onLogoutSuccessful}: NavBarProps) => {
    return ( 
        <Navbar bg="primary" variant="dark" expand="sm" sticky="top">
            <Container>
                <Navbar.Brand>
                    Cool Notes App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        {loggedInUser
                        ? <NavBarLoggedInView user={loggedInUser} onLogoutSuccessfull={onLogoutSuccessful} />
                        : <NavBarLoggedOutView onLoginClicked={onLoginClicked} onSignUpClicked={onSignUpClicked}/>
                    }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
     );
}
 
export default NavBar;