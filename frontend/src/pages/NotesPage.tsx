import { Container } from "react-bootstrap";
import NotePageLoggedOutView from "../components/NotePageLoggedOutView";
import NotePageLoggedInView from "../components/NotesPageLoggedInView";
import { User } from "../models/users";
import styles from "../styles/NotesPage.module.css";

interface NotesPageProps {
    loggedInUser: User | null,
}

const NotesPage = ( {loggedInUser}: NotesPageProps ) => {
    return ( 
        <Container className={styles.notesPage}>
            <>
                {loggedInUser
                    ? <NotePageLoggedInView />
                    : <NotePageLoggedOutView />
                }
            </>
        </Container>
     );
}
 
export default NotesPage;