import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    console.log(user);

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const logOut = ()=>{
        return signOut(auth);
    }

    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe
        }
    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        logIn
    };
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;