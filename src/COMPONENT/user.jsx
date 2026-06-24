import React, { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";


const userContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });


    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(userContext);
    return context;

}