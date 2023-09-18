import React from "react";
import albumCover from '../assets/album_cover.jpg';

function BodyComponent({question, answers, onSubmit, selectedAnswer, questionIndex, songName}) {   
    return(
        <div className='background'>
                {questionIndex < 5 ? 
                    <div className='scroll'>
                        <h3 id='question-text'>{question}</h3>
                            <ul id='answer-list'>
                                {answers.map((answer, index) => (
                                    <li key={index} id='answer-list-items'>
                                        <input
                                            type='radio'
                                            id={`answer-${index}`}
                                            className="selected-answer"
                                            name='selected-answer'
                                            checked={selectedAnswer === answer}
                                            value={answer}
                                            onChange={(e) => onSubmit(answer)}
                                        />
                                        <label htmlFor={`answer-${index}`} className="answer-text" id={answer}>{answer}</label>
                                    </li>
                                ))}
                            </ul>
                    </div>
                : 
                    <div className='scroll'>
                        <a id='song-link' href='#'>
                            <h2 id='song-reveal-name'>{songName}</h2>
                            <img src={albumCover} alt='Life I Chose album cover.' id='album-cover'/>
                            <p id='song-reveal-text'>Click here to listen to the life YOU chose...</p>
                        </a>
                    </div>   
                }
        </div>
    )
}

export default BodyComponent;