import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";


const App = () => (
    <>
      <h1> LIST OF TOP 5 NETFLIX SERIES </h1>
        {Sdata.map((val) => {
            return(
                <Card 
                key={val.id}
                imgscr={val.imgscr}
                sname={val.sname}
                title={val.title} 
                link={val.link}
              />
            );
        })}
    </>
);

export default App;