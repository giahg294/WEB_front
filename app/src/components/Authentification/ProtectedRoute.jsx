import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import back_port from "../../connexion";

function ProtectedRoute ({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await fetch(back_port()+"/api/users/admin/dashboard", {
                    method : 'GET',
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
