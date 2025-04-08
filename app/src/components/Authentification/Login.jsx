import React, { useState} from "react";
import { useNavigate } from "react-router";
import back_port from "../../connexion";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 
    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await fetch(back_port()+"/api/users/login", {
                method : 'POST',
                headers:  {'Content-Type':'application/json'},
                credentials: "include",
                body: JSON.stringify({username, password}),
            },{
            });

            console.log(response);
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