import { NavigationContainer } from "@react-navigation/native";

import { AuthNavigator } from "./navigations/AuthNavigator";
import { useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";

const isload = false
const MainNavigator = () =>{
  if(!isload){
    return <AuthNavigator/>
  }
  


}

export default function App(){
  return(
    <AuthProvider>
      <NavigationContainer>
        <MainNavigator/>
      </NavigationContainer>
    </AuthProvider>
  )
}