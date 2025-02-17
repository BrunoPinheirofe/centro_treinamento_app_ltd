import { KeyboardAvoidingView, Text, View, Keyboard, Image, Platform, TouchableOpacity } from "react-native"
import { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import LoginForm from "../../../forms/LoginForm"
import styles from "./styles"


export default function LoginScreen() {
  const [isKeybordVisible, setisKeybordVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setisKeybordVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setisKeybordVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios"? "padding": "height"} style={styles.container}>
      <View style={styles.containerLogin}>
        <View style={styles.header}>
          {
            !isKeybordVisible ? <Image source={require("../../../assets/images/frame-login-page.png")} /> : null
          }
          <Text style={styles.textLogin}>Bem-vindo(a)!</Text>
        </View>
        <LoginForm
          onSubmit={() => { alert("opa"); }} />

        <View style={styles.linksContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
            style={styles.link}
          >
            <Text style={styles.linkText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={styles.link}
          >
            <Text style={styles.linkText}>
              Não tem uma conta? <Text style={styles.linkHighlight}>Voltar para o login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};