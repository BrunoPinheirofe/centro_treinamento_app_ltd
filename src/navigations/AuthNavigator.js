import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/auth/LoginScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import ResetPasswordScreen from "../screens/auth/ResetPasswordScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "#2B2B2B" }
    }}
  >
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ animationEnabled: false }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{ animationEnabled: true }}
    />
    <Stack.Screen
      name="ForgotPassword"
      component={ForgotPasswordScreen}
      options={{ animationEnabled: true }}
    />
    <Stack.Screen
      name="ResetPassword"
      component={ResetPasswordScreen}
      options={{ animationEnabled: true }}
    />
  </Stack.Navigator>
);

export default AuthNavigator; 