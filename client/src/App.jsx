import './App.css'
import ResponsiveAppBar from "./navbar/ResponsiveAppBar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SharedLayout from "./navbar/SharedLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import Diagnosis from "./pages/Diagnosis/Diagnosis.jsx";
import Subscription from "./pages/Subscription/Subscription.jsx";
import Profile from "./pages/UserDetetails/Profile.jsx";
import Account from "./pages/UserDetetails/Account.jsx";
import Login from './pages/Login/Login';
import Auth from './pages/Auth/Auth';


function App() {

    return (
        <>
            {/*<ResponsiveAppBar/>*/}

            <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={
                            <SharedLayout/>
                        }>
                            <Route index element={<Home/>} />
                            <Route path={'/diagnosis'} element={<Diagnosis/>} />
                            <Route path={'/subscription'} element={<Subscription/>} />
                            <Route path={'/profile'} element={<Profile/>} />
                            <Route path={'/account'} element={<Account/>} />
                            <Route path={'/login'} element={<Login/>} />
                            <Route path={'/glogin'} element={<Auth/>} />

                        </Route>
                    </Routes>
            </BrowserRouter>

        </>
    )
}

export default App
