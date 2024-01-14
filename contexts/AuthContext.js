import React, {createContext, useContext, useEffect, useState} from "react";

const AuthContext = createContext()

export function useAuth(){
    const auth = useContext(AuthContext);
    return auth
}

export function AuthProvider({children}){
    const [isLoggedIn, setLoggedIn] = useState(false);
    const login=()=>{
        localStorage.setItem('token','abrakadabra')
        setLoggedIn(true);
    }
    const logout=()=>{
        localStorage.removeItem('token')
        setLoggedIn(false);
    }
    useEffect(()=>{
        const token = localStorage.getItem('token');
        setLoggedIn(!!token);
    },[])
    return <AuthContext.Provider value={{isLoggedIn,login,logout}}>{children}</AuthContext.Provider>
}