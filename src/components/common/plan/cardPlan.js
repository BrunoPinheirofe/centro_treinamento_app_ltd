import React from 'react'; 
import { Card } from '@/components/ui/card'; 
import { Text } from '@/components/ui/text'; 
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Alert } from 'react-native';

const CardPlan = ({ status, price, date}) => {
    return <Card size={"lg"} variant={"elevated"} style={{margin:"20"}} className="bg-white border-2 border-[#bdbbbb]">
        <Text size="2xl" className="text-center text-black border-5 rounded-lg border-[#1F951D] bg-[#1F951D]">Situação: {status}</Text>
        <Heading size="4xl" className="text-center p-5">
            {price},00R$
        </Heading>
        <Text size="xl" className="text-center pb-7">Mensalidade paga em: {date}</Text>
        <Button className="w-50 bg-[##ED5359] m-3 border-[#ed5359] rounded-2xl" onPress={() => Alert.alert('Histórico de pagamento')}>
            <Text className="text-white">Ver informações</Text>
        </Button>
        <Button className="w-50 bg-[##ED5359] m-3 border-[#ed5359] rounded-2xl" onPress={() => Alert.alert('Realizar pagamento')}>
            <Text className="text-white">Realizar pagamento</Text>
        </Button>
    </Card>;
};

export default CardPlan;