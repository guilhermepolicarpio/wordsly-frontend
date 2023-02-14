import styled from 'styled-components';
import { useContext } from 'react';
import ConfigContext from '../contexts/ConfigContext';
import Select from "react-select";
import Button from './Form/Button';
import { Link } from 'react-router-dom';

export default function OptionBox() {

    const { configData, setConfigData } = useContext(ConfigContext);

    const options = [
        { value: "1", label: "Easy" },
        { value: "2", label: "Intermediate" },
        { value: "3", label: "Hard" },
        { value: "4", label: "Expert" },
    ];

    const handleChange = (selectedOption) => {
        setConfigData(selectedOption);
        console.log(`Option selected:`, selectedOption);
    };

    return (
        <>
        <OptionContainer>
            <p>Select difficulty level</p>
            <>
                <Select options={options} width='180px' onChange={handleChange} autoFocus={true} />
                <LevelExplain>
                    <p>Currently</p>
                    <p>Difficulty level: {configData.label}</p>
                    <p>Number of blocks on game: {configData.value}</p>
                </LevelExplain>
              
            </>
        </OptionContainer>
         <Link to="/menu">
         <Button type="submit" >Salvar</Button>
        </Link>
        </>

    );
}

export const OptionContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 145vh;
height: 88vh;
`

export const LevelExplain = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 55vh;
height: 14vh;
background-color: white;
border-radius: 37%;

p:first-child{
    margin-bottom: 1.2vh;
    color: gray;
}

`