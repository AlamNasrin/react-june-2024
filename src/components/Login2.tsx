import { ChangeEvent, useEffect, useRef, useState } from "react";
import axios from "axios";

function Login2() {

    const userNameRef = useRef<HTMLInputElement>(null);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(""); // to display error message

    useEffect(() => {
        console.log("Component mounted"); 
        userNameRef.current?.focus();
    }, []);
    
    async function handleLogin() {
        if(userName && password) {
            // API call
            const url = "http://localhost:9000/login";
            try {
                const response = await axios.post(url, {name: userName, password});
                console.log("success", response);
            } catch (error) {
                console.log("error", error);
                setMessage("Invalid credentials");
            }
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

export default Login2;