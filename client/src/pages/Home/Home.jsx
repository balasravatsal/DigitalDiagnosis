import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Typography } from "@mui/material";
import HealthImg from "./healthImg-removebg-preview.png";

const Home = () => {
    return (
        <div>
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignContent: "center", height: "90vh" }}>
                <Grid item md={4} sx={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
                   <div>
                       <Typography variant={"h5"}>We understand the importance of your health and well-being. Our advanced disease prediction system is designed to provide you with insights into possible health conditions based on the symptoms you provide</Typography>
                       <Link to="/diagnosis">
                           <Button variant={"contained"} sx={{marginTop: "2rem"}}>Start Diagnosis</Button>
                       </Link>
                   </div>
                </Grid>
                <Grid item md={4} sx={{ display: "flex", justifyContent: "justify" }}>
                    <img src={HealthImg} alt="Health" /> {/* Use the <img> element to display the image */}
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;
