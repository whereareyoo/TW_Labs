import * as React from 'react';
import {Input, TextField} from "@mui/material";
import {useState} from "react";
import ReactDOM from 'react-dom';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Form()
{
    //declare hooks
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [amountOfPersons, setAmountOfPersons] = useState('');

    //functions to update state of each field with value entered by user
    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    }

    const handlePhoneChange = (e: any) => {
        setPhone(e.target.value);
    }
    const handlePersonsChange = (e: any) => {
        setAmountOfPersons(e.target.value);
    }

    const handleSubmit = (e: any) => {
        alert("OK!");
        e.preventDefault();
    }


    return(
        <div >
            <header className="FormHeader">
                <form onSubmit={(e) => {handleSubmit(e)}} style={{
                    width: "400px",
                    backgroundColor: "#cacaec",
                    borderRadius: "6px",
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, 50%)`,
                    textAlign: "center",
                    padding: "0 30px 30px",
                    fontFamily: "Roboto"
                }}>
                    <h2>Fill this form</h2>
                    <Input size="medium" placeholder="E-mail" style={{
                        display: "block",
                        fontSize: "11px",
                        padding: "4px 2px"
                    }}/>
                    <Input size="medium" placeholder="Phone number" style={{
                        display: "block",
                        fontSize: "11px",
                        padding: "4px 2px"
                    }}/>
                    <Input size="medium" placeholder="Amount of persons" />
                    <Button type="submit">Submit</Button>
                </form>
            </header>
        </div>
    );
}

export default Form;