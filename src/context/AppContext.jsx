import { useState,useEffect,createContext } from "react";


export const AppContext = createContext();

// Children refers to whatever you place inside the <AppProvider> component when you use it in your JSX.
export const AppProvider = ({ children }) => {
    // get data for user localstorage
    const [user, setUser] = useState(

        // if user is present then paese it and store in user object if not then initialize it null
        JSON.parse(localStorage.getItem("user")) || {}
    );

    const [selectedGenre, setSelectedGenre] = useState(
        // if selectGener if present the parse and store it selectGener object if not then initialize it empty array 
        JSON.parse(localStorage.getItem("selectedGenre")) || []
    );

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(user));
    },[user]);

    useEffect(()=>{
        localStorage.setItem("selectedGenre",JSON.stringify(selectedGenre));
    },[selectedGenre]);

    return (
        <AppContext.Provider value={{
            user,
            setUser,
            selectedGenre,
            setSelectedGenre,

        }}>
            {children}
        </AppContext.Provider>
    )

}

