import React from 'react';
import {observer} from "mobx-react-lite";
import form from '../models/FormModel';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

const Form = observer(() => (
    <form>
        <div>
            <label>Phone number</label>
            <TextField type="text"
                       value={form.phone}
                       onChange={e => form.setPhone(e.target.value)}
            />
            <label>Email</label>
            <TextField type="text"
                       value={form.email}
                       onChange={e => form.setEmail(e.target.value)}
            />
            <label>How many persons?</label>
            <TextField type="text"
                       value={form.amountOfPersons}
                       onChange={e => form.setAmount(e.target.value)}
            />
        </div>
        <Button type = "submit">Submit</Button>
    </form>
));

export default Form;