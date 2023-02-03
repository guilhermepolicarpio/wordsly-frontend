import styled from 'styled-components';
import { useEffect, useState, useContext } from 'react';
import { insertAnswer } from '../hooks/services/answerApi';
import UserContext from '../contexts/UserContext'

export default function LearnBox() {

    const [citation, setCitation] = useState('');
    const [randomAuthors, setRandomAuthors] = useState([]);
    const [correctAnswer, setcorrectAnswer] = useState('');
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [change, setChange] = useState(null);
    const { userData } = useContext(UserContext);

    var data, correctAuthor;

    const randonNumber = () => Math.floor(Math.random() * data.length) + 1;


    useEffect(() => {
        getCitation();
    }, [change]);

    async function getCitation() {
        try {
            const res = await fetch('https://type.fit/api/quotes');
            data = await res.json();
            const index = randonNumber()
            setCitation(data[index]);
            correctAuthor = data[index].author;
            setcorrectAnswer(correctAuthor);
            setRandomAuthors(getRandonAuthors(data, index, correctAuthor));
            return randomAuthors
        }
        catch (err) {
            console.log(err);
        }
    }

    function getRandonAuthors(data, index, correctAuthor) {
        const options = data.map(data => data.author);
        options.splice(index, 1);

        const randomOptions = [];

        for (let i = 0; i < 2; i++) {
            const randomOptionIndex = Math.floor(Math.random() * options.length);
            if (options[randomOptionIndex] !== null) {
                randomOptions.push(options[randomOptionIndex]);
                options.splice(randomOptionIndex, 1);
            }
            else if (options.includes(options[randomOptionIndex])) {
                i--;
            }
            else {
                randomOptions.push("unknow");
                options.splice(randomOptionIndex, 1);
            }
        }

        randomOptions.push(correctAuthor);
        randomOptions.sort(() => Math.random() - 0.5);

        return randomOptions
    }

    function handleSubmit() {
        const userId = userData.user.id;
        if (selectedAnswer === correctAnswer) {
            alert("Resposta correta!");
            insertAnswer(true, userId)
            setChange(!change)
        } else {
            alert("Resposta incorreta. Tente novamente.");
            insertAnswer(false, userId)
            setChange(!change)
        }
    }

    function handleAnswerSelection(authors) {
        setSelectedAnswer(authors);
    }

    return (

        <Learn>
            <WordBox >
                <span>{citation.text}</span>
            </WordBox>
            <OptionBox>
                {
                    randomAuthors ? (<>
                        {randomAuthors.length > 0 && (

                            randomAuthors?.map((authors, index) => <CheckBox onClick={() => handleAnswerSelection(authors)}>
                                <p>{authors}</p>
                            </CheckBox>)
                        )
                        }
                    </>)
                        :
                        <></>

                }
            </OptionBox>
            <FooterBox>
                <p>Confirma ?</p>
                <AnswerBox onClick={() => handleSubmit()}><p>Sim</p></AnswerBox>
                <AnswerBox><p>Não</p></AnswerBox>
            </FooterBox>
        </Learn>

    );
}

export const WordBox = styled.div`

width: fit-content;
max-width: 60%;
height: 150px;
border-radius: 25%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 10vh;
font-size: 3vh;
`
export const OptionBox = styled.div`
display: flex;
width: fit-content;
`

export const CheckBox = styled.div`
width: fit-content;
min-width: 150px;
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
display: flex;
width: fit-content;
justify-content: space-around;
position: absolute;
align-items: center;
width:80vh;
height: 80px;
margin-bottom: 10vh;
bottom:0px;
background-color: white;
`

export const AnswerBox = styled.div`
width: fit-content;
min-width: 150px;
height: 50px;
margin: 1.8vh;
background-color: yellow;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;

:hover{
    cursor: pointer;
}
`