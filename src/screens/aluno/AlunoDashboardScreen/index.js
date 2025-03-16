import React from "react";
import { View,Text, StyleSheet } from "react-native";
import { useAuth } from "../../../contexts/AuthContext";


const AlunoDashboardScreen = () => {

  const {user} = useAuth()
  return(
<View style={{flex:1, flexDirection: 'row', alignItems:"center", justifyContent:"center"}}>
      <Text>
        Ola {user.nome}
      </Text>
    </View>
  )
  }


export default AlunoDashboardScreen;