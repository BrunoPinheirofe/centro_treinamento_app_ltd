import React from 'react'; 
import { Card } from '@/components/ui/card'; 
import { Text } from '@/components/ui/text'; 
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Alert } from 'react-native';

const CardPlanPending = ({ status, price, date}) => {
    return <Card size={"lg"} variant={"elevated"} style={{margin:"20"}} className="bg-white border-2 border-[#bdbbbb]">
        <Text size="2xl" className="text-center text-black border-5 rounded-lg border-[#bdbdbd] bg-[#bdbdbd]">Situação: {status}</Text>
        <Heading size="4xl" className="text-center p-7">
            {price},00R$
        </Heading>
        <Text size="xl" className="text-center pb-7">Vencimento em: {date}</Text>
        <Button className="w-50 bg-[#ED5359] m-3 border-[#ed5359] rounded-2xl" onPress={() => Alert.alert('Efetuar pagamento')}>
            <Text className="text-white">Efetuar pagamento</Text>
        </Button>
        
    </Card>;
};

export default CardPlanPending;