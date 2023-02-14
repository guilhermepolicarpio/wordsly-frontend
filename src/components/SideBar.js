import styled from 'styled-components';
import { useContext } from 'react';

import UserContext from '../contexts/UserContext'

export default function SideBar() {

    const { userData } = useContext(UserContext);
    console.log(userData)
    
    return (
        <SideBarBox>
            <p>{userData.user.username}</p>
            <img alt='' src={userData.user.userImage}></img>
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