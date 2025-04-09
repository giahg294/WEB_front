import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import back_port from "../../connexion";

function ProtectedRoute ({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Récupérer le token depuis localStorage
                const token = localStorage.getItem('access_token');
                
                if (!token) {
                    console.log("No token found");
                    setIsAuthenticated(false);
                    return;
                }

                const res = await fetch(back_port()+"/api/users/admin/dashboard", {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}` // Envoyer le token dans l'en-tête
                    }
                });
                
                console.log(res);
                if(res.ok) {
                    setIsAuthenticated(true);
                }
                else {
                    setIsAuthenticated(false);
                }
            } catch (err) {
                console.error("Erreur de vérification d'authentification:", err);
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