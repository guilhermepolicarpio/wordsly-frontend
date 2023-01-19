import styled from 'styled-components';

export default function Header() {

    return (
        <HeaderStyle>
            <UserStyle>
                <img alt='' src="https://postcron.com/pt/blog/wp-content/uploads/2016/05/foto-de-perfil-para-trabalho.jpg"></img>
                <p>Hello, visitor</p>
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

  p:last-child{
    margin-right: 3vh;
  }

  `;

const UserStyle = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  p{
    text-align: center;
    font-size: 2.2vh;
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