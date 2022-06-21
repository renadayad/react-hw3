import React from 'react'
import Resulit from './Resulit';
const Form = ({ onClick,setInput1,setInput2,resulit}) => {
    return (
      <>
       <input
          type="text"
          onChange={(e) => setInput1(e.target.value)}
          className="form-control"
          aria-label="Server"
        />
        <input
          type="text"
          onChange={(e) => setInput2(e.target.value)}
          className="form-control mt-2"
          aria-label="Server"
        />
        <button
          type="button"
          onClick={() => onClick("+")}
          className="btn btn-secondary me-md-2 mt-3 g-col-4 "
        >
          +
        </button>
        <button
          type="button"
          onClick={() => onClick("-")}
          className="btn btn-secondary me-md-2 mt-3 g-col-4"
        >
          -
        </button>
        <button type="button"
         onClick={() => onClick("/")}
         className="btn btn-secondary me-md-2 mt-3">
          /
        </button>
        <button type="button" 
         onClick={() => onClick("*")}
         className="btn btn-secondary me-md-2 mt-3">
          *
        </button>
        <button type="button" 
         onClick={() => onClick("%")}
         className="btn btn-secondary me-md-2 mt-3">
          %
        </button>
       <Resulit Resulit={resulit}/>
      </>
    );
  };
  
  export default Form;