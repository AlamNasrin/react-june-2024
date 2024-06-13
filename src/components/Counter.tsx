// Option 3
import { count } from "console";
import { useState, useEffect } from "react";

type CounterProps = {
    initialValue?: number
}
// function Counter(props: CounterProps) {
//     return(
//         <div>
//             <h4>Count: 0</h4>
//         </div>
//     )
// }

// Option 1: Throws Error
const Counter = (props: CounterProps) => {

// Option 2: Creating a local variable
//let counter = props.initialValue;

// Option 3
const [counter, setCounter] = useState(props.initialValue);
// returns an array of 2 elements: a variable with state and a function to update the state
// const counter = arr[0];
// const setCounter = arr[1];
// Destructuring

// Option 4
useEffect(() => {
    console.log("counter updated: ", counter);
}, [counter]);
    function inc() {
        console.log("increment invoked");
        //Option 1: Following code will throw error since props is read-only
        /*
        if(props.initialValue) {
            props.initialValue++;
        }
        */

        // Option 2: Does not update the UI
        /*
        if(counter) {
            counter++;
            console.log("counter: ", counter);
        }
        */

       // Option 3
       if(counter !== undefined) {
        setCounter(counter + 1); // This is asynchronous, hence the count increments after the console logs the value
        console.log("counter: ", counter);
       }
    }

    function dec() {
        if(counter !== undefined) {
            setCounter(counter - 1);
            console.log("counter: ", counter);
        }
    }
    return(
        <div>
            {/* <h4>Count: {props.initialValue}</h4> */}
            <h4>Count: {counter}</h4>
            <div>
                <button onClick={inc}>Increment</button>
                <button onClick={dec}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter;