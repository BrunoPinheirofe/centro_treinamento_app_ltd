import React, { createContext, useState, useEffect, useContext } from "react";


export const AuthContext = createContext();

export function useAuth(){
    const context = useContext(AuthContext);
    if (!context){
        throw new Error("o useAuth deve ser usando dentro ");
    }
    return context;
}

export default function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const singIn = ()=>{
        // TODO:Logica de login com api

        // simulando login 
        setTimeout(() => {
            setUser({
                nome:"Joãozinho da Silva",
                role:"aluno",
                imageUrl:"https://cdn.discordapp.com/attachments/1201568893412589689/1342515633442787379/1krCU91.png?ex=67d4f15d&is=67d39fdd&hm=4a706fdfae439d5429ed7cd278e9d26aaf6b063c5577a7305bbf4826b0e2e3aa&",
                email:"joao@example.com",
                id:1,
                matricula:"123456"
            })
        }, 1000);
    }

    const singOut = ()=>{
        setUser(null);
    }

    const singUp = (email, password, matricula)=>{
        // TODO:Logica de cadastro com api

        // simulando cadastro
        setTimeout(() => {
            setUser({
                email,
                password,
                matricula,
                nome:"Joãozinho da Silva",
                role:"aluno",
                imageUrl:"https://cdn.discordapp.com/attachments/1201568893412589689/1342515633442787379/1krCU91.png?ex=67d4f15d&is=67d39fdd&hm=4a706fdfae439d5429ed7cd278e9d26aaf6b063c5577a7305bbf4826b0e2e3aa&",
                id:1
            })
        }, 1000);
    }

    return(
        <AuthContext.Provider
        value={{
            signed: !!user,
            user,
            error,
            singIn,

            
        }}
        >
            {children}
        </AuthContext.Provider>
    );
}