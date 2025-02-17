import ForgotPasswordScreen from './src/screens/auth/ForgotPasswordScreen';
import SignUpScreen from './src/screens/auth/SignUpScreen';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        {/* ... outras rotas ... */}
      </Stack.Navigator>
    </NavigationContainer>
  );
} 