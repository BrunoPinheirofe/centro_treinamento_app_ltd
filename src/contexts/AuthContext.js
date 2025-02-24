import React, { createContext, useContext, useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            const savedUser = await AsyncStorage.getItem('@user');
            if (savedUser) setUser(JSON.parse(savedUser));
        };
        loadUser()

    }, []);
    const signIn = async (creadencials) => {

        // simular login -> substituir por api
        const mockUser = {
            id: '1',
            nome: 'Bruno',
            role: 'aluno',
            token: 'afduihasdghl142'
        }
        setUser(mockUser);
        await AsyncStorage.setItem('@user', JSON.stringify(mockUser))
    };

    const signOut = async () => {
        setUser(null);
        await AsyncStorage.removeItem('@user');
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth= ()=>useContext(AuthContext);