import { calculateInvestmentResults, formatter } from "../util/investment";

const tableColumns = [
    "Year",
    "Investment Value",
    "Intereset (Year)",
    "Total Interest",
    "Invested Capital",
];

export default function Results({input}) {

    const data = calculateInvestmentResults(input);
    const initialInvestment = data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    {tableColumns.map(col => <th key={col}>{col}</th>)}
                </tr>
            </thead>
            <tbody className="center">
                {data.map(yearData => {

                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}; 