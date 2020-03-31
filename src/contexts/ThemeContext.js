import React,{ createContext, useReducer, useEffect } from "react";
import { colorReducer } from "../reducers/colorReducer";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    const [theme, themeDispatch] = useReducer(colorReducer, {
        currentTheme:"LIGHT",
        div:".light",
        btn:".light-btn",
        input:".light-input",
        background:".light-bg",
        body: "#eaeaea"
    }, () => {
        const localData = localStorage.getItem('theme');
        return localData ? JSON.parse(localData) : {
            currentTheme:"LIGHT",
            div:".light",
            btn:".light-btn",
            input:".light-input",
            background:".light-bg",
            body: "#eaeaea"
        };
    });

    useEffect(()=>{
        localStorage.setItem('theme',JSON.stringify(theme));
        document.body.style.backgroundColor = theme.body
    }, [theme]);

    return(
        <ThemeContext.Provider value={{theme, themeDispatch}}>
        {props.children}
        </ThemeContext.Provider>

    )


}
export default ThemeContextProvider;