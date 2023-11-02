import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './navbar/SharedLayout.jsx';
import Home from './pages/Home/Home.jsx';
import Diagnosis from './pages/Diagnosis/Diagnosis.jsx';
import Subscription from './pages/Subscription/Subscription.jsx';
import Profile from './pages/UserDetetails/Profile.jsx';
import Account from './pages/UserDetetails/Account.jsx';
import LoginSignupPage from './pages/Login/LoginSignupPage';
import "./App.css"

function App() {

    return (
        <>
            <div className="app-container"> {/* Apply background image and styles to the entire app */}
                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<SharedLayout />}>
                            <Route index element={<LoginSignupPage />} />
                            <Route path={'/home'} element={<Home/>}/>
                            <Route path={'/diagnosis'} element={<Diagnosis/>} />
                            <Route path={'/subscription'} element={<Subscription/>} />
                            <Route path={'/profile'} element={<Profile/>} />
                            <Route path={'/account'} element={<Account/>} />
                            <Route path={'/login'} element={<LoginSignupPage/>} />

                        </Route>
                    </Routes>
            </BrowserRouter>
            </div>
        </>
    );
}

export default App
