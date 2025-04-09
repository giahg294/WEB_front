import React, { useState} from "react";
import { useNavigate } from "react-router";
import back_port from "../../connexion";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await fetch(back_port()+"/api/users/login", {
                method : 'POST',
                headers:  {'Content-Type':'application/json'},
                credentials: "include",
                body: JSON.stringify({username, password}),
            });

            if (response.ok) {
                navigate("/admin/annual");
            } 
            
            else {
                const errorText = await response.text();
                setError(errorText || "Invalid credentials, please try again.");
            }
        } 
        catch (err) {
            setError("Connexion to server impossible, please try later");
            console.error("Login failed:", err);
        }
        finally {
            setLoading(false);
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
                    disabled={loading}
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
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