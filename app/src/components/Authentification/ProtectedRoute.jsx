import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute ({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await fetch("http://localhost:4000/api/users/admin/dashboard", {
                    method : 'GET',
                    //headers:  {'Content-Type':'application/json'},
                    //body: JSON.stringify({username, password}),
                    credentials: "include"
                });
                setIsAuthenticated(true);
            } catch (err) {
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);

    if (isAuthenticated === null) {
        return <div>Chargement...</div>; 
    }

    return isAuthenticated ? children : <Navigate to="/admin" />;
};

export default ProtectedRoute;
