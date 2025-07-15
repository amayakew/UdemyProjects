export default function Input({label, value, valueChange}) {

    return (
        <p>
            <label>{label}</label> 
            <input value={value} type="number" onChange={valueChange} required/>
        </p>
    );
};