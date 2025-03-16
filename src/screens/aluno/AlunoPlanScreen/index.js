import React from 'react';


import { SafeAreaView } from 'react-native-safe-area-context';
import { Heading } from '@/components/ui/heading';
import CardPlan from '@/src/components/common/plan/cardPlan';
const AlunoPlanScreen = () => {
    return <SafeAreaView>
        <Heading size={"3xl"} >Informações Financeiro</Heading>
        <CardPlan price={150.00} status={'pago'} date={'10-02-2025'}/>

        
    </SafeAreaView>;
};
export default AlunoPlanScreen;