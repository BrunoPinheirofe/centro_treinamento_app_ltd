import React from 'react'; import { Card } from '@/components/ui/card'; import { Text } from '@/components/ui/text'; import { Heading } from '@/components/ui/heading';

const CardPlan = ({ status, price, date}) => {
    return <Card size={"lg"} variant={"elevated"} style={{margin:"20"}}>
        <Heading size="4xl" className={'mb-1'}>
            {price}
        </Heading>
        <Text size="2xl">situação:{status}</Text>
        <Text size="2xl">{date}</Text>
        
    </Card>;
};

export default CardPlan;