import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import UserContext from '../contexts/UserContext'

export default function Header() {

  const { userData } = useContext(UserContext);

  return (

    <HeaderStyle>
      <UserStyle>
        <Link to="/userpage">
          <img alt='' src={userData.user.userImage}></img>
        </Link>
        <Link to="/userpage">
          <p>Hello, {userData.user.username}</p>
        </Link>
        <Link to="/menu">
           <ion-icon name="home-outline"></ion-icon>
        </Link>

      </UserStyle>
      <p>You already learn 500 words</p>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.div`
  color: white;
  height: 7vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p{
    margin-right: 2.7vh;
  }

  `;

const UserStyle = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  

  p{
    text-align: center;
    font-size: 2.1vh;
    margin-left: 3vh;
    :hover{
    color: rgb(0, 0, 0);
    transform: scale(1.1, 1.2);
    }
  }

  img{
    width: 5vh;
    height: 5vh;
    border-radius: 5vh;
    margin-left: 3vh;
  }

  ion-icon{
    width: 2.2vh;
    height: 2.2vh;
  }

  `;

