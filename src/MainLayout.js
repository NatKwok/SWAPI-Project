import React from "react";
import {Outlet} from "react-router-dom";
import Header from './components/Header';

function MainLayout() {
return <div>
<Header />
<br></br>
<Outlet />
</div>
} 

export default MainLayout;