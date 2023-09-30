import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import {Grid, TextField} from "@mui/material";
import "./Diagnosis.css"
import Button from "@mui/material/Button";
import axios from "axios";

const Diagnosis = () => {

    const [symptoms, setSymptoms] = useState({
        tf1: '',
        tf2: '',
        tf3: '',
        tf4: '',
        tf5: '',
        tf6: '',
        tf7: '',
        tf8: '',
        tf9: '',
        tf10: '',
        tf11: '',
        tf12: ''
    })

    const handleChange = (event) => {
        const {id, value} = event.target
        setSymptoms({...symptoms, [id]: value})
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/symptomsdata', symptoms)
            console.log("Symptoms data sent successfully: ", response.data)
        }
        catch (e) {
            console.log('Error posting symptoms data: ', e)
        }
    }


    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
            <Typography variant="h3" pt={4}>
                Let's Start Your Diagnosis
            </Typography>
            <Typography variant='h5' pb={4}>
                Fill in the details and get your Diagnosis ready
            </Typography>

            <div style={{textAlign: "-webkit-center"}}>
                <Grid container spacing={{ xs: 0, sm: 12 }}>
                    <Grid item xs={12} sm={6}>
                        <div className={'input-box'}>
                            <TextField
                                sx={{my: 3}}
                                id="tf1"
                                label="Outlined"
                                variant="outlined"
                                value={symptoms.tf1}
                                onChange={handleChange}
                            />

                            <TextField
                                sx={{my: 3}}
                                id="tf2"
                                label="Outlined"
                                variant="outlined"
                                value={symptoms.tf2}
                                onChange={handleChange}
                            />

                            <TextField
                                sx={{my: 3}}
                                id="tf3"
                                label="Outlined"
                                variant="outlined"
                                value={symptoms.tf3}
                                onChange={handleChange}
                            />

                            <TextField
                                sx={{my: 3}}
                                id="tf4"
                                label="Outlined"
                                variant="outlined"
                                value={symptoms.tf4}
                                onChange={handleChange}
                            />

                            <TextField
                                sx={{my: 3}}
                                id="tf5"
                                label="Outlined"
                                variant="outlined"
                                value={symptoms.tf5}
                                onChange={handleChange}
                            />

                            <TextField
                                sx={{my: 3}}
                                id="tf6"
                                label="Outlined"
                                variant="outlined"
                                value={symptoms.tf6}
                                onChange={handleChange}
                            />
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <div className={'input-box'}>
                            <TextField
                                sx={{my: 3}}
                                id="tf7"
                                label="Outlined"
                                variant="outlined"
                                value={symptoms.tf7}
                                onChange={handleChange}
                            />

                            <TextField
                                sx={{my: 3}}
                                id="tf8"
                                label="Outlined"
                                variant="outlined"
                                value={symptoms.tf8}
                                onChange={handleChange}
                            />

                            <TextField
                                sx={{my: 3}}
                                id="tf9"
                                label="Outlined"
                                variant="outlined"
                                value={symptoms.tf9}
                                onChange={handleChange}
                            />

                            <TextField
                                sx={{my: 3}}
                                id="tf10"
                                label="Outlined"
                                variant="outlined"
                                value={symptoms.tf10}
                                onChange={handleChange}
                            />

                            <TextField
                                sx={{my: 3}}
                                id="tf11"
                                label="Outlined"
                                variant="outlined"
                                value={symptoms.tf11}
                                onChange={handleChange}
                            />

                            <TextField
                                sx={{mt: 3, mb: 6}}
                                id="tf12"
                                label="Outlined"
                                variant="outlined"
                                value={symptoms.tf12}
                                onChange={handleChange}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>

            <Button variant={"contained"} sx={{marginBottom: "3rem"}} onClick={handleSubmit}>
                Submit Data
            </Button>

        </div>
    );
};

export default Diagnosis;