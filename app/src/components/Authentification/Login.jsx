import React, { useState} from "react";
import { useNavigate } from "react-router";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 
    

    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:4000/api/users/login", {
                method : 'POST',
                headers:  {'Content-Type':'application/json'},
                body: JSON.stringify({username, password}),
            },{
                withCredentials: true
            });

            const res = await response.json();
            window.location.href = "/admin/annual";
        } 
        catch (err) {
            setError("Invalid credentials, please try again.");
            console.error("Login failed:", err);
        }
    };
 
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">
                    Login
                </button>
            </form>
        </div>      
    );
};

export default Login;