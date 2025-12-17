import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './firebase/firebase.init';



const provider = new GoogleAuthProvider();
const auth = getAuth(app);
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    };

    const signInWithGoogle =() =>{
        signInWithPopup(auth, provider)
    }

    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const updateUser =(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const logOut =()=>{
        return signOut(auth);
    }

   
    const authData ={
        user,
        setUser,
        createUser,
        logIn,
        signInWithGoogle,
        updateUser,
        logOut,
        loading,
    }
    return <AuthContext value ={authData}>{children}</AuthContext>
};

export default AuthProvider;