import { Container } from '../components/Box.js'
import LearnBox from '../components/LearnBox.js';
import Header from '../components/Header';

export default function Learn() {

    return (
        <>
            <Container>
                <Header />
                <LearnBox/>
            </Container>
        </>
    );
}