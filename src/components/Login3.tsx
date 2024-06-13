import { ChangeEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

import { useDispatch } from "react-redux";

function Login3() {

    const userNameRef = useRef<HTMLInputElement>(null);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(""); // to display error message
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Component mounted"); 
        userNameRef.current?.focus();
        return() => {
            console.log("Component unmounted");
        }
    }, []);    
    async function handleLogin() {
        if(userName && password) {
        setMessage("");
        const url = "http://localhost:9000/login";
        try {
                const response = await axios.post(url, {name: userName, password});
                console.log("success", response);

                dispatch({type: "login", payload: {
                    userName: userName,
                    accessToken: response.data.accessToken,
                    refreshToke: response.data.refreshToken
                }});
                setMessage("");

                navigate("/counter");
            } catch (error) {
                console.log("error", error);
                setMessage("Invalid credentials");

                dispatch({type: "logout"});
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

export default Login3;