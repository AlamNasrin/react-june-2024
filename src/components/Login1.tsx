import { ChangeEvent, useEffect, useRef, useState } from "react";
import axios from "axios";

function Login1() {

    const userNameRef = useRef<HTMLInputElement>(null);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(""); // to display error message

    useEffect(() => {
        console.log("Component mounted"); 
        userNameRef.current?.focus();
    }, []);
    
    function handleLogin() {
        if(userName && password) {
            // API call
            const url = "http://localhost:9000/login";
            axios
                .post(url, {name: userName, password}) // if key and value are same, need not pass the value in ES6
                //.then(() => {}, () => {}); // successs state followed by failure state
                .then((response) => {
                    console.log("success", response);
                }, (error) => {
                    console.log("error", error);
                })
        } else {
            setMessage("Enter the credentials");
        }
    }

    function handleUserName(evt: ChangeEvent<HTMLInputElement>) {
        const value = evt.target.value;
        setUserName(value);
    }

    function handlePassword(evt: ChangeEvent<HTMLInputElement>) {
        const value = evt.target.value;
        setPassword(value);
    }

    return (
        <div>
            <h4>Login</h4>
            {message ? <div style={{border: "1px solid red"}}>{message}</div> : null}
            <form>
                <div>
                    <label htmlFor="name">User Name</label>
                    <input ref = {userNameRef} type="text" id = "name" placeholder="UserName" value ={userName} 
                    onChange={handleUserName}
                    /> {/* Binding from state to control */}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id = "password" placeholder="*****" onChange={handlePassword}/>
                </div>
                <div>
                    <button type="button" onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login1;