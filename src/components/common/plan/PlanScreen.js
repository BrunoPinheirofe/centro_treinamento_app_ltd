import { useAuth } from "@/src/contexts/AuthContext";
import CardPlan from "./cardPlan";
import CardPlanPending from "./CardPlanPending";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { HStack } from "@/components/ui/hstack";
import { Alert } from "react-native";
import { ScrollView } from "react-native";

const PlanScreen = () => {
    return ( 
        <SafeAreaView>
            <ScrollView>
                <Text className="text-2xl pl-6">Informações financeiras:</Text>
                <CardPlan status="Ativo" price="150" date="18/03/2020"/>

                <Text className="text-2xl pl-6">Próximo pagamento:</Text>
                <CardPlanPending status="Pendente" price="150" date="18/04/2020"/> 
            </ScrollView>
        </SafeAreaView>
     );
}
 
export default PlanScreen;