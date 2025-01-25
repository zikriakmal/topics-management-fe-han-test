import { createContext } from "react";

const Context = createContext<{
    lang: string,
    setLang: (lang: string) => void,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void,
} | undefined>(undefined);

export default Context;