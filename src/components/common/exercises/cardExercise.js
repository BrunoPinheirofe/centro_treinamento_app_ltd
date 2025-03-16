import React from 'react'; import { Card } from '@/components/ui/card'; import { Text } from '@/components/ui/text'; import { Heading } from '@/components/ui/heading';

const CardExercise = ({ }) => {
    return <Card size={"lg"} variant={"filled"}>
        <Heading size="md" className={'mb-1'}>
            
        </Heading>
        <Text size="sm">Start building your next project in minutes</Text>
    </Card>;
};
export default CardExercise;