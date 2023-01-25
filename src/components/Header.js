import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Header() {

  return (

    <HeaderStyle>
      <UserStyle>
        <Link to="/userpage">
          <img alt='' src="https://postcron.com/pt/blog/wp-content/uploads/2016/05/foto-de-perfil-para-trabalho.jpg"></img>
        </Link>
        <Link to="/userpage">
          <p>Hello, visitor</p>
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

  `;

