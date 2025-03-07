import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  {console.log(questions)}
  return(
    <div className="container">
      <h3>Questions and Answers about login</h3>
      <section className="info">
        {
          questions.map((question) => <SingleQuestion key={question.id} {...question}/>)
        }
      </section>
      
    </div>
    
  );
}

export default App;
