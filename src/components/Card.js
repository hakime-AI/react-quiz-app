import React, { useEffect, useState } from 'react';
import shuffle from './Shuffle';

const Card = ({ question, questionId,handleResponse,correctAnswer,incorrectAnswers }) => {
    const [responces,setResponces] = useState([]);
    useEffect(()=>{
       setResponces(shuffle(incorrectAnswers.concat(correctAnswer)))
    },[]);
    // const shuffledAnswres = shuffle(answers);
    return (
        <div className='card'>
            <div className='question'>
                <h2>{question.question}</h2>
                {responces.map((answer, index) =>
                    <div key={questionId + index}>
                        <input type="radio" id={questionId + index} name={questionId} onChange={()=>handleResponse(answer,correctAnswer)}/>
                        <label htmlFor={questionId + index}>{answer}</label>
                    </div>)}
            </div>
        </div>
    );
};

export default Card;