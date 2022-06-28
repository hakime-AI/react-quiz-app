import React, {useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';

const Questions = () => {
    const [data,setData] = useState([]);
    //useEffect se joue lorsque le composant est construit
    useEffect(()=>{
        axios
        .get("https://the-trivia-api.com/api/questions")
        .then((res)=>setData(res.data))
    },[]);

       
    
    //https://restcountries.com/v3.1/all
    return (
            <div className="Questions">
                <h1>Questions</h1>
                <div>
                    {
                    data.map((question)=> (
                        <Card key={question.id} question={question} answers={question.incorrectAnswers.concat(question.correctAnswer)}/>
                        ))
                    }
                </div>
            </div>
    );
};

export default Questions;