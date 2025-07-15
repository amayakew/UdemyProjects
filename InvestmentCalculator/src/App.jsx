import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import UserInputs from "./components/UserInputs"

function App() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 15000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const inputIsValid = userInput.duration >= 1;

    const handleInputChange = (inputIdentifier, newValue) => {
        setUserInput(prevUserInput => {
            return{
                ...prevUserInput,
                [inputIdentifier]: +newValue,
            };
        });
    };

  return (
    <main>
      <Header/>
      <UserInputs userInput={userInput} onChangeFunction={handleInputChange}/>
      {!inputIsValid && <p className="center" >Duration number must be greater than zero.</p>}
      {inputIsValid && <Results input={userInput}/>}
    </main>
  )
}

export default App
