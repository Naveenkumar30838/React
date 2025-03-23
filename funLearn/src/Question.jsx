import './Question.css';
import data from './database.json';

const arr = data.quiz;
let score =0;
let attempted=0;

const Question = ({ questionIndex, prev, next }) => {
  const question = arr[questionIndex];

  return (
    <div className="Question">
      <h1>{questionIndex+1}. {question.question}</h1>
      <div className="optionList" id='optionList'>
        <p onClick={() => optionClick("option1", question.correctOption , next)}>a) {question.option1}</p>
        <p onClick={() => optionClick("option2", question.correctOption , next)}>b) {question.option2}</p>
        <p onClick={() => optionClick("option3", question.correctOption , next)}>c) {question.option3}</p>
        <p onClick={() => optionClick("option4", question.correctOption , next)}>d) {question.option4}</p>
      </div>
      <div className="footer">
        <div className="response" id='response'>Select An Option</div>
        <div className="for-bac">
          <div onClick={prev}>Prev</div>
          <div onClick={next}>Next</div>
        </div>
      </div>
      <div className="stats for-bac">
        <div>Current Score : {score}</div>
        <div>{attempted} / {arr.length}</div>
      </div>
    </div>
  );
};

function optionClick(option, correctOption , next) {
  const response = document.getElementById('response');
  response.innerHTML="Verifying"
  response.style.backgroundColor="purple";
  if (option === correctOption) {
    setTimeout(() => {
      response.innerHTML = "Correct ✔";
    response.style.backgroundColor = "green";
    }, 600);
    score+=4;
    
  } else {
     setTimeout(() => {
      response.innerHTML = "Wrong 😌";
      response.style.backgroundColor = "red"; 
     }, 600);
    score-=1;
  }
  response.style.color = "white";
  setTimeout(() => {
    next();
    response.style.backgroundColor="#cacaca"
  }, 2200); 
  attempted++;
}

export default Question;
