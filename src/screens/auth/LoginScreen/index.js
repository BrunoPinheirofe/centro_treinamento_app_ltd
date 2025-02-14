
import { Text, View , a} from "react-native"
import styles from "./styles"
export default function LoginScreen() {
    return (
        <View style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Text
            style={{ fontSize: 24, color: "red" }}
            >
                Tela de Login
            </Text>
            <a/>

        </View>
    )

}