import React from 'react';
import Question from './Question';
import DashBoard from './Dashboard';


const App = ({ questionIndex, prev, next }) => {
  return (<>
    <div>
      <DashBoard></DashBoard>
      <Question questionIndex={questionIndex} prev={prev} next={next} />
    </div>
  </>
  );
};

export default App;
