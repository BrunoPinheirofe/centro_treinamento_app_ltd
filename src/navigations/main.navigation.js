import React from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./auth.navigation";
import AdminNavigator from "./admin.navigation";
import AlunoNavigator from "./aluno.navigation";
import InstrutorNavigator from "./instrutor.navigatio";
import { View, Text } from "react-native";
import { useAuth } from "../hooks/useAuth";

const MainNavigation = () => {
    const {signed, user, loadin} = useAuth()

    const renderNavigator = () => {
        if (!signed) {
            return <AuthNavigator />;
        }

        switch (role) {
            case "admin":
                return <AdminNavigator />;
            case "aluno":
                return <AlunoNavigator/>
            case "instrutor":
                return <InstrutorNavigator/>
            
            default:
                return (<View style={{justifyContent: "center", alignItems:"center",flex:1,}}>
                    <Text style={{fontSize:38}}>Algo deu errado 😥</Text>
                </View>);
        }
    };

    return (
        <NavigationContainer>
            {renderNavigator()}
        </NavigationContainer>
    );
};

export default MainNavigation;