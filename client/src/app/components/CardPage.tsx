import * as React from 'react';
import {MultiActionAreaCard} from './Card';
import {firstData, secondData, thirdData} from "./Card";
import {Grid} from "@mui/material";

export default function CardPage(){
    return(
        <div className="hot_tours" style={{backgroundColor: "#1B1556", height: "500px"}}>
            <Grid container className="card_container" style={{display: "flex", justifyContent: "center",
            paddingTop: "70px"}}>
                <Grid item xs={3}>
                    <MultiActionAreaCard data={firstData} />
                </Grid>
                <Grid item xs={3}>
                    <MultiActionAreaCard data={secondData} />
                </Grid>
                <Grid item xs={3}>
                    <MultiActionAreaCard data={thirdData} />
                </Grid>
            </Grid>
        </div>
    );
}

