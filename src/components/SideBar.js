import styled from 'styled-components';
import { useContext } from 'react';

import UserContext from '../contexts/UserContext'

export default function SideBar() {

    const { userData } = useContext(UserContext);
    
    return (
        <SideBarBox>
            <p>{userData.user.username}</p>
            <img alt='' src="https://postcron.com/pt/blog/wp-content/uploads/2016/05/foto-de-perfil-para-trabalho.jpg"></img>
            <p>Change Picture</p>
        </SideBarBox>
    )
}

const SideBarBox = styled.div`
width: 55vh;
height: 100%;
background-color: aquamarine;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
    border-radius: 50%;
    width:100px;
    height:100px;
}
p{
    margin: 20px 0px;
}

`;