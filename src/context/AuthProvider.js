import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser]=useState({});
    const auth = getAuth(app);

    // google sign in ----------
    const googleSingIn =()=>{
        return signInWithPopup(auth, googleProvider );
    }
    // create user 
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    } 
    // login user with email and password
    const loginUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign out 
    const loginOut = ()=>{
        return signOut(auth);
    }
    // user update 
    const updateUser =(name)=>{
        return updateProfile(auth.currentUser,{displayName:name})
    }

    // get current user 
    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        });
        return ()=>unsubscribe();

    },[]);
    const userAuthInfo ={user, googleSingIn, createUser, loginUser, updateUser,  loginOut };

    // main component
    return (
        <AuthContext.Provider value={userAuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;