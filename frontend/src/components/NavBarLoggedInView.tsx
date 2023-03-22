import { Button, Navbar } from "react-bootstrap";
import { User } from "../models/users";
import * as NoteApi from "../network/notes_api";

interface NavBarLoggedInViewProps {
    user: User,
    onLogoutSuccessfull: () => void,

}

const NavBarLoggedInView = ({user, onLogoutSuccessfull}: NavBarLoggedInViewProps) => {
    
    async function logout() {
        try {
            await NoteApi.logout();
            onLogoutSuccessfull();        
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return ( 
        <>
            <Navbar.Text className="me-2">
                Signed in as : {user.username}
            </Navbar.Text>
            <Button onClick={logout}> Logout</Button>
        </>
     );
}
 
export default NavBarLoggedInView;