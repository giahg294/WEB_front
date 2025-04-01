import React, { useState} from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e){
        e.preventDefault();
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