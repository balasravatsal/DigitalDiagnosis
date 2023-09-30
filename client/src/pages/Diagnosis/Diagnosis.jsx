import React from 'react';
import Typography from "@mui/material/Typography";
import {Grid, TextField} from "@mui/material";
import "./Diagnosis.css"

const Diagnosis = () => {
    return (
        <div style={{border: "2px solid red", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography variant="p">
                Let's Start Your Diagnosis
            </Typography>
            <div className={'input-box'}>
                <TextField fullWidth sx={{my: 3}} id="outlined-basic" label="Outlined" variant="outlined"/>
                <TextField fullWidth label="fullWidth" id="fullWidth" />
                <TextField sx={{my: 3}} id="outlined-basic" label="Outlined" variant="outlined"/>
                <TextField sx={{my: 3}} id="outlined-basic" label="Outlined" variant="outlined"/>
                <TextField sx={{my: 3}} id="outlined-basic" label="Outlined" variant="outlined"/>
                <TextField sx={{my: 3}} id="outlined-basic" label="Outlined" variant="outlined"/>
            </div>

            <div>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>xs=4</Item>
                    </Grid>
                    {/*<Grid item xs={4}>*/}
                    {/*    <Item>xs=4</Item>*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={8}>*/}
                    {/*    <Item>xs=8</Item>*/}
                    {/*</Grid>*/}
                </Grid>
            </div>

        </div>
    );
};

export default Diagnosis;