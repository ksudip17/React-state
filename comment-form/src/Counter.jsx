import { useState , useEffect } from "react";

export default function Counter () {

    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let incCountx = () => {
        setCountx(currCount => currCount +1);
    };

    let incCounty = () => {
        setCounty(currCount => currCount +1);
    };



    useEffect(function printSomething () {
        console.log("this is a side-effect");
    }, [countx]);

    return (
        <div>
            <h2>Count = {countx} </h2>
            <button onClick={incCountx}>+1</button>
            <br />
            <h2>Count = {county} </h2>
            <button onClick={incCounty}>+1</button>
        </div>
    );
}