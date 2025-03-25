import React from 'react'; 
import { Card } from '@/components/ui/card'; 
import { Text } from '@/components/ui/text'; 
import { Heading } from '@/components/ui/heading';

const CardExercise = () => { 
    return (
        <Card size="lg" variant="filled" className="border-2 m-7 p-5 border-[#bdbbbb]">
            <Heading className="text-2xl font-bold pb-2">Treino do dia</Heading>
            <Text className="text-lg">Nenhum treino registrado no dia</Text>
        </Card>
    );
};

export default CardExercise;
