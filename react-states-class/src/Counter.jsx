import { useState } from "react";

export default function Counter() {
    let [count , setCount] = useState(0); //intialization
    console.log("Component is rendered!");
    console.log(`counter = ${count}`);
    let incCount = () => {
        setCount(count + 1);
    };

    
     return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
     );
}



