import {createContext, useContext} from "react";
export const SiteContext = createContext();
export const AuthContext = createContext();
export const useSite = () => useContext(SiteContext);
export const useAuth = () => useContext(AuthContext);
