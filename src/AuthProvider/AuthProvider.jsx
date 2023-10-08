/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
import app from "../Firebase/Firebase.confing";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
  
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

  

    const authInfo = {
        user,
        createUser,
        singIn


    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;