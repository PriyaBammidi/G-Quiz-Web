import React, { useState,useEffect} from 'react';
import firebase from "./firebaseApp";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(setCurrentUser);

    }, []);

    return(
        <AuthContext.Provider
        value={{
            currentUser
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};
