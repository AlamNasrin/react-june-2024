import { useEffect, useRef } from "react";

function Login() {

    const userNameRef = useRef<HTMLInputElement>(null);
    // useEffect(callback, [dependencies]);

    //useEffect(() => {}, []); 
    // If dependency list is empty, callback will happen only once i.e. during mounting
    // If dependency list is not empty, callback will happen for every specified condition i.e. page will be rerendered
    
    useEffect(() => {
        console.log("Component mounted"); // React.StrictMode in index.tsx causes mounting to be called twice
        userNameRef.current?.focus();
    }, []);
    function handleLogin() {

    }

    return (
        <div>
            <h4>Login</h4>
            <div></div>
            <form>
                <div>
                    <label htmlFor="name">User Name</label>
                    <input ref = {userNameRef} type="text" id = "name" placeholder="UserName"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id = "password" placeholder="*****"/>
                </div>
                <div>
                    <button type="button" onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;