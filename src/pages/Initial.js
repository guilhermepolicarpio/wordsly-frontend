import Header from '../components/Header';
import Menu from '../components/Menu';
import {Container} from '../components/Box.js'

export default function Initial() {
    return (
        <>
            <Container>
                <Header />
                <Menu />
            </Container>
        </>
    );
}

