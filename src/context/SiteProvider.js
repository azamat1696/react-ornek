import React, {useReducer, useState} from 'react'
import {AuthContext,SiteContext} from "./SiteContext";
import siteReducer from "../reducers/siteReducer";
import authReducer from "../reducers/authReducer";
 export function ProviderSite ({children}){
     const [state,dispatch] = useReducer(siteReducer,{
         theme: 'light',
         language:'tr'
     })
    // const [theme, setTheme] = useState('light');
    // const [language,setLanguage] = useState('tr');
    const data = {
         ...state,
        dispatch
    }
    return(
        <SiteContext.Provider value={data}>
            {children}
        </SiteContext.Provider>
    )
}

export  function ProviderAuth({children}) {
    const [state, dispatch] = useReducer(authReducer,{
        user: false,
    })

    const data ={
        ...state,
        dispatch
    }
     return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}
