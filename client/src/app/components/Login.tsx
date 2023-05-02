import React, { useState, useEffect } from 'react';
import './Login.css';
import {FormLabel, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import { Snackbar } from '@mui/material';
import { useSnackbar } from 'notistack';



const mockUserData = [
    { username: 'user1', password: 'pass1'},
    { username: 'user2', password: 'pass2'},
    { username: 'user3', password: 'pass3'},
];



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //const [loggedIn, setLoggedIn] = useState('');
    const [formVisible, setFormVisible] = useState(true);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        // @ts-ignore
        const userData = localStorage.getItem('users');
        if (!userData)
        {
            localStorage.setItem('users', JSON.stringify(mockUserData));
        }
    }, []);

    const handleUsername = (event : React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = (event : any) => {
        event.preventDefault();
        // @ts-ignore
        const userData = localStorage.getItem('users');
        if (userData)
        {
            const userArray = JSON.parse(userData);
            const user = userArray.find((u : any) => u.username === username && u.password === password);
            if (user){
                localStorage.setItem('current', JSON.stringify(username));
                setFormVisible(false);
                enqueueSnackbar('Welcome!', { variant: 'success' });
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
            else{
                alert("Login failed");
            }
        }
    };

    const handleClose = (event : any) => {
        setFormVisible(false);
    }

    // @ts-ignore
    return (
        <div>
            {formVisible && (
                <div className="login">
                    <form className="formContent" onSubmit={handleLogin}>
                        <div>
                            <FormLabel>Username: </FormLabel>
                            <TextField
                                type="text"
                                value={username}
                                onChange={handleUsername}
                                placeholder="username"
                            />
                        </div>
                        <div>
                            <FormLabel>Password: </FormLabel>
                            <TextField type="password" value={password} onChange={handlePassword} placeholder="password" />
                        </div>
                        <button type="submit">Log in</button>
                        <button onClick={handleClose}>Close</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Login;



