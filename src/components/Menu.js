import styled from 'styled-components';
import { Link,useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext'

export default function Menu() {

    const { userData,setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    function handlerExitUser(){
    setUserData("");
    console.log(userData)
    navigate('/');
    }

    return (
        <StyledMenu>
            <StyledButton>
                <Link to="/learn">
                    <span>Learn Words</span>
                </Link>
            </StyledButton>

            <StyledButton>
                <Link to="/historic">
                    <span>Historic</span>
                </Link>
            </StyledButton>

            <StyledButton>
                <Link to="/ranking">
                    <span>Ranking</span>
                </Link>
            </StyledButton>

            <StyledButton>
                <Link to="/option">
                    <span>Options</span>
                </Link>
            </StyledButton>

            <StyledButton onClick = {handlerExitUser}>
                
                    <span>Exit</span>
               
            </StyledButton>
        </StyledMenu>
    )
}

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #E0E0E0;
  width: 145vh;
  height: 88vh;
  font-weight:700;
  color:#A0A0A0;
  text-transform:uppercase;
  border-radius: 5px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  background-image: linear-gradient(109.6deg, #DECBA4, #3E5151);
  
`;

const StyledButton = styled.div`
    height:8vh;
    width: 40vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    vertical-align: middle;
    text-align: center;
    background: white;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    border-radius: 3vh;
    margin: 1vh;
    padding: 2vh;

    :hover{
    background-color: rgb(225, 225, 225);
    color: rgb(0, 0, 0);

    animation: move-horizontal 0.4s linear ;
    animation-fill-mode: forwards;

@keyframes move-horizontal {
    from {transform: translateX(0%);}
    to {transform: translateX(5%);}
}
    }
  > a {
    text-decoration: none;
  }
  `;
