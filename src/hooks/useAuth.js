import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = ()=>{
    const context = useContext(AuthContext);
    if (!context){
        throw new Error("o useAuth deve ser usando dentro ");
    }
    return context;
}