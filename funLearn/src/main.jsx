import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Main = () => {
  const response =document.getElementById('response');
  const [questionIndex, setQuestionIndex] = useState(0);

  const prev = () => {
    setQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    response.innerHTML="Select An Option"
    response.style.backgroundColor="#cacaca"
    response.style.color="#212121"

  };

  const next = () => {
    setQuestionIndex((prevIndex) => (prevIndex + 1) % 66);
    document.getElementById('response').innerHTML="Select An Option"
    response.innerHTML="Select An Option",
    response.style.backgroundColor="#cacaca"
    response.style.color="#212121"

  };

  return <App questionIndex={questionIndex} prev={prev} next={next} />;
};

ReactDOM.render(<Main />, document.getElementById('root'));
