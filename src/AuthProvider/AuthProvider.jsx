/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { useState } from "react";
import app from "../Firebase/Firebase.confing";
import { useEffect } from "react";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
       return signOut(auth)
    }

    useEffect(() => {
     const unsubscribe=  onAuthStateChanged(auth, currentuser =>{
        console.log("user in the currnet auth change", currentuser)
        setUser(currentuser)
     })
     return () =>{
        unsubscribe
     }
    }, [])
    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    const authInfo = {
        user,
        createUser,
        singIn,
        logOut


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;