import styled from 'styled-components';
import { useContext } from 'react';
import ConfigContext from '../contexts/ConfigContext';
import Select from "react-select";
import Button from './Form/Button';
import { Link } from 'react-router-dom';

export default function OptionBox() {

    const { configData,setConfigData } = useContext(ConfigContext);

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

    console.log(configData)
    return (
        <OptionContainer>
            <p>Selecionar o nível de dificuldade</p>
            <>
            <Select options={options} onChange={handleChange} autoFocus={true} />
            <Link to="/menu">
                <Button type="submit" >Salvar</Button>
            </Link>
            </>
        </OptionContainer>

    );
}

export const OptionContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 145vh;
height: 88vh;

`