import { createStackNavigator } from "@react-navigation/stack";
import StudentDashboard from "../screens/dashboard/StudentDashboard";
import TrainerDashboard from "../screens/dashboard/TrainerDashboard";
import AdminDashboard from "../screens/dashboard/AdminDashboard";

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "#2B2B2B" }
    }}
  >
    <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
    <Stack.Screen name="TrainerDashboard" component={TrainerDashboard} />
    <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
    
  </Stack.Navigator>
);

export default MainNavigator; 