// import React, { useState } from 'react';
// import Typography from '@mui/material/Typography';
// import { FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';
// import './Diagnosis.css';
// import Button from '@mui/material/Button';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSymptoms, fetchSymptoms } from '../../features/symptomSlice.jsx'; // Update the path
//
// const Diagnosis = () => {
//     const dispatch = useDispatch();
//     const symptomsState = useSelector((store) => store.symptomsData.symptoms);
//     const [symptoms, setSymptoms] = useState({});
//
//     const handleChange = (event, symptomName) => {
//         setSymptoms((prevSymptoms) => ({
//             ...prevSymptoms,
//             [symptomName]: event.target.value === 'yes', // Assuming 'yes' means selected and 'no' means not selected
//         }));
//     };
//
//     const handleSubmit = async () => {
//         try {
//             // Transform symptoms object into an array if necessary before sending the API request
//             const symptomsArray = Object.keys(symptoms).filter((symptomName) => symptoms[symptomName]);
//             // Make the API request
//             const response = await axios.post('http://localhost:5000/symptomsdata', { symptoms: symptomsArray });
//             console.log('Symptoms data sent successfully: ', response.data);
//         } catch (error) {
//             console.log('Error posting symptoms data: ', error);
//         }
//     };
//
//     // Fetch symptoms on component mount
//     React.useEffect(() => {
//         dispatch(fetchSymptoms());
//     }, [dispatch]);
//
//     const halfLength = Math.ceil(symptomsState.length / 2);
//     const firstHalfSymptoms = symptomsState.slice(0, halfLength);
//     const secondHalfSymptoms = symptomsState.slice(halfLength);
//
//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
//             <Typography variant="h3" pt={4}>
//                 Let's Start Your Diagnosis
//             </Typography>
//             <Typography variant="h5" pb={4}>
//                 Fill in the details and get your Diagnosis ready
//             </Typography>
//
//             <div style={{ textAlign: '-webkit-center' }}>
//                 <Grid container spacing={{ xs: 0, sm: 12 }}>
//                     <Grid item xs={12} sm={6}>
//                         {firstHalfSymptoms.map((symptom, index) => (
//                             <div key={index} className={'input-box'}>
//                                 <FormLabel id={`demo-radio-buttons-group-label-${index}`} style={{ padding: '1rem' }}>
//                                     {symptom.name}
//                                 </FormLabel>
//                                 <RadioGroup
//                                     row
//                                     aria-labelledby={`demo-radio-buttons-group-label-${index}`}
//                                     defaultValue="no"
//                                     name={`radio-buttons-group-${index}`}
//                                     onChange={(event) => handleChange(event, symptom.name)}
//                                 >
//                                     <FormControlLabel value="yes" control={<Radio />} label="Yes" />
//                                     <FormControlLabel value="no" control={<Radio />} label="No" />
//                                 </RadioGroup>
//                             </div>
//                         ))}
//                     </Grid>
//
//                     <Grid item xs={12} sm={6}>
//                         {secondHalfSymptoms.map((symptom, index) => (
//                             <div key={index} className={'input-box'}>
//                                 <FormLabel id={`demo-radio-buttons-group-label-${index}`} style={{ padding: '1rem' }}>
//                                     {symptom.name}
//                                 </FormLabel>
//                                 <RadioGroup
//                                     row
//                                     aria-labelledby={`demo-radio-buttons-group-label-${index}`}
//                                     defaultValue="no"
//                                     name={`radio-buttons-group-${index}`}
//                                     onChange={(event) => handleChange(event, symptom.name)}
//                                 >
//                                     <FormControlLabel value="yes" control={<Radio />} label="Yes" />
//                                     <FormControlLabel value="no" control={<Radio />} label="No" />
//                                 </RadioGroup>
//                             </div>
//                         ))}
//                     </Grid>
//                 </Grid>
//             </div>
//
//             <Button variant="contained" sx={{ marginBottom: '3rem' }} onClick={handleSubmit}>
//                 Submit Data
//             </Button>
//         </div>
//     );
// };
//
// export default Diagnosis;

import Typography from '@mui/material/Typography';
import { FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';
import './Diagnosis.css';
import Button from '@mui/material/Button';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {setSymptomsReducer, submitSymptoms} from '../../features/symptomSlice.jsx'; // Update the path

const Diagnosis = () => {
    const dispatch = useDispatch();
    const symptomsState = useSelector((store) => store.symptomsData.symptoms);
    // const [symptoms, setSymptoms] = useState({});

    const handleChange = (event, symptomName) => {
        dispatch(setSymptomsReducer({ name: symptomName, value: event.target.value === 'yes' }));
    };

    const handleSubmit = async () => {
        try {
            // Transform symptoms object into an array if necessary before sending the API request
            // const symptomsArray = Object.keys(symptoms).filter((symptomName) => symptoms[symptomName]);
            // Dispatch the submitSymptoms action with the symptoms data
            await dispatch(submitSymptoms(symptomsState));
        } catch (error) {
            console.log('Error posting symptoms data: ', error);
        }
    };

    // Fetch symptoms on component mount
    // useEffect(() => {
    //     dispatch(fetchSymptoms());
    // }, [dispatch]);

    const halfLength = Math.ceil(symptomsState.length / 2);
    const firstHalfSymptoms = symptomsState.slice(0, halfLength);
    const secondHalfSymptoms = symptomsState.slice(halfLength);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="h3" pt={4}>
                Let's Start Your Diagnosis
            </Typography>
            <Typography variant="h5" pb={4}>
                Fill in the details and get your Diagnosis ready
            </Typography>

            <div style={{ textAlign: '-webkit-center' }}>
                <Grid container spacing={{ xs: 0, sm: 12 }}>
                    <Grid item xs={12} sm={6}>
                        {firstHalfSymptoms.map((symptom, index) => (
                            <div key={index} className={'input-box'}>
                                <FormLabel id={`demo-radio-buttons-group-label-${index}`} style={{ padding: '1rem' }}>
                                    {symptom.name}
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby={`demo-radio-buttons-group-label-${index}`}
                                    defaultValue="no"
                                    name={`radio-buttons-group-${index}`}
                                    onChange={(event) => handleChange(event, symptom.name)}
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </div>
                        ))}
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        {secondHalfSymptoms.map((symptom, index) => (
                            <div key={index} className={'input-box'}>
                                <FormLabel id={`demo-radio-buttons-group-label-${index}`} style={{ padding: '1rem' }}>
                                    {symptom.name}
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby={`demo-radio-buttons-group-label-${index}`}
                                    defaultValue="no"
                                    name={`radio-buttons-group-${index}`}
                                    onChange={(event) => handleChange(event, symptom.name)}
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </div>
                        ))}
                    </Grid>
                </Grid>
            </div>

            <Button variant="contained" sx={{ marginBottom: '3rem' }} onClick={handleSubmit}>
                Submit Data
            </Button>
        </div>
    );
};

export default Diagnosis;
