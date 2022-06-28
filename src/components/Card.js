import React from 'react';

const Card = ({question,answers}) => {
    
    return (
        <div className='card'>
            <div className='question'>
            <h2>{question.question}</h2>
            {answers.map((answer,index)=><p key={index}>{answer}</p>)}
            </div>
            <div className='responce'>

            </div>
        </div>
    );
};

export default Card;