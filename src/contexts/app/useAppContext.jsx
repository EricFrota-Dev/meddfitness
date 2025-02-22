import { createContext, useContext } from "react";

export const Context = createContext();

export const Provider = Context.Provider

export default function useAppContext  () {
    const context = useContext(Context)
    return context
} ;
