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
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
       return signOut(auth)
    }

    useEffect(() => {
     const unsubscribe=  onAuthStateChanged(auth, currentuser =>{
        console.log("user in the currnet auth change", currentuser)
        setUser(currentuser)
        setLoading(false);
     })
     return () =>{
        unsubscribe

     }
    }, [])
    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    const authInfo = {
        user,
        createUser,
        singIn,
        logOut,
        loading


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;