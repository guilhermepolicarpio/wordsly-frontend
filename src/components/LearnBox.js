import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useGetWord from '../hooks/api/useGetWord';

export default function LearnBox() {

    const [selectedWord, setSelectedWord] = useState(0);
    const { word } = useGetWord();

    useEffect(()=>{

    },[])

    return (

        <Learn>
            <WordBox onClick={setSelectedWord} >
               <span>{word}</span> 
            </WordBox>
            <OptionBox>
                <CheckBox ><p>Yes</p></CheckBox>
                <CheckBox ><p>Não</p></CheckBox>
            </OptionBox>
            <FooterBox>

            </FooterBox>
        </Learn>

    );
}

export const WordBox = styled.div`

width: 200px;
height: 50px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
`
export const OptionBox = styled.div`

display: flex;
width: 40vh;

`

export const CheckBox = styled.div`

width: 200px;
height: 50px;
margin: 1.8vh;
background-color: white;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
background-color: ${props => props.selectedOption ? '#FFEED2' : '#EBEBEB'};

:hover{
    cursor: pointer;
}
`

export const Learn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 145vh;
height: 88vh;

`

export const FooterBox = styled.div`

position: absolute;
width:80vh;
height: 50px;
margin-bottom: 10vh;
bottom:0px;
background-color: white;
`