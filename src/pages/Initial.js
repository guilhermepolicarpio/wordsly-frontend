import styled from 'styled-components';
import Header from '../components/Header';
import Menu from '../components/Menu';

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

const Container = styled.div`

  font-weight:700;
  text-transform:uppercase;
  border-radius: 5px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  background-image: linear-gradient(109.6deg, #DECBA4, #3E5151);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

 `;
