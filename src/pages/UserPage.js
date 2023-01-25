import { Container } from '../components/Box.js'
import Header from '../components/Header';
import UserBox from '../components/UserBox.js';

export default function UserPage() {

    return (
        <>
            <Container>
                <Header />
                <UserBox/>
            </Container>
        </>
    );
}