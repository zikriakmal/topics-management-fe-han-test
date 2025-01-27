import { createContext } from "react";

const Context = createContext<{
    lang: string,
    setLang: (lang: string) => void,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void,
    accessToken: string,
    setAccessToken: (accessToken: string) => void,
} | undefined>(undefined);

export default Context;