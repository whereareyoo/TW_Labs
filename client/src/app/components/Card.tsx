import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions, Modal, paperClasses} from '@mui/material';
import picture from "../util/iasi.jpg";
import {useEffect, useRef, useState} from "react";
import {TourDetails} from "./tourDetails";
import Form from './Form';
import './Form.css'




interface CardProps {
    data: TourDetails
}

export const firstData : TourDetails = {
    title: "Discover Iasi town",
    description: "Get to know the beautiful romanian city with rich history,\n" +
        "great architecture and other sights",
    image: "https://nordnews.md/wp-content/uploads/2020/11/iasi.jpg",
    price: 100,
    currency: '$'
}

export const secondData : TourDetails = {
    title: "Discover Berlin town",
    description: "Get to know the beautiful german city with rich history,\n" +
        "great architecture and other sights",
    image: "https://www.deutschland.de/sites/default/files/media/image/T%C3%BCD_Politisches_Zentrum-Berlin_Reichstagsgeb%C3%A4ude.jpg",
    price: 200,
    currency: '$'
}

export const thirdData : TourDetails = {
    title: "Discover Paris town",
    description: "Get to know the beautiful french city with rich history,\n" +
        "great architecture and other sights",
    image: "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
    price: 300,
    currency: '$'
}

export const MultiActionAreaCard : React.FC<CardProps> = ({data}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    // @ts-ignore
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={data.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                    <Button size="small" color="primary" onClick={handleOpen}>
                        Book ticket
                    </Button>

            </CardActions>
            <Modal open={open} onClose={() => setOpen(false)} className="modal-window">
                <div className="paper">
                    <Form />
                </div>
            </Modal>
        </Card>

    );
}

export default MultiActionAreaCard;
