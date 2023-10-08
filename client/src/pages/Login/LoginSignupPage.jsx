// import React from 'react';
//
// const Login = () => {
//     return (
//         <div>
//
//         </div>
//     );
// };
//
// export default Login;
//
// import React, { useState } from "react";
// import { Container, Typography, TextField, Button, Grid, Paper } from "@mui/material";
// import { makeStyles } from "@mui/material/styles"; // Import makeStyles from @mui/styles
//
// const useStyles = makeStyles((theme) => ({
//     container: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     paper: {
//         padding: theme.spacing(3),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     form: {
//         width: '100%',
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }));
//
// const LoginSignupPage = () => {
//     const classes = useStyles();
//     const [isLogin, setIsLogin] = useState(true);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle login or signup logic here
//         console.log('Email:', email);
//         console.log('Password:', password);
//     };
//
//     return (
//         <Container component="main" maxWidth="xs" className={classes.container}>
//             <Paper elevation={3} className={classes.paper}>
//                 <Typography variant="h5">{isLogin ? 'Login' : 'Sign Up'}</Typography>
//                 <form className={classes.form} onSubmit={handleSubmit}>
//                     <TextField
//                         variant="outlined"
//                         margin="normal"
//                         required
//                         fullWidth
//                         label="Email Address"
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <TextField
//                         variant="outlined"
//                         margin="normal"
//                         required
//                         fullWidth
//                         label="Password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <Button
//                         type="submit"
//                         fullWidth
//                         variant="contained"
//                         color="primary"
//                         className={classes.submit}
//                     >
//                         {isLogin ? 'Login' : 'Sign Up'}
//                     </Button>
//                     <Grid container justifyContent="flex-end">
//                         <Grid item>
//                             <Button color="primary" onClick={() => setIsLogin(!isLogin)}>
//                                 {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
//                             </Button>
//                         </Grid>
//                     </Grid>
//                 </form>
//             </Paper>
//         </Container>
//     );
// };
//
// export default LoginSignupPage;


import {useState} from 'react';
import axios from 'axios'
import './LoginSignupPage.css';
import { useNavigate } from 'react-router-dom';



const LoginSignupPage = () => {
    
    const navigate=useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    async function handleSubmit(e){
        let formData={email:email,password:password}
        e.preventDefault();
        
        let response=await axios.post('http://localhost:5000/login',formData);
        if(response.status==200){
        console.log(response.data)
        navigate('/home')
        }
        else{
            alert("Invalid credentials")
        }

    }

    return (
        <div className={"loginbody"}>
            <div className="LoginSignupPage">
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                <form>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button onClick={handleSubmit} type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
                </form>
                <p onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
                </p>
            </div>
        </div>
    );
};

export default LoginSignupPage;
