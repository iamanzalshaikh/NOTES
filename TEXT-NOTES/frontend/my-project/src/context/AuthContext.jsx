// src/context/AuthContext.js
import React, { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const serverUrl = "https://notes-4oha.onrender.com";

    return (
        <AuthContext.Provider value={{ serverUrl }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
