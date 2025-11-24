import React, { useState, useEffect, useRef } from "react";

const User = (props) => {
    const [planet, setPlanet] = useState(null);
    const prevPlanetRef = useRef(null);

    useEffect(() => {
        setPlanet("Mars"); 
    }, []);

    useEffect(() => {
    if(prevPlanetRef.current !== planet) {
    console.log(`Planet changed to: ${planet} from ${   prevPlanetRef.current}`);
    }
    prevPlanetRef.current = planet;
    console.log(prevPlanetRef.current);
    }, [planet])

    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p>{`I am from ${planet}`}</p>
            <button onClick={()=>{setPlanet("Earth")}}>Change Planet</button>
        </div>
    )
};

export default User;