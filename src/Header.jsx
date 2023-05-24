import React from "react";
import logo from './img/logo.png'



const Header =()=>{

return (
<>
<div className="header">
    <img  src={logo} alt="logo" width= '70' height= '70' />
    <h1> Store Here </h1>
</div>

</>
);

};




export default Header;