import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const card = (
    <React.Fragment>
        <CardContent>
            <Typography variant="h5" component="div">
                Diagnosis
            </Typography>
            <Typography sx={{mb: 1.5}} color="text.secondary">
                Disease will be diagnosed with the given inputs
            </Typography>
            <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi at delectus dicta, ex ipsum molestias odio quasi, rem sunt tempore vitae? Cum debitis dolores error eveniet ex inventore libero natus, nisi placeat possimus repellendus, tempora temporibus ut, vel voluptate.
                <ul>
                    <li>Blah</li>
                    <li>Blah</li>
                    <li>Blah</li>
                    <li>Blah</li>
                </ul>
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Get Subscription</Button>
        </CardActions>
    </React.Fragment>
);

const card2 = (
    <React.Fragment>
        <CardContent>
            <Typography variant="h5" component="div">
                Diagnosis With Hospital Location
            </Typography>
            <Typography sx={{mb: 1.5}} color="text.secondary">
                Disease will be diagnosed with the given inputs
            </Typography>
            <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi at delectus dicta, ex ipsum molestias odio quasi, rem sunt tempore vitae? Cum debitis dolores error eveniet ex inventore libero natus, nisi placeat possimus repellendus, tempora temporibus ut, vel voluptate.
                <ul>
                    <li>Blah</li>
                    <li>Blah</li>
                    <li>Blah</li>
                    <li>Blah</li>
                </ul>
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Get Subscription</Button>
        </CardActions>
    </React.Fragment>
);

export default function Subscription() {
    return (
        <div style={{height: "85vh", border: "2px solid red", justifyContent: "center", display: "flex", alignItems: "center"}}>
            <Box sx={{maxWidth: "70%", display: "flex"}}>
                <Card variant="outlined" sx={{marginX: "2rem", padding: "2rem", border: "4px solid grey"}}>{card}</Card>
                <Card variant="outlined" sx={{marginX: "2rem", padding: "2rem", border: "4px solid grey"}}>{card2}</Card>
            </Box>
        </div>
    );
}