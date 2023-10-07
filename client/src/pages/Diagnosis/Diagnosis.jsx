import Typography from '@mui/material/Typography';
import {FormControlLabel, FormLabel, Grid, Radio, RadioGroup} from '@mui/material';
import './Diagnosis.css';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDiagnosisResult, setDisease, setSymptomsReducer, submitSymptoms} from '../../features/symptomSlice.jsx';
import {useState} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal"; // Update the path


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const Diagnosis = () => {
    const dispatch = useDispatch();
    const symptomsState = useSelector((store) => store.symptomsData.symptoms);
    const diagnosisResult = useSelector((state) => state.symptomsData.disease);

    const [isModalVisible, setModalVisibility] = useState(false);


    const handleChange = (event, symptomName) => {
        dispatch(setSymptomsReducer({name: symptomName, value: event.target.value === 'yes'}));
    };

    const handleSubmit = async () => {
        try {
            await dispatch(submitSymptoms(symptomsState));

            const {payload} = await dispatch(fetchDiagnosisResult());
            const dname = payload; // Assuming the payload contains the disease name

            setModalVisibility(true);
            dispatch(setDisease(dname.disease));
        } catch (error) {
            console.log('Error posting symptoms data: ', error);
        }
    };


    const halfLength = Math.ceil(symptomsState.length / 2);
    const firstHalfSymptoms = symptomsState.slice(0, halfLength);
    const secondHalfSymptoms = symptomsState.slice(halfLength);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            <Typography variant="h3" pt={4}>
                Let's Start Your Diagnosis
            </Typography>
            <Typography variant="h5" pb={4}>
                Fill in the details and get your Diagnosis ready
            </Typography>

            <div style={{textAlign: '-webkit-center'}}>
                <Grid container spacing={{xs: 0, sm: 12}}>
                    <Grid item xs={12} sm={6}>
                        {firstHalfSymptoms.map((symptom, index) => (
                            <div key={index} className={'input-box'}>
                                <FormLabel id={`demo-radio-buttons-group-label-${index}`} style={{padding: '1rem'}}>
                                    {symptom.name}
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby={`demo-radio-buttons-group-label-${index}`}
                                    defaultValue="no"
                                    name={`radio-buttons-group-${index}`}
                                    onChange={(event) => handleChange(event, symptom.name)}
                                >
                                    <FormControlLabel value="yes" control={<Radio/>} label="Yes"/>
                                    <FormControlLabel value="no" control={<Radio/>} label="No"/>
                                </RadioGroup>
                            </div>
                        ))}
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        {secondHalfSymptoms.map((symptom, index) => (
                            <div key={index} className={'input-box'}>
                                <FormLabel id={`demo-radio-buttons-group-label-${index}`} style={{padding: '1rem'}}>
                                    {symptom.name}
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby={`demo-radio-buttons-group-label-${index}`}
                                    defaultValue="no"
                                    name={`radio-buttons-group-${index}`}
                                    onChange={(event) => handleChange(event, symptom.name)}
                                >
                                    <FormControlLabel value="yes" control={<Radio/>} label="Yes"/>
                                    <FormControlLabel value="no" control={<Radio/>} label="No"/>
                                </RadioGroup>
                            </div>
                        ))}
                    </Grid>
                </Grid>
            </div>

            <Button variant="contained" sx={{marginBottom: '3rem'}} onClick={handleSubmit}>
                Submit Data
            </Button>

            <Modal open={isModalVisible} onClose={() => setModalVisibility(false)}>
                <Box sx={style}>
                    <Typography variant="h5" component="h2">
                        Diagnosis Result
                    </Typography>
                    <Typography variant="h6" sx={{ my: 2 }}>
                        {diagnosisResult} {/* Assuming diagnosisResult contains the diagnosis information */}
                    </Typography>
                    <Typography variant={"body2"}>
                        after our expert analysis, we have observed that you are affected with <b>{diagnosisResult}</b>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default Diagnosis;
