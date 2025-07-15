import { useState } from "react";
import Input from "./Input";

export default function UserInputsSection() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 5000,
        annualInvestment: 1000,
        expectedReturn: 6,
        duration: 10,
    });

    const handleInputChange = (inputIdentifier, newValue) => {
        setUserInput(prevUserInput => {
            return{
                ...prevUserInput,
                [inputIdentifier]: newValue,
            };
        });
    };

    return (
        <section id="user-input">
            <div className="input-group">
                <Input 
                    label="initial investment" 
                    value={userInput.initialInvestment} 
                    valueChange={(event) => handleInputChange("initialInvestment", event.target.value)}
                />
                <Input 
                    label="annual investment" 
                    value={userInput.annualInvestment} 
                    valueChange={(event) => handleInputChange("annualInvestment", event.target.value)}
                />
            </div>
            <div className="input-group">
                <Input 
                    label="expected return" 
                    value={userInput.expectedReturn} 
                    valueChange={(event) => handleInputChange("expectedReturn", event.target.value)}
                />
                <Input 
                    label="duration" 
                    value={userInput.duration} 
                    valueChange={(event) => handleInputChange("duration", event.target.value)}
                />
            </div>
        </section>
    );
};