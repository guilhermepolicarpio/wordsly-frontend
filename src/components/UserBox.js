import styled from 'styled-components';
import SideBar from './SideBar';

export default function UserBox() {

    return (
        <Container>
            <SideBar/>
            <UserInformation>

            </UserInformation>
        </Container>
    )
}

const Container = styled.div`

display:flex;
width: 145vh;
  height: 88vh;
  `;



const UserInformation = styled.div`
width: 100%;
height: 100%;
background-color: white;

  `;