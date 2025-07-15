export default function UserInputs({userInput, onChangeFunction}) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p> 
                    <label>initial investment</label> 
                    <input 
                        value={userInput.initialInvestment} 
                        type="number" 
                        onChange={(event) => onChangeFunction("initialInvestment", event.target.value)} 
                        required
                    />
                </p>
                <p> 
                    <label>annual investment</label> 
                    <input 
                        value={userInput.annualInvestment} 
                        type="number" 
                        onChange={(event) => onChangeFunction("annualInvestment", event.target.value)} 
                        required
                    />
                </p>
            </div>
            <div className="input-group">
                <p> 
                    <label>expected return</label> 
                    <input 
                        value={userInput.expectedReturn} 
                        type="number" 
                        onChange={(event) => onChangeFunction("expectedReturn", event.target.value)} 
                        required
                    />
                </p>
                <p> 
                    <label>duration</label> 
                    <input 
                        value={userInput.duration} 
                        type="number" 
                        onChange={(event) => onChangeFunction("duration", event.target.value)} 
                        required
                    />
                </p>
            </div>
        </section>
    );
};