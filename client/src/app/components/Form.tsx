import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import form from '../models/FormModel';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import './Form.css';

const Form = observer(() => {
    const [phone, setPhoneNum] = useState('');
    const [email, setMail] = useState('');
    const [amount, setAmountOfPersons] = useState('');
const handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void = (event) => {
    // @ts-ignore
    event.preventDefault();
    console.log('Loading...');

    //show loading for 2 seconds
    setTimeout(() => {
        //Load data from local storage
        const savedPhone = localStorage.getItem('phone');
        const savedEmail = localStorage.getItem('email');
        const savedAmount = localStorage.getItem('amount');
        console.log('Extracted data: ', savedPhone, savedEmail, savedAmount);
    },2000);

    //save form data to local storage
    localStorage.setItem('phone', phone);
    setPhoneNum('');
    localStorage.setItem('email', email);
    setMail('');
    localStorage.setItem('amount', amount);
    setAmountOfPersons('');

}
// @ts-ignore
    return (
    <form onSubmit={handleSubmit} className="modal-form">
        <div>
            <label>Phone number</label>
            <TextField type="text"
                       value={phone}
                       onChange={e => setPhoneNum(e.target.value)}
            />
            <label>Email</label>
            <TextField type="text"
                       value={email}
                       onChange={e => setMail(e.target.value)}
            />
            <label>How many persons?</label>
            <TextField type="text"
                       value={amount}
                       onChange={e => setAmountOfPersons(e.target.value)}
            />
        </div>
        <Button type = "submit">Submit</Button>
    </form>
)});

export default Form;