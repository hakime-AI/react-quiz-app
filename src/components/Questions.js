import React, { useEffect,  useState } from 'react';
import axios from "axios";
import Card from './Card';

const Questions = () => {
    const [data, setData] = useState([]);
    const [currentscore, setCurrentScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // const [responces, setResponces] = useState([]);
    //useEffect se joue lorsque le composant est construit
    useEffect(() => {
        axios
            .get("https://the-trivia-api.com/api/questions")
            .then((res) => setData(res.data))
    }, []);



    


    const handleResponse = (answer, correctAnswer) => {
            if (answer === correctAnswer) {

                setCurrentScore(current => current + 1);
            }
            setCurrentQuestion(current => current + 1);
        

        if (currentQuestion === 9) {
            axios
                .get("https://the-trivia-api.com/api/questions")
                .then((res) => setData(res.data))
            setCurrentQuestion(0);
            setCurrentScore(0);
        }
        // 👇️ take parameter passed from Child component
    }



    //https://restcountries.com/v3.1/all
    return (
        <div className="Questions">
            <h1>Currrent Score : {currentscore}</h1>
            <h2>Question : {currentQuestion + 1}</h2>
            <div>
                {
                    data.slice(currentQuestion, currentQuestion + 1).map((question) => (
                        <Card
                            key={question.id}
                            question={question}
                            incorrectAnswers={question.incorrectAnswers}
                            correctAnswer={question.correctAnswer}
                            questionId={question.id}
                            handleResponse={handleResponse}
                        />
                    ))
                }
            </div>
        </div>
    );
};



export default Questions;