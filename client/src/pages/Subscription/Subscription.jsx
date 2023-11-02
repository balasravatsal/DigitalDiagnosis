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
                Individual Level Subscription
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Offer monthly or annual subscription plans for individual users.
                Implement tiered pricing structures based on access and features.

            </Typography>
            <Typography variant="body2">
                Features:
                <ul>
                    <li>Personalized health recommendations</li>
                    <li>Access to historical health data</li>
                    <li>customer support</li>
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
                Small Clinic Subscription
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Seasonal subscriptions tailored for small clinics, especially in regions with seasonal health issues.
            </Typography>
            <Typography variant="body2">
                Features:
                <ul>
                    <li>Seasonal Subscription</li>
                    <li>Flexible Pricing</li>
                    <li>Tailored Features</li>
                </ul>
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Get Subscription</Button>
        </CardActions>
    </React.Fragment>
);

const card3 = (
    <React.Fragment>
        <CardContent>
            <Typography variant="h5" component="div">
                Large Scale Hospital Licensing
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Provide an annual licensing model for large hospitals with high traffic.
            </Typography>
            <Typography variant="body2">
                Features:
                <ul>
                    <li>Annual Licensing</li>
                    <li>24/7 Availability</li>
                    <li>Customization and Integration</li>
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
        <div style={{ height: "85vh", border: "2px solid red", justifyContent: "center", display: "flex", alignItems: "center" }}>
            <Box sx={{ maxWidth: "90%", display: "flex" }}>
                <Card variant="outlined" sx={{ width: "50%", marginX: "2rem", padding: "2rem", border: "4px solid grey" }}>{card}</Card>
                <Card variant="outlined" sx={{ width: "50%", marginX: "2rem", padding: "2rem", border: "4px solid grey" }}>{card2}</Card>
                <Card variant="outlined" sx={{ width: "50%", marginX: "2rem", padding: "2rem", border: "4px solid grey" }}>{card3}</Card>
            </Box>
        </div>
    );
}