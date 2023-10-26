import { useState } from "react";

const initialUserInput = {
    'current-savings': 12000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 5
  }

const UserInputs = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const clearFormHandler = () => {
    setUserInput(initialUserInput);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const inputHandler = (input, value) => {
    setUserInput((prevInput)=>{
        return {
            ...prevInput,
            [input]: +value,
        }
    })
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputHandler("current-savings", event.target.value)
            }
            value={userInput['current-savings']}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input onChange={(event) =>
              inputHandler("yearly-contribution", event.target.value)
            } 
            value={userInput['yearly-contribution']}
            type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input onChange={(event) =>
              inputHandler("expected-return", event.target.value)
            } 
            value={userInput['expected-return']}
            type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input onChange={(event) =>
              inputHandler("duration", event.target.value)
            } 
            value={userInput['duration']}
            type="number" id="duration" />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={clearFormHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInputs;
