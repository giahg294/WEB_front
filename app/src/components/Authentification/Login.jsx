import React, { useState} from "react";
import { useNavigate } from "react-router";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 
    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:4000/api/users/login", {
                method : 'POST',
                headers:  {'Content-Type':'application/json'},
                credentials: "include",
                body: JSON.stringify({username, password}),
            },{
            });

            const res = await response.json();
            if (response.ok) {
                navigate("/admin/annual");
              } else {
                const errorText = await response.text();
                setError(errorText || "Invalid credentials");
              }
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
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </div>      
    );
};

export default Login;