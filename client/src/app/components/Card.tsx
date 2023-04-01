import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import picture from "../util/iasi.jpg";
import {useEffect, useRef, useState} from "react";
import Form from "./Form";

export default function MultiActionAreaCard() {
    const [showForm, setShowForm] = useState(false);
    //setShowForm(!showForm);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
    },[])

    const refOne = useRef(null);

    const handleClickOutside = (e: any) => {
        // @ts-ignore
        if(!refOne.current.contains(e.target)) {
            setShowForm(false);
        }
    }
    
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={picture}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Iași, România
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Get to know the beautiful romanian city with rich history,
                        great architecture and other sights
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions  ref = {refOne}>
                {showForm ? (
                    <Form  />
                    ) : (
                    <Button onClick={() => setShowForm(true)} size="small" color="primary">
                        Book ticket
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}
