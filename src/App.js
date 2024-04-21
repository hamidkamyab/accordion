import { useState } from "react";
import Question from "./Question";
import data from "./data";

function App() {
  const [questions,setQuestions] = useState(data);
  return (
    <div className="App d-flex vh-100 vw-100 justify-content-center align-items-center">
      <div className="questionBox container bg-white d-flex flex-column gap-4 py-4 px-3">
        <h5 className="mt-2 text-muted">آیا سوالی برایتان پیش آمده؟</h5>
        <div className="info d-flex flex-column gap-3">
          {
            questions.map((question,index)=>{
              return <Question {...question} key={index} />
            })
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
