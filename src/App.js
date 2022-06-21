import './App.css';
import Form from './compounts/Form';
import { useState } from 'react';
const App = () => {
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [resulit, setResulit] = useState();
  const text=0;
  const onClick = (operter) => {
  switch(operter) {
    case "+":
      setResulit(parseInt(input1) + parseInt(input2));
      break;
    case "-":
      text = setResulit((input1) - (input2));
      break;
    case "/":
      text = setResulit((input1) / (input2));
      break;
      case "*":
        text = setResulit((input1) * (input2));
        break;
        case "%":
          text = setResulit((input1) % (input2));
          break;
    default:
      text = "not found";
  }
    
    }
  
  return (
    <>
      <div className='container'>
        <h1 className='text-center mb-3'>Calculator</h1>
        <Form onClick={onClick} setInput1={setInput1} setInput2={setInput2} resulit={resulit} />

        
       
      </div>
    </>
  );
}


export default App;
