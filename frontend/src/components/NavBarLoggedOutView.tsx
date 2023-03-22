import { Button } from "react-bootstrap";

interface NavBarLoggedInViewProps {
    onSignUpClicked: () => void,
    onLoginClicked: () => void
}

const NavBarLoggedOutView = ({onSignUpClicked, onLoginClicked}:NavBarLoggedInViewProps) => {
    return ( 
        <>
            <Button onClick={onSignUpClicked}>SignUp</Button>
            <Button onClick={onLoginClicked}>Login</Button>
        </>
     );
}
 
export default NavBarLoggedOutView;