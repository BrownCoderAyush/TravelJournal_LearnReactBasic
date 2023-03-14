import React from "react";
import About from "./components/About.js";
import Card from "./components/Card.js";
import Navbar from "./components/Navbar.js";
import data from "./data.json";


function App() {
    // const response = JSON.parse(data);
    
    let CardContainer = data.map(obj=>{ 
        let item = {
            title : obj.name , 
            details : obj.details , 
            img : obj.img , 
            date : obj.date , 
            JournalNumber : obj.JournalNumber , 
            key : obj.key , 
            isAborad : obj.isAbroad
        }
        return <Card {...item} /> 

    });

    return ( 
        <div className="container">

            {/* <Navbar/> */}
            <About/>
            {CardContainer}
        </div>
    );
}

export default App;