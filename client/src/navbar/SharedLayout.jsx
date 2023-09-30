import React from 'react';
import ResponsiveAppBar from "./ResponsiveAppBar.jsx";
import {Outlet} from "react-router-dom";

const SharedLayout = () => {
    return (
        <div>
            <main>
                <ResponsiveAppBar/>
                <div>
                    <Outlet/>
                </div>
            </main>
        </div>
    );
};

export default SharedLayout;